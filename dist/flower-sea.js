(()=>{var jl=0,Eo=1,tc=2;var Ds=1,ec=2,Yi=3,jn=0,De=1,Pe=2,Tn=0,Zi=1,$i=2,Ao=3,Co=4,nc=5;var mi=100,ic=101,sc=102,rc=103,ac=104,oc=200,lc=201,cc=202,hc=203,Ro=204,Po=205,uc=206,dc=207,fc=208,pc=209,mc=210,gc=211,vc=212,xc=213,_c=214,vr=0,xr=1,_r=2,ki=3,yr=4,Sr=5,Mr=6,br=7,Io=0,yc=1,Sc=2,fn=0,Do=1,Lo=2,No=3,Uo=4,Fo=5,Oo=6,Bo=7;var zo=300,ti=301,gi=302,Yr=303,Zr=304,Ls=306,wr=1e3,tn=1001,Tr=1002,me=1003,Mc=1004;var Ns=1005;var de=1006,$r=1007;var sn=1008;var Je=1009,ko=1010,Vo=1011,Ji=1012,Jr=1013,Ke=1014,pn=1015,Be=1016,Kr=1017,Qr=1018,Ki=1020,Ho=35902,Go=35899,Wo=1021,Xo=1022,rn=1023,Sn=1026,ei=1027,qo=1028,jr=1029,ni=1030,ta=1031;var ea=1033,Us=33776,Fs=33777,Os=33778,Bs=33779,na=35840,ia=35841,sa=35842,ra=35843,aa=36196,oa=37492,la=37496,ca=37488,ha=37489,zs=37490,ua=37491,da=37808,fa=37809,pa=37810,ma=37811,ga=37812,va=37813,xa=37814,_a=37815,ya=37816,Sa=37817,Ma=37818,ba=37819,wa=37820,Ta=37821,Ea=36492,Aa=36494,Ca=36495,Ra=36283,Pa=36284,ks=36285,Ia=36286;var gs=2300,Er=2301,mr=2302,yo=2303,So=2400,Mo=2401,bo=2402;var bc=3200;var Yo=0,wc=1,mn="",qe="srgb",di="srgb-linear",vs="linear",Qt="srgb";var gr=7680;var Tc=519,Ec=512,Ac=513,Cc=514,Da=515,Rc=516,Pc=517,La=518,Ic=519,Dc=35044;var Zo="300 es",un=2e3,xs=2001;function Kh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Qh(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function _s(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lc(){let i=_s("canvas");return i.style.display="block",i}var Ll={},Vi=null;function $o(...i){let t="THREE."+i.shift();Vi?Vi("log",t,...i):console.log(t,...i)}function Nc(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ct(...i){i=Nc(i);let t="THREE."+i.shift();if(Vi)Vi("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Rt(...i){i=Nc(i);let t="THREE."+i.shift();if(Vi)Vi("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ui(...i){let t=i.join(" ");t in Ll||(Ll[t]=!0,Ct(...i))}function Uc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Fc={[vr]:xr,[_r]:Mr,[yr]:br,[ki]:Sr,[xr]:vr,[Mr]:_r,[br]:yr,[Sr]:ki},Mn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nl=1234567,ps=Math.PI/180,Hi=180/Math.PI;function Qi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]).toLowerCase()}function Xt(i,t,e){return Math.max(t,Math.min(e,i))}function Jo(i,t){return(i%t+t)%t}function jh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function tu(i,t,e){return i!==t?(e-i)/(t-i):0}function ms(i,t,e){return(1-e)*i+e*t}function eu(i,t,e,n){return ms(i,t,1-Math.exp(-e*n))}function nu(i,t=1){return t-Math.abs(Jo(i,t*2)-t)}function iu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function su(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function ru(i,t){return i+Math.floor(Math.random()*(t-i+1))}function au(i,t){return i+Math.random()*(t-i)}function ou(i){return i*(.5-Math.random())}function lu(i){i!==void 0&&(Nl=i);let t=Nl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function cu(i){return i*ps}function hu(i){return i*Hi}function uu(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function du(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function fu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function pu(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),u=a((t+n)/2),p=r((t-n)/2),h=a((t-n)/2),d=r((n-t)/2),v=a((n-t)/2);switch(s){case"XYX":i.set(o*u,c*p,c*h,o*l);break;case"YZY":i.set(c*h,o*u,c*p,o*l);break;case"ZXZ":i.set(c*p,c*h,o*u,o*l);break;case"XZX":i.set(o*u,c*v,c*d,o*l);break;case"YXY":i.set(c*d,o*u,c*v,o*l);break;case"ZYZ":i.set(c*v,c*d,o*u,o*l);break;default:Ct("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var gn={DEG2RAD:ps,RAD2DEG:Hi,generateUUID:Qi,clamp:Xt,euclideanModulo:Jo,mapLinear:jh,inverseLerp:tu,lerp:ms,damp:eu,pingpong:nu,smoothstep:iu,smootherstep:su,randInt:ru,randFloat:au,randFloatSpread:ou,seededRandom:lu,degToRad:cu,radToDeg:hu,isPowerOfTwo:uu,ceilPowerOfTwo:du,floorPowerOfTwo:fu,setQuaternionFromProperEuler:pu,normalize:Ve,denormalize:Bi},Ut=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},bn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],p=n[s+3],h=r[a+0],d=r[a+1],v=r[a+2],S=r[a+3];if(p!==S||c!==h||l!==d||u!==v){let g=c*h+l*d+u*v+p*S;g<0&&(h=-h,d=-d,v=-v,S=-S,g=-g);let f=1-o;if(g<.9995){let w=Math.acos(g),A=Math.sin(w);f=Math.sin(f*w)/A,o=Math.sin(o*w)/A,c=c*f+h*o,l=l*f+d*o,u=u*f+v*o,p=p*f+S*o}else{c=c*f+h*o,l=l*f+d*o,u=u*f+v*o,p=p*f+S*o;let w=1/Math.sqrt(c*c+l*l+u*u+p*p);c*=w,l*=w,u*=w,p*=w}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],p=r[a],h=r[a+1],d=r[a+2],v=r[a+3];return t[e]=o*v+u*p+c*d-l*h,t[e+1]=c*v+u*h+l*p-o*d,t[e+2]=l*v+u*d+o*h-c*p,t[e+3]=u*v-o*p-c*h-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),p=o(r/2),h=c(n/2),d=c(s/2),v=c(r/2);switch(a){case"XYZ":this._x=h*u*p+l*d*v,this._y=l*d*p-h*u*v,this._z=l*u*v+h*d*p,this._w=l*u*p-h*d*v;break;case"YXZ":this._x=h*u*p+l*d*v,this._y=l*d*p-h*u*v,this._z=l*u*v-h*d*p,this._w=l*u*p+h*d*v;break;case"ZXY":this._x=h*u*p-l*d*v,this._y=l*d*p+h*u*v,this._z=l*u*v+h*d*p,this._w=l*u*p-h*d*v;break;case"ZYX":this._x=h*u*p-l*d*v,this._y=l*d*p+h*u*v,this._z=l*u*v-h*d*p,this._w=l*u*p+h*d*v;break;case"YZX":this._x=h*u*p+l*d*v,this._y=l*d*p+h*u*v,this._z=l*u*v-h*d*p,this._w=l*u*p-h*d*v;break;case"XZY":this._x=h*u*p-l*d*v,this._y=l*d*p-h*u*v,this._z=l*u*v+h*d*p,this._w=l*u*p+h*d*v;break;default:Ct("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],p=e[10],h=n+o+p;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(n>o&&n>p){let d=2*Math.sqrt(1+n-o-p);this._w=(u-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>p){let d=2*Math.sqrt(1+o-n-p);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+p-n-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ul.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ul.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),u=2*(o*e-r*s),p=2*(r*n-a*e);return this.x=e+c*l+a*p-o*u,this.y=n+c*u+o*l-r*p,this.z=s+c*p+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ja.copy(this).projectOnVector(t),this.sub(ja)}reflect(t){return this.sub(ja.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ja=new k,Ul=new bn,Dt=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],p=n[7],h=n[2],d=n[5],v=n[8],S=s[0],g=s[3],f=s[6],w=s[1],A=s[4],M=s[7],b=s[2],T=s[5],C=s[8];return r[0]=a*S+o*w+c*b,r[3]=a*g+o*A+c*T,r[6]=a*f+o*M+c*C,r[1]=l*S+u*w+p*b,r[4]=l*g+u*A+p*T,r[7]=l*f+u*M+p*C,r[2]=h*S+d*w+v*b,r[5]=h*g+d*A+v*T,r[8]=h*f+d*M+v*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],p=u*a-o*l,h=o*c-u*r,d=l*r-a*c,v=e*p+n*h+s*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/v;return t[0]=p*S,t[1]=(s*l-u*n)*S,t[2]=(o*n-s*a)*S,t[3]=h*S,t[4]=(u*e-s*c)*S,t[5]=(s*r-o*e)*S,t[6]=d*S,t[7]=(n*c-l*e)*S,t[8]=(a*e-n*r)*S,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return ui("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(to.makeScale(t,e)),this}rotate(t){return ui("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(to.makeRotation(-t)),this}translate(t,e){return ui("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(to.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},to=new Dt,Fl=new Dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ol=new Dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mu(){let i={enabled:!0,workingColorSpace:di,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Qt&&(s.r=Un(s.r),s.g=Un(s.g),s.b=Un(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qt&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===mn?vs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ui("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ui("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[di]:{primaries:t,whitePoint:n,transfer:vs,toXYZ:Fl,fromXYZ:Ol,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:qe},outputColorSpaceConfig:{drawingBufferColorSpace:qe}},[qe]:{primaries:t,whitePoint:n,transfer:Qt,toXYZ:Fl,fromXYZ:Ol,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:qe}}}),i}var Wt=mu();function Un(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ti,Ar=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ti===void 0&&(Ti=_s("canvas")),Ti.width=t.width,Ti.height=t.height;let s=Ti.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ti}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=_s("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Un(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Un(e[n]/255)*255):e[n]=Un(e[n]);return{data:e,width:t.width,height:t.height}}else return Ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},gu=0,Gi=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=Qi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(eo(s[a].image)):r.push(eo(s[a]))}else r=eo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function eo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ar.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ct("Texture: Unable to serialize Texture."),{})}var vu=0,no=new k,He=class i extends Mn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=tn,s=tn,r=de,a=sn,o=rn,c=Je,l=i.DEFAULT_ANISOTROPY,u=mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=Qi(),this.name="",this.source=new Gi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(no).x}get height(){return this.source.getSize(no).y}get depth(){return this.source.getSize(no).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ct(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ct(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==zo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wr:t.x=t.x-Math.floor(t.x);break;case tn:t.x=t.x<0?0:1;break;case Tr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wr:t.y=t.y-Math.floor(t.y);break;case tn:t.y=t.y<0?0:1;break;case Tr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=zo;He.DEFAULT_ANISOTROPY=1;var ge=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],u=c[4],p=c[8],h=c[1],d=c[5],v=c[9],S=c[2],g=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(p-S)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(p+S)<.1&&Math.abs(v+g)<.1&&Math.abs(l+d+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(l+1)/2,M=(d+1)/2,b=(f+1)/2,T=(u+h)/4,C=(p+S)/4,x=(v+g)/4;return A>M&&A>b?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=T/n,r=C/n):M>b?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=x/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=C/r,s=x/r),this.set(n,s,r,e),this}let w=Math.sqrt((g-v)*(g-v)+(p-S)*(p-S)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(g-v)/w,this.y=(p-S)/w,this.z=(h-u)/w,this.w=Math.acos((l+d+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this.w=Xt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this.w=Xt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Cr=class extends Mn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:de,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new He(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:de,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Gi(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},fe=class extends Cr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ys=class extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=me,this.minFilter=me,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Rr=class extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=me,this.minFilter=me,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var se=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,c,l,u,p,h,d,v,S,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,u,p,h,d,v,S,g)}set(t,e,n,s,r,a,o,c,l,u,p,h,d,v,S,g){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=p,f[14]=h,f[3]=d,f[7]=v,f[11]=S,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ei.setFromMatrixColumn(t,0).length(),r=1/Ei.setFromMatrixColumn(t,1).length(),a=1/Ei.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let h=a*u,d=a*p,v=o*u,S=o*p;e[0]=c*u,e[4]=-c*p,e[8]=l,e[1]=d+v*l,e[5]=h-S*l,e[9]=-o*c,e[2]=S-h*l,e[6]=v+d*l,e[10]=a*c}else if(t.order==="YXZ"){let h=c*u,d=c*p,v=l*u,S=l*p;e[0]=h+S*o,e[4]=v*o-d,e[8]=a*l,e[1]=a*p,e[5]=a*u,e[9]=-o,e[2]=d*o-v,e[6]=S+h*o,e[10]=a*c}else if(t.order==="ZXY"){let h=c*u,d=c*p,v=l*u,S=l*p;e[0]=h-S*o,e[4]=-a*p,e[8]=v+d*o,e[1]=d+v*o,e[5]=a*u,e[9]=S-h*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let h=a*u,d=a*p,v=o*u,S=o*p;e[0]=c*u,e[4]=v*l-d,e[8]=h*l+S,e[1]=c*p,e[5]=S*l+h,e[9]=d*l-v,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let h=a*c,d=a*l,v=o*c,S=o*l;e[0]=c*u,e[4]=S-h*p,e[8]=v*p+d,e[1]=p,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=d*p+v,e[10]=h-S*p}else if(t.order==="XZY"){let h=a*c,d=a*l,v=o*c,S=o*l;e[0]=c*u,e[4]=-p,e[8]=l*u,e[1]=h*p+S,e[5]=a*u,e[9]=d*p-v,e[2]=v*p-d,e[6]=o*u,e[10]=S*p+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xu,t,_u)}lookAt(t,e,n){let s=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),Vn.crossVectors(n,We),Vn.lengthSq()===0&&(Math.abs(n.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),Vn.crossVectors(n,We)),Vn.normalize(),Js.crossVectors(We,Vn),s[0]=Vn.x,s[4]=Js.x,s[8]=We.x,s[1]=Vn.y,s[5]=Js.y,s[9]=We.y,s[2]=Vn.z,s[6]=Js.z,s[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],p=n[5],h=n[9],d=n[13],v=n[2],S=n[6],g=n[10],f=n[14],w=n[3],A=n[7],M=n[11],b=n[15],T=s[0],C=s[4],x=s[8],E=s[12],P=s[1],I=s[5],z=s[9],V=s[13],O=s[2],L=s[6],B=s[10],q=s[14],Q=s[3],G=s[7],Y=s[11],J=s[15];return r[0]=a*T+o*P+c*O+l*Q,r[4]=a*C+o*I+c*L+l*G,r[8]=a*x+o*z+c*B+l*Y,r[12]=a*E+o*V+c*q+l*J,r[1]=u*T+p*P+h*O+d*Q,r[5]=u*C+p*I+h*L+d*G,r[9]=u*x+p*z+h*B+d*Y,r[13]=u*E+p*V+h*q+d*J,r[2]=v*T+S*P+g*O+f*Q,r[6]=v*C+S*I+g*L+f*G,r[10]=v*x+S*z+g*B+f*Y,r[14]=v*E+S*V+g*q+f*J,r[3]=w*T+A*P+M*O+b*Q,r[7]=w*C+A*I+M*L+b*G,r[11]=w*x+A*z+M*B+b*Y,r[15]=w*E+A*V+M*q+b*J,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],p=t[6],h=t[10],d=t[14],v=t[3],S=t[7],g=t[11],f=t[15],w=c*d-l*h,A=o*d-l*p,M=o*h-c*p,b=a*d-l*u,T=a*h-c*u,C=a*p-o*u;return e*(S*w-g*A+f*M)-n*(v*w-g*b+f*T)+s*(v*A-S*b+f*C)-r*(v*M-S*T+g*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],u=t[10];return e*(a*u-o*l)-n*(r*u-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],p=t[9],h=t[10],d=t[11],v=t[12],S=t[13],g=t[14],f=t[15],w=e*o-n*a,A=e*c-s*a,M=e*l-r*a,b=n*c-s*o,T=n*l-r*o,C=s*l-r*c,x=u*S-p*v,E=u*g-h*v,P=u*f-d*v,I=p*g-h*S,z=p*f-d*S,V=h*f-d*g,O=w*V-A*z+M*I+b*P-T*E+C*x;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/O;return t[0]=(o*V-c*z+l*I)*L,t[1]=(s*z-n*V-r*I)*L,t[2]=(S*C-g*T+f*b)*L,t[3]=(h*T-p*C-d*b)*L,t[4]=(c*P-a*V-l*E)*L,t[5]=(e*V-s*P+r*E)*L,t[6]=(g*M-v*C-f*A)*L,t[7]=(u*C-h*M+d*A)*L,t[8]=(a*z-o*P+l*x)*L,t[9]=(n*P-e*z-r*x)*L,t[10]=(v*T-S*M+f*w)*L,t[11]=(p*M-u*T-d*w)*L,t[12]=(o*E-a*I-c*x)*L,t[13]=(e*I-n*E+s*x)*L,t[14]=(S*A-v*b-g*w)*L,t[15]=(u*b-p*A+h*w)*L,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,p=o+o,h=r*l,d=r*u,v=r*p,S=a*u,g=a*p,f=o*p,w=c*l,A=c*u,M=c*p,b=n.x,T=n.y,C=n.z;return s[0]=(1-(S+f))*b,s[1]=(d+M)*b,s[2]=(v-A)*b,s[3]=0,s[4]=(d-M)*T,s[5]=(1-(h+f))*T,s[6]=(g+w)*T,s[7]=0,s[8]=(v+A)*C,s[9]=(g-w)*C,s[10]=(1-(h+S))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ei.set(s[0],s[1],s[2]).length(),o=Ei.set(s[4],s[5],s[6]).length(),c=Ei.set(s[8],s[9],s[10]).length();r<0&&(a=-a),on.copy(this);let l=1/a,u=1/o,p=1/c;return on.elements[0]*=l,on.elements[1]*=l,on.elements[2]*=l,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=p,on.elements[9]*=p,on.elements[10]*=p,e.setFromRotationMatrix(on),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=un,c=!1){let l=this.elements,u=2*r/(e-t),p=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s),v,S;if(c)v=r/(a-r),S=a*r/(a-r);else if(o===un)v=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===xs)v=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=p,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=un,c=!1){let l=this.elements,u=2/(e-t),p=2/(n-s),h=-(e+t)/(e-t),d=-(n+s)/(n-s),v,S;if(c)v=1/(a-r),S=a/(a-r);else if(o===un)v=-2/(a-r),S=-(a+r)/(a-r);else if(o===xs)v=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=p,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=v,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ei=new k,on=new se,xu=new k(0,0,0),_u=new k(1,1,1),Vn=new k,Js=new k,We=new k,Bl=new se,zl=new bn,Yn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],p=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Xt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Bl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zl.setFromEuler(this),this.setFromQuaternion(zl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yn.DEFAULT_ORDER="XYZ";var Ss=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},yu=0,kl=new k,Ai=new bn,Pn=new se,Ks=new k,hs=new k,Su=new k,Mu=new bn,Vl=new k(1,0,0),Hl=new k(0,1,0),Gl=new k(0,0,1),Wl={type:"added"},bu={type:"removed"},Ci={type:"childadded",child:null},io={type:"childremoved",child:null},en=class i extends Mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=Qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new k,e=new Yn,n=new bn,s=new k(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new Dt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ss,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.premultiply(Ai),this}rotateX(t){return this.rotateOnAxis(Vl,t)}rotateY(t){return this.rotateOnAxis(Hl,t)}rotateZ(t){return this.rotateOnAxis(Gl,t)}translateOnAxis(t,e){return kl.copy(t).applyQuaternion(this.quaternion),this.position.add(kl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vl,t)}translateY(t){return this.translateOnAxis(Hl,t)}translateZ(t){return this.translateOnAxis(Gl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ks.copy(t):Ks.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(hs,Ks,this.up):Pn.lookAt(Ks,hs,this.up),this.quaternion.setFromRotationMatrix(Pn),s&&(Pn.extractRotation(s.matrixWorld),Ai.setFromRotationMatrix(Pn),this.quaternion.premultiply(Ai.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Rt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wl),Ci.child=t,this.dispatchEvent(Ci),Ci.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bu),io.child=t,this.dispatchEvent(io),io.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wl),Ci.child=t,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,t,Su),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,Mu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let p=c[l];r(t.shapes,p)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),p=a(t.shapes),h=a(t.skeletons),d=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};en.DEFAULT_UP=new k(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ye=class extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}},wu={type:"move"},Wi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let S of t.hand.values()){let g=e.getJointPose(S,n),f=this._getHandJoint(l,S);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let u=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],h=u.position.distanceTo(p.position),d=.02,v=.005;l.inputState.pinching&&h>d+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=d-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wu)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ye;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Oc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Qs={h:0,s:0,l:0};function so(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ot=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Wt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Wt.workingColorSpace){if(t=Jo(t,1),e=Xt(e,0,1),n=Xt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=so(a,r,t+1/3),this.g=so(a,r,t),this.b=so(a,r,t-1/3)}return Wt.colorSpaceToWorking(this,s),this}setStyle(t,e=qe){function n(r){r!==void 0&&parseFloat(r)<1&&Ct("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ct("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ct("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){let n=Oc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ct("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Un(t.r),this.g=Un(t.g),this.b=Un(t.b),this}copyLinearToSRGB(t){return this.r=zi(t.r),this.g=zi(t.g),this.b=zi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return Wt.workingToColorSpace(Fe.copy(this),t),Math.round(Xt(Fe.r*255,0,255))*65536+Math.round(Xt(Fe.g*255,0,255))*256+Math.round(Xt(Fe.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.workingToColorSpace(Fe.copy(this),e);let n=Fe.r,s=Fe.g,r=Fe.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let p=a-o;switch(l=u<=.5?p/(a+o):p/(2-a-o),a){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Wt.workingColorSpace){return Wt.workingToColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=qe){Wt.workingToColorSpace(Fe.copy(this),t);let e=Fe.r,n=Fe.g,s=Fe.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Hn),this.setHSL(Hn.h+t,Hn.s+e,Hn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hn),t.getHSL(Qs);let n=ms(Hn.h,Qs.h,e),s=ms(Hn.s,Qs.s,e),r=ms(Hn.l,Qs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fe=new Ot;Ot.NAMES=Oc;var wn=class extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ln=new k,In=new k,ro=new k,Dn=new k,Ri=new k,Pi=new k,Xl=new k,ao=new k,oo=new k,lo=new k,co=new ge,ho=new ge,uo=new ge,qn=class i{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ln.subVectors(t,e),s.cross(ln);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ln.subVectors(s,e),In.subVectors(n,e),ro.subVectors(t,e);let a=ln.dot(ln),o=ln.dot(In),c=ln.dot(ro),l=In.dot(In),u=In.dot(ro),p=a*l-o*o;if(p===0)return r.set(0,0,0),null;let h=1/p,d=(l*c-o*u)*h,v=(a*u-o*c)*h;return r.set(1-d-v,v,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Dn.x),c.addScaledVector(a,Dn.y),c.addScaledVector(o,Dn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return co.setScalar(0),ho.setScalar(0),uo.setScalar(0),co.fromBufferAttribute(t,e),ho.fromBufferAttribute(t,n),uo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(co,r.x),a.addScaledVector(ho,r.y),a.addScaledVector(uo,r.z),a}static isFrontFacing(t,e,n,s){return ln.subVectors(n,e),In.subVectors(t,e),ln.cross(In).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),In.subVectors(this.a,this.b),ln.cross(In).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ri.subVectors(s,n),Pi.subVectors(r,n),ao.subVectors(t,n);let c=Ri.dot(ao),l=Pi.dot(ao);if(c<=0&&l<=0)return e.copy(n);oo.subVectors(t,s);let u=Ri.dot(oo),p=Pi.dot(oo);if(u>=0&&p<=u)return e.copy(s);let h=c*p-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(Ri,a);lo.subVectors(t,r);let d=Ri.dot(lo),v=Pi.dot(lo);if(v>=0&&d<=v)return e.copy(r);let S=d*l-c*v;if(S<=0&&l>=0&&v<=0)return o=l/(l-v),e.copy(n).addScaledVector(Pi,o);let g=u*v-d*p;if(g<=0&&p-u>=0&&d-v>=0)return Xl.subVectors(r,s),o=(p-u)/(p-u+(d-v)),e.copy(s).addScaledVector(Xl,o);let f=1/(g+S+h);return a=S*f,o=h*f,e.copy(n).addScaledVector(Ri,a).addScaledVector(Pi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Zn=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,cn):cn.fromBufferAttribute(r,a),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),js.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),js.copy(n.boundingBox)),js.applyMatrix4(t.matrixWorld),this.union(js)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(us),tr.subVectors(this.max,us),Ii.subVectors(t.a,us),Di.subVectors(t.b,us),Li.subVectors(t.c,us),Gn.subVectors(Di,Ii),Wn.subVectors(Li,Di),oi.subVectors(Ii,Li);let e=[0,-Gn.z,Gn.y,0,-Wn.z,Wn.y,0,-oi.z,oi.y,Gn.z,0,-Gn.x,Wn.z,0,-Wn.x,oi.z,0,-oi.x,-Gn.y,Gn.x,0,-Wn.y,Wn.x,0,-oi.y,oi.x,0];return!fo(e,Ii,Di,Li,tr)||(e=[1,0,0,0,1,0,0,0,1],!fo(e,Ii,Di,Li,tr))?!1:(er.crossVectors(Gn,Wn),e=[er.x,er.y,er.z],fo(e,Ii,Di,Li,tr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ln=[new k,new k,new k,new k,new k,new k,new k,new k],cn=new k,js=new Zn,Ii=new k,Di=new k,Li=new k,Gn=new k,Wn=new k,oi=new k,us=new k,tr=new k,er=new k,li=new k;function fo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){li.fromArray(i,r);let o=s.x*Math.abs(li.x)+s.y*Math.abs(li.y)+s.z*Math.abs(li.z),c=t.dot(li),l=e.dot(li),u=n.dot(li);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var Te=new k,nr=new Ut,Tu=0,Ze=class extends Mn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Dc,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)nr.fromBufferAttribute(this,e),nr.applyMatrix3(t),this.setXY(e,nr.x,nr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Bi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ms=class extends Ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var bs=class extends Ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ne=class extends Ze{constructor(t,e,n){super(new Float32Array(t),e,n)}},Eu=new Zn,ds=new k,po=new k,Xi=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Eu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ds.subVectors(t,this.center);let e=ds.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ds,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(po.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ds.copy(t.center).add(po)),this.expandByPoint(ds.copy(t.center).sub(po))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Au=0,je=new se,mo=new en,Ni=new k,Xe=new Zn,fs=new Zn,Re=new k,Ee=class i extends Mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=Qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kh(t)?bs:Ms)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Dt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,n){return je.makeTranslation(t,e,n),this.applyMatrix4(je),this}scale(t,e,n){return je.makeScale(t,e,n),this.applyMatrix4(je),this}lookAt(t){return mo.lookAt(t),mo.updateMatrix(),this.applyMatrix4(mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ne(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Xe.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let n=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];fs.setFromBufferAttribute(o),this.morphTargetsRelative?(Re.addVectors(Xe.min,fs.min),Xe.expandByPoint(Re),Re.addVectors(Xe.max,fs.max),Xe.expandByPoint(Re)):(Xe.expandByPoint(fs.min),Xe.expandByPoint(fs.max))}Xe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Re));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Re.fromBufferAttribute(o,l),c&&(Ni.fromBufferAttribute(t,l),Re.add(Ni)),s=Math.max(s,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ze(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new k,c[x]=new k;let l=new k,u=new k,p=new k,h=new Ut,d=new Ut,v=new Ut,S=new k,g=new k;function f(x,E,P){l.fromBufferAttribute(n,x),u.fromBufferAttribute(n,E),p.fromBufferAttribute(n,P),h.fromBufferAttribute(r,x),d.fromBufferAttribute(r,E),v.fromBufferAttribute(r,P),u.sub(l),p.sub(l),d.sub(h),v.sub(h);let I=1/(d.x*v.y-v.x*d.y);isFinite(I)&&(S.copy(u).multiplyScalar(v.y).addScaledVector(p,-d.y).multiplyScalar(I),g.copy(p).multiplyScalar(d.x).addScaledVector(u,-v.x).multiplyScalar(I),o[x].add(S),o[E].add(S),o[P].add(S),c[x].add(g),c[E].add(g),c[P].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let x=0,E=w.length;x<E;++x){let P=w[x],I=P.start,z=P.count;for(let V=I,O=I+z;V<O;V+=3)f(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let A=new k,M=new k,b=new k,T=new k;function C(x){b.fromBufferAttribute(s,x),T.copy(b);let E=o[x];A.copy(E),A.sub(b.multiplyScalar(b.dot(E))).normalize(),M.crossVectors(T,E);let I=M.dot(c[x])<0?-1:1;a.setXYZW(x,A.x,A.y,A.z,I)}for(let x=0,E=w.length;x<E;++x){let P=w[x],I=P.start,z=P.count;for(let V=I,O=I+z;V<O;V+=3)C(t.getX(V+0)),C(t.getX(V+1)),C(t.getX(V+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let s=new k,r=new k,a=new k,o=new k,c=new k,l=new k,u=new k,p=new k;if(t)for(let h=0,d=t.count;h<d;h+=3){let v=t.getX(h+0),S=t.getX(h+1),g=t.getX(h+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,g),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,S),l.fromBufferAttribute(n,g),o.add(u),c.add(u),l.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(o,c){let l=o.array,u=o.itemSize,p=o.normalized,h=new l.constructor(c.length*u),d=0,v=0;for(let S=0,g=c.length;S<g;S++){o.isInterleavedBufferAttribute?d=c[S]*o.data.stride+o.offset:d=c[S]*u;for(let f=0;f<u;f++)h[v++]=l[d++]}return new Ze(h,u,p)}if(this.index===null)return Ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,p=l.length;u<p;u++){let h=l[u],d=t(h,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let p=0,h=l.length;p<h;p++){let d=l[p];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],p=r[l];for(let h=0,d=p.length;h<d;h++)u.push(p[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,u=a.length;l<u;l++){let p=a[l];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var go=new k,Cu=new k,Ru=new Dt,hn=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=go.subVectors(n,e).cross(Cu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(go),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ru.getNormalMatrix(t),s=this.coplanarPoint(go).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Pu=0,fi=class extends Mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=Qi(),this.name="",this.type="Material",this.blending=Zi,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ro,this.blendDst=Po,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gr,this.stencilZFail=gr,this.stencilZPass=gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ct(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ct(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ot().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new hn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ut().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ut().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Nn=new k,vo=new k,ir=new k,sr=new k,Pr=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){vo.copy(t).add(e).multiplyScalar(.5),ir.copy(e).sub(t).normalize(),sr.copy(this.origin).sub(vo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ir),o=sr.dot(this.direction),c=-sr.dot(ir),l=sr.lengthSq(),u=Math.abs(1-a*a),p,h,d,v;if(u>0)if(p=a*c-o,h=a*o-c,v=r*u,p>=0)if(h>=-v)if(h<=v){let S=1/u;p*=S,h*=S,d=p*(p+a*h+2*o)+h*(a*p+h+2*c)+l}else h=r,p=Math.max(0,-(a*h+o)),d=-p*p+h*(h+2*c)+l;else h=-r,p=Math.max(0,-(a*h+o)),d=-p*p+h*(h+2*c)+l;else h<=-v?(p=Math.max(0,-(-a*r+o)),h=p>0?-r:Math.min(Math.max(-r,-c),r),d=-p*p+h*(h+2*c)+l):h<=v?(p=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(p=Math.max(0,-(a*r+o)),h=p>0?r:Math.min(Math.max(-r,-c),r),d=-p*p+h*(h+2*c)+l);else h=a>0?-r:r,p=Math.max(0,-(a*h+o)),d=-p*p+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(vo).addScaledVector(ir,h),d}intersectSphere(t,e){if(t.radius<0)return null;Nn.subVectors(t.center,this.origin);let n=Nn.dot(this.direction),s=Nn.dot(Nn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-h.z)*p,c=(t.max.z-h.z)*p):(o=(t.max.z-h.z)*p,c=(t.min.z-h.z)*p),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,p=t.x-a.x,h=t.y-a.y,d=t.z-a.z,v=e.x-a.x,S=e.y-a.y,g=e.z-a.z,f=n.x-a.x,w=n.y-a.y,A=n.z-a.z,M=Math.abs(c),b=Math.abs(l),T=Math.abs(u),C,x,E,P,I,z,V,O,L,B,q,Q;if(M>=b&&M>=T?(E=c,z=p,L=v,Q=f,c>=0?(C=l,x=u,P=h,I=d,V=S,O=g,B=w,q=A):(C=u,x=l,P=d,I=h,V=g,O=S,B=A,q=w)):b>=T?(E=l,z=h,L=S,Q=w,l>=0?(C=u,x=c,P=d,I=p,V=g,O=v,B=A,q=f):(C=c,x=u,P=p,I=d,V=v,O=g,B=f,q=A)):(E=u,z=d,L=g,Q=A,u>=0?(C=c,x=l,P=p,I=h,V=v,O=S,B=f,q=w):(C=l,x=c,P=h,I=p,V=S,O=v,B=w,q=f)),E===0)return null;let G=C/E,Y=x/E,J=1/E,vt=P-G*z,mt=I-Y*z,Gt=V-G*L,It=O-Y*L,zt=B-G*Q,K=q-Y*Q,et=zt*It-K*Gt,xt=vt*K-mt*zt,Pt=Gt*mt-It*vt;if(s){if(et<0||xt<0||Pt<0)return null}else if((et<0||xt<0||Pt<0)&&(et>0||xt>0||Pt>0))return null;let ft=et+xt+Pt;if(ft===0)return null;let Lt=J*(et*z+xt*L+Pt*Q);return(ft>0?Lt<0:Lt>0)?null:this.at(Lt/ft,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ws=class extends fi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=Io,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ql=new se,ci=new Pr,rr=new Xi,Yl=new k,ar=new k,or=new k,lr=new k,xo=new k,cr=new k,Zl=new k,hr=new k,re=class extends en{constructor(t=new Ee,e=new ws){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){cr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],p=r[c];u!==0&&(xo.fromBufferAttribute(p,t),a?cr.addScaledVector(xo,u):cr.addScaledVector(xo.sub(e),u))}e.add(cr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(r),ci.copy(t.ray).recast(t.near),!(rr.containsPoint(ci.origin)===!1&&(ci.intersectSphere(rr,Yl)===null||ci.origin.distanceToSquared(Yl)>(t.far-t.near)**2))&&(ql.copy(r).invert(),ci.copy(t.ray).applyMatrix4(ql),!(n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ci)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,S=h.length;v<S;v++){let g=h[v],f=a[g.materialIndex],w=Math.max(g.start,d.start),A=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let M=w,b=A;M<b;M+=3){let T=o.getX(M),C=o.getX(M+1),x=o.getX(M+2);s=ur(this,f,t,n,l,u,p,T,C,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let v=Math.max(0,d.start),S=Math.min(o.count,d.start+d.count);for(let g=v,f=S;g<f;g+=3){let w=o.getX(g),A=o.getX(g+1),M=o.getX(g+2);s=ur(this,a,t,n,l,u,p,w,A,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,S=h.length;v<S;v++){let g=h[v],f=a[g.materialIndex],w=Math.max(g.start,d.start),A=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let M=w,b=A;M<b;M+=3){let T=M,C=M+1,x=M+2;s=ur(this,f,t,n,l,u,p,T,C,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let v=Math.max(0,d.start),S=Math.min(c.count,d.start+d.count);for(let g=v,f=S;g<f;g+=3){let w=g,A=g+1,M=g+2;s=ur(this,a,t,n,l,u,p,w,A,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Iu(i,t,e,n,s,r,a,o){let c;if(t.side===De?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===jn,o),c===null)return null;hr.copy(o),hr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(hr);return l<e.near||l>e.far?null:{distance:l,point:hr.clone(),object:i}}function ur(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,ar),i.getVertexPosition(c,or),i.getVertexPosition(l,lr);let u=Iu(i,t,e,n,ar,or,lr,Zl);if(u){let p=new k;qn.getBarycoord(Zl,ar,or,lr,p),s&&(u.uv=qn.getInterpolatedAttribute(s,o,c,l,p,new Ut)),r&&(u.uv1=qn.getInterpolatedAttribute(r,o,c,l,p,new Ut)),a&&(u.normal=qn.getInterpolatedAttribute(a,o,c,l,p,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:c,c:l,normal:new k,materialIndex:0};qn.getNormal(ar,or,lr,h.normal),u.face=h,u.barycoord=p}return u}var Ir=class extends He{constructor(t=null,e=1,n=1,s,r,a,o,c,l=me,u=me,p,h){super(null,a,o,c,l,u,s,r,p,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dn=class extends Ze{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}};var hi=new Xi,Du=new Ut(.5,.5),dr=new k,Ts=class{constructor(t=new hn,e=new hn,n=new hn,s=new hn,r=new hn,a=new hn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=un,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],p=r[5],h=r[6],d=r[7],v=r[8],S=r[9],g=r[10],f=r[11],w=r[12],A=r[13],M=r[14],b=r[15];if(s[0].setComponents(l-a,d-u,f-v,b-w).normalize(),s[1].setComponents(l+a,d+u,f+v,b+w).normalize(),s[2].setComponents(l+o,d+p,f+S,b+A).normalize(),s[3].setComponents(l-o,d-p,f-S,b-A).normalize(),n)s[4].setComponents(c,h,g,M).normalize(),s[5].setComponents(l-c,d-h,f-g,b-M).normalize();else if(s[4].setComponents(l-c,d-h,f-g,b-M).normalize(),e===un)s[5].setComponents(l+c,d+h,f+g,b+M).normalize();else if(e===xs)s[5].setComponents(c,h,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(t){hi.center.set(0,0,0);let e=Du.distanceTo(t.center);return hi.radius=.7071067811865476+e,hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(dr.x=s.normal.x>0?t.max.x:t.min.x,dr.y=s.normal.y>0?t.max.y:t.min.y,dr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(dr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Es=class extends He{constructor(t=[],e=ti,n,s,r,a,o,c,l,u){super(t,e,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},As=class extends He{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var nn=class extends He{constructor(t,e,n=Ke,s,r,a,o=me,c=me,l,u=Sn,p=1){if(u!==Sn&&u!==ei)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:p};super(h,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Gi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Dr=class extends nn{constructor(t,e=Ke,n=ti,s,r,a=me,o=me,c,l=Sn){let u={width:t,height:t,depth:1},p=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Cs=class extends He{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},$n=class i extends Ee{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],p=[],h=0,d=0;v("z","y","x",-1,-1,n,e,t,a,r,0),v("z","y","x",1,-1,n,e,-t,a,r,1),v("x","z","y",1,1,t,n,e,s,a,2),v("x","z","y",1,-1,t,n,-e,s,a,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(u,3)),this.setAttribute("uv",new ne(p,2));function v(S,g,f,w,A,M,b,T,C,x,E){let P=M/C,I=b/x,z=M/2,V=b/2,O=T/2,L=C+1,B=x+1,q=0,Q=0,G=new k;for(let Y=0;Y<B;Y++){let J=Y*I-V;for(let vt=0;vt<L;vt++){let mt=vt*P-z;G[S]=mt*w,G[g]=J*A,G[f]=O,l.push(G.x,G.y,G.z),G[S]=0,G[g]=0,G[f]=T>0?1:-1,u.push(G.x,G.y,G.z),p.push(vt/C),p.push(1-Y/x),q+=1}}for(let Y=0;Y<x;Y++)for(let J=0;J<C;J++){let vt=h+J+L*Y,mt=h+J+L*(Y+1),Gt=h+(J+1)+L*(Y+1),It=h+(J+1)+L*Y;c.push(vt,mt,It),c.push(mt,Gt,It),Q+=6}o.addGroup(d,Q,E),d+=Q,h+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var pi=class i extends Ee{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,p=t/o,h=e/c,d=[],v=[],S=[],g=[];for(let f=0;f<u;f++){let w=f*h-a;for(let A=0;A<l;A++){let M=A*p-r;v.push(M,-w,0),S.push(0,0,1),g.push(A/o),g.push(1-f/c)}}for(let f=0;f<c;f++)for(let w=0;w<o;w++){let A=w+l*f,M=w+l*(f+1),b=w+1+l*(f+1),T=w+1+l*f;d.push(A,M,T),d.push(M,b,T)}this.setIndex(d),this.setAttribute("position",new ne(v,3)),this.setAttribute("normal",new ne(S,3)),this.setAttribute("uv",new ne(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Rs=class i extends Ee{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],p=new k,h=new k,d=[],v=[],S=[],g=[];for(let f=0;f<=n;f++){let w=[],A=f/n,M=a+A*o,b=t*Math.cos(M),T=Math.sqrt(t*t-b*b),C=0;f===0&&a===0?C=.5/e:f===n&&c===Math.PI&&(C=-.5/e);for(let x=0;x<=e;x++){let E=x/e,P=s+E*r;p.x=-T*Math.cos(P),p.y=b,p.z=T*Math.sin(P),v.push(p.x,p.y,p.z),h.copy(p).normalize(),S.push(h.x,h.y,h.z),g.push(E+C,1-A),w.push(l++)}u.push(w)}for(let f=0;f<n;f++)for(let w=0;w<e;w++){let A=u[f][w+1],M=u[f][w],b=u[f+1][w],T=u[f+1][w+1];(f!==0||a>0)&&d.push(A,M,T),(f!==n-1||c<Math.PI)&&d.push(M,b,T)}this.setIndex(d),this.setAttribute("position",new ne(v,3)),this.setAttribute("normal",new ne(S,3)),this.setAttribute("uv",new ne(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function vi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if($l(s))s.isRenderTargetTexture?(Ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if($l(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function ze(i){let t={};for(let e=0;e<i.length;e++){let n=vi(i[e]);for(let s in n)t[s]=n[s]}return t}function $l(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Lu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ko(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}var Bc={clone:vi,merge:ze},Nu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,te=class extends fi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nu,this.fragmentShader=Uu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vi(t.uniforms),this.uniformsGroups=Lu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ot().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ut().fromArray(s.value);break;case"v3":this.uniforms[n].value=new k().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ge().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Dt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new se().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Lr=class extends te{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Nr=class extends fi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ur=class extends fi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ui(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function _o(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Jn=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Fr=class extends Jn{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:So,endingEnd:So}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Mo:r=t,o=2*e-n;break;case bo:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Mo:a=t,c=2*n-e;break;case bo:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this._offsetPrev,p=this._offsetNext,h=this._weightPrev,d=this._weightNext,v=(n-e)/(s-e),S=v*v,g=S*v,f=-h*g+2*h*S-h*v,w=(1+h)*g+(-1.5-2*h)*S+(-.5+h)*v+1,A=(-1-d)*g+(1.5+d)*S+.5*v,M=d*g-d*S;for(let b=0;b!==o;++b)r[b]=f*a[u+b]+w*a[l+b]+A*a[c+b]+M*a[p+b];return r}},Or=class extends Jn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=(n-e)/(s-e),p=1-u;for(let h=0;h!==o;++h)r[h]=a[l+h]*p+a[c+h]*u;return r}},Br=class extends Jn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},zr=class extends Jn{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this.inTangents,p=this.outTangents;if(!u||!p){let v=(n-e)/(s-e),S=1-v;for(let g=0;g!==o;++g)r[g]=a[l+g]*S+a[c+g]*v;return r}let h=o*2,d=t-1;for(let v=0;v!==o;++v){let S=a[l+v],g=a[c+v],f=d*h+v*2,w=p[f],A=p[f+1],M=t*h+v*2,b=u[M],T=u[M+1],C=Ou(n,e,w,b,s);r[v]=zc(C,S,A,T,g)}return r}};function zc(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Fu(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Ou(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=zc(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=Fu(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var $e=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ui(e,this.TimeBufferType),this.values=Ui(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ui(t.times,Array),values:Ui(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),_o(t.settings)&&(n.settings={inTangents:Ui(t.settings.inTangents,Array),outTangents:Ui(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Br(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Or(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Fr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new zr(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case gs:e=this.InterpolantFactoryMethodDiscrete;break;case Er:e=this.InterpolantFactoryMethodLinear;break;case mr:e=this.InterpolantFactoryMethodSmooth;break;case yo:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ct("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gs;case this.InterpolantFactoryMethodLinear:return Er;case this.InterpolantFactoryMethodSmooth:return mr;case this.InterpolantFactoryMethodBezier:return yo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;_o(this.settings)&&(Jl(this.settings.inTangents,t),Jl(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Rt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Rt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Rt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Rt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&Qh(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Rt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===mr,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],u=t[o+1];if(l!==u&&(o!==1||l!==t[0]))if(s)c=!0;else{let p=o*n,h=p-n,d=p+n;for(let v=0;v!==n;++v){let S=e[p+v];if(S!==e[h+v]||S!==e[d+v]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let p=o*n,h=a*n;for(let d=0;d!==n;++d)e[h+d]=e[p+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,_o(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Jl(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}$e.prototype.ValueTypeName="";$e.prototype.TimeBufferType=Float32Array;$e.prototype.ValueBufferType=Float32Array;$e.prototype.DefaultInterpolation=Er;var Kn=class extends $e{constructor(t,e,n){super(t,e,n)}};Kn.prototype.ValueTypeName="bool";Kn.prototype.ValueBufferType=Array;Kn.prototype.DefaultInterpolation=gs;Kn.prototype.InterpolantFactoryMethodLinear=void 0;Kn.prototype.InterpolantFactoryMethodSmooth=void 0;var kr=class extends $e{constructor(t,e,n,s){super(t,e,n,s)}};kr.prototype.ValueTypeName="color";var Vr=class extends $e{constructor(t,e,n,s){super(t,e,n,s)}};Vr.prototype.ValueTypeName="number";var Hr=class extends Jn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let u=l+o;l!==u;l+=4)bn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ps=class extends $e{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Hr(this.times,this.values,this.getValueSize(),t)}};Ps.prototype.ValueTypeName="quaternion";Ps.prototype.InterpolantFactoryMethodSmooth=void 0;var Qn=class extends $e{constructor(t,e,n){super(t,e,n)}};Qn.prototype.ValueTypeName="string";Qn.prototype.ValueBufferType=Array;Qn.prototype.DefaultInterpolation=gs;Qn.prototype.InterpolantFactoryMethodLinear=void 0;Qn.prototype.InterpolantFactoryMethodSmooth=void 0;var Gr=class extends $e{constructor(t,e,n,s){super(t,e,n,s)}};Gr.prototype.ValueTypeName="vector";var Wr=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,p){return l.push(u,p),this},this.removeHandler=function(u){let p=l.indexOf(u);return p!==-1&&l.splice(p,2),this},this.getHandler=function(u){for(let p=0,h=l.length;p<h;p+=2){let d=l[p],v=l[p+1];if(d.global&&(d.lastIndex=0),d.test(u))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},kc=new Wr,Xr=class{constructor(t){this.manager=t!==void 0?t:kc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Xr.DEFAULT_MATERIAL_NAME="__DEFAULT";var fr=new k,pr=new bn,yn=new k,Is=class extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(fr,pr,yn),yn.x===1&&yn.y===1&&yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fr,pr,yn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(fr,pr,yn),yn.x===1&&yn.y===1&&yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fr,pr,yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Xn=new k,Kl=new Ut,Ql=new Ut,Oe=class extends Is{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Hi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ps*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hi*2*Math.atan(Math.tan(ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z)}getViewSize(t,e){return this.getViewBounds(t,Kl,Ql),e.subVectors(Ql,Kl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ps*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Fn=class extends Is{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var On=class extends Ee{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Fi=-90,Oi=1,qi=class extends en{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Oe(Fi,Oi,t,e);s.layers=this.layers,this.add(s);let r=new Oe(Fi,Oi,t,e);r.layers=this.layers,this.add(r);let a=new Oe(Fi,Oi,t,e);a.layers=this.layers,this.add(a);let o=new Oe(Fi,Oi,t,e);o.layers=this.layers,this.add(o);let c=new Oe(Fi,Oi,t,e);c.layers=this.layers,this.add(c);let l=new Oe(Fi,Oi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===un)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,p=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(p,h,d),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},qr=class extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Qo="\\[\\]\\.:\\/",Bu=new RegExp("["+Qo+"]","g"),jo="[^"+Qo+"]",zu="[^"+Qo.replace("\\.","")+"]",ku=/((?:WC+[\/:])*)/.source.replace("WC",jo),Vu=/(WCOD+)?/.source.replace("WCOD",zu),Hu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jo),Gu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jo),Wu=new RegExp("^"+ku+Vu+Hu+Gu+"$"),Xu=["material","materials","bones","map"],wo=class{constructor(t,e,n){let s=n||ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ue=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Bu,"")}static parseTrackName(t){let e=Wu.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Xu.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ct("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Rt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Rt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Rt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Rt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Rt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;Rt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ue.Composite=wo;ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ue.prototype.GetterByBindingType=[ue.prototype._getValue_direct,ue.prototype._getValue_array,ue.prototype._getValue_arrayElement,ue.prototype._getValue_toArray];ue.prototype.SetterByBindingTypeAndVersioning=[[ue.prototype._setValue_direct,ue.prototype._setValue_direct_setNeedsUpdate,ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_array,ue.prototype._setValue_array_setNeedsUpdate,ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_arrayElement,ue.prototype._setValue_arrayElement_setNeedsUpdate,ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_fromArray,ue.prototype._setValue_fromArray_setNeedsUpdate,ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var jg=new Float32Array(1);var To=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function tl(i,t,e,n){let s=qu(n);switch(e){case Wo:return i*t;case qo:return i*t/s.components*s.byteLength;case jr:return i*t/s.components*s.byteLength;case ni:return i*t*2/s.components*s.byteLength;case ta:return i*t*2/s.components*s.byteLength;case Xo:return i*t*3/s.components*s.byteLength;case rn:return i*t*4/s.components*s.byteLength;case ea:return i*t*4/s.components*s.byteLength;case Us:case Fs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Os:case Bs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ia:case ra:return Math.max(i,16)*Math.max(t,8)/4;case na:case sa:return Math.max(i,8)*Math.max(t,8)/2;case aa:case oa:case ca:case ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case la:case zs:case ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case pa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ma:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ga:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case va:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case xa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case _a:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ya:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Sa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ma:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ba:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case wa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ta:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ea:case Aa:case Ca:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ra:case Pa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ks:case Ia:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qu(i){switch(i){case Je:case ko:return{byteLength:1,components:1};case Ji:case Vo:case Be:return{byteLength:2,components:1};case Kr:case Qr:return{byteLength:2,components:4};case Ke:case Jr:case pn:return{byteLength:4,components:1};case Ho:case Go:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function lh(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Zu(i){let t=new WeakMap;function e(o,c){let l=o.array,u=o.usage,p=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,c,l){let u=c.array,p=c.updateRanges;if(i.bindBuffer(l,o),p.length===0)i.bufferSubData(l,0,u);else{p.sort((d,v)=>d.start-v.start);let h=0;for(let d=1;d<p.length;d++){let v=p[h],S=p[d];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++h,p[h]=S)}p.length=h+1;for(let d=0,v=p.length;d<v;d++){let S=p[d];i.bufferSubData(l,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var $u=`#ifdef USE_ALPHAHASH
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
}`,Bt={alphahash_fragment:$u,alphahash_pars_fragment:Ju,alphamap_fragment:Ku,alphamap_pars_fragment:Qu,alphatest_fragment:ju,alphatest_pars_fragment:td,aomap_fragment:ed,aomap_pars_fragment:nd,batching_pars_vertex:id,batching_vertex:sd,begin_vertex:rd,beginnormal_vertex:ad,bsdfs:od,iridescence_fragment:ld,bumpmap_pars_fragment:cd,clipping_planes_fragment:hd,clipping_planes_pars_fragment:ud,clipping_planes_pars_vertex:dd,clipping_planes_vertex:fd,color_fragment:pd,color_pars_fragment:md,color_pars_vertex:gd,color_vertex:vd,common:xd,cube_uv_reflection_fragment:_d,defaultnormal_vertex:yd,displacementmap_pars_vertex:Sd,displacementmap_vertex:Md,emissivemap_fragment:bd,emissivemap_pars_fragment:wd,colorspace_fragment:Td,colorspace_pars_fragment:Ed,envmap_fragment:Ad,envmap_common_pars_fragment:Cd,envmap_pars_fragment:Rd,envmap_pars_vertex:Pd,envmap_physical_pars_fragment:Vd,envmap_vertex:Id,fog_vertex:Dd,fog_pars_vertex:Ld,fog_fragment:Nd,fog_pars_fragment:Ud,gradientmap_pars_fragment:Fd,lightmap_pars_fragment:Od,lights_lambert_fragment:Bd,lights_lambert_pars_fragment:zd,lights_pars_begin:kd,lights_toon_fragment:Hd,lights_toon_pars_fragment:Gd,lights_phong_fragment:Wd,lights_phong_pars_fragment:Xd,lights_physical_fragment:qd,lights_physical_pars_fragment:Yd,lights_fragment_begin:Zd,lights_fragment_maps:$d,lights_fragment_end:Jd,lightprobes_pars_fragment:Kd,logdepthbuf_fragment:Qd,logdepthbuf_pars_fragment:jd,logdepthbuf_pars_vertex:tf,logdepthbuf_vertex:ef,map_fragment:nf,map_pars_fragment:sf,map_particle_fragment:rf,map_particle_pars_fragment:af,metalnessmap_fragment:of,metalnessmap_pars_fragment:lf,morphinstance_vertex:cf,morphcolor_vertex:hf,morphnormal_vertex:uf,morphtarget_pars_vertex:df,morphtarget_vertex:ff,normal_fragment_begin:pf,normal_fragment_maps:mf,normal_pars_fragment:gf,normal_pars_vertex:vf,normal_vertex:xf,normalmap_pars_fragment:_f,clearcoat_normal_fragment_begin:yf,clearcoat_normal_fragment_maps:Sf,clearcoat_pars_fragment:Mf,iridescence_pars_fragment:bf,opaque_fragment:wf,packing:Tf,premultiplied_alpha_fragment:Ef,project_vertex:Af,dithering_fragment:Cf,dithering_pars_fragment:Rf,roughnessmap_fragment:Pf,roughnessmap_pars_fragment:If,shadowmap_pars_fragment:Df,shadowmap_pars_vertex:Lf,shadowmap_vertex:Nf,shadowmask_pars_fragment:Uf,skinbase_vertex:Ff,skinning_pars_vertex:Of,skinning_vertex:Bf,skinnormal_vertex:zf,specularmap_fragment:kf,specularmap_pars_fragment:Vf,tonemapping_fragment:Hf,tonemapping_pars_fragment:Gf,transmission_fragment:Wf,transmission_pars_fragment:Xf,uv_pars_fragment:qf,uv_pars_vertex:Yf,uv_vertex:Zf,worldpos_vertex:$f,background_vert:Jf,background_frag:Kf,backgroundCube_vert:Qf,backgroundCube_frag:jf,cube_vert:tp,cube_frag:ep,depth_vert:np,depth_frag:ip,distance_vert:sp,distance_frag:rp,equirect_vert:ap,equirect_frag:op,linedashed_vert:lp,linedashed_frag:cp,meshbasic_vert:hp,meshbasic_frag:up,meshlambert_vert:dp,meshlambert_frag:fp,meshmatcap_vert:pp,meshmatcap_frag:mp,meshnormal_vert:gp,meshnormal_frag:vp,meshphong_vert:xp,meshphong_frag:_p,meshphysical_vert:yp,meshphysical_frag:Sp,meshtoon_vert:Mp,meshtoon_frag:bp,points_vert:wp,points_frag:Tp,shadow_vert:Ep,shadow_frag:Ap,sprite_vert:Cp,sprite_frag:Rp},ht={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},envMapRotation:{value:new Dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},An={basic:{uniforms:ze([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:ze([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Ot(0)},envMapIntensity:{value:1}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:ze([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:ze([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:ze([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:ze([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:ze([ht.points,ht.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:ze([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:ze([ht.common,ht.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:ze([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:ze([ht.sprite,ht.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Dt}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distance:{uniforms:ze([ht.common,ht.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distance_vert,fragmentShader:Bt.distance_frag},shadow:{uniforms:ze([ht.lights,ht.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};An.physical={uniforms:ze([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};var Na={r:0,b:0,g:0},Pp=new se,ch=new Dt;ch.set(-1,0,0,0,1,0,0,0,1);function Ip(i,t,e,n,s,r){let a=new Ot(0),o=s===!0?0:1,c,l,u=null,p=0,h=null;function d(w){let A=w.isScene===!0?w.background:null;if(A&&A.isTexture){let M=w.backgroundBlurriness>0;A=t.get(A,M)}return A}function v(w){let A=!1,M=d(w);M===null?g(a,o):M&&M.isColor&&(g(M,1),A=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(w,A){let M=d(A);M&&(M.isCubeTexture||M.mapping===Ls)?(l===void 0&&(l=new re(new $n(1,1,1),new te({name:"BackgroundCubeMaterial",uniforms:vi(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Pp.makeRotationFromEuler(A.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ch),l.material.toneMapped=Wt.getTransfer(M.colorSpace)!==Qt,(u!==M||p!==M.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,p=M.version,h=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new re(new pi(2,2),new te({name:"BackgroundMaterial",uniforms:vi(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=Wt.getTransfer(M.colorSpace)!==Qt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||p!==M.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,p=M.version,h=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function g(w,A){w.getRGB(Na,Ko(i)),e.buffers.color.setClear(Na.r,Na.g,Na.b,A,r)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,A=1){a.set(w),o=A,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,g(a,o)},render:v,addToRenderList:S,dispose:f}}function Dp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(I,z,V,O,L){let B=!1,q=p(I,O,V,z);r!==q&&(r=q,l(r.object)),B=d(I,O,V,L),B&&v(I,O,V,L),L!==null&&t.update(L,i.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,M(I,z,V,O),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function c(){return i.createVertexArray()}function l(I){return i.bindVertexArray(I)}function u(I){return i.deleteVertexArray(I)}function p(I,z,V,O){let L=O.wireframe===!0,B=n[z.id];B===void 0&&(B={},n[z.id]=B);let q=I.isInstancedMesh===!0?I.id:0,Q=B[q];Q===void 0&&(Q={},B[q]=Q);let G=Q[V.id];G===void 0&&(G={},Q[V.id]=G);let Y=G[L];return Y===void 0&&(Y=h(c()),G[L]=Y),Y}function h(I){let z=[],V=[],O=[];for(let L=0;L<e;L++)z[L]=0,V[L]=0,O[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:V,attributeDivisors:O,object:I,attributes:{},index:null}}function d(I,z,V,O){let L=r.attributes,B=z.attributes,q=0,Q=V.getAttributes();for(let G in Q)if(Q[G].location>=0){let J=L[G],vt=B[G];if(vt===void 0&&(G==="instanceMatrix"&&I.instanceMatrix&&(vt=I.instanceMatrix),G==="instanceColor"&&I.instanceColor&&(vt=I.instanceColor)),J===void 0||J.attribute!==vt||vt&&J.data!==vt.data)return!0;q++}return r.attributesNum!==q||r.index!==O}function v(I,z,V,O){let L={},B=z.attributes,q=0,Q=V.getAttributes();for(let G in Q)if(Q[G].location>=0){let J=B[G];J===void 0&&(G==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),G==="instanceColor"&&I.instanceColor&&(J=I.instanceColor));let vt={};vt.attribute=J,J&&J.data&&(vt.data=J.data),L[G]=vt,q++}r.attributes=L,r.attributesNum=q,r.index=O}function S(){let I=r.newAttributes;for(let z=0,V=I.length;z<V;z++)I[z]=0}function g(I){f(I,0)}function f(I,z){let V=r.newAttributes,O=r.enabledAttributes,L=r.attributeDivisors;V[I]=1,O[I]===0&&(i.enableVertexAttribArray(I),O[I]=1),L[I]!==z&&(i.vertexAttribDivisor(I,z),L[I]=z)}function w(){let I=r.newAttributes,z=r.enabledAttributes;for(let V=0,O=z.length;V<O;V++)z[V]!==I[V]&&(i.disableVertexAttribArray(V),z[V]=0)}function A(I,z,V,O,L,B,q){q===!0?i.vertexAttribIPointer(I,z,V,L,B):i.vertexAttribPointer(I,z,V,O,L,B)}function M(I,z,V,O){S();let L=O.attributes,B=V.getAttributes(),q=z.defaultAttributeValues;for(let Q in B){let G=B[Q];if(G.location>=0){let Y=L[Q];if(Y===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(Y=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(Y=I.instanceColor)),Y!==void 0){let J=Y.normalized,vt=Y.itemSize,mt=t.get(Y);if(mt===void 0)continue;let Gt=mt.buffer,It=mt.type,zt=mt.bytesPerElement,K=It===i.INT||It===i.UNSIGNED_INT||Y.gpuType===Jr;if(Y.isInterleavedBufferAttribute){let et=Y.data,xt=et.stride,Pt=Y.offset;if(et.isInstancedInterleavedBuffer){for(let ft=0;ft<G.locationSize;ft++)f(G.location+ft,et.meshPerAttribute);I.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let ft=0;ft<G.locationSize;ft++)g(G.location+ft);i.bindBuffer(i.ARRAY_BUFFER,Gt);for(let ft=0;ft<G.locationSize;ft++)A(G.location+ft,vt/G.locationSize,It,J,xt*zt,(Pt+vt/G.locationSize*ft)*zt,K)}else{if(Y.isInstancedBufferAttribute){for(let et=0;et<G.locationSize;et++)f(G.location+et,Y.meshPerAttribute);I.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let et=0;et<G.locationSize;et++)g(G.location+et);i.bindBuffer(i.ARRAY_BUFFER,Gt);for(let et=0;et<G.locationSize;et++)A(G.location+et,vt/G.locationSize,It,J,vt*zt,vt/G.locationSize*et*zt,K)}}else if(q!==void 0){let J=q[Q];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(G.location,J);break;case 3:i.vertexAttrib3fv(G.location,J);break;case 4:i.vertexAttrib4fv(G.location,J);break;default:i.vertexAttrib1fv(G.location,J)}}}}w()}function b(){E();for(let I in n){let z=n[I];for(let V in z){let O=z[V];for(let L in O){let B=O[L];for(let q in B)u(B[q].object),delete B[q];delete O[L]}}delete n[I]}}function T(I){if(n[I.id]===void 0)return;let z=n[I.id];for(let V in z){let O=z[V];for(let L in O){let B=O[L];for(let q in B)u(B[q].object),delete B[q];delete O[L]}}delete n[I.id]}function C(I){for(let z in n){let V=n[z];for(let O in V){let L=V[O];if(L[I.id]===void 0)continue;let B=L[I.id];for(let q in B)u(B[q].object),delete B[q];delete L[I.id]}}}function x(I){for(let z in n){let V=n[z],O=I.isInstancedMesh===!0?I.id:0,L=V[O];if(L!==void 0){for(let B in L){let q=L[B];for(let Q in q)u(q[Q].object),delete q[Q];delete L[B]}delete V[O],Object.keys(V).length===0&&delete n[z]}}}function E(){P(),a=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:P,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:S,enableAttribute:g,disableUnusedAttributes:w}}function Lp(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function o(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let d=0;d<u;d++)h+=l[d];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Np(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==rn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let x=C===Be&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Je&&C!==pn&&!x&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(Ct("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let p=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:w,maxVaryings:A,maxFragmentUniforms:M,maxSamples:b,samples:T}}function Up(i){let t=this,e=null,n=0,s=!1,r=!1,a=new hn,o=new Dt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){let d=p.length!==0||h||n!==0||s;return s=h,n=p.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,h){e=u(p,h,0)},this.setState=function(p,h,d){let v=p.clippingPlanes,S=p.clipIntersection,g=p.clipShadows,f=i.get(p);if(!s||v===null||v.length===0||r&&!g)r?u(null):l();else{let w=r?0:n,A=w*4,M=f.clippingState||null;c.value=M,M=u(v,h,A,d);for(let b=0;b!==A;++b)M[b]=e[b];f.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(p,h,d,v){let S=p!==null?p.length:0,g=null;if(S!==0){if(g=c.value,v!==!0||g===null){let f=d+S*4,w=h.matrixWorldInverse;o.getNormalMatrix(w),(g===null||g.length<f)&&(g=new Float32Array(f));for(let A=0,M=d;A!==S;++A,M+=4)a.copy(p[A]).applyMatrix4(w,o),a.normal.toArray(g,M),g[M+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,g}}var ts=4,Fp=6,Op=20,Bp=256,Vs=new Fn,Vc=new Ot,el=null,nl=0,il=0,sl=!1,zp=new k,xi=new k,Fa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=zp}=r;el=this._renderer.getRenderTarget(),nl=this._renderer.getActiveCubeFace(),il=this._renderer.getActiveMipmapLevel(),sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(el,nl,il),this._renderer.xr.enabled=sl,t.scissorTest=!1,ji(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ti||t.mapping===gi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),el=this._renderer.getRenderTarget(),nl=this._renderer.getActiveCubeFace(),il=this._renderer.getActiveMipmapLevel(),sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:de,minFilter:de,generateMipmaps:!1,type:Be,format:rn,colorSpace:di,depthBuffer:!1},s=Hc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hc(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=kp(r)),this._blurMaterial=Hp(r,t,e),this._ggxMaterial=Vp(r,t,e)}return s}_compileMaterial(t){let e=new re(new Ee,t);this._renderer.compile(e,Vs)}_sceneToCubeUV(t,e,n,s,r){let c=new Oe(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],p=this._renderer,h=p.autoClear,d=p.toneMapping;p.getClearColor(Vc),p.toneMapping=fn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new re(new $n,new ws({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,g=S.material,f=!1,w=t.background;w?w.isColor&&(g.color.copy(w),t.background=null,f=!0):(g.color.copy(Vc),f=!0);for(let A=0;A<6;A++){let M=A%3;M===0?(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[A],r.y,r.z)):M===1?(c.up.set(0,0,l[A]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[A],r.z)):(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[A]));let b=this._cubeSize;ji(s,M*b,A>2?b:0,b,b),p.setRenderTarget(s),f&&p.render(S,c),p.render(t,c)}p.toneMapping=d,p.autoClear=h,t.background=w}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ti||t.mapping===gi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;ji(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Vs)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),p=Math.sqrt(l*l-u*u),h=l*1.25,d=p*h,{_lodMax:v}=this,S=this._sizeLods[n],g=3*S*(n>v-ts?n-v+ts:0),f=4*(this._cubeSize-S);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=v-e,ji(r,g,f,3*S,2*S),s.setRenderTarget(r),s.render(o,Vs),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=v-n,ji(t,g,f,3*S,2*S),s.setRenderTarget(t),s.render(o,Vs)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],p=3*u*(s>this._lodMax-ts?s-this._lodMax+ts:0),h=4*(this._cubeSize-u);ji(e,p,h,3*u,2*u),a.setRenderTarget(e),a.render(c,Vs)}};function kp(i){let t=[],e=[],n=i,s=i-ts+1+Fp;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],p=6,h=6,d=3,v=new Float32Array(d*h*p),S=new Float32Array(d*h*p);for(let f=0;f<p;f++){let w=f%3*2/3-1,A=f>2?0:-1,M=[w,A,0,w+2/3,A,0,w+2/3,A+1,0,w,A,0,w+2/3,A+1,0,w,A+1,0];v.set(M,d*h*f);for(let b=0;b<h;b++){let T=u[b*2]*2-1,C=u[b*2+1]*2-1;f===0?xi.set(1,C,T):f===1?xi.set(-T,1,-C):f===2?xi.set(-T,C,1):f===3?xi.set(-1,C,-T):f===4?xi.set(-T,-1,C):xi.set(T,C,-1),xi.toArray(S,(f*h+b)*d)}}let g=new Ee;g.setAttribute("position",new Ze(v,d)),g.setAttribute("outputDirection",new Ze(S,d)),e.push(new re(g,null)),n>ts&&n--}return{lodMeshes:e,sizeLods:t}}function Hc(i,t,e){let n=new fe(i,t,e);return n.texture.mapping=Ls,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ji(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Vp(i,t,e){return new te({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Bp,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ba(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Hp(i,t,e){return new te({name:"SphericalGaussianBlur",defines:{SAMPLES:Op,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ba(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Gc(){return new te({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ba(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Wc(){return new te({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Ba(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ns=class extends fe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Es(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $n(5,5,5),r=new te({name:"CubemapFromEquirect",uniforms:vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:Tn});r.uniforms.tEquirect.value=e;let a=new re(s,r),o=e.minFilter;return e.minFilter===sn&&(e.minFilter=de),new qi(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Gp(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===Yr||d===Zr)if(t.has(h)){let v=t.get(h).texture;return o(v,h.mapping)}else{let v=h.image;if(v&&v.height>0){let S=new ns(v.height);return S.fromEquirectangularTexture(i,h),t.set(h,S),h.addEventListener("dispose",l),o(S.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let d=h.mapping,v=d===Yr||d===Zr,S=d===ti||d===gi;if(v||S){let g=e.get(h),f=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return n===null&&(n=new Fa(i)),g=v?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{let w=h.image;return v&&w&&w.height>0||S&&w&&c(w)?(n===null&&(n=new Fa(i)),g=v?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,d){return d===Yr?h.mapping=ti:d===Zr&&(h.mapping=gi),h}function c(h){let d=0,v=6;for(let S=0;S<v;S++)h[S]!==void 0&&d++;return d===v}function l(h){let d=h.target;d.removeEventListener("dispose",l);let v=t.get(d);v!==void 0&&(t.delete(d),v.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let v=e.get(d);v!==void 0&&(e.delete(d),v.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function Wp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ui("WebGLRenderer: "+n+" extension not supported."),s}}}function Xp(i,t,e,n){let s={},r=new WeakMap;function a(p){let h=p.target;h.index!==null&&t.remove(h.index);for(let v in h.attributes)t.remove(h.attributes[v]);h.removeEventListener("dispose",a),delete s[h.id];let d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(p,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function c(p){let h=p.attributes;for(let d in h)t.update(h[d],i.ARRAY_BUFFER)}function l(p){let h=[],d=p.index,v=p.attributes.position,S=0;if(v===void 0)return;if(d!==null){let w=d.array;S=d.version;for(let A=0,M=w.length;A<M;A+=3){let b=w[A+0],T=w[A+1],C=w[A+2];h.push(b,T,T,C,C,b)}}else{let w=v.array;S=v.version;for(let A=0,M=w.length/3-1;A<M;A+=3){let b=A+0,T=A+1,C=A+2;h.push(b,T,T,C,C,b)}}let g=new(v.count>=65535?bs:Ms)(h,1);g.version=S;let f=r.get(p);f&&t.remove(f),r.set(p,g)}function u(p){let h=r.get(p);if(h){let d=p.index;d!==null&&h.version<d.version&&l(p)}else l(p);return r.get(p)}return{get:o,update:c,getWireframeAttribute:u}}function qp(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function c(p,h){i.drawElements(n,h,r,p*a),e.update(h,n,1)}function l(p,h,d){d!==0&&(i.drawElementsInstanced(n,h,r,p*a,d),e.update(h,n,d))}function u(p,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,p,0,d);let S=0;for(let g=0;g<d;g++)S+=h[g];e.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Yp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Rt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Zp(i,t,e){let n=new WeakMap,s=new ge;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==p){let E=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();let d=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],A=0;d===!0&&(A=1),v===!0&&(A=2),S===!0&&(A=3);let M=o.attributes.position.count*A,b=1;M>t.maxTextureSize&&(b=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let T=new Float32Array(M*b*4*p),C=new ys(T,M,b,p);C.type=pn,C.needsUpdate=!0;let x=A*4;for(let P=0;P<p;P++){let I=g[P],z=f[P],V=w[P],O=M*b*4*P;for(let L=0;L<I.count;L++){let B=L*x;d===!0&&(s.fromBufferAttribute(I,L),T[O+B+0]=s.x,T[O+B+1]=s.y,T[O+B+2]=s.z,T[O+B+3]=0),v===!0&&(s.fromBufferAttribute(z,L),T[O+B+4]=s.x,T[O+B+5]=s.y,T[O+B+6]=s.z,T[O+B+7]=0),S===!0&&(s.fromBufferAttribute(V,L),T[O+B+8]=s.x,T[O+B+9]=s.y,T[O+B+10]=s.z,T[O+B+11]=V.itemSize===4?s.w:1)}}h={count:p,texture:C,size:new Ut(M,b)},n.set(o,h),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let S=0;S<l.length;S++)d+=l[S];let v=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function $p(i,t,e,n,s){let r=new WeakMap;function a(l){let u=s.render.frame,p=l.geometry,h=t.get(l,p);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var Jp={[Do]:"LINEAR_TONE_MAPPING",[Lo]:"REINHARD_TONE_MAPPING",[No]:"CINEON_TONE_MAPPING",[Uo]:"ACES_FILMIC_TONE_MAPPING",[Oo]:"AGX_TONE_MAPPING",[Bo]:"NEUTRAL_TONE_MAPPING",[Fo]:"CUSTOM_TONE_MAPPING"};function Kp(i,t,e,n,s,r){let a=new fe(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Ee;l.setAttribute("position",new ne([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ne([0,2,0,0,2,0],2));let u=new Lr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new re(l,u),h=new Fn(-1,1,1,-1,0,1),d=null,v=null,S=!1,g,f=null,w=[],A=!1;this.setSize=function(M,b){a.setSize(M,b),o!==null&&o.setSize(M,b),c!==null&&c.setSize(M,b);for(let T=0;T<w.length;T++){let C=w[T];C.setSize&&C.setSize(M,b)}},this.setEffects=function(M){w=M,A=w.length>0&&w[0].isRenderPass===!0;let b=a.width,T=a.height;w.length>0&&o===null&&(o=new fe(b,T,{type:Be,depthBuffer:!1,stencilBuffer:!1}),c=new fe(b,T,{type:Be,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<w.length;C++){let x=w[C];x.setSize&&x.setSize(b,T)}},this.begin=function(M,b){if(S||M.toneMapping===fn&&w.length===0)return!1;if(f=b,b!==null){let T=b.width,C=b.height;(a.width!==T||a.height!==C)&&this.setSize(T,C)}return A===!1&&M.setRenderTarget(a),g=M.toneMapping,M.toneMapping=fn,!0},this.hasRenderPass=function(){return A},this.end=function(M,b){M.toneMapping=g,S=!0;let T=a,C=o;for(let x=0;x<w.length;x++){let E=w[x];E.enabled!==!1&&(E.render(M,C,T,b),E.needsSwap!==!1&&(T=C,C=C===o?c:o))}if(d!==M.outputColorSpace||v!==M.toneMapping){d=M.outputColorSpace,v=M.toneMapping,u.defines={},Wt.getTransfer(d)===Qt&&(u.defines.SRGB_TRANSFER="");let x=Jp[v];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,M.setRenderTarget(f),M.render(p,h),f=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var hh=new He,ol=new nn(1,1),uh=new ys,dh=new Rr,fh=new Es,Xc=[],qc=[],Yc=new Float32Array(16),Zc=new Float32Array(9),$c=new Float32Array(4);function is(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Xc[s];if(r===void 0&&(r=new Float32Array(s),Xc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function za(i,t){let e=qc[t];e===void 0&&(e=new Int32Array(t),qc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Qp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function jp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function tm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function em(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function nm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;$c.set(n),i.uniformMatrix2fv(this.addr,!1,$c),Ce(e,n)}}function im(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;Zc.set(n),i.uniformMatrix3fv(this.addr,!1,Zc),Ce(e,n)}}function sm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;Yc.set(n),i.uniformMatrix4fv(this.addr,!1,Yc),Ce(e,n)}}function rm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function am(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function om(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function lm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function cm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function hm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function um(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function dm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function fm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ol.compareFunction=e.isReversedDepthBuffer()?La:Da,r=ol):r=hh,e.setTexture2D(t||r,s)}function pm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||dh,s)}function mm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||fh,s)}function gm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||uh,s)}function vm(i){switch(i){case 5126:return Qp;case 35664:return jp;case 35665:return tm;case 35666:return em;case 35674:return nm;case 35675:return im;case 35676:return sm;case 5124:case 35670:return rm;case 35667:case 35671:return am;case 35668:case 35672:return om;case 35669:case 35673:return lm;case 5125:return cm;case 36294:return hm;case 36295:return um;case 36296:return dm;case 35678:case 36198:case 36298:case 36306:case 35682:return fm;case 35679:case 36299:case 36307:return pm;case 35680:case 36300:case 36308:case 36293:return mm;case 36289:case 36303:case 36311:case 36292:return gm}}function xm(i,t){i.uniform1fv(this.addr,t)}function _m(i,t){let e=is(t,this.size,2);i.uniform2fv(this.addr,e)}function ym(i,t){let e=is(t,this.size,3);i.uniform3fv(this.addr,e)}function Sm(i,t){let e=is(t,this.size,4);i.uniform4fv(this.addr,e)}function Mm(i,t){let e=is(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function bm(i,t){let e=is(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function wm(i,t){let e=is(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Tm(i,t){i.uniform1iv(this.addr,t)}function Em(i,t){i.uniform2iv(this.addr,t)}function Am(i,t){i.uniform3iv(this.addr,t)}function Cm(i,t){i.uniform4iv(this.addr,t)}function Rm(i,t){i.uniform1uiv(this.addr,t)}function Pm(i,t){i.uniform2uiv(this.addr,t)}function Im(i,t){i.uniform3uiv(this.addr,t)}function Dm(i,t){i.uniform4uiv(this.addr,t)}function Lm(i,t,e){let n=this.cache,s=t.length,r=za(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ol:a=hh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Nm(i,t,e){let n=this.cache,s=t.length,r=za(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||dh,r[a])}function Um(i,t,e){let n=this.cache,s=t.length,r=za(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||fh,r[a])}function Fm(i,t,e){let n=this.cache,s=t.length,r=za(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||uh,r[a])}function Om(i){switch(i){case 5126:return xm;case 35664:return _m;case 35665:return ym;case 35666:return Sm;case 35674:return Mm;case 35675:return bm;case 35676:return wm;case 5124:case 35670:return Tm;case 35667:case 35671:return Em;case 35668:case 35672:return Am;case 35669:case 35673:return Cm;case 5125:return Rm;case 36294:return Pm;case 36295:return Im;case 36296:return Dm;case 35678:case 36198:case 36298:case 36306:case 35682:return Lm;case 35679:case 36299:case 36307:return Nm;case 35680:case 36300:case 36308:case 36293:return Um;case 36289:case 36303:case 36311:case 36292:return Fm}}var ll=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=vm(e.type)}},cl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Om(e.type)}},hl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},rl=/(\w+)(\])?(\[|\.)?/g;function Jc(i,t){i.seq.push(t),i.map[t.id]=t}function Bm(i,t,e){let n=i.name,s=n.length;for(rl.lastIndex=0;;){let r=rl.exec(n),a=rl.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Jc(e,l===void 0?new ll(o,i,t):new cl(o,i,t));break}else{let p=e.map[o];p===void 0&&(p=new hl(o),Jc(e,p)),e=p}}}var es=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);Bm(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Kc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var zm=37297,km=0;function Vm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Qc=new Dt;function Hm(i){Wt._getMatrix(Qc,Wt.workingColorSpace,i);let t=`mat3( ${Qc.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(i)){case vs:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return Ct("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function jc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Vm(i.getShaderSource(t),o)}else return r}function Gm(i,t){let e=Hm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Wm={[Do]:"Linear",[Lo]:"Reinhard",[No]:"Cineon",[Uo]:"ACESFilmic",[Oo]:"AgX",[Bo]:"Neutral",[Fo]:"Custom"};function Xm(i,t){let e=Wm[t];return e===void 0?(Ct("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ua=new k;function qm(){Wt.getLuminanceCoefficients(Ua);let i=Ua.x.toFixed(4),t=Ua.y.toFixed(4),e=Ua.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ym(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function Zm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $m(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Gs(i){return i!==""}function th(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function eh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Jm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ul(i){return i.replace(Jm,Qm)}var Km=new Map;function Qm(i,t){let e=Bt[t];if(e===void 0){let n=Km.get(t);if(n!==void 0)e=Bt[n],Ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ul(e)}var jm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nh(i){return i.replace(jm,t0)}function t0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ih(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var e0={[Ds]:"SHADOWMAP_TYPE_PCF",[Yi]:"SHADOWMAP_TYPE_VSM"};function n0(i){return e0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var i0={[ti]:"ENVMAP_TYPE_CUBE",[gi]:"ENVMAP_TYPE_CUBE",[Ls]:"ENVMAP_TYPE_CUBE_UV"};function s0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":i0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var r0={[gi]:"ENVMAP_MODE_REFRACTION"};function a0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":r0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var o0={[Io]:"ENVMAP_BLENDING_MULTIPLY",[yc]:"ENVMAP_BLENDING_MIX",[Sc]:"ENVMAP_BLENDING_ADD"};function l0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":o0[i.combine]||"ENVMAP_BLENDING_NONE"}function c0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function h0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=n0(e),l=s0(e),u=a0(e),p=l0(e),h=c0(e),d=Ym(e),v=Zm(r),S=s.createProgram(),g,f,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Gs).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Gs).join(`
`),f.length>0&&(f+=`
`)):(g=[ih(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),f=[ih(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fn?"#define TONE_MAPPING":"",e.toneMapping!==fn?Bt.tonemapping_pars_fragment:"",e.toneMapping!==fn?Xm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,Gm("linearToOutputTexel",e.outputColorSpace),qm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gs).join(`
`)),a=ul(a),a=th(a,e),a=eh(a,e),o=ul(o),o=th(o,e),o=eh(o,e),a=nh(a),o=nh(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",e.glslVersion===Zo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let A=w+g+a,M=w+f+o,b=Kc(s,s.VERTEX_SHADER,A),T=Kc(s,s.FRAGMENT_SHADER,M);s.attachShader(S,b),s.attachShader(S,T),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function C(I){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(S)||"",V=s.getShaderInfoLog(b)||"",O=s.getShaderInfoLog(T)||"",L=z.trim(),B=V.trim(),q=O.trim(),Q=!0,G=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,b,T);else{let Y=jc(s,b,"vertex"),J=jc(s,T,"fragment");Rt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+L+`
`+Y+`
`+J)}else L!==""?Ct("WebGLProgram: Program Info Log:",L):(B===""||q==="")&&(G=!1);G&&(I.diagnostics={runnable:Q,programLog:L,vertexShader:{log:B,prefix:g},fragmentShader:{log:q,prefix:f}})}s.deleteShader(b),s.deleteShader(T),x=new es(s,S),E=$m(s,S)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(S,zm)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=km++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=b,this.fragmentShader=T,this}var u0=0,dl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new fl(t),e.set(t,n)),n}},fl=class{constructor(t){this.id=u0++,this.code=t,this.usedTimes=0}};function d0(i){return i===ni||i===zs||i===ks}function f0(i,t,e,n,s,r){let a=new Ss,o=new dl,c=new Set,l=[],u=new Map,p=n.logarithmicDepthBuffer,h=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return c.add(x),x===0?"uv":`uv${x}`}function S(x,E,P,I,z,V){let O=I.fog,L=z.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Q=t.get(x.envMap||B,q),G=Q&&Q.mapping===Ls?Q.image.height:null,Y=d[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Ct("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let J=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,vt=J!==void 0?J.length:0,mt=0;L.morphAttributes.position!==void 0&&(mt=1),L.morphAttributes.normal!==void 0&&(mt=2),L.morphAttributes.color!==void 0&&(mt=3);let Gt,It,zt,K;if(Y){let le=An[Y];Gt=le.vertexShader,It=le.fragmentShader}else{Gt=x.vertexShader,It=x.fragmentShader;let le=o.getVertexShaderStage(x),Jt=o.getFragmentShaderStage(x);o.update(x,le,Jt),zt=le.id,K=Jt.id}let et=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),Pt=z.isInstancedMesh===!0,ft=z.isBatchedMesh===!0,Lt=!!x.map,xe=!!x.matcap,kt=!!Q,qt=!!x.aoMap,jt=!!x.lightMap,Vt=!!x.bumpMap&&x.wireframe===!1,$t=!!x.normalMap,ye=!!x.displacementMap,Ie=!!x.emissiveMap,oe=!!x.metalnessMap,pe=!!x.roughnessMap,U=x.anisotropy>0,be=x.clearcoat>0,Zt=x.dispersion>0,y=x.retroreflectivity>0,m=x.iridescence>0,R=x.sheen>0,N=x.transmission>0,H=U&&!!x.anisotropyMap,it=be&&!!x.clearcoatMap,st=be&&!!x.clearcoatNormalMap,$=be&&!!x.clearcoatRoughnessMap,j=m&&!!x.iridescenceMap,at=m&&!!x.iridescenceThicknessMap,Mt=R&&!!x.sheenColorMap,rt=R&&!!x.sheenRoughnessMap,ot=!!x.specularMap,wt=!!x.specularColorMap,At=!!x.specularIntensityMap,Nt=N&&!!x.transmissionMap,F=N&&!!x.thicknessMap,lt=!!x.gradientMap,tt=!!x.alphaMap,ct=x.alphaTest>0,pt=!!x.alphaHash,nt=!!x.extensions,Et=fn;x.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Et=i.toneMapping);let bt={shaderID:Y,shaderType:x.type,shaderName:x.name,vertexShader:Gt,fragmentShader:It,defines:x.defines,customVertexShaderID:zt,customFragmentShaderID:K,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:ft,batchingColor:ft&&z._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&z.instanceColor!==null,instancingMorph:Pt&&z.morphTexture!==null,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Wt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Lt,matcap:xe,envMap:kt,envMapMode:kt&&Q.mapping,envMapCubeUVHeight:G,aoMap:qt,lightMap:jt,bumpMap:Vt,normalMap:$t,displacementMap:ye,emissiveMap:Ie,normalMapObjectSpace:$t&&x.normalMapType===wc,normalMapTangentSpace:$t&&x.normalMapType===Yo,packedNormalMap:$t&&x.normalMapType===Yo&&d0(x.normalMap.format),metalnessMap:oe,roughnessMap:pe,anisotropy:U,anisotropyMap:H,clearcoat:be,clearcoatMap:it,clearcoatNormalMap:st,clearcoatRoughnessMap:$,dispersion:Zt,retroreflection:y,iridescence:m,iridescenceMap:j,iridescenceThicknessMap:at,sheen:R,sheenColorMap:Mt,sheenRoughnessMap:rt,specularMap:ot,specularColorMap:wt,specularIntensityMap:At,transmission:N,transmissionMap:Nt,thicknessMap:F,gradientMap:lt,opaque:x.transparent===!1&&x.blending===Zi&&x.alphaToCoverage===!1,alphaMap:tt,alphaTest:ct,alphaHash:pt,combine:x.combine,mapUv:Lt&&v(x.map.channel),aoMapUv:qt&&v(x.aoMap.channel),lightMapUv:jt&&v(x.lightMap.channel),bumpMapUv:Vt&&v(x.bumpMap.channel),normalMapUv:$t&&v(x.normalMap.channel),displacementMapUv:ye&&v(x.displacementMap.channel),emissiveMapUv:Ie&&v(x.emissiveMap.channel),metalnessMapUv:oe&&v(x.metalnessMap.channel),roughnessMapUv:pe&&v(x.roughnessMap.channel),anisotropyMapUv:H&&v(x.anisotropyMap.channel),clearcoatMapUv:it&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:st&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:at&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:rt&&v(x.sheenRoughnessMap.channel),specularMapUv:ot&&v(x.specularMap.channel),specularColorMapUv:wt&&v(x.specularColorMap.channel),specularIntensityMapUv:At&&v(x.specularIntensityMap.channel),transmissionMapUv:Nt&&v(x.transmissionMap.channel),thicknessMapUv:F&&v(x.thicknessMap.channel),alphaMapUv:tt&&v(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&($t||U),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!L.attributes.uv&&(Lt||tt),fog:!!O,useFog:x.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&$t===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:xt,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:mt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Et,decodeVideoTexture:Lt&&x.map.isVideoTexture===!0&&Wt.getTransfer(x.map.colorSpace)===Qt,decodeVideoTextureEmissive:Ie&&x.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(x.emissiveMap.colorSpace)===Qt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Pe,flipSided:x.side===De,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:nt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&x.extensions.multiDraw===!0||ft)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return bt.vertexUv1s=c.has(1),bt.vertexUv2s=c.has(2),bt.vertexUv3s=c.has(3),c.clear(),bt}function g(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)E.push(P),E.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(f(E,x),w(E,x),E.push(i.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function f(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numSunLights),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numSunLightShadows),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function w(x,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function A(x){let E=d[x.type],P;if(E){let I=An[E];P=Bc.clone(I.uniforms)}else P=x.uniforms;return P}function M(x,E){let P=u.get(E);return P!==void 0?++P.usedTimes:(P=new h0(i,E,x,s),l.push(P),u.set(E,P)),P}function b(x){if(--x.usedTimes===0){let E=l.indexOf(x);l[E]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function C(){o.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:A,acquireProgram:M,releaseProgram:b,releaseShaderCache:T,programs:l,dispose:C}}function p0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function m0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function sh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function rh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,v,S,g,f){let w=i[t];return w===void 0?(w={id:h.id,object:h,geometry:d,material:v,materialVariant:a(h),groupOrder:S,renderOrder:h.renderOrder,z:g,group:f},i[t]=w):(w.id=h.id,w.object=h,w.geometry=d,w.material=v,w.materialVariant=a(h),w.groupOrder=S,w.renderOrder=h.renderOrder,w.z=g,w.group=f),t++,w}function c(h,d,v,S,g,f,w){w.reversedDepth===!0&&(g=-g);let A=o(h,d,v,S,g,f);v.transmission>0?n.push(A):v.transparent===!0?s.push(A):e.push(A)}function l(h,d,v,S,g,f){let w=o(h,d,v,S,g,f);v.transmission>0?n.unshift(w):v.transparent===!0?s.unshift(w):e.unshift(w)}function u(h,d){e.length>1&&e.sort(h||m0),n.length>1&&n.sort(d||sh),s.length>1&&s.sort(d||sh)}function p(){for(let h=t,d=i.length;h<d;h++){let v=i[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:p,sort:u}}function g0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new rh,i.set(n,[a])):s>=r.length?(a=new rh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function v0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new k,color:new Ot};break;case"SpotLight":e={position:new k,direction:new k,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function x0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var _0=0;function y0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function S0(i){let t=new v0,e=x0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new k);let s=new k,r=new se,a=new se;function o(l){let u=0,p=0,h=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let d=0,v=0,S=0,g=0,f=0,w=0,A=0,M=0,b=0,T=0,C=0,x=0,E=0,P=0;l.sort(y0);for(let z=0,V=l.length;z<V;z++){let O=l[z],L=O.color,B=O.intensity,q=O.distance,Q=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===ni?Q=O.shadow.map.texture:Q=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)u+=L.r*B,p+=L.g*B,h+=L.b*B;else if(O.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(O.sh.coefficients[G],B);P++}else if(O.isSunLight){let G=t.get(O);if(G.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let Y=O.shadow,J=e.get(O);J.shadowIntensity=Y.intensity,J.shadowBias=Y.bias,J.shadowNormalBias=Y.normalBias,J.shadowRadius=Y.radius,J.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),n.sunShadow[v]=J,n.sunShadowMap[v]=Q;let vt=Y.getViewportCount();for(let mt=0;mt<vt;mt++)n.sunShadowMatrix[S+mt]=Y.getMatrix(mt),n.sunShadowCascade[S+mt]=Y._cascadeData[mt];S+=vt,v++}n.sun[d]=G,d++}else if(O.isDirectionalLight){let G=t.get(O);if(G.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let Y=O.shadow,J=e.get(O);J.shadowIntensity=Y.intensity,J.shadowBias=Y.bias,J.shadowNormalBias=Y.normalBias,J.shadowRadius=Y.radius,J.shadowMapSize=Y.mapSize,n.directionalShadow[g]=J,n.directionalShadowMap[g]=Q,n.directionalShadowMatrix[g]=O.shadow.matrix,b++}n.directional[g]=G,g++}else if(O.isSpotLight){let G=t.get(O);G.position.setFromMatrixPosition(O.matrixWorld),G.color.copy(L).multiplyScalar(B),G.distance=q,G.coneCos=Math.cos(O.angle),G.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),G.decay=O.decay,n.spot[w]=G;let Y=O.shadow;if(O.map&&(n.spotLightMap[x]=O.map,x++,Y.updateMatrices(O),O.castShadow&&E++),n.spotLightMatrix[w]=Y.matrix,O.castShadow){let J=e.get(O);J.shadowIntensity=Y.intensity,J.shadowBias=Y.bias,J.shadowNormalBias=Y.normalBias,J.shadowRadius=Y.radius,J.shadowMapSize=Y.mapSize,n.spotShadow[w]=J,n.spotShadowMap[w]=Q,C++}w++}else if(O.isRectAreaLight){let G=t.get(O);G.color.copy(L).multiplyScalar(B),G.halfWidth.set(O.width*.5,0,0),G.halfHeight.set(0,O.height*.5,0),n.rectArea[A]=G,A++}else if(O.isPointLight){let G=t.get(O);if(G.color.copy(O.color).multiplyScalar(O.intensity),G.distance=O.distance,G.decay=O.decay,O.castShadow){let Y=O.shadow,J=e.get(O);J.shadowIntensity=Y.intensity,J.shadowBias=Y.bias,J.shadowNormalBias=Y.normalBias,J.shadowRadius=Y.radius,J.shadowMapSize=Y.mapSize,J.shadowCameraNear=Y.camera.near,J.shadowCameraFar=Y.camera.far,n.pointShadow[f]=J,n.pointShadowMap[f]=Q,n.pointShadowMatrix[f]=O.shadow.matrix,T++}n.point[f]=G,f++}else if(O.isHemisphereLight){let G=t.get(O);G.skyColor.copy(O.color).multiplyScalar(B),G.groundColor.copy(O.groundColor).multiplyScalar(B),n.hemi[M]=G,M++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=h;let I=n.hash;(I.sunLength!==d||I.directionalLength!==g||I.pointLength!==f||I.spotLength!==w||I.rectAreaLength!==A||I.hemiLength!==M||I.numSunShadows!==v||I.numDirectionalShadows!==b||I.numPointShadows!==T||I.numSpotShadows!==C||I.numSpotMaps!==x||I.numLightProbes!==P)&&(n.sun.length=d,n.directional.length=g,n.spot.length=w,n.rectArea.length=A,n.point.length=f,n.hemi.length=M,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+x-E,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=P,I.sunLength=d,I.directionalLength=g,I.pointLength=f,I.spotLength=w,I.rectAreaLength=A,I.hemiLength=M,I.numSunShadows=v,I.numDirectionalShadows=b,I.numPointShadows=T,I.numSpotShadows=C,I.numSpotMaps=x,I.numLightProbes=P,n.version=_0++)}function c(l,u){let p=0,h=0,d=0,v=0,S=0,g=0,f=u.matrixWorldInverse;for(let w=0,A=l.length;w<A;w++){let M=l[w];if(M.isSunLight){let b=n.sun[p];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(f),p++}else if(M.isDirectionalLight){let b=n.directional[h];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),h++}else if(M.isSpotLight){let b=n.spot[v];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),v++}else if(M.isRectAreaLight){let b=n.rectArea[S];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(f),a.identity(),r.copy(M.matrixWorld),r.premultiply(f),a.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),S++}else if(M.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(f),d++}else if(M.isHemisphereLight){let b=n.hemi[g];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(f),g++}}}return{setup:o,setupView:c,state:n}}function ah(i){let t=new S0(i),e=[],n=[],s=[];function r(h){p.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}let p={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function M0(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new ah(i),t.set(s,[o])):r>=a.length?(o=new ah(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var b0=`void main() {
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
}`,T0=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],E0=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],oh=new se,Hs=new k,al=new k;function A0(i,t,e){let n=new Ts,s=new Ut,r=new Ut,a=new ge,o=new Nr,c=new Ur,l={},u=e.maxTextureSize,p={[jn]:De,[De]:jn,[Pe]:Pe},h=new te({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:b0,fragmentShader:w0}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let v=new Ee;v.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new re(v,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ds;let f=this.type;this.render=function(T,C,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===ec&&(Ct("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ds);let E=i.getRenderTarget(),P=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Tn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let V=f!==this.type;V&&C.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(L=>L.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,L=T.length;O<L;O++){let B=T[O],q=B.shadow;if(q===void 0){Ct("WebGLShadowMap:",B,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let Q=q.getFrameExtents();s.multiply(Q),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Q.x),s.x=r.x*Q.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Q.y),s.y=r.y*Q.y,q.mapSize.y=r.y));let G=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=G,q.map===null||V===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Yi){if(B.isPointLight){Ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new fe(s.x,s.y,{format:ni,type:Be,minFilter:de,magFilter:de,generateMipmaps:!1}),q.map.texture.name=B.name+".shadowMap",q.map.depthTexture=new nn(s.x,s.y,pn),q.map.depthTexture.name=B.name+".shadowMapDepth",q.map.depthTexture.format=Sn,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=me,q.map.depthTexture.magFilter=me}else B.isPointLight?(q.map=new ns(s.x),q.map.depthTexture=new Dr(s.x,Ke)):(q.map=new fe(s.x,s.y),q.map.depthTexture=new nn(s.x,s.y,Ke)),q.map.depthTexture.name=B.name+".shadowMap",q.map.depthTexture.format=Sn,this.type===Ds?(q.map.depthTexture.compareFunction=G?La:Da,q.map.depthTexture.minFilter=de,q.map.depthTexture.magFilter=de):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=me,q.map.depthTexture.magFilter=me);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let Y=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();B.isPointLight!==!0&&q.updateMatrices(B,x);for(let J=0;J<Y;J++){let vt=q.getCamera(J);if(B.isPointLight){let mt=q.camera,Gt=q.matrix,It=B.distance||mt.far;It!==mt.far&&(mt.far=It,mt.updateProjectionMatrix()),Hs.setFromMatrixPosition(B.matrixWorld),mt.position.copy(Hs),al.copy(mt.position),al.add(T0[J]),mt.up.copy(E0[J]),mt.lookAt(al),mt.updateMatrixWorld(),Gt.makeTranslation(-Hs.x,-Hs.y,-Hs.z),oh.multiplyMatrices(mt.projectionMatrix,mt.matrixWorldInverse),q._frustum.setFromProjectionMatrix(oh,mt.coordinateSystem,mt.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,J),i.clear();else{J===0&&(i.setRenderTarget(q.map),i.clear());let mt=q.getViewport(J);a.set(r.x*mt.x,r.y*mt.y,r.x*mt.z,r.y*mt.w),z.viewport(a)}n=q.getFrustum(J),M(C,x,vt,B,this.type)}q.isPointLightShadow!==!0&&this.type===Yi&&w(q,x),q.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(E,P,I)};function w(T,C){let x=t.update(S);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new fe(s.x,s.y,{format:ni,type:Be}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,x,h,S,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,x,d,S,null)}function A(T,C,x,E){let P=null,I=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)P=I;else if(P=x.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let z=P.uuid,V=C.uuid,O=l[z];O===void 0&&(O={},l[z]=O);let L=O[V];L===void 0&&(L=P.clone(),O[V]=L,C.addEventListener("dispose",b)),P=L}if(P.visible=C.visible,P.wireframe=C.wireframe,E===Yi?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:p[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let z=i.properties.get(P);z.light=x}return P}function M(T,C,x,E,P){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===Yi)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);let V=t.update(T),O=T.material;if(Array.isArray(O)){let L=V.groups;for(let B=0,q=L.length;B<q;B++){let Q=L[B],G=O[Q.materialIndex];if(G&&G.visible){let Y=A(T,G,E,P);T.onBeforeShadow(i,T,C,x,V,Y,Q),i.renderBufferDirect(x,null,V,Y,T,Q),T.onAfterShadow(i,T,C,x,V,Y,Q)}}}else if(O.visible){let L=A(T,O,E,P);T.onBeforeShadow(i,T,C,x,V,L,null),i.renderBufferDirect(x,null,V,L,T,null),T.onAfterShadow(i,T,C,x,V,L,null)}}let z=T.children;for(let V=0,O=z.length;V<O;V++)M(z[V],C,x,E,P)}function b(T){T.target.removeEventListener("dispose",b);for(let x in l){let E=l[x],P=T.target.uuid;P in E&&(E[P].dispose(),delete E[P])}}}function C0(i,t){function e(){let F=!1,lt=new ge,tt=null,ct=new ge(0,0,0,0);return{setMask:function(pt){tt!==pt&&!F&&(i.colorMask(pt,pt,pt,pt),tt=pt)},setLocked:function(pt){F=pt},setClear:function(pt,nt,Et,bt,le){le===!0&&(pt*=bt,nt*=bt,Et*=bt),lt.set(pt,nt,Et,bt),ct.equals(lt)===!1&&(i.clearColor(pt,nt,Et,bt),ct.copy(lt))},reset:function(){F=!1,tt=null,ct.set(-1,0,0,0)}}}function n(){let F=!1,lt=!1,tt=null,ct=null,pt=null;return{setReversed:function(nt){if(lt!==nt){let Et=t.get("EXT_clip_control");nt?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),lt=nt;let bt=pt;pt=null,this.setClear(bt)}},getReversed:function(){return lt},setTest:function(nt){nt?et(i.DEPTH_TEST):xt(i.DEPTH_TEST)},setMask:function(nt){tt!==nt&&!F&&(i.depthMask(nt),tt=nt)},setFunc:function(nt){if(lt&&(nt=Fc[nt]),ct!==nt){switch(nt){case vr:i.depthFunc(i.NEVER);break;case xr:i.depthFunc(i.ALWAYS);break;case _r:i.depthFunc(i.LESS);break;case ki:i.depthFunc(i.LEQUAL);break;case yr:i.depthFunc(i.EQUAL);break;case Sr:i.depthFunc(i.GEQUAL);break;case Mr:i.depthFunc(i.GREATER);break;case br:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ct=nt}},setLocked:function(nt){F=nt},setClear:function(nt){pt!==nt&&(pt=nt,lt&&(nt=1-nt),i.clearDepth(nt))},reset:function(){F=!1,tt=null,ct=null,pt=null,lt=!1}}}function s(){let F=!1,lt=null,tt=null,ct=null,pt=null,nt=null,Et=null,bt=null,le=null;return{setTest:function(Jt){F||(Jt?et(i.STENCIL_TEST):xt(i.STENCIL_TEST))},setMask:function(Jt){lt!==Jt&&!F&&(i.stencilMask(Jt),lt=Jt)},setFunc:function(Jt,an,xn){(tt!==Jt||ct!==an||pt!==xn)&&(i.stencilFunc(Jt,an,xn),tt=Jt,ct=an,pt=xn)},setOp:function(Jt,an,xn){(nt!==Jt||Et!==an||bt!==xn)&&(i.stencilOp(Jt,an,xn),nt=Jt,Et=an,bt=xn)},setLocked:function(Jt){F=Jt},setClear:function(Jt){le!==Jt&&(i.clearStencil(Jt),le=Jt)},reset:function(){F=!1,lt=null,tt=null,ct=null,pt=null,nt=null,Et=null,bt=null,le=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,u={},p={},h={},d=new WeakMap,v=[],S=null,g=!1,f=null,w=null,A=null,M=null,b=null,T=null,C=null,x=new Ot(0,0,0),E=0,P=!1,I=null,z=null,V=null,O=null,L=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,Q=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(G)[1]),q=Q>=1):G.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),q=Q>=2);let Y=null,J={},vt=i.getParameter(i.SCISSOR_BOX),mt=i.getParameter(i.VIEWPORT),Gt=new ge().fromArray(vt),It=new ge().fromArray(mt);function zt(F,lt,tt,ct){let pt=new Uint8Array(4),nt=i.createTexture();i.bindTexture(F,nt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Et=0;Et<tt;Et++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,ct,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(lt+Et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return nt}let K={};K[i.TEXTURE_2D]=zt(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=zt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=zt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=zt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(i.DEPTH_TEST),a.setFunc(ki),Vt(!1),$t(Eo),et(i.CULL_FACE),qt(Tn);function et(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function xt(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function Pt(F,lt){return h[F]!==lt?(i.bindFramebuffer(F,lt),h[F]=lt,F===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=lt),F===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function ft(F,lt){let tt=v,ct=!1;if(F){tt=d.get(lt),tt===void 0&&(tt=[],d.set(lt,tt));let pt=F.textures;if(tt.length!==pt.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let nt=0,Et=pt.length;nt<Et;nt++)tt[nt]=i.COLOR_ATTACHMENT0+nt;tt.length=pt.length,ct=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,ct=!0);ct&&i.drawBuffers(tt)}function Lt(F){return S!==F?(i.useProgram(F),S=F,!0):!1}let xe={[mi]:i.FUNC_ADD,[ic]:i.FUNC_SUBTRACT,[sc]:i.FUNC_REVERSE_SUBTRACT};xe[rc]=i.MIN,xe[ac]=i.MAX;let kt={[oc]:i.ZERO,[lc]:i.ONE,[cc]:i.SRC_COLOR,[Ro]:i.SRC_ALPHA,[mc]:i.SRC_ALPHA_SATURATE,[fc]:i.DST_COLOR,[uc]:i.DST_ALPHA,[hc]:i.ONE_MINUS_SRC_COLOR,[Po]:i.ONE_MINUS_SRC_ALPHA,[pc]:i.ONE_MINUS_DST_COLOR,[dc]:i.ONE_MINUS_DST_ALPHA,[gc]:i.CONSTANT_COLOR,[vc]:i.ONE_MINUS_CONSTANT_COLOR,[xc]:i.CONSTANT_ALPHA,[_c]:i.ONE_MINUS_CONSTANT_ALPHA};function qt(F,lt,tt,ct,pt,nt,Et,bt,le,Jt){if(F===Tn){g===!0&&(xt(i.BLEND),g=!1);return}if(g===!1&&(et(i.BLEND),g=!0),F!==nc){if(F!==f||Jt!==P){if((w!==mi||b!==mi)&&(i.blendEquation(i.FUNC_ADD),w=mi,b=mi),Jt)switch(F){case Zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $i:i.blendFunc(i.ONE,i.ONE);break;case Ao:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Co:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Rt("WebGLState: Invalid blending: ",F);break}else switch(F){case Zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ao:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Co:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",F);break}A=null,M=null,T=null,C=null,x.set(0,0,0),E=0,f=F,P=Jt}return}pt=pt||lt,nt=nt||tt,Et=Et||ct,(lt!==w||pt!==b)&&(i.blendEquationSeparate(xe[lt],xe[pt]),w=lt,b=pt),(tt!==A||ct!==M||nt!==T||Et!==C)&&(i.blendFuncSeparate(kt[tt],kt[ct],kt[nt],kt[Et]),A=tt,M=ct,T=nt,C=Et),(bt.equals(x)===!1||le!==E)&&(i.blendColor(bt.r,bt.g,bt.b,le),x.copy(bt),E=le),f=F,P=!1}function jt(F,lt){F.side===Pe?xt(i.CULL_FACE):et(i.CULL_FACE);let tt=F.side===De;lt&&(tt=!tt),Vt(tt),F.blending===Zi&&F.transparent===!1?qt(Tn):qt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let ct=F.stencilWrite;o.setTest(ct),ct&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ie(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(F){I!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),I=F)}function $t(F){F!==jl?(et(i.CULL_FACE),F!==z&&(F===Eo?i.cullFace(i.BACK):F===tc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xt(i.CULL_FACE),z=F}function ye(F){F!==V&&(q&&i.lineWidth(F),V=F)}function Ie(F,lt,tt){F?(et(i.POLYGON_OFFSET_FILL),(O!==lt||L!==tt)&&(O=lt,L=tt,a.getReversed()&&(lt=-lt),i.polygonOffset(lt,tt))):xt(i.POLYGON_OFFSET_FILL)}function oe(F){F?et(i.SCISSOR_TEST):xt(i.SCISSOR_TEST)}function pe(F){F===void 0&&(F=i.TEXTURE0+B-1),Y!==F&&(i.activeTexture(F),Y=F)}function U(F,lt,tt){tt===void 0&&(Y===null?tt=i.TEXTURE0+B-1:tt=Y);let ct=J[tt];ct===void 0&&(ct={type:void 0,texture:void 0},J[tt]=ct),(ct.type!==F||ct.texture!==lt)&&(Y!==tt&&(i.activeTexture(tt),Y=tt),i.bindTexture(F,lt||K[F]),ct.type=F,ct.texture=lt)}function be(){let F=J[Y];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Zt(){try{i.compressedTexImage2D(...arguments)}catch(F){Rt("WebGLState:",F)}}function y(){try{i.compressedTexImage3D(...arguments)}catch(F){Rt("WebGLState:",F)}}function m(){try{i.texSubImage2D(...arguments)}catch(F){Rt("WebGLState:",F)}}function R(){try{i.texSubImage3D(...arguments)}catch(F){Rt("WebGLState:",F)}}function N(){try{i.compressedTexSubImage2D(...arguments)}catch(F){Rt("WebGLState:",F)}}function H(){try{i.compressedTexSubImage3D(...arguments)}catch(F){Rt("WebGLState:",F)}}function it(){try{i.texStorage2D(...arguments)}catch(F){Rt("WebGLState:",F)}}function st(){try{i.texStorage3D(...arguments)}catch(F){Rt("WebGLState:",F)}}function $(){try{i.texImage2D(...arguments)}catch(F){Rt("WebGLState:",F)}}function j(){try{i.texImage3D(...arguments)}catch(F){Rt("WebGLState:",F)}}function at(F){return p[F]!==void 0?p[F]:i.getParameter(F)}function Mt(F,lt){p[F]!==lt&&(i.pixelStorei(F,lt),p[F]=lt)}function rt(F){Gt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Gt.copy(F))}function ot(F){It.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),It.copy(F))}function wt(F,lt){let tt=l.get(lt);tt===void 0&&(tt=new WeakMap,l.set(lt,tt));let ct=tt.get(F);ct===void 0&&(ct=i.getUniformBlockIndex(lt,F.name),tt.set(F,ct))}function At(F,lt){let ct=l.get(lt).get(F);c.get(lt)!==ct&&(i.uniformBlockBinding(lt,ct,F.__bindingPointIndex),c.set(lt,ct))}function Nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},p={},Y=null,J={},h={},d=new WeakMap,v=[],S=null,g=!1,f=null,w=null,A=null,M=null,b=null,T=null,C=null,x=new Ot(0,0,0),E=0,P=!1,I=null,z=null,V=null,O=null,L=null,Gt.set(0,0,i.canvas.width,i.canvas.height),It.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:xt,bindFramebuffer:Pt,drawBuffers:ft,useProgram:Lt,setBlending:qt,setMaterial:jt,setFlipSided:Vt,setCullFace:$t,setLineWidth:ye,setPolygonOffset:Ie,setScissorTest:oe,activeTexture:pe,bindTexture:U,unbindTexture:be,compressedTexImage2D:Zt,compressedTexImage3D:y,texImage2D:$,texImage3D:j,pixelStorei:Mt,getParameter:at,updateUBOMapping:wt,uniformBlockBinding:At,texStorage2D:it,texStorage3D:st,texSubImage2D:m,texSubImage3D:R,compressedTexSubImage2D:N,compressedTexSubImage3D:H,scissor:rt,viewport:ot,reset:Nt}}function R0(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ut,u=new WeakMap,p=new Set,h,d=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(y,m){return v?new OffscreenCanvas(y,m):_s("canvas")}function g(y,m,R){let N=1,H=Zt(y);if((H.width>R||H.height>R)&&(N=R/Math.max(H.width,H.height)),N<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){let it=Math.floor(N*H.width),st=Math.floor(N*H.height);h===void 0&&(h=S(it,st));let $=m?S(it,st):h;return $.width=it,$.height=st,$.getContext("2d").drawImage(y,0,0,it,st),Ct("WebGLRenderer: Texture has been resized from ("+H.width+"x"+H.height+") to ("+it+"x"+st+")."),$}else return"data"in y&&Ct("WebGLRenderer: Image in DataTexture is too big ("+H.width+"x"+H.height+")."),y;return y}function f(y){return y.generateMipmaps}function w(y){i.generateMipmap(y)}function A(y){return y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?i.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(y,m,R,N,H,it=!1){if(y!==null){if(i[y]!==void 0)return i[y];Ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let st;N&&(st=t.get("EXT_texture_norm16"),st||Ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=m;if(m===i.RED&&(R===i.FLOAT&&($=i.R32F),R===i.HALF_FLOAT&&($=i.R16F),R===i.UNSIGNED_BYTE&&($=i.R8),R===i.UNSIGNED_SHORT&&st&&($=st.R16_EXT),R===i.SHORT&&st&&($=st.R16_SNORM_EXT)),m===i.RED_INTEGER&&(R===i.UNSIGNED_BYTE&&($=i.R8UI),R===i.UNSIGNED_SHORT&&($=i.R16UI),R===i.UNSIGNED_INT&&($=i.R32UI),R===i.BYTE&&($=i.R8I),R===i.SHORT&&($=i.R16I),R===i.INT&&($=i.R32I)),m===i.RG&&(R===i.FLOAT&&($=i.RG32F),R===i.HALF_FLOAT&&($=i.RG16F),R===i.UNSIGNED_BYTE&&($=i.RG8),R===i.UNSIGNED_SHORT&&st&&($=st.RG16_EXT),R===i.SHORT&&st&&($=st.RG16_SNORM_EXT)),m===i.RG_INTEGER&&(R===i.UNSIGNED_BYTE&&($=i.RG8UI),R===i.UNSIGNED_SHORT&&($=i.RG16UI),R===i.UNSIGNED_INT&&($=i.RG32UI),R===i.BYTE&&($=i.RG8I),R===i.SHORT&&($=i.RG16I),R===i.INT&&($=i.RG32I)),m===i.RGB_INTEGER&&(R===i.UNSIGNED_BYTE&&($=i.RGB8UI),R===i.UNSIGNED_SHORT&&($=i.RGB16UI),R===i.UNSIGNED_INT&&($=i.RGB32UI),R===i.BYTE&&($=i.RGB8I),R===i.SHORT&&($=i.RGB16I),R===i.INT&&($=i.RGB32I)),m===i.RGBA_INTEGER&&(R===i.UNSIGNED_BYTE&&($=i.RGBA8UI),R===i.UNSIGNED_SHORT&&($=i.RGBA16UI),R===i.UNSIGNED_INT&&($=i.RGBA32UI),R===i.BYTE&&($=i.RGBA8I),R===i.SHORT&&($=i.RGBA16I),R===i.INT&&($=i.RGBA32I)),m===i.RGB&&(R===i.UNSIGNED_SHORT&&st&&($=st.RGB16_EXT),R===i.SHORT&&st&&($=st.RGB16_SNORM_EXT),R===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),R===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),m===i.RGBA){let j=it?vs:Wt.getTransfer(H);R===i.FLOAT&&($=i.RGBA32F),R===i.HALF_FLOAT&&($=i.RGBA16F),R===i.UNSIGNED_BYTE&&($=j===Qt?i.SRGB8_ALPHA8:i.RGBA8),R===i.UNSIGNED_SHORT&&st&&($=st.RGBA16_EXT),R===i.SHORT&&st&&($=st.RGBA16_SNORM_EXT),R===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),R===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function b(y,m){let R;return y?m===null||m===Ke||m===Ki?R=i.DEPTH24_STENCIL8:m===pn?R=i.DEPTH32F_STENCIL8:m===Ji&&(R=i.DEPTH24_STENCIL8,Ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===Ke||m===Ki?R=i.DEPTH_COMPONENT24:m===pn?R=i.DEPTH_COMPONENT32F:m===Ji&&(R=i.DEPTH_COMPONENT16),R}function T(y,m){return f(y)===!0||y.isFramebufferTexture&&y.minFilter!==me&&y.minFilter!==de?Math.log2(Math.max(m.width,m.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?m.mipmaps.length:1}function C(y){let m=y.target;m.removeEventListener("dispose",C),E(m),m.isVideoTexture&&u.delete(m),m.isHTMLTexture&&p.delete(m)}function x(y){let m=y.target;m.removeEventListener("dispose",x),I(m)}function E(y){let m=n.get(y);if(m.__webglInit===void 0)return;let R=y.source,N=d.get(R);if(N){let H=N[m.__cacheKey];H.usedTimes--,H.usedTimes===0&&P(y),Object.keys(N).length===0&&d.delete(R)}n.remove(y)}function P(y){let m=n.get(y);i.deleteTexture(m.__webglTexture);let R=y.source,N=d.get(R);delete N[m.__cacheKey],a.memory.textures--}function I(y){let m=n.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),n.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(m.__webglFramebuffer[N]))for(let H=0;H<m.__webglFramebuffer[N].length;H++)i.deleteFramebuffer(m.__webglFramebuffer[N][H]);else i.deleteFramebuffer(m.__webglFramebuffer[N]);m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer[N])}else{if(Array.isArray(m.__webglFramebuffer))for(let N=0;N<m.__webglFramebuffer.length;N++)i.deleteFramebuffer(m.__webglFramebuffer[N]);else i.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&i.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let N=0;N<m.__webglColorRenderbuffer.length;N++)m.__webglColorRenderbuffer[N]&&i.deleteRenderbuffer(m.__webglColorRenderbuffer[N]);m.__webglDepthRenderbuffer&&i.deleteRenderbuffer(m.__webglDepthRenderbuffer)}let R=y.textures;for(let N=0,H=R.length;N<H;N++){let it=n.get(R[N]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),a.memory.textures--),n.remove(R[N])}n.remove(y)}let z=0;function V(){z=0}function O(){return z}function L(y){z=y}function B(){let y=z;return y>=s.maxTextures&&Ct("WebGLTextures: Trying to use "+(y+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,y}function q(y){let m=[];return m.push(y.wrapS),m.push(y.wrapT),m.push(y.wrapR||0),m.push(y.magFilter),m.push(y.minFilter),m.push(y.anisotropy),m.push(y.internalFormat),m.push(y.format),m.push(y.type),m.push(y.generateMipmaps),m.push(y.premultiplyAlpha),m.push(y.flipY),m.push(y.unpackAlignment),m.push(y.colorSpace),m.join()}function Q(y,m){let R=n.get(y);if(y.isVideoTexture&&U(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&R.__version!==y.version){let N=y.image;if(N===null)Ct("WebGLRenderer: Texture marked for update but no image data found.");else if(N.complete===!1)Ct("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(R,y,m);return}}else y.isExternalTexture&&(R.__webglTexture=y.sourceTexture?y.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,R.__webglTexture,i.TEXTURE0+m)}function G(y,m){let R=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&R.__version!==y.version){xt(R,y,m);return}else y.isExternalTexture&&(R.__webglTexture=y.sourceTexture?y.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,R.__webglTexture,i.TEXTURE0+m)}function Y(y,m){let R=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&R.__version!==y.version){xt(R,y,m);return}e.bindTexture(i.TEXTURE_3D,R.__webglTexture,i.TEXTURE0+m)}function J(y,m){let R=n.get(y);if(y.isCubeDepthTexture!==!0&&y.version>0&&R.__version!==y.version){Pt(R,y,m);return}e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+m)}let vt={[wr]:i.REPEAT,[tn]:i.CLAMP_TO_EDGE,[Tr]:i.MIRRORED_REPEAT},mt={[me]:i.NEAREST,[Mc]:i.NEAREST_MIPMAP_NEAREST,[Ns]:i.NEAREST_MIPMAP_LINEAR,[de]:i.LINEAR,[$r]:i.LINEAR_MIPMAP_NEAREST,[sn]:i.LINEAR_MIPMAP_LINEAR},Gt={[Ec]:i.NEVER,[Ic]:i.ALWAYS,[Ac]:i.LESS,[Da]:i.LEQUAL,[Cc]:i.EQUAL,[La]:i.GEQUAL,[Rc]:i.GREATER,[Pc]:i.NOTEQUAL};function It(y,m){if(m.type===pn&&t.has("OES_texture_float_linear")===!1&&(m.magFilter===de||m.magFilter===$r||m.magFilter===Ns||m.magFilter===sn||m.minFilter===de||m.minFilter===$r||m.minFilter===Ns||m.minFilter===sn)&&Ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,vt[m.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,vt[m.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,vt[m.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,mt[m.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,mt[m.minFilter]),m.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,Gt[m.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===me||m.minFilter!==Ns&&m.minFilter!==sn||m.type===pn&&t.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||n.get(m).__currentAnisotropy){let R=t.get("EXT_texture_filter_anisotropic");i.texParameterf(y,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,s.getMaxAnisotropy())),n.get(m).__currentAnisotropy=m.anisotropy}}}function zt(y,m){let R=!1;y.__webglInit===void 0&&(y.__webglInit=!0,m.addEventListener("dispose",C));let N=m.source,H=d.get(N);H===void 0&&(H={},d.set(N,H));let it=q(m);if(it!==y.__cacheKey){H[it]===void 0&&(H[it]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,R=!0),H[it].usedTimes++;let st=H[y.__cacheKey];st!==void 0&&(H[y.__cacheKey].usedTimes--,st.usedTimes===0&&P(m)),y.__cacheKey=it,y.__webglTexture=H[it].texture}return R}function K(y,m,R){return Math.floor(Math.floor(y/R)/m)}function et(y,m,R,N){let it=y.updateRanges;if(it.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,m.width,m.height,R,N,m.data);else{it.sort((Mt,rt)=>Mt.start-rt.start);let st=0;for(let Mt=1;Mt<it.length;Mt++){let rt=it[st],ot=it[Mt],wt=rt.start+rt.count,At=K(ot.start,m.width,4),Nt=K(rt.start,m.width,4);ot.start<=wt+1&&At===Nt&&K(ot.start+ot.count-1,m.width,4)===At?rt.count=Math.max(rt.count,ot.start+ot.count-rt.start):(++st,it[st]=ot)}it.length=st+1;let $=e.getParameter(i.UNPACK_ROW_LENGTH),j=e.getParameter(i.UNPACK_SKIP_PIXELS),at=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,m.width);for(let Mt=0,rt=it.length;Mt<rt;Mt++){let ot=it[Mt],wt=Math.floor(ot.start/4),At=Math.ceil(ot.count/4),Nt=wt%m.width,F=Math.floor(wt/m.width),lt=At,tt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Nt),e.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,Nt,F,lt,tt,R,N,m.data)}y.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,$),e.pixelStorei(i.UNPACK_SKIP_PIXELS,j),e.pixelStorei(i.UNPACK_SKIP_ROWS,at)}}function xt(y,m,R){let N=i.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(N=i.TEXTURE_2D_ARRAY),m.isData3DTexture&&(N=i.TEXTURE_3D);let H=zt(y,m),it=m.source;e.bindTexture(N,y.__webglTexture,i.TEXTURE0+R);let st=n.get(it);if(it.version!==st.__version||H===!0){if(e.activeTexture(i.TEXTURE0+R),(typeof ImageBitmap<"u"&&m.image instanceof ImageBitmap)===!1){let tt=Wt.getPrimaries(Wt.workingColorSpace),ct=m.colorSpace===mn?null:Wt.getPrimaries(m.colorSpace),pt=m.colorSpace===mn||tt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt)}e.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment);let j=g(m.image,!1,s.maxTextureSize);j=be(m,j);let at=r.convert(m.format,m.colorSpace),Mt=r.convert(m.type),rt=M(m.internalFormat,at,Mt,m.normalized,m.colorSpace,m.isVideoTexture);It(N,m);let ot,wt=m.mipmaps,At=m.isVideoTexture!==!0,Nt=st.__version===void 0||H===!0,F=it.dataReady,lt=T(m,j);if(m.isDepthTexture)rt=b(m.format===ei,m.type),Nt&&(At?e.texStorage2D(i.TEXTURE_2D,1,rt,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,rt,j.width,j.height,0,at,Mt,null));else if(m.isDataTexture)if(wt.length>0){At&&Nt&&e.texStorage2D(i.TEXTURE_2D,lt,rt,wt[0].width,wt[0].height);for(let tt=0,ct=wt.length;tt<ct;tt++)ot=wt[tt],At?F&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,ot.width,ot.height,at,Mt,ot.data):e.texImage2D(i.TEXTURE_2D,tt,rt,ot.width,ot.height,0,at,Mt,ot.data);m.generateMipmaps=!1}else At?(Nt&&e.texStorage2D(i.TEXTURE_2D,lt,rt,j.width,j.height),F&&et(m,j,at,Mt)):e.texImage2D(i.TEXTURE_2D,0,rt,j.width,j.height,0,at,Mt,j.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){At&&Nt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,rt,wt[0].width,wt[0].height,j.depth);for(let tt=0,ct=wt.length;tt<ct;tt++)if(ot=wt[tt],m.format!==rn)if(at!==null)if(At){if(F)if(m.layerUpdates.size>0){let pt=tl(ot.width,ot.height,m.format,m.type);for(let nt of m.layerUpdates){let Et=ot.data.subarray(nt*pt/ot.data.BYTES_PER_ELEMENT,(nt+1)*pt/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,nt,ot.width,ot.height,1,at,Et)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,ot.width,ot.height,j.depth,at,ot.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,rt,ot.width,ot.height,j.depth,0,ot.data,0,0);else Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else At?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,ot.width,ot.height,j.depth,at,Mt,ot.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,rt,ot.width,ot.height,j.depth,0,at,Mt,ot.data);m.layerUpdates.size>0&&m.clearLayerUpdates()}else{At&&Nt&&e.texStorage2D(i.TEXTURE_2D,lt,rt,wt[0].width,wt[0].height);for(let tt=0,ct=wt.length;tt<ct;tt++)ot=wt[tt],m.format!==rn?at!==null?At?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,ot.width,ot.height,at,ot.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,rt,ot.width,ot.height,0,ot.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):At?F&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,ot.width,ot.height,at,Mt,ot.data):e.texImage2D(i.TEXTURE_2D,tt,rt,ot.width,ot.height,0,at,Mt,ot.data)}else if(m.isDataArrayTexture)if(At){if(Nt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,rt,j.width,j.height,j.depth),F)if(m.layerUpdates.size>0){let tt=tl(j.width,j.height,m.format,m.type);for(let ct of m.layerUpdates){let pt=j.data.subarray(ct*tt/j.data.BYTES_PER_ELEMENT,(ct+1)*tt/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ct,j.width,j.height,1,at,Mt,pt)}m.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,at,Mt,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,rt,j.width,j.height,j.depth,0,at,Mt,j.data);else if(m.isData3DTexture)At?(Nt&&e.texStorage3D(i.TEXTURE_3D,lt,rt,j.width,j.height,j.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,at,Mt,j.data)):e.texImage3D(i.TEXTURE_3D,0,rt,j.width,j.height,j.depth,0,at,Mt,j.data);else if(m.isFramebufferTexture){if(Nt)if(At)e.texStorage2D(i.TEXTURE_2D,lt,rt,j.width,j.height);else{let tt=j.width,ct=j.height;for(let pt=0;pt<lt;pt++)e.texImage2D(i.TEXTURE_2D,pt,rt,tt,ct,0,at,Mt,null),tt>>=1,ct>>=1}}else if(m.isHTMLTexture){if("texElementImage2D"in i){let tt=i.canvas;if(tt.hasAttribute("layoutsubtree")||tt.setAttribute("layoutsubtree","true"),j.parentNode!==tt){tt.appendChild(j),p.add(m),tt.onpaint=ct=>{let pt=ct.changedElements;for(let nt of p)pt.includes(nt.image)&&(nt.needsUpdate=!0)},tt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{let pt=i.RGBA,nt=i.RGBA,Et=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,pt,nt,Et,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(wt.length>0){if(At&&Nt){let tt=Zt(wt[0]);e.texStorage2D(i.TEXTURE_2D,lt,rt,tt.width,tt.height)}for(let tt=0,ct=wt.length;tt<ct;tt++)ot=wt[tt],At?F&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,at,Mt,ot):e.texImage2D(i.TEXTURE_2D,tt,rt,at,Mt,ot);m.generateMipmaps=!1}else if(At){if(Nt){let tt=Zt(j);e.texStorage2D(i.TEXTURE_2D,lt,rt,tt.width,tt.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at,Mt,j)}else e.texImage2D(i.TEXTURE_2D,0,rt,at,Mt,j);f(m)&&w(N),st.__version=it.version,m.onUpdate&&m.onUpdate(m)}y.__version=m.version}function Pt(y,m,R){if(m.image.length!==6)return;let N=zt(y,m),H=m.source;e.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+R);let it=n.get(H);if(H.version!==it.__version||N===!0){e.activeTexture(i.TEXTURE0+R);let st=Wt.getPrimaries(Wt.workingColorSpace),$=m.colorSpace===mn?null:Wt.getPrimaries(m.colorSpace),j=m.colorSpace===mn||st===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let at=m.isCompressedTexture||m.image[0].isCompressedTexture,Mt=m.image[0]&&m.image[0].isDataTexture,rt=[];for(let nt=0;nt<6;nt++)!at&&!Mt?rt[nt]=g(m.image[nt],!0,s.maxCubemapSize):rt[nt]=Mt?m.image[nt].image:m.image[nt],rt[nt]=be(m,rt[nt]);let ot=rt[0],wt=r.convert(m.format,m.colorSpace),At=r.convert(m.type),Nt=M(m.internalFormat,wt,At,m.normalized,m.colorSpace),F=m.isVideoTexture!==!0,lt=it.__version===void 0||N===!0,tt=H.dataReady,ct=T(m,ot);It(i.TEXTURE_CUBE_MAP,m);let pt;if(at){F&&lt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Nt,ot.width,ot.height);for(let nt=0;nt<6;nt++){pt=rt[nt].mipmaps;for(let Et=0;Et<pt.length;Et++){let bt=pt[Et];m.format!==rn?wt!==null?F?tt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et,0,0,bt.width,bt.height,wt,bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et,Nt,bt.width,bt.height,0,bt.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et,0,0,bt.width,bt.height,wt,At,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et,Nt,bt.width,bt.height,0,wt,At,bt.data)}}}else{if(pt=m.mipmaps,F&&lt){pt.length>0&&ct++;let nt=Zt(rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Nt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(Mt){F?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,rt[nt].width,rt[nt].height,wt,At,rt[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Nt,rt[nt].width,rt[nt].height,0,wt,At,rt[nt].data);for(let Et=0;Et<pt.length;Et++){let le=pt[Et].image[nt].image;F?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et+1,0,0,le.width,le.height,wt,At,le.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et+1,Nt,le.width,le.height,0,wt,At,le.data)}}else{F?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,wt,At,rt[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Nt,wt,At,rt[nt]);for(let Et=0;Et<pt.length;Et++){let bt=pt[Et];F?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et+1,0,0,wt,At,bt.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Et+1,Nt,wt,At,bt.image[nt])}}}f(m)&&w(i.TEXTURE_CUBE_MAP),it.__version=H.version,m.onUpdate&&m.onUpdate(m)}y.__version=m.version}function ft(y,m,R,N,H,it){let st=r.convert(R.format,R.colorSpace),$=r.convert(R.type),j=M(R.internalFormat,st,$,R.normalized,R.colorSpace),at=n.get(m),Mt=n.get(R);if(Mt.__renderTarget=m,!at.__hasExternalTextures){let rt=Math.max(1,m.width>>it),ot=Math.max(1,m.height>>it);H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?e.texImage3D(H,it,j,rt,ot,m.depth,0,st,$,null):e.texImage2D(H,it,j,rt,ot,0,st,$,null)}e.bindFramebuffer(i.FRAMEBUFFER,y),pe(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,N,H,Mt.__webglTexture,0,oe(m)):(H===i.TEXTURE_2D||H>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,N,H,Mt.__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(y,m,R){if(i.bindRenderbuffer(i.RENDERBUFFER,y),m.depthBuffer){let N=m.depthTexture,H=N&&N.isDepthTexture?N.type:null,it=b(m.stencilBuffer,H),st=m.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;pe(m)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe(m),it,m.width,m.height):R?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe(m),it,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,it,m.width,m.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,y)}else{let N=m.textures;for(let H=0;H<N.length;H++){let it=N[H],st=r.convert(it.format,it.colorSpace),$=r.convert(it.type),j=M(it.internalFormat,st,$,it.normalized,it.colorSpace);pe(m)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe(m),j,m.width,m.height):R?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe(m),j,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,j,m.width,m.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xe(y,m,R){let N=m.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,y),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let H=n.get(m.depthTexture);if(H.__renderTarget=m,(!H.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),N){if(H.__webglInit===void 0&&(H.__webglInit=!0,m.depthTexture.addEventListener("dispose",C)),H.__webglTexture===void 0){H.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),It(i.TEXTURE_CUBE_MAP,m.depthTexture);let at=r.convert(m.depthTexture.format),Mt=r.convert(m.depthTexture.type),rt;m.depthTexture.format===Sn?rt=i.DEPTH_COMPONENT24:m.depthTexture.format===ei&&(rt=i.DEPTH24_STENCIL8);for(let ot=0;ot<6;ot++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,rt,m.width,m.height,0,at,Mt,null)}}else Q(m.depthTexture,0);let it=H.__webglTexture,st=oe(m),$=N?i.TEXTURE_CUBE_MAP_POSITIVE_X+R:i.TEXTURE_2D,j=m.depthTexture.format===ei?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(m.depthTexture.format===Sn)pe(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,$,it,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,j,$,it,0);else if(m.depthTexture.format===ei)pe(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,$,it,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,j,$,it,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function kt(y){let m=n.get(y),R=y.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==y.depthTexture){let N=y.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),N){let H=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,N.removeEventListener("dispose",H)};N.addEventListener("dispose",H),m.__depthDisposeCallback=H}m.__boundDepthTexture=N}if(y.depthTexture&&!m.__autoAllocateDepthBuffer)if(R)for(let N=0;N<6;N++)xe(m.__webglFramebuffer[N],y,N);else{let N=y.texture.mipmaps;N&&N.length>0?xe(m.__webglFramebuffer[0],y,0):xe(m.__webglFramebuffer,y,0)}else if(R){m.__webglDepthbuffer=[];for(let N=0;N<6;N++)if(e.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[N]),m.__webglDepthbuffer[N]===void 0)m.__webglDepthbuffer[N]=i.createRenderbuffer(),Lt(m.__webglDepthbuffer[N],y,!1);else{let H=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=m.__webglDepthbuffer[N];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,H,i.RENDERBUFFER,it)}}else{let N=y.texture.mipmaps;if(N&&N.length>0?e.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=i.createRenderbuffer(),Lt(m.__webglDepthbuffer,y,!1);else{let H=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=m.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,H,i.RENDERBUFFER,it)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function qt(y,m,R){let N=n.get(y);m!==void 0&&ft(N.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),R!==void 0&&kt(y)}function jt(y){let m=y.texture,R=n.get(y),N=n.get(m);y.addEventListener("dispose",x);let H=y.textures,it=y.isWebGLCubeRenderTarget===!0,st=H.length>1;if(st||(N.__webglTexture===void 0&&(N.__webglTexture=i.createTexture()),N.__version=m.version,a.memory.textures++),it){R.__webglFramebuffer=[];for(let $=0;$<6;$++)if(m.mipmaps&&m.mipmaps.length>0){R.__webglFramebuffer[$]=[];for(let j=0;j<m.mipmaps.length;j++)R.__webglFramebuffer[$][j]=i.createFramebuffer()}else R.__webglFramebuffer[$]=i.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){R.__webglFramebuffer=[];for(let $=0;$<m.mipmaps.length;$++)R.__webglFramebuffer[$]=i.createFramebuffer()}else R.__webglFramebuffer=i.createFramebuffer();if(st)for(let $=0,j=H.length;$<j;$++){let at=n.get(H[$]);at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture(),a.memory.textures++)}if(y.samples>0&&pe(y)===!1){R.__webglMultisampledFramebuffer=i.createFramebuffer(),R.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let $=0;$<H.length;$++){let j=H[$];R.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,R.__webglColorRenderbuffer[$]);let at=r.convert(j.format,j.colorSpace),Mt=r.convert(j.type),rt=M(j.internalFormat,at,Mt,j.normalized,j.colorSpace,y.isXRRenderTarget===!0),ot=oe(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,rt,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,R.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(R.__webglDepthRenderbuffer=i.createRenderbuffer(),Lt(R.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture),It(i.TEXTURE_CUBE_MAP,m);for(let $=0;$<6;$++)if(m.mipmaps&&m.mipmaps.length>0)for(let j=0;j<m.mipmaps.length;j++)ft(R.__webglFramebuffer[$][j],y,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,j);else ft(R.__webglFramebuffer[$],y,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);f(m)&&w(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){for(let $=0,j=H.length;$<j;$++){let at=H[$],Mt=n.get(at),rt=i.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(rt=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,Mt.__webglTexture),It(rt,at),ft(R.__webglFramebuffer,y,at,i.COLOR_ATTACHMENT0+$,rt,0),f(at)&&w(rt)}e.unbindTexture()}else{let $=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&($=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,N.__webglTexture),It($,m),m.mipmaps&&m.mipmaps.length>0)for(let j=0;j<m.mipmaps.length;j++)ft(R.__webglFramebuffer[j],y,m,i.COLOR_ATTACHMENT0,$,j);else ft(R.__webglFramebuffer,y,m,i.COLOR_ATTACHMENT0,$,0);f(m)&&w($),e.unbindTexture()}y.depthBuffer&&kt(y)}function Vt(y){let m=y.textures;for(let R=0,N=m.length;R<N;R++){let H=m[R];if(f(H)){let it=A(y),st=n.get(H).__webglTexture;e.bindTexture(it,st),w(it),e.unbindTexture()}}}let $t=[],ye=[];function Ie(y){if(y.samples>0){if(pe(y)===!1){let m=y.textures,R=y.width,N=y.height,H=i.COLOR_BUFFER_BIT,it=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=n.get(y),$=m.length>1;if($)for(let at=0;at<m.length;at++)e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,st.__webglMultisampledFramebuffer);let j=y.texture.mipmaps;j&&j.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let at=0;at<m.length;at++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(H|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(H|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,st.__webglColorRenderbuffer[at]);let Mt=n.get(m[at]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Mt,0)}i.blitFramebuffer(0,0,R,N,0,0,R,N,H,i.NEAREST),c===!0&&($t.length=0,ye.length=0,$t.push(i.COLOR_ATTACHMENT0+at),y.depthBuffer&&y.storeMultisampledDepthBuffer===!1&&($t.push(it),ye.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ye)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$t))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let at=0;at<m.length;at++){e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,st.__webglColorRenderbuffer[at]);let Mt=n.get(m[at]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,Mt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.storeMultisampledDepthBuffer===!1&&c){let m=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[m])}}}function oe(y){return Math.min(s.maxSamples,y.samples)}function pe(y){let m=n.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function U(y){let m=a.render.frame;u.get(y)!==m&&(u.set(y,m),y.update())}function be(y,m){let R=y.colorSpace,N=y.format,H=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||R!==di&&R!==mn&&(Wt.getTransfer(R)===Qt?(N!==rn||H!==Je)&&Ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",R)),m}function Zt(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(l.width=y.naturalWidth||y.width,l.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(l.width=y.displayWidth,l.height=y.displayHeight):(l.width=y.width,l.height=y.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=V,this.getTextureUnits=O,this.setTextureUnits=L,this.setTexture2D=Q,this.setTexture2DArray=G,this.setTexture3D=Y,this.setTextureCube=J,this.rebindTextures=qt,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=pe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function P0(i,t){function e(n,s=mn){let r,a=Wt.getTransfer(s);if(n===Je)return i.UNSIGNED_BYTE;if(n===Kr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ho)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Go)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ko)return i.BYTE;if(n===Vo)return i.SHORT;if(n===Ji)return i.UNSIGNED_SHORT;if(n===Jr)return i.INT;if(n===Ke)return i.UNSIGNED_INT;if(n===pn)return i.FLOAT;if(n===Be)return i.HALF_FLOAT;if(n===Wo)return i.ALPHA;if(n===Xo)return i.RGB;if(n===rn)return i.RGBA;if(n===Sn)return i.DEPTH_COMPONENT;if(n===ei)return i.DEPTH_STENCIL;if(n===qo)return i.RED;if(n===jr)return i.RED_INTEGER;if(n===ni)return i.RG;if(n===ta)return i.RG_INTEGER;if(n===ea)return i.RGBA_INTEGER;if(n===Us||n===Fs||n===Os||n===Bs)if(a===Qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Us)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Os)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Us)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Os)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Bs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===na||n===ia||n===sa||n===ra)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===na)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ia)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ra)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===aa||n===oa||n===la||n===ca||n===ha||n===zs||n===ua)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===aa||n===oa)return a===Qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===la)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ca)return r.COMPRESSED_R11_EAC;if(n===ha)return r.COMPRESSED_SIGNED_R11_EAC;if(n===zs)return r.COMPRESSED_RG11_EAC;if(n===ua)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===da||n===fa||n===pa||n===ma||n===ga||n===va||n===xa||n===_a||n===ya||n===Sa||n===Ma||n===ba||n===wa||n===Ta)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===da)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ma)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ga)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===va)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_a)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ya)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ma)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ba)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wa)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ta)return a===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ea||n===Aa||n===Ca)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ea)return a===Qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Aa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ca)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ra||n===Pa||n===ks||n===Ia)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ra)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Pa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ks)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ia)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var I0=`
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

}`,pl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Cs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new te({vertexShader:I0,fragmentShader:D0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new re(new pi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ml=class extends Mn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,p=null,h=null,d=null,v=null,S=typeof XRWebGLBinding<"u",g=new pl,f={},w=e.getContextAttributes(),A=null,M=null,b=[],T=[],C=new Ut,x=null,E=null,P=new Oe;P.viewport=new ge;let I=new Oe;I.viewport=new ge;let z=[P,I],V=new qr,O=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let et=b[K];return et===void 0&&(et=new Wi,b[K]=et),et.getTargetRaySpace()},this.getControllerGrip=function(K){let et=b[K];return et===void 0&&(et=new Wi,b[K]=et),et.getGripSpace()},this.getHand=function(K){let et=b[K];return et===void 0&&(et=new Wi,b[K]=et),et.getHandSpace()};function B(K){let et=T.indexOf(K.inputSource);if(et===-1)return;let xt=b[et];xt!==void 0&&(xt.update(K.inputSource,K.frame,l||a),xt.dispatchEvent({type:K.type,data:K.inputSource}))}function q(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",Q);for(let K=0;K<b.length;K++){let et=T[K];et!==null&&(T[K]=null,b[K].disconnect(et))}O=null,L=null,g.reset();for(let K in f)delete f[K];if(t.setRenderTarget(A),d=null,h=null,p=null,s=null,M=null,zt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(C.width,C.height,!1),E!==null){let K=E.camera;K.fov=E.fov,K.zoom=E.zoom,K.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return p===null&&S&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",q),s.addEventListener("inputsourceschange",Q),w.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(C),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Pt=null,ft=null;w.depth&&(ft=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=w.stencil?ei:Sn,Pt=w.stencil?Ki:Ke);let Lt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};p=this.getBinding(),h=p.createProjectionLayer(Lt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new fe(h.textureWidth,h.textureHeight,{format:rn,type:Je,depthTexture:new nn(h.textureWidth,h.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let xt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,xt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new fe(d.framebufferWidth,d.framebufferHeight,{format:rn,type:Je,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),zt.setContext(s),zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Q(K){for(let et=0;et<K.removed.length;et++){let xt=K.removed[et],Pt=T.indexOf(xt);Pt>=0&&(T[Pt]=null,b[Pt].disconnect(xt))}for(let et=0;et<K.added.length;et++){let xt=K.added[et],Pt=T.indexOf(xt);if(Pt===-1){for(let Lt=0;Lt<b.length;Lt++)if(Lt>=T.length){T.push(xt),Pt=Lt;break}else if(T[Lt]===null){T[Lt]=xt,Pt=Lt;break}if(Pt===-1)break}let ft=b[Pt];ft&&ft.connect(xt)}}let G=new k,Y=new k;function J(K,et,xt){G.setFromMatrixPosition(et.matrixWorld),Y.setFromMatrixPosition(xt.matrixWorld);let Pt=G.distanceTo(Y),ft=et.projectionMatrix.elements,Lt=xt.projectionMatrix.elements,xe=ft[14]/(ft[10]-1),kt=ft[14]/(ft[10]+1),qt=(ft[9]+1)/ft[5],jt=(ft[9]-1)/ft[5],Vt=(ft[8]-1)/ft[0],$t=(Lt[8]+1)/Lt[0],ye=xe*Vt,Ie=xe*$t,oe=Pt/(-Vt+$t),pe=oe*-Vt;if(et.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(pe),K.translateZ(oe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ft[10]===-1)K.projectionMatrix.copy(et.projectionMatrix),K.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let U=xe+oe,be=kt+oe,Zt=ye-pe,y=Ie+(Pt-pe),m=qt*kt/be*U,R=jt*kt/be*U;K.projectionMatrix.makePerspective(Zt,y,m,R,U,be),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function vt(K,et){et===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(et.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let et=K.near,xt=K.far;g.texture!==null&&(g.depthNear>0&&(et=g.depthNear),g.depthFar>0&&(xt=g.depthFar)),V.near=I.near=P.near=et,V.far=I.far=P.far=xt,(O!==V.near||L!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),O=V.near,L=V.far),V.layers.mask=K.layers.mask|6,P.layers.mask=V.layers.mask&-5,I.layers.mask=V.layers.mask&-3;let Pt=K.parent,ft=V.cameras;vt(V,Pt);for(let Lt=0;Lt<ft.length;Lt++)vt(ft[Lt],Pt);ft.length===2?J(V,P,I):V.projectionMatrix.copy(P.projectionMatrix),E===null&&K.isPerspectiveCamera&&(E={camera:K,fov:K.fov,zoom:K.zoom}),mt(K,V,Pt)};function mt(K,et,xt){xt===null?K.matrix.copy(et.matrixWorld):(K.matrix.copy(xt.matrixWorld),K.matrix.invert(),K.matrix.multiply(et.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(et.projectionMatrix),K.projectionMatrixInverse.copy(et.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Hi*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(K){c=K,h!==null&&(h.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(V)},this.getCameraTexture=function(K){return f[K]};let Gt=null;function It(K,et){if(u=et.getViewerPose(l||a),v=et,u!==null){let xt=u.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let Pt=!1;xt.length!==V.cameras.length&&(V.cameras.length=0,Pt=!0);for(let kt=0;kt<xt.length;kt++){let qt=xt[kt],jt=null;if(d!==null)jt=d.getViewport(qt);else{let $t=p.getViewSubImage(h,qt);jt=$t.viewport,kt===0&&(t.setRenderTargetTextures(M,$t.colorTexture,$t.depthStencilTexture),t.setRenderTarget(M))}let Vt=z[kt];Vt===void 0&&(Vt=new Oe,Vt.layers.enable(kt),Vt.viewport=new ge,z[kt]=Vt),Vt.matrix.fromArray(qt.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(qt.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(jt.x,jt.y,jt.width,jt.height),kt===0&&(V.matrix.copy(Vt.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Pt===!0&&V.cameras.push(Vt)}let ft=s.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){p=n.getBinding();let kt=p.getDepthInformation(xt[0]);kt&&kt.isValid&&kt.texture&&g.init(kt,s.renderState)}if(ft&&ft.includes("camera-access")&&S){t.state.unbindTexture(),p=n.getBinding();for(let kt=0;kt<xt.length;kt++){let qt=xt[kt].camera;if(qt){let jt=f[qt];jt||(jt=new Cs,f[qt]=jt);let Vt=p.getCameraImage(qt);jt.sourceTexture=Vt}}}}for(let xt=0;xt<b.length;xt++){let Pt=T[xt],ft=b[xt];Pt!==null&&ft!==void 0&&ft.update(Pt,et,l||a)}Gt&&Gt(K,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),v=null}let zt=new lh;zt.setAnimationLoop(It),this.setAnimationLoop=function(K){Gt=K},this.dispose=function(){}}},L0=new se,ph=new Dt;ph.set(-1,0,0,0,1,0,0,0,1);function N0(i,t){function e(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,Ko(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,w,A,M){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(g,f):f.isMeshLambertMaterial?(r(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(g,f),p(g,f)):f.isMeshPhongMaterial?(r(g,f),u(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(g,f),h(g,f),f.isMeshPhysicalMaterial&&d(g,f,M)):f.isMeshMatcapMaterial?(r(g,f),v(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),S(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?c(g,f,w,A):f.isSpriteMaterial?l(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,e(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===De&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,e(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===De&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,e(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,e(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let w=t.get(f),A=w.envMap,M=w.envMapRotation;A&&(g.envMap.value=A,g.envMapRotation.value.setFromMatrix4(L0.makeRotationFromEuler(M)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(ph),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function c(g,f,w,A){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*w,g.scale.value=A*.5,f.map&&(g.map.value=f.map,e(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function l(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,e(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,e(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function p(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function h(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function d(g,f,w){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===De&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.retroreflectivity>0&&(g.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,f){f.matcap&&(g.matcap.value=f.matcap)}function S(g,f){let w=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function U0(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,b){let T=b.program;n.uniformBlockBinding(M,T)}function l(M,b){let T=s[M.id];T===void 0&&(g(M),T=u(M),s[M.id]=T,M.addEventListener("dispose",w));let C=b.program;n.updateUBOMapping(M,C);let x=t.render.frame;r[M.id]!==x&&(h(M),r[M.id]=x)}function u(M){let b=p();M.__bindingPointIndex=b;let T=i.createBuffer(),C=M.__size,x=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,C,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,T),T}function p(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){let b=s[M.id],T=M.uniforms,C=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let x=0,E=T.length;x<E;x++){let P=T[x];if(Array.isArray(P))for(let I=0,z=P.length;I<z;I++)d(P[I],x,I,C);else d(P,x,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,b,T,C){if(S(M,b,T,C)===!0){let x=M.__offset,E=M.value;if(Array.isArray(E)){let P=0;for(let I=0;I<E.length;I++){let z=E[I],V=f(z);v(z,M.__data,P),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(P+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(E,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,M.__data)}}function v(M,b,T){typeof M=="number"||typeof M=="boolean"?b[0]=M:M.isMatrix3?(b[0]=M.elements[0],b[1]=M.elements[1],b[2]=M.elements[2],b[3]=0,b[4]=M.elements[3],b[5]=M.elements[4],b[6]=M.elements[5],b[7]=0,b[8]=M.elements[6],b[9]=M.elements[7],b[10]=M.elements[8],b[11]=0):ArrayBuffer.isView(M)?b.set(new M.constructor(M.buffer,M.byteOffset,b.length)):M.toArray(b,T)}function S(M,b,T,C){let x=M.value,E=b+"_"+T;if(C[E]===void 0)return typeof x=="number"||typeof x=="boolean"?C[E]=x:ArrayBuffer.isView(x)?C[E]=x.slice():C[E]=x.clone(),!0;{let P=C[E];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return C[E]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function g(M){let b=M.uniforms,T=0,C=16;for(let E=0,P=b.length;E<P;E++){let I=Array.isArray(b[E])?b[E]:[b[E]];for(let z=0,V=I.length;z<V;z++){let O=I[z],L=Array.isArray(O.value)?O.value:[O.value];for(let B=0,q=L.length;B<q;B++){let Q=L[B],G=f(Q),Y=T%C,J=Y%G.boundary,vt=Y+J;T+=J,vt!==0&&C-vt<G.storage&&(T+=C-vt),O.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=T,T+=G.storage}}}let x=T%C;return x>0&&(T+=C-x),M.__size=T,M.__cache={},this}function f(M){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?Ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):Ct("WebGLRenderer: Unsupported uniform value type.",M),b}function w(M){let b=M.target;b.removeEventListener("dispose",w);let T=a.indexOf(b.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function A(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:c,update:l,dispose:A}}var F0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),En=null;function O0(){return En===null&&(En=new Ir(F0,16,16,ni,Be),En.name="DFG_LUT",En.minFilter=de,En.magFilter=de,En.wrapS=tn,En.wrapT=tn,En.generateMipmaps=!1,En.needsUpdate=!0),En}var Oa=class{constructor(t={}){let{canvas:e=Lc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Je}=t;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;let S=d,g=new Set([ea,ta,jr]),f=new Set([Je,Ke,Ji,Ki,Kr,Qr]),w=new Uint32Array(4),A=new Int32Array(4),M=new k,b=null,T=null,C=[],x=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,I=!1,z=null,V=null,O=null,L=null;this._outputColorSpace=qe;let B=0,q=0,Q=null,G=-1,Y=null,J=new ge,vt=new ge,mt=null,Gt=new Ot(0),It=0,zt=e.width,K=e.height,et=1,xt=null,Pt=null,ft=new ge(0,0,zt,K),Lt=new ge(0,0,zt,K),xe=!1,kt=new Ts,qt=!1,jt=!1,Vt=new se,$t=new k,ye=new ge,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},oe=!1;function pe(){return Q===null?et:1}let U=n;function be(_,D){return e.getContext(_,D)}let Zt,y,m,R,N,H,it,st,$,j,at,Mt,rt,ot,wt,At,Nt,F,lt,tt,ct,pt,nt;try{let _={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",le,!1),e.addEventListener("webglcontextrestored",Jt,!1),e.addEventListener("webglcontextcreationerror",an,!1),U===null){let D="webgl2";if(U=be(D,_),U===null)throw be(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Et()}catch(_){throw e.removeEventListener("webglcontextlost",le,!1),e.removeEventListener("webglcontextrestored",Jt,!1),e.removeEventListener("webglcontextcreationerror",an,!1),Rt("WebGLRenderer: "+_.message),_}function Et(){Zt=new Wp(U),Zt.init(),ct=new P0(U,Zt),y=new Np(U,Zt,t,ct),m=new C0(U,Zt),y.reversedDepthBuffer&&h&&m.buffers.depth.setReversed(!0),V=U.createFramebuffer(),O=U.createFramebuffer(),L=U.createFramebuffer(),R=new Yp(U),N=new p0,H=new R0(U,Zt,m,N,y,ct,R),it=new Gp(P),st=new Zu(U),pt=new Dp(U,st),$=new Xp(U,st,R,pt),j=new $p(U,$,st,pt,R),F=new Zp(U,y,H),wt=new Up(N),at=new f0(P,it,Zt,y,pt,wt),Mt=new N0(P,N),rt=new g0,ot=new M0(Zt),Nt=new Ip(P,it,m,j,v,c),At=new A0(P,j,y),nt=new U0(U,R,y,m),lt=new Lp(U,Zt,R),tt=new qp(U,Zt,R),R.programs=at.programs,P.capabilities=y,P.extensions=Zt,P.properties=N,P.renderLists=rt,P.shadowMap=At,P.state=m,P.info=R}S!==Je&&(E=new Kp(S,e.width,e.height,o,s,r));let bt=new ml(P,U);this.xr=bt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let _=Zt.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=Zt.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(_){_!==void 0&&(et=_,this.setSize(zt,K,!1))},this.getSize=function(_){return _.set(zt,K)},this.setSize=function(_,D,Z=!0){if(bt.isPresenting){Ct("WebGLRenderer: Can't change size while VR device is presenting.");return}zt=_,K=D,e.width=Math.floor(_*et),e.height=Math.floor(D*et),Z===!0&&(e.style.width=_+"px",e.style.height=D+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,_,D)},this.getDrawingBufferSize=function(_){return _.set(zt*et,K*et).floor()},this.setDrawingBufferSize=function(_,D,Z){zt=_,K=D,et=Z,e.width=Math.floor(_*Z),e.height=Math.floor(D*Z),this.setViewport(0,0,_,D)},this.setEffects=function(_){if(S===Je){Rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let D=0;D<_.length;D++)if(_[D].isOutputPass===!0){Ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy(J)},this.getViewport=function(_){return _.copy(ft)},this.setViewport=function(_,D,Z,W){_.isVector4?ft.set(_.x,_.y,_.z,_.w):ft.set(_,D,Z,W),m.viewport(J.copy(ft).multiplyScalar(et).round())},this.getScissor=function(_){return _.copy(Lt)},this.setScissor=function(_,D,Z,W){_.isVector4?Lt.set(_.x,_.y,_.z,_.w):Lt.set(_,D,Z,W),m.scissor(vt.copy(Lt).multiplyScalar(et).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(_){m.setScissorTest(xe=_)},this.setOpaqueSort=function(_){xt=_},this.setTransparentSort=function(_){Pt=_},this.getClearColor=function(_){return _.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(_=!0,D=!0,Z=!0){let W=0;if(_){let X=!1;if(Q!==null){let dt=Q.texture.format;X=g.has(dt)}if(X){let dt=Q.texture.type,_t=f.has(dt),ut=Nt.getClearColor(),yt=Nt.getClearAlpha(),Tt=ut.r,Ft=ut.g,Ht=ut.b;_t?(w[0]=Tt,w[1]=Ft,w[2]=Ht,w[3]=yt,U.clearBufferuiv(U.COLOR,0,w)):(A[0]=Tt,A[1]=Ft,A[2]=Ht,A[3]=yt,U.clearBufferiv(U.COLOR,0,A))}else W|=U.COLOR_BUFFER_BIT}D&&(W|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(W|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&U.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(_){_.setRenderer(this),z=_},this.dispose=function(){e.removeEventListener("webglcontextlost",le,!1),e.removeEventListener("webglcontextrestored",Jt,!1),e.removeEventListener("webglcontextcreationerror",an,!1),Nt.dispose(),rt.dispose(),ot.dispose(),N.dispose(),it.dispose(),j.dispose(),pt.dispose(),nt.dispose(),at.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",wl),bt.removeEventListener("sessionend",Tl),ai.stop()};function le(_){_.preventDefault(),$o("WebGLRenderer: Context Lost."),I=!0}function Jt(){$o("WebGLRenderer: Context Restored."),I=!1;let _=R.autoReset,D=At.enabled,Z=At.autoUpdate,W=At.needsUpdate,X=At.type;Et(),R.autoReset=_,At.enabled=D,At.autoUpdate=Z,At.needsUpdate=W,At.type=X}function an(_){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function xn(_){let D=_.target;D.removeEventListener("dispose",xn),Wh(D)}function Wh(_){Xh(_),N.remove(_)}function Xh(_){let D=N.get(_).programs;D!==void 0&&(D.forEach(function(Z){at.releaseProgram(Z)}),_.isShaderMaterial&&at.releaseShaderCache(_))}this.renderBufferDirect=function(_,D,Z,W,X,dt){D===null&&(D=Ie);let _t=X.isMesh&&X.matrixWorld.determinantAffine()<0,ut=Zh(_,D,Z,W,X);m.setMaterial(W,_t);let yt=Z.index,Tt=1;if(W.wireframe===!0){if(yt=$.getWireframeAttribute(Z),yt===void 0)return;Tt=2}let Ft=Z.drawRange,Ht=Z.attributes.position,St=Ft.start*Tt,Kt=(Ft.start+Ft.count)*Tt;dt!==null&&(St=Math.max(St,dt.start*Tt),Kt=Math.min(Kt,(dt.start+dt.count)*Tt)),yt!==null?(St=Math.max(St,0),Kt=Math.min(Kt,yt.count)):Ht!=null&&(St=Math.max(St,0),Kt=Math.min(Kt,Ht.count));let we=Kt-St;if(we<0||we===1/0)return;pt.setup(X,W,ut,Z,yt);let he,ie=lt;if(yt!==null&&(he=st.get(yt),ie=tt,ie.setIndex(he)),X.isMesh)W.wireframe===!0?(m.setLineWidth(W.wireframeLinewidth*pe()),ie.setMode(U.LINES)):ie.setMode(U.TRIANGLES);else if(X.isLine){let Ne=W.linewidth;Ne===void 0&&(Ne=1),m.setLineWidth(Ne*pe()),X.isLineSegments?ie.setMode(U.LINES):X.isLineLoop?ie.setMode(U.LINE_LOOP):ie.setMode(U.LINE_STRIP)}else X.isPoints?ie.setMode(U.POINTS):X.isSprite&&ie.setMode(U.TRIANGLES);if(X.isBatchedMesh)if(Zt.get("WEBGL_multi_draw"))ie.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Ne=X._multiDrawStarts,gt=X._multiDrawCounts,ke=X._multiDrawCount,Yt=yt?st.get(yt).bytesPerElement:1,Qe=N.get(W).currentProgram.getUniforms();for(let _n=0;_n<ke;_n++)Qe.setValue(U,"_gl_DrawID",_n),ie.render(Ne[_n]/Yt,gt[_n])}else if(X.isInstancedMesh)ie.renderInstances(St,we,X.count);else if(Z.isInstancedBufferGeometry){let Ne=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,gt=Math.min(Z.instanceCount,Ne);ie.renderInstances(St,we,gt)}else ie.render(St,we)};function bl(_,D,Z,W){z!==null&&_.isNodeMaterial&&z.setObject(W,_),qt===!0&&wt.setState(_,Z,!1),_.transparent===!0&&_.side===Pe&&_.forceSinglePass===!1?(_.side=De,_.needsUpdate=!0,$s(_,D,W),_.side=jn,_.needsUpdate=!0,$s(_,D,W),_.side=Pe):$s(_,D,W)}this.compile=function(_,D,Z=null){Z===null&&(Z=_),z!==null&&z.renderStart(_,D,Z),T=ot.get(Z),T.init(D),x.push(T),Z.traverseVisible(function(X){X.isLight&&X.layers.test(D.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),_!==Z&&_.traverseVisible(function(X){X.isLight&&X.layers.test(D.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),T.setupLights(),z!==null&&z.updateLights(T.state.lightsArray),jt=this.localClippingEnabled,qt=wt.init(this.clippingPlanes,jt),qt===!0&&wt.setGlobalState(this.clippingPlanes,D),z!==null&&At.render(T.state.shadowsArray,Z,D);let W=new Set;return _.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let dt=X.material;if(dt)if(Array.isArray(dt))for(let _t=0;_t<dt.length;_t++){let ut=dt[_t];bl(ut,Z,D,X),W.add(ut)}else bl(dt,Z,D,X),W.add(dt)}),T=x.pop(),z!==null&&z.renderEnd(),W},this.compileAsync=function(_,D,Z=null){let W=this.compile(_,D,Z);return new Promise(X=>{function dt(){if(W.forEach(function(_t){let yt=N.get(_t).currentProgram;(yt===void 0||yt.isReady())&&W.delete(_t)}),W.size===0){X(_);return}setTimeout(dt,10)}Zt.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Ka=null;function qh(_){Ka&&Ka(_)}function wl(){ai.stop()}function Tl(){ai.start()}let ai=new lh;ai.setAnimationLoop(qh),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(_){Ka=_,bt.setAnimationLoop(_),_===null?ai.stop():ai.start()},bt.addEventListener("sessionstart",wl),bt.addEventListener("sessionend",Tl),this.render=function(_,D){if(D!==void 0&&D.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;z!==null&&z.renderStart(_,D);let Z=bt.enabled===!0&&bt.isPresenting===!0,W=E!==null&&(Q===null||Z)&&E.begin(P,Q);if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(D),D=bt.getCamera()),_.isScene===!0&&_.onBeforeRender(P,_,D,Q),T=ot.get(_,x.length),T.init(D),T.state.textureUnits=H.getTextureUnits(),x.push(T),Vt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),kt.setFromProjectionMatrix(Vt,un,D.reversedDepth),jt=this.localClippingEnabled,qt=wt.init(this.clippingPlanes,jt),b=rt.get(_,C.length),b.init(),C.push(b),bt.enabled===!0&&bt.isPresenting===!0){let _t=P.xr.getDepthSensingMesh();_t!==null&&Qa(_t,D,-1/0,P.sortObjects)}Qa(_,D,0,P.sortObjects),b.finish(),z!==null&&z.updateLights(T.state.lightsArray),P.sortObjects===!0&&b.sort(xt,Pt),oe=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,oe&&Nt.addToRenderList(b,_),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),qt===!0&&wt.beginShadows();let X=T.state.shadowsArray;if(At.render(X,_,D),qt===!0&&wt.endShadows(),(W&&E.hasRenderPass())===!1){let _t=b.opaque,ut=b.transmissive;if(T.setupLights(),D.isArrayCamera){let yt=D.cameras;if(ut.length>0)for(let Tt=0,Ft=yt.length;Tt<Ft;Tt++){let Ht=yt[Tt];Al(_t,ut,_,Ht)}oe&&Nt.render(_);for(let Tt=0,Ft=yt.length;Tt<Ft;Tt++){let Ht=yt[Tt];El(b,_,Ht,Ht.viewport)}}else ut.length>0&&Al(_t,ut,_,D),oe&&Nt.render(_),El(b,_,D)}Q!==null&&q===0&&(H.updateMultisampleRenderTarget(Q),H.updateRenderTargetMipmap(Q)),W&&E.end(P),_.isScene===!0&&_.onAfterRender(P,_,D),pt.resetDefaultState(),G=-1,Y=null,x.pop(),x.length>0?(T=x[x.length-1],H.setTextureUnits(T.state.textureUnits),qt===!0&&wt.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?b=C[C.length-1]:b=null,z!==null&&z.renderEnd()};function Qa(_,D,Z,W){if(_.visible===!1)return;if(_.layers.test(D.layers)){if(_.isGroup)Z=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(D);else if(_.isLightProbeGrid)T.pushLightProbeGrid(_);else if(_.isLight)T.pushLight(_),_.castShadow&&T.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||_.intersectsFrustum(kt)){W&&ye.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Vt);let _t=j.update(_),ut=_.material;ut.visible&&b.push(_,_t,ut,Z,ye.z,null,D)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||_.intersectsFrustum(kt))){let _t=j.update(_),ut=_.material;if(W&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),ye.copy(_.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),ye.copy(_t.boundingSphere.center)),ye.applyMatrix4(_.matrixWorld).applyMatrix4(Vt)),Array.isArray(ut)){let yt=_t.groups;for(let Tt=0,Ft=yt.length;Tt<Ft;Tt++){let Ht=yt[Tt],St=ut[Ht.materialIndex];St&&St.visible&&b.push(_,_t,St,Z,ye.z,Ht,D)}}else ut.visible&&b.push(_,_t,ut,Z,ye.z,null,D)}}let dt=_.children;for(let _t=0,ut=dt.length;_t<ut;_t++)Qa(dt[_t],D,Z,W)}function El(_,D,Z,W){let{opaque:X,transmissive:dt,transparent:_t}=_;T.setupLightsView(Z),qt===!0&&wt.setGlobalState(P.clippingPlanes,Z),W&&m.viewport(J.copy(W)),X.length>0&&Zs(X,D,Z),dt.length>0&&Zs(dt,D,Z),_t.length>0&&Zs(_t,D,Z),m.buffers.depth.setTest(!0),m.buffers.depth.setMask(!0),m.buffers.color.setMask(!0),m.setPolygonOffset(!1)}function Al(_,D,Z,W){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[W.id]===void 0){let St=Zt.has("EXT_color_buffer_half_float")||Zt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[W.id]=new fe(1,1,{generateMipmaps:!0,type:St?Be:Je,minFilter:sn,samples:Math.max(4,y.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Wt.workingColorSpace})}let dt=T.state.transmissionRenderTarget[W.id],_t=W.viewport||J;dt.setSize(_t.z*P.transmissionResolutionScale,_t.w*P.transmissionResolutionScale);let ut=P.getRenderTarget(),yt=P.getActiveCubeFace(),Tt=P.getActiveMipmapLevel();P.setRenderTarget(dt),P.getClearColor(Gt),It=P.getClearAlpha(),It<1&&P.setClearColor(16777215,.5),P.clear(),oe&&Nt.render(Z);let Ft=P.toneMapping;P.toneMapping=fn;let Ht=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),T.setupLightsView(W),qt===!0&&wt.setGlobalState(P.clippingPlanes,W),Zs(_,Z,W),H.updateMultisampleRenderTarget(dt),H.updateRenderTargetMipmap(dt),Zt.has("WEBGL_multisampled_render_to_texture")===!1){let St=!1;for(let Kt=0,we=D.length;Kt<we;Kt++){let he=D[Kt],{object:ie,geometry:Ne,material:gt,group:ke}=he;if(gt.side===Pe&&ie.layers.test(W.layers)){let Yt=gt.side;gt.side=De,gt.needsUpdate=!0,Cl(ie,Z,W,Ne,gt,ke),gt.side=Yt,gt.needsUpdate=!0,St=!0}}St===!0&&(H.updateMultisampleRenderTarget(dt),H.updateRenderTargetMipmap(dt))}P.setRenderTarget(ut,yt,Tt),P.setClearColor(Gt,It),Ht!==void 0&&(W.viewport=Ht),P.toneMapping=Ft}function Zs(_,D,Z){let W=D.isScene===!0?D.overrideMaterial:null;for(let X=0,dt=_.length;X<dt;X++){let _t=_[X],{object:ut,geometry:yt,group:Tt}=_t,Ft=_t.material;Ft.allowOverride===!0&&W!==null&&(Ft=W),ut.layers.test(Z.layers)&&Cl(ut,D,Z,yt,Ft,Tt)}}function Cl(_,D,Z,W,X,dt){z!==null&&X.isNodeMaterial&&z.setObject(_,X),_.onBeforeRender(P,D,Z,W,X,dt),_.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),X.onBeforeRender(P,D,Z,W,_,dt),X.transparent===!0&&X.side===Pe&&X.forceSinglePass===!1?(X.side=De,X.needsUpdate=!0,P.renderBufferDirect(Z,D,W,X,_,dt),X.side=jn,X.needsUpdate=!0,P.renderBufferDirect(Z,D,W,X,_,dt),X.side=Pe):P.renderBufferDirect(Z,D,W,X,_,dt),_.onAfterRender(P,D,Z,W,X,dt)}function $s(_,D,Z){D.isScene!==!0&&(D=Ie);let W=N.get(_),X=T.state.lights,dt=T.state.shadowsArray,_t=X.state.version,ut=at.getParameters(_,X.state,dt,D,Z,T.state.lightProbeGridArray),yt=at.getProgramCacheKey(ut),Tt=W.programs;W.environment=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,W.fog=D.fog;let Ft=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap;W.envMap=it.get(_.envMap||W.environment,Ft),W.envMapRotation=W.environment!==null&&_.envMap===null?D.environmentRotation:_.envMapRotation,Tt===void 0&&(_.addEventListener("dispose",xn),Tt=new Map,W.programs=Tt);let Ht=Tt.get(yt);if(Ht!==void 0){if(W.currentProgram===Ht&&W.lightsStateVersion===_t)return Pl(_,ut),Ht}else ut.uniforms=at.getUniforms(_),z!==null&&_.isNodeMaterial&&z.build(_,Z,ut),_.onBeforeCompile(ut,P),Ht=at.acquireProgram(ut,yt),Tt.set(yt,Ht),W.uniforms=ut.uniforms;let St=W.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(St.clippingPlanes=wt.uniform),Pl(_,ut),W.needsLights=Jh(_),W.lightsStateVersion=_t,W.needsLights&&(St.ambientLightColor.value=X.state.ambient,St.lightProbe.value=X.state.probe,St.sunLights.value=X.state.sun,St.sunLightShadows.value=X.state.sunShadow,St.directionalLights.value=X.state.directional,St.directionalLightShadows.value=X.state.directionalShadow,St.spotLights.value=X.state.spot,St.spotLightShadows.value=X.state.spotShadow,St.rectAreaLights.value=X.state.rectArea,St.ltc_1.value=X.state.rectAreaLTC1,St.ltc_2.value=X.state.rectAreaLTC2,St.pointLights.value=X.state.point,St.pointLightShadows.value=X.state.pointShadow,St.hemisphereLights.value=X.state.hemi,St.sunShadowMatrix.value=X.state.sunShadowMatrix,St.sunShadowCascade.value=X.state.sunShadowCascade,St.directionalShadowMatrix.value=X.state.directionalShadowMatrix,St.spotLightMatrix.value=X.state.spotLightMatrix,St.spotLightMap.value=X.state.spotLightMap,St.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=T.state.lightProbeGridArray.length>0,W.currentProgram=Ht,W.uniformsList=null,Ht}function Rl(_){if(_.uniformsList===null){let D=_.currentProgram.getUniforms();_.uniformsList=es.seqWithValue(D.seq,_.uniforms)}return _.uniformsList}function Pl(_,D){let Z=N.get(_);Z.outputColorSpace=D.outputColorSpace,Z.batching=D.batching,Z.batchingColor=D.batchingColor,Z.instancing=D.instancing,Z.instancingColor=D.instancingColor,Z.instancingMorph=D.instancingMorph,Z.skinning=D.skinning,Z.morphTargets=D.morphTargets,Z.morphNormals=D.morphNormals,Z.morphColors=D.morphColors,Z.morphTargetsCount=D.morphTargetsCount,Z.numClippingPlanes=D.numClippingPlanes,Z.numIntersection=D.numClipIntersection,Z.vertexAlphas=D.vertexAlphas,Z.vertexTangents=D.vertexTangents,Z.toneMapping=D.toneMapping}function Yh(_,D){if(_.length===0)return null;if(_.length===1)return _[0].texture!==null?_[0]:null;M.setFromMatrixPosition(D.matrixWorld);for(let Z=0,W=_.length;Z<W;Z++){let X=_[Z];if(X.texture!==null&&X.boundingBox.containsPoint(M))return X}return null}function Zh(_,D,Z,W,X){D.isScene!==!0&&(D=Ie),H.resetTextureUnits();let dt=D.fog,_t=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?D.environment:null,ut=Q===null?P.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Wt.workingColorSpace,yt=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Tt=it.get(W.envMap||_t,yt),Ft=W.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ht=!!Z.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),St=!!Z.morphAttributes.position,Kt=!!Z.morphAttributes.normal,we=!!Z.morphAttributes.color,he=fn;W.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(he=P.toneMapping);let ie=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ne=ie!==void 0?ie.length:0,gt=N.get(W),ke=T.state.lights;if(qt===!0&&(jt===!0||_!==Y)){let ce=_===Y&&W.id===G;wt.setState(W,_,ce)}let Yt=!1;W.version===gt.__version?(gt.needsLights&&gt.lightsStateVersion!==ke.state.version||gt.outputColorSpace!==ut||X.isBatchedMesh&&gt.batching===!1||!X.isBatchedMesh&&gt.batching===!0||X.isBatchedMesh&&gt.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&gt.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&gt.instancing===!1||!X.isInstancedMesh&&gt.instancing===!0||X.isSkinnedMesh&&gt.skinning===!1||!X.isSkinnedMesh&&gt.skinning===!0||X.isInstancedMesh&&gt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&gt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&gt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&gt.instancingMorph===!1&&X.morphTexture!==null||gt.envMap!==Tt||W.fog===!0&&gt.fog!==dt||gt.numClippingPlanes!==void 0&&(gt.numClippingPlanes!==wt.numPlanes||gt.numIntersection!==wt.numIntersection)||gt.vertexAlphas!==Ft||gt.vertexTangents!==Ht||gt.morphTargets!==St||gt.morphNormals!==Kt||gt.morphColors!==we||gt.toneMapping!==he||gt.morphTargetsCount!==Ne||!!gt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(Yt=!0):(Yt=!0,gt.__version=W.version);let Qe=gt.currentProgram;Yt===!0&&(Qe=$s(W,D,X),z&&W.isNodeMaterial&&z.onUpdateProgram(W,Qe,gt));let _n=!1,Bn=!1,bi=!1,ee=Qe.getUniforms(),Se=gt.uniforms;if(m.useProgram(Qe.program)&&(_n=!0,Bn=!0,bi=!0),W.id!==G&&(G=W.id,Bn=!0),gt.needsLights){let ce=Yh(T.state.lightProbeGridArray,X);gt.lightProbeGrid!==ce&&(gt.lightProbeGrid=ce,Bn=!0)}if(_n||Y!==_){m.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),ee.setValue(U,"projectionMatrix",_.projectionMatrix),ee.setValue(U,"viewMatrix",_.matrixWorldInverse);let kn=ee.map.cameraPosition;kn!==void 0&&kn.setValue(U,$t.setFromMatrixPosition(_.matrixWorld)),y.logarithmicDepthBuffer&&ee.setValue(U,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ee.setValue(U,"isOrthographic",_.isOrthographicCamera===!0),Y!==_&&(Y=_,Bn=!0,bi=!0)}if(gt.needsLights&&(ke.state.sunShadowMap.length>0&&ee.setValue(U,"sunShadowMap",ke.state.sunShadowMap,H),ke.state.directionalShadowMap.length>0&&ee.setValue(U,"directionalShadowMap",ke.state.directionalShadowMap,H),ke.state.spotShadowMap.length>0&&ee.setValue(U,"spotShadowMap",ke.state.spotShadowMap,H),ke.state.pointShadowMap.length>0&&ee.setValue(U,"pointShadowMap",ke.state.pointShadowMap,H)),X.isSkinnedMesh){ee.setOptional(U,X,"bindMatrix"),ee.setOptional(U,X,"bindMatrixInverse");let ce=X.skeleton;ce&&(ce.boneTexture===null&&ce.computeBoneTexture(),ee.setValue(U,"boneTexture",ce.boneTexture,H))}X.isBatchedMesh&&(ee.setOptional(U,X,"batchingTexture"),ee.setValue(U,"batchingTexture",X._matricesTexture,H),ee.setOptional(U,X,"batchingIdTexture"),ee.setValue(U,"batchingIdTexture",X._indirectTexture,H),ee.setOptional(U,X,"batchingColorTexture"),X._colorsTexture!==null&&ee.setValue(U,"batchingColorTexture",X._colorsTexture,H));let zn=Z.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&F.update(X,Z,Qe),(Bn||gt.receiveShadow!==X.receiveShadow)&&(gt.receiveShadow=X.receiveShadow,ee.setValue(U,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&D.environment!==null&&(Se.envMapIntensity.value=D.environmentIntensity),Se.dfgLUT!==void 0&&(Se.dfgLUT.value=O0()),Bn){if(ee.setValue(U,"toneMappingExposure",P.toneMappingExposure),gt.needsLights&&$h(Se,bi),dt&&W.fog===!0&&Mt.refreshFogUniforms(Se,dt),Mt.refreshMaterialUniforms(Se,W,et,K,T.state.transmissionRenderTarget[_.id]),gt.needsLights&&gt.lightProbeGrid){let ce=gt.lightProbeGrid;Se.probesSH.value=ce.texture,Se.probesMin.value.copy(ce.boundingBox.min),Se.probesMax.value.copy(ce.boundingBox.max),Se.probesResolution.value.copy(ce.resolution)}es.upload(U,Rl(gt),Se,H)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(es.upload(U,Rl(gt),Se,H),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ee.setValue(U,"center",X.center),ee.setValue(U,"modelViewMatrix",X.modelViewMatrix),ee.setValue(U,"normalMatrix",X.normalMatrix),ee.setValue(U,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){let ce=W.uniformsGroups;for(let kn=0,wi=ce.length;kn<wi;kn++){let Dl=ce[kn];nt.update(Dl,Qe),nt.bind(Dl,Qe)}}return Qe}function $h(_,D){_.ambientLightColor.needsUpdate=D,_.lightProbe.needsUpdate=D,_.sunLights.needsUpdate=D,_.sunLightShadows.needsUpdate=D,_.directionalLights.needsUpdate=D,_.directionalLightShadows.needsUpdate=D,_.pointLights.needsUpdate=D,_.pointLightShadows.needsUpdate=D,_.spotLights.needsUpdate=D,_.spotLightShadows.needsUpdate=D,_.rectAreaLights.needsUpdate=D,_.hemisphereLights.needsUpdate=D}function Jh(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(_,D,Z){let W=N.get(_);W.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),N.get(_.texture).__webglTexture=D,N.get(_.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Z,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,D){let Z=N.get(_);Z.__webglFramebuffer=D,Z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(_,D=0,Z=0){Q=_,B=D,q=Z;let W=null,X=!1,dt=!1;if(_){let ut=N.get(_);if(ut.__useDefaultFramebuffer!==void 0){m.bindFramebuffer(U.FRAMEBUFFER,ut.__webglFramebuffer),J.copy(_.viewport),vt.copy(_.scissor),mt=_.scissorTest,m.viewport(J),m.scissor(vt),m.setScissorTest(mt),G=-1;return}else if(ut.__webglFramebuffer===void 0)H.setupRenderTarget(_);else if(ut.__hasExternalTextures)H.rebindTextures(_,N.get(_.texture).__webglTexture,N.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Ft=_.depthTexture;if(ut.__boundDepthTexture!==Ft){if(Ft!==null&&N.has(Ft)&&(_.width!==Ft.image.width||_.height!==Ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(_)}}let yt=_.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(dt=!0);let Tt=N.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Tt[D])?W=Tt[D][Z]:W=Tt[D],X=!0):_.samples>0&&H.useMultisampledRTT(_)===!1?W=N.get(_).__webglMultisampledFramebuffer:Array.isArray(Tt)?W=Tt[Z]:W=Tt,J.copy(_.viewport),vt.copy(_.scissor),mt=_.scissorTest}else J.copy(ft).multiplyScalar(et).floor(),vt.copy(Lt).multiplyScalar(et).floor(),mt=xe;if(Z!==0&&(W=V),m.bindFramebuffer(U.FRAMEBUFFER,W)&&m.drawBuffers(_,W),m.viewport(J),m.scissor(vt),m.setScissorTest(mt),X){let ut=N.get(_.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,ut.__webglTexture,Z)}else if(dt){let ut=D;for(let yt=0;yt<_.textures.length;yt++){let Tt=N.get(_.textures[yt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+yt,Tt.__webglTexture,Z,ut)}}else if(_!==null&&Z!==0){let ut=N.get(_.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ut.__webglTexture,Z)}G=-1};function Il(_){let D=N.get(_);return(D.__readFormat!==_.format||D.__readType!==_.type)&&(D.__readFormat=_.format,D.__readType=_.type,D.__formatReadable=y.textureFormatReadable(_.format),D.__typeReadable=y.textureTypeReadable(_.type)),D}this.readRenderTargetPixels=function(_,D,Z,W,X,dt,_t,ut=0){if(!(_&&_.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=N.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&_t!==void 0&&(yt=yt[_t]),yt){m.bindFramebuffer(U.FRAMEBUFFER,yt);try{let Tt=_.textures[ut],Ft=Tt.format,Ht=Tt.type;_.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ut);let St=Il(Tt);if(St.__formatReadable===!1){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(St.__typeReadable===!1){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=_.width-W&&Z>=0&&Z<=_.height-X&&U.readPixels(D,Z,W,X,ct.convert(Ft),ct.convert(Ht),dt)}finally{let Tt=Q!==null?N.get(Q).__webglFramebuffer:null;m.bindFramebuffer(U.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(_,D,Z,W,X,dt,_t,ut=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=N.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&_t!==void 0&&(yt=yt[_t]),yt)if(D>=0&&D<=_.width-W&&Z>=0&&Z<=_.height-X){m.bindFramebuffer(U.FRAMEBUFFER,yt);let Tt=_.textures[ut],Ft=Tt.format,Ht=Tt.type;_.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ut);let St=Il(Tt);if(St.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(St.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Kt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Kt),U.bufferData(U.PIXEL_PACK_BUFFER,dt.byteLength,U.STREAM_READ),U.readPixels(D,Z,W,X,ct.convert(Ft),ct.convert(Ht),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let we=Q!==null?N.get(Q).__webglFramebuffer:null;m.bindFramebuffer(U.FRAMEBUFFER,we);let he=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Uc(U,he,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Kt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,dt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Kt),U.deleteSync(he),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,D=null,Z=0){let W=Math.pow(2,-Z),X=Math.floor(_.image.width*W),dt=Math.floor(_.image.height*W),_t=D!==null?D.x:0,ut=D!==null?D.y:0;H.setTexture2D(_,0),U.copyTexSubImage2D(U.TEXTURE_2D,Z,0,0,_t,ut,X,dt),m.unbindTexture()},this.copyTextureToTexture=function(_,D,Z=null,W=null,X=0,dt=0){let _t,ut,yt,Tt,Ft,Ht,St,Kt,we,he=_.isCompressedTexture?_.mipmaps[dt]:_.image;if(Z!==null)_t=Z.max.x-Z.min.x,ut=Z.max.y-Z.min.y,yt=Z.isBox3?Z.max.z-Z.min.z:1,Tt=Z.min.x,Ft=Z.min.y,Ht=Z.isBox3?Z.min.z:0;else{let Se=Math.pow(2,-X);_t=Math.floor(he.width*Se),ut=Math.floor(he.height*Se),_.isDataArrayTexture?yt=he.depth:_.isData3DTexture?yt=Math.floor(he.depth*Se):yt=1,Tt=0,Ft=0,Ht=0}W!==null?(St=W.x,Kt=W.y,we=W.z):(St=0,Kt=0,we=0);let ie=ct.convert(D.format),Ne=ct.convert(D.type),gt;D.isData3DTexture?(H.setTexture3D(D,0),gt=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(H.setTexture2DArray(D,0),gt=U.TEXTURE_2D_ARRAY):(H.setTexture2D(D,0),gt=U.TEXTURE_2D),m.activeTexture(U.TEXTURE0),m.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),m.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),m.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);let ke=m.getParameter(U.UNPACK_ROW_LENGTH),Yt=m.getParameter(U.UNPACK_IMAGE_HEIGHT),Qe=m.getParameter(U.UNPACK_SKIP_PIXELS),_n=m.getParameter(U.UNPACK_SKIP_ROWS),Bn=m.getParameter(U.UNPACK_SKIP_IMAGES);m.pixelStorei(U.UNPACK_ROW_LENGTH,he.width),m.pixelStorei(U.UNPACK_IMAGE_HEIGHT,he.height),m.pixelStorei(U.UNPACK_SKIP_PIXELS,Tt),m.pixelStorei(U.UNPACK_SKIP_ROWS,Ft),m.pixelStorei(U.UNPACK_SKIP_IMAGES,Ht);let bi=_.isDataArrayTexture||_.isData3DTexture,ee=D.isDataArrayTexture||D.isData3DTexture;if(_.isDepthTexture){let Se=N.get(_),zn=N.get(D),ce=N.get(Se.__renderTarget),kn=N.get(zn.__renderTarget);m.bindFramebuffer(U.READ_FRAMEBUFFER,ce.__webglFramebuffer),m.bindFramebuffer(U.DRAW_FRAMEBUFFER,kn.__webglFramebuffer);for(let wi=0;wi<yt;wi++)bi&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,N.get(_).__webglTexture,X,Ht+wi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,N.get(D).__webglTexture,dt,we+wi)),U.blitFramebuffer(Tt,Ft,_t,ut,St,Kt,_t,ut,U.DEPTH_BUFFER_BIT,U.NEAREST);m.bindFramebuffer(U.READ_FRAMEBUFFER,null),m.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(X!==0||_.isRenderTargetTexture||N.has(_)){let Se=N.get(_),zn=N.get(D);m.bindFramebuffer(U.READ_FRAMEBUFFER,O),m.bindFramebuffer(U.DRAW_FRAMEBUFFER,L);for(let ce=0;ce<yt;ce++)bi?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Se.__webglTexture,X,Ht+ce):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Se.__webglTexture,X),ee?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,zn.__webglTexture,dt,we+ce):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,zn.__webglTexture,dt),X!==0?U.blitFramebuffer(Tt,Ft,_t,ut,St,Kt,_t,ut,U.COLOR_BUFFER_BIT,U.NEAREST):ee?U.copyTexSubImage3D(gt,dt,St,Kt,we+ce,Tt,Ft,_t,ut):U.copyTexSubImage2D(gt,dt,St,Kt,Tt,Ft,_t,ut);m.bindFramebuffer(U.READ_FRAMEBUFFER,null),m.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ee?_.isDataTexture||_.isData3DTexture?U.texSubImage3D(gt,dt,St,Kt,we,_t,ut,yt,ie,Ne,he.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(gt,dt,St,Kt,we,_t,ut,yt,ie,he.data):U.texSubImage3D(gt,dt,St,Kt,we,_t,ut,yt,ie,Ne,he):_.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,dt,St,Kt,_t,ut,ie,Ne,he.data):_.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,dt,St,Kt,he.width,he.height,ie,he.data):U.texSubImage2D(U.TEXTURE_2D,dt,St,Kt,_t,ut,ie,Ne,he);m.pixelStorei(U.UNPACK_ROW_LENGTH,ke),m.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Yt),m.pixelStorei(U.UNPACK_SKIP_PIXELS,Qe),m.pixelStorei(U.UNPACK_SKIP_ROWS,_n),m.pixelStorei(U.UNPACK_SKIP_IMAGES,Bn),dt===0&&D.generateMipmaps&&U.generateMipmap(gt),m.unbindTexture()},this.initRenderTarget=function(_){N.get(_).__webglFramebuffer===void 0&&H.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?H.setTextureCube(_,0):_.isData3DTexture?H.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?H.setTexture2DArray(_,0):H.setTexture2D(_,0),m.unbindTexture()},this.resetState=function(){B=0,q=0,Q=null,m.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Wt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Wt._getUnpackColorSpace()}};var Ge={period:15,seed:1011,timeMode:"clock",hour:17.9,weather:"clear",wind:1,windSpeed:1,grassDensity:1,flowerDensity:1,flowerSize:1,heroes:!0,heroSize:1,colors:{white:"#f6eff1",pink:"#ee9fc3",magenta:"#d6127a",crimson:"#8a0a34"},colorWeights:{white:.38,pink:.27,magenta:.22,crimson:.13},skyline:!0,horizon:.385,haze:1,dof:1,bloom:1,exposure:0,grain:1,butterflies:2,petals:8,pollen:1,fireflies:1,quality:"high"},Ws={low:{grass:26e3,grassNear:600,flowers:.5,samples:0,dofTaps:16,treeline:700,shadow:0,ibl:0,ao:0},medium:{grass:48e3,grassNear:1400,flowers:.75,samples:4,dofTaps:24,treeline:1e3,shadow:1024,ibl:32,ao:1},high:{grass:8e4,grassNear:2600,flowers:1,samples:4,dofTaps:36,treeline:1400,shadow:2048,ibl:64,ao:1},ultra:{grass:13e4,grassNear:4e3,flowers:1.3,samples:8,dofTaps:48,treeline:1800,shadow:2048,ibl:128,ao:1}},_i=["clear","partly","overcast","fog","rain"],B0=i=>JSON.parse(JSON.stringify(i)),z0=["clock","fixed","timelapse"],k0=[..._i,"auto"],V0=[...Object.keys(Ws),"auto"],H0=/^#[0-9a-f]{6}$/i,G0={period:[2,600],wind:[0,3],windSpeed:[.25,3],grassDensity:[.3,1.6],flowerDensity:[0,4],flowerSize:[.5,2],heroSize:[.5,1.6],haze:[0,3],dof:[0,2],bloom:[0,2.5],exposure:[-2,2],grain:[0,2],butterflies:[0,8],petals:[0,30],pollen:[0,3],fireflies:[0,3]},W0=(i,[t,e],n)=>{let s=+i;return Number.isFinite(s)?Math.min(e,Math.max(t,s)):n};function si(i={}){let t=i&&typeof i=="object"?i:{},e={...B0(Ge),...t};e.colors={...Ge.colors,...t.colors&&typeof t.colors=="object"?t.colors:{}},e.colorWeights={...Ge.colorWeights,...t.colorWeights&&typeof t.colorWeights=="object"?t.colorWeights:{}};for(let n of Object.keys(e))n in Ge||delete e[n];z0.includes(e.timeMode)||(e.timeMode=Ge.timeMode),k0.includes(e.weather)||(e.weather=Ge.weather),V0.includes(e.quality)||(e.quality=Ge.quality),e.hour=Number.isFinite(+e.hour)?(+e.hour%24+24)%24:Ge.hour;for(let[n,s]of Object.entries(G0))e[n]=W0(e[n],s,Ge[n]);e.seed=Math.max(0,Math.floor(+e.seed)||0);for(let n of["heroes","skyline"])e[n]=!!e[n];for(let n of Object.keys(Ge.colors))H0.test(String(e.colors[n]||""))||(e.colors[n]=Ge.colors[n]);for(let n of Object.keys(Ge.colorWeights)){let s=+e.colorWeights[n];e.colorWeights[n]=Number.isFinite(s)?Math.min(1,Math.max(0,s)):Ge.colorWeights[n]}return e}var mh=["period","seed","grassDensity","flowerDensity","flowerSize","heroes","heroSize","colorWeights","skyline","horizon","butterflies","petals","pollen","fireflies","quality"];function ri(i){return function(){i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var gh=`
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
`;function ka(){let i=()=>({value:new k});return{uPhase:{value:0},uLoop:{value:0},uTime:{value:0},uPeriod:{value:15},uWindCyc:{value:new k(1,2,3)},uFlutterCyc:{value:new Ut(5,8)},uWind:{value:1},uLightDir:i(),uLightColor:i(),uSunDir:i(),uGlowColor:i(),uSunDisc:i(),uSkyAmb:i(),uGroundAmb:i(),uZenith:i(),uHorizon:i(),uFogDensity:{value:45e-5},uCloudCover:{value:.2},uCloudShadow:{value:.6},uCloudDrift:{value:new Ut(14,-4)},uCloudLit:i(),uCloudDark:i(),uSunVis:{value:1},uStars:{value:0},uMoon:{value:0},uMoonDir:i(),uCityLights:{value:0},uWet:{value:0},uRain:{value:0},uShadowMap:{value:null},uShadowMatrix:{value:new se},uShadowTexel:{value:new Ut(1/2048,1/2048)},uShadowBias:{value:8e-4},uShadowEnabled:{value:0},uEnvMap:{value:null},uEnvIntensity:{value:0},uPalBase:{value:[i().value,i().value,i().value,i().value]},uPalMid:{value:[i().value,i().value,i().value,i().value]},uPalTip:{value:[i().value,i().value,i().value,i().value]}}}var ss=`
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
`;var Xs=`
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
`;var Me=[gh,vh,xh,_h,yh].join(`
`);var Si=i=>{let t=new Ot(i);return[t.r,t.g,t.b]},Va=(i,t,e)=>i+(t-i)*e,Mi=(i,t,e)=>[Va(i[0],t[0],e),Va(i[1],t[1],e),Va(i[2],t[2],e)],ae=(i,t)=>[i[0]*t,i[1]*t,i[2]*t],rs=(i,t)=>[i[0]+t[0],i[1]+t[1],i[2]+t[2]],as=i=>.2126*i[0]+.7152*i[1]+.0722*i[2],gl=(i,t)=>Mi(i,[as(i),as(i),as(i)],t),Cn=(i,t,e)=>{let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},yi=[{e:-26,zen:"#010207",hor:"#070b18",glow:"#000000",glowI:0,sun:"#000000",sunI:0,amb:1,sat:.72,tint:[.9,.96,1.08],ex:2.3},{e:-11,zen:"#040a1e",hor:"#1b2645",glow:"#3a3466",glowI:.25,sun:"#000000",sunI:0,amb:1.6,sat:.78,tint:[.92,.96,1.06],ex:2},{e:-4.5,zen:"#14275a",hor:"#a26c74",glow:"#ff8c5a",glowI:.9,sun:"#ff6a30",sunI:0,amb:2.2,sat:.95,tint:[1,.96,1],ex:1.5},{e:0,zen:"#1f3d7e",hor:"#f0965e",glow:"#ff8a40",glowI:1.5,sun:"#ff7a36",sunI:1.1,amb:1.5,sat:1.08,tint:[1.05,.97,.92],ex:1.15},{e:5,zen:"#3b73a8",hor:"#f5b77a",glow:"#ffa95a",glowI:1,sun:"#ffa65a",sunI:2.5,amb:.9,sat:1.1,tint:[1.03,1,.95],ex:1},{e:14,zen:"#336fb8",hor:"#d6dbdc",glow:"#ffd7a6",glowI:.75,sun:"#ffd8a8",sunI:2.9,amb:1,sat:1.06,tint:[1.04,1,.95],ex:1},{e:40,zen:"#2c68c2",hor:"#bad2e8",glow:"#fff6ea",glowI:.6,sun:"#fff6ec",sunI:3.3,amb:1,sat:1,tint:[1,1,1],ex:1}].map(i=>({...i,zen:Si(i.zen),hor:Si(i.hor),glow:Si(i.glow),sun:Si(i.sun)}));function X0(i){if(i<=yi[0].e)return yi[0];for(let t=0;t<yi.length-1;t++){let e=yi[t],n=yi[t+1];if(i<=n.e){let s=Cn(0,1,(i-e.e)/(n.e-e.e)),r={};for(let a of Object.keys(e))r[a]=Array.isArray(e[a])?Mi(e[a],n[a],s):Va(e[a],n[a],s);return r}}return yi[yi.length-1]}function q0(i){let t=(i%24+24)%24,e,n;if(t>=6&&t<=18.5){let c=(t-6)/12.5;e=c*Math.PI,n=Math.sin(c*Math.PI)*62}else{let c=(t-18.5+24)%24/11.5;e=Math.PI+c*Math.PI,n=-Math.sin(c*Math.PI)*42}let s=Math.sin(e)-.32*Math.pow(Math.sin(e/2),2),r=Math.cos(e),a=Math.hypot(s,r)||1,o=n*Math.PI/180;return{dir:new k(s/a*Math.cos(o),Math.sin(o),r/a*Math.cos(o)),elev:n}}var Y0=new k(-.42,.42,-.8).normalize();function Z0(i){let{dir:t,elev:e}=q0(i),n=X0(e),s=Cn(-2,-9,e),r=Cn(-1.5,3,e),a=Si("#b4c2f0"),o=new k().copy(t).lerp(Y0,s).normalize(),c=rs(ae(n.sun,n.sunI*r),ae(a,.16*s)),l=rs(ae(Mi(n.hor,n.zen,.55),.9*n.amb),ae(Si("#1e2a44"),.6*s));return{sunDir:t,elev:e,lightDir:o,lightCol:c,zen:n.zen,hor:n.hor,glow:ae(n.glow,n.glowI),sunDisc:ae(n.sun,30*r+4*Cn(-3,0,e)),skyAmb:l,groundAmb:rs(ae(l,.32),ae(Si("#2f4a1c"),.12*r)),fogMul:1,cloudCover:.07,cloudShadow:.65,sunVis:1,cloudLit:rs(ae(n.sun,n.sunI*.28*r),ae(l,1.15)),cloudDark:rs(ae(l,.55),ae(n.hor,.25)),stars:Cn(-7,-15,e),moon:Cn(-3,-10,e),cityLights:Cn(4,-6,e),sat:n.sat,tint:n.tint,contrast:1.05,ex:n.ex,bloom:1,rain:0,wet:0,pollen:r,butterflies:Cn(4,12,e),fireflies:Cn(-3,-9,e)}}function $0(i,t){let e={...i},n=(s,r,a)=>ae(gl(s,a),r);if(t==="clear")return e;if(t==="partly")return e.cloudCover=.52,e.cloudShadow=.72,e.lightCol=ae(e.lightCol,.95),e;if(t==="overcast")return e.cloudCover=.97,e.cloudShadow=.15,e.zen=n(e.zen,.78,.82),e.hor=n(e.hor,.85,.8),e.skyAmb=ae(gl(e.skyAmb,.6),1.25),e.groundAmb=ae(e.groundAmb,1.15),e.lightCol=ae(e.lightCol,.12),e.glow=ae(e.glow,.25),e.sunVis=0,e.cloudLit=n(e.cloudLit,.85,.75),e.cloudDark=n(e.cloudDark,.8,.7),e.sat*=.86,e.contrast=.97,e.stars=0,e.moon=0,e.pollen*=.3,e.butterflies*=.4,e.cityLights=Math.max(e.cityLights,.08),e;if(t==="fog"){e.fogMul=9,e.cloudCover=.75,e.cloudShadow=.1;let s=Mi(e.hor,[as(e.hor)*1.05,as(e.hor)*1.06,as(e.hor)*1.08],.6);return e.hor=Mi(e.hor,s,.7),e.zen=Mi(e.zen,e.hor,.65),e.skyAmb=ae(Mi(e.skyAmb,e.hor,.5),1.25),e.lightCol=ae(e.lightCol,.4),e.glow=ae(e.glow,1.4),e.sunVis=.35,e.sat*=.82,e.contrast=.95,e.stars=0,e.moon*=.2,e.bloom=1.4,e.butterflies*=.3,e}return t==="rain"&&(e.cloudCover=1,e.cloudShadow=.05,e.fogMul=3.5,e.zen=n(e.zen,.5,.85),e.hor=n(e.hor,.62,.8),e.skyAmb=ae(gl(e.skyAmb,.65),.95),e.groundAmb=ae(e.groundAmb,.9),e.lightCol=ae(e.lightCol,.03),e.glow=ae(e.glow,.15),e.sunVis=0,e.cloudLit=n(e.cloudLit,.55,.85),e.cloudDark=n(e.cloudDark,.5,.8),e.sat*=.86,e.contrast=.98,e.stars=0,e.moon=0,e.rain=1,e.wet=1,e.pollen=0,e.butterflies=0,e.fireflies=0,e.cityLights=Math.max(e.cityLights,.15)),e}function J0(i){let t={},e=i.reduce((n,[,s])=>n+s,0)||1;for(let[n,s]of i){let r=s/e;for(let a of Object.keys(n)){let o=n[a];o instanceof k?(t[a]=t[a]||new k,t[a].addScaledVector(o,r)):Array.isArray(o)?t[a]=t[a]?rs(t[a],ae(o,r)):ae(o,r):t[a]=(t[a]||0)+o*r}}return t.lightDir.normalize(),t.sunDir.normalize(),t}function Mh(i,t){let e=Z0(i),n=_i.filter(s=>(t[s]||0)>.001).map(s=>[$0(e,s),t[s]]);return J0(n.length?n:[[e,1]])}var K0=[["clear",.42],["partly",.26],["overcast",.12],["fog",.08],["rain",.12]];function Q0(i){let t=Math.imul(i^2654435769,2246822507);return t^=t>>>13,t=Math.imul(t,3266489909),t^=t>>>16,(t>>>0)/4294967296}function Sh(i){let t=Q0(i);for(let[e,n]of K0)if((t-=n)<=0)return e;return"clear"}function bh(i=new Date){let t=Math.floor((i.getTime()-i.getTimezoneOffset()*6e4)/864e5),e=i.getHours()+i.getMinutes()/60,n=t*8+Math.floor(e/3),s=Sh(n),r=Sh(n-1),a=Cn(0,.5,e%3),o={};return o[r]=(o[r]||0)+(1-a),o[s]=(o[s]||0)+a,{weights:o,name:a>=.5?s:r}}function Rn(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}function os(i,{mips:t=!0}={}){let e=new As(i);return e.colorSpace=mn,e.generateMipmaps=t,e.minFilter=t?sn:de,e.magFilter=de,e.wrapS=e.wrapT=tn,e.anisotropy=4,e.needsUpdate=!0,e}function j0(i,t,e,n){let s=e/2,r=n,a=6+Math.floor(t()*4),o=n*.0052;i.lineCap="round";for(let c=0;c<a;c++){let l=(t()-.5)*1.05,u=n*(.55+.42*t()),p=s+Math.sin(l)*u*.85*(e/n),h=r-Math.cos(l)*u,d=s+Math.sin(l)*u*.2+(t()-.5)*u*.12,v=r-u*.55,S=f=>{let w=Math.round(255*Math.min(1,f));return`rgb(${w},${w},${w})`};i.strokeStyle=S(.42),i.lineWidth=o*1.5,i.beginPath(),i.moveTo(s,r),i.quadraticCurveTo(d,v,p,h),i.stroke(),i.strokeStyle=S(.82),i.lineWidth=o*.55,i.beginPath(),i.moveTo(s,r),i.quadraticCurveTo(d+1,v,p,h),i.stroke();let g=7+Math.floor(t()*6);for(let f=1;f<=g;f++){let w=f/(g+.5),A=1-w,M=A*A*s+2*A*w*d+w*w*p,b=A*A*r+2*A*w*v+w*w*h,T=2*A*(d-s)+2*w*(p-d),C=2*A*(v-r)+2*w*(h-v),x=Math.atan2(T,-C);for(let E of[-1,1]){if(t()>.88)continue;let P=u*(.14+.18*t())*(1-.5*w),I=x+E*(.4+.6*t()),z=M+Math.sin(I)*P,V=b-Math.cos(I)*P,O=M+Math.sin(I-E*.3)*P*.55,L=b-Math.cos(I-E*.3)*P*.55;i.strokeStyle=S(.5+.5*w+(t()-.5)*.25),i.lineWidth=o,i.beginPath(),i.moveTo(M,b),i.quadraticCurveTo(O,L,z,V),i.stroke();let B=2+Math.floor(t()*2);for(let q=0;q<B;q++){let Q=.3+t()*.5,G=M+(z-M)*Q,Y=b+(V-b)*Q,J=I+(t()<.5?-1:1)*(.35+t()*.45),vt=P*(.3+t()*.35);i.lineWidth=o*.8,i.beginPath(),i.moveTo(G,Y),i.lineTo(G+Math.sin(J)*vt,Y-Math.cos(J)*vt),i.stroke()}}}}}function Ha(i=6,t=512){let e=Rn(t*i,t),n=e.getContext("2d");for(let s=0;s<i;s++)n.save(),n.beginPath(),n.rect(s*t,0,t,t),n.clip(),n.translate(s*t,0),j0(n,ri(4242+s*97),t,t),n.restore();return os(e)}var _e=256,Le=512,vl=2,wh=2;function tg(i,t,e){let n=_e,s=Le,r=s*(.975+.02*t()),a=n*(.44+.05*t()),o=n*.045,c=3+(e===3?1:0),l=new Path2D;l.moveTo(-o,0),l.bezierCurveTo(-n*.2,-r*.3,-a*1.05,-r*.62,-a,-r*.88);for(let p=0;p<c;p++){let h=-a+2*a*p/c,d=-a+2*a*(p+1)/c,v=(h+d)/2,S=(d-h)*(.18+.08*t()),g=-r*(.94+.045*t()+(p===Math.floor(c/2)?.02:0)),f=p===c-1?-r*.86:-r*(.85+.035*t());l.quadraticCurveTo(v-S,g,v,g),l.quadraticCurveTo(v+S,g,d,f)}l.bezierCurveTo(a*1.05,-r*.62,n*.2,-r*.3,o,0),l.closePath(),i.save(),i.translate(n/2,s),i.fillStyle="#fff",i.fill(l),i.clip(l);for(let p=-11;p<=11;p++){let h=p/11,d=Math.abs(p)%3===0;i.strokeStyle=`rgba(60,60,60,${(d?.42:.24)+t()*.2})`,i.lineWidth=d?2.4:1.2,i.beginPath(),i.moveTo(h*o*.8,-6),i.bezierCurveTo(h*a*.3,-r*.35,h*a*.85,-r*.65,h*a*(.75+.2*t()),-r*(.82+.1*t())),i.stroke()}for(let p=0;p<26;p++){let h=.15+t()*.75,d=-r*h,v=(t()-.5)*a*1.5*(.3+h);i.strokeStyle=`rgba(90,90,90,${.12+t()*.12})`,i.lineWidth=.8,i.beginPath(),i.moveTo(v,d),i.lineTo(v+(t()-.5)*26,d-6-t()*10),i.stroke()}let u=i.createLinearGradient(0,0,0,-r*.3);return u.addColorStop(0,"rgba(40,40,40,0.65)"),u.addColorStop(1,"rgba(40,40,40,0)"),i.fillStyle=u,i.fillRect(-n,-r*.3,n*2,r*.3),i.restore(),{shape:l,len:r}}function eg(i){let t=ri(9100+i*137),e=Rn(_e,Le),n=e.getContext("2d"),{shape:s,len:r}=tg(n,t,i),o=Rn(_e,Le).getContext("2d");o.drawImage(e,0,0),o.globalCompositeOperation="destination-out";for(let w=0;w<26;w++){let A=.3+t()*.68,M=Le-r*A,b=_e/2+(t()-.5)*_e*.9*A;o.beginPath(),o.arc(b,M,.7+t()*2,0,Math.PI*2),o.fill()}o.globalCompositeOperation="source-over";let l=Rn(_e,Le).getContext("2d");l.fillStyle="#fff",l.fillRect(0,0,_e,Le),l.save(),l.translate(_e/2,Le),l.clip(s);for(let w=-11;w<=11;w++){let A=w/11,M=Math.abs(w)%3===0;l.strokeStyle=`rgba(70,70,70,${(M?.4:.22)+t()*.18})`,l.lineWidth=M?2.2:1.2,l.beginPath(),l.moveTo(A*_e*.036,-6),l.bezierCurveTo(A*_e*.14,-r*.35,A*_e*.4,-r*.65,A*_e*.44,-r*.85),l.stroke()}l.restore();let p=Rn(_e,Le).getContext("2d");p.filter="blur(7px)",p.drawImage(e,0,0);let h=n.getImageData(0,0,_e,Le).data,d=o.getImageData(0,0,_e,Le).data,v=l.getImageData(0,0,_e,Le).data,S=p.getImageData(0,0,_e,Le).data,g=new ImageData(_e,Le),f=g.data;for(let w=0;w<Le;w++){let A=1-w/Le,M=.92-.62*A;for(let b=0;b<_e;b++){let T=(w*_e+b)*4,C=Math.min(1,Math.max(0,A)),x=S[T+3]/255,E=Math.min(1,Math.max(.12,M*(.55+.45*Math.min(1,x*1.6))+(t()-.5)*.04));f[T]=v[T],f[T+1]=S[T+3],f[T+2]=Math.round(255*E),f[T+3]=d[T+3]}}return g}function Ga(){let i=Rn(_e*vl,Le*wh),t=i.getContext("2d");for(let e=0;e<vl*wh;e++){let n=eg(e),s=e%vl,r=e<2?1:0;t.putImageData(n,s*_e,r*Le)}return os(i)}function Wa(){let t=Rn(128,128),e=t.getContext("2d");e.fillStyle="#f7f6ee",e.beginPath(),e.ellipse(128*.55,128*.36,128*.42,128*.3,-.45,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(128*.4,128*.72,128*.3,128*.24,.5,0,Math.PI*2),e.fill(),e.globalCompositeOperation="source-atop",e.fillStyle="#4a4a46",e.beginPath(),e.ellipse(128*.9,128*.12,128*.2,128*.14,-.45,0,Math.PI*2),e.fill(),e.fillStyle="rgba(60,60,60,0.75)",e.beginPath(),e.arc(128*.6,128*.36,128*.05,0,Math.PI*2),e.fill();let n=e.createLinearGradient(0,0,128*.5,0);return n.addColorStop(0,"rgba(180,180,150,0.5)"),n.addColorStop(1,"rgba(180,180,150,0)"),e.fillStyle=n,e.fillRect(0,0,128,128),os(t)}var Th=i=>new Ot(i),Ys=class{constructor(){this.pos=[],this.nrm=[],this.uv=[],this.part=[],this.idx=[]}v(t,e,n,s){return this.pos.push(t[0],t[1],t[2]),this.nrm.push(e[0],e[1],e[2]),this.uv.push(n[0],n[1]),this.part.push(s),this.pos.length/3-1}grid(t,e,n,s){let r=this.pos.length/3;for(let a=0;a<=e;a++)for(let o=0;o<=t;o++){let c=o/t,l=a/e,{p:u,n:p}=n(c,l);this.v(u,p,[c,l],s)}for(let a=0;a<e;a++)for(let o=0;o<t;o++){let c=r+a*(t+1)+o,l=c+1,u=c+t+1,p=u+1;this.idx.push(c,u,l,l,u,p)}}build(){let t=new Ee;return t.setAttribute("position",new ne(this.pos,3)),t.setAttribute("normal",new ne(this.nrm,3)),t.setAttribute("uv",new ne(this.uv,2)),t.setAttribute("aPart",new ne(this.part,1)),t.setIndex(this.idx),t}};function qs(i=6){let t=new Ys;for(let e=0;e<3;e++){let n=e*Math.PI/3,s=Math.cos(n),r=Math.sin(n);t.grid(2,i,(a,o)=>({p:[(a-.5)*s,o,(a-.5)*r],n:[-r,0,s]}),0)}return t.build()}function Ch(i){i.grid(6,6,(n,s)=>{let r=n*Math.PI*2;return{p:[Math.cos(r),s,Math.sin(r)],n:[Math.cos(r),0,Math.sin(r)]}},0)}function ng(){let i=new Ys;Ch(i);let t=8,e=.1;for(let c=0;c<t;c++){let l=c/t*Math.PI*2+Math.sin(c*7.3)*.1,u=Math.cos(l),p=Math.sin(l),h=-p,d=u,v=.92+.12*Math.abs(Math.sin(c*3.1+.7)),S=.16+.1*Math.abs(Math.sin(c*5.7)),g=Math.sin(c*2.3)*.1,f=.8;i.grid(3,6,(w,A)=>{let M=e+(v-e)*A,b=.18+.82*Math.pow(A,.5),T=(w-.5)*f*b,C=Math.abs(w-.5)*2,x=S*A*A+g*A+.035*Math.sin(w*Math.PI)*A-.1*C*C*A*A+.03*Math.pow(A,3)*Math.cos(C*Math.PI),E=2*S*A+g,P=.22*C*A,I=new k(-u*E+h*P,1,-p*E+d*P).normalize();return{p:[u*M+h*T,x,p*M+d*T],n:[I.x,I.y,I.z]}},1)}for(let c=0;c<6;c++){let l=c/6*Math.PI*2+.35,u=Math.cos(l),p=Math.sin(l),h=-p,d=u,v=.52+.06*Math.sin(c*4.1),S=.3;i.grid(2,4,(g,f)=>{let w=e*.55+(v-e*.55)*f,A=.25+.75*Math.pow(f,.6),M=(g-.5)*.6*A,b=.03+S*f*f+.02*Math.sin(g*Math.PI)*f,T=2*S*f,C=new k(-u*T,1,-p*T).normalize();return{p:[u*w+h*M,b,p*w+d*M],n:[C.x,C.y,C.z]}},5)}let n=3,s=16,r=.2,a=i.v([0,.09,0],[0,1,0],[.5,.5],2),o=null;for(let c=1;c<=n;c++){let l=c/n*r,u=[];for(let p=0;p<s;p++){let h=p/s*Math.PI*2,d=.012*Math.sin(h*12+c*1.7)+.008*Math.sin(h*5+c),v=Math.cos(h)*l,S=Math.sin(h)*l,g=.075*(1-l/r*(l/r))+.012+d,f=new k(v*2,1,S*2).normalize();u.push(i.v([v,g,S],[f.x,f.y,f.z],[.5+v,.5+S],2))}for(let p=0;p<s;p++){let h=(p+1)%s;o?i.idx.push(o[p],o[h],u[p],o[h],u[h],u[p]):i.idx.push(a,u[h],u[p])}o=u}for(let c=0;c<12;c++){let l=c/12*Math.PI*2+.13,u=.155,p=Math.cos(l)*u,h=Math.sin(l)*u,d=.075*(1-u/r*(u/r))+.012,v=i.v([p*1.18,d+.055,h*1.18],[0,1,0],[.5,.5],2),S=[];for(let g=0;g<3;g++){let f=l+g/3*Math.PI*2;S.push(i.v([p+Math.cos(f)*.012,d,h+Math.sin(f)*.012],[Math.cos(f),.3,Math.sin(f)],[.5,.5],2))}i.idx.push(S[0],v,S[1],S[1],v,S[2],S[2],v,S[0])}return i.build()}function ig(){let i=new Ys;Ch(i),i.grid(10,7,(n,s)=>{let r=s*Math.PI,a=n*Math.PI*2,o=Math.sin(r)*Math.cos(a)*.42,c=Math.sin(r)*Math.sin(a)*.42,l=.5-Math.cos(r)*.55,u=new k(o/.42,(l-.5)/.55,c/.42).normalize();return{p:[o,l,c],n:[u.x,u.y,u.z]}},3);for(let n=0;n<7;n++){let s=n/7*Math.PI*2,r=Math.cos(s),a=Math.sin(s);i.grid(1,3,(o,c)=>{let l=(o-.5)*.22*(1-c);return{p:[r*(.1+.55*c)-a*l,.12+.25*c-.15*c*c,a*(.1+.55*c)+r*l],n:[r*.3,1,a*.3]}},4)}return i.build()}function ls(i,t,e){let n=new On;n.index=i.index;for(let s of Object.keys(i.attributes))n.setAttribute(s,i.attributes[s]);for(let[s,[r,a]]of Object.entries(t))n.setAttribute(s,new dn(r,a));return n.instanceCount=e,n}var Rh=`
${Me}
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
${Me}
${ss}
${Xs}
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
${Me}
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
${Me}
${ss}
${Xs}
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
${Me}
varying vec3 vWorld;
varying vec4 vShadowCoord;
void main() {
  vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
  vShadowCoord = uShadowMatrix * vec4(vWorld + vec3(0.0, 0.01, 0.0), 1.0);
  gl_Position = projectionMatrix * viewMatrix * vec4(vWorld, 1.0);
}`,og=`
${Me}
${ss}
${Xs}
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
}`;function xl(i,t,e,n,s){return new te({uniforms:{...i,uAtlas:{value:t.atlas},uDark:{value:Th(n)},uLight:{value:Th(s)},uA2C:{value:e?1:0},uVariants:{value:6}},vertexShader:Rh,fragmentShader:sg,side:Pe,alphaToCoverage:e})}var lg=`
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
}`;function hg(i,t){return new te({uniforms:{...i,uAtlas:{value:t.atlas}},vertexShader:Rh,fragmentShader:lg,side:Pe})}function Eh(i,t){return new te({uniforms:{...i,uPetal:{value:t.petal}},vertexShader:Ph,fragmentShader:cg,side:Pe})}function cs(i,t,e,n,s=0){let r;do r=t+(e-t)*i();while(s>0&&i()>Math.min(1,r/s));let a=Math.atan(.5/Math.max(r,.05)),o=(i()*2-1)*(n+.1+a);return{r,th:o,x:Math.sin(o)*r,z:-Math.cos(o)*r}}var ug=[{col:3,sx:.805,sy:.585,R:.072,d:1,turn:-.35,up:.55,spin:.7},{col:2,sx:.7,sy:.5,R:.098,d:.86,turn:.15,up:.35,spin:.2},{col:1,sx:.585,sy:.655,R:.055,d:1.12,turn:.25,up:.45,spin:1.3}],dg=[{type:0,sx:.758,sy:.455,R:.026,d:.95},{type:1,sx:.645,sy:.735,R:.02,d:1.05},{type:2,sx:.862,sy:.705,R:.022,d:1}];function Ah(i,t,e,n){let s=new k(t*2-1,1-e*2,.5).unproject(i).sub(i.position).normalize(),r=n/Math.max(.05,-s.z);return{p:i.position.clone().addScaledVector(s,r),dist:r}}function Ih({U:i,tex:t,cfg:e,q:n,rng:s,camera:r,aspect:a}){let o=new Ye,c=n.samples>0,l=Math.atan(Math.tan(gn.degToRad(r.fov/2))*a),u=Math.tan(gn.degToRad(r.fov/2)),p=[],h=[];if(e.heroes){for(let y of ug){let{p:m,dist:R}=Ah(r,y.sx,y.sy,y.d),N=y.R*2*u*R*e.heroSize,H=r.position.clone().sub(m).setY(0).normalize(),it=new k(-H.z,0,H.x),st=H.clone().addScaledVector(it,y.turn).add(new k(0,y.up,0)).normalize();p.push({base:new k(m.x-.015,0,m.z+.02),h:m.y,facing:st,R:N,col:y.col,spin:y.spin}),h.push({sx:y.sx,sy:y.sy,r:y.R*e.heroSize*1.6,d:y.d})}for(let y of dg){let{p:m,dist:R}=Ah(r,y.sx,y.sy,y.d);p.push({bud:!0,base:new k(m.x,0,m.z+.01),h:m.y,facing:new k(.1,1,.25).normalize(),R:y.R*2*u*R*e.heroSize,type:y.type})}}let d=new k,v=(y,m,R,N)=>{for(let H of h){if(N>H.d+.05)continue;d.set(y,m,R).project(r);let it=d.x*.5+.5,st=.5-d.y*.5;if(Math.abs(it-H.sx)*a<H.r+.1&&st<H.sy+H.r*.8)return!0}return!1},S=Math.round(n.grass*Math.max(.2,e.grassDensity)),g=new Float32Array(S*3),f=new Float32Array(S*4),w=new Float32Array(S*2),A=new Float32Array(S*3),M=new Float32Array(S*4),b=new Float32Array(S*2),T=0,C=0,x={pos:[],d:[],d2:[]},E=(y,m)=>{let R=Math.sin(y*.13+Math.sin(m*.075)*2.2)*.5+.5,N=Math.sin(m*.19-y*.055+1.7)*.5+.5,H=Math.sin((y+m)*.045+Math.cos(y*.021)*3)*.5+.5;return Math.min(1,.22+.78*(R*.45+N*.3+H*.25))},P=Math.max(220,Math.round(S/130)),I=[];for(let y=0;y<P*2.2&&I.length<P;y++){let m=cs(s,.65,210,l,14),R=E(m.x,m.z);s()>R||I.push({x:m.x,z:m.z,r:.35+s()*1.15,hMul:.78+s()*.5,tint:.18+R*.55+s()*.25,phase:s()*Math.PI*2})}let z=0,V=0,O=35;for(let y=0;y<S*1.2&&z+V<S;y++){let m,R,N,H=I.length&&s()>.06?I[s()*I.length|0]:null;if(H){let rt=s()*Math.PI*2,ot=Math.sqrt(s())*H.r;m=H.x+Math.cos(rt)*ot,R=H.z+Math.sin(rt)*ot,N=Math.hypot(m,R);let wt=Math.atan2(m,-R);if(N<.45||Math.abs(wt)>l+.2)continue}else{let rt=cs(s,.75,230,l,14);m=rt.x,R=rt.z,N=rt.r}let it=(.5+s()*.45)*(H?H.hMul:1);N<2&&(it=Math.min(it,.5+.15*N));for(let rt=0;rt<4&&v(m,it,R,N);rt++)it*=.72;if(v(m,it,R,N))continue;let st=it*(.72+s()*.4),$=s()*Math.PI*2,j=Math.floor(s()*6),at=H?Math.min(1,Math.max(0,H.tint+(s()-.5)*.22)):s(),Mt=H?H.phase+(s()-.5)*.9:s()*Math.PI*2;N>O?(A.set([m,0,R],V*3),M.set([st,it,$,j],V*4),b.set([at,Mt],V*2),V++):(g.set([m,0,R],z*3),f.set([st,it,$,j],z*4),w.set([at,Mt],z*2),z++),N<=T&&x.pos.length<C*3&&(x.pos.push(m,0,R),x.d.push(st,it,$,j),x.d2.push(at,Mt))}let L=xl(i,t,c,"#11240a","#4c7524");if(z>0){let y=new re(ls(qs(6),{iPos:[g,3],iData:[f,4],iData2:[w,2]},z),L);y.frustumCulled=!1,o.add(y)}if(V>0){let y=new re(ls(qs(3),{iPos:[A,3],iData:[M,4],iData2:[b,2]},V),L);y.frustumCulled=!1,o.add(y)}let B=Math.round((n.grassNear||0)*Math.max(.2,e.grassDensity)),q=0;if(B>0){let y=new Float32Array(B*3),m=new Float32Array(B*4),R=new Float32Array(B*2),N=0;for(let it=0;it<B*1.5&&N<B;it++){let st=cs(s,.5,6,l,0),$=.36+s()*.34;v(st.x,$,st.z,st.r)||(y.set([st.x,0,st.z],N*3),m.set([$*(.72+s()*.34),$,s()*Math.PI*2,Math.floor(s()*6)],N*4),R.set([s(),s()*Math.PI*2],N*2),N++)}let H=new re(ls(qs(7),{iPos:[y,3],iData:[m,4],iData2:[R,2]},N),xl(i,t,c,"#0f2108","#57862a"));H.frustumCulled=!1,o.add(H),q=N}let Q=["white","pink","magenta","crimson"].map(y=>Math.max(0,+e.colorWeights[y]||0)),G=Q.reduce((y,m)=>y+m,0),Y=()=>{if(G<=0)return 0;let y=s()*G;for(let m=0;m<4;m++)if((y-=Q[m])<=0&&Q[m]>0)return m;return Q.findLastIndex(m=>m>0)},J=Math.round(9500*e.flowerDensity*n.flowers),vt=Math.round(J*.35),mt={pos:[],head:[],data:[],sway:[]},Gt={pos:[],head:[],data:[],sway:[]},It={pos:[],head:[],data:[],sway:[]},zt={pos:[],head:[],data:[],sway:[]},K=12,et=1200,xt=12,Pt=600,ft=(y,m)=>{let R=y.sway.length-1;R<0||(m.pos.push(...y.pos.slice(R*3,R*3+3)),m.head.push(...y.head.slice(R*4,R*4+4)),m.data.push(...y.data.slice(R*4,R*4+4)),m.sway.push(y.sway[R]))},Lt=(y,m,R,N,H)=>{y.pos.push(...m),y.head.push(...R),y.data.push(...N),y.sway.push(H)},xe=(y,m,R)=>{let N=new k(-y,0,-m).normalize(),H=new k(-N.z,0,N.x);return N.multiplyScalar(.15+s()*.75).addScaledVector(H,(s()-.5)*1.1).add(new k(0,R,0)).normalize()};for(let y=0;y<J*1.3&&mt.sway.length<J;y++){let R=s()<.003?cs(s,.5,1,l):cs(s,2,170,l,12),N=.6+s()*.38;if(v(R.x,N,R.z,R.r))continue;let H=(.03+s()*.016)*e.flowerSize;R.r>35&&(H*=1+(R.r-35)/60),Lt(mt,[R.x,0,R.z],[...xe(R.x,R.z,1.2+s()*1.8).toArray(),H],[N,Y(),s()*6.283,s()*6.283],1),R.r<=K&&It.pos.length<et*3&&ft(mt,It)}for(let y=0;y<vt;y++){let m=cs(s,2,90,l,18),R=.55+s()*.38;if(v(m.x,R,m.z,m.r))continue;let N=(.012+s()*.008)*e.flowerSize*(m.r>35?1+(m.r-35)/60:1);Lt(Gt,[m.x,0,m.z],[...xe(m.x,m.z,1.6).toArray(),N],[R,s()<.45?0:s()<.8?1:2,s()*6.283,s()*6.283],1),m.r<=xt&&zt.pos.length<Pt*3&&ft(Gt,zt)}for(let y of p)y.bud?(Lt(Gt,y.base.toArray(),[...y.facing.toArray(),y.R],[y.h,y.type,s()*6.283,0],.22),ft(Gt,zt)):(Lt(mt,y.base.toArray(),[...y.facing.toArray(),y.R],[y.h,y.col,s()*6.283,y.spin],.22),ft(mt,It));let kt=new te({uniforms:{...i,uPetal:{value:t.petal},uA2C:{value:c?1:0}},vertexShader:Ph,fragmentShader:rg,side:Pe,alphaToCoverage:c}),qt=ng(),jt=ig();for(let[y,m]of[[mt,qt],[Gt,jt]]){let R=y.sway.length;if(!R)continue;let N=new re(ls(m,{iPos:[new Float32Array(y.pos),3],iHead:[new Float32Array(y.head),4],iData:[new Float32Array(y.data),4],iSway:[new Float32Array(y.sway),1]},R),kt);N.frustumCulled=!1,o.add(N)}let Vt=new re(new pi(9e3,9e3).rotateX(-Math.PI/2),new te({uniforms:{...i},vertexShader:ag,fragmentShader:og}));Vt.frustumCulled=!1,o.add(Vt);let $t=n.treeline,ye=new Float32Array($t*3),Ie=new Float32Array($t*4),oe=new Float32Array($t*2);for(let y=0;y<$t;y++){let m=(s()*2-1)*(l+.25),R=260+s()*260,N=Math.pow(Math.sin(m*9+1.3)*.5+.5,1.5)*.7+Math.pow(Math.sin(m*23)*.5+.5,3)*.5,H=3+s()*5+N*14;ye.set([Math.sin(m)*R,-.5,-Math.cos(m)*R],y*3),Ie.set([H*(1+s()*.6),H,s()*6.283,Math.floor(s()*6)],y*4),oe.set([s()*.5,s()*6.283],y*2)}let pe=new re(ls(qs(),{iPos:[ye,3],iData:[Ie,4],iData2:[oe,2]},$t),xl(i,t,c,"#0f1c0c","#33482a"));pe.frustumCulled=!1,o.add(pe);let U=[],be=(y,m,R,N)=>{if(!R)return;let H=new re(ls(y,m,R),N);H.frustumCulled=!1,U.push(H)};be(qs(),{iPos:[new Float32Array(x.pos),3],iData:[new Float32Array(x.d),4],iData2:[new Float32Array(x.d2),2]},x.pos.length/3,hg(i,t));let Zt=y=>({iPos:[new Float32Array(y.pos),3],iHead:[new Float32Array(y.head),4],iData:[new Float32Array(y.data),4],iSway:[new Float32Array(y.sway),1]});return be(qt,Zt(It),It.sway.length,Eh(i,t)),be(jt,Zt(zt),zt.sway.length,Eh(i,t)),{group:o,shadowCasters:U,counts:{grass:z+V,grassFar:V,grassNear:q,flowers:mt.sway.length,buds:Gt.sway.length}}}var fg=`
varying vec3 vWorld;
void main() {
  vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
  gl_Position = projectionMatrix * viewMatrix * vec4(vWorld, 1.0);
  gl_Position.z = gl_Position.w * 0.99999;
}`,pg=`
${Me}
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
}`;function Dh(i){let t=new te({uniforms:{...i,uTwinkle:{value:7}},vertexShader:fg,fragmentShader:pg,side:De,depthWrite:!1}),e=new re(new Rs(5e3,48,24),t);return e.frustumCulled=!1,e.renderOrder=-10,{mesh:e,mat:t}}var mg=`
${Me}
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
${Me}
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
}`;function Lh(i,t,e){let n=[],s=d=>Math.pow(.5+.5*Math.sin(d*7+.6),2)*.6+Math.pow(.5+.5*Math.sin(d*17+2),3)*.5,r=(d,v,S,g,f)=>{let w=Math.sin(d)*v,A=-Math.cos(d)*v,M=t()<.45?3:2,b=M===3?[.55,.28,.17]:[.72,.28],T=0,C=g,x=f,E=t()*1e3;for(let P=0;P<M;P++){let I=S*b[P]*(.85+t()*.3);n.push([w,T,A,C,I,x,E,0]),T+=I,C*=.62+t()*.2,x*=.62+t()*.2}n.push([w,T,A,C*(.35+t()*.3),1.5+t()*3.5,x*(.35+t()*.3),t()*1e3,1]),t()<.45&&n.push([w,T+2,A,.9,4+t()*10,.9,t()*1e3,2])};for(let d=0;d<230;d++){let v=(t()*2-1)*(e+.12),S=1500+t()*1100,g=30+Math.pow(t(),1.8)*120*(.3+s(v))+(t()<.05?80:0);r(v,S,g,22+t()*38,22+t()*38)}for(let d=0;d<180;d++){let v=(t()*2-1)*(e+.1),S=1150+t()*350;r(v,S,10+t()*22,25+t()*45,25+t()*45)}for(let d=0;d<90;d++){let v=(t()*2-1)*(e+.08),S=900+t()*250;r(v,S,6+t()*12,30+t()*40,30+t()*40)}let a=n.length,o=new Float32Array(a*3),c=new Float32Array(a*4),l=new Float32Array(a);n.forEach((d,v)=>{o.set(d.slice(0,3),v*3),c.set(d.slice(3,7),v*4),l[v]=d[7]});let u=new $n(1,1,1).translate(0,.5,0),p=new On;p.index=u.index;for(let d of["position","normal"])p.setAttribute(d,u.attributes[d]);p.setAttribute("iPos",new dn(o,3)),p.setAttribute("iSize",new dn(c,4)),p.setAttribute("iType",new dn(l,1)),p.instanceCount=a;let h=new re(p,new te({uniforms:{...i},vertexShader:mg,fragmentShader:gg}));return h.frustumCulled=!1,h}function vg(){let i=new Ee;return i.setAttribute("position",new ne([-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),i.setAttribute("uv",new ne([0,0,1,0,1,1,0,1],2)),i.setIndex([0,1,2,0,2,3]),i}function Xa(i,t,e){let n=new On;n.index=i.index;for(let s of Object.keys(i.attributes))n.setAttribute(s,i.attributes[s]);for(let[s,[r,a]]of Object.entries(t))n.setAttribute(s,new dn(r,a));return n.instanceCount=e,n}function qa(i,t){let e=new re(i,t);return e.frustumCulled=!1,e}var xg=`
${Me}
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
${Me}
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
${Me}
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
${Me}
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
${Me}
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
${Me}
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
}`;function wg(){let i=new Ee,t=[],e=[],n=[],s=[],r=(a,o,c)=>{let l=t.length/3;a.forEach((u,p)=>{t.push(...u),e.push(...o[p]),n.push(c)}),s.push(l,l+1,l+2,l,l+2,l+3)};return r([[0,0,-.5],[1,0,-.5],[1,0,.5],[0,0,.5]],[[0,1],[1,1],[1,0],[0,0]],1),r([[0,0,-.5],[-1,0,-.5],[-1,0,.5],[0,0,.5]],[[0,1],[1,1],[1,0],[0,0]],-1),r([[-.05,.01,-.45],[.05,.01,-.45],[.05,.01,.4],[-.05,.01,.4]],[[0,0],[0,0],[0,0],[0,0]],0),i.setAttribute("position",new ne(t,3)),i.setAttribute("uv",new ne(e,2)),i.setAttribute("aSide",new ne(n,1)),i.setIndex(s),i}var Tg=`
${Me}
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
${Me}
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
}`;function Nh({U:i,tex:t,cfg:e,q:n,rng:s,cyc:r,halfH:a}){let o=new Ye,c=n.samples>0,l=vg(),u=new Ut(-6,6),p={},h=7e3,d=new Float32Array(h*3);for(let b=0;b<d.length;b++)d[b]=s();p.rainCyc={value:Math.max(1,Math.round(e.period*7.5/8))};let v=qa(Xa(l,{iSeed:[d,3]},h),new te({uniforms:{...i,uRainCyc:p.rainCyc,tDepth:{value:null},uRes:{value:new Ut(1,1)},uNear:{value:.05},uFar:{value:6e3}},vertexShader:xg,fragmentShader:_g,transparent:!0,depthTest:!1,depthWrite:!1,blending:$i})),S=(b,T,C,x)=>{let E=b+(T-b)*Math.pow(s(),1.4),P=(s()*2-1)*a*.95;return[Math.sin(P)*E,C+s()*(x-C),-Math.cos(P)*E]},g=(b,T,C,x,E,P,I,z)=>{let V=new Float32Array(b*3),O=new Float32Array(b*3),L=new Float32Array(b*4),B=new Float32Array(b*4),q=new Float32Array(b*2);for(let Y=0;Y<b;Y++)V.set(C(),Y*3),O.set(x(),Y*3),L.set([r(1+Math.floor(s()*2)),r(1+Math.floor(s()*3)),r(1+Math.floor(s()*2)),r(I+Math.floor(s()*(z-I)))],Y*4),B.set([s()*6.28,s()*6.28,s()*6.28,s()*6.28],Y*4),q.set([E(),P()],Y*2);let Q={value:0},G=qa(Xa(l,{iBase:[V,3],iAmp:[O,3],iCyc:[L,4],iPh:[B,4],iSize:[q,2]},b),new te({uniforms:{...i,uVis:Q,uKind:{value:T},uSpanX:{value:u}},vertexShader:yg,fragmentShader:Sg,transparent:!0,depthWrite:!1,blending:$i}));return G.renderOrder=4,o.add(G),Q},f=Math.round(90*e.pollen);f>0&&(p.pollenVis=g(f,0,()=>S(.6,9,.2,1.8),()=>[.1+s()*.4,.05+s()*.2,.1+s()*.3],()=>.0025+s()*.004,()=>s()<.35?r(1):0,2,6));let w=Math.round(70*e.fireflies);w>0&&(p.fireflyVis=g(w,1,()=>S(1.2,14,.25,1.3),()=>[.2+s()*.6,.08+s()*.25,.2+s()*.5],()=>.012+s()*.01,()=>0,3,9));let A=Math.max(0,Math.round(e.petals));if(A>0){let b=["white","pink","magenta","crimson"].map(z=>Math.max(0,+e.colorWeights[z]||0)),T=b.reduce((z,V)=>z+V,0)||1,C=new Float32Array(A*3),x=new Float32Array(A*4),E=new Float32Array(A*4),P=new Float32Array(A*2);for(let z=0;z<A;z++){let V=S(.8,6,.3,1.5);V[0]=u.x+(z+s()*.5)/A*(u.y-u.x),C.set(V,z*3),x.set([r(1),r(1+Math.floor(s()*2)),r(2+Math.floor(s()*3)),r(3+Math.floor(s()*4))],z*4),E.set([s()*6.28,s()*6.28,s()*6.28,s()*6.28],z*4);let O=s()*T,L=0;for(let B=0;B<4;B++)if((O-=b[B])<=0){L=B;break}P.set([.012+s()*.008,L],z*2)}let I=qa(Xa(l,{iBase:[C,3],iCyc:[x,4],iPh:[E,4],iInfo:[P,2]},A),new te({uniforms:{...i,uPetal:{value:t.petal},uA2C:{value:c?1:0},uSpanX:{value:u}},vertexShader:Mg,fragmentShader:bg,side:Pe,alphaToCoverage:c}));o.add(I)}let M=Math.max(0,Math.round(e.butterflies));if(M>0){let b=new Float32Array(M*3),T=new Float32Array(M*3),C=new Float32Array(M*4),x=new Float32Array(M*4),E=new Float32Array(M),P=[[-.55,.95,-2.6],[.15,1.1,-4.5]];for(let V=0;V<M;V++)b.set(P[V]||S(2,7,.75,1.3),V*3),T.set([.35+s()*.5,.08+s()*.1,.25+s()*.4],V*3),C.set([r(1),r(2+Math.floor(s()*2)),r(1+Math.floor(s()*2)),r(36+Math.floor(s()*10))],V*4),x.set([s()*6.28,s()*6.28,s()*6.28,s()*6.28],V*4),E[V]=.024+s()*.008;let I={value:0},z=qa(Xa(wg(),{iBase:[b,3],iAmp:[T,3],iCyc:[C,4],iPh:[x,4],iSize:[E,1]},M),new te({uniforms:{...i,uVis:I,uWing:{value:t.wing},uA2C:{value:c?1:0}},vertexShader:Tg,fragmentShader:Eg,side:Pe,alphaToCoverage:c}));o.add(z),p.butterflyVis=I}return{group:o,rain:v,uniforms:p}}var Ag=`
varying vec2 vUv;
void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }`,Cg=(()=>{let i=new Ee;return i.setAttribute("position",new ne([-1,-1,0,3,-1,0,-1,3,0],3)),i})(),Rg=new Fn(-1,1,1,-1,0,1),vn=class{constructor(t,e,n={}){this.mat=new te({vertexShader:Ag,fragmentShader:t,uniforms:e,defines:n,depthTest:!1,depthWrite:!1}),this.u=this.mat.uniforms;let s=new re(Cg,this.mat);s.frustumCulled=!1,this.scene=new wn,this.scene.add(s)}run(t,e){t.setRenderTarget(e),t.render(this.scene,Rg)}},Za=`
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
    float th = fi * 2.39996;
    // \u516D\u8FB9\u5F62\u5149\u5708\u8F6E\u5ED3\uFF08\u8F7B\u5FAE\u8C03\u5236\u534A\u5F84\uFF09\uFF0C\u8BA9\u9AD8\u5149\u6563\u666F\u66F4\u63A5\u8FD1\u771F\u5B9E\u955C\u5934
    float hex = 1.0 + 0.10 * cos(6.0 * th + 0.6);
    float r = sqrt(fi / float(TAPS)) * R * hex;
    vec4 s = texture2D(tHalf, vUv + vec2(cos(th), sin(th)) * r * uTexel);
    float sc = s.a * 0.5;
    float w;
    if (sc < coc0) { w = clamp(abs(sc) - r + 1.0, 0.0, 1.0); if (sc < -0.5) fg += w; }
    else w = clamp(min(abs(sc), abs(coc0)) - r + 1.0, 0.0, 1.0);
    // \u9AD8\u5149\u52A0\u6743\uFF1A\u771F\u5B9E\u6563\u666F\u91CC\u9AD8\u5149\u4F1A\u5F62\u6210\u660E\u4EAE\u7684\u5706\u5F62\u5149\u6591\uFF0C\u800C\u4E0D\u662F\u88AB\u5E73\u5747\u6210\u7070\u96FE
    float lum = dot(s.rgb, vec3(0.2126, 0.7152, 0.0722));
    w *= 1.0 + smoothstep(1.5, 7.0, lum) * 2.5;
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
uniform float uBloom, uExposure, uSat, uContrast, uGrain, uSeed, uAOStrength, uCA;
uniform vec3 uTint; uniform vec2 uRes;
varying vec2 vUv;
vec3 aces(vec3 x) { return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0); }
vec3 toSRGB(vec3 c) { return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c)); }
float hash(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
void main() {
  // \u955C\u5934\u8FB9\u7F18\u8F7B\u5FAE\u8272\u6563\uFF08\u5F84\u5411\uFF0C\u514B\u5236\uFF09
  vec2 cd = (vUv - 0.5) * uCA;
  vec3 hdr = uCA > 0.00001
    ? vec3(texture2D(tHdr, vUv + cd).r, texture2D(tHdr, vUv).g, texture2D(tHdr, vUv - cd).b)
    : texture2D(tHdr, vUv).rgb;
  vec3 c = hdr + texture2D(tBloom, vUv).rgb * uBloom;
  float ao = 1.0;
  if (uAOStrength > 0.001) ao = mix(1.0, texture2D(tAO, vUv).r, uAOStrength);
  c *= ao * uExposure;
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
  c = max(mix(vec3(l), c, uSat) * uTint, 0.0);
  c = toSRGB(aces(c * 0.9));
  // \u7535\u5F71\u611F\u6536\u5C3E\uFF08M1/M4\uFF09\uFF1A\u9AD8\u5149\u6696\u3001\u9634\u5F71\u51B7\u7684\u5206\u5272\u8C03\u8272 + \u53BB\u9971\u548C + \u67D4\u548C\u5BF9\u6BD4\uFF1B\u6697\u89D2/\u9897\u7C92\u6536\u655B
  float lum = dot(c, vec3(0.2126, 0.7152, 0.0722));
  c = mix(c, c * vec3(0.94, 0.98, 1.06), (1.0 - smoothstep(0.0, 0.6, lum)) * 0.55);
  c = mix(c, c * vec3(1.05, 1.0, 0.96), smoothstep(0.55, 1.0, lum) * 0.4);
  c = mix(vec3(lum), c, 0.90);
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
}`,Ya=class{constructor(t,e){this.renderer=t,this.samples=e.samples,this.aoOn=!!e.ao;let n={type:Be,depthBuffer:!1,minFilter:de,magFilter:de};this.opt=n,this.scene=new fe(1,1,{type:Be,samples:e.samples,depthBuffer:!0}),this.scene.depthTexture=new nn(1,1),this.half=new fe(1,1,n),this.blur=new fe(1,1,n),this.aoRT=new fe(1,1,n),this.aoBlurRT=new fe(1,1,n),this.hdr=new fe(1,1,n),this.levels=6,this.down=Array.from({length:this.levels},()=>new fe(1,1,n)),this.up=Array.from({length:this.levels},()=>new fe(1,1,n));let s=()=>({value:new Ut}),r={uFocus:{value:1},uAperture:{value:6},uMaxCoc:{value:24},uNear:{value:.05},uFar:{value:6e3}};this.dof=r,this.coc=new vn(Pg,{...r,tColor:{value:null},tDepth:{value:null},uTexel:s()}),this.blurP=new vn(Ig,{...r,tHalf:{value:null},uTexel:s()},{TAPS:e.dofTaps}),this.comp=new vn(Dg,{...r,tColor:{value:null},tDepth:{value:null},tBlur:{value:null}}),this.pre=new vn(Lg,{tSrc:{value:null},uTexel:s(),uThreshold:{value:1.6}}),this.downP=new vn(Ng,{tSrc:{value:null},uTexel:s()}),this.upP=new vn(Ug,{tSrc:{value:null},tAdd:{value:null},uTexel:s()}),this.final=new vn(Fg,{tHdr:{value:null},tBloom:{value:null},tAO:{value:null},uAOStrength:{value:0},uCA:{value:.0014},uBloom:{value:.12},uExposure:{value:1},uSat:{value:1},uContrast:{value:1},uGrain:{value:1},uSeed:{value:0},uTint:{value:new k(1,1,1)},uRes:s()});let a={uNear:{value:.05},uFar:{value:6e3},uTexel:s()};this.aoCommon=a,this.ao=new vn(Og,{...a,tDepth:{value:null},uProjMat:{value:new se},uTanHalfFov:{value:.344},uAspect:{value:1},uRadius:{value:.5},uBias:{value:.02},uSeed:{value:0}}),this.aoBlurP=new vn(Bg,{...a,tAO:{value:null},tDepth:{value:null}})}setSize(t,e){this.w=t,this.h=e,this.scene.setSize(t,e),this.scene.depthTexture.image.width=t,this.scene.depthTexture.image.height=e;let n=Math.max(1,t>>1),s=Math.max(1,e>>1);this.half.setSize(n,s),this.blur.setSize(n,s),this.aoRT.setSize(n,s),this.aoBlurRT.setSize(n,s),this.hdr.setSize(t,e);for(let r=0;r<this.levels;r++){let a=1<<r+1;this.down[r].setSize(Math.max(1,Math.round(t/a)),Math.max(1,Math.round(e/a))),this.up[r].setSize(Math.max(1,Math.round(t/a)),Math.max(1,Math.round(e/a)))}this.final.u.uRes.value.set(t,e)}render(t,e,n,s=null,r=null){let a=this.renderer,o=this.w,c=this.h;a.setRenderTarget(this.scene),a.clear(),a.render(t,e),this.dof.uFocus.value=n.focus,this.dof.uAperture.value=n.aperture,this.dof.uMaxCoc.value=n.maxCoc,this.dof.uNear.value=e.near,this.dof.uFar.value=e.far;let l=null;if(this.aoOn){let v=this.ao.u;v.tDepth.value=this.scene.depthTexture,v.uNear.value=e.near,v.uFar.value=e.far,v.uProjMat.value.copy(e.projectionMatrix),v.uTanHalfFov.value=Math.tan(gn.degToRad(e.fov/2)),v.uAspect.value=o/c,v.uTexel.value.set(1/o,1/c),v.uRadius.value=n.aoRadius||.5,v.uSeed.value=n.seed||0,this.ao.run(a,this.aoRT);let S=this.aoBlurP.u;S.tAO.value=this.aoRT.texture,S.tDepth.value=this.scene.depthTexture,S.uNear.value=e.near,S.uFar.value=e.far,S.uTexel.value.set(1/this.aoRT.width,1/this.aoRT.height),this.aoBlurP.run(a,this.aoBlurRT),l=this.aoBlurRT.texture}let u=n.aperture>.05;u&&(this.coc.u.tColor.value=this.scene.texture,this.coc.u.tDepth.value=this.scene.depthTexture,this.coc.u.uTexel.value.set(1/o,1/c),this.coc.run(a,this.half),this.blurP.u.tHalf.value=this.half.texture,this.blurP.u.uTexel.value.set(1/this.half.width,1/this.half.height),this.blurP.run(a,this.blur)),this.comp.u.tColor.value=this.scene.texture,this.comp.u.tDepth.value=this.scene.depthTexture,this.comp.u.tBlur.value=u?this.blur.texture:this.scene.texture,u||(this.dof.uAperture.value=0),this.comp.run(a,this.hdr),r&&(a.setRenderTarget(this.hdr),a.render(r,e));let p=this.hdr.texture;this.pre.u.tSrc.value=p,this.pre.u.uTexel.value.set(1/o,1/c),this.pre.run(a,this.down[0]);for(let v=1;v<this.levels;v++)this.downP.u.tSrc.value=this.down[v-1].texture,this.downP.u.uTexel.value.set(.5/this.down[v-1].width,.5/this.down[v-1].height),this.downP.run(a,this.down[v]);let h=this.down[this.levels-1];for(let v=this.levels-2;v>=0;v--)this.upP.u.tSrc.value=h.texture,this.upP.u.tAdd.value=this.down[v].texture,this.upP.u.uTexel.value.set(.5/h.width,.5/h.height),this.upP.run(a,this.up[v]),h=this.up[v];let d=this.final.u;d.tHdr.value=p,d.tBloom.value=h.texture,d.tAO.value=l||this.aoBlurRT.texture,d.uAOStrength.value=l?n.aoStrength!=null?n.aoStrength:.6:0,d.uCA.value=n.ca!=null?n.ca:.0014,d.uBloom.value=n.bloom/this.levels,d.uExposure.value=n.exposure,d.uSat.value=n.sat,d.uContrast.value=n.contrast,d.uGrain.value=n.grain,d.uSeed.value=n.seed,d.uTint.value.set(...n.tint),this.final.run(a,s)}dispose(){for(let t of[this.coc,this.blurP,this.comp,this.pre,this.downP,this.upP,this.final,this.ao,this.aoBlurP])t.mat.dispose(),t.scene.clear();for(let t of[this.scene,this.half,this.blur,this.hdr,this.aoRT,this.aoBlurRT,...this.down,...this.up])t.dispose()}};var Uh="flower-sea-3d-v1",_l={scale:"auto",fpsCap:60,showFps:!1},zg=7680,kg=4320,Fh=(i,t)=>Math.min(t,Math.max(2,Math.floor(i/2)*2)),Oh=i=>JSON.parse(JSON.stringify(i)),yl=i=>{let t=Math.round(i*60)%1440;return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`},Sl={auto:"\u81EA\u52A8",clear:"\u6674",partly:"\u591A\u4E91",overcast:"\u9634",fog:"\u96FE",rain:"\u5C0F\u96E8"},Bh={white:"\u767D\u8272",pink:"\u6D45\u7C89",magenta:"\u73AB\u7EA2",crimson:"\u9152\u7EA2"},Vg=[{group:"\u65F6\u95F4\u4E0E\u5929\u6C14",items:[{key:"timeMode",label:"\u65F6\u95F4",type:"select",options:[["clock","\u8DDF\u968F\u7535\u8111\u65F6\u95F4"],["fixed","\u56FA\u5B9A\u65F6\u95F4"],["timelapse","\u5168\u5929\u5EF6\u65F6\uFF08\u4E00\u4E2A\u5FAA\u73AF\u8D70\u5B8C 24 \u5C0F\u65F6\uFF09"]]},{key:"hour",label:"\u65F6\u523B / \u8D77\u70B9",min:0,max:23.95,step:.05,fmt:yl},{key:"weather",label:"\u5929\u6C14",type:"select",options:Object.entries(Sl).map(([i,t])=>[i,i==="auto"?"\u81EA\u52A8\uFF08\u6BCF 3 \u5C0F\u65F6\u53D8\u5316\uFF09":t])}]},{group:"\u52A8\u753B",items:[{key:"period",label:"\u5FAA\u73AF\u65F6\u957F",min:5,max:90,step:1,fmt:i=>i+"s"},{key:"wind",label:"\u98CE\u529B",min:0,max:3,step:.05},{key:"windSpeed",label:"\u98CE\u901F",min:.25,max:3,step:.05}]},{group:"\u82B1\u6D77",items:[{key:"flowerDensity",label:"\u82B1\u6735\u5BC6\u5EA6",min:0,max:4,step:.1},{key:"flowerSize",label:"\u82B1\u6735\u5927\u5C0F",min:.5,max:2,step:.05},{key:"grassDensity",label:"\u8349\u4E1B\u5BC6\u5EA6",min:.3,max:1.6,step:.05},{key:"heroes",label:"\u524D\u666F\u5927\u82B1",type:"check"},{key:"heroSize",label:"\u5927\u82B1\u5C3A\u5BF8",min:.5,max:1.6,step:.05},{key:"seed",label:"\u5E03\u5C40\u79CD\u5B50",type:"seed"}]},{group:"\u82B1\u8272\uFF08\u989C\u8272 + \u5360\u6BD4\uFF09",items:Object.keys(Bh).map(i=>({key:i,label:Bh[i],type:"color"}))},{group:"\u573A\u666F",items:[{key:"skyline",label:"\u57CE\u5E02\u80CC\u666F",type:"check"},{key:"horizon",label:"\u5730\u5E73\u7EBF",min:.25,max:.5,step:.005,fmt:i=>Math.round(i*100)+"%"},{key:"haze",label:"\u7A7A\u6C14\u96FE\u611F",min:0,max:3,step:.05}]},{group:"\u955C\u5934",items:[{key:"dof",label:"\u666F\u6DF1\u865A\u5316",min:0,max:2,step:.05},{key:"bloom",label:"\u5149\u6655",min:0,max:2.5,step:.05},{key:"exposure",label:"\u66DD\u5149",min:-2,max:2,step:.05,fmt:i=>(i>0?"+":"")+i.toFixed(2)},{key:"grain",label:"\u80F6\u7247\u9897\u7C92",min:0,max:2,step:.05}]},{group:"\u70B9\u7F00",items:[{key:"butterflies",label:"\u8774\u8776",min:0,max:8,step:1,fmt:i=>i+" \u53EA"},{key:"petals",label:"\u98D8\u843D\u82B1\u74E3",min:0,max:30,step:1,fmt:i=>i+" \u7247"},{key:"pollen",label:"\u5149\u70B9\u7ED2\u7D6E",min:0,max:3,step:.1},{key:"fireflies",label:"\u8424\u706B\u866B",min:0,max:3,step:.1}]},{group:"\u753B\u8D28",items:[{key:"quality",label:"\u753B\u8D28\u6863\u4F4D",type:"select",options:[["auto","\u81EA\u52A8\uFF08\u6309\u6027\u80FD\uFF09"],["low","\u4F4E\uFF08\u96C6\u6210\u663E\u5361\uFF09"],["medium","\u4E2D"],["high","\u9AD8"],["ultra","\u6781\u9AD8"]]},{key:"scale",view:!0,label:"\u6E32\u67D3\u5206\u8FA8\u7387",type:"select",options:[["auto","\u81EA\u52A8\uFF08\u8DDF\u968F\u5C4F\u5E55\uFF09"],["0.5","0.5\xD7 \u7701\u7535"],["0.75","0.75\xD7"],["1","1\xD7"],["1.5","1.5\xD7"],["2","2\xD7 \u9AD8\u6E05"]]},{key:"fpsCap",view:!0,label:"\u5E27\u7387\u4E0A\u9650",type:"select",options:[["24","24 fps"],["30","30 fps"],["60","60 fps"],["0","\u4E0D\u9650"]]},{key:"showFps",view:!0,label:"\u663E\u793A\u5E27\u7387",type:"check"}]}],Hg={\u9ED8\u8BA4:{},\u9EC4\u91D1\u65F6\u523B:{timeMode:"fixed",hour:18.05,weather:"clear",bloom:1.3},\u6E05\u6668\u8584\u96FE:{timeMode:"fixed",hour:6.7,weather:"fog",pollen:1.5},\u6B63\u5348\u6674\u7A7A:{timeMode:"fixed",hour:12.5,weather:"clear"},\u591A\u4E91\u5348\u540E:{timeMode:"fixed",hour:14.8,weather:"partly",wind:1.4},\u9634\u5929:{timeMode:"fixed",hour:10.5,weather:"overcast",dof:.7},\u96E8\u5929:{timeMode:"fixed",hour:15.5,weather:"rain",wind:1.6,petals:3},\u661F\u591C\u8424\u706B:{timeMode:"fixed",hour:22,weather:"clear",fireflies:1.8,bloom:1.4},\u7E41\u82B1\u4F3C\u9526:{flowerDensity:3.2,grassDensity:1.2,heroes:!1,dof:.5,horizon:.36},\u5168\u5929\u5EF6\u65F6:{timeMode:"timelapse",hour:4,period:60},\u7701\u7535\u6A21\u5F0F:{quality:"low",__view:{scale:"0.75",fpsCap:30}}};function ve(i,t={},...e){let n=document.createElement(i);for(let[s,r]of Object.entries(t))s==="style"?n.style.cssText=r:s in n?n[s]=r:n.setAttribute(s,r);return n.append(...e),n}function zh({onConfig:i,onView:t,getStatus:e}){let n=si({}),s={..._l};try{let L=JSON.parse(localStorage.getItem(Uh)||"null");L&&(n=si(L.cfg||{}),s={..._l,...L.view||{}})}catch{}let r={get cfg(){return n},get view(){return s},tick:O},a=()=>localStorage.setItem(Uh,JSON.stringify({cfg:n,view:s})),o=new URLSearchParams(location.search).get("ui")!=="0",c=document.getElementById("panel"),l=document.getElementById("gear"),u=document.getElementById("controls"),p=document.getElementById("status"),h=document.getElementById("fps"),d=document.getElementById("toast");o||(l.style.display="none");let v=(L=!c.classList.contains("open"))=>c.classList.toggle("open",L&&o);l.onclick=()=>v(!0),document.getElementById("close").onclick=document.getElementById("hide").onclick=()=>v(!1),addEventListener("keydown",L=>{L.target.tagName==="INPUT"&&L.target.type==="number"||((L.key==="s"||L.key==="S")&&v(),L.key==="Escape"&&v(!1))});let S;addEventListener("mousemove",()=>{l.classList.add("show"),clearTimeout(S),S=setTimeout(()=>l.classList.remove("show"),2500)});let g,f=L=>{d.textContent=L,d.classList.add("show"),clearTimeout(g),g=setTimeout(()=>d.classList.remove("show"),1800)},w,A=L=>{a(),h.style.display=s.showFps?"block":"none",L?t():(clearTimeout(w),w=setTimeout(()=>i(n),120)),T()},M=[],b={};for(let L of Vg){u.append(ve("h2",{},L.group));for(let B of L.items){let q=()=>B.view?s:n,Q=B.type||"range",G;if(Q==="range"){let Y=ve("span",{className:"val"}),J=ve("input",{type:"range",min:B.min,max:B.max,step:B.step}),vt=()=>{Y.textContent=B.fmt?B.fmt(+J.value):(+J.value).toFixed(2).replace(/\.?0+$/,"")};J.oninput=()=>{q()[B.key]=+J.value,vt(),A(B.view)},M.push(()=>{J.value=q()[B.key],vt()}),G=ve("div",{className:"row"},ve("label",{},B.label),J,Y)}else if(Q==="check"){let Y=ve("input",{type:"checkbox"});Y.onchange=()=>{q()[B.key]=Y.checked,A(B.view)},M.push(()=>{Y.checked=!!q()[B.key]}),G=ve("label",{className:"row check"},ve("span",{},B.label),Y)}else if(Q==="select"){let Y=ve("select",{style:"grid-column: span 2"},...B.options.map(([J,vt])=>ve("option",{value:J},vt)));Y.onchange=()=>{q()[B.key]=B.key==="fpsCap"?+Y.value:Y.value,A(B.view)},M.push(()=>{Y.value=String(q()[B.key])}),G=ve("div",{className:"row"},ve("label",{},B.label),Y)}else if(Q==="seed"){let Y=ve("input",{type:"number",min:0,step:1}),J=ve("button",{className:"b",title:"\u968F\u673A\u6362\u4E00\u79CD\u5E03\u5C40",style:"padding:3px 0"},"\u{1F3B2}");Y.onchange=()=>{n.seed=Math.max(0,Math.floor(+Y.value||0)),A(!1)},J.onclick=()=>{n.seed=Math.floor(Math.random()*1e6),Y.value=n.seed,A(!1)},M.push(()=>{Y.value=n.seed}),G=ve("div",{className:"row"},ve("label",{},B.label),Y,J)}else if(Q==="color"){let Y=ve("input",{type:"color"}),J=ve("input",{type:"range",min:0,max:1,step:.01}),vt=ve("span",{className:"val"}),mt=()=>{let It=Object.values(n.colorWeights).reduce((zt,K)=>zt+K,0)||1;vt.textContent=Math.round(n.colorWeights[B.key]/It*100)+"%"};Y.oninput=()=>{n.colors[B.key]=Y.value,A(!1)},J.oninput=()=>{n.colorWeights[B.key]=+J.value,M.forEach(It=>It.pct&&It()),A(!1)},M.push(()=>{Y.value=n.colors[B.key],J.value=n.colorWeights[B.key],mt()});let Gt=()=>mt();Gt.pct=!0,M.push(Gt),G=ve("div",{className:"row color"},ve("label",{},B.label),Y,J,vt)}b[B.key]=G,u.append(G)}}function T(){b.hour.style.opacity=n.timeMode==="clock"?.4:1,b.heroSize.style.opacity=n.heroes?1:.4}let C=()=>{M.forEach(L=>L()),h.style.display=s.showFps?"block":"none",T()};C();let x=document.getElementById("presets");for(let[L,B]of Object.entries(Hg)){let q=ve("button",{},L);q.onclick=()=>{let{__view:Q,...G}=B;n=si({...Oh(Ge),...G,seed:n.seed,quality:G.quality||n.quality}),Q&&(s={...s,...Q}),C(),A(!!Q),Q&&i(n),f("\u5DF2\u5E94\u7528\u9884\u8BBE\uFF1A"+L)},x.append(q)}document.getElementById("reset").onclick=()=>{n=si({}),s={..._l},C(),A(!0),i(n),f("\u5DF2\u6062\u590D\u9ED8\u8BA4\u8BBE\u7F6E")},document.getElementById("export").onclick=()=>{let L=document.getElementById("exportRes").value,[B,q]=L==="screen"?[Fh(Math.round(screen.width*(devicePixelRatio||1)),zg),Fh(Math.round(screen.height*(devicePixelRatio||1)),kg)]:L.split("x").map(Number),Q=e(),G={...Oh(n),width:B,height:q,fps:+document.getElementById("exportFps").value};G.timeMode==="clock"&&(G.timeMode="fixed",G.hour=Math.round(Q.hour*100)/100),G.weather==="auto"&&(G.weather=Q.weather),(G.quality==="low"||G.quality==="auto")&&(G.quality="high");let Y=new Blob([JSON.stringify(G,null,2)],{type:"application/json"}),J=ve("a",{href:URL.createObjectURL(Y),download:"flower-sea.config.json"});document.body.append(J),J.click(),J.remove(),setTimeout(()=>URL.revokeObjectURL(J.href),1e3),f(`\u5DF2\u5BFC\u51FA\uFF1A${yl(G.hour)} \xB7 ${Sl[G.weather]}`)};let E=document.getElementById("file");document.getElementById("import").onclick=()=>E.click(),E.onchange=async()=>{let L=E.files[0];if(L){try{let B=JSON.parse(await L.text());if(n=si(B),B.width&&B.height){let q=document.getElementById("exportRes"),Q=`${B.width}x${B.height}`;[...q.options].some(G=>G.value===Q)&&(q.value=Q)}if(B.fps){let q=String(Math.round(+B.fps)),Q=document.getElementById("exportFps");[...Q.options].some(G=>G.value===q)&&(Q.value=q)}C(),A(!1),f("\u914D\u7F6E\u5DF2\u5BFC\u5165")}catch{f("\u914D\u7F6E\u6587\u4EF6\u65E0\u6CD5\u89E3\u6790")}E.value=""}};let P=0,I=performance.now(),z=0,V=L=>L.quality?` \xB7 \u753B\u8D28 ${L.quality}${n.quality==="auto"?"\uFF08\u81EA\u52A8\uFF09":""}`:"";function O(L){if(P++,L-I>500){let B=e();h.textContent=`${Math.round(P*1e3/(L-I))} fps \xB7 ${B.size[0]}\xD7${B.size[1]} \xB7 \u8349 ${B.counts?.grass} \u82B1 ${B.counts?.flowers}${V(B)}`,P=0,I=L}if(L-z>1e3){z=L;let B=e();B.hour!==void 0&&(p.textContent=`${yl(B.hour)} \xB7 ${Sl[B.weather]||""}${n.weather==="auto"?"\uFF08\u81EA\u52A8\uFF09":""}${V(B)}`)}}return r}function kh(){let i=0;return function(e,n){if(!(n>0))return!0;let s=1e3/n;return e+.5<i?!1:(e-i>s*4&&(i=e),i+=s,!0)}}var Vh=["low","medium","high","ultra"],Gg=/swiftshader|llvmpipe|softpipe|software|basic render|microsoft basic/i,Wg=/(rtx\s?\d|geforce\s?(gtx\s?1[6-9]|rtx)|radeon\s?(rx\s?[5-9]\d{3}|pro)|apple\s?m[1-9]|arc\s?a\d+|quadro|tesla|firepro)/i,Xg=/(intel|iris|uhd|vega|geforce\s?(mx|gtx\s?(9|10|1[0-5]))|radeon\s?(rx\s?[3-4]\d{2}|vega)|mali|adreno|powervr)/i;function Hh(i,t,e){let n=String(i||""),s=Math.max(1,Math.floor(+t||0)),r=Math.max(1,Math.floor(+e||0)),a=s*r;if(Gg.test(n))return"low";let o=Wg.test(n),c=Xg.test(n);return a>=3840*2160*.9?o?"medium":"low":a>=2560*1440*.9?o?"high":c?"low":"medium":o?"high":"medium"}function Gh({threshold:i=24,minSeconds:t=4,cooldownSeconds:e=10}={}){let n=0,s=0,r=0;return function(o,c){let l=Vh.indexOf(c);if(!(o>0)||l<0||l===0)return null;if(r>0)return r-=o,r<=0&&(n=0,s=0),null;if(n+=1,s+=o,s<t)return null;let u=n/s;return n=0,s=0,u<i?(r=e,Vh[l-1]):null}}var Ml=i=>new Ot(i),qg=new k(-.42,.42,-.8).normalize(),Yg={white:["#e2b3c8","#f6eff1","#ffffff"],pink:["#c64886","#ee9fc3","#f8cfe0"],magenta:["#9e0050","#d6127a","#ea3a93"],crimson:["#4f031c","#8a0a34","#a8164a"]},Zg={white:"#f6eff1",pink:"#ee9fc3",magenta:"#d6127a",crimson:"#8a0a34"};function $g(i,t){let e=String(t||"").toLowerCase();if(e===Zg[i])return Yg[i].map(Ml);let n=Ml(e);return[.2126*n.r+.7152*n.g+.0722*n.b>.6?n.clone().lerp(Ml("#c88aa6"),.55):n.clone().multiplyScalar(.35),n,n.clone().lerp(new Ot(1,1,1),.3)]}var Ja=class{constructor(t,{exportMode:e=!1}={}){this.exportMode=e,this.renderer=new Oa({canvas:t,antialias:!1,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:e}),this.renderer.outputColorSpace=di,this.renderer.setPixelRatio(1),this.renderer.autoClear=!1,this.gpuName=(()=>{try{let n=this.renderer.getContext(),s=n.getExtension("WEBGL_debug_renderer_info");return String(s?n.getParameter(s.UNMASKED_RENDERER_WEBGL):n.getParameter(n.RENDERER))}catch{return""}})(),this.overlay=new wn,this.tex={atlas:Ha(),petal:Ga(),wing:Wa()};for(let n of Object.values(this.tex))n.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy());this.U=ka(),this.camera=new Oe(38,1,.05,6e3),this.scene=new wn,this.shadowRT=null,this.shadowScene=new wn,this.shadowCamera=new Fn(-12,12,12,-12,1,70),this.shadowCenter=new k(0,0,-3),this.shadowMatrix=new se,this.shadowCasters=null,this.iblRT=null,this.iblScene=new wn,this.iblCamera=null,this.cfg=null,this.world=null,this.post=null,this.wCur=null,this.envCache=new Map,this.autoQuality=null,this.effectiveQuality=null,this.w=1,this.h=1}setSize(t,e){this.w=t,this.h=e,this.renderer.setSize(t,e,!1),this.post&&this.post.setSize(t,e),this.cfg&&this.cfg.quality==="auto"&&(this.autoQuality=null),this.needsBuild=!0}setConfig(t){let e=si(t),n=this.cfg;this.cfg=e,n&&n.quality!==e.quality&&(this.autoQuality=null),(!n||mh.some(r=>JSON.stringify(n[r])!==JSON.stringify(e[r])))&&(this.needsBuild=!0),["white","pink","magenta","crimson"].forEach((r,a)=>{let[o,c,l]=$g(r,e.colors[r]);this.U.uPalBase.value[a].set(o.r,o.g,o.b),this.U.uPalMid.value[a].set(c.r,c.g,c.b),this.U.uPalTip.value[a].set(l.r,l.g,l.b)})}resolveQualityName(){let t=this.cfg&&this.cfg.quality;return t!=="auto"?Ws[t]?t:"high":this.exportMode?"high":(this.autoQuality||(this.autoQuality=Hh(this.gpuName,this.w,this.h)),this.autoQuality)}useAutoTier(t){return!this.cfg||this.cfg.quality!=="auto"||!Ws[t]||this.autoQuality===t?!1:(this.autoQuality=t,this.needsBuild=!0,!0)}updateCamera(){let t=this.camera,e=this.w/this.h;t.aspect=e,t.fov=Math.max(38,gn.radToDeg(2*Math.atan(Math.tan(gn.degToRad(16))/e)));let n=Math.tan(gn.degToRad(t.fov/2)),s=Math.atan((.5-this.cfg.horizon)*2*n);t.position.set(0,1.15,0),t.rotation.set(-s,0,0),t.updateProjectionMatrix(),t.updateMatrixWorld(!0)}build(){this.needsBuild=!1;let t=this.cfg,e=this.resolveQualityName(),n=Ws[e];if(this.effectiveQuality=e,this.shadowRT&&(this.shadowRT.depthTexture&&this.shadowRT.depthTexture.dispose(),this.shadowRT.dispose(),this.shadowRT=null),this.shadowCasters){for(let S of this.shadowCasters)S.geometry.dispose(),S.material.dispose();this.shadowCasters=null}this.shadowScene.clear(),this.iblRT&&(this.iblRT.dispose(),this.iblRT=null),this.iblCamera=null,this.iblScene.clear(),(!this.post||this.post.samples!==n.samples||this.postTaps!==n.dofTaps||this.postAO!==(n.ao||0))&&(this.post&&this.post.dispose(),this.post=new Ya(this.renderer,n),this.postTaps=n.dofTaps,this.postAO=n.ao||0,this.post.setSize(this.w,this.h)),this.rain&&(this.rain.geometry.dispose(),this.rain.material.dispose()),this.world&&(this.scene.remove(this.world),this.world.traverse(S=>{S.geometry&&S.geometry.dispose(),S.material&&S.material.dispose()})),this.updateCamera();let s=t.period,r=S=>Math.max(1,Math.round(S*s/15));this.cyc=r;let a=ri(Math.floor(t.seed)||0),o=this.w/this.h,c=Math.atan(Math.tan(gn.degToRad(this.camera.fov/2))*o),l=new Ye,u=Dh(this.U);u.mat.uniforms.uTwinkle.value=r(7),l.add(u.mesh),t.skyline&&l.add(Lh(this.U,ri(t.seed+7),c));let p=Ih({U:this.U,tex:this.tex,cfg:t,q:n,rng:a,camera:this.camera,aspect:o});l.add(p.group),this.counts=p.counts;let h=Nh({U:this.U,tex:this.tex,cfg:t,q:n,rng:ri(t.seed+99),cyc:r,halfH:c});l.add(h.group),this.partU=h.uniforms,this.overlay.clear(),this.overlay.add(h.rain),this.rain=h.rain,this.focus=t.heroes?.92:3.5,this.world=l,this.scene.add(l);let d=n.shadow||0;if(this.U.uShadowEnabled.value=d?1:0,this.U.uShadowMap.value=null,d){let S=new nn(d,d);S.type=Ke,S.minFilter=me,S.magFilter=me,this.shadowRT=new fe(d,d,{depthBuffer:!0,depthTexture:S,minFilter:me,magFilter:me,generateMipmaps:!1}),this.U.uShadowMap.value=S,this.U.uShadowTexel.value.set(1/d,1/d),this.shadowCasters=p.shadowCasters||[];for(let g of this.shadowCasters)this.shadowScene.add(g)}else this.shadowCasters=[];let v=n.ibl||0;if(this.U.uEnvIntensity.value=0,this.U.uEnvMap.value=null,v){let S=new ns(v,{type:Be,generateMipmaps:!0,minFilter:sn,magFilter:de});this.iblRT=S,this.iblCamera=new qi(.1,2e4,S),this.iblCamera.position.copy(this.camera.position),this.iblScene.add(u.mesh.clone()),this.U.uEnvMap.value=S.texture,this.U.uEnvIntensity.value=.5}}renderShadow(t){let e=this.shadowCamera,n=this.shadowCenter;e.position.copy(n).addScaledVector(t,40),e.up.set(0,1,0),e.lookAt(n),e.updateMatrixWorld(),e.updateProjectionMatrix(),this.shadowMatrix.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this.U.uShadowMatrix.value.copy(this.shadowMatrix);let s=this.renderer;s.setRenderTarget(this.shadowRT),s.clear(),s.render(this.shadowScene,e),s.setRenderTarget(null)}updateIBL(){let t=this.renderer,e=t.autoClear;t.autoClear=!0,this.iblCamera.position.copy(this.camera.position),this.iblCamera.update(t,this.iblScene),t.autoClear=e}destroy(){if(this.world&&(this.scene.remove(this.world),this.world.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(e=>e.dispose())}),this.world=null),this.rain&&(this.rain.geometry.dispose(),this.rain.material.dispose()),this.rain=null,this.shadowRT&&(this.shadowRT.depthTexture&&this.shadowRT.depthTexture.dispose(),this.shadowRT.dispose(),this.shadowRT=null),this.shadowCasters){for(let t of this.shadowCasters)t.geometry.dispose(),t.material.dispose();this.shadowCasters=null}this.shadowScene.clear(),this.iblRT&&(this.iblRT.dispose(),this.iblRT=null),this.iblCamera=null,this.iblScene.clear(),this.overlay.clear();for(let t of Object.values(this.tex))t.dispose();this.post&&(this.post.dispose(),this.post=null),this.envCache.clear(),this.renderer.dispose()}resolveHour(t,e=new Date){let n=this.cfg;return n.timeMode==="clock"&&!this.exportMode?e.getHours()+e.getMinutes()/60+e.getSeconds()/3600:n.timeMode==="timelapse"?(n.hour+24*((t%n.period+n.period)%n.period)/n.period)%24:n.hour}resolveWeather(t=new Date){let e=this.cfg.weather;return _i.includes(e)?{weights:{[e]:1},name:e}:this.exportMode?{weights:{clear:1},name:"clear"}:bh(t)}envFor(t,e){let n=Math.round(t*1e3),s="";for(let c of _i)s+=Math.round((e[c]||0)*1e3)+",";let r=n+"|"+s,a=this.envCache.get(r);if(a)return a;let o=Mh(n/1e3,e);return this.envCache.size>512&&this.envCache.clear(),this.envCache.set(r,o),o}frame(t,e=0,n=null){this.needsBuild&&this.build();let s=this.cfg,r=this.U,a=s.period,o=(t%a+a)%a;r.uTime.value=o,r.uLoop.value=o/a,r.uPhase.value=Math.PI*2*o/a,r.uPeriod.value=a;let c=g=>Math.max(1,Math.round(g*a*s.windSpeed/15));r.uWindCyc.value.set(c(1),c(2),c(3)),r.uFlutterCyc.value.set(this.cyc(5),this.cyc(8)),r.uWind.value=s.wind;let l=new Date,u=this.resolveHour(t,l),{weights:p,name:h}=this.resolveWeather(l);if(!this.wCur||e<=0)this.wCur={...p};else{let g=Math.min(1,e*.8);for(let f of _i)this.wCur[f]=(this.wCur[f]||0)+((p[f]||0)-(this.wCur[f]||0))*g}this.status={hour:u,weather:h};let d=this.envFor(u,this.wCur);r.uLightDir.value.copy(d.lightDir),r.uSunDir.value.copy(d.sunDir),r.uMoonDir.value.copy(qg),r.uLightColor.value.set(...d.lightCol),r.uGlowColor.value.set(...d.glow),r.uSunDisc.value.set(...d.sunDisc),r.uSkyAmb.value.set(...d.skyAmb),r.uGroundAmb.value.set(...d.groundAmb),r.uZenith.value.set(...d.zen),r.uHorizon.value.set(...d.hor),r.uCloudLit.value.set(...d.cloudLit),r.uCloudDark.value.set(...d.cloudDark),r.uFogDensity.value=45e-5*s.haze*d.fogMul,r.uCloudCover.value=d.cloudCover,r.uCloudShadow.value=d.cloudShadow,r.uCloudDrift.value.set(14,-4).multiplyScalar(.6+.4*s.windSpeed),r.uSunVis.value=d.sunVis,r.uStars.value=d.stars,r.uMoon.value=d.moon,r.uCityLights.value=d.cityLights,r.uWet.value=d.wet,r.uRain.value=d.rain,this.partU.pollenVis&&(this.partU.pollenVis.value=d.pollen),this.partU.fireflyVis&&(this.partU.fireflyVis.value=d.fireflies),this.partU.butterflyVis&&(this.partU.butterflyVis.value=d.butterflies);let v=this.rain.material.uniforms;v.tDepth.value=this.post.scene.depthTexture,v.uRes.value.set(this.w,this.h),v.uNear.value=this.camera.near,v.uFar.value=this.camera.far,this.shadowRT&&this.renderShadow(d.lightDir),this.iblRT&&this.updateIBL();let S=this.h/1080;this.post.render(this.scene,this.camera,{focus:this.focus,aperture:s.dof*7*S,maxCoc:26*S*Math.max(1,s.dof),bloom:s.bloom*d.bloom*.9,exposure:.82*Math.pow(2,s.exposure)*d.ex,sat:d.sat,contrast:d.contrast,tint:d.tint,grain:s.grain,seed:Math.floor(o/a*997),aoStrength:.55,aoRadius:.5,ca:this.effectiveQuality==="low"?0:.0014},n,d.rain>.01?this.overlay:null)}},$a=4*1024*1024;function Jg(i){if(typeof i.toBase64=="function")return i.toBase64();let t="",e=32768;for(let n=0;n<i.length;n+=e)t+=String.fromCharCode.apply(null,i.subarray(n,n+e));return btoa(t)}function Kg(){let i=null,t=null,e=null;function n(s){i.frame(s);let r=i.renderer.getContext(),a=i.w*i.h*4;return(!e||e.length!==a)&&(e=new Uint8Array(a)),r.readPixels(0,0,i.w,i.h,r.RGBA,r.UNSIGNED_BYTE,e),a}return{init(s,r,a){return t=document.getElementById("c"),t.width=r,t.height=a,t.style.width=r+"px",t.style.height=a+"px",i=new Ja(t,{exportMode:!0}),i.setConfig(s),i.setSize(r,a),i.frame(0),{period:i.cfg.period,counts:i.counts}},debugTexture(s){return i.tex[s].image.toDataURL("image/png")},renderAt(s){i.frame(s);let r=i.renderer.getContext(),a=new Uint8Array(i.w*i.h*4);r.readPixels(0,0,i.w,i.h,r.RGBA,r.UNSIGNED_BYTE,a);let o="",c=32768;for(let l=0;l<a.length;l+=c)o+=String.fromCharCode.apply(null,a.subarray(l,l+c));return btoa(o)},renderFrame(s){let r=n(s);return{width:i.w,height:i.h,bytes:r,chunkBytes:$a,chunks:Math.ceil(r/$a)}},readChunk(s){if(!e)throw new Error("readChunk: \u5C1A\u672A\u8C03\u7528 renderFrame");if(!Number.isInteger(s)||s<0)throw new Error(`readChunk: \u975E\u6CD5\u5757\u5E8F\u53F7 ${s}`);let r=s*$a;if(r>=e.length)throw new Error(`readChunk: \u5757\u5E8F\u53F7\u8D8A\u754C ${s}`);return Jg(e.subarray(r,Math.min(r+$a,e.length)))},bench(s=60,r=1/60){let a=i.renderer.getContext(),o=i.renderer.info,c=o.autoReset;o.autoReset=!1;let l=new Uint8Array(4),u=[],p=null,h=performance.now();for(let f=0;f<s;f++){o.reset();let w=performance.now();i.frame(f*r),a.readPixels(0,0,1,1,a.RGBA,a.UNSIGNED_BYTE,l),u.push(performance.now()-w),p={triangles:o.render.triangles,calls:o.render.calls,points:o.render.points,lines:o.render.lines}}o.autoReset=c;let d=performance.now()-h,v=[...u].sort((f,w)=>f-w),S=f=>+v[Math.min(v.length-1,Math.floor(v.length*f))].toFixed(3),g=u.reduce((f,w)=>f+w,0)/u.length;return{width:i.w,height:i.h,frames:s,avgMs:+g.toFixed(3),minMs:S(0),p95Ms:S(.95),maxMs:S(.999),fps:+(1e3/g).toFixed(1),wallMs:+d.toFixed(1),gpu:i.gpuName,effectiveQuality:i.effectiveQuality,counts:i.counts,render:p,memory:{geometries:o.memory.geometries,textures:o.memory.textures},programs:o.programs?o.programs.length:null}}}}function Qg(){let i=document.getElementById("c"),t=document.createElement("div");t.id="fatal",t.style.cssText='position:fixed;inset:0;z-index:20;display:none;padding:32px 40px;background:rgba(12,16,12,.92);color:#f2e9ec;font:14px/1.7 system-ui,"Microsoft YaHei","PingFang SC",sans-serif;white-space:pre-wrap;',document.body.append(t);let e=null,n=!1,s=!1,r=v=>{t.textContent=v,t.style.display="block"},a=()=>{t.style.display="none"},o=zh({onConfig:v=>{e&&e.setConfig(v)},onView:()=>c(),getStatus:()=>e?{...e.status,counts:e.counts,size:[e.w,e.h],quality:e.effectiveQuality,auto:!!(e.cfg&&e.cfg.quality==="auto")}:{counts:null,size:[innerWidth,innerHeight],quality:null,auto:!1}});function c(){if(!e)return;let v=o.view,S=v.scale==="auto"?Math.min(window.devicePixelRatio||1,2):+v.scale;e.setSize(Math.max(320,Math.round(innerWidth*S)),Math.max(180,Math.round(innerHeight*S)))}try{e=new Ja(i)}catch(v){n=!0,r(`\u65E0\u6CD5\u521D\u59CB\u5316 WebGL2 \u6E32\u67D3\u3002

`+(v&&v.message||v)+`

\u8BF7\u4F7F\u7528\u652F\u6301 WebGL2 \u7684\u6700\u65B0\u7248 Chrome / Edge\uFF0C\u5E76\u786E\u8BA4\u6D4F\u89C8\u5668\u5DF2\u542F\u7528\u786C\u4EF6\u52A0\u901F\uFF08\u6216\u66F4\u65B0\u663E\u5361\u9A71\u52A8\uFF09\u3002`),console.error(v)}e&&(e.setConfig(o.cfg),c(),i.addEventListener("webglcontextlost",v=>{v.preventDefault(),s=!0,r(`\u56FE\u5F62\u4E0A\u4E0B\u6587\u4E22\u5931\uFF0C\u6B63\u5728\u5C1D\u8BD5\u6062\u590D\u2026

\u82E5\u957F\u65F6\u95F4\u505C\u7559\u5728\u6B64\u754C\u9762\uFF0C\u8BF7\u91CD\u542F\u6D4F\u89C8\u5668\u6216\u68C0\u67E5\u663E\u5361\u9A71\u52A8\u3002`)},!1),i.addEventListener("webglcontextrestored",()=>{s=!1,p=performance.now(),a()},!1));let l;addEventListener("resize",()=>{clearTimeout(l),l=setTimeout(c,200)});let u=performance.now(),p=u,h=kh(),d=Gh();(function v(S){if(requestAnimationFrame(v),n||s||!e||!h(S,+o.view.fpsCap))return;let g=Math.min(.25,(S-p)/1e3);if(e.frame((S-u)/1e3,g),p=S,e.cfg.quality==="auto"&&e.effectiveQuality){let f=+o.view.fpsCap;if(!(f>0&&f<30)){let w=d(g,e.effectiveQuality);w&&e.useAutoTier(w)}}o.tick(S)})(u)}new URLSearchParams(location.search).get("export")==="1"?window.FlowerSea=Kg():Qg();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
