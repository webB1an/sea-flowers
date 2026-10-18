(()=>{var jl=0,Eo=1,tc=2;var Is=1,ec=2,Yi=3,jn=0,De=1,Pe=2,Tn=0,Zi=1,$i=2,Ao=3,Co=4,nc=5;var mi=100,ic=101,sc=102,rc=103,ac=104,oc=200,lc=201,cc=202,hc=203,Ro=204,Po=205,uc=206,dc=207,fc=208,pc=209,mc=210,gc=211,vc=212,xc=213,_c=214,gr=0,vr=1,xr=2,ki=3,_r=4,yr=5,Sr=6,Mr=7,Io=0,yc=1,Sc=2,fn=0,Do=1,Lo=2,No=3,Uo=4,Fo=5,Oo=6,Bo=7;var zo=300,ti=301,gi=302,qr=303,Yr=304,Ds=306,br=1e3,tn=1001,wr=1002,ve=1003,Mc=1004;var Ls=1005;var me=1006,Zr=1007;var sn=1008;var Je=1009,ko=1010,Vo=1011,Ji=1012,$r=1013,Ke=1014,pn=1015,Be=1016,Jr=1017,Kr=1018,Ki=1020,Ho=35902,Go=35899,Wo=1021,Xo=1022,rn=1023,Sn=1026,ei=1027,qo=1028,Qr=1029,ni=1030,jr=1031;var ta=1033,Ns=33776,Us=33777,Fs=33778,Os=33779,ea=35840,na=35841,ia=35842,sa=35843,ra=36196,aa=37492,oa=37496,la=37488,ca=37489,Bs=37490,ha=37491,ua=37808,da=37809,fa=37810,pa=37811,ma=37812,ga=37813,va=37814,xa=37815,_a=37816,ya=37817,Sa=37818,Ma=37819,ba=37820,wa=37821,Ta=36492,Ea=36494,Aa=36495,Ca=36283,Ra=36284,zs=36285,Pa=36286;var ms=2300,Tr=2301,pr=2302,yo=2303,So=2400,Mo=2401,bo=2402;var bc=3200;var Yo=0,wc=1,mn="",qe="srgb",di="srgb-linear",gs="linear",te="srgb";var mr=7680;var Tc=519,Ec=512,Ac=513,Cc=514,Ia=515,Rc=516,Pc=517,Da=518,Ic=519,Dc=35044;var Zo="300 es",un=2e3,vs=2001;function Kh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Qh(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function xs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lc(){let i=xs("canvas");return i.style.display="block",i}var Ll={},Vi=null;function $o(...i){let t="THREE."+i.shift();Vi?Vi("log",t,...i):console.log(t,...i)}function Nc(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Dt(...i){i=Nc(i);let t="THREE."+i.shift();if(Vi)Vi("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Lt(...i){i=Nc(i);let t="THREE."+i.shift();if(Vi)Vi("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ui(...i){let t=i.join(" ");t in Ll||(Ll[t]=!0,Dt(...i))}function Uc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Fc={[gr]:vr,[xr]:Sr,[_r]:Mr,[ki]:yr,[vr]:gr,[Sr]:xr,[Mr]:_r,[yr]:ki},Mn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nl=1234567,fs=Math.PI/180,Hi=180/Math.PI;function Qi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]).toLowerCase()}function Zt(i,t,e){return Math.max(t,Math.min(e,i))}function Jo(i,t){return(i%t+t)%t}function jh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function tu(i,t,e){return i!==t?(e-i)/(t-i):0}function ps(i,t,e){return(1-e)*i+e*t}function eu(i,t,e,n){return ps(i,t,1-Math.exp(-e*n))}function nu(i,t=1){return t-Math.abs(Jo(i,t*2)-t)}function iu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function su(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function ru(i,t){return i+Math.floor(Math.random()*(t-i+1))}function au(i,t){return i+Math.random()*(t-i)}function ou(i){return i*(.5-Math.random())}function lu(i){i!==void 0&&(Nl=i);let t=Nl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function cu(i){return i*fs}function hu(i){return i*Hi}function uu(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function du(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function fu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function pu(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),u=a((t+n)/2),p=r((t-n)/2),h=a((t-n)/2),d=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*u,c*p,c*h,o*l);break;case"YZY":i.set(c*h,o*u,c*p,o*l);break;case"ZXZ":i.set(c*p,c*h,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*d,o*l);break;case"YXY":i.set(c*d,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*d,o*u,o*l);break;default:Dt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var gn={DEG2RAD:fs,RAD2DEG:Hi,generateUUID:Qi,clamp:Zt,euclideanModulo:Jo,mapLinear:jh,inverseLerp:tu,lerp:ps,damp:eu,pingpong:nu,smoothstep:iu,smootherstep:su,randInt:ru,randFloat:au,randFloatSpread:ou,seededRandom:lu,degToRad:cu,radToDeg:hu,isPowerOfTwo:uu,ceilPowerOfTwo:du,floorPowerOfTwo:fu,setQuaternionFromProperEuler:pu,normalize:Ve,denormalize:Bi},zt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},bn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],p=n[s+3],h=r[a+0],d=r[a+1],g=r[a+2],y=r[a+3];if(p!==y||c!==h||l!==d||u!==g){let m=c*h+l*d+u*g+p*y;m<0&&(h=-h,d=-d,g=-g,y=-y,m=-m);let f=1-o;if(m<.9995){let b=Math.acos(m),C=Math.sin(b);f=Math.sin(f*b)/C,o=Math.sin(o*b)/C,c=c*f+h*o,l=l*f+d*o,u=u*f+g*o,p=p*f+y*o}else{c=c*f+h*o,l=l*f+d*o,u=u*f+g*o,p=p*f+y*o;let b=1/Math.sqrt(c*c+l*l+u*u+p*p);c*=b,l*=b,u*=b,p*=b}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],p=r[a],h=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+u*p+c*d-l*h,t[e+1]=c*g+u*h+l*p-o*d,t[e+2]=l*g+u*d+o*h-c*p,t[e+3]=u*g-o*p-c*h-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),p=o(r/2),h=c(n/2),d=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=h*u*p+l*d*g,this._y=l*d*p-h*u*g,this._z=l*u*g+h*d*p,this._w=l*u*p-h*d*g;break;case"YXZ":this._x=h*u*p+l*d*g,this._y=l*d*p-h*u*g,this._z=l*u*g-h*d*p,this._w=l*u*p+h*d*g;break;case"ZXY":this._x=h*u*p-l*d*g,this._y=l*d*p+h*u*g,this._z=l*u*g+h*d*p,this._w=l*u*p-h*d*g;break;case"ZYX":this._x=h*u*p-l*d*g,this._y=l*d*p+h*u*g,this._z=l*u*g-h*d*p,this._w=l*u*p+h*d*g;break;case"YZX":this._x=h*u*p+l*d*g,this._y=l*d*p+h*u*g,this._z=l*u*g-h*d*p,this._w=l*u*p-h*d*g;break;case"XZY":this._x=h*u*p-l*d*g,this._y=l*d*p-h*u*g,this._z=l*u*g+h*d*p,this._w=l*u*p+h*d*g;break;default:Dt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],p=e[10],h=n+o+p;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(n>o&&n>p){let d=2*Math.sqrt(1+n-o-p);this._w=(u-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>p){let d=2*Math.sqrt(1+o-n-p);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+p-n-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ul.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ul.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),u=2*(o*e-r*s),p=2*(r*n-a*e);return this.x=e+c*l+a*p-o*u,this.y=n+c*u+o*l-r*p,this.z=s+c*p+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ja.copy(this).projectOnVector(t),this.sub(ja)}reflect(t){return this.sub(ja.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ja=new O,Ul=new bn,Ut=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],p=n[7],h=n[2],d=n[5],g=n[8],y=s[0],m=s[3],f=s[6],b=s[1],C=s[4],S=s[7],M=s[2],w=s[5],R=s[8];return r[0]=a*y+o*b+c*M,r[3]=a*m+o*C+c*w,r[6]=a*f+o*S+c*R,r[1]=l*y+u*b+p*M,r[4]=l*m+u*C+p*w,r[7]=l*f+u*S+p*R,r[2]=h*y+d*b+g*M,r[5]=h*m+d*C+g*w,r[8]=h*f+d*S+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],p=u*a-o*l,h=o*c-u*r,d=l*r-a*c,g=e*p+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=p*y,t[1]=(s*l-u*n)*y,t[2]=(o*n-s*a)*y,t[3]=h*y,t[4]=(u*e-s*c)*y,t[5]=(s*r-o*e)*y,t[6]=d*y,t[7]=(n*c-l*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return ui("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(to.makeScale(t,e)),this}rotate(t){return ui("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(to.makeRotation(-t)),this}translate(t,e){return ui("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(to.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},to=new Ut,Fl=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ol=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mu(){let i={enabled:!0,workingColorSpace:di,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===te&&(s.r=Un(s.r),s.g=Un(s.g),s.b=Un(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===te&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===mn?gs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ui("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ui("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[di]:{primaries:t,whitePoint:n,transfer:gs,toXYZ:Fl,fromXYZ:Ol,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:qe},outputColorSpaceConfig:{drawingBufferColorSpace:qe}},[qe]:{primaries:t,whitePoint:n,transfer:te,toXYZ:Fl,fromXYZ:Ol,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:qe}}}),i}var Yt=mu();function Un(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ti,Er=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ti===void 0&&(Ti=xs("canvas")),Ti.width=t.width,Ti.height=t.height;let s=Ti.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ti}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=xs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Un(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Un(e[n]/255)*255):e[n]=Un(e[n]);return{data:e,width:t.width,height:t.height}}else return Dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},gu=0,Gi=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=Qi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(eo(s[a].image)):r.push(eo(s[a]))}else r=eo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function eo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Er.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Dt("Texture: Unable to serialize Texture."),{})}var vu=0,no=new O,He=class i extends Mn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=tn,s=tn,r=me,a=sn,o=rn,c=Je,l=i.DEFAULT_ANISOTROPY,u=mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=Qi(),this.name="",this.source=new Gi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(no).x}get height(){return this.source.getSize(no).y}get depth(){return this.source.getSize(no).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Dt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Dt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case br:t.x=t.x-Math.floor(t.x);break;case tn:t.x=t.x<0?0:1;break;case wr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case br:t.y=t.y-Math.floor(t.y);break;case tn:t.y=t.y<0?0:1;break;case wr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=zo;He.DEFAULT_ANISOTROPY=1;var xe=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],u=c[4],p=c[8],h=c[1],d=c[5],g=c[9],y=c[2],m=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(p-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(p+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(l+1)/2,S=(d+1)/2,M=(f+1)/2,w=(u+h)/4,R=(p+y)/4,x=(g+m)/4;return C>S&&C>M?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=w/n,r=R/n):S>M?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=w/s,r=x/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=R/r,s=x/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(p-y)*(p-y)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(p-y)/b,this.z=(h-u)/b,this.w=Math.acos((l+d+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ar=class extends Mn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:me,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new He(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:me,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Gi(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ge=class extends Ar{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},_s=class extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ve,this.minFilter=ve,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Cr=class extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ve,this.minFilter=ve,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var oe=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,c,l,u,p,h,d,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,u,p,h,d,g,y,m)}set(t,e,n,s,r,a,o,c,l,u,p,h,d,g,y,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=p,f[14]=h,f[3]=d,f[7]=g,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ei.setFromMatrixColumn(t,0).length(),r=1/Ei.setFromMatrixColumn(t,1).length(),a=1/Ei.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let h=a*u,d=a*p,g=o*u,y=o*p;e[0]=c*u,e[4]=-c*p,e[8]=l,e[1]=d+g*l,e[5]=h-y*l,e[9]=-o*c,e[2]=y-h*l,e[6]=g+d*l,e[10]=a*c}else if(t.order==="YXZ"){let h=c*u,d=c*p,g=l*u,y=l*p;e[0]=h+y*o,e[4]=g*o-d,e[8]=a*l,e[1]=a*p,e[5]=a*u,e[9]=-o,e[2]=d*o-g,e[6]=y+h*o,e[10]=a*c}else if(t.order==="ZXY"){let h=c*u,d=c*p,g=l*u,y=l*p;e[0]=h-y*o,e[4]=-a*p,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*u,e[9]=y-h*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let h=a*u,d=a*p,g=o*u,y=o*p;e[0]=c*u,e[4]=g*l-d,e[8]=h*l+y,e[1]=c*p,e[5]=y*l+h,e[9]=d*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let h=a*c,d=a*l,g=o*c,y=o*l;e[0]=c*u,e[4]=y-h*p,e[8]=g*p+d,e[1]=p,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=d*p+g,e[10]=h-y*p}else if(t.order==="XZY"){let h=a*c,d=a*l,g=o*c,y=o*l;e[0]=c*u,e[4]=-p,e[8]=l*u,e[1]=h*p+y,e[5]=a*u,e[9]=d*p-g,e[2]=g*p-d,e[6]=o*u,e[10]=y*p+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xu,t,_u)}lookAt(t,e,n){let s=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),Vn.crossVectors(n,We),Vn.lengthSq()===0&&(Math.abs(n.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),Vn.crossVectors(n,We)),Vn.normalize(),$s.crossVectors(We,Vn),s[0]=Vn.x,s[4]=$s.x,s[8]=We.x,s[1]=Vn.y,s[5]=$s.y,s[9]=We.y,s[2]=Vn.z,s[6]=$s.z,s[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],p=n[5],h=n[9],d=n[13],g=n[2],y=n[6],m=n[10],f=n[14],b=n[3],C=n[7],S=n[11],M=n[15],w=s[0],R=s[4],x=s[8],T=s[12],P=s[1],I=s[5],z=s[9],k=s[13],N=s[2],L=s[6],F=s[10],q=s[14],J=s[3],V=s[7],W=s[11],Z=s[15];return r[0]=a*w+o*P+c*N+l*J,r[4]=a*R+o*I+c*L+l*V,r[8]=a*x+o*z+c*F+l*W,r[12]=a*T+o*k+c*q+l*Z,r[1]=u*w+p*P+h*N+d*J,r[5]=u*R+p*I+h*L+d*V,r[9]=u*x+p*z+h*F+d*W,r[13]=u*T+p*k+h*q+d*Z,r[2]=g*w+y*P+m*N+f*J,r[6]=g*R+y*I+m*L+f*V,r[10]=g*x+y*z+m*F+f*W,r[14]=g*T+y*k+m*q+f*Z,r[3]=b*w+C*P+S*N+M*J,r[7]=b*R+C*I+S*L+M*V,r[11]=b*x+C*z+S*F+M*W,r[15]=b*T+C*k+S*q+M*Z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],p=t[6],h=t[10],d=t[14],g=t[3],y=t[7],m=t[11],f=t[15],b=c*d-l*h,C=o*d-l*p,S=o*h-c*p,M=a*d-l*u,w=a*h-c*u,R=a*p-o*u;return e*(y*b-m*C+f*S)-n*(g*b-m*M+f*w)+s*(g*C-y*M+f*R)-r*(g*S-y*w+m*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],u=t[10];return e*(a*u-o*l)-n*(r*u-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],p=t[9],h=t[10],d=t[11],g=t[12],y=t[13],m=t[14],f=t[15],b=e*o-n*a,C=e*c-s*a,S=e*l-r*a,M=n*c-s*o,w=n*l-r*o,R=s*l-r*c,x=u*y-p*g,T=u*m-h*g,P=u*f-d*g,I=p*m-h*y,z=p*f-d*y,k=h*f-d*m,N=b*k-C*z+S*I+M*P-w*T+R*x;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/N;return t[0]=(o*k-c*z+l*I)*L,t[1]=(s*z-n*k-r*I)*L,t[2]=(y*R-m*w+f*M)*L,t[3]=(h*w-p*R-d*M)*L,t[4]=(c*P-a*k-l*T)*L,t[5]=(e*k-s*P+r*T)*L,t[6]=(m*S-g*R-f*C)*L,t[7]=(u*R-h*S+d*C)*L,t[8]=(a*z-o*P+l*x)*L,t[9]=(n*P-e*z-r*x)*L,t[10]=(g*w-y*S+f*b)*L,t[11]=(p*S-u*w-d*b)*L,t[12]=(o*T-a*I-c*x)*L,t[13]=(e*I-n*T+s*x)*L,t[14]=(y*C-g*M-m*b)*L,t[15]=(u*M-p*C+h*b)*L,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,p=o+o,h=r*l,d=r*u,g=r*p,y=a*u,m=a*p,f=o*p,b=c*l,C=c*u,S=c*p,M=n.x,w=n.y,R=n.z;return s[0]=(1-(y+f))*M,s[1]=(d+S)*M,s[2]=(g-C)*M,s[3]=0,s[4]=(d-S)*w,s[5]=(1-(h+f))*w,s[6]=(m+b)*w,s[7]=0,s[8]=(g+C)*R,s[9]=(m-b)*R,s[10]=(1-(h+y))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ei.set(s[0],s[1],s[2]).length(),o=Ei.set(s[4],s[5],s[6]).length(),c=Ei.set(s[8],s[9],s[10]).length();r<0&&(a=-a),on.copy(this);let l=1/a,u=1/o,p=1/c;return on.elements[0]*=l,on.elements[1]*=l,on.elements[2]*=l,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=p,on.elements[9]*=p,on.elements[10]*=p,e.setFromRotationMatrix(on),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=un,c=!1){let l=this.elements,u=2*r/(e-t),p=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s),g,y;if(c)g=r/(a-r),y=a*r/(a-r);else if(o===un)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===vs)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=p,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=un,c=!1){let l=this.elements,u=2/(e-t),p=2/(n-s),h=-(e+t)/(e-t),d=-(n+s)/(n-s),g,y;if(c)g=1/(a-r),y=a/(a-r);else if(o===un)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===vs)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=p,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ei=new O,on=new oe,xu=new O(0,0,0),_u=new O(1,1,1),Vn=new O,$s=new O,We=new O,Bl=new oe,zl=new bn,Yn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],p=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Zt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Bl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zl.setFromEuler(this),this.setFromQuaternion(zl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yn.DEFAULT_ORDER="XYZ";var ys=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},yu=0,kl=new O,Ai=new bn,Pn=new oe,Js=new O,cs=new O,Su=new O,Mu=new bn,Vl=new O(1,0,0),Hl=new O(0,1,0),Gl=new O(0,0,1),Wl={type:"added"},bu={type:"removed"},Ci={type:"childadded",child:null},io={type:"childremoved",child:null},en=class i extends Mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=Qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new O,e=new Yn,n=new bn,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new Ut}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ys,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.premultiply(Ai),this}rotateX(t){return this.rotateOnAxis(Vl,t)}rotateY(t){return this.rotateOnAxis(Hl,t)}rotateZ(t){return this.rotateOnAxis(Gl,t)}translateOnAxis(t,e){return kl.copy(t).applyQuaternion(this.quaternion),this.position.add(kl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vl,t)}translateY(t){return this.translateOnAxis(Hl,t)}translateZ(t){return this.translateOnAxis(Gl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Js.copy(t):Js.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(cs,Js,this.up):Pn.lookAt(Js,cs,this.up),this.quaternion.setFromRotationMatrix(Pn),s&&(Pn.extractRotation(s.matrixWorld),Ai.setFromRotationMatrix(Pn),this.quaternion.premultiply(Ai.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Lt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wl),Ci.child=t,this.dispatchEvent(Ci),Ci.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bu),io.child=t,this.dispatchEvent(io),io.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wl),Ci.child=t,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,t,Su),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,Mu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let p=c[l];r(t.shapes,p)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),p=a(t.shapes),h=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};en.DEFAULT_UP=new O(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ye=class extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}},wu={type:"move"},Wi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),f=this._getHandJoint(l,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],h=u.position.distanceTo(p.position),d=.02,g=.005;l.inputState.pinching&&h>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wu)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ye;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Oc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Ks={h:0,s:0,l:0};function so(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ht=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Yt.workingColorSpace){if(t=Jo(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=so(a,r,t+1/3),this.g=so(a,r,t),this.b=so(a,r,t-1/3)}return Yt.colorSpaceToWorking(this,s),this}setStyle(t,e=qe){function n(r){r!==void 0&&parseFloat(r)<1&&Dt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Dt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Dt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){let n=Oc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Dt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Un(t.r),this.g=Un(t.g),this.b=Un(t.b),this}copyLinearToSRGB(t){return this.r=zi(t.r),this.g=zi(t.g),this.b=zi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return Yt.workingToColorSpace(Fe.copy(this),t),Math.round(Zt(Fe.r*255,0,255))*65536+Math.round(Zt(Fe.g*255,0,255))*256+Math.round(Zt(Fe.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.workingToColorSpace(Fe.copy(this),e);let n=Fe.r,s=Fe.g,r=Fe.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let p=a-o;switch(l=u<=.5?p/(a+o):p/(2-a-o),a){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Yt.workingColorSpace){return Yt.workingToColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=qe){Yt.workingToColorSpace(Fe.copy(this),t);let e=Fe.r,n=Fe.g,s=Fe.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Hn),this.setHSL(Hn.h+t,Hn.s+e,Hn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hn),t.getHSL(Ks);let n=ps(Hn.h,Ks.h,e),s=ps(Hn.s,Ks.s,e),r=ps(Hn.l,Ks.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fe=new Ht;Ht.NAMES=Oc;var wn=class extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ln=new O,In=new O,ro=new O,Dn=new O,Ri=new O,Pi=new O,Xl=new O,ao=new O,oo=new O,lo=new O,co=new xe,ho=new xe,uo=new xe,qn=class i{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ln.subVectors(t,e),s.cross(ln);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ln.subVectors(s,e),In.subVectors(n,e),ro.subVectors(t,e);let a=ln.dot(ln),o=ln.dot(In),c=ln.dot(ro),l=In.dot(In),u=In.dot(ro),p=a*l-o*o;if(p===0)return r.set(0,0,0),null;let h=1/p,d=(l*c-o*u)*h,g=(a*u-o*c)*h;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Dn.x),c.addScaledVector(a,Dn.y),c.addScaledVector(o,Dn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return co.setScalar(0),ho.setScalar(0),uo.setScalar(0),co.fromBufferAttribute(t,e),ho.fromBufferAttribute(t,n),uo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(co,r.x),a.addScaledVector(ho,r.y),a.addScaledVector(uo,r.z),a}static isFrontFacing(t,e,n,s){return ln.subVectors(n,e),In.subVectors(t,e),ln.cross(In).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),In.subVectors(this.a,this.b),ln.cross(In).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ri.subVectors(s,n),Pi.subVectors(r,n),ao.subVectors(t,n);let c=Ri.dot(ao),l=Pi.dot(ao);if(c<=0&&l<=0)return e.copy(n);oo.subVectors(t,s);let u=Ri.dot(oo),p=Pi.dot(oo);if(u>=0&&p<=u)return e.copy(s);let h=c*p-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(Ri,a);lo.subVectors(t,r);let d=Ri.dot(lo),g=Pi.dot(lo);if(g>=0&&d<=g)return e.copy(r);let y=d*l-c*g;if(y<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Pi,o);let m=u*g-d*p;if(m<=0&&p-u>=0&&d-g>=0)return Xl.subVectors(r,s),o=(p-u)/(p-u+(d-g)),e.copy(s).addScaledVector(Xl,o);let f=1/(m+y+h);return a=y*f,o=h*f,e.copy(n).addScaledVector(Ri,a).addScaledVector(Pi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Zn=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,cn):cn.fromBufferAttribute(r,a),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qs.copy(n.boundingBox)),Qs.applyMatrix4(t.matrixWorld),this.union(Qs)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hs),js.subVectors(this.max,hs),Ii.subVectors(t.a,hs),Di.subVectors(t.b,hs),Li.subVectors(t.c,hs),Gn.subVectors(Di,Ii),Wn.subVectors(Li,Di),oi.subVectors(Ii,Li);let e=[0,-Gn.z,Gn.y,0,-Wn.z,Wn.y,0,-oi.z,oi.y,Gn.z,0,-Gn.x,Wn.z,0,-Wn.x,oi.z,0,-oi.x,-Gn.y,Gn.x,0,-Wn.y,Wn.x,0,-oi.y,oi.x,0];return!fo(e,Ii,Di,Li,js)||(e=[1,0,0,0,1,0,0,0,1],!fo(e,Ii,Di,Li,js))?!1:(tr.crossVectors(Gn,Wn),e=[tr.x,tr.y,tr.z],fo(e,Ii,Di,Li,js))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ln=[new O,new O,new O,new O,new O,new O,new O,new O],cn=new O,Qs=new Zn,Ii=new O,Di=new O,Li=new O,Gn=new O,Wn=new O,oi=new O,hs=new O,js=new O,tr=new O,li=new O;function fo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){li.fromArray(i,r);let o=s.x*Math.abs(li.x)+s.y*Math.abs(li.y)+s.z*Math.abs(li.z),c=t.dot(li),l=e.dot(li),u=n.dot(li);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var Te=new O,er=new zt,Tu=0,Ze=class extends Mn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Dc,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)er.fromBufferAttribute(this,e),er.applyMatrix3(t),this.setXY(e,er.x,er.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Bi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ss=class extends Ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ms=class extends Ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var se=class extends Ze{constructor(t,e,n){super(new Float32Array(t),e,n)}},Eu=new Zn,us=new O,po=new O,Xi=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Eu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;us.subVectors(t,this.center);let e=us.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(us,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(po.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(us.copy(t.center).add(po)),this.expandByPoint(us.copy(t.center).sub(po))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Au=0,je=new oe,mo=new en,Ni=new O,Xe=new Zn,ds=new Zn,Re=new O,Ee=class i extends Mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=Qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kh(t)?Ms:Ss)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ut().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,n){return je.makeTranslation(t,e,n),this.applyMatrix4(je),this}scale(t,e,n){return je.makeScale(t,e,n),this.applyMatrix4(je),this}lookAt(t){return mo.lookAt(t),mo.updateMatrix(),this.applyMatrix4(mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new se(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Xe.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let n=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ds.setFromBufferAttribute(o),this.morphTargetsRelative?(Re.addVectors(Xe.min,ds.min),Xe.expandByPoint(Re),Re.addVectors(Xe.max,ds.max),Xe.expandByPoint(Re)):(Xe.expandByPoint(ds.min),Xe.expandByPoint(ds.max))}Xe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Re));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Re.fromBufferAttribute(o,l),c&&(Ni.fromBufferAttribute(t,l),Re.add(Ni)),s=Math.max(s,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ze(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new O,c[x]=new O;let l=new O,u=new O,p=new O,h=new zt,d=new zt,g=new zt,y=new O,m=new O;function f(x,T,P){l.fromBufferAttribute(n,x),u.fromBufferAttribute(n,T),p.fromBufferAttribute(n,P),h.fromBufferAttribute(r,x),d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,P),u.sub(l),p.sub(l),d.sub(h),g.sub(h);let I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(p,-d.y).multiplyScalar(I),m.copy(p).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(I),o[x].add(y),o[T].add(y),o[P].add(y),c[x].add(m),c[T].add(m),c[P].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let x=0,T=b.length;x<T;++x){let P=b[x],I=P.start,z=P.count;for(let k=I,N=I+z;k<N;k+=3)f(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let C=new O,S=new O,M=new O,w=new O;function R(x){M.fromBufferAttribute(s,x),w.copy(M);let T=o[x];C.copy(T),C.sub(M.multiplyScalar(M.dot(T))).normalize(),S.crossVectors(w,T);let I=S.dot(c[x])<0?-1:1;a.setXYZW(x,C.x,C.y,C.z,I)}for(let x=0,T=b.length;x<T;++x){let P=b[x],I=P.start,z=P.count;for(let k=I,N=I+z;k<N;k+=3)R(t.getX(k+0)),R(t.getX(k+1)),R(t.getX(k+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let s=new O,r=new O,a=new O,o=new O,c=new O,l=new O,u=new O,p=new O;if(t)for(let h=0,d=t.count;h<d;h+=3){let g=t.getX(h+0),y=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(o,c){let l=o.array,u=o.itemSize,p=o.normalized,h=new l.constructor(c.length*u),d=0,g=0;for(let y=0,m=c.length;y<m;y++){o.isInterleavedBufferAttribute?d=c[y]*o.data.stride+o.offset:d=c[y]*u;for(let f=0;f<u;f++)h[g++]=l[d++]}return new Ze(h,u,p)}if(this.index===null)return Dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,p=l.length;u<p;u++){let h=l[u],d=t(h,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let p=0,h=l.length;p<h;p++){let d=l[p];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],p=r[l];for(let h=0,d=p.length;h<d;h++)u.push(p[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,u=a.length;l<u;l++){let p=a[l];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var go=new O,Cu=new O,Ru=new Ut,hn=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=go.subVectors(n,e).cross(Cu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(go),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ru.getNormalMatrix(t),s=this.coplanarPoint(go).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Pu=0,fi=class extends Mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=Qi(),this.name="",this.type="Material",this.blending=Zi,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ro,this.blendDst=Po,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mr,this.stencilZFail=mr,this.stencilZPass=mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Dt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Dt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ht().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new hn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new zt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new zt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Nn=new O,vo=new O,nr=new O,ir=new O,Rr=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){vo.copy(t).add(e).multiplyScalar(.5),nr.copy(e).sub(t).normalize(),ir.copy(this.origin).sub(vo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(nr),o=ir.dot(this.direction),c=-ir.dot(nr),l=ir.lengthSq(),u=Math.abs(1-a*a),p,h,d,g;if(u>0)if(p=a*c-o,h=a*o-c,g=r*u,p>=0)if(h>=-g)if(h<=g){let y=1/u;p*=y,h*=y,d=p*(p+a*h+2*o)+h*(a*p+h+2*c)+l}else h=r,p=Math.max(0,-(a*h+o)),d=-p*p+h*(h+2*c)+l;else h=-r,p=Math.max(0,-(a*h+o)),d=-p*p+h*(h+2*c)+l;else h<=-g?(p=Math.max(0,-(-a*r+o)),h=p>0?-r:Math.min(Math.max(-r,-c),r),d=-p*p+h*(h+2*c)+l):h<=g?(p=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(p=Math.max(0,-(a*r+o)),h=p>0?r:Math.min(Math.max(-r,-c),r),d=-p*p+h*(h+2*c)+l);else h=a>0?-r:r,p=Math.max(0,-(a*h+o)),d=-p*p+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(vo).addScaledVector(nr,h),d}intersectSphere(t,e){if(t.radius<0)return null;Nn.subVectors(t.center,this.origin);let n=Nn.dot(this.direction),s=Nn.dot(Nn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-h.z)*p,c=(t.max.z-h.z)*p):(o=(t.max.z-h.z)*p,c=(t.min.z-h.z)*p),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,p=t.x-a.x,h=t.y-a.y,d=t.z-a.z,g=e.x-a.x,y=e.y-a.y,m=e.z-a.z,f=n.x-a.x,b=n.y-a.y,C=n.z-a.z,S=Math.abs(c),M=Math.abs(l),w=Math.abs(u),R,x,T,P,I,z,k,N,L,F,q,J;if(S>=M&&S>=w?(T=c,z=p,L=g,J=f,c>=0?(R=l,x=u,P=h,I=d,k=y,N=m,F=b,q=C):(R=u,x=l,P=d,I=h,k=m,N=y,F=C,q=b)):M>=w?(T=l,z=h,L=y,J=b,l>=0?(R=u,x=c,P=d,I=p,k=m,N=g,F=C,q=f):(R=c,x=u,P=p,I=d,k=g,N=m,F=f,q=C)):(T=u,z=d,L=m,J=C,u>=0?(R=c,x=l,P=p,I=h,k=g,N=y,F=f,q=b):(R=l,x=c,P=h,I=p,k=y,N=g,F=b,q=f)),T===0)return null;let V=R/T,W=x/T,Z=1/T,_t=P-V*z,wt=I-W*z,Kt=k-V*L,Ot=N-W*L,Xt=F-V*J,$=q-W*J,et=Xt*Ot-$*Kt,yt=_t*$-wt*Xt,Nt=Kt*wt-Ot*_t;if(s){if(et<0||yt<0||Nt<0)return null}else if((et<0||yt<0||Nt<0)&&(et>0||yt>0||Nt>0))return null;let gt=et+yt+Nt;if(gt===0)return null;let Bt=Z*(et*z+yt*L+Nt*J);return(gt>0?Bt<0:Bt>0)?null:this.at(Bt/gt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},bs=class extends fi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=Io,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ql=new oe,ci=new Rr,sr=new Xi,Yl=new O,rr=new O,ar=new O,or=new O,xo=new O,lr=new O,Zl=new O,cr=new O,ue=class extends en{constructor(t=new Ee,e=new bs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){lr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],p=r[c];u!==0&&(xo.fromBufferAttribute(p,t),a?lr.addScaledVector(xo,u):lr.addScaledVector(xo.sub(e),u))}e.add(lr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(r),ci.copy(t.ray).recast(t.near),!(sr.containsPoint(ci.origin)===!1&&(ci.intersectSphere(sr,Yl)===null||ci.origin.distanceToSquared(Yl)>(t.far-t.near)**2))&&(ql.copy(r).invert(),ci.copy(t.ray).applyMatrix4(ql),!(n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ci)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=h.length;g<y;g++){let m=h[g],f=a[m.materialIndex],b=Math.max(m.start,d.start),C=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let S=b,M=C;S<M;S+=3){let w=o.getX(S),R=o.getX(S+1),x=o.getX(S+2);s=hr(this,f,t,n,l,u,p,w,R,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let m=g,f=y;m<f;m+=3){let b=o.getX(m),C=o.getX(m+1),S=o.getX(m+2);s=hr(this,a,t,n,l,u,p,b,C,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,y=h.length;g<y;g++){let m=h[g],f=a[m.materialIndex],b=Math.max(m.start,d.start),C=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let S=b,M=C;S<M;S+=3){let w=S,R=S+1,x=S+2;s=hr(this,f,t,n,l,u,p,w,R,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(c.count,d.start+d.count);for(let m=g,f=y;m<f;m+=3){let b=m,C=m+1,S=m+2;s=hr(this,a,t,n,l,u,p,b,C,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Iu(i,t,e,n,s,r,a,o){let c;if(t.side===De?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===jn,o),c===null)return null;cr.copy(o),cr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(cr);return l<e.near||l>e.far?null:{distance:l,point:cr.clone(),object:i}}function hr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,rr),i.getVertexPosition(c,ar),i.getVertexPosition(l,or);let u=Iu(i,t,e,n,rr,ar,or,Zl);if(u){let p=new O;qn.getBarycoord(Zl,rr,ar,or,p),s&&(u.uv=qn.getInterpolatedAttribute(s,o,c,l,p,new zt)),r&&(u.uv1=qn.getInterpolatedAttribute(r,o,c,l,p,new zt)),a&&(u.normal=qn.getInterpolatedAttribute(a,o,c,l,p,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:c,c:l,normal:new O,materialIndex:0};qn.getNormal(rr,ar,or,h.normal),u.face=h,u.barycoord=p}return u}var Pr=class extends He{constructor(t=null,e=1,n=1,s,r,a,o,c,l=ve,u=ve,p,h){super(null,a,o,c,l,u,s,r,p,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dn=class extends Ze{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}};var hi=new Xi,Du=new zt(.5,.5),ur=new O,ws=class{constructor(t=new hn,e=new hn,n=new hn,s=new hn,r=new hn,a=new hn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=un,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],p=r[5],h=r[6],d=r[7],g=r[8],y=r[9],m=r[10],f=r[11],b=r[12],C=r[13],S=r[14],M=r[15];if(s[0].setComponents(l-a,d-u,f-g,M-b).normalize(),s[1].setComponents(l+a,d+u,f+g,M+b).normalize(),s[2].setComponents(l+o,d+p,f+y,M+C).normalize(),s[3].setComponents(l-o,d-p,f-y,M-C).normalize(),n)s[4].setComponents(c,h,m,S).normalize(),s[5].setComponents(l-c,d-h,f-m,M-S).normalize();else if(s[4].setComponents(l-c,d-h,f-m,M-S).normalize(),e===un)s[5].setComponents(l+c,d+h,f+m,M+S).normalize();else if(e===vs)s[5].setComponents(c,h,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(t){hi.center.set(0,0,0);let e=Du.distanceTo(t.center);return hi.radius=.7071067811865476+e,hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ur.x=s.normal.x>0?t.max.x:t.min.x,ur.y=s.normal.y>0?t.max.y:t.min.y,ur.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ur)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ts=class extends He{constructor(t=[],e=ti,n,s,r,a,o,c,l,u){super(t,e,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Es=class extends He{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var nn=class extends He{constructor(t,e,n=Ke,s,r,a,o=ve,c=ve,l,u=Sn,p=1){if(u!==Sn&&u!==ei)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:p};super(h,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Gi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ir=class extends nn{constructor(t,e=Ke,n=ti,s,r,a=ve,o=ve,c,l=Sn){let u={width:t,height:t,depth:1},p=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},As=class extends He{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},$n=class i extends Ee{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],p=[],h=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(p,2));function g(y,m,f,b,C,S,M,w,R,x,T){let P=S/R,I=M/x,z=S/2,k=M/2,N=w/2,L=R+1,F=x+1,q=0,J=0,V=new O;for(let W=0;W<F;W++){let Z=W*I-k;for(let _t=0;_t<L;_t++){let wt=_t*P-z;V[y]=wt*b,V[m]=Z*C,V[f]=N,l.push(V.x,V.y,V.z),V[y]=0,V[m]=0,V[f]=w>0?1:-1,u.push(V.x,V.y,V.z),p.push(_t/R),p.push(1-W/x),q+=1}}for(let W=0;W<x;W++)for(let Z=0;Z<R;Z++){let _t=h+Z+L*W,wt=h+Z+L*(W+1),Kt=h+(Z+1)+L*(W+1),Ot=h+(Z+1)+L*W;c.push(_t,wt,Ot),c.push(wt,Kt,Ot),J+=6}o.addGroup(d,J,T),d+=J,h+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var pi=class i extends Ee{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,p=t/o,h=e/c,d=[],g=[],y=[],m=[];for(let f=0;f<u;f++){let b=f*h-a;for(let C=0;C<l;C++){let S=C*p-r;g.push(S,-b,0),y.push(0,0,1),m.push(C/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let b=0;b<o;b++){let C=b+l*f,S=b+l*(f+1),M=b+1+l*(f+1),w=b+1+l*f;d.push(C,S,w),d.push(S,M,w)}this.setIndex(d),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(y,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Cs=class i extends Ee{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],p=new O,h=new O,d=[],g=[],y=[],m=[];for(let f=0;f<=n;f++){let b=[],C=f/n,S=a+C*o,M=t*Math.cos(S),w=Math.sqrt(t*t-M*M),R=0;f===0&&a===0?R=.5/e:f===n&&c===Math.PI&&(R=-.5/e);for(let x=0;x<=e;x++){let T=x/e,P=s+T*r;p.x=-w*Math.cos(P),p.y=M,p.z=w*Math.sin(P),g.push(p.x,p.y,p.z),h.copy(p).normalize(),y.push(h.x,h.y,h.z),m.push(T+R,1-C),b.push(l++)}u.push(b)}for(let f=0;f<n;f++)for(let b=0;b<e;b++){let C=u[f][b+1],S=u[f][b],M=u[f+1][b],w=u[f+1][b+1];(f!==0||a>0)&&d.push(C,S,w),(f!==n-1||c<Math.PI)&&d.push(S,M,w)}this.setIndex(d),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(y,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function vi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if($l(s))s.isRenderTargetTexture?(Dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if($l(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function ze(i){let t={};for(let e=0;e<i.length;e++){let n=vi(i[e]);for(let s in n)t[s]=n[s]}return t}function $l(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Lu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ko(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}var Bc={clone:vi,merge:ze},Nu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ne=class extends fi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nu,this.fragmentShader=Uu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vi(t.uniforms),this.uniformsGroups=Lu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ht().setHex(s.value);break;case"v2":this.uniforms[n].value=new zt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new O().fromArray(s.value);break;case"v4":this.uniforms[n].value=new xe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ut().fromArray(s.value);break;case"m4":this.uniforms[n].value=new oe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Dr=class extends ne{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Lr=class extends fi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Nr=class extends fi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ui(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function _o(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Jn=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ur=class extends Jn{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:So,endingEnd:So}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Mo:r=t,o=2*e-n;break;case bo:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Mo:a=t,c=2*n-e;break;case bo:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this._offsetPrev,p=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),y=g*g,m=y*g,f=-h*m+2*h*y-h*g,b=(1+h)*m+(-1.5-2*h)*y+(-.5+h)*g+1,C=(-1-d)*m+(1.5+d)*y+.5*g,S=d*m-d*y;for(let M=0;M!==o;++M)r[M]=f*a[u+M]+b*a[l+M]+C*a[c+M]+S*a[p+M];return r}},Fr=class extends Jn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=(n-e)/(s-e),p=1-u;for(let h=0;h!==o;++h)r[h]=a[l+h]*p+a[c+h]*u;return r}},Or=class extends Jn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Br=class extends Jn{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this.inTangents,p=this.outTangents;if(!u||!p){let g=(n-e)/(s-e),y=1-g;for(let m=0;m!==o;++m)r[m]=a[l+m]*y+a[c+m]*g;return r}let h=o*2,d=t-1;for(let g=0;g!==o;++g){let y=a[l+g],m=a[c+g],f=d*h+g*2,b=p[f],C=p[f+1],S=t*h+g*2,M=u[S],w=u[S+1],R=Ou(n,e,b,M,s);r[g]=zc(R,y,C,w,m)}return r}};function zc(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Fu(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Ou(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=zc(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=Fu(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var $e=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ui(e,this.TimeBufferType),this.values=Ui(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ui(t.times,Array),values:Ui(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),_o(t.settings)&&(n.settings={inTangents:Ui(t.settings.inTangents,Array),outTangents:Ui(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Or(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Fr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ur(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Br(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ms:e=this.InterpolantFactoryMethodDiscrete;break;case Tr:e=this.InterpolantFactoryMethodLinear;break;case pr:e=this.InterpolantFactoryMethodSmooth;break;case yo:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Dt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ms;case this.InterpolantFactoryMethodLinear:return Tr;case this.InterpolantFactoryMethodSmooth:return pr;case this.InterpolantFactoryMethodBezier:return yo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;_o(this.settings)&&(Jl(this.settings.inTangents,t),Jl(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Lt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Lt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Lt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Lt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&Qh(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Lt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===pr,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],u=t[o+1];if(l!==u&&(o!==1||l!==t[0]))if(s)c=!0;else{let p=o*n,h=p-n,d=p+n;for(let g=0;g!==n;++g){let y=e[p+g];if(y!==e[h+g]||y!==e[d+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let p=o*n,h=a*n;for(let d=0;d!==n;++d)e[h+d]=e[p+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,_o(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Jl(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}$e.prototype.ValueTypeName="";$e.prototype.TimeBufferType=Float32Array;$e.prototype.ValueBufferType=Float32Array;$e.prototype.DefaultInterpolation=Tr;var Kn=class extends $e{constructor(t,e,n){super(t,e,n)}};Kn.prototype.ValueTypeName="bool";Kn.prototype.ValueBufferType=Array;Kn.prototype.DefaultInterpolation=ms;Kn.prototype.InterpolantFactoryMethodLinear=void 0;Kn.prototype.InterpolantFactoryMethodSmooth=void 0;var zr=class extends $e{constructor(t,e,n,s){super(t,e,n,s)}};zr.prototype.ValueTypeName="color";var kr=class extends $e{constructor(t,e,n,s){super(t,e,n,s)}};kr.prototype.ValueTypeName="number";var Vr=class extends Jn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let u=l+o;l!==u;l+=4)bn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Rs=class extends $e{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Vr(this.times,this.values,this.getValueSize(),t)}};Rs.prototype.ValueTypeName="quaternion";Rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Qn=class extends $e{constructor(t,e,n){super(t,e,n)}};Qn.prototype.ValueTypeName="string";Qn.prototype.ValueBufferType=Array;Qn.prototype.DefaultInterpolation=ms;Qn.prototype.InterpolantFactoryMethodLinear=void 0;Qn.prototype.InterpolantFactoryMethodSmooth=void 0;var Hr=class extends $e{constructor(t,e,n,s){super(t,e,n,s)}};Hr.prototype.ValueTypeName="vector";var Gr=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,p){return l.push(u,p),this},this.removeHandler=function(u){let p=l.indexOf(u);return p!==-1&&l.splice(p,2),this},this.getHandler=function(u){for(let p=0,h=l.length;p<h;p+=2){let d=l[p],g=l[p+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},kc=new Gr,Wr=class{constructor(t){this.manager=t!==void 0?t:kc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Wr.DEFAULT_MATERIAL_NAME="__DEFAULT";var dr=new O,fr=new bn,yn=new O,Ps=class extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(dr,fr,yn),yn.x===1&&yn.y===1&&yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dr,fr,yn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(dr,fr,yn),yn.x===1&&yn.y===1&&yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dr,fr,yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Xn=new O,Kl=new zt,Ql=new zt,Oe=class extends Ps{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Hi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(fs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hi*2*Math.atan(Math.tan(fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z)}getViewSize(t,e){return this.getViewBounds(t,Kl,Ql),e.subVectors(Ql,Kl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(fs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Fn=class extends Ps{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var On=class extends Ee{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Fi=-90,Oi=1,qi=class extends en{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Oe(Fi,Oi,t,e);s.layers=this.layers,this.add(s);let r=new Oe(Fi,Oi,t,e);r.layers=this.layers,this.add(r);let a=new Oe(Fi,Oi,t,e);a.layers=this.layers,this.add(a);let o=new Oe(Fi,Oi,t,e);o.layers=this.layers,this.add(o);let c=new Oe(Fi,Oi,t,e);c.layers=this.layers,this.add(c);let l=new Oe(Fi,Oi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===un)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===vs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,p=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(p,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Xr=class extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Qo="\\[\\]\\.:\\/",Bu=new RegExp("["+Qo+"]","g"),jo="[^"+Qo+"]",zu="[^"+Qo.replace("\\.","")+"]",ku=/((?:WC+[\/:])*)/.source.replace("WC",jo),Vu=/(WCOD+)?/.source.replace("WCOD",zu),Hu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jo),Gu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jo),Wu=new RegExp("^"+ku+Vu+Hu+Gu+"$"),Xu=["material","materials","bones","map"],wo=class{constructor(t,e,n){let s=n||pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},pe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Bu,"")}static parseTrackName(t){let e=Wu.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Xu.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Dt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Lt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Lt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Lt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Lt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Lt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;Lt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pe.Composite=wo;pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pe.prototype.GetterByBindingType=[pe.prototype._getValue_direct,pe.prototype._getValue_array,pe.prototype._getValue_arrayElement,pe.prototype._getValue_toArray];pe.prototype.SetterByBindingTypeAndVersioning=[[pe.prototype._setValue_direct,pe.prototype._setValue_direct_setNeedsUpdate,pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_array,pe.prototype._setValue_array_setNeedsUpdate,pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_arrayElement,pe.prototype._setValue_arrayElement_setNeedsUpdate,pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_fromArray,pe.prototype._setValue_fromArray_setNeedsUpdate,pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var jg=new Float32Array(1);var To=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function tl(i,t,e,n){let s=qu(n);switch(e){case Wo:return i*t;case qo:return i*t/s.components*s.byteLength;case Qr:return i*t/s.components*s.byteLength;case ni:return i*t*2/s.components*s.byteLength;case jr:return i*t*2/s.components*s.byteLength;case Xo:return i*t*3/s.components*s.byteLength;case rn:return i*t*4/s.components*s.byteLength;case ta:return i*t*4/s.components*s.byteLength;case Ns:case Us:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Fs:case Os:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case na:case sa:return Math.max(i,16)*Math.max(t,8)/4;case ea:case ia:return Math.max(i,8)*Math.max(t,8)/2;case ra:case aa:case la:case ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case oa:case Bs:case ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case da:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case fa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case pa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ma:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ga:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case va:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case xa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case _a:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ya:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Sa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ma:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ba:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case wa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ta:case Ea:case Aa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ca:case Ra:return Math.ceil(i/4)*Math.ceil(t/4)*8;case zs:case Pa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qu(i){switch(i){case Je:case ko:return{byteLength:1,components:1};case Ji:case Vo:case Be:return{byteLength:2,components:1};case Jr:case Kr:return{byteLength:2,components:4};case Ke:case $r:case pn:return{byteLength:4,components:1};case Ho:case Go:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function lh(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Zu(i){let t=new WeakMap;function e(o,c){let l=o.array,u=o.usage,p=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,c,l){let u=c.array,p=c.updateRanges;if(i.bindBuffer(l,o),p.length===0)i.bufferSubData(l,0,u);else{p.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<p.length;d++){let g=p[h],y=p[d];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++h,p[h]=y)}p.length=h+1;for(let d=0,g=p.length;d<g;d++){let y=p[d];i.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var $u=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ju=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ku=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ju=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,td=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ed=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,id=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,sd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ad=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,od=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ld=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,md=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,gd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,xd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_d=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Sd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Md=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Td="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ed=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ad=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Cd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Rd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Id=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Dd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ld=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ud=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Od=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Vd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Hd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Yd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$d=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kd=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Qd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ef=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,af=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,of=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,df=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ff=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_f=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ef=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Af=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,If=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Df=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Lf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Nf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Uf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ff=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Of=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$f=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ep=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,np=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ip=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,op=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,up=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_p=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Sp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Tp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ep=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ap=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:$u,alphahash_pars_fragment:Ju,alphamap_fragment:Ku,alphamap_pars_fragment:Qu,alphatest_fragment:ju,alphatest_pars_fragment:td,aomap_fragment:ed,aomap_pars_fragment:nd,batching_pars_vertex:id,batching_vertex:sd,begin_vertex:rd,beginnormal_vertex:ad,bsdfs:od,iridescence_fragment:ld,bumpmap_pars_fragment:cd,clipping_planes_fragment:hd,clipping_planes_pars_fragment:ud,clipping_planes_pars_vertex:dd,clipping_planes_vertex:fd,color_fragment:pd,color_pars_fragment:md,color_pars_vertex:gd,color_vertex:vd,common:xd,cube_uv_reflection_fragment:_d,defaultnormal_vertex:yd,displacementmap_pars_vertex:Sd,displacementmap_vertex:Md,emissivemap_fragment:bd,emissivemap_pars_fragment:wd,colorspace_fragment:Td,colorspace_pars_fragment:Ed,envmap_fragment:Ad,envmap_common_pars_fragment:Cd,envmap_pars_fragment:Rd,envmap_pars_vertex:Pd,envmap_physical_pars_fragment:Vd,envmap_vertex:Id,fog_vertex:Dd,fog_pars_vertex:Ld,fog_fragment:Nd,fog_pars_fragment:Ud,gradientmap_pars_fragment:Fd,lightmap_pars_fragment:Od,lights_lambert_fragment:Bd,lights_lambert_pars_fragment:zd,lights_pars_begin:kd,lights_toon_fragment:Hd,lights_toon_pars_fragment:Gd,lights_phong_fragment:Wd,lights_phong_pars_fragment:Xd,lights_physical_fragment:qd,lights_physical_pars_fragment:Yd,lights_fragment_begin:Zd,lights_fragment_maps:$d,lights_fragment_end:Jd,lightprobes_pars_fragment:Kd,logdepthbuf_fragment:Qd,logdepthbuf_pars_fragment:jd,logdepthbuf_pars_vertex:tf,logdepthbuf_vertex:ef,map_fragment:nf,map_pars_fragment:sf,map_particle_fragment:rf,map_particle_pars_fragment:af,metalnessmap_fragment:of,metalnessmap_pars_fragment:lf,morphinstance_vertex:cf,morphcolor_vertex:hf,morphnormal_vertex:uf,morphtarget_pars_vertex:df,morphtarget_vertex:ff,normal_fragment_begin:pf,normal_fragment_maps:mf,normal_pars_fragment:gf,normal_pars_vertex:vf,normal_vertex:xf,normalmap_pars_fragment:_f,clearcoat_normal_fragment_begin:yf,clearcoat_normal_fragment_maps:Sf,clearcoat_pars_fragment:Mf,iridescence_pars_fragment:bf,opaque_fragment:wf,packing:Tf,premultiplied_alpha_fragment:Ef,project_vertex:Af,dithering_fragment:Cf,dithering_pars_fragment:Rf,roughnessmap_fragment:Pf,roughnessmap_pars_fragment:If,shadowmap_pars_fragment:Df,shadowmap_pars_vertex:Lf,shadowmap_vertex:Nf,shadowmask_pars_fragment:Uf,skinbase_vertex:Ff,skinning_pars_vertex:Of,skinning_vertex:Bf,skinnormal_vertex:zf,specularmap_fragment:kf,specularmap_pars_fragment:Vf,tonemapping_fragment:Hf,tonemapping_pars_fragment:Gf,transmission_fragment:Wf,transmission_pars_fragment:Xf,uv_pars_fragment:qf,uv_pars_vertex:Yf,uv_vertex:Zf,worldpos_vertex:$f,background_vert:Jf,background_frag:Kf,backgroundCube_vert:Qf,backgroundCube_frag:jf,cube_vert:tp,cube_frag:ep,depth_vert:np,depth_frag:ip,distance_vert:sp,distance_frag:rp,equirect_vert:ap,equirect_frag:op,linedashed_vert:lp,linedashed_frag:cp,meshbasic_vert:hp,meshbasic_frag:up,meshlambert_vert:dp,meshlambert_frag:fp,meshmatcap_vert:pp,meshmatcap_frag:mp,meshnormal_vert:gp,meshnormal_frag:vp,meshphong_vert:xp,meshphong_frag:_p,meshphysical_vert:yp,meshphysical_frag:Sp,meshtoon_vert:Mp,meshtoon_frag:bp,points_vert:wp,points_frag:Tp,shadow_vert:Ep,shadow_frag:Ap,sprite_vert:Cp,sprite_frag:Rp},dt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},An={basic:{uniforms:ze([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:ze([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Ht(0)},envMapIntensity:{value:1}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:ze([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:ze([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:ze([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:ze([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:ze([dt.points,dt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:ze([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:ze([dt.common,dt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:ze([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:ze([dt.sprite,dt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distance:{uniforms:ze([dt.common,dt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distance_vert,fragmentShader:Gt.distance_frag},shadow:{uniforms:ze([dt.lights,dt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};An.physical={uniforms:ze([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};var La={r:0,b:0,g:0},Pp=new oe,ch=new Ut;ch.set(-1,0,0,0,1,0,0,0,1);function Ip(i,t,e,n,s,r){let a=new Ht(0),o=s===!0?0:1,c,l,u=null,p=0,h=null;function d(b){let C=b.isScene===!0?b.background:null;if(C&&C.isTexture){let S=b.backgroundBlurriness>0;C=t.get(C,S)}return C}function g(b){let C=!1,S=d(b);S===null?m(a,o):S&&S.isColor&&(m(S,1),C=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||C)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(b,C){let S=d(C);S&&(S.isCubeTexture||S.mapping===Ds)?(l===void 0&&(l=new ue(new $n(1,1,1),new ne({name:"BackgroundCubeMaterial",uniforms:vi(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Pp.makeRotationFromEuler(C.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ch),l.material.toneMapped=Yt.getTransfer(S.colorSpace)!==te,(u!==S||p!==S.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,p=S.version,h=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new ue(new pi(2,2),new ne({name:"BackgroundMaterial",uniforms:vi(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(S.colorSpace)!==te,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||p!==S.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,p=S.version,h=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,C){b.getRGB(La,Ko(i)),e.buffers.color.setClear(La.r,La.g,La.b,C,r)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,C=1){a.set(b),o=C,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:g,addToRenderList:y,dispose:f}}function Dp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(I,z,k,N,L){let F=!1,q=p(I,N,k,z);r!==q&&(r=q,l(r.object)),F=d(I,N,k,L),F&&g(I,N,k,L),L!==null&&t.update(L,i.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,S(I,z,k,N),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function c(){return i.createVertexArray()}function l(I){return i.bindVertexArray(I)}function u(I){return i.deleteVertexArray(I)}function p(I,z,k,N){let L=N.wireframe===!0,F=n[z.id];F===void 0&&(F={},n[z.id]=F);let q=I.isInstancedMesh===!0?I.id:0,J=F[q];J===void 0&&(J={},F[q]=J);let V=J[k.id];V===void 0&&(V={},J[k.id]=V);let W=V[L];return W===void 0&&(W=h(c()),V[L]=W),W}function h(I){let z=[],k=[],N=[];for(let L=0;L<e;L++)z[L]=0,k[L]=0,N[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:k,attributeDivisors:N,object:I,attributes:{},index:null}}function d(I,z,k,N){let L=r.attributes,F=z.attributes,q=0,J=k.getAttributes();for(let V in J)if(J[V].location>=0){let Z=L[V],_t=F[V];if(_t===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(_t=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(_t=I.instanceColor)),Z===void 0||Z.attribute!==_t||_t&&Z.data!==_t.data)return!0;q++}return r.attributesNum!==q||r.index!==N}function g(I,z,k,N){let L={},F=z.attributes,q=0,J=k.getAttributes();for(let V in J)if(J[V].location>=0){let Z=F[V];Z===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor));let _t={};_t.attribute=Z,Z&&Z.data&&(_t.data=Z.data),L[V]=_t,q++}r.attributes=L,r.attributesNum=q,r.index=N}function y(){let I=r.newAttributes;for(let z=0,k=I.length;z<k;z++)I[z]=0}function m(I){f(I,0)}function f(I,z){let k=r.newAttributes,N=r.enabledAttributes,L=r.attributeDivisors;k[I]=1,N[I]===0&&(i.enableVertexAttribArray(I),N[I]=1),L[I]!==z&&(i.vertexAttribDivisor(I,z),L[I]=z)}function b(){let I=r.newAttributes,z=r.enabledAttributes;for(let k=0,N=z.length;k<N;k++)z[k]!==I[k]&&(i.disableVertexAttribArray(k),z[k]=0)}function C(I,z,k,N,L,F,q){q===!0?i.vertexAttribIPointer(I,z,k,L,F):i.vertexAttribPointer(I,z,k,N,L,F)}function S(I,z,k,N){y();let L=N.attributes,F=k.getAttributes(),q=z.defaultAttributeValues;for(let J in F){let V=F[J];if(V.location>=0){let W=L[J];if(W===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(W=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(W=I.instanceColor)),W!==void 0){let Z=W.normalized,_t=W.itemSize,wt=t.get(W);if(wt===void 0)continue;let Kt=wt.buffer,Ot=wt.type,Xt=wt.bytesPerElement,$=Ot===i.INT||Ot===i.UNSIGNED_INT||W.gpuType===$r;if(W.isInterleavedBufferAttribute){let et=W.data,yt=et.stride,Nt=W.offset;if(et.isInstancedInterleavedBuffer){for(let gt=0;gt<V.locationSize;gt++)f(V.location+gt,et.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let gt=0;gt<V.locationSize;gt++)m(V.location+gt);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let gt=0;gt<V.locationSize;gt++)C(V.location+gt,_t/V.locationSize,Ot,Z,yt*Xt,(Nt+_t/V.locationSize*gt)*Xt,$)}else{if(W.isInstancedBufferAttribute){for(let et=0;et<V.locationSize;et++)f(V.location+et,W.meshPerAttribute);I.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let et=0;et<V.locationSize;et++)m(V.location+et);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let et=0;et<V.locationSize;et++)C(V.location+et,_t/V.locationSize,Ot,Z,_t*Xt,_t/V.locationSize*et*Xt,$)}}else if(q!==void 0){let Z=q[J];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(V.location,Z);break;case 3:i.vertexAttrib3fv(V.location,Z);break;case 4:i.vertexAttrib4fv(V.location,Z);break;default:i.vertexAttrib1fv(V.location,Z)}}}}b()}function M(){T();for(let I in n){let z=n[I];for(let k in z){let N=z[k];for(let L in N){let F=N[L];for(let q in F)u(F[q].object),delete F[q];delete N[L]}}delete n[I]}}function w(I){if(n[I.id]===void 0)return;let z=n[I.id];for(let k in z){let N=z[k];for(let L in N){let F=N[L];for(let q in F)u(F[q].object),delete F[q];delete N[L]}}delete n[I.id]}function R(I){for(let z in n){let k=n[z];for(let N in k){let L=k[N];if(L[I.id]===void 0)continue;let F=L[I.id];for(let q in F)u(F[q].object),delete F[q];delete L[I.id]}}}function x(I){for(let z in n){let k=n[z],N=I.isInstancedMesh===!0?I.id:0,L=k[N];if(L!==void 0){for(let F in L){let q=L[F];for(let J in q)u(q[J].object),delete q[J];delete L[F]}delete k[N],Object.keys(k).length===0&&delete n[z]}}}function T(){P(),a=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:P,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:b}}function Lp(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function o(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let d=0;d<u;d++)h+=l[d];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Np(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==rn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let x=R===Be&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Je&&R!==pn&&!x&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(Dt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let p=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:b,maxVaryings:C,maxFragmentUniforms:S,maxSamples:M,samples:w}}function Up(i){let t=this,e=null,n=0,s=!1,r=!1,a=new hn,o=new Ut,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){let d=p.length!==0||h||n!==0||s;return s=h,n=p.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,h){e=u(p,h,0)},this.setState=function(p,h,d){let g=p.clippingPlanes,y=p.clipIntersection,m=p.clipShadows,f=i.get(p);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{let b=r?0:n,C=b*4,S=f.clippingState||null;c.value=S,S=u(g,h,C,d);for(let M=0;M!==C;++M)S[M]=e[M];f.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(p,h,d,g){let y=p!==null?p.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let f=d+y*4,b=h.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let C=0,S=d;C!==y;++C,S+=4)a.copy(p[C]).applyMatrix4(b,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var ts=4,Fp=6,Op=20,Bp=256,ks=new Fn,Vc=new Ht,el=null,nl=0,il=0,sl=!1,zp=new O,xi=new O,Ua=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=zp}=r;el=this._renderer.getRenderTarget(),nl=this._renderer.getActiveCubeFace(),il=this._renderer.getActiveMipmapLevel(),sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(el,nl,il),this._renderer.xr.enabled=sl,t.scissorTest=!1,ji(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ti||t.mapping===gi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),el=this._renderer.getRenderTarget(),nl=this._renderer.getActiveCubeFace(),il=this._renderer.getActiveMipmapLevel(),sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:me,minFilter:me,generateMipmaps:!1,type:Be,format:rn,colorSpace:di,depthBuffer:!1},s=Hc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hc(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=kp(r)),this._blurMaterial=Hp(r,t,e),this._ggxMaterial=Vp(r,t,e)}return s}_compileMaterial(t){let e=new ue(new Ee,t);this._renderer.compile(e,ks)}_sceneToCubeUV(t,e,n,s,r){let c=new Oe(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],p=this._renderer,h=p.autoClear,d=p.toneMapping;p.getClearColor(Vc),p.toneMapping=fn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ue(new $n,new bs({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,f=!1,b=t.background;b?b.isColor&&(m.color.copy(b),t.background=null,f=!0):(m.color.copy(Vc),f=!0);for(let C=0;C<6;C++){let S=C%3;S===0?(c.up.set(0,l[C],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[C],r.y,r.z)):S===1?(c.up.set(0,0,l[C]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[C],r.z)):(c.up.set(0,l[C],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[C]));let M=this._cubeSize;ji(s,S*M,C>2?M:0,M,M),p.setRenderTarget(s),f&&p.render(y,c),p.render(t,c)}p.toneMapping=d,p.autoClear=h,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ti||t.mapping===gi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;ji(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,ks)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),p=Math.sqrt(l*l-u*u),h=l*1.25,d=p*h,{_lodMax:g}=this,y=this._sizeLods[n],m=3*y*(n>g-ts?n-g+ts:0),f=4*(this._cubeSize-y);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=g-e,ji(r,m,f,3*y,2*y),s.setRenderTarget(r),s.render(o,ks),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,ji(t,m,f,3*y,2*y),s.setRenderTarget(t),s.render(o,ks)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],p=3*u*(s>this._lodMax-ts?s-this._lodMax+ts:0),h=4*(this._cubeSize-u);ji(e,p,h,3*u,2*u),a.setRenderTarget(e),a.render(c,ks)}};function kp(i){let t=[],e=[],n=i,s=i-ts+1+Fp;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],p=6,h=6,d=3,g=new Float32Array(d*h*p),y=new Float32Array(d*h*p);for(let f=0;f<p;f++){let b=f%3*2/3-1,C=f>2?0:-1,S=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];g.set(S,d*h*f);for(let M=0;M<h;M++){let w=u[M*2]*2-1,R=u[M*2+1]*2-1;f===0?xi.set(1,R,w):f===1?xi.set(-w,1,-R):f===2?xi.set(-w,R,1):f===3?xi.set(-1,R,-w):f===4?xi.set(-w,-1,R):xi.set(w,R,-1),xi.toArray(y,(f*h+M)*d)}}let m=new Ee;m.setAttribute("position",new Ze(g,d)),m.setAttribute("outputDirection",new Ze(y,d)),e.push(new ue(m,null)),n>ts&&n--}return{lodMeshes:e,sizeLods:t}}function Hc(i,t,e){let n=new ge(i,t,e);return n.texture.mapping=Ds,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ji(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Vp(i,t,e){return new ne({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Bp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Oa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Hp(i,t,e){return new ne({name:"SphericalGaussianBlur",defines:{SAMPLES:Op,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Oa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Gc(){return new ne({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Wc(){return new ne({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Oa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ns=class extends ge{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ts(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new $n(5,5,5),r=new ne({name:"CubemapFromEquirect",uniforms:vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:Tn});r.uniforms.tEquirect.value=e;let a=new ue(s,r),o=e.minFilter;return e.minFilter===sn&&(e.minFilter=me),new qi(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Gp(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===qr||d===Yr)if(t.has(h)){let g=t.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let y=new ns(g.height);return y.fromEquirectangularTexture(i,h),t.set(h,y),h.addEventListener("dispose",l),o(y.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let d=h.mapping,g=d===qr||d===Yr,y=d===ti||d===gi;if(g||y){let m=e.get(h),f=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return n===null&&(n=new Ua(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let b=h.image;return g&&b&&b.height>0||y&&b&&c(b)?(n===null&&(n=new Ua(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,d){return d===qr?h.mapping=ti:d===Yr&&(h.mapping=gi),h}function c(h){let d=0,g=6;for(let y=0;y<g;y++)h[y]!==void 0&&d++;return d===g}function l(h){let d=h.target;d.removeEventListener("dispose",l);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function Wp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ui("WebGLRenderer: "+n+" extension not supported."),s}}}function Xp(i,t,e,n){let s={},r=new WeakMap;function a(p){let h=p.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];let d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(p,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function c(p){let h=p.attributes;for(let d in h)t.update(h[d],i.ARRAY_BUFFER)}function l(p){let h=[],d=p.index,g=p.attributes.position,y=0;if(g===void 0)return;if(d!==null){let b=d.array;y=d.version;for(let C=0,S=b.length;C<S;C+=3){let M=b[C+0],w=b[C+1],R=b[C+2];h.push(M,w,w,R,R,M)}}else{let b=g.array;y=g.version;for(let C=0,S=b.length/3-1;C<S;C+=3){let M=C+0,w=C+1,R=C+2;h.push(M,w,w,R,R,M)}}let m=new(g.count>=65535?Ms:Ss)(h,1);m.version=y;let f=r.get(p);f&&t.remove(f),r.set(p,m)}function u(p){let h=r.get(p);if(h){let d=p.index;d!==null&&h.version<d.version&&l(p)}else l(p);return r.get(p)}return{get:o,update:c,getWireframeAttribute:u}}function qp(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function c(p,h){i.drawElements(n,h,r,p*a),e.update(h,n,1)}function l(p,h,d){d!==0&&(i.drawElementsInstanced(n,h,r,p*a,d),e.update(h,n,d))}function u(p,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,p,0,d);let y=0;for(let m=0;m<d;m++)y+=h[m];e.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Yp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Lt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Zp(i,t,e){let n=new WeakMap,s=new xe;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==p){let T=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],C=0;d===!0&&(C=1),g===!0&&(C=2),y===!0&&(C=3);let S=o.attributes.position.count*C,M=1;S>t.maxTextureSize&&(M=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let w=new Float32Array(S*M*4*p),R=new _s(w,S,M,p);R.type=pn,R.needsUpdate=!0;let x=C*4;for(let P=0;P<p;P++){let I=m[P],z=f[P],k=b[P],N=S*M*4*P;for(let L=0;L<I.count;L++){let F=L*x;d===!0&&(s.fromBufferAttribute(I,L),w[N+F+0]=s.x,w[N+F+1]=s.y,w[N+F+2]=s.z,w[N+F+3]=0),g===!0&&(s.fromBufferAttribute(z,L),w[N+F+4]=s.x,w[N+F+5]=s.y,w[N+F+6]=s.z,w[N+F+7]=0),y===!0&&(s.fromBufferAttribute(k,L),w[N+F+8]=s.x,w[N+F+9]=s.y,w[N+F+10]=s.z,w[N+F+11]=k.itemSize===4?s.w:1)}}h={count:p,texture:R,size:new zt(S,M)},n.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let y=0;y<l.length;y++)d+=l[y];let g=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function $p(i,t,e,n,s){let r=new WeakMap;function a(l){let u=s.render.frame,p=l.geometry,h=t.get(l,p);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var Jp={[Do]:"LINEAR_TONE_MAPPING",[Lo]:"REINHARD_TONE_MAPPING",[No]:"CINEON_TONE_MAPPING",[Uo]:"ACES_FILMIC_TONE_MAPPING",[Oo]:"AGX_TONE_MAPPING",[Bo]:"NEUTRAL_TONE_MAPPING",[Fo]:"CUSTOM_TONE_MAPPING"};function Kp(i,t,e,n,s,r){let a=new ge(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Ee;l.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new se([0,2,0,0,2,0],2));let u=new Dr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new ue(l,u),h=new Fn(-1,1,1,-1,0,1),d=null,g=null,y=!1,m,f=null,b=[],C=!1;this.setSize=function(S,M){a.setSize(S,M),o!==null&&o.setSize(S,M),c!==null&&c.setSize(S,M);for(let w=0;w<b.length;w++){let R=b[w];R.setSize&&R.setSize(S,M)}},this.setEffects=function(S){b=S,C=b.length>0&&b[0].isRenderPass===!0;let M=a.width,w=a.height;b.length>0&&o===null&&(o=new ge(M,w,{type:Be,depthBuffer:!1,stencilBuffer:!1}),c=new ge(M,w,{type:Be,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<b.length;R++){let x=b[R];x.setSize&&x.setSize(M,w)}},this.begin=function(S,M){if(y||S.toneMapping===fn&&b.length===0)return!1;if(f=M,M!==null){let w=M.width,R=M.height;(a.width!==w||a.height!==R)&&this.setSize(w,R)}return C===!1&&S.setRenderTarget(a),m=S.toneMapping,S.toneMapping=fn,!0},this.hasRenderPass=function(){return C},this.end=function(S,M){S.toneMapping=m,y=!0;let w=a,R=o;for(let x=0;x<b.length;x++){let T=b[x];T.enabled!==!1&&(T.render(S,R,w,M),T.needsSwap!==!1&&(w=R,R=R===o?c:o))}if(d!==S.outputColorSpace||g!==S.toneMapping){d=S.outputColorSpace,g=S.toneMapping,u.defines={},Yt.getTransfer(d)===te&&(u.defines.SRGB_TRANSFER="");let x=Jp[g];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,S.setRenderTarget(f),S.render(p,h),f=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var hh=new He,ol=new nn(1,1),uh=new _s,dh=new Cr,fh=new Ts,Xc=[],qc=[],Yc=new Float32Array(16),Zc=new Float32Array(9),$c=new Float32Array(4);function is(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Xc[s];if(r===void 0&&(r=new Float32Array(s),Xc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ba(i,t){let e=qc[t];e===void 0&&(e=new Int32Array(t),qc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Qp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function jp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function tm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function em(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function nm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;$c.set(n),i.uniformMatrix2fv(this.addr,!1,$c),Ce(e,n)}}function im(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;Zc.set(n),i.uniformMatrix3fv(this.addr,!1,Zc),Ce(e,n)}}function sm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;Yc.set(n),i.uniformMatrix4fv(this.addr,!1,Yc),Ce(e,n)}}function rm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function am(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function om(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function lm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function cm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function hm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function um(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function dm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function fm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ol.compareFunction=e.isReversedDepthBuffer()?Da:Ia,r=ol):r=hh,e.setTexture2D(t||r,s)}function pm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||dh,s)}function mm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||fh,s)}function gm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||uh,s)}function vm(i){switch(i){case 5126:return Qp;case 35664:return jp;case 35665:return tm;case 35666:return em;case 35674:return nm;case 35675:return im;case 35676:return sm;case 5124:case 35670:return rm;case 35667:case 35671:return am;case 35668:case 35672:return om;case 35669:case 35673:return lm;case 5125:return cm;case 36294:return hm;case 36295:return um;case 36296:return dm;case 35678:case 36198:case 36298:case 36306:case 35682:return fm;case 35679:case 36299:case 36307:return pm;case 35680:case 36300:case 36308:case 36293:return mm;case 36289:case 36303:case 36311:case 36292:return gm}}function xm(i,t){i.uniform1fv(this.addr,t)}function _m(i,t){let e=is(t,this.size,2);i.uniform2fv(this.addr,e)}function ym(i,t){let e=is(t,this.size,3);i.uniform3fv(this.addr,e)}function Sm(i,t){let e=is(t,this.size,4);i.uniform4fv(this.addr,e)}function Mm(i,t){let e=is(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function bm(i,t){let e=is(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function wm(i,t){let e=is(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Tm(i,t){i.uniform1iv(this.addr,t)}function Em(i,t){i.uniform2iv(this.addr,t)}function Am(i,t){i.uniform3iv(this.addr,t)}function Cm(i,t){i.uniform4iv(this.addr,t)}function Rm(i,t){i.uniform1uiv(this.addr,t)}function Pm(i,t){i.uniform2uiv(this.addr,t)}function Im(i,t){i.uniform3uiv(this.addr,t)}function Dm(i,t){i.uniform4uiv(this.addr,t)}function Lm(i,t,e){let n=this.cache,s=t.length,r=Ba(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ol:a=hh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Nm(i,t,e){let n=this.cache,s=t.length,r=Ba(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||dh,r[a])}function Um(i,t,e){let n=this.cache,s=t.length,r=Ba(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||fh,r[a])}function Fm(i,t,e){let n=this.cache,s=t.length,r=Ba(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||uh,r[a])}function Om(i){switch(i){case 5126:return xm;case 35664:return _m;case 35665:return ym;case 35666:return Sm;case 35674:return Mm;case 35675:return bm;case 35676:return wm;case 5124:case 35670:return Tm;case 35667:case 35671:return Em;case 35668:case 35672:return Am;case 35669:case 35673:return Cm;case 5125:return Rm;case 36294:return Pm;case 36295:return Im;case 36296:return Dm;case 35678:case 36198:case 36298:case 36306:case 35682:return Lm;case 35679:case 36299:case 36307:return Nm;case 35680:case 36300:case 36308:case 36293:return Um;case 36289:case 36303:case 36311:case 36292:return Fm}}var ll=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=vm(e.type)}},cl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Om(e.type)}},hl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},rl=/(\w+)(\])?(\[|\.)?/g;function Jc(i,t){i.seq.push(t),i.map[t.id]=t}function Bm(i,t,e){let n=i.name,s=n.length;for(rl.lastIndex=0;;){let r=rl.exec(n),a=rl.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Jc(e,l===void 0?new ll(o,i,t):new cl(o,i,t));break}else{let p=e.map[o];p===void 0&&(p=new hl(o),Jc(e,p)),e=p}}}var es=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);Bm(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Kc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var zm=37297,km=0;function Vm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Qc=new Ut;function Hm(i){Yt._getMatrix(Qc,Yt.workingColorSpace,i);let t=`mat3( ${Qc.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(i)){case gs:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return Dt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function jc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Vm(i.getShaderSource(t),o)}else return r}function Gm(i,t){let e=Hm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Wm={[Do]:"Linear",[Lo]:"Reinhard",[No]:"Cineon",[Uo]:"ACESFilmic",[Oo]:"AgX",[Bo]:"Neutral",[Fo]:"Custom"};function Xm(i,t){let e=Wm[t];return e===void 0?(Dt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Na=new O;function qm(){Yt.getLuminanceCoefficients(Na);let i=Na.x.toFixed(4),t=Na.y.toFixed(4),e=Na.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ym(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hs).join(`
`)}function Zm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $m(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Hs(i){return i!==""}function th(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function eh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Jm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ul(i){return i.replace(Jm,Qm)}var Km=new Map;function Qm(i,t){let e=Gt[t];if(e===void 0){let n=Km.get(t);if(n!==void 0)e=Gt[n],Dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ul(e)}var jm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nh(i){return i.replace(jm,t0)}function t0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ih(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var e0={[Is]:"SHADOWMAP_TYPE_PCF",[Yi]:"SHADOWMAP_TYPE_VSM"};function n0(i){return e0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var i0={[ti]:"ENVMAP_TYPE_CUBE",[gi]:"ENVMAP_TYPE_CUBE",[Ds]:"ENVMAP_TYPE_CUBE_UV"};function s0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":i0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var r0={[gi]:"ENVMAP_MODE_REFRACTION"};function a0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":r0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var o0={[Io]:"ENVMAP_BLENDING_MULTIPLY",[yc]:"ENVMAP_BLENDING_MIX",[Sc]:"ENVMAP_BLENDING_ADD"};function l0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":o0[i.combine]||"ENVMAP_BLENDING_NONE"}function c0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function h0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=n0(e),l=s0(e),u=a0(e),p=l0(e),h=c0(e),d=Ym(e),g=Zm(r),y=s.createProgram(),m,f,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Hs).join(`
`),f.length>0&&(f+=`
`)):(m=[ih(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),f=[ih(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fn?"#define TONE_MAPPING":"",e.toneMapping!==fn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==fn?Xm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,Gm("linearToOutputTexel",e.outputColorSpace),qm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hs).join(`
`)),a=ul(a),a=th(a,e),a=eh(a,e),o=ul(o),o=th(o,e),o=eh(o,e),a=nh(a),o=nh(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Zo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let C=b+m+a,S=b+f+o,M=Kc(s,s.VERTEX_SHADER,C),w=Kc(s,s.FRAGMENT_SHADER,S);s.attachShader(y,M),s.attachShader(y,w),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(I){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(y)||"",k=s.getShaderInfoLog(M)||"",N=s.getShaderInfoLog(w)||"",L=z.trim(),F=k.trim(),q=N.trim(),J=!0,V=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,M,w);else{let W=jc(s,M,"vertex"),Z=jc(s,w,"fragment");Lt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+L+`
`+W+`
`+Z)}else L!==""?Dt("WebGLProgram: Program Info Log:",L):(F===""||q==="")&&(V=!1);V&&(I.diagnostics={runnable:J,programLog:L,vertexShader:{log:F,prefix:m},fragmentShader:{log:q,prefix:f}})}s.deleteShader(M),s.deleteShader(w),x=new es(s,y),T=$m(s,y)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(y,zm)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=km++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=M,this.fragmentShader=w,this}var u0=0,dl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new fl(t),e.set(t,n)),n}},fl=class{constructor(t){this.id=u0++,this.code=t,this.usedTimes=0}};function d0(i){return i===ni||i===Bs||i===zs}function f0(i,t,e,n,s,r){let a=new ys,o=new dl,c=new Set,l=[],u=new Map,p=n.logarithmicDepthBuffer,h=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function y(x,T,P,I,z,k){let N=I.fog,L=z.geometry,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,J=t.get(x.envMap||F,q),V=J&&J.mapping===Ds?J.image.height:null,W=d[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Dt("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let Z=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,_t=Z!==void 0?Z.length:0,wt=0;L.morphAttributes.position!==void 0&&(wt=1),L.morphAttributes.normal!==void 0&&(wt=2),L.morphAttributes.color!==void 0&&(wt=3);let Kt,Ot,Xt,$;if(W){let ce=An[W];Kt=ce.vertexShader,Ot=ce.fragmentShader}else{Kt=x.vertexShader,Ot=x.fragmentShader;let ce=o.getVertexShaderStage(x),Qt=o.getFragmentShaderStage(x);o.update(x,ce,Qt),Xt=ce.id,$=Qt.id}let et=i.getRenderTarget(),yt=i.state.buffers.depth.getReversed(),Nt=z.isInstancedMesh===!0,gt=z.isBatchedMesh===!0,Bt=!!x.map,de=!!x.matcap,kt=!!J,$t=!!x.aoMap,ee=!!x.lightMap,Wt=!!x.bumpMap&&x.wireframe===!1,re=!!x.normalMap,ye=!!x.displacementMap,Ie=!!x.emissiveMap,nt=!!x.metalnessMap,st=!!x.roughnessMap,A=x.anisotropy>0,At=x.clearcoat>0,vt=x.dispersion>0,E=x.retroreflectivity>0,v=x.iridescence>0,B=x.sheen>0,X=x.transmission>0,K=A&&!!x.anisotropyMap,rt=At&&!!x.clearcoatMap,at=At&&!!x.clearcoatNormalMap,Q=At&&!!x.clearcoatRoughnessMap,tt=v&&!!x.iridescenceMap,ot=v&&!!x.iridescenceThicknessMap,Ct=B&&!!x.sheenColorMap,ut=B&&!!x.sheenRoughnessMap,lt=!!x.specularMap,Rt=!!x.specularColorMap,It=!!x.specularIntensityMap,Ft=X&&!!x.transmissionMap,U=X&&!!x.thicknessMap,ct=!!x.gradientMap,j=!!x.alphaMap,ht=x.alphaTest>0,mt=!!x.alphaHash,it=!!x.extensions,Pt=fn;x.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Pt=i.toneMapping);let Tt={shaderID:W,shaderType:x.type,shaderName:x.name,vertexShader:Kt,fragmentShader:Ot,defines:x.defines,customVertexShaderID:Xt,customFragmentShaderID:$,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:gt,batchingColor:gt&&z._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&z.instanceColor!==null,instancingMorph:Nt&&z.morphTexture!==null,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Yt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Bt,matcap:de,envMap:kt,envMapMode:kt&&J.mapping,envMapCubeUVHeight:V,aoMap:$t,lightMap:ee,bumpMap:Wt,normalMap:re,displacementMap:ye,emissiveMap:Ie,normalMapObjectSpace:re&&x.normalMapType===wc,normalMapTangentSpace:re&&x.normalMapType===Yo,packedNormalMap:re&&x.normalMapType===Yo&&d0(x.normalMap.format),metalnessMap:nt,roughnessMap:st,anisotropy:A,anisotropyMap:K,clearcoat:At,clearcoatMap:rt,clearcoatNormalMap:at,clearcoatRoughnessMap:Q,dispersion:vt,retroreflection:E,iridescence:v,iridescenceMap:tt,iridescenceThicknessMap:ot,sheen:B,sheenColorMap:Ct,sheenRoughnessMap:ut,specularMap:lt,specularColorMap:Rt,specularIntensityMap:It,transmission:X,transmissionMap:Ft,thicknessMap:U,gradientMap:ct,opaque:x.transparent===!1&&x.blending===Zi&&x.alphaToCoverage===!1,alphaMap:j,alphaTest:ht,alphaHash:mt,combine:x.combine,mapUv:Bt&&g(x.map.channel),aoMapUv:$t&&g(x.aoMap.channel),lightMapUv:ee&&g(x.lightMap.channel),bumpMapUv:Wt&&g(x.bumpMap.channel),normalMapUv:re&&g(x.normalMap.channel),displacementMapUv:ye&&g(x.displacementMap.channel),emissiveMapUv:Ie&&g(x.emissiveMap.channel),metalnessMapUv:nt&&g(x.metalnessMap.channel),roughnessMapUv:st&&g(x.roughnessMap.channel),anisotropyMapUv:K&&g(x.anisotropyMap.channel),clearcoatMapUv:rt&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:at&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:ut&&g(x.sheenRoughnessMap.channel),specularMapUv:lt&&g(x.specularMap.channel),specularColorMapUv:Rt&&g(x.specularColorMap.channel),specularIntensityMapUv:It&&g(x.specularIntensityMap.channel),transmissionMapUv:Ft&&g(x.transmissionMap.channel),thicknessMapUv:U&&g(x.thicknessMap.channel),alphaMapUv:j&&g(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(re||A),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!L.attributes.uv&&(Bt||j),fog:!!N,useFog:x.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&re===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:yt,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:wt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pt,decodeVideoTexture:Bt&&x.map.isVideoTexture===!0&&Yt.getTransfer(x.map.colorSpace)===te,decodeVideoTextureEmissive:Ie&&x.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(x.emissiveMap.colorSpace)===te,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Pe,flipSided:x.side===De,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:it&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&x.extensions.multiDraw===!0||gt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Tt.vertexUv1s=c.has(1),Tt.vertexUv2s=c.has(2),Tt.vertexUv3s=c.has(3),c.clear(),Tt}function m(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)T.push(P),T.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(f(T,x),b(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function f(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function b(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function C(x){let T=d[x.type],P;if(T){let I=An[T];P=Bc.clone(I.uniforms)}else P=x.uniforms;return P}function S(x,T){let P=u.get(T);return P!==void 0?++P.usedTimes:(P=new h0(i,T,x,s),l.push(P),u.set(T,P)),P}function M(x){if(--x.usedTimes===0){let T=l.indexOf(x);l[T]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function R(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:C,acquireProgram:S,releaseProgram:M,releaseShaderCache:w,programs:l,dispose:R}}function p0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function m0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function sh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function rh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,g,y,m,f){let b=i[t];return b===void 0?(b={id:h.id,object:h,geometry:d,material:g,materialVariant:a(h),groupOrder:y,renderOrder:h.renderOrder,z:m,group:f},i[t]=b):(b.id=h.id,b.object=h,b.geometry=d,b.material=g,b.materialVariant=a(h),b.groupOrder=y,b.renderOrder=h.renderOrder,b.z=m,b.group=f),t++,b}function c(h,d,g,y,m,f,b){b.reversedDepth===!0&&(m=-m);let C=o(h,d,g,y,m,f);g.transmission>0?n.push(C):g.transparent===!0?s.push(C):e.push(C)}function l(h,d,g,y,m,f){let b=o(h,d,g,y,m,f);g.transmission>0?n.unshift(b):g.transparent===!0?s.unshift(b):e.unshift(b)}function u(h,d){e.length>1&&e.sort(h||m0),n.length>1&&n.sort(d||sh),s.length>1&&s.sort(d||sh)}function p(){for(let h=t,d=i.length;h<d;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:p,sort:u}}function g0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new rh,i.set(n,[a])):s>=r.length?(a=new rh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function v0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new O,color:new Ht};break;case"SpotLight":e={position:new O,direction:new O,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function x0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var _0=0;function y0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function S0(i){let t=new v0,e=x0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new O);let s=new O,r=new oe,a=new oe;function o(l){let u=0,p=0,h=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let d=0,g=0,y=0,m=0,f=0,b=0,C=0,S=0,M=0,w=0,R=0,x=0,T=0,P=0;l.sort(y0);for(let z=0,k=l.length;z<k;z++){let N=l[z],L=N.color,F=N.intensity,q=N.distance,J=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===ni?J=N.shadow.map.texture:J=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=L.r*F,p+=L.g*F,h+=L.b*F;else if(N.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(N.sh.coefficients[V],F);P++}else if(N.isSunLight){let V=t.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let W=N.shadow,Z=e.get(N);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),n.sunShadow[g]=Z,n.sunShadowMap[g]=J;let _t=W.getViewportCount();for(let wt=0;wt<_t;wt++)n.sunShadowMatrix[y+wt]=W.getMatrix(wt),n.sunShadowCascade[y+wt]=W._cascadeData[wt];y+=_t,g++}n.sun[d]=V,d++}else if(N.isDirectionalLight){let V=t.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let W=N.shadow,Z=e.get(N);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,n.directionalShadow[m]=Z,n.directionalShadowMap[m]=J,n.directionalShadowMatrix[m]=N.shadow.matrix,M++}n.directional[m]=V,m++}else if(N.isSpotLight){let V=t.get(N);V.position.setFromMatrixPosition(N.matrixWorld),V.color.copy(L).multiplyScalar(F),V.distance=q,V.coneCos=Math.cos(N.angle),V.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),V.decay=N.decay,n.spot[b]=V;let W=N.shadow;if(N.map&&(n.spotLightMap[x]=N.map,x++,W.updateMatrices(N),N.castShadow&&T++),n.spotLightMatrix[b]=W.matrix,N.castShadow){let Z=e.get(N);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,n.spotShadow[b]=Z,n.spotShadowMap[b]=J,R++}b++}else if(N.isRectAreaLight){let V=t.get(N);V.color.copy(L).multiplyScalar(F),V.halfWidth.set(N.width*.5,0,0),V.halfHeight.set(0,N.height*.5,0),n.rectArea[C]=V,C++}else if(N.isPointLight){let V=t.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity),V.distance=N.distance,V.decay=N.decay,N.castShadow){let W=N.shadow,Z=e.get(N);Z.shadowIntensity=W.intensity,Z.shadowBias=W.bias,Z.shadowNormalBias=W.normalBias,Z.shadowRadius=W.radius,Z.shadowMapSize=W.mapSize,Z.shadowCameraNear=W.camera.near,Z.shadowCameraFar=W.camera.far,n.pointShadow[f]=Z,n.pointShadowMap[f]=J,n.pointShadowMatrix[f]=N.shadow.matrix,w++}n.point[f]=V,f++}else if(N.isHemisphereLight){let V=t.get(N);V.skyColor.copy(N.color).multiplyScalar(F),V.groundColor.copy(N.groundColor).multiplyScalar(F),n.hemi[S]=V,S++}}C>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=h;let I=n.hash;(I.sunLength!==d||I.directionalLength!==m||I.pointLength!==f||I.spotLength!==b||I.rectAreaLength!==C||I.hemiLength!==S||I.numSunShadows!==g||I.numDirectionalShadows!==M||I.numPointShadows!==w||I.numSpotShadows!==R||I.numSpotMaps!==x||I.numLightProbes!==P)&&(n.sun.length=d,n.directional.length=m,n.spot.length=b,n.rectArea.length=C,n.point.length=f,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,I.sunLength=d,I.directionalLength=m,I.pointLength=f,I.spotLength=b,I.rectAreaLength=C,I.hemiLength=S,I.numSunShadows=g,I.numDirectionalShadows=M,I.numPointShadows=w,I.numSpotShadows=R,I.numSpotMaps=x,I.numLightProbes=P,n.version=_0++)}function c(l,u){let p=0,h=0,d=0,g=0,y=0,m=0,f=u.matrixWorldInverse;for(let b=0,C=l.length;b<C;b++){let S=l[b];if(S.isSunLight){let M=n.sun[p];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(f),p++}else if(S.isDirectionalLight){let M=n.directional[h];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),h++}else if(S.isSpotLight){let M=n.spot[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(f),g++}else if(S.isRectAreaLight){let M=n.rectArea[y];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(f),a.identity(),r.copy(S.matrixWorld),r.premultiply(f),a.extractRotation(r),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),y++}else if(S.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(f),d++}else if(S.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(f),m++}}}return{setup:o,setupView:c,state:n}}function ah(i){let t=new S0(i),e=[],n=[],s=[];function r(h){p.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}let p={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function M0(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new ah(i),t.set(s,[o])):r>=a.length?(o=new ah(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var b0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,T0=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],E0=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],oh=new oe,Vs=new O,al=new O;function A0(i,t,e){let n=new ws,s=new zt,r=new zt,a=new xe,o=new Lr,c=new Nr,l={},u=e.maxTextureSize,p={[jn]:De,[De]:jn,[Pe]:Pe},h=new ne({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:b0,fragmentShader:w0}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let g=new Ee;g.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ue(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Is;let f=this.type;this.render=function(w,R,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===ec&&(Dt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Is);let T=i.getRenderTarget(),P=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Tn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let k=f!==this.type;k&&R.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(L=>L.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,L=w.length;N<L;N++){let F=w[N],q=F.shadow;if(q===void 0){Dt("WebGLShadowMap:",F,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let J=q.getFrameExtents();s.multiply(J),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/J.x),s.x=r.x*J.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/J.y),s.y=r.y*J.y,q.mapSize.y=r.y));let V=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=V,q.map===null||k===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Yi){if(F.isPointLight){Dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new ge(s.x,s.y,{format:ni,type:Be,minFilter:me,magFilter:me,generateMipmaps:!1}),q.map.texture.name=F.name+".shadowMap",q.map.depthTexture=new nn(s.x,s.y,pn),q.map.depthTexture.name=F.name+".shadowMapDepth",q.map.depthTexture.format=Sn,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=ve,q.map.depthTexture.magFilter=ve}else F.isPointLight?(q.map=new ns(s.x),q.map.depthTexture=new Ir(s.x,Ke)):(q.map=new ge(s.x,s.y),q.map.depthTexture=new nn(s.x,s.y,Ke)),q.map.depthTexture.name=F.name+".shadowMap",q.map.depthTexture.format=Sn,this.type===Is?(q.map.depthTexture.compareFunction=V?Da:Ia,q.map.depthTexture.minFilter=me,q.map.depthTexture.magFilter=me):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=ve,q.map.depthTexture.magFilter=ve);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let W=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();F.isPointLight!==!0&&q.updateMatrices(F,x);for(let Z=0;Z<W;Z++){let _t=q.getCamera(Z);if(F.isPointLight){let wt=q.camera,Kt=q.matrix,Ot=F.distance||wt.far;Ot!==wt.far&&(wt.far=Ot,wt.updateProjectionMatrix()),Vs.setFromMatrixPosition(F.matrixWorld),wt.position.copy(Vs),al.copy(wt.position),al.add(T0[Z]),wt.up.copy(E0[Z]),wt.lookAt(al),wt.updateMatrixWorld(),Kt.makeTranslation(-Vs.x,-Vs.y,-Vs.z),oh.multiplyMatrices(wt.projectionMatrix,wt.matrixWorldInverse),q._frustum.setFromProjectionMatrix(oh,wt.coordinateSystem,wt.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,Z),i.clear();else{Z===0&&(i.setRenderTarget(q.map),i.clear());let wt=q.getViewport(Z);a.set(r.x*wt.x,r.y*wt.y,r.x*wt.z,r.y*wt.w),z.viewport(a)}n=q.getFrustum(Z),S(R,x,_t,F,this.type)}q.isPointLightShadow!==!0&&this.type===Yi&&b(q,x),q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(T,P,I)};function b(w,R){let x=t.update(y);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new ge(s.x,s.y,{format:ni,type:Be}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,x,h,y,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,x,d,y,null)}function C(w,R,x,T){let P=null,I=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)P=I;else if(P=x.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let z=P.uuid,k=R.uuid,N=l[z];N===void 0&&(N={},l[z]=N);let L=N[k];L===void 0&&(L=P.clone(),N[k]=L,R.addEventListener("dispose",M)),P=L}if(P.visible=R.visible,P.wireframe=R.wireframe,T===Yi?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:p[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let z=i.properties.get(P);z.light=x}return P}function S(w,R,x,T,P){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===Yi)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let k=t.update(w),N=w.material;if(Array.isArray(N)){let L=k.groups;for(let F=0,q=L.length;F<q;F++){let J=L[F],V=N[J.materialIndex];if(V&&V.visible){let W=C(w,V,T,P);w.onBeforeShadow(i,w,R,x,k,W,J),i.renderBufferDirect(x,null,k,W,w,J),w.onAfterShadow(i,w,R,x,k,W,J)}}}else if(N.visible){let L=C(w,N,T,P);w.onBeforeShadow(i,w,R,x,k,L,null),i.renderBufferDirect(x,null,k,L,w,null),w.onAfterShadow(i,w,R,x,k,L,null)}}let z=w.children;for(let k=0,N=z.length;k<N;k++)S(z[k],R,x,T,P)}function M(w){w.target.removeEventListener("dispose",M);for(let x in l){let T=l[x],P=w.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function C0(i,t){function e(){let U=!1,ct=new xe,j=null,ht=new xe(0,0,0,0);return{setMask:function(mt){j!==mt&&!U&&(i.colorMask(mt,mt,mt,mt),j=mt)},setLocked:function(mt){U=mt},setClear:function(mt,it,Pt,Tt,ce){ce===!0&&(mt*=Tt,it*=Tt,Pt*=Tt),ct.set(mt,it,Pt,Tt),ht.equals(ct)===!1&&(i.clearColor(mt,it,Pt,Tt),ht.copy(ct))},reset:function(){U=!1,j=null,ht.set(-1,0,0,0)}}}function n(){let U=!1,ct=!1,j=null,ht=null,mt=null;return{setReversed:function(it){if(ct!==it){let Pt=t.get("EXT_clip_control");it?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),ct=it;let Tt=mt;mt=null,this.setClear(Tt)}},getReversed:function(){return ct},setTest:function(it){it?et(i.DEPTH_TEST):yt(i.DEPTH_TEST)},setMask:function(it){j!==it&&!U&&(i.depthMask(it),j=it)},setFunc:function(it){if(ct&&(it=Fc[it]),ht!==it){switch(it){case gr:i.depthFunc(i.NEVER);break;case vr:i.depthFunc(i.ALWAYS);break;case xr:i.depthFunc(i.LESS);break;case ki:i.depthFunc(i.LEQUAL);break;case _r:i.depthFunc(i.EQUAL);break;case yr:i.depthFunc(i.GEQUAL);break;case Sr:i.depthFunc(i.GREATER);break;case Mr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ht=it}},setLocked:function(it){U=it},setClear:function(it){mt!==it&&(mt=it,ct&&(it=1-it),i.clearDepth(it))},reset:function(){U=!1,j=null,ht=null,mt=null,ct=!1}}}function s(){let U=!1,ct=null,j=null,ht=null,mt=null,it=null,Pt=null,Tt=null,ce=null;return{setTest:function(Qt){U||(Qt?et(i.STENCIL_TEST):yt(i.STENCIL_TEST))},setMask:function(Qt){ct!==Qt&&!U&&(i.stencilMask(Qt),ct=Qt)},setFunc:function(Qt,an,xn){(j!==Qt||ht!==an||mt!==xn)&&(i.stencilFunc(Qt,an,xn),j=Qt,ht=an,mt=xn)},setOp:function(Qt,an,xn){(it!==Qt||Pt!==an||Tt!==xn)&&(i.stencilOp(Qt,an,xn),it=Qt,Pt=an,Tt=xn)},setLocked:function(Qt){U=Qt},setClear:function(Qt){ce!==Qt&&(i.clearStencil(Qt),ce=Qt)},reset:function(){U=!1,ct=null,j=null,ht=null,mt=null,it=null,Pt=null,Tt=null,ce=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,u={},p={},h={},d=new WeakMap,g=[],y=null,m=!1,f=null,b=null,C=null,S=null,M=null,w=null,R=null,x=new Ht(0,0,0),T=0,P=!1,I=null,z=null,k=null,N=null,L=null,F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,J=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(V)[1]),q=J>=1):V.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),q=J>=2);let W=null,Z={},_t=i.getParameter(i.SCISSOR_BOX),wt=i.getParameter(i.VIEWPORT),Kt=new xe().fromArray(_t),Ot=new xe().fromArray(wt);function Xt(U,ct,j,ht){let mt=new Uint8Array(4),it=i.createTexture();i.bindTexture(U,it),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pt=0;Pt<j;Pt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,ht,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(ct+Pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return it}let $={};$[i.TEXTURE_2D]=Xt(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=Xt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=Xt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=Xt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(i.DEPTH_TEST),a.setFunc(ki),Wt(!1),re(Eo),et(i.CULL_FACE),$t(Tn);function et(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function yt(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function Nt(U,ct){return h[U]!==ct?(i.bindFramebuffer(U,ct),h[U]=ct,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ct),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function gt(U,ct){let j=g,ht=!1;if(U){j=d.get(ct),j===void 0&&(j=[],d.set(ct,j));let mt=U.textures;if(j.length!==mt.length||j[0]!==i.COLOR_ATTACHMENT0){for(let it=0,Pt=mt.length;it<Pt;it++)j[it]=i.COLOR_ATTACHMENT0+it;j.length=mt.length,ht=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,ht=!0);ht&&i.drawBuffers(j)}function Bt(U){return y!==U?(i.useProgram(U),y=U,!0):!1}let de={[mi]:i.FUNC_ADD,[ic]:i.FUNC_SUBTRACT,[sc]:i.FUNC_REVERSE_SUBTRACT};de[rc]=i.MIN,de[ac]=i.MAX;let kt={[oc]:i.ZERO,[lc]:i.ONE,[cc]:i.SRC_COLOR,[Ro]:i.SRC_ALPHA,[mc]:i.SRC_ALPHA_SATURATE,[fc]:i.DST_COLOR,[uc]:i.DST_ALPHA,[hc]:i.ONE_MINUS_SRC_COLOR,[Po]:i.ONE_MINUS_SRC_ALPHA,[pc]:i.ONE_MINUS_DST_COLOR,[dc]:i.ONE_MINUS_DST_ALPHA,[gc]:i.CONSTANT_COLOR,[vc]:i.ONE_MINUS_CONSTANT_COLOR,[xc]:i.CONSTANT_ALPHA,[_c]:i.ONE_MINUS_CONSTANT_ALPHA};function $t(U,ct,j,ht,mt,it,Pt,Tt,ce,Qt){if(U===Tn){m===!0&&(yt(i.BLEND),m=!1);return}if(m===!1&&(et(i.BLEND),m=!0),U!==nc){if(U!==f||Qt!==P){if((b!==mi||M!==mi)&&(i.blendEquation(i.FUNC_ADD),b=mi,M=mi),Qt)switch(U){case Zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $i:i.blendFunc(i.ONE,i.ONE);break;case Ao:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Co:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Lt("WebGLState: Invalid blending: ",U);break}else switch(U){case Zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ao:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Co:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",U);break}C=null,S=null,w=null,R=null,x.set(0,0,0),T=0,f=U,P=Qt}return}mt=mt||ct,it=it||j,Pt=Pt||ht,(ct!==b||mt!==M)&&(i.blendEquationSeparate(de[ct],de[mt]),b=ct,M=mt),(j!==C||ht!==S||it!==w||Pt!==R)&&(i.blendFuncSeparate(kt[j],kt[ht],kt[it],kt[Pt]),C=j,S=ht,w=it,R=Pt),(Tt.equals(x)===!1||ce!==T)&&(i.blendColor(Tt.r,Tt.g,Tt.b,ce),x.copy(Tt),T=ce),f=U,P=!1}function ee(U,ct){U.side===Pe?yt(i.CULL_FACE):et(i.CULL_FACE);let j=U.side===De;ct&&(j=!j),Wt(j),U.blending===Zi&&U.transparent===!1?$t(Tn):$t(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let ht=U.stencilWrite;o.setTest(ht),ht&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ie(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):yt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(U){I!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),I=U)}function re(U){U!==jl?(et(i.CULL_FACE),U!==z&&(U===Eo?i.cullFace(i.BACK):U===tc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):yt(i.CULL_FACE),z=U}function ye(U){U!==k&&(q&&i.lineWidth(U),k=U)}function Ie(U,ct,j){U?(et(i.POLYGON_OFFSET_FILL),(N!==ct||L!==j)&&(N=ct,L=j,a.getReversed()&&(ct=-ct),i.polygonOffset(ct,j))):yt(i.POLYGON_OFFSET_FILL)}function nt(U){U?et(i.SCISSOR_TEST):yt(i.SCISSOR_TEST)}function st(U){U===void 0&&(U=i.TEXTURE0+F-1),W!==U&&(i.activeTexture(U),W=U)}function A(U,ct,j){j===void 0&&(W===null?j=i.TEXTURE0+F-1:j=W);let ht=Z[j];ht===void 0&&(ht={type:void 0,texture:void 0},Z[j]=ht),(ht.type!==U||ht.texture!==ct)&&(W!==j&&(i.activeTexture(j),W=j),i.bindTexture(U,ct||$[U]),ht.type=U,ht.texture=ct)}function At(){let U=Z[W];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function vt(){try{i.compressedTexImage2D(...arguments)}catch(U){Lt("WebGLState:",U)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(U){Lt("WebGLState:",U)}}function v(){try{i.texSubImage2D(...arguments)}catch(U){Lt("WebGLState:",U)}}function B(){try{i.texSubImage3D(...arguments)}catch(U){Lt("WebGLState:",U)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(U){Lt("WebGLState:",U)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(U){Lt("WebGLState:",U)}}function rt(){try{i.texStorage2D(...arguments)}catch(U){Lt("WebGLState:",U)}}function at(){try{i.texStorage3D(...arguments)}catch(U){Lt("WebGLState:",U)}}function Q(){try{i.texImage2D(...arguments)}catch(U){Lt("WebGLState:",U)}}function tt(){try{i.texImage3D(...arguments)}catch(U){Lt("WebGLState:",U)}}function ot(U){return p[U]!==void 0?p[U]:i.getParameter(U)}function Ct(U,ct){p[U]!==ct&&(i.pixelStorei(U,ct),p[U]=ct)}function ut(U){Kt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Kt.copy(U))}function lt(U){Ot.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Ot.copy(U))}function Rt(U,ct){let j=l.get(ct);j===void 0&&(j=new WeakMap,l.set(ct,j));let ht=j.get(U);ht===void 0&&(ht=i.getUniformBlockIndex(ct,U.name),j.set(U,ht))}function It(U,ct){let ht=l.get(ct).get(U);c.get(ct)!==ht&&(i.uniformBlockBinding(ct,ht,U.__bindingPointIndex),c.set(ct,ht))}function Ft(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},p={},W=null,Z={},h={},d=new WeakMap,g=[],y=null,m=!1,f=null,b=null,C=null,S=null,M=null,w=null,R=null,x=new Ht(0,0,0),T=0,P=!1,I=null,z=null,k=null,N=null,L=null,Kt.set(0,0,i.canvas.width,i.canvas.height),Ot.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:yt,bindFramebuffer:Nt,drawBuffers:gt,useProgram:Bt,setBlending:$t,setMaterial:ee,setFlipSided:Wt,setCullFace:re,setLineWidth:ye,setPolygonOffset:Ie,setScissorTest:nt,activeTexture:st,bindTexture:A,unbindTexture:At,compressedTexImage2D:vt,compressedTexImage3D:E,texImage2D:Q,texImage3D:tt,pixelStorei:Ct,getParameter:ot,updateUBOMapping:Rt,uniformBlockBinding:It,texStorage2D:rt,texStorage3D:at,texSubImage2D:v,texSubImage3D:B,compressedTexSubImage2D:X,compressedTexSubImage3D:K,scissor:ut,viewport:lt,reset:Ft}}function R0(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new zt,u=new WeakMap,p=new Set,h,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(E,v){return g?new OffscreenCanvas(E,v):xs("canvas")}function m(E,v,B){let X=1,K=vt(E);if((K.width>B||K.height>B)&&(X=B/Math.max(K.width,K.height)),X<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let rt=Math.floor(X*K.width),at=Math.floor(X*K.height);h===void 0&&(h=y(rt,at));let Q=v?y(rt,at):h;return Q.width=rt,Q.height=at,Q.getContext("2d").drawImage(E,0,0,rt,at),Dt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+rt+"x"+at+")."),Q}else return"data"in E&&Dt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),E;return E}function f(E){return E.generateMipmaps}function b(E){i.generateMipmap(E)}function C(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(E,v,B,X,K,rt=!1){if(E!==null){if(i[E]!==void 0)return i[E];Dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let at;X&&(at=t.get("EXT_texture_norm16"),at||Dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=v;if(v===i.RED&&(B===i.FLOAT&&(Q=i.R32F),B===i.HALF_FLOAT&&(Q=i.R16F),B===i.UNSIGNED_BYTE&&(Q=i.R8),B===i.UNSIGNED_SHORT&&at&&(Q=at.R16_EXT),B===i.SHORT&&at&&(Q=at.R16_SNORM_EXT)),v===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.R8UI),B===i.UNSIGNED_SHORT&&(Q=i.R16UI),B===i.UNSIGNED_INT&&(Q=i.R32UI),B===i.BYTE&&(Q=i.R8I),B===i.SHORT&&(Q=i.R16I),B===i.INT&&(Q=i.R32I)),v===i.RG&&(B===i.FLOAT&&(Q=i.RG32F),B===i.HALF_FLOAT&&(Q=i.RG16F),B===i.UNSIGNED_BYTE&&(Q=i.RG8),B===i.UNSIGNED_SHORT&&at&&(Q=at.RG16_EXT),B===i.SHORT&&at&&(Q=at.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.RG8UI),B===i.UNSIGNED_SHORT&&(Q=i.RG16UI),B===i.UNSIGNED_INT&&(Q=i.RG32UI),B===i.BYTE&&(Q=i.RG8I),B===i.SHORT&&(Q=i.RG16I),B===i.INT&&(Q=i.RG32I)),v===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),B===i.UNSIGNED_INT&&(Q=i.RGB32UI),B===i.BYTE&&(Q=i.RGB8I),B===i.SHORT&&(Q=i.RGB16I),B===i.INT&&(Q=i.RGB32I)),v===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),B===i.UNSIGNED_INT&&(Q=i.RGBA32UI),B===i.BYTE&&(Q=i.RGBA8I),B===i.SHORT&&(Q=i.RGBA16I),B===i.INT&&(Q=i.RGBA32I)),v===i.RGB&&(B===i.UNSIGNED_SHORT&&at&&(Q=at.RGB16_EXT),B===i.SHORT&&at&&(Q=at.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),v===i.RGBA){let tt=rt?gs:Yt.getTransfer(K);B===i.FLOAT&&(Q=i.RGBA32F),B===i.HALF_FLOAT&&(Q=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Q=tt===te?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&at&&(Q=at.RGBA16_EXT),B===i.SHORT&&at&&(Q=at.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function M(E,v){let B;return E?v===null||v===Ke||v===Ki?B=i.DEPTH24_STENCIL8:v===pn?B=i.DEPTH32F_STENCIL8:v===Ji&&(B=i.DEPTH24_STENCIL8,Dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ke||v===Ki?B=i.DEPTH_COMPONENT24:v===pn?B=i.DEPTH_COMPONENT32F:v===Ji&&(B=i.DEPTH_COMPONENT16),B}function w(E,v){return f(E)===!0||E.isFramebufferTexture&&E.minFilter!==ve&&E.minFilter!==me?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function R(E){let v=E.target;v.removeEventListener("dispose",R),T(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&p.delete(v)}function x(E){let v=E.target;v.removeEventListener("dispose",x),I(v)}function T(E){let v=n.get(E);if(v.__webglInit===void 0)return;let B=E.source,X=d.get(B);if(X){let K=X[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&P(E),Object.keys(X).length===0&&d.delete(B)}n.remove(E)}function P(E){let v=n.get(E);i.deleteTexture(v.__webglTexture);let B=E.source,X=d.get(B);delete X[v.__cacheKey],a.memory.textures--}function I(E){let v=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(v.__webglFramebuffer[X]))for(let K=0;K<v.__webglFramebuffer[X].length;K++)i.deleteFramebuffer(v.__webglFramebuffer[X][K]);else i.deleteFramebuffer(v.__webglFramebuffer[X]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[X])}else{if(Array.isArray(v.__webglFramebuffer))for(let X=0;X<v.__webglFramebuffer.length;X++)i.deleteFramebuffer(v.__webglFramebuffer[X]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let X=0;X<v.__webglColorRenderbuffer.length;X++)v.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let B=E.textures;for(let X=0,K=B.length;X<K;X++){let rt=n.get(B[X]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),a.memory.textures--),n.remove(B[X])}n.remove(E)}let z=0;function k(){z=0}function N(){return z}function L(E){z=E}function F(){let E=z;return E>=s.maxTextures&&Dt("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,E}function q(E){let v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function J(E,v){let B=n.get(E);if(E.isVideoTexture&&A(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&B.__version!==E.version){let X=E.image;if(X===null)Dt("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Dt("WebGLRenderer: Texture marked for update but image is incomplete");else{yt(B,E,v);return}}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+v)}function V(E,v){let B=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){yt(B,E,v);return}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+v)}function W(E,v){let B=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){yt(B,E,v);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+v)}function Z(E,v){let B=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&B.__version!==E.version){Nt(B,E,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+v)}let _t={[br]:i.REPEAT,[tn]:i.CLAMP_TO_EDGE,[wr]:i.MIRRORED_REPEAT},wt={[ve]:i.NEAREST,[Mc]:i.NEAREST_MIPMAP_NEAREST,[Ls]:i.NEAREST_MIPMAP_LINEAR,[me]:i.LINEAR,[Zr]:i.LINEAR_MIPMAP_NEAREST,[sn]:i.LINEAR_MIPMAP_LINEAR},Kt={[Ec]:i.NEVER,[Ic]:i.ALWAYS,[Ac]:i.LESS,[Ia]:i.LEQUAL,[Cc]:i.EQUAL,[Da]:i.GEQUAL,[Rc]:i.GREATER,[Pc]:i.NOTEQUAL};function Ot(E,v){if(v.type===pn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===me||v.magFilter===Zr||v.magFilter===Ls||v.magFilter===sn||v.minFilter===me||v.minFilter===Zr||v.minFilter===Ls||v.minFilter===sn)&&Dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,_t[v.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,_t[v.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,_t[v.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,wt[v.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,wt[v.minFilter]),v.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Kt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===ve||v.minFilter!==Ls&&v.minFilter!==sn||v.type===pn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Xt(E,v){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",R));let X=v.source,K=d.get(X);K===void 0&&(K={},d.set(X,K));let rt=q(v);if(rt!==E.__cacheKey){K[rt]===void 0&&(K[rt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),K[rt].usedTimes++;let at=K[E.__cacheKey];at!==void 0&&(K[E.__cacheKey].usedTimes--,at.usedTimes===0&&P(v)),E.__cacheKey=rt,E.__webglTexture=K[rt].texture}return B}function $(E,v,B){return Math.floor(Math.floor(E/B)/v)}function et(E,v,B,X){let rt=E.updateRanges;if(rt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,B,X,v.data);else{rt.sort((Ct,ut)=>Ct.start-ut.start);let at=0;for(let Ct=1;Ct<rt.length;Ct++){let ut=rt[at],lt=rt[Ct],Rt=ut.start+ut.count,It=$(lt.start,v.width,4),Ft=$(ut.start,v.width,4);lt.start<=Rt+1&&It===Ft&&$(lt.start+lt.count-1,v.width,4)===It?ut.count=Math.max(ut.count,lt.start+lt.count-ut.start):(++at,rt[at]=lt)}rt.length=at+1;let Q=e.getParameter(i.UNPACK_ROW_LENGTH),tt=e.getParameter(i.UNPACK_SKIP_PIXELS),ot=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Ct=0,ut=rt.length;Ct<ut;Ct++){let lt=rt[Ct],Rt=Math.floor(lt.start/4),It=Math.ceil(lt.count/4),Ft=Rt%v.width,U=Math.floor(Rt/v.width),ct=It,j=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Ft),e.pixelStorei(i.UNPACK_SKIP_ROWS,U),e.texSubImage2D(i.TEXTURE_2D,0,Ft,U,ct,j,B,X,v.data)}E.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Q),e.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(i.UNPACK_SKIP_ROWS,ot)}}function yt(E,v,B){let X=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=i.TEXTURE_3D);let K=Xt(E,v),rt=v.source;e.bindTexture(X,E.__webglTexture,i.TEXTURE0+B);let at=n.get(rt);if(rt.version!==at.__version||K===!0){if(e.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let j=Yt.getPrimaries(Yt.workingColorSpace),ht=v.colorSpace===mn?null:Yt.getPrimaries(v.colorSpace),mt=v.colorSpace===mn||j===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let tt=m(v.image,!1,s.maxTextureSize);tt=At(v,tt);let ot=r.convert(v.format,v.colorSpace),Ct=r.convert(v.type),ut=S(v.internalFormat,ot,Ct,v.normalized,v.colorSpace,v.isVideoTexture);Ot(X,v);let lt,Rt=v.mipmaps,It=v.isVideoTexture!==!0,Ft=at.__version===void 0||K===!0,U=rt.dataReady,ct=w(v,tt);if(v.isDepthTexture)ut=M(v.format===ei,v.type),Ft&&(It?e.texStorage2D(i.TEXTURE_2D,1,ut,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,ut,tt.width,tt.height,0,ot,Ct,null));else if(v.isDataTexture)if(Rt.length>0){It&&Ft&&e.texStorage2D(i.TEXTURE_2D,ct,ut,Rt[0].width,Rt[0].height);for(let j=0,ht=Rt.length;j<ht;j++)lt=Rt[j],It?U&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,lt.width,lt.height,ot,Ct,lt.data):e.texImage2D(i.TEXTURE_2D,j,ut,lt.width,lt.height,0,ot,Ct,lt.data);v.generateMipmaps=!1}else It?(Ft&&e.texStorage2D(i.TEXTURE_2D,ct,ut,tt.width,tt.height),U&&et(v,tt,ot,Ct)):e.texImage2D(i.TEXTURE_2D,0,ut,tt.width,tt.height,0,ot,Ct,tt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){It&&Ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,ut,Rt[0].width,Rt[0].height,tt.depth);for(let j=0,ht=Rt.length;j<ht;j++)if(lt=Rt[j],v.format!==rn)if(ot!==null)if(It){if(U)if(v.layerUpdates.size>0){let mt=tl(lt.width,lt.height,v.format,v.type);for(let it of v.layerUpdates){let Pt=lt.data.subarray(it*mt/lt.data.BYTES_PER_ELEMENT,(it+1)*mt/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,it,lt.width,lt.height,1,ot,Pt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,lt.width,lt.height,tt.depth,ot,lt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,ut,lt.width,lt.height,tt.depth,0,lt.data,0,0);else Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,lt.width,lt.height,tt.depth,ot,Ct,lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,ut,lt.width,lt.height,tt.depth,0,ot,Ct,lt.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{It&&Ft&&e.texStorage2D(i.TEXTURE_2D,ct,ut,Rt[0].width,Rt[0].height);for(let j=0,ht=Rt.length;j<ht;j++)lt=Rt[j],v.format!==rn?ot!==null?It?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,lt.width,lt.height,ot,lt.data):e.compressedTexImage2D(i.TEXTURE_2D,j,ut,lt.width,lt.height,0,lt.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?U&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,lt.width,lt.height,ot,Ct,lt.data):e.texImage2D(i.TEXTURE_2D,j,ut,lt.width,lt.height,0,ot,Ct,lt.data)}else if(v.isDataArrayTexture)if(It){if(Ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,ut,tt.width,tt.height,tt.depth),U)if(v.layerUpdates.size>0){let j=tl(tt.width,tt.height,v.format,v.type);for(let ht of v.layerUpdates){let mt=tt.data.subarray(ht*j/tt.data.BYTES_PER_ELEMENT,(ht+1)*j/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ht,tt.width,tt.height,1,ot,Ct,mt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ot,Ct,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ut,tt.width,tt.height,tt.depth,0,ot,Ct,tt.data);else if(v.isData3DTexture)It?(Ft&&e.texStorage3D(i.TEXTURE_3D,ct,ut,tt.width,tt.height,tt.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ot,Ct,tt.data)):e.texImage3D(i.TEXTURE_3D,0,ut,tt.width,tt.height,tt.depth,0,ot,Ct,tt.data);else if(v.isFramebufferTexture){if(Ft)if(It)e.texStorage2D(i.TEXTURE_2D,ct,ut,tt.width,tt.height);else{let j=tt.width,ht=tt.height;for(let mt=0;mt<ct;mt++)e.texImage2D(i.TEXTURE_2D,mt,ut,j,ht,0,ot,Ct,null),j>>=1,ht>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let j=i.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),tt.parentNode!==j){j.appendChild(tt),p.add(v),j.onpaint=ht=>{let mt=ht.changedElements;for(let it of p)mt.includes(it.image)&&(it.needsUpdate=!0)},j.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,tt);else{let mt=i.RGBA,it=i.RGBA,Pt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,mt,it,Pt,tt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Rt.length>0){if(It&&Ft){let j=vt(Rt[0]);e.texStorage2D(i.TEXTURE_2D,ct,ut,j.width,j.height)}for(let j=0,ht=Rt.length;j<ht;j++)lt=Rt[j],It?U&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,ot,Ct,lt):e.texImage2D(i.TEXTURE_2D,j,ut,ot,Ct,lt);v.generateMipmaps=!1}else if(It){if(Ft){let j=vt(tt);e.texStorage2D(i.TEXTURE_2D,ct,ut,j.width,j.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot,Ct,tt)}else e.texImage2D(i.TEXTURE_2D,0,ut,ot,Ct,tt);f(v)&&b(X),at.__version=rt.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function Nt(E,v,B){if(v.image.length!==6)return;let X=Xt(E,v),K=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+B);let rt=n.get(K);if(K.version!==rt.__version||X===!0){e.activeTexture(i.TEXTURE0+B);let at=Yt.getPrimaries(Yt.workingColorSpace),Q=v.colorSpace===mn?null:Yt.getPrimaries(v.colorSpace),tt=v.colorSpace===mn||at===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let ot=v.isCompressedTexture||v.image[0].isCompressedTexture,Ct=v.image[0]&&v.image[0].isDataTexture,ut=[];for(let it=0;it<6;it++)!ot&&!Ct?ut[it]=m(v.image[it],!0,s.maxCubemapSize):ut[it]=Ct?v.image[it].image:v.image[it],ut[it]=At(v,ut[it]);let lt=ut[0],Rt=r.convert(v.format,v.colorSpace),It=r.convert(v.type),Ft=S(v.internalFormat,Rt,It,v.normalized,v.colorSpace),U=v.isVideoTexture!==!0,ct=rt.__version===void 0||X===!0,j=K.dataReady,ht=w(v,lt);Ot(i.TEXTURE_CUBE_MAP,v);let mt;if(ot){U&&ct&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Ft,lt.width,lt.height);for(let it=0;it<6;it++){mt=ut[it].mipmaps;for(let Pt=0;Pt<mt.length;Pt++){let Tt=mt[Pt];v.format!==rn?Rt!==null?U?j&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt,0,0,Tt.width,Tt.height,Rt,Tt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt,Ft,Tt.width,Tt.height,0,Tt.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt,0,0,Tt.width,Tt.height,Rt,It,Tt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt,Ft,Tt.width,Tt.height,0,Rt,It,Tt.data)}}}else{if(mt=v.mipmaps,U&&ct){mt.length>0&&ht++;let it=vt(ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Ft,it.width,it.height)}for(let it=0;it<6;it++)if(Ct){U?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,ut[it].width,ut[it].height,Rt,It,ut[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Ft,ut[it].width,ut[it].height,0,Rt,It,ut[it].data);for(let Pt=0;Pt<mt.length;Pt++){let ce=mt[Pt].image[it].image;U?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt+1,0,0,ce.width,ce.height,Rt,It,ce.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt+1,Ft,ce.width,ce.height,0,Rt,It,ce.data)}}else{U?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Rt,It,ut[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Ft,Rt,It,ut[it]);for(let Pt=0;Pt<mt.length;Pt++){let Tt=mt[Pt];U?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt+1,0,0,Rt,It,Tt.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt+1,Ft,Rt,It,Tt.image[it])}}}f(v)&&b(i.TEXTURE_CUBE_MAP),rt.__version=K.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function gt(E,v,B,X,K,rt){let at=r.convert(B.format,B.colorSpace),Q=r.convert(B.type),tt=S(B.internalFormat,at,Q,B.normalized,B.colorSpace),ot=n.get(v),Ct=n.get(B);if(Ct.__renderTarget=v,!ot.__hasExternalTextures){let ut=Math.max(1,v.width>>rt),lt=Math.max(1,v.height>>rt);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,rt,tt,ut,lt,v.depth,0,at,Q,null):e.texImage2D(K,rt,tt,ut,lt,0,at,Q,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),st(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,K,Ct.__webglTexture,0,nt(v)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,K,Ct.__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(E,v,B){if(i.bindRenderbuffer(i.RENDERBUFFER,E),v.depthBuffer){let X=v.depthTexture,K=X&&X.isDepthTexture?X.type:null,rt=M(v.stencilBuffer,K),at=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;st(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt(v),rt,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt(v),rt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,rt,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,E)}else{let X=v.textures;for(let K=0;K<X.length;K++){let rt=X[K],at=r.convert(rt.format,rt.colorSpace),Q=r.convert(rt.type),tt=S(rt.internalFormat,at,Q,rt.normalized,rt.colorSpace);st(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt(v),tt,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt(v),tt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,tt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function de(E,v,B){let X=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(v.depthTexture);if(K.__renderTarget=v,(!K.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X){if(K.__webglInit===void 0&&(K.__webglInit=!0,v.depthTexture.addEventListener("dispose",R)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Ot(i.TEXTURE_CUBE_MAP,v.depthTexture);let ot=r.convert(v.depthTexture.format),Ct=r.convert(v.depthTexture.type),ut;v.depthTexture.format===Sn?ut=i.DEPTH_COMPONENT24:v.depthTexture.format===ei&&(ut=i.DEPTH24_STENCIL8);for(let lt=0;lt<6;lt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,ut,v.width,v.height,0,ot,Ct,null)}}else J(v.depthTexture,0);let rt=K.__webglTexture,at=nt(v),Q=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,tt=v.depthTexture.format===ei?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Sn)st(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,Q,rt,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,tt,Q,rt,0);else if(v.depthTexture.format===ei)st(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,Q,rt,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,tt,Q,rt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function kt(E){let v=n.get(E),B=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){let X=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),X){let K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,X.removeEventListener("dispose",K)};X.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=X}if(E.depthTexture&&!v.__autoAllocateDepthBuffer)if(B)for(let X=0;X<6;X++)de(v.__webglFramebuffer[X],E,X);else{let X=E.texture.mipmaps;X&&X.length>0?de(v.__webglFramebuffer[0],E,0):de(v.__webglFramebuffer,E,0)}else if(B){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]===void 0)v.__webglDepthbuffer[X]=i.createRenderbuffer(),Bt(v.__webglDepthbuffer[X],E,!1);else{let K=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=v.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,rt)}}else{let X=E.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Bt(v.__webglDepthbuffer,E,!1);else{let K=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,rt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function $t(E,v,B){let X=n.get(E);v!==void 0&&gt(X.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&kt(E)}function ee(E){let v=E.texture,B=n.get(E),X=n.get(v);E.addEventListener("dispose",x);let K=E.textures,rt=E.isWebGLCubeRenderTarget===!0,at=K.length>1;if(at||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=v.version,a.memory.textures++),rt){B.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[Q]=[];for(let tt=0;tt<v.mipmaps.length;tt++)B.__webglFramebuffer[Q][tt]=i.createFramebuffer()}else B.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let Q=0;Q<v.mipmaps.length;Q++)B.__webglFramebuffer[Q]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(at)for(let Q=0,tt=K.length;Q<tt;Q++){let ot=n.get(K[Q]);ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&st(E)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Q=0;Q<K.length;Q++){let tt=K[Q];B.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[Q]);let ot=r.convert(tt.format,tt.colorSpace),Ct=r.convert(tt.type),ut=S(tt.internalFormat,ot,Ct,tt.normalized,tt.colorSpace,E.isXRRenderTarget===!0),lt=nt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,ut,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,B.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Bt(B.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Ot(i.TEXTURE_CUBE_MAP,v);for(let Q=0;Q<6;Q++)if(v.mipmaps&&v.mipmaps.length>0)for(let tt=0;tt<v.mipmaps.length;tt++)gt(B.__webglFramebuffer[Q][tt],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,tt);else gt(B.__webglFramebuffer[Q],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);f(v)&&b(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){for(let Q=0,tt=K.length;Q<tt;Q++){let ot=K[Q],Ct=n.get(ot),ut=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ut=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,Ct.__webglTexture),Ot(ut,ot),gt(B.__webglFramebuffer,E,ot,i.COLOR_ATTACHMENT0+Q,ut,0),f(ot)&&b(ut)}e.unbindTexture()}else{let Q=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Q=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Q,X.__webglTexture),Ot(Q,v),v.mipmaps&&v.mipmaps.length>0)for(let tt=0;tt<v.mipmaps.length;tt++)gt(B.__webglFramebuffer[tt],E,v,i.COLOR_ATTACHMENT0,Q,tt);else gt(B.__webglFramebuffer,E,v,i.COLOR_ATTACHMENT0,Q,0);f(v)&&b(Q),e.unbindTexture()}E.depthBuffer&&kt(E)}function Wt(E){let v=E.textures;for(let B=0,X=v.length;B<X;B++){let K=v[B];if(f(K)){let rt=C(E),at=n.get(K).__webglTexture;e.bindTexture(rt,at),b(rt),e.unbindTexture()}}}let re=[],ye=[];function Ie(E){if(E.samples>0){if(st(E)===!1){let v=E.textures,B=E.width,X=E.height,K=i.COLOR_BUFFER_BIT,rt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=n.get(E),Q=v.length>1;if(Q)for(let ot=0;ot<v.length;ot++)e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,at.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer);let tt=E.texture.mipmaps;tt&&tt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let ot=0;ot<v.length;ot++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,at.__webglColorRenderbuffer[ot]);let Ct=n.get(v[ot]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ct,0)}i.blitFramebuffer(0,0,B,X,0,0,B,X,K,i.NEAREST),c===!0&&(re.length=0,ye.length=0,re.push(i.COLOR_ATTACHMENT0+ot),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(re.push(rt),ye.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ye)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let ot=0;ot<v.length;ot++){e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,at.__webglColorRenderbuffer[ot]);let Ct=n.get(v[ot]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,at.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,Ct,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&c){let v=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function nt(E){return Math.min(s.maxSamples,E.samples)}function st(E){let v=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function A(E){let v=a.render.frame;u.get(E)!==v&&(u.set(E,v),E.update())}function At(E,v){let B=E.colorSpace,X=E.format,K=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==di&&B!==mn&&(Yt.getTransfer(B)===te?(X!==rn||K!==Je)&&Dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",B)),v}function vt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=k,this.getTextureUnits=N,this.setTextureUnits=L,this.setTexture2D=J,this.setTexture2DArray=V,this.setTexture3D=W,this.setTextureCube=Z,this.rebindTextures=$t,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=st,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function P0(i,t){function e(n,s=mn){let r,a=Yt.getTransfer(s);if(n===Je)return i.UNSIGNED_BYTE;if(n===Jr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Kr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ho)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Go)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ko)return i.BYTE;if(n===Vo)return i.SHORT;if(n===Ji)return i.UNSIGNED_SHORT;if(n===$r)return i.INT;if(n===Ke)return i.UNSIGNED_INT;if(n===pn)return i.FLOAT;if(n===Be)return i.HALF_FLOAT;if(n===Wo)return i.ALPHA;if(n===Xo)return i.RGB;if(n===rn)return i.RGBA;if(n===Sn)return i.DEPTH_COMPONENT;if(n===ei)return i.DEPTH_STENCIL;if(n===qo)return i.RED;if(n===Qr)return i.RED_INTEGER;if(n===ni)return i.RG;if(n===jr)return i.RG_INTEGER;if(n===ta)return i.RGBA_INTEGER;if(n===Ns||n===Us||n===Fs||n===Os)if(a===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ns)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Us)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Os)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ns)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Us)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Os)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ea||n===na||n===ia||n===sa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ea)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===na)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ia)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ra||n===aa||n===oa||n===la||n===ca||n===Bs||n===ha)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ra||n===aa)return a===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===oa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===la)return r.COMPRESSED_R11_EAC;if(n===ca)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Bs)return r.COMPRESSED_RG11_EAC;if(n===ha)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===va||n===xa||n===_a||n===ya||n===Sa||n===Ma||n===ba||n===wa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ua)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===da)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ma)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ga)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===va)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_a)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ya)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ma)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ba)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ta||n===Ea||n===Aa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ta)return a===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ea)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Aa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ca||n===Ra||n===zs||n===Pa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ca)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ra)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var I0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,D0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,pl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new As(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ne({vertexShader:I0,fragmentShader:D0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ue(new pi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ml=class extends Mn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,p=null,h=null,d=null,g=null,y=typeof XRWebGLBinding<"u",m=new pl,f={},b=e.getContextAttributes(),C=null,S=null,M=[],w=[],R=new zt,x=null,T=null,P=new Oe;P.viewport=new xe;let I=new Oe;I.viewport=new xe;let z=[P,I],k=new Xr,N=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let et=M[$];return et===void 0&&(et=new Wi,M[$]=et),et.getTargetRaySpace()},this.getControllerGrip=function($){let et=M[$];return et===void 0&&(et=new Wi,M[$]=et),et.getGripSpace()},this.getHand=function($){let et=M[$];return et===void 0&&(et=new Wi,M[$]=et),et.getHandSpace()};function F($){let et=w.indexOf($.inputSource);if(et===-1)return;let yt=M[et];yt!==void 0&&(yt.update($.inputSource,$.frame,l||a),yt.dispatchEvent({type:$.type,data:$.inputSource}))}function q(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",J);for(let $=0;$<M.length;$++){let et=w[$];et!==null&&(w[$]=null,M[$].disconnect(et))}N=null,L=null,m.reset();for(let $ in f)delete f[$];if(t.setRenderTarget(C),d=null,h=null,p=null,s=null,S=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(R.width,R.height,!1),T!==null){let $=T.camera;$.fov=T.fov,$.zoom=T.zoom,$.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return p===null&&y&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(C=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",q),s.addEventListener("inputsourceschange",J),b.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Nt=null,gt=null;b.depth&&(gt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=b.stencil?ei:Sn,Nt=b.stencil?Ki:Ke);let Bt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};p=this.getBinding(),h=p.createProjectionLayer(Bt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),S=new ge(h.textureWidth,h.textureHeight,{format:rn,type:Je,depthTexture:new nn(h.textureWidth,h.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let yt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,yt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new ge(d.framebufferWidth,d.framebufferHeight,{format:rn,type:Je,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Xt.setContext(s),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J($){for(let et=0;et<$.removed.length;et++){let yt=$.removed[et],Nt=w.indexOf(yt);Nt>=0&&(w[Nt]=null,M[Nt].disconnect(yt))}for(let et=0;et<$.added.length;et++){let yt=$.added[et],Nt=w.indexOf(yt);if(Nt===-1){for(let Bt=0;Bt<M.length;Bt++)if(Bt>=w.length){w.push(yt),Nt=Bt;break}else if(w[Bt]===null){w[Bt]=yt,Nt=Bt;break}if(Nt===-1)break}let gt=M[Nt];gt&&gt.connect(yt)}}let V=new O,W=new O;function Z($,et,yt){V.setFromMatrixPosition(et.matrixWorld),W.setFromMatrixPosition(yt.matrixWorld);let Nt=V.distanceTo(W),gt=et.projectionMatrix.elements,Bt=yt.projectionMatrix.elements,de=gt[14]/(gt[10]-1),kt=gt[14]/(gt[10]+1),$t=(gt[9]+1)/gt[5],ee=(gt[9]-1)/gt[5],Wt=(gt[8]-1)/gt[0],re=(Bt[8]+1)/Bt[0],ye=de*Wt,Ie=de*re,nt=Nt/(-Wt+re),st=nt*-Wt;if(et.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(st),$.translateZ(nt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),gt[10]===-1)$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let A=de+nt,At=kt+nt,vt=ye-st,E=Ie+(Nt-st),v=$t*kt/At*A,B=ee*kt/At*A;$.projectionMatrix.makePerspective(vt,E,v,B,A,At),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function _t($,et){et===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(et.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let et=$.near,yt=$.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(yt=m.depthFar)),k.near=I.near=P.near=et,k.far=I.far=P.far=yt,(N!==k.near||L!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),N=k.near,L=k.far),k.layers.mask=$.layers.mask|6,P.layers.mask=k.layers.mask&-5,I.layers.mask=k.layers.mask&-3;let Nt=$.parent,gt=k.cameras;_t(k,Nt);for(let Bt=0;Bt<gt.length;Bt++)_t(gt[Bt],Nt);gt.length===2?Z(k,P,I):k.projectionMatrix.copy(P.projectionMatrix),T===null&&$.isPerspectiveCamera&&(T={camera:$,fov:$.fov,zoom:$.zoom}),wt($,k,Nt)};function wt($,et,yt){yt===null?$.matrix.copy(et.matrixWorld):($.matrix.copy(yt.matrixWorld),$.matrix.invert(),$.matrix.multiply(et.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Hi*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function($){c=$,h!==null&&(h.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function($){return f[$]};let Kt=null;function Ot($,et){if(u=et.getViewerPose(l||a),g=et,u!==null){let yt=u.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let Nt=!1;yt.length!==k.cameras.length&&(k.cameras.length=0,Nt=!0);for(let kt=0;kt<yt.length;kt++){let $t=yt[kt],ee=null;if(d!==null)ee=d.getViewport($t);else{let re=p.getViewSubImage(h,$t);ee=re.viewport,kt===0&&(t.setRenderTargetTextures(S,re.colorTexture,re.depthStencilTexture),t.setRenderTarget(S))}let Wt=z[kt];Wt===void 0&&(Wt=new Oe,Wt.layers.enable(kt),Wt.viewport=new xe,z[kt]=Wt),Wt.matrix.fromArray($t.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray($t.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(ee.x,ee.y,ee.width,ee.height),kt===0&&(k.matrix.copy(Wt.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Nt===!0&&k.cameras.push(Wt)}let gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){p=n.getBinding();let kt=p.getDepthInformation(yt[0]);kt&&kt.isValid&&kt.texture&&m.init(kt,s.renderState)}if(gt&&gt.includes("camera-access")&&y){t.state.unbindTexture(),p=n.getBinding();for(let kt=0;kt<yt.length;kt++){let $t=yt[kt].camera;if($t){let ee=f[$t];ee||(ee=new As,f[$t]=ee);let Wt=p.getCameraImage($t);ee.sourceTexture=Wt}}}}for(let yt=0;yt<M.length;yt++){let Nt=w[yt],gt=M[yt];Nt!==null&&gt!==void 0&&gt.update(Nt,et,l||a)}Kt&&Kt($,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}let Xt=new lh;Xt.setAnimationLoop(Ot),this.setAnimationLoop=function($){Kt=$},this.dispose=function(){}}},L0=new oe,ph=new Ut;ph.set(-1,0,0,0,1,0,0,0,1);function N0(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Ko(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,b,C,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),p(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),h(m,f),f.isMeshPhysicalMaterial&&d(m,f,S)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),y(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,b,C):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===De&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===De&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let b=t.get(f),C=b.envMap,S=b.envMapRotation;C&&(m.envMap.value=C,m.envMapRotation.value.setFromMatrix4(L0.makeRotationFromEuler(S)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ph),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,b,C){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=C*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function p(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===De&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){let b=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function U0(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,M){let w=M.program;n.uniformBlockBinding(S,w)}function l(S,M){let w=s[S.id];w===void 0&&(m(S),w=u(S),s[S.id]=w,S.addEventListener("dispose",b));let R=M.program;n.updateUBOMapping(S,R);let x=t.render.frame;r[S.id]!==x&&(h(S),r[S.id]=x)}function u(S){let M=p();S.__bindingPointIndex=M;let w=i.createBuffer(),R=S.__size,x=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,R,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,w),w}function p(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){let M=s[S.id],w=S.uniforms,R=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let x=0,T=w.length;x<T;x++){let P=w[x];if(Array.isArray(P))for(let I=0,z=P.length;I<z;I++)d(P[I],x,I,R);else d(P,x,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(S,M,w,R){if(y(S,M,w,R)===!0){let x=S.__offset,T=S.value;if(Array.isArray(T)){let P=0;for(let I=0;I<T.length;I++){let z=T[I],k=f(z);g(z,S.__data,P),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(P+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,S.__data)}}function g(S,M,w){typeof S=="number"||typeof S=="boolean"?M[0]=S:S.isMatrix3?(M[0]=S.elements[0],M[1]=S.elements[1],M[2]=S.elements[2],M[3]=0,M[4]=S.elements[3],M[5]=S.elements[4],M[6]=S.elements[5],M[7]=0,M[8]=S.elements[6],M[9]=S.elements[7],M[10]=S.elements[8],M[11]=0):ArrayBuffer.isView(S)?M.set(new S.constructor(S.buffer,S.byteOffset,M.length)):S.toArray(M,w)}function y(S,M,w,R){let x=S.value,T=M+"_"+w;if(R[T]===void 0)return typeof x=="number"||typeof x=="boolean"?R[T]=x:ArrayBuffer.isView(x)?R[T]=x.slice():R[T]=x.clone(),!0;{let P=R[T];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return R[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function m(S){let M=S.uniforms,w=0,R=16;for(let T=0,P=M.length;T<P;T++){let I=Array.isArray(M[T])?M[T]:[M[T]];for(let z=0,k=I.length;z<k;z++){let N=I[z],L=Array.isArray(N.value)?N.value:[N.value];for(let F=0,q=L.length;F<q;F++){let J=L[F],V=f(J),W=w%R,Z=W%V.boundary,_t=W+Z;w+=Z,_t!==0&&R-_t<V.storage&&(w+=R-_t),N.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=w,w+=V.storage}}}let x=w%R;return x>0&&(w+=R-x),S.__size=w,S.__cache={},this}function f(S){let M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?Dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(M.boundary=16,M.storage=S.byteLength):Dt("WebGLRenderer: Unsupported uniform value type.",S),M}function b(S){let M=S.target;M.removeEventListener("dispose",b);let w=a.indexOf(M.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function C(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:c,update:l,dispose:C}}var F0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),En=null;function O0(){return En===null&&(En=new Pr(F0,16,16,ni,Be),En.name="DFG_LUT",En.minFilter=me,En.magFilter=me,En.wrapS=tn,En.wrapT=tn,En.generateMipmaps=!1,En.needsUpdate=!0),En}var Fa=class{constructor(t={}){let{canvas:e=Lc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Je}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=d,m=new Set([ta,jr,Qr]),f=new Set([Je,Ke,Ji,Ki,Jr,Kr]),b=new Uint32Array(4),C=new Int32Array(4),S=new O,M=null,w=null,R=[],x=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,I=!1,z=null,k=null,N=null,L=null;this._outputColorSpace=qe;let F=0,q=0,J=null,V=-1,W=null,Z=new xe,_t=new xe,wt=null,Kt=new Ht(0),Ot=0,Xt=e.width,$=e.height,et=1,yt=null,Nt=null,gt=new xe(0,0,Xt,$),Bt=new xe(0,0,Xt,$),de=!1,kt=new ws,$t=!1,ee=!1,Wt=new oe,re=new O,ye=new xe,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},nt=!1;function st(){return J===null?et:1}let A=n;function At(_,D){return e.getContext(_,D)}let vt,E,v,B,X,K,rt,at,Q,tt,ot,Ct,ut,lt,Rt,It,Ft,U,ct,j,ht,mt,it;try{let _={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ce,!1),e.addEventListener("webglcontextrestored",Qt,!1),e.addEventListener("webglcontextcreationerror",an,!1),A===null){let D="webgl2";if(A=At(D,_),A===null)throw At(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Pt()}catch(_){throw e.removeEventListener("webglcontextlost",ce,!1),e.removeEventListener("webglcontextrestored",Qt,!1),e.removeEventListener("webglcontextcreationerror",an,!1),Lt("WebGLRenderer: "+_.message),_}function Pt(){vt=new Wp(A),vt.init(),ht=new P0(A,vt),E=new Np(A,vt,t,ht),v=new C0(A,vt),E.reversedDepthBuffer&&h&&v.buffers.depth.setReversed(!0),k=A.createFramebuffer(),N=A.createFramebuffer(),L=A.createFramebuffer(),B=new Yp(A),X=new p0,K=new R0(A,vt,v,X,E,ht,B),rt=new Gp(P),at=new Zu(A),mt=new Dp(A,at),Q=new Xp(A,at,B,mt),tt=new $p(A,Q,at,mt,B),U=new Zp(A,E,K),Rt=new Up(X),ot=new f0(P,rt,vt,E,mt,Rt),Ct=new N0(P,X),ut=new g0,lt=new M0(vt),Ft=new Ip(P,rt,v,tt,g,c),It=new A0(P,tt,E),it=new U0(A,B,E,v),ct=new Lp(A,vt,B),j=new qp(A,vt,B),B.programs=ot.programs,P.capabilities=E,P.extensions=vt,P.properties=X,P.renderLists=ut,P.shadowMap=It,P.state=v,P.info=B}y!==Je&&(T=new Kp(y,e.width,e.height,o,s,r));let Tt=new ml(P,A);this.xr=Tt,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let _=vt.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=vt.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(_){_!==void 0&&(et=_,this.setSize(Xt,$,!1))},this.getSize=function(_){return _.set(Xt,$)},this.setSize=function(_,D,Y=!0){if(Tt.isPresenting){Dt("WebGLRenderer: Can't change size while VR device is presenting.");return}Xt=_,$=D,e.width=Math.floor(_*et),e.height=Math.floor(D*et),Y===!0&&(e.style.width=_+"px",e.style.height=D+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,_,D)},this.getDrawingBufferSize=function(_){return _.set(Xt*et,$*et).floor()},this.setDrawingBufferSize=function(_,D,Y){Xt=_,$=D,et=Y,e.width=Math.floor(_*Y),e.height=Math.floor(D*Y),this.setViewport(0,0,_,D)},this.setEffects=function(_){if(y===Je){Lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let D=0;D<_.length;D++)if(_[D].isOutputPass===!0){Dt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy(Z)},this.getViewport=function(_){return _.copy(gt)},this.setViewport=function(_,D,Y,H){_.isVector4?gt.set(_.x,_.y,_.z,_.w):gt.set(_,D,Y,H),v.viewport(Z.copy(gt).multiplyScalar(et).round())},this.getScissor=function(_){return _.copy(Bt)},this.setScissor=function(_,D,Y,H){_.isVector4?Bt.set(_.x,_.y,_.z,_.w):Bt.set(_,D,Y,H),v.scissor(_t.copy(Bt).multiplyScalar(et).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(_){v.setScissorTest(de=_)},this.setOpaqueSort=function(_){yt=_},this.setTransparentSort=function(_){Nt=_},this.getClearColor=function(_){return _.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor(...arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha(...arguments)},this.clear=function(_=!0,D=!0,Y=!0){let H=0;if(_){let G=!1;if(J!==null){let pt=J.texture.format;G=m.has(pt)}if(G){let pt=J.texture.type,St=f.has(pt),ft=Ft.getClearColor(),Mt=Ft.getClearAlpha(),Et=ft.r,Vt=ft.g,qt=ft.b;St?(b[0]=Et,b[1]=Vt,b[2]=qt,b[3]=Mt,A.clearBufferuiv(A.COLOR,0,b)):(C[0]=Et,C[1]=Vt,C[2]=qt,C[3]=Mt,A.clearBufferiv(A.COLOR,0,C))}else H|=A.COLOR_BUFFER_BIT}D&&(H|=A.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(H|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&A.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(_){_.setRenderer(this),z=_},this.dispose=function(){e.removeEventListener("webglcontextlost",ce,!1),e.removeEventListener("webglcontextrestored",Qt,!1),e.removeEventListener("webglcontextcreationerror",an,!1),Ft.dispose(),ut.dispose(),lt.dispose(),X.dispose(),rt.dispose(),tt.dispose(),mt.dispose(),it.dispose(),ot.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",wl),Tt.removeEventListener("sessionend",Tl),ai.stop()};function ce(_){_.preventDefault(),$o("WebGLRenderer: Context Lost."),I=!0}function Qt(){$o("WebGLRenderer: Context Restored."),I=!1;let _=B.autoReset,D=It.enabled,Y=It.autoUpdate,H=It.needsUpdate,G=It.type;Pt(),B.autoReset=_,It.enabled=D,It.autoUpdate=Y,It.needsUpdate=H,It.type=G}function an(_){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function xn(_){let D=_.target;D.removeEventListener("dispose",xn),Wh(D)}function Wh(_){Xh(_),X.remove(_)}function Xh(_){let D=X.get(_).programs;D!==void 0&&(D.forEach(function(Y){ot.releaseProgram(Y)}),_.isShaderMaterial&&ot.releaseShaderCache(_))}this.renderBufferDirect=function(_,D,Y,H,G,pt){D===null&&(D=Ie);let St=G.isMesh&&G.matrixWorld.determinantAffine()<0,ft=Zh(_,D,Y,H,G);v.setMaterial(H,St);let Mt=Y.index,Et=1;if(H.wireframe===!0){if(Mt=Q.getWireframeAttribute(Y),Mt===void 0)return;Et=2}let Vt=Y.drawRange,qt=Y.attributes.position,bt=Vt.start*Et,jt=(Vt.start+Vt.count)*Et;pt!==null&&(bt=Math.max(bt,pt.start*Et),jt=Math.min(jt,(pt.start+pt.count)*Et)),Mt!==null?(bt=Math.max(bt,0),jt=Math.min(jt,Mt.count)):qt!=null&&(bt=Math.max(bt,0),jt=Math.min(jt,qt.count));let we=jt-bt;if(we<0||we===1/0)return;mt.setup(G,H,ft,Y,Mt);let fe,ae=ct;if(Mt!==null&&(fe=at.get(Mt),ae=j,ae.setIndex(fe)),G.isMesh)H.wireframe===!0?(v.setLineWidth(H.wireframeLinewidth*st()),ae.setMode(A.LINES)):ae.setMode(A.TRIANGLES);else if(G.isLine){let Ne=H.linewidth;Ne===void 0&&(Ne=1),v.setLineWidth(Ne*st()),G.isLineSegments?ae.setMode(A.LINES):G.isLineLoop?ae.setMode(A.LINE_LOOP):ae.setMode(A.LINE_STRIP)}else G.isPoints?ae.setMode(A.POINTS):G.isSprite&&ae.setMode(A.TRIANGLES);if(G.isBatchedMesh)if(vt.get("WEBGL_multi_draw"))ae.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Ne=G._multiDrawStarts,xt=G._multiDrawCounts,ke=G._multiDrawCount,Jt=Mt?at.get(Mt).bytesPerElement:1,Qe=X.get(H).currentProgram.getUniforms();for(let _n=0;_n<ke;_n++)Qe.setValue(A,"_gl_DrawID",_n),ae.render(Ne[_n]/Jt,xt[_n])}else if(G.isInstancedMesh)ae.renderInstances(bt,we,G.count);else if(Y.isInstancedBufferGeometry){let Ne=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,xt=Math.min(Y.instanceCount,Ne);ae.renderInstances(bt,we,xt)}else ae.render(bt,we)};function bl(_,D,Y,H){z!==null&&_.isNodeMaterial&&z.setObject(H,_),$t===!0&&Rt.setState(_,Y,!1),_.transparent===!0&&_.side===Pe&&_.forceSinglePass===!1?(_.side=De,_.needsUpdate=!0,Zs(_,D,H),_.side=jn,_.needsUpdate=!0,Zs(_,D,H),_.side=Pe):Zs(_,D,H)}this.compile=function(_,D,Y=null){Y===null&&(Y=_),z!==null&&z.renderStart(_,D,Y),w=lt.get(Y),w.init(D),x.push(w),Y.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),_!==Y&&_.traverseVisible(function(G){G.isLight&&G.layers.test(D.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),w.setupLights(),z!==null&&z.updateLights(w.state.lightsArray),ee=this.localClippingEnabled,$t=Rt.init(this.clippingPlanes,ee),$t===!0&&Rt.setGlobalState(this.clippingPlanes,D),z!==null&&It.render(w.state.shadowsArray,Y,D);let H=new Set;return _.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let pt=G.material;if(pt)if(Array.isArray(pt))for(let St=0;St<pt.length;St++){let ft=pt[St];bl(ft,Y,D,G),H.add(ft)}else bl(pt,Y,D,G),H.add(pt)}),w=x.pop(),z!==null&&z.renderEnd(),H},this.compileAsync=function(_,D,Y=null){let H=this.compile(_,D,Y);return new Promise(G=>{function pt(){if(H.forEach(function(St){let Mt=X.get(St).currentProgram;(Mt===void 0||Mt.isReady())&&H.delete(St)}),H.size===0){G(_);return}setTimeout(pt,10)}vt.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let Ka=null;function qh(_){Ka&&Ka(_)}function wl(){ai.stop()}function Tl(){ai.start()}let ai=new lh;ai.setAnimationLoop(qh),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(_){Ka=_,Tt.setAnimationLoop(_),_===null?ai.stop():ai.start()},Tt.addEventListener("sessionstart",wl),Tt.addEventListener("sessionend",Tl),this.render=function(_,D){if(D!==void 0&&D.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;z!==null&&z.renderStart(_,D);let Y=Tt.enabled===!0&&Tt.isPresenting===!0,H=T!==null&&(J===null||Y)&&T.begin(P,J);if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(D),D=Tt.getCamera()),_.isScene===!0&&_.onBeforeRender(P,_,D,J),w=lt.get(_,x.length),w.init(D),w.state.textureUnits=K.getTextureUnits(),x.push(w),Wt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),kt.setFromProjectionMatrix(Wt,un,D.reversedDepth),ee=this.localClippingEnabled,$t=Rt.init(this.clippingPlanes,ee),M=ut.get(_,R.length),M.init(),R.push(M),Tt.enabled===!0&&Tt.isPresenting===!0){let St=P.xr.getDepthSensingMesh();St!==null&&Qa(St,D,-1/0,P.sortObjects)}Qa(_,D,0,P.sortObjects),M.finish(),z!==null&&z.updateLights(w.state.lightsArray),P.sortObjects===!0&&M.sort(yt,Nt),nt=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,nt&&Ft.addToRenderList(M,_),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),$t===!0&&Rt.beginShadows();let G=w.state.shadowsArray;if(It.render(G,_,D),$t===!0&&Rt.endShadows(),(H&&T.hasRenderPass())===!1){let St=M.opaque,ft=M.transmissive;if(w.setupLights(),D.isArrayCamera){let Mt=D.cameras;if(ft.length>0)for(let Et=0,Vt=Mt.length;Et<Vt;Et++){let qt=Mt[Et];Al(St,ft,_,qt)}nt&&Ft.render(_);for(let Et=0,Vt=Mt.length;Et<Vt;Et++){let qt=Mt[Et];El(M,_,qt,qt.viewport)}}else ft.length>0&&Al(St,ft,_,D),nt&&Ft.render(_),El(M,_,D)}J!==null&&q===0&&(K.updateMultisampleRenderTarget(J),K.updateRenderTargetMipmap(J)),H&&T.end(P),_.isScene===!0&&_.onAfterRender(P,_,D),mt.resetDefaultState(),V=-1,W=null,x.pop(),x.length>0?(w=x[x.length-1],K.setTextureUnits(w.state.textureUnits),$t===!0&&Rt.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?M=R[R.length-1]:M=null,z!==null&&z.renderEnd()};function Qa(_,D,Y,H){if(_.visible===!1)return;if(_.layers.test(D.layers)){if(_.isGroup)Y=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(D);else if(_.isLightProbeGrid)w.pushLightProbeGrid(_);else if(_.isLight)w.pushLight(_),_.castShadow&&w.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||_.intersectsFrustum(kt)){H&&ye.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Wt);let St=tt.update(_),ft=_.material;ft.visible&&M.push(_,St,ft,Y,ye.z,null,D)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||_.intersectsFrustum(kt))){let St=tt.update(_),ft=_.material;if(H&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),ye.copy(_.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),ye.copy(St.boundingSphere.center)),ye.applyMatrix4(_.matrixWorld).applyMatrix4(Wt)),Array.isArray(ft)){let Mt=St.groups;for(let Et=0,Vt=Mt.length;Et<Vt;Et++){let qt=Mt[Et],bt=ft[qt.materialIndex];bt&&bt.visible&&M.push(_,St,bt,Y,ye.z,qt,D)}}else ft.visible&&M.push(_,St,ft,Y,ye.z,null,D)}}let pt=_.children;for(let St=0,ft=pt.length;St<ft;St++)Qa(pt[St],D,Y,H)}function El(_,D,Y,H){let{opaque:G,transmissive:pt,transparent:St}=_;w.setupLightsView(Y),$t===!0&&Rt.setGlobalState(P.clippingPlanes,Y),H&&v.viewport(Z.copy(H)),G.length>0&&Ys(G,D,Y),pt.length>0&&Ys(pt,D,Y),St.length>0&&Ys(St,D,Y),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Al(_,D,Y,H){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[H.id]===void 0){let bt=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[H.id]=new ge(1,1,{generateMipmaps:!0,type:bt?Be:Je,minFilter:sn,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Yt.workingColorSpace})}let pt=w.state.transmissionRenderTarget[H.id],St=H.viewport||Z;pt.setSize(St.z*P.transmissionResolutionScale,St.w*P.transmissionResolutionScale);let ft=P.getRenderTarget(),Mt=P.getActiveCubeFace(),Et=P.getActiveMipmapLevel();P.setRenderTarget(pt),P.getClearColor(Kt),Ot=P.getClearAlpha(),Ot<1&&P.setClearColor(16777215,.5),P.clear(),nt&&Ft.render(Y);let Vt=P.toneMapping;P.toneMapping=fn;let qt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),w.setupLightsView(H),$t===!0&&Rt.setGlobalState(P.clippingPlanes,H),Ys(_,Y,H),K.updateMultisampleRenderTarget(pt),K.updateRenderTargetMipmap(pt),vt.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let jt=0,we=D.length;jt<we;jt++){let fe=D[jt],{object:ae,geometry:Ne,material:xt,group:ke}=fe;if(xt.side===Pe&&ae.layers.test(H.layers)){let Jt=xt.side;xt.side=De,xt.needsUpdate=!0,Cl(ae,Y,H,Ne,xt,ke),xt.side=Jt,xt.needsUpdate=!0,bt=!0}}bt===!0&&(K.updateMultisampleRenderTarget(pt),K.updateRenderTargetMipmap(pt))}P.setRenderTarget(ft,Mt,Et),P.setClearColor(Kt,Ot),qt!==void 0&&(H.viewport=qt),P.toneMapping=Vt}function Ys(_,D,Y){let H=D.isScene===!0?D.overrideMaterial:null;for(let G=0,pt=_.length;G<pt;G++){let St=_[G],{object:ft,geometry:Mt,group:Et}=St,Vt=St.material;Vt.allowOverride===!0&&H!==null&&(Vt=H),ft.layers.test(Y.layers)&&Cl(ft,D,Y,Mt,Vt,Et)}}function Cl(_,D,Y,H,G,pt){z!==null&&G.isNodeMaterial&&z.setObject(_,G),_.onBeforeRender(P,D,Y,H,G,pt),_.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),G.onBeforeRender(P,D,Y,H,_,pt),G.transparent===!0&&G.side===Pe&&G.forceSinglePass===!1?(G.side=De,G.needsUpdate=!0,P.renderBufferDirect(Y,D,H,G,_,pt),G.side=jn,G.needsUpdate=!0,P.renderBufferDirect(Y,D,H,G,_,pt),G.side=Pe):P.renderBufferDirect(Y,D,H,G,_,pt),_.onAfterRender(P,D,Y,H,G,pt)}function Zs(_,D,Y){D.isScene!==!0&&(D=Ie);let H=X.get(_),G=w.state.lights,pt=w.state.shadowsArray,St=G.state.version,ft=ot.getParameters(_,G.state,pt,D,Y,w.state.lightProbeGridArray),Mt=ot.getProgramCacheKey(ft),Et=H.programs;H.environment=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,H.fog=D.fog;let Vt=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap;H.envMap=rt.get(_.envMap||H.environment,Vt),H.envMapRotation=H.environment!==null&&_.envMap===null?D.environmentRotation:_.envMapRotation,Et===void 0&&(_.addEventListener("dispose",xn),Et=new Map,H.programs=Et);let qt=Et.get(Mt);if(qt!==void 0){if(H.currentProgram===qt&&H.lightsStateVersion===St)return Pl(_,ft),qt}else ft.uniforms=ot.getUniforms(_),z!==null&&_.isNodeMaterial&&z.build(_,Y,ft),_.onBeforeCompile(ft,P),qt=ot.acquireProgram(ft,Mt),Et.set(Mt,qt),H.uniforms=ft.uniforms;let bt=H.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(bt.clippingPlanes=Rt.uniform),Pl(_,ft),H.needsLights=Jh(_),H.lightsStateVersion=St,H.needsLights&&(bt.ambientLightColor.value=G.state.ambient,bt.lightProbe.value=G.state.probe,bt.sunLights.value=G.state.sun,bt.sunLightShadows.value=G.state.sunShadow,bt.directionalLights.value=G.state.directional,bt.directionalLightShadows.value=G.state.directionalShadow,bt.spotLights.value=G.state.spot,bt.spotLightShadows.value=G.state.spotShadow,bt.rectAreaLights.value=G.state.rectArea,bt.ltc_1.value=G.state.rectAreaLTC1,bt.ltc_2.value=G.state.rectAreaLTC2,bt.pointLights.value=G.state.point,bt.pointLightShadows.value=G.state.pointShadow,bt.hemisphereLights.value=G.state.hemi,bt.sunShadowMatrix.value=G.state.sunShadowMatrix,bt.sunShadowCascade.value=G.state.sunShadowCascade,bt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,bt.spotLightMatrix.value=G.state.spotLightMatrix,bt.spotLightMap.value=G.state.spotLightMap,bt.pointShadowMatrix.value=G.state.pointShadowMatrix),H.lightProbeGrid=w.state.lightProbeGridArray.length>0,H.currentProgram=qt,H.uniformsList=null,qt}function Rl(_){if(_.uniformsList===null){let D=_.currentProgram.getUniforms();_.uniformsList=es.seqWithValue(D.seq,_.uniforms)}return _.uniformsList}function Pl(_,D){let Y=X.get(_);Y.outputColorSpace=D.outputColorSpace,Y.batching=D.batching,Y.batchingColor=D.batchingColor,Y.instancing=D.instancing,Y.instancingColor=D.instancingColor,Y.instancingMorph=D.instancingMorph,Y.skinning=D.skinning,Y.morphTargets=D.morphTargets,Y.morphNormals=D.morphNormals,Y.morphColors=D.morphColors,Y.morphTargetsCount=D.morphTargetsCount,Y.numClippingPlanes=D.numClippingPlanes,Y.numIntersection=D.numClipIntersection,Y.vertexAlphas=D.vertexAlphas,Y.vertexTangents=D.vertexTangents,Y.toneMapping=D.toneMapping}function Yh(_,D){if(_.length===0)return null;if(_.length===1)return _[0].texture!==null?_[0]:null;S.setFromMatrixPosition(D.matrixWorld);for(let Y=0,H=_.length;Y<H;Y++){let G=_[Y];if(G.texture!==null&&G.boundingBox.containsPoint(S))return G}return null}function Zh(_,D,Y,H,G){D.isScene!==!0&&(D=Ie),K.resetTextureUnits();let pt=D.fog,St=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?D.environment:null,ft=J===null?P.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Yt.workingColorSpace,Mt=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Et=rt.get(H.envMap||St,Mt),Vt=H.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,qt=!!Y.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),bt=!!Y.morphAttributes.position,jt=!!Y.morphAttributes.normal,we=!!Y.morphAttributes.color,fe=fn;H.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(fe=P.toneMapping);let ae=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ne=ae!==void 0?ae.length:0,xt=X.get(H),ke=w.state.lights;if($t===!0&&(ee===!0||_!==W)){let he=_===W&&H.id===V;Rt.setState(H,_,he)}let Jt=!1;H.version===xt.__version?(xt.needsLights&&xt.lightsStateVersion!==ke.state.version||xt.outputColorSpace!==ft||G.isBatchedMesh&&xt.batching===!1||!G.isBatchedMesh&&xt.batching===!0||G.isBatchedMesh&&xt.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&xt.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&xt.instancing===!1||!G.isInstancedMesh&&xt.instancing===!0||G.isSkinnedMesh&&xt.skinning===!1||!G.isSkinnedMesh&&xt.skinning===!0||G.isInstancedMesh&&xt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&xt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&xt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&xt.instancingMorph===!1&&G.morphTexture!==null||xt.envMap!==Et||H.fog===!0&&xt.fog!==pt||xt.numClippingPlanes!==void 0&&(xt.numClippingPlanes!==Rt.numPlanes||xt.numIntersection!==Rt.numIntersection)||xt.vertexAlphas!==Vt||xt.vertexTangents!==qt||xt.morphTargets!==bt||xt.morphNormals!==jt||xt.morphColors!==we||xt.toneMapping!==fe||xt.morphTargetsCount!==Ne||!!xt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Jt=!0):(Jt=!0,xt.__version=H.version);let Qe=xt.currentProgram;Jt===!0&&(Qe=Zs(H,D,G),z&&H.isNodeMaterial&&z.onUpdateProgram(H,Qe,xt));let _n=!1,Bn=!1,bi=!1,ie=Qe.getUniforms(),Me=xt.uniforms;if(v.useProgram(Qe.program)&&(_n=!0,Bn=!0,bi=!0),H.id!==V&&(V=H.id,Bn=!0),xt.needsLights){let he=Yh(w.state.lightProbeGridArray,G);xt.lightProbeGrid!==he&&(xt.lightProbeGrid=he,Bn=!0)}if(_n||W!==_){v.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),ie.setValue(A,"projectionMatrix",_.projectionMatrix),ie.setValue(A,"viewMatrix",_.matrixWorldInverse);let kn=ie.map.cameraPosition;kn!==void 0&&kn.setValue(A,re.setFromMatrixPosition(_.matrixWorld)),E.logarithmicDepthBuffer&&ie.setValue(A,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ie.setValue(A,"isOrthographic",_.isOrthographicCamera===!0),W!==_&&(W=_,Bn=!0,bi=!0)}if(xt.needsLights&&(ke.state.sunShadowMap.length>0&&ie.setValue(A,"sunShadowMap",ke.state.sunShadowMap,K),ke.state.directionalShadowMap.length>0&&ie.setValue(A,"directionalShadowMap",ke.state.directionalShadowMap,K),ke.state.spotShadowMap.length>0&&ie.setValue(A,"spotShadowMap",ke.state.spotShadowMap,K),ke.state.pointShadowMap.length>0&&ie.setValue(A,"pointShadowMap",ke.state.pointShadowMap,K)),G.isSkinnedMesh){ie.setOptional(A,G,"bindMatrix"),ie.setOptional(A,G,"bindMatrixInverse");let he=G.skeleton;he&&(he.boneTexture===null&&he.computeBoneTexture(),ie.setValue(A,"boneTexture",he.boneTexture,K))}G.isBatchedMesh&&(ie.setOptional(A,G,"batchingTexture"),ie.setValue(A,"batchingTexture",G._matricesTexture,K),ie.setOptional(A,G,"batchingIdTexture"),ie.setValue(A,"batchingIdTexture",G._indirectTexture,K),ie.setOptional(A,G,"batchingColorTexture"),G._colorsTexture!==null&&ie.setValue(A,"batchingColorTexture",G._colorsTexture,K));let zn=Y.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&U.update(G,Y,Qe),(Bn||xt.receiveShadow!==G.receiveShadow)&&(xt.receiveShadow=G.receiveShadow,ie.setValue(A,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&D.environment!==null&&(Me.envMapIntensity.value=D.environmentIntensity),Me.dfgLUT!==void 0&&(Me.dfgLUT.value=O0()),Bn){if(ie.setValue(A,"toneMappingExposure",P.toneMappingExposure),xt.needsLights&&$h(Me,bi),pt&&H.fog===!0&&Ct.refreshFogUniforms(Me,pt),Ct.refreshMaterialUniforms(Me,H,et,$,w.state.transmissionRenderTarget[_.id]),xt.needsLights&&xt.lightProbeGrid){let he=xt.lightProbeGrid;Me.probesSH.value=he.texture,Me.probesMin.value.copy(he.boundingBox.min),Me.probesMax.value.copy(he.boundingBox.max),Me.probesResolution.value.copy(he.resolution)}es.upload(A,Rl(xt),Me,K)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(es.upload(A,Rl(xt),Me,K),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ie.setValue(A,"center",G.center),ie.setValue(A,"modelViewMatrix",G.modelViewMatrix),ie.setValue(A,"normalMatrix",G.normalMatrix),ie.setValue(A,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){let he=H.uniformsGroups;for(let kn=0,wi=he.length;kn<wi;kn++){let Dl=he[kn];it.update(Dl,Qe),it.bind(Dl,Qe)}}return Qe}function $h(_,D){_.ambientLightColor.needsUpdate=D,_.lightProbe.needsUpdate=D,_.sunLights.needsUpdate=D,_.sunLightShadows.needsUpdate=D,_.directionalLights.needsUpdate=D,_.directionalLightShadows.needsUpdate=D,_.pointLights.needsUpdate=D,_.pointLightShadows.needsUpdate=D,_.spotLights.needsUpdate=D,_.spotLightShadows.needsUpdate=D,_.rectAreaLights.needsUpdate=D,_.hemisphereLights.needsUpdate=D}function Jh(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(_,D,Y){let H=X.get(_);H.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),X.get(_.texture).__webglTexture=D,X.get(_.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:Y,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,D){let Y=X.get(_);Y.__webglFramebuffer=D,Y.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(_,D=0,Y=0){J=_,F=D,q=Y;let H=null,G=!1,pt=!1;if(_){let ft=X.get(_);if(ft.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(A.FRAMEBUFFER,ft.__webglFramebuffer),Z.copy(_.viewport),_t.copy(_.scissor),wt=_.scissorTest,v.viewport(Z),v.scissor(_t),v.setScissorTest(wt),V=-1;return}else if(ft.__webglFramebuffer===void 0)K.setupRenderTarget(_);else if(ft.__hasExternalTextures)K.rebindTextures(_,X.get(_.texture).__webglTexture,X.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Vt=_.depthTexture;if(ft.__boundDepthTexture!==Vt){if(Vt!==null&&X.has(Vt)&&(_.width!==Vt.image.width||_.height!==Vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(_)}}let Mt=_.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(pt=!0);let Et=X.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Et[D])?H=Et[D][Y]:H=Et[D],G=!0):_.samples>0&&K.useMultisampledRTT(_)===!1?H=X.get(_).__webglMultisampledFramebuffer:Array.isArray(Et)?H=Et[Y]:H=Et,Z.copy(_.viewport),_t.copy(_.scissor),wt=_.scissorTest}else Z.copy(gt).multiplyScalar(et).floor(),_t.copy(Bt).multiplyScalar(et).floor(),wt=de;if(Y!==0&&(H=k),v.bindFramebuffer(A.FRAMEBUFFER,H)&&v.drawBuffers(_,H),v.viewport(Z),v.scissor(_t),v.setScissorTest(wt),G){let ft=X.get(_.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+D,ft.__webglTexture,Y)}else if(pt){let ft=D;for(let Mt=0;Mt<_.textures.length;Mt++){let Et=X.get(_.textures[Mt]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Mt,Et.__webglTexture,Y,ft)}}else if(_!==null&&Y!==0){let ft=X.get(_.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ft.__webglTexture,Y)}V=-1};function Il(_){let D=X.get(_);return(D.__readFormat!==_.format||D.__readType!==_.type)&&(D.__readFormat=_.format,D.__readType=_.type,D.__formatReadable=E.textureFormatReadable(_.format),D.__typeReadable=E.textureTypeReadable(_.type)),D}this.readRenderTargetPixels=function(_,D,Y,H,G,pt,St,ft=0){if(!(_&&_.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=X.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&St!==void 0&&(Mt=Mt[St]),Mt){v.bindFramebuffer(A.FRAMEBUFFER,Mt);try{let Et=_.textures[ft],Vt=Et.format,qt=Et.type;_.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+ft);let bt=Il(Et);if(bt.__formatReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(bt.__typeReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=_.width-H&&Y>=0&&Y<=_.height-G&&A.readPixels(D,Y,H,G,ht.convert(Vt),ht.convert(qt),pt)}finally{let Et=J!==null?X.get(J).__webglFramebuffer:null;v.bindFramebuffer(A.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(_,D,Y,H,G,pt,St,ft=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=X.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&St!==void 0&&(Mt=Mt[St]),Mt)if(D>=0&&D<=_.width-H&&Y>=0&&Y<=_.height-G){v.bindFramebuffer(A.FRAMEBUFFER,Mt);let Et=_.textures[ft],Vt=Et.format,qt=Et.type;_.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+ft);let bt=Il(Et);if(bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let jt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,jt),A.bufferData(A.PIXEL_PACK_BUFFER,pt.byteLength,A.STREAM_READ),A.readPixels(D,Y,H,G,ht.convert(Vt),ht.convert(qt),0),A.bindBuffer(A.PIXEL_PACK_BUFFER,null);let we=J!==null?X.get(J).__webglFramebuffer:null;v.bindFramebuffer(A.FRAMEBUFFER,we);let fe=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Uc(A,fe,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,jt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,pt),A.bindBuffer(A.PIXEL_PACK_BUFFER,null),A.deleteBuffer(jt),A.deleteSync(fe),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,D=null,Y=0){let H=Math.pow(2,-Y),G=Math.floor(_.image.width*H),pt=Math.floor(_.image.height*H),St=D!==null?D.x:0,ft=D!==null?D.y:0;K.setTexture2D(_,0),A.copyTexSubImage2D(A.TEXTURE_2D,Y,0,0,St,ft,G,pt),v.unbindTexture()},this.copyTextureToTexture=function(_,D,Y=null,H=null,G=0,pt=0){let St,ft,Mt,Et,Vt,qt,bt,jt,we,fe=_.isCompressedTexture?_.mipmaps[pt]:_.image;if(Y!==null)St=Y.max.x-Y.min.x,ft=Y.max.y-Y.min.y,Mt=Y.isBox3?Y.max.z-Y.min.z:1,Et=Y.min.x,Vt=Y.min.y,qt=Y.isBox3?Y.min.z:0;else{let Me=Math.pow(2,-G);St=Math.floor(fe.width*Me),ft=Math.floor(fe.height*Me),_.isDataArrayTexture?Mt=fe.depth:_.isData3DTexture?Mt=Math.floor(fe.depth*Me):Mt=1,Et=0,Vt=0,qt=0}H!==null?(bt=H.x,jt=H.y,we=H.z):(bt=0,jt=0,we=0);let ae=ht.convert(D.format),Ne=ht.convert(D.type),xt;D.isData3DTexture?(K.setTexture3D(D,0),xt=A.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(K.setTexture2DArray(D,0),xt=A.TEXTURE_2D_ARRAY):(K.setTexture2D(D,0),xt=A.TEXTURE_2D),v.activeTexture(A.TEXTURE0),v.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,D.flipY),v.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),v.pixelStorei(A.UNPACK_ALIGNMENT,D.unpackAlignment);let ke=v.getParameter(A.UNPACK_ROW_LENGTH),Jt=v.getParameter(A.UNPACK_IMAGE_HEIGHT),Qe=v.getParameter(A.UNPACK_SKIP_PIXELS),_n=v.getParameter(A.UNPACK_SKIP_ROWS),Bn=v.getParameter(A.UNPACK_SKIP_IMAGES);v.pixelStorei(A.UNPACK_ROW_LENGTH,fe.width),v.pixelStorei(A.UNPACK_IMAGE_HEIGHT,fe.height),v.pixelStorei(A.UNPACK_SKIP_PIXELS,Et),v.pixelStorei(A.UNPACK_SKIP_ROWS,Vt),v.pixelStorei(A.UNPACK_SKIP_IMAGES,qt);let bi=_.isDataArrayTexture||_.isData3DTexture,ie=D.isDataArrayTexture||D.isData3DTexture;if(_.isDepthTexture){let Me=X.get(_),zn=X.get(D),he=X.get(Me.__renderTarget),kn=X.get(zn.__renderTarget);v.bindFramebuffer(A.READ_FRAMEBUFFER,he.__webglFramebuffer),v.bindFramebuffer(A.DRAW_FRAMEBUFFER,kn.__webglFramebuffer);for(let wi=0;wi<Mt;wi++)bi&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,X.get(_).__webglTexture,G,qt+wi),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,X.get(D).__webglTexture,pt,we+wi)),A.blitFramebuffer(Et,Vt,St,ft,bt,jt,St,ft,A.DEPTH_BUFFER_BIT,A.NEAREST);v.bindFramebuffer(A.READ_FRAMEBUFFER,null),v.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(G!==0||_.isRenderTargetTexture||X.has(_)){let Me=X.get(_),zn=X.get(D);v.bindFramebuffer(A.READ_FRAMEBUFFER,N),v.bindFramebuffer(A.DRAW_FRAMEBUFFER,L);for(let he=0;he<Mt;he++)bi?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Me.__webglTexture,G,qt+he):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Me.__webglTexture,G),ie?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,zn.__webglTexture,pt,we+he):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,zn.__webglTexture,pt),G!==0?A.blitFramebuffer(Et,Vt,St,ft,bt,jt,St,ft,A.COLOR_BUFFER_BIT,A.NEAREST):ie?A.copyTexSubImage3D(xt,pt,bt,jt,we+he,Et,Vt,St,ft):A.copyTexSubImage2D(xt,pt,bt,jt,Et,Vt,St,ft);v.bindFramebuffer(A.READ_FRAMEBUFFER,null),v.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else ie?_.isDataTexture||_.isData3DTexture?A.texSubImage3D(xt,pt,bt,jt,we,St,ft,Mt,ae,Ne,fe.data):D.isCompressedArrayTexture?A.compressedTexSubImage3D(xt,pt,bt,jt,we,St,ft,Mt,ae,fe.data):A.texSubImage3D(xt,pt,bt,jt,we,St,ft,Mt,ae,Ne,fe):_.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,pt,bt,jt,St,ft,ae,Ne,fe.data):_.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,pt,bt,jt,fe.width,fe.height,ae,fe.data):A.texSubImage2D(A.TEXTURE_2D,pt,bt,jt,St,ft,ae,Ne,fe);v.pixelStorei(A.UNPACK_ROW_LENGTH,ke),v.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Jt),v.pixelStorei(A.UNPACK_SKIP_PIXELS,Qe),v.pixelStorei(A.UNPACK_SKIP_ROWS,_n),v.pixelStorei(A.UNPACK_SKIP_IMAGES,Bn),pt===0&&D.generateMipmaps&&A.generateMipmap(xt),v.unbindTexture()},this.initRenderTarget=function(_){X.get(_).__webglFramebuffer===void 0&&K.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?K.setTextureCube(_,0):_.isData3DTexture?K.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?K.setTexture2DArray(_,0):K.setTexture2D(_,0),v.unbindTexture()},this.resetState=function(){F=0,q=0,J=null,v.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}};var Ge={period:15,seed:1011,timeMode:"clock",hour:17.9,weather:"clear",wind:1,windSpeed:1,grassDensity:1,flowerDensity:1,flowerSize:1,heroes:!0,heroSize:1,colors:{white:"#f6eff1",pink:"#ee9fc3",magenta:"#d6127a",crimson:"#8a0a34"},colorWeights:{white:.38,pink:.27,magenta:.22,crimson:.13},skyline:!0,horizon:.385,haze:1,dof:1,bloom:1,exposure:0,grain:1,butterflies:2,petals:8,pollen:1,fireflies:1,quality:"high"},Gs={low:{grass:26e3,grassNear:600,flowers:.5,samples:0,dofTaps:16,treeline:700,shadow:0,ibl:0,ao:0},medium:{grass:48e3,grassNear:1400,flowers:.75,samples:4,dofTaps:24,treeline:1e3,shadow:1024,ibl:32,ao:1},high:{grass:8e4,grassNear:2600,flowers:1,samples:4,dofTaps:36,treeline:1400,shadow:2048,ibl:64,ao:1},ultra:{grass:13e4,grassNear:4e3,flowers:1.3,samples:8,dofTaps:48,treeline:1800,shadow:2048,ibl:128,ao:1}},_i=["clear","partly","overcast","fog","rain"],B0=i=>JSON.parse(JSON.stringify(i)),z0=["clock","fixed","timelapse"],k0=[..._i,"auto"],V0=[...Object.keys(Gs),"auto"],H0=/^#[0-9a-f]{6}$/i,G0={period:[2,600],wind:[0,3],windSpeed:[.25,3],grassDensity:[.3,1.6],flowerDensity:[0,4],flowerSize:[.5,2],heroSize:[.5,1.6],haze:[0,3],dof:[0,2],bloom:[0,2.5],exposure:[-2,2],grain:[0,2],butterflies:[0,8],petals:[0,30],pollen:[0,3],fireflies:[0,3]},W0=(i,[t,e],n)=>{let s=+i;return Number.isFinite(s)?Math.min(e,Math.max(t,s)):n};function si(i={}){let t=i&&typeof i=="object"?i:{},e={...B0(Ge),...t};e.colors={...Ge.colors,...t.colors&&typeof t.colors=="object"?t.colors:{}},e.colorWeights={...Ge.colorWeights,...t.colorWeights&&typeof t.colorWeights=="object"?t.colorWeights:{}};for(let n of Object.keys(e))n in Ge||delete e[n];z0.includes(e.timeMode)||(e.timeMode=Ge.timeMode),k0.includes(e.weather)||(e.weather=Ge.weather),V0.includes(e.quality)||(e.quality=Ge.quality),e.hour=Number.isFinite(+e.hour)?(+e.hour%24+24)%24:Ge.hour;for(let[n,s]of Object.entries(G0))e[n]=W0(e[n],s,Ge[n]);e.seed=Math.max(0,Math.floor(+e.seed)||0);for(let n of["heroes","skyline"])e[n]=!!e[n];for(let n of Object.keys(Ge.colors))H0.test(String(e.colors[n]||""))||(e.colors[n]=Ge.colors[n]);for(let n of Object.keys(Ge.colorWeights)){let s=+e.colorWeights[n];e.colorWeights[n]=Number.isFinite(s)?Math.min(1,Math.max(0,s)):Ge.colorWeights[n]}return e}var mh=["period","seed","grassDensity","flowerDensity","flowerSize","heroes","heroSize","colorWeights","skyline","horizon","butterflies","petals","pollen","fireflies","quality"];function ri(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var gh=`
uniform float uPhase, uLoop, uTime, uPeriod, uWind;
uniform vec3 uWindCyc;
uniform vec2 uFlutterCyc;
uniform vec3 uLightDir, uLightColor, uSunDir, uGlowColor, uSkyAmb, uGroundAmb, uHorizon, uZenith;
uniform float uFogDensity, uCloudCover, uCloudShadow, uWet;
uniform vec2 uCloudDrift;

// \u65B9\u5411\u5149\u9634\u5F71\uFF08M1\uFF09
uniform sampler2D uShadowMap;
uniform mat4 uShadowMatrix;
uniform vec2 uShadowTexel;
uniform float uShadowBias, uShadowEnabled;

// \u5929\u7A7A IBL\uFF08M1\uFF09
uniform samplerCube uEnvMap;
uniform float uEnvIntensity;

#define CLOUD_H 1600.0
const vec2 WIND_DIR = vec2(0.94, -0.34);
`;var vh=`
float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float hash11(float p) { p = fract(p * .1031); p *= p + 33.33; p *= p + p; return fract(p); }
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3. - 2. * f);
  return mix(mix(hash12(i), hash12(i + vec2(1, 0)), u.x), mix(hash12(i + vec2(0, 1)), hash12(i + vec2(1, 1)), u.x), u.y);
}
float fbm(vec2 p) {
  float s = 0., a = .5;
  for (int i = 0; i < 5; i++) { s += a * vnoise(p); p = p * 2.03 + vec2(17.1, 9.2); a *= .5; }
  return s / 0.96875;
}
float fbm3(vec2 p) {
  float s = 0., a = .5;
  for (int i = 0; i < 3; i++) { s += a * vnoise(p); p = p * 2.03 + vec2(17.1, 9.2); a *= .5; }
  return s / 0.875;
}
`;var xh=`
// \u9635\u98CE\uFF1A\u6CBF\u98CE\u5411\u4F20\u64AD\u7684\u884C\u6CE2\uFF0C\u65F6\u95F4\u9891\u7387\u4E3A\u6574\u6570
float gust(vec2 p) {
  float u = dot(p, WIND_DIR), v = dot(p, vec2(-WIND_DIR.y, WIND_DIR.x));
  return 0.55 * sin(uWindCyc.x * uPhase - u * 0.21 + sin(v * 0.09) * 1.5)
       + 0.30 * sin(uWindCyc.y * uPhase - u * 0.47 + v * 0.13 + 1.3)
       + 0.15 * sin(uWindCyc.z * uPhase - u * 0.93 - v * 0.21 + 2.1);
}
// \u690D\u682A\u9876\u7AEF\u7684\u6C34\u5E73\u4F4D\u79FB\uFF08xz\uFF09\uFF0Ch \u4E3A\u690D\u682A\u9AD8\u5EA6
vec2 windDisp(vec2 p, float ph, float h) {
  float g = gust(p);
  float fl = sin(uFlutterCyc.x * uPhase + ph) + 0.6 * sin(uFlutterCyc.y * uPhase + ph * 1.7);
  vec2 side = vec2(-WIND_DIR.y, WIND_DIR.x);
  return (WIND_DIR * (0.075 + 0.08 * g + 0.012 * fl) + side * 0.014 * fl) * uWind * h;
}
`;var _h=`
// \u5FAA\u73AF\u4E91\u573A\uFF1A\u4E24\u4EFD\u9519\u5F00\u4E00\u4E2A\u5468\u671F\u6F02\u79FB\u91CF\u7684\u566A\u58F0\u9996\u5C3E\u4EA4\u53C9\u6DE1\u5316\uFF0C\u5E76\u505A\u65B9\u5DEE\u8865\u507F
float cloudDensity(vec2 pw) {
  vec2 q = pw / 2600.0, d = uCloudDrift / 2600.0;
  float a = fbm(q - d * uTime);
  float b = fbm(q - d * (uTime - uPeriod) + vec2(0.0));
  float w = uLoop;
  float f = 0.5 + ((1.0 - w) * (a - 0.5) + w * (b - 0.5)) / sqrt((1.0 - w) * (1.0 - w) + w * w);
  return smoothstep(0.72 - 0.6 * uCloudCover, 0.98 - 0.55 * uCloudCover, f);
}
float cloudShadowAt(vec3 wp) {
  if (uLightDir.y < 0.03 || uCloudShadow < 0.01) return 1.0;
  vec2 pc = wp.xz + uLightDir.xz / uLightDir.y * (CLOUD_H - wp.y);
  return 1.0 - cloudDensity(pc) * uCloudShadow;
}
`;var yh=`
vec3 fogColorDir(vec3 v) {
  float s = max(dot(v, uSunDir), 0.0);
  return uHorizon + uGlowColor * (0.45 * pow(s, 12.0) + 0.08 * pow(s, 3.0));
}
// \u8FD4\u56DE rgb = \u96FE\u8272\uFF0Ca = \u96FE\u91CF
vec4 fogAt(vec3 wp) {
  vec3 d = wp - cameraPosition; float dist = length(d); vec3 v = d / max(dist, 1e-4);
  float hAvg = max(0.0, 0.5 * (wp.y + cameraPosition.y));
  float amt = 1.0 - exp(-dist * uFogDensity * exp(-hAvg / 220.0));
  return vec4(fogColorDir(v), amt);
}
`;function za(){let i=()=>({value:new O});return{uPhase:{value:0},uLoop:{value:0},uTime:{value:0},uPeriod:{value:15},uWindCyc:{value:new O(1,2,3)},uFlutterCyc:{value:new zt(5,8)},uWind:{value:1},uLightDir:i(),uLightColor:i(),uSunDir:i(),uGlowColor:i(),uSunDisc:i(),uSkyAmb:i(),uGroundAmb:i(),uZenith:i(),uHorizon:i(),uFogDensity:{value:45e-5},uCloudCover:{value:.2},uCloudShadow:{value:.6},uCloudDrift:{value:new zt(14,-4)},uCloudLit:i(),uCloudDark:i(),uSunVis:{value:1},uStars:{value:0},uMoon:{value:0},uMoonDir:i(),uCityLights:{value:0},uWet:{value:0},uRain:{value:0},uShadowMap:{value:null},uShadowMatrix:{value:new oe},uShadowTexel:{value:new zt(1/2048,1/2048)},uShadowBias:{value:8e-4},uShadowEnabled:{value:0},uEnvMap:{value:null},uEnvIntensity:{value:0},uPalBase:{value:[i().value,i().value,i().value,i().value]},uPalMid:{value:[i().value,i().value,i().value,i().value]},uPalTip:{value:[i().value,i().value,i().value,i().value]}}}var ss=`
vec3 plantAmbient(vec3 N, float ao) {
  vec3 analytic = mix(uGroundAmb, uSkyAmb, N.y * 0.5 + 0.5);
  if (uEnvIntensity < 0.001) return analytic * ao;
  vec3 env = mix(uGroundAmb, textureCube(uEnvMap, normalize(N)).rgb, smoothstep(-0.25, 0.25, N.y));
  return mix(analytic, env, clamp(uEnvIntensity, 0.0, 1.0)) * ao;
}
vec3 plantSpecEnv(vec3 N, vec3 V, float roughness, float specular) {
  if (uEnvIntensity < 0.001 || specular < 0.001) return vec3(0.0);
  vec3 R = reflect(-V, N);
  float fres = pow(1.0 - max(dot(N, V), 0.0), 5.0);
  vec3 env = textureCube(uEnvMap, R).rgb;
  return env * (0.18 + 0.82 * fres) * specular * (1.0 - roughness * 0.6) * uEnvIntensity;
}
// \u7B80\u5316 GGX \u65B9\u5411\u5149\u9AD8\u5149\uFF08\u7701\u7565\u51E0\u4F55\u9879\uFF0C\u7528\u4E8E\u80CC\u666F\u690D\u88AB\u8DB3\u591F\uFF09
float ggxSpec(float ndh, float roughness) {
  float a = max(roughness * roughness, 0.05);
  float a2 = a * a;
  float d = ndh * ndh * (a2 - 1.0) + 1.0;
  return a2 / (3.14159 * d * d + 1e-4);
}
vec3 shadePlant(vec3 albedo, vec3 N, vec3 V, float ao, float trans, float shadow, float roughness, float specular) {
  vec3 L = uLightDir;
  float ndl = dot(N, L);
  float diff = max(ndl * 0.55 + 0.45, 0.0);
  float back = pow(max(dot(-V, L), 0.0), 4.0) * trans;
  vec3 sun = uLightColor * shadow * (diff * mix(0.55, 1.0, ao) + back * 1.6);
  vec3 amb = plantAmbient(N, ao);
  vec3 col = albedo * (sun + amb);
  vec3 H = normalize(L + V);
  float ndh = max(dot(N, H), 0.0);
  float specSun = ggxSpec(ndh, roughness) * specular * (0.15 + 0.85 * uWet) * (0.35 + 0.65 * max(ndl, 0.0));
  col += uLightColor * shadow * specSun * ao * 6.0;                 // \u7ECF\u9A8C\u7F29\u653E\uFF0C\u907F\u514D\u8FC7\u66DD/\u5851\u6599\u611F
  col += albedo * plantSpecEnv(N, V, roughness, specular) * 0.6;    // \u73AF\u5883\u53CD\u5C04\uFF08\u53F6\u7247/\u82B1\u74E3\u8FB9\u7F18\u5FAE\u5149\uFF09
  return col;
}
`;var Ws=`
float shadowVisibility(vec4 sc, vec3 N) {
  if (uShadowEnabled < 0.5 || sc.w <= 0.0) return 1.0;
  vec3 p = sc.xyz / sc.w;
  p = p * 0.5 + 0.5;                       // NDC [-1,1] -> \u7EB9\u7406\u5750\u6807 [0,1]
  if (p.z > 1.0 || p.x < 0.0 || p.x > 1.0 || p.y < 0.0 || p.y > 1.0) return 1.0;
  float bias = uShadowBias * (1.0 + 2.0 * (1.0 - abs(dot(normalize(N), uLightDir))));
  vec2 t = uShadowTexel * 0.5;
  vec2 uv = p.xy - t;
  float vis = 0.0;
  vis += (p.z - bias > texture2D(uShadowMap, uv).r) ? 0.0 : 1.0;
  vis += (p.z - bias > texture2D(uShadowMap, uv + vec2(uShadowTexel.x, 0.0)).r) ? 0.0 : 1.0;
  vis += (p.z - bias > texture2D(uShadowMap, uv + vec2(0.0, uShadowTexel.y)).r) ? 0.0 : 1.0;
  vis += (p.z - bias > texture2D(uShadowMap, uv + uShadowTexel).r) ? 0.0 : 1.0;
  vis *= 0.25;
  // \u9634\u5F71\u8D34\u56FE\u8FB9\u7F18\u6DE1\u51FA\uFF0C\u907F\u514D\u8FD1\u4E2D\u666F\u4E0E\u8FDC\u666F\u4EA4\u754C\u51FA\u73B0\u786C\u8FB9
  float edge = smoothstep(0.0, 0.06, min(min(p.x, 1.0 - p.x), min(p.y, 1.0 - p.y)));
  return mix(1.0, vis, edge);
}
`;var be=[gh,vh,xh,_h,yh].join(`
`);var Si=i=>{let t=new Ht(i);return[t.r,t.g,t.b]},ka=(i,t,e)=>i+(t-i)*e,Mi=(i,t,e)=>[ka(i[0],t[0],e),ka(i[1],t[1],e),ka(i[2],t[2],e)],le=(i,t)=>[i[0]*t,i[1]*t,i[2]*t],rs=(i,t)=>[i[0]+t[0],i[1]+t[1],i[2]+t[2]],as=i=>.2126*i[0]+.7152*i[1]+.0722*i[2],gl=(i,t)=>Mi(i,[as(i),as(i),as(i)],t),Cn=(i,t,e)=>{let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},yi=[{e:-26,zen:"#010207",hor:"#070b18",glow:"#000000",glowI:0,sun:"#000000",sunI:0,amb:1,sat:.72,tint:[.9,.96,1.08],ex:2.3},{e:-11,zen:"#040a1e",hor:"#1b2645",glow:"#3a3466",glowI:.25,sun:"#000000",sunI:0,amb:1.6,sat:.78,tint:[.92,.96,1.06],ex:2},{e:-4.5,zen:"#14275a",hor:"#a26c74",glow:"#ff8c5a",glowI:.9,sun:"#ff6a30",sunI:0,amb:2.2,sat:.95,tint:[1,.96,1],ex:1.5},{e:0,zen:"#1f3d7e",hor:"#f0965e",glow:"#ff8a40",glowI:1.5,sun:"#ff7a36",sunI:1.1,amb:1.5,sat:1.08,tint:[1.05,.97,.92],ex:1.15},{e:5,zen:"#3b73a8",hor:"#f5b77a",glow:"#ffa95a",glowI:1,sun:"#ffa65a",sunI:2.5,amb:.9,sat:1.1,tint:[1.03,1,.95],ex:1},{e:14,zen:"#336fb8",hor:"#d6dbdc",glow:"#ffd7a6",glowI:.75,sun:"#ffd8a8",sunI:2.9,amb:1,sat:1.06,tint:[1.04,1,.95],ex:1},{e:40,zen:"#2c68c2",hor:"#bad2e8",glow:"#fff6ea",glowI:.6,sun:"#fff6ec",sunI:3.3,amb:1,sat:1,tint:[1,1,1],ex:1}].map(i=>({...i,zen:Si(i.zen),hor:Si(i.hor),glow:Si(i.glow),sun:Si(i.sun)}));function X0(i){if(i<=yi[0].e)return yi[0];for(let t=0;t<yi.length-1;t++){let e=yi[t],n=yi[t+1];if(i<=n.e){let s=Cn(0,1,(i-e.e)/(n.e-e.e)),r={};for(let a of Object.keys(e))r[a]=Array.isArray(e[a])?Mi(e[a],n[a],s):ka(e[a],n[a],s);return r}}return yi[yi.length-1]}function q0(i){let t=(i%24+24)%24,e,n;if(t>=6&&t<=18.5){let c=(t-6)/12.5;e=c*Math.PI,n=Math.sin(c*Math.PI)*62}else{let c=(t-18.5+24)%24/11.5;e=Math.PI+c*Math.PI,n=-Math.sin(c*Math.PI)*42}let s=Math.sin(e)-.32*Math.pow(Math.sin(e/2),2),r=Math.cos(e),a=Math.hypot(s,r)||1,o=n*Math.PI/180;return{dir:new O(s/a*Math.cos(o),Math.sin(o),r/a*Math.cos(o)),elev:n}}var Y0=new O(-.42,.42,-.8).normalize();function Z0(i){let{dir:t,elev:e}=q0(i),n=X0(e),s=Cn(-2,-9,e),r=Cn(-1.5,3,e),a=Si("#b4c2f0"),o=new O().copy(t).lerp(Y0,s).normalize(),c=rs(le(n.sun,n.sunI*r),le(a,.16*s)),l=rs(le(Mi(n.hor,n.zen,.55),.9*n.amb),le(Si("#1e2a44"),.6*s));return{sunDir:t,elev:e,lightDir:o,lightCol:c,zen:n.zen,hor:n.hor,glow:le(n.glow,n.glowI),sunDisc:le(n.sun,30*r+4*Cn(-3,0,e)),skyAmb:l,groundAmb:rs(le(l,.32),le(Si("#2f4a1c"),.12*r)),fogMul:1,cloudCover:.07,cloudShadow:.65,sunVis:1,cloudLit:rs(le(n.sun,n.sunI*.28*r),le(l,1.15)),cloudDark:rs(le(l,.55),le(n.hor,.25)),stars:Cn(-7,-15,e),moon:Cn(-3,-10,e),cityLights:Cn(4,-6,e),sat:n.sat,tint:n.tint,contrast:1.05,ex:n.ex,bloom:1,rain:0,wet:0,pollen:r,butterflies:Cn(4,12,e),fireflies:Cn(-3,-9,e)}}function $0(i,t){let e={...i},n=(s,r,a)=>le(gl(s,a),r);if(t==="clear")return e;if(t==="partly")return e.cloudCover=.52,e.cloudShadow=.72,e.lightCol=le(e.lightCol,.95),e;if(t==="overcast")return e.cloudCover=.97,e.cloudShadow=.15,e.zen=n(e.zen,.78,.82),e.hor=n(e.hor,.85,.8),e.skyAmb=le(gl(e.skyAmb,.6),1.25),e.groundAmb=le(e.groundAmb,1.15),e.lightCol=le(e.lightCol,.12),e.glow=le(e.glow,.25),e.sunVis=0,e.cloudLit=n(e.cloudLit,.85,.75),e.cloudDark=n(e.cloudDark,.8,.7),e.sat*=.86,e.contrast=.97,e.stars=0,e.moon=0,e.pollen*=.3,e.butterflies*=.4,e.cityLights=Math.max(e.cityLights,.08),e;if(t==="fog"){e.fogMul=9,e.cloudCover=.75,e.cloudShadow=.1;let s=Mi(e.hor,[as(e.hor)*1.05,as(e.hor)*1.06,as(e.hor)*1.08],.6);return e.hor=Mi(e.hor,s,.7),e.zen=Mi(e.zen,e.hor,.65),e.skyAmb=le(Mi(e.skyAmb,e.hor,.5),1.25),e.lightCol=le(e.lightCol,.4),e.glow=le(e.glow,1.4),e.sunVis=.35,e.sat*=.82,e.contrast=.95,e.stars=0,e.moon*=.2,e.bloom=1.4,e.butterflies*=.3,e}return t==="rain"&&(e.cloudCover=1,e.cloudShadow=.05,e.fogMul=3.5,e.zen=n(e.zen,.5,.85),e.hor=n(e.hor,.62,.8),e.skyAmb=le(gl(e.skyAmb,.65),.95),e.groundAmb=le(e.groundAmb,.9),e.lightCol=le(e.lightCol,.03),e.glow=le(e.glow,.15),e.sunVis=0,e.cloudLit=n(e.cloudLit,.55,.85),e.cloudDark=n(e.cloudDark,.5,.8),e.sat*=.86,e.contrast=.98,e.stars=0,e.moon=0,e.rain=1,e.wet=1,e.pollen=0,e.butterflies=0,e.fireflies=0,e.cityLights=Math.max(e.cityLights,.15)),e}function J0(i){let t={},e=i.reduce((n,[,s])=>n+s,0)||1;for(let[n,s]of i){let r=s/e;for(let a of Object.keys(n)){let o=n[a];o instanceof O?(t[a]=t[a]||new O,t[a].addScaledVector(o,r)):Array.isArray(o)?t[a]=t[a]?rs(t[a],le(o,r)):le(o,r):t[a]=(t[a]||0)+o*r}}return t.lightDir.normalize(),t.sunDir.normalize(),t}function Mh(i,t){let e=Z0(i),n=_i.filter(s=>(t[s]||0)>.001).map(s=>[$0(e,s),t[s]]);return J0(n.length?n:[[e,1]])}var K0=[["clear",.42],["partly",.26],["overcast",.12],["fog",.08],["rain",.12]];function Q0(i){let t=Math.imul(i^2654435769,2246822507);return t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,(t>>>0)/4294967296}function Sh(i){let t=Q0(i);for(let[e,n]of K0)if((t-=n)<=0)return e;return"clear"}function bh(i=new Date){let t=Math.floor((i.getTime()-i.getTimezoneOffset()*6e4)/864e5),e=i.getHours()+i.getMinutes()/60,n=t*8+Math.floor(e/3),s=Sh(n),r=Sh(n-1),a=Cn(0,.5,e%3),o={};return o[r]=(o[r]||0)+(1-a),o[s]=(o[s]||0)+a,{weights:o,name:a>=.5?s:r}}function Rn(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}function os(i,{mips:t=!0}={}){let e=new Es(i);return e.colorSpace=mn,e.generateMipmaps=t,e.minFilter=t?sn:me,e.magFilter=me,e.wrapS=e.wrapT=tn,e.anisotropy=4,e.needsUpdate=!0,e}function j0(i,t,e,n){let s=e/2,r=n,a=6+Math.floor(t()*4),o=n*.0052;i.lineCap="round";for(let c=0;c<a;c++){let l=(t()-.5)*1.05,u=n*(.55+.42*t()),p=s+Math.sin(l)*u*.85*(e/n),h=r-Math.cos(l)*u,d=s+Math.sin(l)*u*.2+(t()-.5)*u*.12,g=r-u*.55,y=f=>{let b=Math.round(255*Math.min(1,f));return`rgb(${b},${b},${b})`};i.strokeStyle=y(.42),i.lineWidth=o*1.5,i.beginPath(),i.moveTo(s,r),i.quadraticCurveTo(d,g,p,h),i.stroke(),i.strokeStyle=y(.82),i.lineWidth=o*.55,i.beginPath(),i.moveTo(s,r),i.quadraticCurveTo(d+1,g,p,h),i.stroke();let m=7+Math.floor(t()*6);for(let f=1;f<=m;f++){let b=f/(m+.5),C=1-b,S=C*C*s+2*C*b*d+b*b*p,M=C*C*r+2*C*b*g+b*b*h,w=2*C*(d-s)+2*b*(p-d),R=2*C*(g-r)+2*b*(h-g),x=Math.atan2(w,-R);for(let T of[-1,1]){if(t()>.88)continue;let P=u*(.14+.18*t())*(1-.5*b),I=x+T*(.4+.6*t()),z=S+Math.sin(I)*P,k=M-Math.cos(I)*P,N=S+Math.sin(I-T*.3)*P*.55,L=M-Math.cos(I-T*.3)*P*.55;i.strokeStyle=y(.5+.5*b+(t()-.5)*.25),i.lineWidth=o,i.beginPath(),i.moveTo(S,M),i.quadraticCurveTo(N,L,z,k),i.stroke();let F=2+Math.floor(t()*2);for(let q=0;q<F;q++){let J=.3+t()*.5,V=S+(z-S)*J,W=M+(k-M)*J,Z=I+(t()<.5?-1:1)*(.35+t()*.45),_t=P*(.3+t()*.35);i.lineWidth=o*.8,i.beginPath(),i.moveTo(V,W),i.lineTo(V+Math.sin(Z)*_t,W-Math.cos(Z)*_t),i.stroke()}}}}}function Va(i=6,t=512){let e=Rn(t*i,t),n=e.getContext("2d");for(let s=0;s<i;s++)n.save(),n.beginPath(),n.rect(s*t,0,t,t),n.clip(),n.translate(s*t,0),j0(n,ri(4242+s*97),t,t),n.restore();return os(e)}var Se=256,Le=512,vl=2,wh=2;function tg(i,t,e){let n=Se,s=Le,r=s*(.975+.02*t()),a=n*(.44+.05*t()),o=n*.045,c=3+(e===3?1:0),l=new Path2D;l.moveTo(-o,0),l.bezierCurveTo(-n*.2,-r*.3,-a*1.05,-r*.62,-a,-r*.88);for(let p=0;p<c;p++){let h=-a+2*a*p/c,d=-a+2*a*(p+1)/c,g=(h+d)/2,y=(d-h)*(.18+.08*t()),m=-r*(.94+.045*t()+(p===Math.floor(c/2)?.02:0)),f=p===c-1?-r*.86:-r*(.85+.035*t());l.quadraticCurveTo(g-y,m,g,m),l.quadraticCurveTo(g+y,m,d,f)}l.bezierCurveTo(a*1.05,-r*.62,n*.2,-r*.3,o,0),l.closePath(),i.save(),i.translate(n/2,s),i.fillStyle="#fff",i.fill(l),i.clip(l);for(let p=-11;p<=11;p++){let h=p/11,d=Math.abs(p)%3===0;i.strokeStyle=`rgba(60,60,60,${(d?.42:.24)+t()*.2})`,i.lineWidth=d?2.4:1.2,i.beginPath(),i.moveTo(h*o*.8,-6),i.bezierCurveTo(h*a*.3,-r*.35,h*a*.85,-r*.65,h*a*(.75+.2*t()),-r*(.82+.1*t())),i.stroke()}for(let p=0;p<26;p++){let h=.15+t()*.75,d=-r*h,g=(t()-.5)*a*1.5*(.3+h);i.strokeStyle=`rgba(90,90,90,${.12+t()*.12})`,i.lineWidth=.8,i.beginPath(),i.moveTo(g,d),i.lineTo(g+(t()-.5)*26,d-6-t()*10),i.stroke()}let u=i.createLinearGradient(0,0,0,-r*.3);return u.addColorStop(0,"rgba(40,40,40,0.65)"),u.addColorStop(1,"rgba(40,40,40,0)"),i.fillStyle=u,i.fillRect(-n,-r*.3,n*2,r*.3),i.restore(),{shape:l,len:r}}function eg(i){let t=ri(9100+i*137),e=Rn(Se,Le),n=e.getContext("2d"),{shape:s,len:r}=tg(n,t,i),o=Rn(Se,Le).getContext("2d");o.drawImage(e,0,0),o.globalCompositeOperation="destination-out";for(let b=0;b<26;b++){let C=.3+t()*.68,S=Le-r*C,M=Se/2+(t()-.5)*Se*.9*C;o.beginPath(),o.arc(M,S,.7+t()*2,0,Math.PI*2),o.fill()}o.globalCompositeOperation="source-over";let l=Rn(Se,Le).getContext("2d");l.fillStyle="#fff",l.fillRect(0,0,Se,Le),l.save(),l.translate(Se/2,Le),l.clip(s);for(let b=-11;b<=11;b++){let C=b/11,S=Math.abs(b)%3===0;l.strokeStyle=`rgba(70,70,70,${(S?.4:.22)+t()*.18})`,l.lineWidth=S?2.2:1.2,l.beginPath(),l.moveTo(C*Se*.036,-6),l.bezierCurveTo(C*Se*.14,-r*.35,C*Se*.4,-r*.65,C*Se*.44,-r*.85),l.stroke()}l.restore();let p=Rn(Se,Le).getContext("2d");p.filter="blur(7px)",p.drawImage(e,0,0);let h=n.getImageData(0,0,Se,Le).data,d=o.getImageData(0,0,Se,Le).data,g=l.getImageData(0,0,Se,Le).data,y=p.getImageData(0,0,Se,Le).data,m=new ImageData(Se,Le),f=m.data;for(let b=0;b<Le;b++){let C=1-b/Le,S=.92-.62*C;for(let M=0;M<Se;M++){let w=(b*Se+M)*4,R=Math.min(1,Math.max(0,C)),x=y[w+3]/255,T=Math.min(1,Math.max(.12,S*(.55+.45*Math.min(1,x*1.6))+(t()-.5)*.04));f[w]=g[w],f[w+1]=y[w+3],f[w+2]=Math.round(255*T),f[w+3]=d[w+3]}}return m}function Ha(){let i=Rn(Se*vl,Le*wh),t=i.getContext("2d");for(let e=0;e<vl*wh;e++){let n=eg(e),s=e%vl,r=e<2?1:0;t.putImageData(n,s*Se,r*Le)}return os(i)}function Ga(){let t=Rn(128,128),e=t.getContext("2d");e.fillStyle="#f7f6ee",e.beginPath(),e.ellipse(128*.55,128*.36,128*.42,128*.3,-.45,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(128*.4,128*.72,128*.3,128*.24,.5,0,Math.PI*2),e.fill(),e.globalCompositeOperation="source-atop",e.fillStyle="#4a4a46",e.beginPath(),e.ellipse(128*.9,128*.12,128*.2,128*.14,-.45,0,Math.PI*2),e.fill(),e.fillStyle="rgba(60,60,60,0.75)",e.beginPath(),e.arc(128*.6,128*.36,128*.05,0,Math.PI*2),e.fill();let n=e.createLinearGradient(0,0,128*.5,0);return n.addColorStop(0,"rgba(180,180,150,0.5)"),n.addColorStop(1,"rgba(180,180,150,0)"),e.fillStyle=n,e.fillRect(0,0,128,128),os(t)}var Th=i=>new Ht(i),qs=class{constructor(){this.pos=[],this.nrm=[],this.uv=[],this.part=[],this.idx=[]}v(t,e,n,s){return this.pos.push(t[0],t[1],t[2]),this.nrm.push(e[0],e[1],e[2]),this.uv.push(n[0],n[1]),this.part.push(s),this.pos.length/3-1}grid(t,e,n,s){let r=this.pos.length/3;for(let a=0;a<=e;a++)for(let o=0;o<=t;o++){let c=o/t,l=a/e,{p:u,n:p}=n(c,l);this.v(u,p,[c,l],s)}for(let a=0;a<e;a++)for(let o=0;o<t;o++){let c=r+a*(t+1)+o,l=c+1,u=c+t+1,p=u+1;this.idx.push(c,u,l,l,u,p)}}build(){let t=new Ee;return t.setAttribute("position",new se(this.pos,3)),t.setAttribute("normal",new se(this.nrm,3)),t.setAttribute("uv",new se(this.uv,2)),t.setAttribute("aPart",new se(this.part,1)),t.setIndex(this.idx),t}};function Wa(i=6){let t=new qs;for(let e=0;e<3;e++){let n=e*Math.PI/3,s=Math.cos(n),r=Math.sin(n);t.grid(2,i,(a,o)=>({p:[(a-.5)*s,o,(a-.5)*r],n:[-r,0,s]}),0)}return t.build()}function Ch(i){i.grid(6,6,(n,s)=>{let r=n*Math.PI*2;return{p:[Math.cos(r),s,Math.sin(r)],n:[Math.cos(r),0,Math.sin(r)]}},0)}function ng(){let i=new qs;Ch(i);let t=8,e=.1;for(let c=0;c<t;c++){let l=c/t*Math.PI*2+Math.sin(c*7.3)*.1,u=Math.cos(l),p=Math.sin(l),h=-p,d=u,g=.92+.12*Math.abs(Math.sin(c*3.1+.7)),y=.16+.1*Math.abs(Math.sin(c*5.7)),m=Math.sin(c*2.3)*.1,f=.8;i.grid(3,6,(b,C)=>{let S=e+(g-e)*C,M=.18+.82*Math.pow(C,.5),w=(b-.5)*f*M,R=Math.abs(b-.5)*2,x=y*C*C+m*C+.035*Math.sin(b*Math.PI)*C-.1*R*R*C*C+.03*Math.pow(C,3)*Math.cos(R*Math.PI),T=2*y*C+m,P=.22*R*C,I=new O(-u*T+h*P,1,-p*T+d*P).normalize();return{p:[u*S+h*w,x,p*S+d*w],n:[I.x,I.y,I.z]}},1)}for(let c=0;c<6;c++){let l=c/6*Math.PI*2+.35,u=Math.cos(l),p=Math.sin(l),h=-p,d=u,g=.52+.06*Math.sin(c*4.1),y=.3;i.grid(2,4,(m,f)=>{let b=e*.55+(g-e*.55)*f,C=.25+.75*Math.pow(f,.6),S=(m-.5)*.6*C,M=.03+y*f*f+.02*Math.sin(m*Math.PI)*f,w=2*y*f,R=new O(-u*w,1,-p*w).normalize();return{p:[u*b+h*S,M,p*b+d*S],n:[R.x,R.y,R.z]}},5)}let n=3,s=16,r=.2,a=i.v([0,.09,0],[0,1,0],[.5,.5],2),o=null;for(let c=1;c<=n;c++){let l=c/n*r,u=[];for(let p=0;p<s;p++){let h=p/s*Math.PI*2,d=.012*Math.sin(h*12+c*1.7)+.008*Math.sin(h*5+c),g=Math.cos(h)*l,y=Math.sin(h)*l,m=.075*(1-l/r*(l/r))+.012+d,f=new O(g*2,1,y*2).normalize();u.push(i.v([g,m,y],[f.x,f.y,f.z],[.5+g,.5+y],2))}for(let p=0;p<s;p++){let h=(p+1)%s;o?i.idx.push(o[p],o[h],u[p],o[h],u[h],u[p]):i.idx.push(a,u[h],u[p])}o=u}for(let c=0;c<12;c++){let l=c/12*Math.PI*2+.13,u=.155,p=Math.cos(l)*u,h=Math.sin(l)*u,d=.075*(1-u/r*(u/r))+.012,g=i.v([p*1.18,d+.055,h*1.18],[0,1,0],[.5,.5],2),y=[];for(let m=0;m<3;m++){let f=l+m/3*Math.PI*2;y.push(i.v([p+Math.cos(f)*.012,d,h+Math.sin(f)*.012],[Math.cos(f),.3,Math.sin(f)],[.5,.5],2))}i.idx.push(y[0],g,y[1],y[1],g,y[2],y[2],g,y[0])}return i.build()}function ig(){let i=new qs;Ch(i),i.grid(10,7,(n,s)=>{let r=s*Math.PI,a=n*Math.PI*2,o=Math.sin(r)*Math.cos(a)*.42,c=Math.sin(r)*Math.sin(a)*.42,l=.5-Math.cos(r)*.55,u=new O(o/.42,(l-.5)/.55,c/.42).normalize();return{p:[o,l,c],n:[u.x,u.y,u.z]}},3);for(let n=0;n<7;n++){let s=n/7*Math.PI*2,r=Math.cos(s),a=Math.sin(s);i.grid(1,3,(o,c)=>{let l=(o-.5)*.22*(1-c);return{p:[r*(.1+.55*c)-a*l,.12+.25*c-.15*c*c,a*(.1+.55*c)+r*l],n:[r*.3,1,a*.3]}},4)}return i.build()}function Xs(i,t,e){let n=new On;n.index=i.index;for(let s of Object.keys(i.attributes))n.setAttribute(s,i.attributes[s]);for(let[s,[r,a]]of Object.entries(t))n.setAttribute(s,new dn(r,a));return n.instanceCount=e,n}var Rh=`
${be}
uniform float uVariants;
attribute vec3 iPos;
attribute vec4 iData;   // \u5BBD, \u9AD8, \u671D\u5411, \u56FE\u96C6\u53D8\u4F53
attribute vec2 iData2;  // \u8272\u8C03, \u76F8\u4F4D
varying vec2 vUv; centroid varying float vS, vTint, vShadow, vGust;
centroid varying vec3 vN, vWorld; centroid varying vec4 vFog;
varying vec4 vShadowCoord;
void main() {
  float s = position.y;
  float cy = cos(iData.z), sy = sin(iData.z);
  float taper = mix(1.0, 0.3, s * s);              // \u53F6\u5C16\u6536\u7A84\uFF0C\u907F\u514D\u77E9\u5F62\u7EB8\u7247\u8F6E\u5ED3
  vec3 lp = vec3(position.x * iData.x * taper, position.y * iData.y, position.z * iData.x * taper);
  lp = vec3(cy * lp.x - sy * lp.z, lp.y, sy * lp.x + cy * lp.z);
  vec2 disp = windDisp(iPos.xz, iData2.y, iData.y);
  float bend = pow(s, 1.6);
  lp.xz += disp * bend;
  lp.y -= dot(disp, disp) / (2.0 * iData.y) * bend * bend;
  vec3 wp = iPos + lp;
  vec3 nr = vec3(cy * normal.x - sy * normal.z, 0.0, sy * normal.x + cy * normal.z);
  vec3 sph = normalize(vec3(lp.x, (s - 0.3) * iData.y, lp.z) + vec3(0.0, 0.001, 0.0));
  vN = normalize(mix(nr, sph, 0.65));
  vShadowCoord = uShadowMatrix * vec4(wp + vN * 0.02, 1.0);
  vUv = vec2((uv.x + iData.w) / uVariants, uv.y);
  vS = s; vTint = iData2.x; vWorld = wp;
  vShadow = cloudShadowAt(wp);
  vGust = gust(iPos.xz);
  vFog = fogAt(wp);
  gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
}`,sg=`
${be}
${ss}
${Ws}
uniform sampler2D uAtlas;
uniform vec3 uDark, uLight;
uniform float uA2C;
varying vec2 vUv; centroid varying float vS, vTint, vShadow, vGust;
centroid varying vec3 vN, vWorld; centroid varying vec4 vFog;
varying vec4 vShadowCoord;
void main() {
  vec4 tx = texture2D(uAtlas, vUv);
  float a = tx.a;
  vec2 g = vUv * vec2(2048.0, 512.0);
  float lod = log2(max(length(dFdx(g)), length(dFdy(g))));
  a *= 1.0 + max(lod, 0.0) * 0.3;    // \u8FDC\u5904 mip \u5E73\u5747\u540E\u8986\u76D6\u7387\u4E0B\u964D\uFF0C\u6309 mip \u7EA7\u522B\u8865\u507F
  if (uA2C > 0.5) { a = clamp((a - 0.42) / max(fwidth(a), 1e-4) + 0.5, 0.0, 1.0); if (a < 0.02) discard; }
  else { if (a < 0.45) discard; a = 1.0; }
  // MSAA \u4E0B\u6781\u7EC6\u4E09\u89D2\u5F62\u7684\u63D2\u503C\u53EF\u80FD\u5916\u63A8\uFF0C\u7EDF\u4E00\u94B3\u5236
  float S = clamp(vS, 0.0, 1.0), sh = clamp(vShadow, 0.0, 1.0);
  vec4 fog = clamp(vFog, 0.0, 8.0); fog.a = min(fog.a, 1.0);
  float L = tx.r;
  vec3 albedo = mix(uDark, uLight, clamp(L * 0.9 + vTint * 0.4 - 0.2 + vGust * 0.06, 0.0, 1.0));
  albedo = mix(albedo, vec3(0.21, 0.25, 0.05), smoothstep(0.6, 1.0, vTint) * 0.28);  // \u67AF\u9EC4/\u6696\u8C03\u8349\u4E1B
  albedo *= mix(1.0, 0.78, uWet);
  float ao = mix(0.18, 1.0, smoothstep(0.05, 0.95, S));
  vec3 V = normalize(cameraPosition - vWorld);
  vec3 n0 = normalize(vN + vec3(0.0, 1e-4, 0.0));
  vec3 N = gl_FrontFacing ? n0 : vec3(-n0.x, n0.y, -n0.z);
  sh *= shadowVisibility(vShadowCoord, N);
  vec3 col = shadePlant(albedo, N, V, ao, 0.55 * S * S, sh, 0.8, 0.0);   // \u53F6\u5C16\u9006\u5149\u900F\u4EAE
  col = mix(col, fog.rgb, fog.a);
  gl_FragColor = vec4(col, a);
}`,Ph=`
${be}
uniform vec3 uPalBase[4], uPalMid[4], uPalTip[4];
attribute float aPart;
attribute vec3 iPos;
attribute vec4 iHead;   // \u671D\u5411 xyz, \u82B1\u5934\u534A\u5F84
attribute vec4 iData;   // \u830E\u9AD8, \u989C\u8272\u5E8F\u53F7, \u76F8\u4F4D, \u81EA\u8F6C
attribute float iSway;
varying vec2 vUv, vPetalUv; varying float vPart, vCi, vPetalId, vInner, vTint; centroid varying float vShadow;
centroid varying vec3 vN, vWorld; varying vec3 vBase, vMid, vTip; centroid varying vec4 vFog;
varying vec4 vShadowCoord;
void main() {
  float h = iData.x;
  vCi = iData.y;
  float innerPetal = (aPart > 4.5 && aPart < 5.5) ? 1.0 : 0.0;
  vInner = innerPetal;
  vTint = 0.92 + 0.16 * hash11(iData.z * 5.1 + 0.3);
  vPetalId = floor(atan(position.z, position.x) / mix(0.785398, 1.047198, innerPetal) + 0.5) + iData.z * 13.0;
  // \u82B1\u74E3\u56FE\u96C6 2\xD72\uFF1A\u6BCF\u6735\u82B1\u968F\u673A\u9009\u4E00\u4E2A\u53D8\u4F53\uFF08\u5176\u4F59\u90E8\u4EF6\u4ECD\u7528 uv \u505A\u6E10\u53D8\uFF09
  float isPetal = ((aPart > 0.5 && aPart < 1.5) || innerPetal > 0.5) ? 1.0 : 0.0;
  if (isPetal > 0.5) {
    float vid = floor(hash11(iData.z * 3.7 + 0.13) * 4.0);
    vec2 cell = vec2(mod(vid, 2.0), floor(vid * 0.5)) * 0.5;
    vPetalUv = cell + uv * 0.5;
  } else { vPetalUv = uv; }
  vec2 disp = windDisp(iPos.xz, iData.z, h) * iSway;
  vec3 dv = vec3(disp.x, 0.0, disp.y);
  float drop = dot(disp, disp) / (2.0 * h);
  vec3 wp, N;
  if (aPart < 0.5) {
    float s = position.y;
    vec3 c = iPos + vec3(0.0, s * h, 0.0) + dv * s * s;
    c.y -= drop * s * s;
    float w = (0.0012 + iHead.w * 0.022) * mix(1.0, 0.7, s);
    wp = c + vec3(position.x, 0.0, position.z) * w;
    N = normalize(vec3(normal.x, 0.25, normal.z));
  } else {
    vec3 top = iPos + vec3(0.0, h, 0.0) + dv; top.y -= drop;
    vec3 f = normalize(iHead.xyz + dv * 2.2 / h);
    f = normalize(f + 0.06 * sin(uFlutterCyc.x * uPhase + iData.z * 2.3) * vec3(WIND_DIR.x, 0.0, WIND_DIR.y));
    vec3 t = normalize(cross(abs(f.y) < 0.95 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0), f));
    vec3 b = cross(f, t);
    float cs = cos(iData.w), sn = sin(iData.w);
    vec3 t2 = t * cs + b * sn, b2 = b * cs - t * sn;
    vec3 lp = position, nl = normal;
    if (isPetal > 0.5) {
      // \u6BCF\u6735\u82B1\u3001\u6BCF\u7247\u82B1\u74E3\uFF1A\u957F\u77ED\u3001\u676F\u72B6\u5F2F\u66F2\u3001\u7ED5\u4E2D\u8109\u626D\u8F6C\u5404\u4E0D\u76F8\u540C
      float sect = mix(0.785398, 1.047198, innerPetal);
      float ang = atan(position.z, position.x), rr = length(position.xz);
      float pa = floor(ang / sect + 0.5) * sect;
      vec2 perp = vec2(-sin(pa), cos(pa));
      float across = dot(position.xz, perp);
      float pi = floor(ang / sect + 0.5);
      float twist = (hash11(pi * 3.7 + iData.z * 11.1) - 0.5) * mix(0.9, 0.45, innerPetal);
      float k = hash11(iData.z * 7.13);
      lp.xz *= 1.0 + 0.1 * sin(ang * 3.0 + iData.z * 5.0) + 0.06 * sin(ang * 5.0 + iData.w * 3.0);
      lp.y += (k * 0.24 - 0.06) * rr * rr * mix(1.0, 0.8, innerPetal) + twist * across * rr + 0.012 * mod(pi, 2.0);
      nl = normalize(nl - vec3(perp.x, 0.0, perp.y) * twist * rr * 1.5);
    }
    lp *= iHead.w;
    wp = top + t2 * lp.x + f * lp.y + b2 * lp.z;
    N = normalize(t2 * nl.x + f * nl.y + b2 * nl.z);
  }
  vShadowCoord = uShadowMatrix * vec4(wp + N * 0.015, 1.0);
  int ci = int(iData.y + 0.5);
  vBase = uPalBase[ci]; vMid = uPalMid[ci]; vTip = uPalTip[ci];
  vUv = uv; vPart = aPart; vN = N; vWorld = wp;
  vShadow = cloudShadowAt(wp);
  vFog = fogAt(wp);
  gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
}`,rg=`
${be}
${ss}
${Ws}
uniform sampler2D uPetal;
uniform float uA2C;
varying vec2 vUv, vPetalUv; varying float vPart, vCi, vPetalId, vInner, vTint; centroid varying float vShadow;
centroid varying vec3 vN, vWorld; varying vec3 vBase, vMid, vTip; centroid varying vec4 vFog;
varying vec4 vShadowCoord;
void main() {
  vec3 V = normalize(cameraPosition - vWorld);
  vec3 n0 = normalize(vN + vec3(0.0, 1e-4, 0.0));
  vec3 N = gl_FrontFacing ? n0 : -n0;
  float vShadowC = clamp(vShadow, 0.0, 1.0);
  float sunVis = vShadowC * shadowVisibility(vShadowCoord, N);
  vec4 vFogC = clamp(vFog, 0.0, 8.0); vFogC.a = min(vFogC.a, 1.0);
  vec3 col; float a = 1.0;
  if (vPart < 0.5) {               // \u830E
    col = shadePlant(vec3(0.13, 0.24, 0.05), N, V, 0.85, 0.8, sunVis, 0.85, 0.08);
  } else if (vPart < 1.5 || (vPart > 4.5 && vPart < 5.5)) {        // \u82B1\u74E3\uFF08\u5916\u74E3 / \u5185\u74E3\uFF09
    float inner = vInner;
    vec4 tx = texture2D(uPetal, vPetalUv);
    a = tx.a;
    if (uA2C > 0.5) { a = clamp((a - 0.5) / max(fwidth(a), 1e-4) + 0.5, 0.0, 1.0); if (a < 0.02) discard; }
    else { if (a < 0.5) discard; a = 1.0; }
    float thick = clamp(tx.b, 0.0, 1.0);
    float thin = 1.0 - thick;
    vec3 alb = mix(vBase, vMid, smoothstep(0.0, 0.32, vUv.y));
    alb = mix(alb, vTip, smoothstep(0.35, 1.0, vUv.y));
    alb *= mix(0.5, 1.0, tx.r);                             // \u7EB5\u5411\u6C9F\u7EB9
    alb *= mix(0.7, 1.0, smoothstep(0.3, 0.8, tx.g));       // \u8FB9\u7F18\u7565\u6DF1\uFF0C\u5355\u7247\u82B1\u74E3\u8F6E\u5ED3\u66F4\u6E05\u695A
    alb *= 0.88 + 0.24 * hash11(vPetalId);                   // \u6BCF\u7247\u82B1\u74E3\u660E\u6697\u7565\u6709\u5DEE\u5F02
    alb *= vTint * mix(1.0, 0.82, inner);                    // \u6BCF\u6735\u82B1\u8272\u6E29/\u660E\u5EA6\u8F7B\u5FAE\u4E0D\u540C\uFF1B\u5185\u74E3\u7565\u6697
    float back = gl_FrontFacing ? mix(1.0, 0.86, inner) : 0.82;
    float near = 1.0 - vFogC.a;
    vec3 L = uLightDir;
    float diff = max(dot(N, L) * 0.5 + 0.5, 0.0);
    float layer = mod(floor(vPetalId + 0.5), 2.0) < 0.5 ? 0.72 : 1.0;
    float veinT = 0.25 + 0.75 * tx.r * tx.r;
    float edgeT = mix(1.25, 1.0, smoothstep(0.3, 0.8, tx.g));
    float trans = pow(max(dot(-V, L), 0.0), 3.0) * veinT * edgeT * layer * near
      * mix(0.5, 1.1, thin) * mix(1.0, 0.55, inner);
    vec3 sun = uLightColor * sunVis * (diff * 0.8 + trans * 1.1);
    vec3 amb = plantAmbient(N, mix(0.75, 1.0, layer) * mix(1.0, 0.7, inner));
    col = alb * back * (sun + amb);
    col += alb * trans * uLightColor * 0.25;                 // \u900F\u5149\u5E26\u4E00\u70B9\u82B1\u74E3\u672C\u8272
    col += uSkyAmb * alb * pow(1.0 - abs(dot(N, V)), 3.0) * 0.35;
    col += alb * plantSpecEnv(N, V, 0.35, 0.3);
  } else if (vPart < 2.5) {        // \u82B1\u5FC3\uFF1A\u5BC6\u96C6\u7684\u7BA1\u72B6\u5C0F\u82B1 + \u7A81\u51FA\u7684\u6DF1\u8272\u82B1\u836F
    vec2 q = (vUv - 0.5) * 5.0;                // \u7EA6 \xB11
    float rr = length(q);
    float cells = vnoise(vUv * 95.0), cells2 = vnoise(vUv * 160.0 + 7.0);
    vec3 alb = mix(vec3(0.42, 0.2, 0.01), vec3(0.72, 0.48, 0.03), smoothstep(0.35, 0.75, cells));
    alb = mix(alb, vec3(0.62, 0.62, 0.08), smoothstep(0.35, 0.0, rr) * 0.5);   // \u4E2D\u5FC3\u672A\u5F00\u7684\u5C0F\u82B1\u504F\u7EFF
    float anther = smoothstep(0.72, 0.9, cells2) * smoothstep(0.25, 0.6, rr);
    alb = mix(alb, vec3(0.05, 0.03, 0.01), anther);
    alb *= mix(0.6, 1.0, smoothstep(1.05, 0.7, rr));                            // \u8FB9\u7F18\u9634\u5F71
    col = shadePlant(alb, N, V, 0.85, 0.15, sunVis, 0.65, 0.22);
  } else if (vPart < 3.5) {        // \u82B1\u82DE
    int bi = int(vCi + 0.5);
    vec3 lo = bi == 0 ? vec3(0.28, 0.01, 0.06) : (bi == 1 ? vec3(0.12, 0.22, 0.05) : vec3(0.72, 0.42, 0.36));
    vec3 hi = bi == 0 ? vec3(0.62, 0.06, 0.2) : (bi == 1 ? vec3(0.5, 0.62, 0.22) : vec3(0.98, 0.85, 0.76));
    col = shadePlant(mix(lo, hi, smoothstep(0.1, 0.95, vUv.y)), N, V, 0.9, 0.25 * (1.0 - vFogC.a), sunVis, 0.8, 0.12);
  } else {                         // \u843C\u7247
    col = shadePlant(vec3(0.12, 0.25, 0.06), N, V, 0.85, 0.5, sunVis, 0.85, 0.06);
  }
  col = min(col, vec3(8.0));
  col = mix(col, vFogC.rgb, vFogC.a);
  gl_FragColor = vec4(col, a);
}`,ag=`
${be}
varying vec3 vWorld;
varying vec4 vShadowCoord;
void main() {
  vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
  vShadowCoord = uShadowMatrix * vec4(vWorld + vec3(0.0, 0.01, 0.0), 1.0);
  gl_Position = projectionMatrix * viewMatrix * vec4(vWorld, 1.0);
}`,og=`
${be}
${ss}
${Ws}
varying vec3 vWorld;
varying vec4 vShadowCoord;
void main() {
  // \u571F\u58E4/\u8349\u5730\u6DF7\u5408\uFF1A\u4F4E\u9891\u6591\u5757 + \u7EC6\u788E\u67AF\u53F6/\u571F\u7C92 + \u8349\u6839\u6697\u90E8
  float n1 = fbm3(vWorld.xz * 0.7);
  float n2 = fbm3(vWorld.xz * 0.09 + 11.0);
  float n3 = fbm3(vWorld.xz * 0.013 + 3.0);
  float fine = vnoise(vWorld.xz * 6.0), fine2 = vnoise(vWorld.xz * 23.0);
  vec3 soil = mix(vec3(0.032, 0.026, 0.016), vec3(0.105, 0.078, 0.045), n2);
  vec3 green = mix(vec3(0.030, 0.058, 0.016), vec3(0.088, 0.132, 0.042), n1);
  float bare = smoothstep(0.5, 0.8, n2 + n3 * 0.5);
  vec3 alb = mix(green, soil, bare * 0.82);
  alb += (fine2 - 0.5) * 0.018;                                            // \u571F\u7C92\u7EC6\u788E\u660E\u6697
  alb = mix(alb, vec3(0.17, 0.12, 0.05), smoothstep(0.84, 0.96, fine) * 0.14); // \u67AF\u53F6\u70B9
  alb *= mix(1.0, 0.7, uWet);
  float dens = 0.5 + 0.5 * sin(vWorld.x * 0.14 + sin(vWorld.z * 0.09) * 2.2);
  alb *= mix(0.62, 1.0, smoothstep(0.15, 0.85, dens * 0.55 + n1 * 0.45));   // \u8349\u6839\u5904\u66F4\u6697
  vec3 V = normalize(cameraPosition - vWorld);
  vec3 N = vec3(0.0, 1.0, 0.0);
  float vis = shadowVisibility(vShadowCoord, N);
  vec3 col = shadePlant(alb, N, V, 0.42, 0.0, cloudShadowAt(vWorld) * vis, 0.95, 0.0);
  vec4 f = fogAt(vWorld);
  gl_FragColor = vec4(mix(col, f.rgb, f.a), 1.0);
}`;function xl(i,t,e,n,s){return new ne({uniforms:{...i,uAtlas:{value:t.atlas},uDark:{value:Th(n)},uLight:{value:Th(s)},uA2C:{value:e?1:0},uVariants:{value:6}},vertexShader:Rh,fragmentShader:sg,side:Pe,alphaToCoverage:e})}var lg=`
uniform sampler2D uAtlas;
varying vec2 vUv;
void main() {
  if (texture2D(uAtlas, vUv).a < 0.45) discard;
  gl_FragColor = vec4(1.0);
}`,cg=`
uniform sampler2D uPetal;
varying vec2 vPetalUv;
varying float vPart;
void main() {
  bool petal = (vPart > 0.5 && vPart < 1.5) || (vPart > 4.5 && vPart < 5.5);
  if (petal && texture2D(uPetal, vPetalUv).a < 0.5) discard;
  gl_FragColor = vec4(1.0);
}`;function hg(i,t){return new ne({uniforms:{...i,uAtlas:{value:t.atlas}},vertexShader:Rh,fragmentShader:lg,side:Pe})}function Eh(i,t){return new ne({uniforms:{...i,uPetal:{value:t.petal}},vertexShader:Ph,fragmentShader:cg,side:Pe})}function ls(i,t,e,n,s=0){let r;do r=t+(e-t)*i();while(s>0&&i()>Math.min(1,r/s));let a=Math.atan(.5/Math.max(r,.05)),o=(i()*2-1)*(n+.1+a);return{r,th:o,x:Math.sin(o)*r,z:-Math.cos(o)*r}}var ug=[{col:3,sx:.805,sy:.585,R:.072,d:1,turn:-.35,up:.55,spin:.7},{col:2,sx:.7,sy:.5,R:.098,d:.86,turn:.15,up:.35,spin:.2},{col:1,sx:.585,sy:.655,R:.055,d:1.12,turn:.25,up:.45,spin:1.3}],dg=[{type:0,sx:.758,sy:.455,R:.026,d:.95},{type:1,sx:.645,sy:.735,R:.02,d:1.05},{type:2,sx:.862,sy:.705,R:.022,d:1}];function Ah(i,t,e,n){let s=new O(t*2-1,1-e*2,.5).unproject(i).sub(i.position).normalize(),r=n/Math.max(.05,-s.z);return{p:i.position.clone().addScaledVector(s,r),dist:r}}function Ih({U:i,tex:t,cfg:e,q:n,rng:s,camera:r,aspect:a}){let o=new Ye,c=n.samples>0,l=Math.atan(Math.tan(gn.degToRad(r.fov/2))*a),u=Math.tan(gn.degToRad(r.fov/2)),p=[],h=[];if(e.heroes){for(let nt of ug){let{p:st,dist:A}=Ah(r,nt.sx,nt.sy,nt.d),At=nt.R*2*u*A*e.heroSize,vt=r.position.clone().sub(st).setY(0).normalize(),E=new O(-vt.z,0,vt.x),v=vt.clone().addScaledVector(E,nt.turn).add(new O(0,nt.up,0)).normalize();p.push({base:new O(st.x-.015,0,st.z+.02),h:st.y,facing:v,R:At,col:nt.col,spin:nt.spin}),h.push({sx:nt.sx,sy:nt.sy,r:nt.R*e.heroSize*1.6,d:nt.d})}for(let nt of dg){let{p:st,dist:A}=Ah(r,nt.sx,nt.sy,nt.d);p.push({bud:!0,base:new O(st.x,0,st.z+.01),h:st.y,facing:new O(.1,1,.25).normalize(),R:nt.R*2*u*A*e.heroSize,type:nt.type})}}let d=new O,g=(nt,st,A,At)=>{for(let vt of h){if(At>vt.d+.05)continue;d.set(nt,st,A).project(r);let E=d.x*.5+.5,v=.5-d.y*.5;if(Math.abs(E-vt.sx)*a<vt.r+.1&&v<vt.sy+vt.r*.8)return!0}return!1},y=Math.round(n.grass*Math.max(.2,e.grassDensity)),m=new Float32Array(y*3),f=new Float32Array(y*4),b=new Float32Array(y*2),C=0,S=0,M={pos:[],d:[],d2:[]},w=(nt,st)=>{let A=Math.sin(nt*.13+Math.sin(st*.075)*2.2)*.5+.5,At=Math.sin(st*.19-nt*.055+1.7)*.5+.5,vt=Math.sin((nt+st)*.045+Math.cos(nt*.021)*3)*.5+.5;return Math.min(1,.22+.78*(A*.45+At*.3+vt*.25))},R=Math.max(220,Math.round(y/130)),x=[];for(let nt=0;nt<R*2.2&&x.length<R;nt++){let st=ls(s,.65,210,l,14),A=w(st.x,st.z);s()>A||x.push({x:st.x,z:st.z,r:.35+s()*1.15,hMul:.78+s()*.5,tint:.18+A*.55+s()*.25,phase:s()*Math.PI*2})}let T=0;for(let nt=0;nt<y*1.2&&T<y;nt++){let st,A,At,vt=x.length&&s()>.06?x[s()*x.length|0]:null;if(vt){let at=s()*Math.PI*2,Q=Math.sqrt(s())*vt.r;st=vt.x+Math.cos(at)*Q,A=vt.z+Math.sin(at)*Q,At=Math.hypot(st,A);let tt=Math.atan2(st,-A);if(At<.45||Math.abs(tt)>l+.2)continue}else{let at=ls(s,.75,230,l,14);st=at.x,A=at.z,At=at.r}let E=(.5+s()*.45)*(vt?vt.hMul:1);At<2&&(E=Math.min(E,.5+.15*At));for(let at=0;at<4&&g(st,E,A,At);at++)E*=.72;if(g(st,E,A,At))continue;let v=E*(.72+s()*.4),B=s()*Math.PI*2,X=Math.floor(s()*6);m.set([st,0,A],T*3),f.set([v,E,B,X],T*4);let K=vt?Math.min(1,Math.max(0,vt.tint+(s()-.5)*.22)):s(),rt=vt?vt.phase+(s()-.5)*.9:s()*Math.PI*2;b.set([K,rt],T*2),At<=C&&M.pos.length<S*3&&(M.pos.push(st,0,A),M.d.push(v,E,B,X),M.d2.push(K,rt)),T++}let P=new ue(Xs(Wa(),{iPos:[m,3],iData:[f,4],iData2:[b,2]},T),xl(i,t,c,"#11240a","#4c7524"));P.frustumCulled=!1,o.add(P);let I=Math.round((n.grassNear||0)*Math.max(.2,e.grassDensity)),z=0;if(I>0){let nt=new Float32Array(I*3),st=new Float32Array(I*4),A=new Float32Array(I*2),At=0;for(let E=0;E<I*1.5&&At<I;E++){let v=ls(s,.5,6,l,0),B=.36+s()*.34;g(v.x,B,v.z,v.r)||(nt.set([v.x,0,v.z],At*3),st.set([B*(.72+s()*.34),B,s()*Math.PI*2,Math.floor(s()*6)],At*4),A.set([s(),s()*Math.PI*2],At*2),At++)}let vt=new ue(Xs(Wa(7),{iPos:[nt,3],iData:[st,4],iData2:[A,2]},At),xl(i,t,c,"#0f2108","#57862a"));vt.frustumCulled=!1,o.add(vt),z=At}let k=["white","pink","magenta","crimson"].map(nt=>Math.max(0,+e.colorWeights[nt]||0)),N=k.reduce((nt,st)=>nt+st,0),L=()=>{if(N<=0)return 0;let nt=s()*N;for(let st=0;st<4;st++)if((nt-=k[st])<=0&&k[st]>0)return st;return k.findLastIndex(st=>st>0)},F=Math.round(9500*e.flowerDensity*n.flowers),q=Math.round(F*.35),J={pos:[],head:[],data:[],sway:[]},V={pos:[],head:[],data:[],sway:[]},W={pos:[],head:[],data:[],sway:[]},Z={pos:[],head:[],data:[],sway:[]},_t=12,wt=1200,Kt=12,Ot=600,Xt=(nt,st)=>{let A=nt.sway.length-1;A<0||(st.pos.push(...nt.pos.slice(A*3,A*3+3)),st.head.push(...nt.head.slice(A*4,A*4+4)),st.data.push(...nt.data.slice(A*4,A*4+4)),st.sway.push(nt.sway[A]))},$=(nt,st,A,At,vt)=>{nt.pos.push(...st),nt.head.push(...A),nt.data.push(...At),nt.sway.push(vt)},et=(nt,st,A)=>{let At=new O(-nt,0,-st).normalize(),vt=new O(-At.z,0,At.x);return At.multiplyScalar(.15+s()*.75).addScaledVector(vt,(s()-.5)*1.1).add(new O(0,A,0)).normalize()};for(let nt=0;nt<F*1.3&&J.sway.length<F;nt++){let A=s()<.003?ls(s,.5,1,l):ls(s,2,170,l,12),At=.6+s()*.38;if(g(A.x,At,A.z,A.r))continue;let vt=(.03+s()*.016)*e.flowerSize;A.r>35&&(vt*=1+(A.r-35)/60),$(J,[A.x,0,A.z],[...et(A.x,A.z,1.2+s()*1.8).toArray(),vt],[At,L(),s()*6.283,s()*6.283],1),A.r<=_t&&W.pos.length<wt*3&&Xt(J,W)}for(let nt=0;nt<q;nt++){let st=ls(s,2,90,l,18),A=.55+s()*.38;if(g(st.x,A,st.z,st.r))continue;let At=(.012+s()*.008)*e.flowerSize*(st.r>35?1+(st.r-35)/60:1);$(V,[st.x,0,st.z],[...et(st.x,st.z,1.6).toArray(),At],[A,s()<.45?0:s()<.8?1:2,s()*6.283,s()*6.283],1),st.r<=Kt&&Z.pos.length<Ot*3&&Xt(V,Z)}for(let nt of p)nt.bud?($(V,nt.base.toArray(),[...nt.facing.toArray(),nt.R],[nt.h,nt.type,s()*6.283,0],.22),Xt(V,Z)):($(J,nt.base.toArray(),[...nt.facing.toArray(),nt.R],[nt.h,nt.col,s()*6.283,nt.spin],.22),Xt(J,W));let yt=new ne({uniforms:{...i,uPetal:{value:t.petal},uA2C:{value:c?1:0}},vertexShader:Ph,fragmentShader:rg,side:Pe,alphaToCoverage:c}),Nt=ng(),gt=ig();for(let[nt,st]of[[J,Nt],[V,gt]]){let A=nt.sway.length;if(!A)continue;let At=new ue(Xs(st,{iPos:[new Float32Array(nt.pos),3],iHead:[new Float32Array(nt.head),4],iData:[new Float32Array(nt.data),4],iSway:[new Float32Array(nt.sway),1]},A),yt);At.frustumCulled=!1,o.add(At)}let Bt=new ue(new pi(9e3,9e3).rotateX(-Math.PI/2),new ne({uniforms:{...i},vertexShader:ag,fragmentShader:og}));Bt.frustumCulled=!1,o.add(Bt);let de=n.treeline,kt=new Float32Array(de*3),$t=new Float32Array(de*4),ee=new Float32Array(de*2);for(let nt=0;nt<de;nt++){let st=(s()*2-1)*(l+.25),A=260+s()*260,At=Math.pow(Math.sin(st*9+1.3)*.5+.5,1.5)*.7+Math.pow(Math.sin(st*23)*.5+.5,3)*.5,vt=3+s()*5+At*14;kt.set([Math.sin(st)*A,-.5,-Math.cos(st)*A],nt*3),$t.set([vt*(1+s()*.6),vt,s()*6.283,Math.floor(s()*6)],nt*4),ee.set([s()*.5,s()*6.283],nt*2)}let Wt=new ue(Xs(Wa(),{iPos:[kt,3],iData:[$t,4],iData2:[ee,2]},de),xl(i,t,c,"#0f1c0c","#33482a"));Wt.frustumCulled=!1,o.add(Wt);let re=[],ye=(nt,st,A,At)=>{if(!A)return;let vt=new ue(Xs(nt,st,A),At);vt.frustumCulled=!1,re.push(vt)};ye(Wa(),{iPos:[new Float32Array(M.pos),3],iData:[new Float32Array(M.d),4],iData2:[new Float32Array(M.d2),2]},M.pos.length/3,hg(i,t));let Ie=nt=>({iPos:[new Float32Array(nt.pos),3],iHead:[new Float32Array(nt.head),4],iData:[new Float32Array(nt.data),4],iSway:[new Float32Array(nt.sway),1]});return ye(Nt,Ie(W),W.sway.length,Eh(i,t)),ye(gt,Ie(Z),Z.sway.length,Eh(i,t)),{group:o,shadowCasters:re,counts:{grass:T,grassNear:z,flowers:J.sway.length,buds:V.sway.length}}}var fg=`
varying vec3 vWorld;
void main() {
  vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
  gl_Position = projectionMatrix * viewMatrix * vec4(vWorld, 1.0);
  gl_Position.z = gl_Position.w * 0.99999;
}`,pg=`
${be}
uniform vec3 uSunDisc, uCloudLit, uCloudDark, uMoonDir;
uniform float uSunVis, uStars, uMoon, uTwinkle;
varying vec3 vWorld;
void main() {
  vec3 v = normalize(vWorld - cameraPosition);
  float h = max(v.y, 0.0);
  float mu = dot(v, uSunDir);
  vec3 col = mix(uHorizon, uZenith, pow(h, 0.36));
  col += uGlowColor * (0.22 * pow(max(mu, 0.0), 14.0) + 0.9 * pow(max(mu, 0.0), 90.0)) * (1.0 - 0.6 * h);

  // \u661F\u7A7A\uFF1A\u6309\u65B9\u5411\u5212\u683C\u5B50\uFF0C\u6BCF\u683C\u6700\u591A\u4E00\u9897\u661F\uFF0C\u4EAE\u5EA6\u4EE5\u6574\u6570\u9891\u7387\u95EA\u70C1
  if (uStars > 0.01 && v.y > 0.0) {
    vec2 sp = vec2(atan(v.z, v.x), asin(v.y)) * 160.0;
    vec2 cell = floor(sp), f = fract(sp) - 0.5;
    float hs = hash12(cell);
    if (hs > 0.985) {
      vec2 o = vec2(hash12(cell + 3.1), hash12(cell + 7.7)) - 0.5;
      float d = length(f - o * 0.6);
      float tw = 0.65 + 0.35 * sin(uTwinkle * uPhase + hs * 400.0);
      col += vec3(0.85, 0.9, 1.0) * smoothstep(0.12, 0.0, d) * pow((hs - 0.985) / 0.015, 2.0) * 3.0 * tw * uStars * smoothstep(0.0, 0.2, v.y);
    }
  }
  // \u6708\u4EAE
  float md = dot(v, uMoonDir);
  float moonDisc = smoothstep(0.99994, 0.99997, md);
  col += vec3(0.9, 0.93, 1.0) * (moonDisc * 6.0 * (0.85 + 0.15 * vnoise(v.xy * 3000.0)) + pow(max(md, 0.0), 300.0) * 0.25) * uMoon;
  // \u592A\u9633\uFF08\u88AB\u4E91\u906E\u6321\uFF09
  float sunDisc = smoothstep(0.99996, 0.99999, mu);

  float dens = 0.0;
  if (v.y > 0.003) {
    vec2 pw = cameraPosition.xz + v.xz * (CLOUD_H / v.y);
    dens = cloudDensity(pw) * smoothstep(0.003, 0.09, v.y);
    float thin = 1.0 - dens;
    vec3 cc = mix(uCloudDark, uCloudLit, 0.45 + 0.55 * thin);
    // \u4E91\u7684\u53D7\u5149\u8FB9\uFF08\u94F6\u8FB9\uFF09\u4E0E\u5E95\u90E8\u6697\u90E8\uFF0C\u589E\u52A0\u4F53\u79EF\u611F
    cc += uGlowColor * pow(max(mu, 0.0), 4.0) * dens * 0.5;
    cc *= mix(1.0, 0.86, smoothstep(0.35, 0.95, dens));
    cc += uGlowColor * pow(max(mu, 0.0), 5.0) * (0.25 + 0.9 * thin * dens * 4.0) * 0.6;
    col = mix(col, cc, dens * 0.92);
  }
  // \u9AD8\u5C42\u5377\u4E91\uFF1A\u66F4\u7A00\u758F\u3001\u66F4\u9AD8\u3001\u53D7\u843D\u65E5\u67D3\u8272\uFF0C\u7ED9\u5929\u7A7A\u7B2C\u4E8C\u5C42\u7A7A\u95F4\u5C42\u6B21
  if (v.y > 0.02) {
    vec2 cw = cameraPosition.xz + v.xz * (CLOUD_H * 2.8 / v.y);
    float c = fbm(cw / 4600.0 - uCloudDrift * (uTime * 1.7) / 4600.0 + 13.7);
    float cir = smoothstep(0.60, 0.88, c) * smoothstep(0.02, 0.16, v.y) * (0.35 + 0.65 * uCloudCover);
    vec3 ccol = mix(uCloudDark, uCloudLit, 0.7) * 1.2;
    ccol = mix(ccol, uGlowColor, pow(max(mu, 0.0), 3.0) * 0.25);
    col = mix(col, ccol, cir * 0.4);
  }
  col += uSunDisc * sunDisc * uSunVis * (1.0 - dens * 0.97);
  // \u5730\u5E73\u7EBF\u6696\u972D\uFF1A\u628A\u5929\u7A7A\u4E0B\u6CBF\u538B\u6696\uFF0C\u4E0E\u96FE\u8272/\u82B1\u7530\u7A7A\u6C14\u900F\u89C6\u8854\u63A5
  float horiz = smoothstep(0.28, 0.0, v.y);
  col = mix(col, fogColorDir(v), horiz * 0.25);
  col += uGlowColor * horiz * (0.06 + 0.3 * pow(max(mu, 0.0), 5.0)) * 0.4;
  // \u5730\u5E73\u7EBF\u5904\u4E0E\u96FE\u8272\u4E25\u683C\u4E00\u81F4\uFF0C\u57CE\u5E02\u3001\u82B1\u7530\u7684\u96FE\u624D\u80FD\u65E0\u7F1D\u878D\u5165\u5929\u7A7A
  col = mix(fogColorDir(v), col, smoothstep(0.0, 0.1, v.y));
  gl_FragColor = vec4(col, 1.0);
}`;function Dh(i){let t=new ne({uniforms:{...i,uTwinkle:{value:7}},vertexShader:fg,fragmentShader:pg,side:De,depthWrite:!1}),e=new ue(new Cs(5e3,48,24),t);return e.frustumCulled=!1,e.renderOrder=-10,{mesh:e,mat:t}}var mg=`
${be}
attribute vec3 iPos; attribute vec4 iSize; // \u5BBD, \u9AD8, \u6DF1, \u79CD\u5B50
attribute float iType;                    // 0 \u7ACB\u9762 | 1 \u5C4B\u9876\u8BBE\u5907 | 2 \u5929\u7EBF
varying vec3 vLocal, vN, vWorld; varying float vSeed, vType; varying vec4 vFog;
void main() {
  vec3 lp = position * iSize.xyz;
  vWorld = iPos + lp;
  vLocal = lp; vN = normal; vSeed = iSize.w; vType = iType;
  vFog = fogAt(vWorld);
  gl_Position = projectionMatrix * viewMatrix * vec4(vWorld, 1.0);
}`,gg=`
${be}
uniform float uCityLights;
varying vec3 vLocal, vN, vWorld; varying float vSeed, vType; varying vec4 vFog;
void main() {
  vec3 N = normalize(vN);
  float tone = hash11(vSeed * 13.7);
  float warm = hash11(vSeed * 7.31 + 0.7);
  vec3 alb = mix(vec3(0.24, 0.26, 0.29), vec3(0.46, 0.45, 0.42), tone);   // \u51B7\u7070\u73BB\u7483 / \u6696\u77F3\u6750
  alb = mix(alb, vec3(0.34, 0.33, 0.30), warm * 0.5);
  vec3 emis = vec3(0.0);
  float win = 0.0;
  if (vType > 1.5) {
    alb = vec3(0.10, 0.10, 0.11);                                          // \u5929\u7EBF/\u6845\u6746
  } else if (vType > 0.5) {
    alb = mix(vec3(0.16, 0.16, 0.17), vec3(0.28, 0.27, 0.25), tone);       // \u5C4B\u9876\u8BBE\u5907
  } else if (abs(N.y) < 0.5) {
    float faceX = step(0.5, abs(N.x));
    float hc = mix(vLocal.x, vLocal.z, faceX);
    float colW = 2.6 + tone * 2.2;
    vec2 g = vec2(hc / colW, vLocal.y / 3.4);
    vec2 cell = floor(g), f = fract(g);
    vec2 aa = fwidth(g) * 1.2;
    // \u7A97\u6D1E\uFF1A\u5E26\u7A97\u6846\u4E0E\u7AD6\u6883
    float wx = smoothstep(0.16 - aa.x, 0.16 + aa.x, f.x) * smoothstep(0.84 + aa.x, 0.84 - aa.x, f.x);
    float wy = smoothstep(0.26 - aa.y, 0.26 + aa.y, f.y) * smoothstep(0.80 + aa.y, 0.80 - aa.y, f.y);
    win = wx * wy * step(1.0, cell.y);
    vec3 glass = mix(vec3(0.10, 0.14, 0.18), uZenith * 0.55 + 0.10, 0.35 + 0.3 * hash12(cell + vSeed));
    glass = mix(glass, uSkyAmb, 0.25);
    alb = mix(alb, glass, win * 0.8);
    alb *= mix(1.0, 0.86, smoothstep(0.40, 0.5, abs(f.x - 0.5)));          // \u7AD6\u6883
    alb *= mix(0.88, 1.0, smoothstep(0.0, 0.35, f.y));                     // \u697C\u5C42\u5E26\u9634\u5F71
    // \u591C\u95F4\u7A97\u5149\uFF1A\u4EAE\u706F\u6BD4\u4F8B\u968F\u697C\u680B/\u671D\u5411\u53D8\u5316
    float lit = hash12(cell + vSeed * 17.0 + N.xz * 31.0 + faceX * 5.0);
    float on = step(1.0 - (0.14 + 0.22 * tone), lit) * win;
    vec3 wc = mix(vec3(1.0, 0.62, 0.28), vec3(1.0, 0.86, 0.62), hash12(cell * 1.7 + vSeed));
    emis = wc * on * (0.5 + 0.5 * hash12(cell + 9.1)) * 0.95 * uCityLights;
  } else {
    alb *= 0.75;                                                           // \u9876\u9762
  }
  float ndl = max(dot(N, uLightDir), 0.0);
  vec3 amb = mix(uGroundAmb, uSkyAmb, N.y * 0.5 + 0.5);
  alb *= mix(0.75, 1.0, smoothstep(-0.1, 0.9, N.y * 0.5 + 0.5));           // \u5782\u76F4 AO\uFF1A\u5E95\u90E8\u66F4\u6697
  vec3 col = alb * (uLightColor * ndl * 0.95 + amb);
  col = mix(col, vFog.rgb, vFog.a) + emis * (1.0 - vFog.a * 0.85);
  gl_FragColor = vec4(col, 1.0);
}`;function Lh(i,t,e){let n=[],s=d=>Math.pow(.5+.5*Math.sin(d*7+.6),2)*.6+Math.pow(.5+.5*Math.sin(d*17+2),3)*.5,r=(d,g,y,m,f)=>{let b=Math.sin(d)*g,C=-Math.cos(d)*g,S=t()<.45?3:2,M=S===3?[.55,.28,.17]:[.72,.28],w=0,R=m,x=f,T=t()*1e3;for(let P=0;P<S;P++){let I=y*M[P]*(.85+t()*.3);n.push([b,w,C,R,I,x,T,0]),w+=I,R*=.62+t()*.2,x*=.62+t()*.2}n.push([b,w,C,R*(.35+t()*.3),1.5+t()*3.5,x*(.35+t()*.3),t()*1e3,1]),t()<.45&&n.push([b,w+2,C,.9,4+t()*10,.9,t()*1e3,2])};for(let d=0;d<230;d++){let g=(t()*2-1)*(e+.12),y=1500+t()*1100,m=30+Math.pow(t(),1.8)*120*(.3+s(g))+(t()<.05?80:0);r(g,y,m,22+t()*38,22+t()*38)}for(let d=0;d<180;d++){let g=(t()*2-1)*(e+.1),y=1150+t()*350;r(g,y,10+t()*22,25+t()*45,25+t()*45)}for(let d=0;d<90;d++){let g=(t()*2-1)*(e+.08),y=900+t()*250;r(g,y,6+t()*12,30+t()*40,30+t()*40)}let a=n.length,o=new Float32Array(a*3),c=new Float32Array(a*4),l=new Float32Array(a);n.forEach((d,g)=>{o.set(d.slice(0,3),g*3),c.set(d.slice(3,7),g*4),l[g]=d[7]});let u=new $n(1,1,1).translate(0,.5,0),p=new On;p.index=u.index;for(let d of["position","normal"])p.setAttribute(d,u.attributes[d]);p.setAttribute("iPos",new dn(o,3)),p.setAttribute("iSize",new dn(c,4)),p.setAttribute("iType",new dn(l,1)),p.instanceCount=a;let h=new ue(p,new ne({uniforms:{...i},vertexShader:mg,fragmentShader:gg}));return h.frustumCulled=!1,h}function vg(){let i=new Ee;return i.setAttribute("position",new se([-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),i.setAttribute("uv",new se([0,0,1,0,1,1,0,1],2)),i.setIndex([0,1,2,0,2,3]),i}function Xa(i,t,e){let n=new On;n.index=i.index;for(let s of Object.keys(i.attributes))n.setAttribute(s,i.attributes[s]);for(let[s,[r,a]]of Object.entries(t))n.setAttribute(s,new dn(r,a));return n.instanceCount=e,n}function qa(i,t){let e=new ue(i,t);return e.frustumCulled=!1,e}var xg=`
${be}
uniform float uRainCyc;
attribute vec3 iSeed;
varying float vA, vViewZ; varying vec2 vUv;
void main() {
  const float BOX = 8.0;
  vec3 p = vec3(mix(-7.0, 7.0, iSeed.x), BOX * fract(iSeed.y - uRainCyc * uLoop), mix(-0.4, -22.0, iSeed.z * iSeed.z));
  vec3 dir = normalize(vec3(0.16, -1.0, 0.03));
  p.x -= p.y * 0.16;
  vec4 a = viewMatrix * vec4(p, 1.0), b = viewMatrix * vec4(p - dir * 0.38, 1.0);
  vec2 along = b.xy - a.xy;
  vec2 perp = normalize(vec2(along.y, -along.x) + 1e-5);   // \u4FDD\u6301\u9006\u65F6\u9488\u7ED5\u5E8F\uFF0C\u907F\u514D\u88AB\u80CC\u9762\u5254\u9664
  vec4 v = mix(a, b, position.y * 0.5 + 0.5);
  v.xy += perp * position.x * 0.0022;
  vA = (1.0 - smoothstep(6.0, 22.0, -a.z)) * smoothstep(1.2, 3.0, -a.z);
  vViewZ = -v.z;
  vUv = uv;
  gl_Position = projectionMatrix * v;
}`,_g=`
${be}
uniform float uRain, uNear, uFar;
uniform sampler2D tDepth; uniform vec2 uRes;
varying float vA, vViewZ; varying vec2 vUv;
void main() {
  // \u96E8\u5728\u666F\u6DF1\u4E4B\u540E\u7ED8\u5236\uFF0C\u8FD9\u91CC\u7528\u573A\u666F\u6DF1\u5EA6\u56FE\u624B\u52A8\u505A\u906E\u6321
  float d = texture2D(tDepth, gl_FragCoord.xy / uRes).r;
  float sceneZ = uNear * uFar / (uFar - d * (uFar - uNear));
  if (vViewZ > sceneZ) discard;
  float e = 1.0 - abs(vUv.x * 2.0 - 1.0);
  float a = e * vA * uRain * 0.45;
  gl_FragColor = vec4((uSkyAmb * 2.6 + vec3(0.08)) * a, a);
}`,yg=`
${be}
attribute vec3 iBase; attribute vec3 iAmp; attribute vec4 iCyc; attribute vec4 iPh; attribute vec2 iSize; // size, drift
uniform vec2 uSpanX;
varying vec2 vUv; varying float vBlink, vDepth;
void main() {
  vec3 p = iBase + iAmp * vec3(sin(iCyc.x * uPhase + iPh.x), sin(iCyc.y * uPhase + iPh.y), sin(iCyc.z * uPhase + iPh.z));
  if (iSize.y > 0.5) p.x = uSpanX.x + (uSpanX.y - uSpanX.x) * fract((iBase.x - uSpanX.x) / (uSpanX.y - uSpanX.x) + iSize.y * uLoop) + iAmp.x * sin(iCyc.x * uPhase + iPh.x);
  vec4 mv = viewMatrix * vec4(p, 1.0);
  mv.xy += position.xy * iSize.x;
  vBlink = 0.5 + 0.5 * sin(iCyc.w * uPhase + iPh.w);
  vDepth = -mv.z;
  vUv = uv;
  gl_Position = projectionMatrix * mv;
}`,Sg=`
${be}
uniform float uVis, uKind;
varying vec2 vUv; varying float vBlink, vDepth;
void main() {
  float r = length(vUv * 2.0 - 1.0);
  float a = exp(-r * r * 6.0) * smoothstep(1.0, 0.7, r);
  vec3 c;
  if (uKind < 0.5) { // \u82B1\u7C89\uFF1A\u88AB\u9633\u5149\u7167\u4EAE\uFF0C\u9006\u5149\u66F4\u4EAE
    float back = pow(max(dot(normalize(vec3(0.0, 0.0, -1.0)), uLightDir), 0.0), 3.0);
    c = (uLightColor * (0.08 + 0.35 * back) + uSkyAmb * 0.25) * (0.35 + 0.65 * vBlink);
  } else {           // \u8424\u706B\u866B\uFF1A\u95EA\u70C1\u7684\u9EC4\u7EFF\u51B7\u5149
    c = vec3(0.75, 1.0, 0.25) * 9.0 * pow(vBlink, 3.0);
  }
  a *= uVis * smoothstep(0.15, 0.6, vDepth);
  gl_FragColor = vec4(c * a, a);
}`,Mg=`
${be}
uniform vec3 uPalMid[4], uPalTip[4];
uniform vec2 uSpanX;
attribute vec3 iBase; attribute vec4 iCyc; attribute vec4 iPh; attribute vec2 iInfo; // size, color
varying vec2 vUv; varying vec3 vCol, vN, vWorld;
void main() {
  vec3 p = iBase;
  p.x = uSpanX.x + (uSpanX.y - uSpanX.x) * fract((iBase.x - uSpanX.x) / (uSpanX.y - uSpanX.x) + iCyc.x * uLoop);
  p.y += 0.25 * sin(iCyc.y * uPhase + iPh.y) + 0.1 * sin(iCyc.z * uPhase * 2.0 + iPh.z);
  float a1 = iCyc.z * uPhase + iPh.x, a2 = iCyc.w * uPhase + iPh.w;
  mat3 r1 = mat3(cos(a1), sin(a1), 0.0, -sin(a1), cos(a1), 0.0, 0.0, 0.0, 1.0);
  mat3 r2 = mat3(1.0, 0.0, 0.0, 0.0, cos(a2), sin(a2), 0.0, -sin(a2), cos(a2));
  vec3 lp = r2 * r1 * vec3(position.x * 0.55, position.y, position.y * position.y * 0.25) * iInfo.x;
  vN = r2 * r1 * vec3(0.0, 0.0, 1.0);
  vWorld = p + lp;
  int ci = int(iInfo.y + 0.5);
  vCol = mix(uPalMid[ci], uPalTip[ci], 0.5);
  vUv = uv * 0.5;   // \u82B1\u74E3\u56FE\u96C6 2\xD72\uFF1A\u98D8\u843D\u82B1\u74E3\u56FA\u5B9A\u4F7F\u7528\u7B2C 0 \u4E2A\u53D8\u4F53
  gl_Position = projectionMatrix * viewMatrix * vec4(vWorld, 1.0);
}`,bg=`
${be}
uniform sampler2D uPetal; uniform float uA2C;
varying vec2 vUv; varying vec3 vCol, vN, vWorld;
void main() {
  float a = texture2D(uPetal, vUv).a;
  if (uA2C > 0.5) { a = clamp((a - 0.5) / max(fwidth(a), 1e-4) + 0.5, 0.0, 1.0); if (a < 0.02) discard; }
  else { if (a < 0.5) discard; a = 1.0; }
  vec3 N = gl_FrontFacing ? vN : -vN;
  vec3 V = normalize(cameraPosition - vWorld);
  float diff = abs(dot(N, uLightDir)) * 0.6 + 0.4;
  float back = pow(max(dot(-V, uLightDir), 0.0), 3.0);
  vec3 col = vCol * (uLightColor * (diff + back * 1.2) + uSkyAmb);
  vec4 f = fogAt(vWorld);
  gl_FragColor = vec4(mix(col, f.rgb, f.a), a);
}`;function wg(){let i=new Ee,t=[],e=[],n=[],s=[],r=(a,o,c)=>{let l=t.length/3;a.forEach((u,p)=>{t.push(...u),e.push(...o[p]),n.push(c)}),s.push(l,l+1,l+2,l,l+2,l+3)};return r([[0,0,-.5],[1,0,-.5],[1,0,.5],[0,0,.5]],[[0,1],[1,1],[1,0],[0,0]],1),r([[0,0,-.5],[-1,0,-.5],[-1,0,.5],[0,0,.5]],[[0,1],[1,1],[1,0],[0,0]],-1),r([[-.05,.01,-.45],[.05,.01,-.45],[.05,.01,.4],[-.05,.01,.4]],[[0,0],[0,0],[0,0],[0,0]],0),i.setAttribute("position",new se(t,3)),i.setAttribute("uv",new se(e,2)),i.setAttribute("aSide",new se(n,1)),i.setIndex(s),i}var Tg=`
${be}
uniform float uVis;
attribute float aSide;
attribute vec3 iBase; attribute vec3 iAmp; attribute vec4 iCyc; attribute vec4 iPh; // cyc: x, y, z, \u6247\u7FC5
attribute float iSize;
varying vec2 vUv; varying float vSide; varying vec3 vN, vWorld;
void main() {
  float px = iCyc.x * uPhase + iPh.x, py = iCyc.y * uPhase + iPh.y, pz = iCyc.z * uPhase + iPh.z;
  vec3 c = iBase + iAmp * vec3(sin(px) + 0.3 * sin(3.0 * px), sin(py), sin(pz));
  vec3 vel = iAmp * vec3(iCyc.x * (cos(px) + 0.9 * cos(3.0 * px)), 0.0, iCyc.z * cos(pz));
  float yaw = atan(vel.x, vel.z);
  float flap = sin(iCyc.w * uPhase + iPh.w);
  float ang = (0.15 + 1.05 * (0.5 + 0.5 * flap)) * aSide;
  c.y += 0.012 * flap;
  vec3 lp = position;
  if (abs(aSide) > 0.5) lp = vec3(cos(ang) * position.x, abs(sin(ang) * position.x), position.z);
  lp *= iSize * uVis;
  float cy = cos(yaw), sy = sin(yaw);
  lp = vec3(cy * lp.x + sy * lp.z, lp.y, -sy * lp.x + cy * lp.z);
  vWorld = c + lp;
  vN = normalize(vec3(-sin(ang) * aSide * cy, cos(ang), sy * sin(ang) * aSide));
  vUv = uv; vSide = aSide;
  gl_Position = projectionMatrix * viewMatrix * vec4(vWorld, 1.0);
}`,Eg=`
${be}
uniform sampler2D uWing; uniform float uA2C;
varying vec2 vUv; varying float vSide; varying vec3 vN, vWorld;
void main() {
  vec4 tx = abs(vSide) > 0.5 ? texture2D(uWing, vUv) : vec4(0.05, 0.05, 0.045, 1.0);
  float a = tx.a;
  if (uA2C > 0.5) { a = clamp((a - 0.5) / max(fwidth(a), 1e-4) + 0.5, 0.0, 1.0); if (a < 0.02) discard; }
  else { if (a < 0.5) discard; a = 1.0; }
  vec3 alb = pow(tx.rgb, vec3(2.2)) * 0.9;
  vec3 N = gl_FrontFacing ? vN : -vN;
  vec3 V = normalize(cameraPosition - vWorld);
  float back = pow(max(dot(-V, uLightDir), 0.0), 3.0);
  vec3 col = alb * (uLightColor * (abs(dot(N, uLightDir)) * 0.7 + 0.3 + back) + uSkyAmb);
  vec4 f = fogAt(vWorld);
  gl_FragColor = vec4(mix(col, f.rgb, f.a), a);
}`;function Nh({U:i,tex:t,cfg:e,q:n,rng:s,cyc:r,halfH:a}){let o=new Ye,c=n.samples>0,l=vg(),u=new zt(-6,6),p={},h=7e3,d=new Float32Array(h*3);for(let M=0;M<d.length;M++)d[M]=s();p.rainCyc={value:Math.max(1,Math.round(e.period*7.5/8))};let g=qa(Xa(l,{iSeed:[d,3]},h),new ne({uniforms:{...i,uRainCyc:p.rainCyc,tDepth:{value:null},uRes:{value:new zt(1,1)},uNear:{value:.05},uFar:{value:6e3}},vertexShader:xg,fragmentShader:_g,transparent:!0,depthTest:!1,depthWrite:!1,blending:$i})),y=(M,w,R,x)=>{let T=M+(w-M)*Math.pow(s(),1.4),P=(s()*2-1)*a*.95;return[Math.sin(P)*T,R+s()*(x-R),-Math.cos(P)*T]},m=(M,w,R,x,T,P,I,z)=>{let k=new Float32Array(M*3),N=new Float32Array(M*3),L=new Float32Array(M*4),F=new Float32Array(M*4),q=new Float32Array(M*2);for(let W=0;W<M;W++)k.set(R(),W*3),N.set(x(),W*3),L.set([r(1+Math.floor(s()*2)),r(1+Math.floor(s()*3)),r(1+Math.floor(s()*2)),r(I+Math.floor(s()*(z-I)))],W*4),F.set([s()*6.28,s()*6.28,s()*6.28,s()*6.28],W*4),q.set([T(),P()],W*2);let J={value:0},V=qa(Xa(l,{iBase:[k,3],iAmp:[N,3],iCyc:[L,4],iPh:[F,4],iSize:[q,2]},M),new ne({uniforms:{...i,uVis:J,uKind:{value:w},uSpanX:{value:u}},vertexShader:yg,fragmentShader:Sg,transparent:!0,depthWrite:!1,blending:$i}));return V.renderOrder=4,o.add(V),J},f=Math.round(90*e.pollen);f>0&&(p.pollenVis=m(f,0,()=>y(.6,9,.2,1.8),()=>[.1+s()*.4,.05+s()*.2,.1+s()*.3],()=>.0025+s()*.004,()=>s()<.35?r(1):0,2,6));let b=Math.round(70*e.fireflies);b>0&&(p.fireflyVis=m(b,1,()=>y(1.2,14,.25,1.3),()=>[.2+s()*.6,.08+s()*.25,.2+s()*.5],()=>.012+s()*.01,()=>0,3,9));let C=Math.max(0,Math.round(e.petals));if(C>0){let M=["white","pink","magenta","crimson"].map(z=>Math.max(0,+e.colorWeights[z]||0)),w=M.reduce((z,k)=>z+k,0)||1,R=new Float32Array(C*3),x=new Float32Array(C*4),T=new Float32Array(C*4),P=new Float32Array(C*2);for(let z=0;z<C;z++){let k=y(.8,6,.3,1.5);k[0]=u.x+(z+s()*.5)/C*(u.y-u.x),R.set(k,z*3),x.set([r(1),r(1+Math.floor(s()*2)),r(2+Math.floor(s()*3)),r(3+Math.floor(s()*4))],z*4),T.set([s()*6.28,s()*6.28,s()*6.28,s()*6.28],z*4);let N=s()*w,L=0;for(let F=0;F<4;F++)if((N-=M[F])<=0){L=F;break}P.set([.012+s()*.008,L],z*2)}let I=qa(Xa(l,{iBase:[R,3],iCyc:[x,4],iPh:[T,4],iInfo:[P,2]},C),new ne({uniforms:{...i,uPetal:{value:t.petal},uA2C:{value:c?1:0},uSpanX:{value:u}},vertexShader:Mg,fragmentShader:bg,side:Pe,alphaToCoverage:c}));o.add(I)}let S=Math.max(0,Math.round(e.butterflies));if(S>0){let M=new Float32Array(S*3),w=new Float32Array(S*3),R=new Float32Array(S*4),x=new Float32Array(S*4),T=new Float32Array(S),P=[[-.55,.95,-2.6],[.15,1.1,-4.5]];for(let k=0;k<S;k++)M.set(P[k]||y(2,7,.75,1.3),k*3),w.set([.35+s()*.5,.08+s()*.1,.25+s()*.4],k*3),R.set([r(1),r(2+Math.floor(s()*2)),r(1+Math.floor(s()*2)),r(36+Math.floor(s()*10))],k*4),x.set([s()*6.28,s()*6.28,s()*6.28,s()*6.28],k*4),T[k]=.024+s()*.008;let I={value:0},z=qa(Xa(wg(),{iBase:[M,3],iAmp:[w,3],iCyc:[R,4],iPh:[x,4],iSize:[T,1]},S),new ne({uniforms:{...i,uVis:I,uWing:{value:t.wing},uA2C:{value:c?1:0}},vertexShader:Tg,fragmentShader:Eg,side:Pe,alphaToCoverage:c}));o.add(z),p.butterflyVis=I}return{group:o,rain:g,uniforms:p}}var Ag=`
varying vec2 vUv;
void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }`,Cg=(()=>{let i=new Ee;return i.setAttribute("position",new se([-1,-1,0,3,-1,0,-1,3,0],3)),i})(),Rg=new Fn(-1,1,1,-1,0,1),vn=class{constructor(t,e,n={}){this.mat=new ne({vertexShader:Ag,fragmentShader:t,uniforms:e,defines:n,depthTest:!1,depthWrite:!1}),this.u=this.mat.uniforms;let s=new ue(Cg,this.mat);s.frustumCulled=!1,this.scene=new wn,this.scene.add(s)}run(t,e){t.setRenderTarget(e),t.render(this.scene,Rg)}},Za=`
uniform float uNear, uFar;
float linDepth(float d) { return uNear * uFar / (uFar - d * (uFar - uNear)); }`,Pg=`
${Za}
uniform sampler2D tColor, tDepth;
uniform vec2 uTexel; uniform float uFocus, uAperture, uMaxCoc;
varying vec2 vUv;
float coc(float d) { float z = linDepth(d); return clamp(uAperture * (1.0 - uFocus / z), -uMaxCoc, uMaxCoc); }
void main() {
  vec2 o = uTexel * 0.5;
  vec3 c = (texture2D(tColor, vUv + vec2(-o.x, -o.y)).rgb + texture2D(tColor, vUv + vec2(o.x, -o.y)).rgb
          + texture2D(tColor, vUv + vec2(-o.x, o.y)).rgb + texture2D(tColor, vUv + vec2(o.x, o.y)).rgb) * 0.25;
  // \u53D6\u56DB\u4E2A\u5B50\u50CF\u7D20\u4E2D\u6700\u8FD1\u7684\u6DF1\u5EA6\uFF0C\u4FDD\u8BC1\u524D\u666F\u8FB9\u7F18\u7684\u6563\u666F\u80FD\u5916\u6269
  float d = min(min(texture2D(tDepth, vUv + vec2(-o.x, -o.y)).r, texture2D(tDepth, vUv + vec2(o.x, -o.y)).r),
                min(texture2D(tDepth, vUv + vec2(-o.x, o.y)).r, texture2D(tDepth, vUv + vec2(o.x, o.y)).r));
  gl_FragColor = vec4(min(c, vec3(60.0)), coc(d));
}`,Ig=`
uniform sampler2D tHalf; uniform vec2 uTexel; uniform float uMaxCoc;
varying vec2 vUv;
void main() {
  vec4 c0 = texture2D(tHalf, vUv);
  float coc0 = c0.a * 0.5;
  float maxR = uMaxCoc * 0.5;
  // \u5148\u63A2\u6D4B\u5468\u56F4\u524D\u666F\u7684\u6700\u5927\u5F25\u6563\u5706\uFF0C\u51B3\u5B9A\u672C\u50CF\u7D20\u5B9E\u9645\u9700\u8981\u7684\u91C7\u6837\u534A\u5F84
  float R = abs(coc0);
  for (int i = 0; i < 12; i++) {
    float th = float(i) * 0.5236;
    float rr = (i < 6 ? 0.45 : 1.0) * maxR;
    float sc = texture2D(tHalf, vUv + vec2(cos(th), sin(th)) * rr * uTexel).a * 0.5;
    if (sc < coc0 && abs(sc) > rr * 0.6) R = max(R, min(abs(sc), rr + 1.0));
  }
  R = clamp(R, 0.5, maxR);
  vec3 acc = c0.rgb; float wsum = 1.0, fg = 0.0;
  for (int i = 0; i < TAPS; i++) {
    float fi = float(i) + 0.5;
    float r = sqrt(fi / float(TAPS)) * R;
    float th = fi * 2.39996;
    vec4 s = texture2D(tHalf, vUv + vec2(cos(th), sin(th)) * r * uTexel);
    float sc = s.a * 0.5;
    float w;
    if (sc < coc0) { w = clamp(abs(sc) - r + 1.0, 0.0, 1.0); if (sc < -0.5) fg += w; }
    else w = clamp(min(abs(sc), abs(coc0)) - r + 1.0, 0.0, 1.0);
    acc += s.rgb * w; wsum += w;
  }
  gl_FragColor = vec4(acc / wsum, clamp(fg / float(TAPS) * 3.0, 0.0, 1.0));
}`,Dg=`
${Za}
uniform sampler2D tColor, tDepth, tBlur;
uniform float uFocus, uAperture, uMaxCoc;
varying vec2 vUv;
void main() {
  vec3 sharp = texture2D(tColor, vUv).rgb;
  vec4 b = texture2D(tBlur, vUv);
  float z = linDepth(texture2D(tDepth, vUv).r);
  float c = abs(clamp(uAperture * (1.0 - uFocus / z), -uMaxCoc, uMaxCoc));
  float k = max(smoothstep(0.8, 2.5, c), b.a);
  gl_FragColor = vec4(mix(sharp, b.rgb, k), 1.0);
}`,Lg=`
uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uThreshold;
varying vec2 vUv;
void main() {
  vec2 o = uTexel * 0.5;
  vec3 c = (texture2D(tSrc, vUv + vec2(-o.x, -o.y)).rgb + texture2D(tSrc, vUv + vec2(o.x, -o.y)).rgb
          + texture2D(tSrc, vUv + vec2(-o.x, o.y)).rgb + texture2D(tSrc, vUv + vec2(o.x, o.y)).rgb) * 0.25;
  c = min(c, vec3(40.0));
  float br = max(c.r, max(c.g, c.b)), knee = uThreshold * 0.5;
  float soft = clamp(br - uThreshold + knee, 0.0, 2.0 * knee);
  soft = soft * soft / (4.0 * knee + 1e-4);
  gl_FragColor = vec4(c * max(soft, br - uThreshold) / max(br, 1e-4), 1.0);
}`,Ng=`
uniform sampler2D tSrc; uniform vec2 uTexel;
varying vec2 vUv;
void main() {
  vec2 h = uTexel;
  vec3 s = texture2D(tSrc, vUv).rgb * 4.0;
  s += texture2D(tSrc, vUv - h).rgb + texture2D(tSrc, vUv + h).rgb;
  s += texture2D(tSrc, vUv + vec2(h.x, -h.y)).rgb + texture2D(tSrc, vUv - vec2(h.x, -h.y)).rgb;
  gl_FragColor = vec4(s / 8.0, 1.0);
}`,Ug=`
uniform sampler2D tSrc, tAdd; uniform vec2 uTexel;
varying vec2 vUv;
void main() {
  vec2 h = uTexel;
  vec3 s = texture2D(tSrc, vUv + vec2(-h.x * 2.0, 0.0)).rgb + texture2D(tSrc, vUv + vec2(h.x * 2.0, 0.0)).rgb
         + texture2D(tSrc, vUv + vec2(0.0, h.y * 2.0)).rgb + texture2D(tSrc, vUv + vec2(0.0, -h.y * 2.0)).rgb;
  s += (texture2D(tSrc, vUv + vec2(-h.x, h.y)).rgb + texture2D(tSrc, vUv + vec2(h.x, h.y)).rgb
      + texture2D(tSrc, vUv + vec2(h.x, -h.y)).rgb + texture2D(tSrc, vUv + vec2(-h.x, -h.y)).rgb) * 2.0;
  gl_FragColor = vec4(s / 12.0 + texture2D(tAdd, vUv).rgb, 1.0);
}`,Fg=`
uniform sampler2D tHdr, tBloom, tAO;
uniform float uBloom, uExposure, uSat, uContrast, uGrain, uSeed, uAOStrength;
uniform vec3 uTint; uniform vec2 uRes;
varying vec2 vUv;
vec3 aces(vec3 x) { return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0); }
vec3 toSRGB(vec3 c) { return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c)); }
float hash(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
void main() {
  vec3 c = texture2D(tHdr, vUv).rgb + texture2D(tBloom, vUv).rgb * uBloom;
  float ao = 1.0;
  if (uAOStrength > 0.001) ao = mix(1.0, texture2D(tAO, vUv).r, uAOStrength);
  c *= ao * uExposure;
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
  c = max(mix(vec3(l), c, uSat) * uTint, 0.0);
  c = toSRGB(aces(c * 0.9));
  // \u7535\u5F71\u611F\u6536\u5C3E\uFF08M1\uFF09\uFF1A\u53BB\u9971\u548C + \u9AD8\u5149\u6EDA\u964D\u540E\u7684\u67D4\u548C\u5BF9\u6BD4\uFF1B\u6697\u89D2/\u9897\u7C92\u6536\u655B\uFF0C\u907F\u514D\u63D2\u753B\u611F
  c = mix(vec3(dot(c, vec3(0.2126, 0.7152, 0.0722))), c, 0.94);
  c = (c - 0.5) * uContrast + 0.5;
  vec2 q = (vUv - 0.5) * vec2(uRes.x / uRes.y, 1.0);
  c *= mix(1.0, smoothstep(1.25, 0.35, length(q) * 1.15), 0.28);
  c += (hash(vUv * uRes + uSeed) - 0.5) * 0.022 * uGrain;
  c += (hash(vUv * uRes + 17.0) - 0.5) / 255.0;
  gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
}`,Og=`
${Za}
uniform sampler2D tDepth;
uniform mat4 uProjMat;
uniform float uTanHalfFov, uAspect, uRadius, uBias, uSeed;
uniform vec2 uTexel;
varying vec2 vUv;
float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
vec3 viewPos(vec2 uv) {
  float d = texture2D(tDepth, uv).r;
  float z = linDepth(d);
  vec2 ndc = uv * 2.0 - 1.0;
  return vec3(ndc.x * z * uTanHalfFov * uAspect, ndc.y * z * uTanHalfFov, -z);
}
void main() {
  float d0 = texture2D(tDepth, vUv).r;
  if (d0 > 0.9998) { gl_FragColor = vec4(1.0); return; }   // \u5929\u7A7A/\u8FDC\u80CC\u666F\u4E0D\u505A AO
  vec3 P = viewPos(vUv);
  vec3 Px = viewPos(vUv + vec2(uTexel.x, 0.0));
  vec3 Py = viewPos(vUv + vec2(0.0, uTexel.y));
  vec3 N = normalize(cross(Px - P, Py - P));
  if (N.z < 0.0) N = -N;                                   // \u9762\u5411\u76F8\u673A\u7684\u534A\u7A7A\u95F4
  float rot = hash12(vUv * 713.0 + uSeed) * 6.2831853;
  vec3 T = normalize(cross(abs(N.y) < 0.9 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0), N));
  vec3 B = cross(N, T);
  float occ = 0.0;
  for (int i = 0; i < 12; i++) {
    float fi = float(i);
    float r = sqrt((fi + 0.5) / 12.0);
    float th = 2.399963 * fi + rot;
    vec3 k = vec3(cos(th) * r, sin(th) * r, sqrt(max(0.0, 1.0 - r * r)));
    vec3 dir = T * k.x + B * k.y + N * k.z;
    vec3 sp = P + dir * uRadius;
    vec4 clip = uProjMat * vec4(sp, 1.0);
    vec2 suv = clip.xy / clip.w * 0.5 + 0.5;
    if (suv.x < 0.0 || suv.x > 1.0 || suv.y < 0.0 || suv.y > 1.0) continue;
    float sz = linDepth(texture2D(tDepth, suv).r);
    float sampleZ = -sp.z;
    float range = smoothstep(0.0, 1.0, uRadius / max(0.0001, abs(sampleZ - sz)));
    if (sz < sampleZ - uBias) occ += range;
  }
  float ao = 1.0 - occ / 12.0;
  gl_FragColor = vec4(ao, ao, ao, 1.0);
}`,Bg=`
${Za}
uniform sampler2D tAO, tDepth;
uniform vec2 uTexel;
varying vec2 vUv;
void main() {
  float dc = linDepth(texture2D(tDepth, vUv).r);
  float sum = 0.0, wsum = 0.0;
  for (int y = -2; y <= 2; y++) {
    for (int x = -2; x <= 2; x++) {
      vec2 uv = vUv + vec2(float(x), float(y)) * uTexel;
      float ds = linDepth(texture2D(tDepth, uv).r);
      float w = 1.0 / (1.0 + abs(ds - dc) * 6.0);          // \u6DF1\u5EA6\u53CC\u8FB9\u6743\u91CD\uFF0C\u907F\u514D\u8DE8\u7269\u4F53\u6E17\u8272
      sum += texture2D(tAO, uv).r * w; wsum += w;
    }
  }
  float ao = sum / max(wsum, 1e-4);
  gl_FragColor = vec4(ao, ao, ao, 1.0);
}`,Ya=class{constructor(t,e){this.renderer=t,this.samples=e.samples,this.aoOn=!!e.ao;let n={type:Be,depthBuffer:!1,minFilter:me,magFilter:me};this.opt=n,this.scene=new ge(1,1,{type:Be,samples:e.samples,depthBuffer:!0}),this.scene.depthTexture=new nn(1,1),this.half=new ge(1,1,n),this.blur=new ge(1,1,n),this.aoRT=new ge(1,1,n),this.aoBlurRT=new ge(1,1,n),this.hdr=new ge(1,1,n),this.levels=6,this.down=Array.from({length:this.levels},()=>new ge(1,1,n)),this.up=Array.from({length:this.levels},()=>new ge(1,1,n));let s=()=>({value:new zt}),r={uFocus:{value:1},uAperture:{value:6},uMaxCoc:{value:24},uNear:{value:.05},uFar:{value:6e3}};this.dof=r,this.coc=new vn(Pg,{...r,tColor:{value:null},tDepth:{value:null},uTexel:s()}),this.blurP=new vn(Ig,{...r,tHalf:{value:null},uTexel:s()},{TAPS:e.dofTaps}),this.comp=new vn(Dg,{...r,tColor:{value:null},tDepth:{value:null},tBlur:{value:null}}),this.pre=new vn(Lg,{tSrc:{value:null},uTexel:s(),uThreshold:{value:1.6}}),this.downP=new vn(Ng,{tSrc:{value:null},uTexel:s()}),this.upP=new vn(Ug,{tSrc:{value:null},tAdd:{value:null},uTexel:s()}),this.final=new vn(Fg,{tHdr:{value:null},tBloom:{value:null},tAO:{value:null},uAOStrength:{value:0},uBloom:{value:.12},uExposure:{value:1},uSat:{value:1},uContrast:{value:1},uGrain:{value:1},uSeed:{value:0},uTint:{value:new O(1,1,1)},uRes:s()});let a={uNear:{value:.05},uFar:{value:6e3},uTexel:s()};this.aoCommon=a,this.ao=new vn(Og,{...a,tDepth:{value:null},uProjMat:{value:new oe},uTanHalfFov:{value:.344},uAspect:{value:1},uRadius:{value:.5},uBias:{value:.02},uSeed:{value:0}}),this.aoBlurP=new vn(Bg,{...a,tAO:{value:null},tDepth:{value:null}})}setSize(t,e){this.w=t,this.h=e,this.scene.setSize(t,e),this.scene.depthTexture.image.width=t,this.scene.depthTexture.image.height=e;let n=Math.max(1,t>>1),s=Math.max(1,e>>1);this.half.setSize(n,s),this.blur.setSize(n,s),this.aoRT.setSize(n,s),this.aoBlurRT.setSize(n,s),this.hdr.setSize(t,e);for(let r=0;r<this.levels;r++){let a=1<<r+1;this.down[r].setSize(Math.max(1,Math.round(t/a)),Math.max(1,Math.round(e/a))),this.up[r].setSize(Math.max(1,Math.round(t/a)),Math.max(1,Math.round(e/a)))}this.final.u.uRes.value.set(t,e)}render(t,e,n,s=null,r=null){let a=this.renderer,o=this.w,c=this.h;a.setRenderTarget(this.scene),a.clear(),a.render(t,e),this.dof.uFocus.value=n.focus,this.dof.uAperture.value=n.aperture,this.dof.uMaxCoc.value=n.maxCoc,this.dof.uNear.value=e.near,this.dof.uFar.value=e.far;let l=null;if(this.aoOn){let g=this.ao.u;g.tDepth.value=this.scene.depthTexture,g.uNear.value=e.near,g.uFar.value=e.far,g.uProjMat.value.copy(e.projectionMatrix),g.uTanHalfFov.value=Math.tan(gn.degToRad(e.fov/2)),g.uAspect.value=o/c,g.uTexel.value.set(1/o,1/c),g.uRadius.value=n.aoRadius||.5,g.uSeed.value=n.seed||0,this.ao.run(a,this.aoRT);let y=this.aoBlurP.u;y.tAO.value=this.aoRT.texture,y.tDepth.value=this.scene.depthTexture,y.uNear.value=e.near,y.uFar.value=e.far,y.uTexel.value.set(1/this.aoRT.width,1/this.aoRT.height),this.aoBlurP.run(a,this.aoBlurRT),l=this.aoBlurRT.texture}let u=n.aperture>.05;u&&(this.coc.u.tColor.value=this.scene.texture,this.coc.u.tDepth.value=this.scene.depthTexture,this.coc.u.uTexel.value.set(1/o,1/c),this.coc.run(a,this.half),this.blurP.u.tHalf.value=this.half.texture,this.blurP.u.uTexel.value.set(1/this.half.width,1/this.half.height),this.blurP.run(a,this.blur)),this.comp.u.tColor.value=this.scene.texture,this.comp.u.tDepth.value=this.scene.depthTexture,this.comp.u.tBlur.value=u?this.blur.texture:this.scene.texture,u||(this.dof.uAperture.value=0),this.comp.run(a,this.hdr),r&&(a.setRenderTarget(this.hdr),a.render(r,e));let p=this.hdr.texture;this.pre.u.tSrc.value=p,this.pre.u.uTexel.value.set(1/o,1/c),this.pre.run(a,this.down[0]);for(let g=1;g<this.levels;g++)this.downP.u.tSrc.value=this.down[g-1].texture,this.downP.u.uTexel.value.set(.5/this.down[g-1].width,.5/this.down[g-1].height),this.downP.run(a,this.down[g]);let h=this.down[this.levels-1];for(let g=this.levels-2;g>=0;g--)this.upP.u.tSrc.value=h.texture,this.upP.u.tAdd.value=this.down[g].texture,this.upP.u.uTexel.value.set(.5/h.width,.5/h.height),this.upP.run(a,this.up[g]),h=this.up[g];let d=this.final.u;d.tHdr.value=p,d.tBloom.value=h.texture,d.tAO.value=l||this.aoBlurRT.texture,d.uAOStrength.value=l?n.aoStrength!=null?n.aoStrength:.6:0,d.uBloom.value=n.bloom/this.levels,d.uExposure.value=n.exposure,d.uSat.value=n.sat,d.uContrast.value=n.contrast,d.uGrain.value=n.grain,d.uSeed.value=n.seed,d.uTint.value.set(...n.tint),this.final.run(a,s)}dispose(){for(let t of[this.coc,this.blurP,this.comp,this.pre,this.downP,this.upP,this.final,this.ao,this.aoBlurP])t.mat.dispose(),t.scene.clear();for(let t of[this.scene,this.half,this.blur,this.hdr,this.aoRT,this.aoBlurRT,...this.down,...this.up])t.dispose()}};var Uh="flower-sea-3d-v1",_l={scale:"auto",fpsCap:60,showFps:!1},zg=7680,kg=4320,Fh=(i,t)=>Math.min(t,Math.max(2,Math.floor(i/2)*2)),Oh=i=>JSON.parse(JSON.stringify(i)),yl=i=>{let t=Math.round(i*60)%1440;return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`},Sl={auto:"\u81EA\u52A8",clear:"\u6674",partly:"\u591A\u4E91",overcast:"\u9634",fog:"\u96FE",rain:"\u5C0F\u96E8"},Bh={white:"\u767D\u8272",pink:"\u6D45\u7C89",magenta:"\u73AB\u7EA2",crimson:"\u9152\u7EA2"},Vg=[{group:"\u65F6\u95F4\u4E0E\u5929\u6C14",items:[{key:"timeMode",label:"\u65F6\u95F4",type:"select",options:[["clock","\u8DDF\u968F\u7535\u8111\u65F6\u95F4"],["fixed","\u56FA\u5B9A\u65F6\u95F4"],["timelapse","\u5168\u5929\u5EF6\u65F6\uFF08\u4E00\u4E2A\u5FAA\u73AF\u8D70\u5B8C 24 \u5C0F\u65F6\uFF09"]]},{key:"hour",label:"\u65F6\u523B / \u8D77\u70B9",min:0,max:23.95,step:.05,fmt:yl},{key:"weather",label:"\u5929\u6C14",type:"select",options:Object.entries(Sl).map(([i,t])=>[i,i==="auto"?"\u81EA\u52A8\uFF08\u6BCF 3 \u5C0F\u65F6\u53D8\u5316\uFF09":t])}]},{group:"\u52A8\u753B",items:[{key:"period",label:"\u5FAA\u73AF\u65F6\u957F",min:5,max:90,step:1,fmt:i=>i+"s"},{key:"wind",label:"\u98CE\u529B",min:0,max:3,step:.05},{key:"windSpeed",label:"\u98CE\u901F",min:.25,max:3,step:.05}]},{group:"\u82B1\u6D77",items:[{key:"flowerDensity",label:"\u82B1\u6735\u5BC6\u5EA6",min:0,max:4,step:.1},{key:"flowerSize",label:"\u82B1\u6735\u5927\u5C0F",min:.5,max:2,step:.05},{key:"grassDensity",label:"\u8349\u4E1B\u5BC6\u5EA6",min:.3,max:1.6,step:.05},{key:"heroes",label:"\u524D\u666F\u5927\u82B1",type:"check"},{key:"heroSize",label:"\u5927\u82B1\u5C3A\u5BF8",min:.5,max:1.6,step:.05},{key:"seed",label:"\u5E03\u5C40\u79CD\u5B50",type:"seed"}]},{group:"\u82B1\u8272\uFF08\u989C\u8272 + \u5360\u6BD4\uFF09",items:Object.keys(Bh).map(i=>({key:i,label:Bh[i],type:"color"}))},{group:"\u573A\u666F",items:[{key:"skyline",label:"\u57CE\u5E02\u80CC\u666F",type:"check"},{key:"horizon",label:"\u5730\u5E73\u7EBF",min:.25,max:.5,step:.005,fmt:i=>Math.round(i*100)+"%"},{key:"haze",label:"\u7A7A\u6C14\u96FE\u611F",min:0,max:3,step:.05}]},{group:"\u955C\u5934",items:[{key:"dof",label:"\u666F\u6DF1\u865A\u5316",min:0,max:2,step:.05},{key:"bloom",label:"\u5149\u6655",min:0,max:2.5,step:.05},{key:"exposure",label:"\u66DD\u5149",min:-2,max:2,step:.05,fmt:i=>(i>0?"+":"")+i.toFixed(2)},{key:"grain",label:"\u80F6\u7247\u9897\u7C92",min:0,max:2,step:.05}]},{group:"\u70B9\u7F00",items:[{key:"butterflies",label:"\u8774\u8776",min:0,max:8,step:1,fmt:i=>i+" \u53EA"},{key:"petals",label:"\u98D8\u843D\u82B1\u74E3",min:0,max:30,step:1,fmt:i=>i+" \u7247"},{key:"pollen",label:"\u5149\u70B9\u7ED2\u7D6E",min:0,max:3,step:.1},{key:"fireflies",label:"\u8424\u706B\u866B",min:0,max:3,step:.1}]},{group:"\u753B\u8D28",items:[{key:"quality",label:"\u753B\u8D28\u6863\u4F4D",type:"select",options:[["auto","\u81EA\u52A8\uFF08\u6309\u6027\u80FD\uFF09"],["low","\u4F4E\uFF08\u96C6\u6210\u663E\u5361\uFF09"],["medium","\u4E2D"],["high","\u9AD8"],["ultra","\u6781\u9AD8"]]},{key:"scale",view:!0,label:"\u6E32\u67D3\u5206\u8FA8\u7387",type:"select",options:[["auto","\u81EA\u52A8\uFF08\u8DDF\u968F\u5C4F\u5E55\uFF09"],["0.5","0.5\xD7 \u7701\u7535"],["0.75","0.75\xD7"],["1","1\xD7"],["1.5","1.5\xD7"],["2","2\xD7 \u9AD8\u6E05"]]},{key:"fpsCap",view:!0,label:"\u5E27\u7387\u4E0A\u9650",type:"select",options:[["24","24 fps"],["30","30 fps"],["60","60 fps"],["0","\u4E0D\u9650"]]},{key:"showFps",view:!0,label:"\u663E\u793A\u5E27\u7387",type:"check"}]}],Hg={\u9ED8\u8BA4:{},\u9EC4\u91D1\u65F6\u523B:{timeMode:"fixed",hour:18.05,weather:"clear",bloom:1.3},\u6E05\u6668\u8584\u96FE:{timeMode:"fixed",hour:6.7,weather:"fog",pollen:1.5},\u6B63\u5348\u6674\u7A7A:{timeMode:"fixed",hour:12.5,weather:"clear"},\u591A\u4E91\u5348\u540E:{timeMode:"fixed",hour:14.8,weather:"partly",wind:1.4},\u9634\u5929:{timeMode:"fixed",hour:10.5,weather:"overcast",dof:.7},\u96E8\u5929:{timeMode:"fixed",hour:15.5,weather:"rain",wind:1.6,petals:3},\u661F\u591C\u8424\u706B:{timeMode:"fixed",hour:22,weather:"clear",fireflies:1.8,bloom:1.4},\u7E41\u82B1\u4F3C\u9526:{flowerDensity:3.2,grassDensity:1.2,heroes:!1,dof:.5,horizon:.36},\u5168\u5929\u5EF6\u65F6:{timeMode:"timelapse",hour:4,period:60},\u7701\u7535\u6A21\u5F0F:{quality:"low",__view:{scale:"0.75",fpsCap:30}}};function _e(i,t={},...e){let n=document.createElement(i);for(let[s,r]of Object.entries(t))s==="style"?n.style.cssText=r:s in n?n[s]=r:n.setAttribute(s,r);return n.append(...e),n}function zh({onConfig:i,onView:t,getStatus:e}){let n=si({}),s={..._l};try{let L=JSON.parse(localStorage.getItem(Uh)||"null");L&&(n=si(L.cfg||{}),s={..._l,...L.view||{}})}catch{}let r={get cfg(){return n},get view(){return s},tick:N},a=()=>localStorage.setItem(Uh,JSON.stringify({cfg:n,view:s})),o=new URLSearchParams(location.search).get("ui")!=="0",c=document.getElementById("panel"),l=document.getElementById("gear"),u=document.getElementById("controls"),p=document.getElementById("status"),h=document.getElementById("fps"),d=document.getElementById("toast");o||(l.style.display="none");let g=(L=!c.classList.contains("open"))=>c.classList.toggle("open",L&&o);l.onclick=()=>g(!0),document.getElementById("close").onclick=document.getElementById("hide").onclick=()=>g(!1),addEventListener("keydown",L=>{L.target.tagName==="INPUT"&&L.target.type==="number"||((L.key==="s"||L.key==="S")&&g(),L.key==="Escape"&&g(!1))});let y;addEventListener("mousemove",()=>{l.classList.add("show"),clearTimeout(y),y=setTimeout(()=>l.classList.remove("show"),2500)});let m,f=L=>{d.textContent=L,d.classList.add("show"),clearTimeout(m),m=setTimeout(()=>d.classList.remove("show"),1800)},b,C=L=>{a(),h.style.display=s.showFps?"block":"none",L?t():(clearTimeout(b),b=setTimeout(()=>i(n),120)),w()},S=[],M={};for(let L of Vg){u.append(_e("h2",{},L.group));for(let F of L.items){let q=()=>F.view?s:n,J=F.type||"range",V;if(J==="range"){let W=_e("span",{className:"val"}),Z=_e("input",{type:"range",min:F.min,max:F.max,step:F.step}),_t=()=>{W.textContent=F.fmt?F.fmt(+Z.value):(+Z.value).toFixed(2).replace(/\.?0+$/,"")};Z.oninput=()=>{q()[F.key]=+Z.value,_t(),C(F.view)},S.push(()=>{Z.value=q()[F.key],_t()}),V=_e("div",{className:"row"},_e("label",{},F.label),Z,W)}else if(J==="check"){let W=_e("input",{type:"checkbox"});W.onchange=()=>{q()[F.key]=W.checked,C(F.view)},S.push(()=>{W.checked=!!q()[F.key]}),V=_e("label",{className:"row check"},_e("span",{},F.label),W)}else if(J==="select"){let W=_e("select",{style:"grid-column: span 2"},...F.options.map(([Z,_t])=>_e("option",{value:Z},_t)));W.onchange=()=>{q()[F.key]=F.key==="fpsCap"?+W.value:W.value,C(F.view)},S.push(()=>{W.value=String(q()[F.key])}),V=_e("div",{className:"row"},_e("label",{},F.label),W)}else if(J==="seed"){let W=_e("input",{type:"number",min:0,step:1}),Z=_e("button",{className:"b",title:"\u968F\u673A\u6362\u4E00\u79CD\u5E03\u5C40",style:"padding:3px 0"},"\u{1F3B2}");W.onchange=()=>{n.seed=Math.max(0,Math.floor(+W.value||0)),C(!1)},Z.onclick=()=>{n.seed=Math.floor(Math.random()*1e6),W.value=n.seed,C(!1)},S.push(()=>{W.value=n.seed}),V=_e("div",{className:"row"},_e("label",{},F.label),W,Z)}else if(J==="color"){let W=_e("input",{type:"color"}),Z=_e("input",{type:"range",min:0,max:1,step:.01}),_t=_e("span",{className:"val"}),wt=()=>{let Ot=Object.values(n.colorWeights).reduce((Xt,$)=>Xt+$,0)||1;_t.textContent=Math.round(n.colorWeights[F.key]/Ot*100)+"%"};W.oninput=()=>{n.colors[F.key]=W.value,C(!1)},Z.oninput=()=>{n.colorWeights[F.key]=+Z.value,S.forEach(Ot=>Ot.pct&&Ot()),C(!1)},S.push(()=>{W.value=n.colors[F.key],Z.value=n.colorWeights[F.key],wt()});let Kt=()=>wt();Kt.pct=!0,S.push(Kt),V=_e("div",{className:"row color"},_e("label",{},F.label),W,Z,_t)}M[F.key]=V,u.append(V)}}function w(){M.hour.style.opacity=n.timeMode==="clock"?.4:1,M.heroSize.style.opacity=n.heroes?1:.4}let R=()=>{S.forEach(L=>L()),h.style.display=s.showFps?"block":"none",w()};R();let x=document.getElementById("presets");for(let[L,F]of Object.entries(Hg)){let q=_e("button",{},L);q.onclick=()=>{let{__view:J,...V}=F;n=si({...Oh(Ge),...V,seed:n.seed,quality:V.quality||n.quality}),J&&(s={...s,...J}),R(),C(!!J),J&&i(n),f("\u5DF2\u5E94\u7528\u9884\u8BBE\uFF1A"+L)},x.append(q)}document.getElementById("reset").onclick=()=>{n=si({}),s={..._l},R(),C(!0),i(n),f("\u5DF2\u6062\u590D\u9ED8\u8BA4\u8BBE\u7F6E")},document.getElementById("export").onclick=()=>{let L=document.getElementById("exportRes").value,[F,q]=L==="screen"?[Fh(Math.round(screen.width*(devicePixelRatio||1)),zg),Fh(Math.round(screen.height*(devicePixelRatio||1)),kg)]:L.split("x").map(Number),J=e(),V={...Oh(n),width:F,height:q,fps:+document.getElementById("exportFps").value};V.timeMode==="clock"&&(V.timeMode="fixed",V.hour=Math.round(J.hour*100)/100),V.weather==="auto"&&(V.weather=J.weather),(V.quality==="low"||V.quality==="auto")&&(V.quality="high");let W=new Blob([JSON.stringify(V,null,2)],{type:"application/json"}),Z=_e("a",{href:URL.createObjectURL(W),download:"flower-sea.config.json"});document.body.append(Z),Z.click(),Z.remove(),setTimeout(()=>URL.revokeObjectURL(Z.href),1e3),f(`\u5DF2\u5BFC\u51FA\uFF1A${yl(V.hour)} \xB7 ${Sl[V.weather]}`)};let T=document.getElementById("file");document.getElementById("import").onclick=()=>T.click(),T.onchange=async()=>{let L=T.files[0];if(L){try{let F=JSON.parse(await L.text());if(n=si(F),F.width&&F.height){let q=document.getElementById("exportRes"),J=`${F.width}x${F.height}`;[...q.options].some(V=>V.value===J)&&(q.value=J)}if(F.fps){let q=String(Math.round(+F.fps)),J=document.getElementById("exportFps");[...J.options].some(V=>V.value===q)&&(J.value=q)}R(),C(!1),f("\u914D\u7F6E\u5DF2\u5BFC\u5165")}catch{f("\u914D\u7F6E\u6587\u4EF6\u65E0\u6CD5\u89E3\u6790")}T.value=""}};let P=0,I=performance.now(),z=0,k=L=>L.quality?` \xB7 \u753B\u8D28 ${L.quality}${n.quality==="auto"?"\uFF08\u81EA\u52A8\uFF09":""}`:"";function N(L){if(P++,L-I>500){let F=e();h.textContent=`${Math.round(P*1e3/(L-I))} fps \xB7 ${F.size[0]}\xD7${F.size[1]} \xB7 \u8349 ${F.counts?.grass} \u82B1 ${F.counts?.flowers}${k(F)}`,P=0,I=L}if(L-z>1e3){z=L;let F=e();F.hour!==void 0&&(p.textContent=`${yl(F.hour)} \xB7 ${Sl[F.weather]||""}${n.weather==="auto"?"\uFF08\u81EA\u52A8\uFF09":""}${k(F)}`)}}return r}function kh(){let i=0;return function(e,n){if(!(n>0))return!0;let s=1e3/n;return e+.5<i?!1:(e-i>s*4&&(i=e),i+=s,!0)}}var Vh=["low","medium","high","ultra"],Gg=/swiftshader|llvmpipe|softpipe|software|basic render|microsoft basic/i,Wg=/(rtx\s?\d|geforce\s?(gtx\s?1[6-9]|rtx)|radeon\s?(rx\s?[5-9]\d{3}|pro)|apple\s?m[1-9]|arc\s?a\d+|quadro|tesla|firepro)/i,Xg=/(intel|iris|uhd|vega|geforce\s?(mx|gtx\s?(9|10|1[0-5]))|radeon\s?(rx\s?[3-4]\d{2}|vega)|mali|adreno|powervr)/i;function Hh(i,t,e){let n=String(i||""),s=Math.max(1,Math.floor(+t||0)),r=Math.max(1,Math.floor(+e||0)),a=s*r;if(Gg.test(n))return"low";let o=Wg.test(n),c=Xg.test(n);return a>=3840*2160*.9?o?"medium":"low":a>=2560*1440*.9?o?"high":c?"low":"medium":o?"high":"medium"}function Gh({threshold:i=24,minSeconds:t=4,cooldownSeconds:e=10}={}){let n=0,s=0,r=0;return function(o,c){let l=Vh.indexOf(c);if(!(o>0)||l<0||l===0)return null;if(r>0)return r-=o,r<=0&&(n=0,s=0),null;if(n+=1,s+=o,s<t)return null;let u=n/s;return n=0,s=0,u<i?(r=e,Vh[l-1]):null}}var Ml=i=>new Ht(i),qg=new O(-.42,.42,-.8).normalize(),Yg={white:["#e2b3c8","#f6eff1","#ffffff"],pink:["#c64886","#ee9fc3","#f8cfe0"],magenta:["#9e0050","#d6127a","#ea3a93"],crimson:["#4f031c","#8a0a34","#a8164a"]},Zg={white:"#f6eff1",pink:"#ee9fc3",magenta:"#d6127a",crimson:"#8a0a34"};function $g(i,t){let e=String(t||"").toLowerCase();if(e===Zg[i])return Yg[i].map(Ml);let n=Ml(e);return[.2126*n.r+.7152*n.g+.0722*n.b>.6?n.clone().lerp(Ml("#c88aa6"),.55):n.clone().multiplyScalar(.35),n,n.clone().lerp(new Ht(1,1,1),.3)]}var Ja=class{constructor(t,{exportMode:e=!1}={}){this.exportMode=e,this.renderer=new Fa({canvas:t,antialias:!1,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:e}),this.renderer.outputColorSpace=di,this.renderer.setPixelRatio(1),this.renderer.autoClear=!1,this.gpuName=(()=>{try{let n=this.renderer.getContext(),s=n.getExtension("WEBGL_debug_renderer_info");return String(s?n.getParameter(s.UNMASKED_RENDERER_WEBGL):n.getParameter(n.RENDERER))}catch{return""}})(),this.overlay=new wn,this.tex={atlas:Va(),petal:Ha(),wing:Ga()};for(let n of Object.values(this.tex))n.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy());this.U=za(),this.camera=new Oe(38,1,.05,6e3),this.scene=new wn,this.shadowRT=null,this.shadowScene=new wn,this.shadowCamera=new Fn(-12,12,12,-12,1,70),this.shadowCenter=new O(0,0,-3),this.shadowMatrix=new oe,this.shadowCasters=null,this.iblRT=null,this.iblScene=new wn,this.iblCamera=null,this.cfg=null,this.world=null,this.post=null,this.wCur=null,this.envCache=new Map,this.autoQuality=null,this.effectiveQuality=null,this.w=1,this.h=1}setSize(t,e){this.w=t,this.h=e,this.renderer.setSize(t,e,!1),this.post&&this.post.setSize(t,e),this.cfg&&this.cfg.quality==="auto"&&(this.autoQuality=null),this.needsBuild=!0}setConfig(t){let e=si(t),n=this.cfg;this.cfg=e,n&&n.quality!==e.quality&&(this.autoQuality=null),(!n||mh.some(r=>JSON.stringify(n[r])!==JSON.stringify(e[r])))&&(this.needsBuild=!0),["white","pink","magenta","crimson"].forEach((r,a)=>{let[o,c,l]=$g(r,e.colors[r]);this.U.uPalBase.value[a].set(o.r,o.g,o.b),this.U.uPalMid.value[a].set(c.r,c.g,c.b),this.U.uPalTip.value[a].set(l.r,l.g,l.b)})}resolveQualityName(){let t=this.cfg&&this.cfg.quality;return t!=="auto"?Gs[t]?t:"high":this.exportMode?"high":(this.autoQuality||(this.autoQuality=Hh(this.gpuName,this.w,this.h)),this.autoQuality)}useAutoTier(t){return!this.cfg||this.cfg.quality!=="auto"||!Gs[t]||this.autoQuality===t?!1:(this.autoQuality=t,this.needsBuild=!0,!0)}updateCamera(){let t=this.camera,e=this.w/this.h;t.aspect=e,t.fov=Math.max(38,gn.radToDeg(2*Math.atan(Math.tan(gn.degToRad(16))/e)));let n=Math.tan(gn.degToRad(t.fov/2)),s=Math.atan((.5-this.cfg.horizon)*2*n);t.position.set(0,1.15,0),t.rotation.set(-s,0,0),t.updateProjectionMatrix(),t.updateMatrixWorld(!0)}build(){this.needsBuild=!1;let t=this.cfg,e=this.resolveQualityName(),n=Gs[e];if(this.effectiveQuality=e,this.shadowRT&&(this.shadowRT.depthTexture&&this.shadowRT.depthTexture.dispose(),this.shadowRT.dispose(),this.shadowRT=null),this.shadowCasters){for(let y of this.shadowCasters)y.geometry.dispose(),y.material.dispose();this.shadowCasters=null}this.shadowScene.clear(),this.iblRT&&(this.iblRT.dispose(),this.iblRT=null),this.iblCamera=null,this.iblScene.clear(),(!this.post||this.post.samples!==n.samples||this.postTaps!==n.dofTaps||this.postAO!==(n.ao||0))&&(this.post&&this.post.dispose(),this.post=new Ya(this.renderer,n),this.postTaps=n.dofTaps,this.postAO=n.ao||0,this.post.setSize(this.w,this.h)),this.rain&&(this.rain.geometry.dispose(),this.rain.material.dispose()),this.world&&(this.scene.remove(this.world),this.world.traverse(y=>{y.geometry&&y.geometry.dispose(),y.material&&y.material.dispose()})),this.updateCamera();let s=t.period,r=y=>Math.max(1,Math.round(y*s/15));this.cyc=r;let a=ri(Math.floor(t.seed)||0),o=this.w/this.h,c=Math.atan(Math.tan(gn.degToRad(this.camera.fov/2))*o),l=new Ye,u=Dh(this.U);u.mat.uniforms.uTwinkle.value=r(7),l.add(u.mesh),t.skyline&&l.add(Lh(this.U,ri(t.seed+7),c));let p=Ih({U:this.U,tex:this.tex,cfg:t,q:n,rng:a,camera:this.camera,aspect:o});l.add(p.group),this.counts=p.counts;let h=Nh({U:this.U,tex:this.tex,cfg:t,q:n,rng:ri(t.seed+99),cyc:r,halfH:c});l.add(h.group),this.partU=h.uniforms,this.overlay.clear(),this.overlay.add(h.rain),this.rain=h.rain,this.focus=t.heroes?.92:3.5,this.world=l,this.scene.add(l);let d=n.shadow||0;if(this.U.uShadowEnabled.value=d?1:0,this.U.uShadowMap.value=null,d){let y=new nn(d,d);y.type=Ke,y.minFilter=ve,y.magFilter=ve,this.shadowRT=new ge(d,d,{depthBuffer:!0,depthTexture:y,minFilter:ve,magFilter:ve,generateMipmaps:!1}),this.U.uShadowMap.value=y,this.U.uShadowTexel.value.set(1/d,1/d),this.shadowCasters=p.shadowCasters||[];for(let m of this.shadowCasters)this.shadowScene.add(m)}else this.shadowCasters=[];let g=n.ibl||0;if(this.U.uEnvIntensity.value=0,this.U.uEnvMap.value=null,g){let y=new ns(g,{type:Be,generateMipmaps:!0,minFilter:sn,magFilter:me});this.iblRT=y,this.iblCamera=new qi(.1,2e4,y),this.iblCamera.position.copy(this.camera.position),this.iblScene.add(u.mesh.clone()),this.U.uEnvMap.value=y.texture,this.U.uEnvIntensity.value=.5}}renderShadow(t){let e=this.shadowCamera,n=this.shadowCenter;e.position.copy(n).addScaledVector(t,40),e.up.set(0,1,0),e.lookAt(n),e.updateMatrixWorld(),e.updateProjectionMatrix(),this.shadowMatrix.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this.U.uShadowMatrix.value.copy(this.shadowMatrix);let s=this.renderer;s.setRenderTarget(this.shadowRT),s.clear(),s.render(this.shadowScene,e),s.setRenderTarget(null)}updateIBL(){let t=this.renderer,e=t.autoClear;t.autoClear=!0,this.iblCamera.position.copy(this.camera.position),this.iblCamera.update(t,this.iblScene),t.autoClear=e}destroy(){if(this.world&&(this.scene.remove(this.world),this.world.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(e=>e.dispose())}),this.world=null),this.rain&&(this.rain.geometry.dispose(),this.rain.material.dispose()),this.rain=null,this.shadowRT&&(this.shadowRT.depthTexture&&this.shadowRT.depthTexture.dispose(),this.shadowRT.dispose(),this.shadowRT=null),this.shadowCasters){for(let t of this.shadowCasters)t.geometry.dispose(),t.material.dispose();this.shadowCasters=null}this.shadowScene.clear(),this.iblRT&&(this.iblRT.dispose(),this.iblRT=null),this.iblCamera=null,this.iblScene.clear(),this.overlay.clear();for(let t of Object.values(this.tex))t.dispose();this.post&&(this.post.dispose(),this.post=null),this.envCache.clear(),this.renderer.dispose()}resolveHour(t,e=new Date){let n=this.cfg;return n.timeMode==="clock"&&!this.exportMode?e.getHours()+e.getMinutes()/60+e.getSeconds()/3600:n.timeMode==="timelapse"?(n.hour+24*((t%n.period+n.period)%n.period)/n.period)%24:n.hour}resolveWeather(t=new Date){let e=this.cfg.weather;return _i.includes(e)?{weights:{[e]:1},name:e}:this.exportMode?{weights:{clear:1},name:"clear"}:bh(t)}envFor(t,e){let n=Math.round(t*1e3),s="";for(let c of _i)s+=Math.round((e[c]||0)*1e3)+",";let r=n+"|"+s,a=this.envCache.get(r);if(a)return a;let o=Mh(n/1e3,e);return this.envCache.size>512&&this.envCache.clear(),this.envCache.set(r,o),o}frame(t,e=0,n=null){this.needsBuild&&this.build();let s=this.cfg,r=this.U,a=s.period,o=(t%a+a)%a;r.uTime.value=o,r.uLoop.value=o/a,r.uPhase.value=Math.PI*2*o/a,r.uPeriod.value=a;let c=m=>Math.max(1,Math.round(m*a*s.windSpeed/15));r.uWindCyc.value.set(c(1),c(2),c(3)),r.uFlutterCyc.value.set(this.cyc(5),this.cyc(8)),r.uWind.value=s.wind;let l=new Date,u=this.resolveHour(t,l),{weights:p,name:h}=this.resolveWeather(l);if(!this.wCur||e<=0)this.wCur={...p};else{let m=Math.min(1,e*.8);for(let f of _i)this.wCur[f]=(this.wCur[f]||0)+((p[f]||0)-(this.wCur[f]||0))*m}this.status={hour:u,weather:h};let d=this.envFor(u,this.wCur);r.uLightDir.value.copy(d.lightDir),r.uSunDir.value.copy(d.sunDir),r.uMoonDir.value.copy(qg),r.uLightColor.value.set(...d.lightCol),r.uGlowColor.value.set(...d.glow),r.uSunDisc.value.set(...d.sunDisc),r.uSkyAmb.value.set(...d.skyAmb),r.uGroundAmb.value.set(...d.groundAmb),r.uZenith.value.set(...d.zen),r.uHorizon.value.set(...d.hor),r.uCloudLit.value.set(...d.cloudLit),r.uCloudDark.value.set(...d.cloudDark),r.uFogDensity.value=45e-5*s.haze*d.fogMul,r.uCloudCover.value=d.cloudCover,r.uCloudShadow.value=d.cloudShadow,r.uCloudDrift.value.set(14,-4).multiplyScalar(.6+.4*s.windSpeed),r.uSunVis.value=d.sunVis,r.uStars.value=d.stars,r.uMoon.value=d.moon,r.uCityLights.value=d.cityLights,r.uWet.value=d.wet,r.uRain.value=d.rain,this.partU.pollenVis&&(this.partU.pollenVis.value=d.pollen),this.partU.fireflyVis&&(this.partU.fireflyVis.value=d.fireflies),this.partU.butterflyVis&&(this.partU.butterflyVis.value=d.butterflies);let g=this.rain.material.uniforms;g.tDepth.value=this.post.scene.depthTexture,g.uRes.value.set(this.w,this.h),g.uNear.value=this.camera.near,g.uFar.value=this.camera.far,this.shadowRT&&this.renderShadow(d.lightDir),this.iblRT&&this.updateIBL();let y=this.h/1080;this.post.render(this.scene,this.camera,{focus:this.focus,aperture:s.dof*7*y,maxCoc:26*y*Math.max(1,s.dof),bloom:s.bloom*d.bloom*.9,exposure:.82*Math.pow(2,s.exposure)*d.ex,sat:d.sat,contrast:d.contrast,tint:d.tint,grain:s.grain,seed:Math.floor(o/a*997),aoStrength:.55,aoRadius:.5},n,d.rain>.01?this.overlay:null)}},$a=4*1024*1024;function Jg(i){if(typeof i.toBase64=="function")return i.toBase64();let t="",e=32768;for(let n=0;n<i.length;n+=e)t+=String.fromCharCode.apply(null,i.subarray(n,n+e));return btoa(t)}function Kg(){let i=null,t=null,e=null;function n(s){i.frame(s);let r=i.renderer.getContext(),a=i.w*i.h*4;return(!e||e.length!==a)&&(e=new Uint8Array(a)),r.readPixels(0,0,i.w,i.h,r.RGBA,r.UNSIGNED_BYTE,e),a}return{init(s,r,a){return t=document.getElementById("c"),t.width=r,t.height=a,t.style.width=r+"px",t.style.height=a+"px",i=new Ja(t,{exportMode:!0}),i.setConfig(s),i.setSize(r,a),i.frame(0),{period:i.cfg.period,counts:i.counts}},debugTexture(s){return i.tex[s].image.toDataURL("image/png")},renderAt(s){i.frame(s);let r=i.renderer.getContext(),a=new Uint8Array(i.w*i.h*4);r.readPixels(0,0,i.w,i.h,r.RGBA,r.UNSIGNED_BYTE,a);let o="",c=32768;for(let l=0;l<a.length;l+=c)o+=String.fromCharCode.apply(null,a.subarray(l,l+c));return btoa(o)},renderFrame(s){let r=n(s);return{width:i.w,height:i.h,bytes:r,chunkBytes:$a,chunks:Math.ceil(r/$a)}},readChunk(s){if(!e)throw new Error("readChunk: \u5C1A\u672A\u8C03\u7528 renderFrame");if(!Number.isInteger(s)||s<0)throw new Error(`readChunk: \u975E\u6CD5\u5757\u5E8F\u53F7 ${s}`);let r=s*$a;if(r>=e.length)throw new Error(`readChunk: \u5757\u5E8F\u53F7\u8D8A\u754C ${s}`);return Jg(e.subarray(r,Math.min(r+$a,e.length)))},bench(s=60,r=1/60){let a=i.renderer.getContext(),o=i.renderer.info,c=o.autoReset;o.autoReset=!1;let l=new Uint8Array(4),u=[],p=null,h=performance.now();for(let f=0;f<s;f++){o.reset();let b=performance.now();i.frame(f*r),a.readPixels(0,0,1,1,a.RGBA,a.UNSIGNED_BYTE,l),u.push(performance.now()-b),p={triangles:o.render.triangles,calls:o.render.calls,points:o.render.points,lines:o.render.lines}}o.autoReset=c;let d=performance.now()-h,g=[...u].sort((f,b)=>f-b),y=f=>+g[Math.min(g.length-1,Math.floor(g.length*f))].toFixed(3),m=u.reduce((f,b)=>f+b,0)/u.length;return{width:i.w,height:i.h,frames:s,avgMs:+m.toFixed(3),minMs:y(0),p95Ms:y(.95),maxMs:y(.999),fps:+(1e3/m).toFixed(1),wallMs:+d.toFixed(1),gpu:i.gpuName,effectiveQuality:i.effectiveQuality,counts:i.counts,render:p,memory:{geometries:o.memory.geometries,textures:o.memory.textures},programs:o.programs?o.programs.length:null}}}}function Qg(){let i=document.getElementById("c"),t=document.createElement("div");t.id="fatal",t.style.cssText='position:fixed;inset:0;z-index:20;display:none;padding:32px 40px;background:rgba(12,16,12,.92);color:#f2e9ec;font:14px/1.7 system-ui,"Microsoft YaHei","PingFang SC",sans-serif;white-space:pre-wrap;',document.body.append(t);let e=null,n=!1,s=!1,r=g=>{t.textContent=g,t.style.display="block"},a=()=>{t.style.display="none"},o=zh({onConfig:g=>{e&&e.setConfig(g)},onView:()=>c(),getStatus:()=>e?{...e.status,counts:e.counts,size:[e.w,e.h],quality:e.effectiveQuality,auto:!!(e.cfg&&e.cfg.quality==="auto")}:{counts:null,size:[innerWidth,innerHeight],quality:null,auto:!1}});function c(){if(!e)return;let g=o.view,y=g.scale==="auto"?Math.min(window.devicePixelRatio||1,2):+g.scale;e.setSize(Math.max(320,Math.round(innerWidth*y)),Math.max(180,Math.round(innerHeight*y)))}try{e=new Ja(i)}catch(g){n=!0,r(`\u65E0\u6CD5\u521D\u59CB\u5316 WebGL2 \u6E32\u67D3\u3002

`+(g&&g.message||g)+`

\u8BF7\u4F7F\u7528\u652F\u6301 WebGL2 \u7684\u6700\u65B0\u7248 Chrome / Edge\uFF0C\u5E76\u786E\u8BA4\u6D4F\u89C8\u5668\u5DF2\u542F\u7528\u786C\u4EF6\u52A0\u901F\uFF08\u6216\u66F4\u65B0\u663E\u5361\u9A71\u52A8\uFF09\u3002`),console.error(g)}e&&(e.setConfig(o.cfg),c(),i.addEventListener("webglcontextlost",g=>{g.preventDefault(),s=!0,r(`\u56FE\u5F62\u4E0A\u4E0B\u6587\u4E22\u5931\uFF0C\u6B63\u5728\u5C1D\u8BD5\u6062\u590D\u2026

\u82E5\u957F\u65F6\u95F4\u505C\u7559\u5728\u6B64\u754C\u9762\uFF0C\u8BF7\u91CD\u542F\u6D4F\u89C8\u5668\u6216\u68C0\u67E5\u663E\u5361\u9A71\u52A8\u3002`)},!1),i.addEventListener("webglcontextrestored",()=>{s=!1,p=performance.now(),a()},!1));let l;addEventListener("resize",()=>{clearTimeout(l),l=setTimeout(c,200)});let u=performance.now(),p=u,h=kh(),d=Gh();(function g(y){if(requestAnimationFrame(g),n||s||!e||!h(y,+o.view.fpsCap))return;let m=Math.min(.25,(y-p)/1e3);if(e.frame((y-u)/1e3,m),p=y,e.cfg.quality==="auto"&&e.effectiveQuality){let f=+o.view.fpsCap;if(!(f>0&&f<30)){let b=d(m,e.effectiveQuality);b&&e.useAutoTier(b)}}o.tick(y)})(u)}new URLSearchParams(location.search).get("export")==="1"?window.FlowerSea=Kg():Qg();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
