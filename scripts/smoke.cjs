// CI / 本地冒烟：加载 index.html?ui=0，断言 WebGL2 可用、画面非空、无 console error / pageerror。
// 用法：node scripts/smoke.cjs（可用 CHROME_PATH 指定浏览器，否则自动查找常见路径）
'use strict';
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const puppeteer = require('puppeteer-core');

function findChrome() {
  if (process.env.CHROME_PATH && fs.existsSync(process.env.CHROME_PATH)) return process.env.CHROME_PATH;
  const list = [
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser',
  ];
  return list.find((p) => fs.existsSync(p)) || null;
}

function report(diag, message) {
  // GitHub Actions 会把这些行解析成 annotation，方便在没有日志访问权限时定位失败
  console.log('::error::' + message + ' ' + JSON.stringify(diag).replace(/\r?\n/g, ' ').slice(0, 3000));
}

process.on('unhandledRejection', (e) => {
  report({ error: String((e && e.stack) || e) }, 'SMOKE_UNHANDLED');
  process.exit(2);
});

(async () => {
  const chrome = findChrome();
  const diag = { chrome, chromeExists: !!(chrome && fs.existsSync(chrome)), cwd: process.cwd() };
  let browser = null;
  try {
    console.log('chrome: ' + chrome);
    browser = await puppeteer.launch({
      executablePath: chrome || undefined,
      headless: true,
      protocolTimeout: 120000,
      args: [
        '--no-sandbox',
        '--disable-gpu-sandbox',
        '--disable-dev-shm-usage',
        '--use-angle=swiftshader',
        '--enable-unsafe-swiftshader',
        '--ignore-gpu-blocklist',
        '--allow-file-access-from-files',
        '--hide-scrollbars',
        '--mute-audio',
        '--disable-background-timer-throttling',
      ],
    });
    const errors = [];
    const warnings = [];
    const pageErrors = [];
    const page = await browser.newPage();
    page.on('console', (m) => {
      const entry = m.type() + ': ' + m.text();
      if (m.type() === 'error') errors.push(entry);
      else if (m.type() === 'warning') warnings.push(entry);
    });
    page.on('pageerror', (e) => pageErrors.push('pageerror: ' + e.message));
    await page.setViewport({ width: 1280, height: 720, deviceScaleFactor: 1 });
    const url = pathToFileURL(path.join(process.cwd(), 'index.html')).href + '?ui=0';
    console.log('navigating: ' + url);
    await page.goto(url, { waitUntil: 'load', timeout: 60000 });
    await page.waitForFunction(() => {
      const c = document.querySelector('canvas');
      if (!c) return false;
      try { return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch (e) { return false; }
    }, { timeout: 60000, polling: 500 });
    await new Promise((resolve) => setTimeout(resolve, 6000));
    diag.info = await page.evaluate(() => {
      const c = document.querySelector('canvas');
      const gl = c && (c.getContext('webgl2') || c.getContext('webgl'));
      const ext = gl && gl.getExtension('WEBGL_debug_renderer_info');
      const fatal = document.getElementById('fatal');
      return {
        webgl2: !!(c && c.getContext('webgl2')),
        width: gl ? gl.drawingBufferWidth : 0,
        height: gl ? gl.drawingBufferHeight : 0,
        gpu: ext && gl ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : (gl ? gl.getParameter(gl.RENDERER) : null),
        title: document.title,
        fatalVisible: !!fatal && getComputedStyle(fatal).display !== 'none',
        status: (document.getElementById('status') || {}).textContent || '',
      };
    });
    diag.errors = errors.slice(0, 20);
    diag.pageErrors = pageErrors.slice(0, 10);
    diag.warnings = warnings.slice(0, 20);
    if (!diag.info.webgl2) throw new Error('WebGL2 context is unavailable');
    if (!diag.info.width || !diag.info.height) throw new Error('Canvas drawing buffer is empty');
    if (diag.info.fatalVisible) throw new Error('Page shows fatal WebGL error overlay');
    if (pageErrors.length) throw new Error('Page errors: ' + JSON.stringify(pageErrors.slice(0, 5)));
    if (errors.length) throw new Error('Console errors: ' + JSON.stringify(errors.slice(0, 5)));
    if (warnings.length) console.log('console warnings (non-fatal): ' + JSON.stringify(warnings.slice(0, 10)));
    console.log('SMOKE OK ' + JSON.stringify(diag.info));
  } catch (error) {
    diag.error = String((error && error.stack) || error);
    report(diag, 'SMOKE_FAIL');
    process.exitCode = 1;
  } finally {
    if (browser) {
      try { await browser.close(); } catch (e) { console.log('browser close failed: ' + e.message); }
    }
  }
})();
