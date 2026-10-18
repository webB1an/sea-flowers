// 共享浏览器定位/启动助手（capture / bench 使用；CI smoke 也可逐步切换到这里）
'use strict';
const fs = require('fs');
const puppeteer = require('puppeteer-core');

const CANDIDATES = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser',
];

function findChrome() {
  if (process.env.CHROME_PATH && fs.existsSync(process.env.CHROME_PATH)) return process.env.CHROME_PATH;
  return CANDIDATES.find((p) => fs.existsSync(p)) || null;
}

async function launch({ gpu = true, timeout = 300000 } = {}) {
  const executablePath = findChrome();
  if (!executablePath) throw new Error('找不到 Chrome/Edge，请设置 CHROME_PATH');
  const args = [
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu-sandbox',
    '--disable-dev-shm-usage',
    '--allow-file-access-from-files',
    '--hide-scrollbars',
    '--mute-audio',
    '--disable-background-timer-throttling',
  ];
  if (gpu) args.push('--ignore-gpu-blocklist', '--enable-gpu-rasterization');
  else args.push('--use-angle=swiftshader', '--enable-unsafe-swiftshader');
  const browser = await puppeteer.launch({ executablePath, headless: true, protocolTimeout: timeout, args });
  return { browser, executablePath };
}

async function gpuInfo(page) {
  try {
    return await page.evaluate(() => {
      const c = document.querySelector('canvas');
      const gl = c && (c.getContext('webgl2') || c.getContext('webgl'));
      const ext = gl && gl.getExtension('WEBGL_debug_renderer_info');
      return gl ? (ext ? String(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL)) : String(gl.getParameter(gl.RENDERER))) : null;
    });
  } catch (e) { return null; }
}

module.exports = { findChrome, launch, gpuInfo };
