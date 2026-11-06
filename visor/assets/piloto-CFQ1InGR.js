import{C as e,D as t,E as n,S as r,T as i,_ as a,a as o,b as s,c,d as l,f as u,g as d,h as f,i as p,l as m,m as h,n as g,o as _,p as v,r as y,s as b,t as x,u as S,v as C,w,x as T,y as E}from"./index-CqKwy_iY.js";var D={alta:{nombre:`alta`,rejilla:209,radio:900,sombras:2048,arboles:2200,aguaFps:20,imagen:2048,vivo:{z:18,lado:2048},orto:[2048,2048,2048]},media:{nombre:`media`,rejilla:97,radio:700,sombras:1024,arboles:700,aguaFps:12,imagen:1024,vivo:{z:17,lado:1024},orto:[1024,2048,2048]},baja:{nombre:`baja`,rejilla:97,radio:600,sombras:0,arboles:0,aguaFps:0,imagen:512,vivo:{z:17,lado:1024},orto:[1024,1024,2048]}},O={relieve:1,terraplen:.5,subestructura:`recorte`,satelite:!0,real:!0,agua:!0,aguaMovimiento:!0,sombras:!0,orto:!0,nitida:!0,vegetacion:!1,solElevacion:42,solAzimut:150},k={margenHueco:4,profundidadRio:6,bordeRio:16,pendienteAcceso:.06,taludAcceso:1.8,descuentoTablero:1.25},A={pasto1:`#6d8a4b`,pasto2:`#8b9b57`,tierra1:`#8a7458`,tierra2:`#a48c66`,roca1:`#6b665c`,roca2:`#847d6f`,arena1:`#b3a176`,arena2:`#cbbc92`,asfalto:`#3a3d42`,grava:`#837a66`,aguaProfunda:`#2d4d55`,aguaSomera:`#6f938f`,niebla:`#c4d4e3`};function j(e){try{let e=new URLSearchParams(location.search).get(`entorno`);if(D[e])return D[e]}catch{}return e.lowGfx||e.coarse&&!e.strong?D.baja:e.coarse||e.lite?D.media:D.alta}var M=(e,t,n)=>e+(t-e)*n,N=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)};function P(e,t,n){let r=Math.imul(e,374761393)+Math.imul(t,668265263)+Math.imul(n,1442695041);return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967295}function F(e,t,n){let r=Math.floor(e),i=Math.floor(t),a=e-r,o=t-i,s=a*a*(3-2*a),c=o*o*(3-2*o),l=P(r,i,n),u=P(r+1,i,n),d=P(r,i+1,n),f=P(r+1,i+1,n);return l+(u-l)*s+(d-l)*c+(l-u-d+f)*s*c}function I(e,t,n,r=4){let i=.5,a=1,o=0,s=0;for(let c=0;c<r;c++)o+=i*F(e*a,t*a,n+c*17),s+=i,i*=.5,a*=2.03;return o/s}var L=e=>{let t=2166136261;for(let n of String(e))t=Math.imul(t^n.charCodeAt(0),16777619);return t>>>0},R=e=>{let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}},ee=class{constructor(e,t){this.f=e,this.relieve=t.relieve,this.semilla=t.semilla,this.rio=t.rio,this.real=t.real||null,this.terraplen=t.terraplen==null?1:Math.min(1,Math.max(0,t.terraplen))}local(e,t){let n=this.f,r=e-n.ox,i=t-n.oz;return[r*n.ux+i*n.uz-n.sMid,r*n.vx+i*n.vz-n.tc]}meandro(e){let t=Math.abs(e);return 14*Math.sin(e/70+1.1)*N(30,200,t)+6*Math.sin(e/29)*N(60,260,t)}sample(e,t,n){let r=this.f,i=k,[a,o]=this.local(e,t),s=Math.abs(a),c=Math.abs(o),l=Math.max(s-r.Lh,0),u=Math.max(c-r.halfW,0),d=N(40,260,Math.hypot(l,u)),f=I(e*.0035,t*.0035,this.semilla)*.65+I(e*.012,t*.012,this.semilla+9)*.35,p=this.rio.activo?this.rio.ancho:0,m=Math.min(35,.05*Math.max(0,s-(p/2+30))),h=this.real,g=h?r.groundY+this.relieve*h.alturaRel(e,t):r.groundY+this.relieve*(d*(f-.42)*26+m);if(n.rio=0,n.via=0,n.talud=0,this.rio.activo){let s=h&&h.rioSegs.length?h.distanciaRio(e,t):Math.abs(a+this.meandro(o)),c=p/2,l=1-N(c-3,c+i.bordeRio,s);if(l>0){let e=r.groundY-i.profundidadRio*(1-.7*Math.min(1,s/c)**2);g=M(g,e,l),n.rio=l}}let _=s-(r.Lh-6);if(_>0){let e=r.groundY+(r.deckY-r.groundY)*this.terraplen-i.pendienteAcceso*_;if(e>g+.05){let t=r.halfW+1.2,a=e-Math.max(0,c-t)/i.taludAcceso;if(a>g){g=a;let e=N(t-1,t+3,c);n.via=N(0,4,_)*(1-e),n.talud=e,n.rio=0}}}return n.h=g,n}alturaEn(e,t){return this.sample(e,t,te).h}},te={h:0,rio:0,via:0,talud:0};function ne(e,{cx:t,cz:n,radio:r,n:i}){let a=new Float32Array(i*i*3),o=new Float32Array(i*i*3),s={h:0,rio:0,via:0,talud:0},c=e=>{let t=e/(i-1)*2-1;return Math.sign(t)*t*t*r};for(let r=0;r<i;r++)for(let l=0;l<i;l++){let u=t+c(l),d=n+c(r),f=(r*i+l)*3;e.sample(u,d,s),a[f]=u,a[f+1]=s.h,a[f+2]=d,o[f]=s.rio,o[f+1]=s.via,o[f+2]=s.talud}let l=new Uint32Array((i-1)*(i-1)*6),u=0;for(let e=0;e<i-1;e++)for(let t=0;t<i-1;t++){let n=e*i+t,r=n+1,a=n+i,o=a+1;l[u++]=n,l[u++]=a,l[u++]=r,l[u++]=r,l[u++]=a,l[u++]=o}let d=new p;return d.setAttribute(`position`,new y(a,3)),d.setAttribute(`aZona`,new y(o,3)),d.setIndex(new y(l,1)),d.computeVertexNormals(),d.computeBoundingSphere(),d}var re=`
float h21(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), f.x), mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), f.x), f.y); }
`,z={},B=(e,t,n,r)=>{let i=`${e},${t},${n},${r}`;if(!z[i]){let a=new S(new Uint8Array([e,t,n,r]),1,1);a.needsUpdate=!0,z[i]=a}return z[i]};function V(e){let n=e=>new b(e),r={uGroundY:{value:e.groundY},uCutOn:{value:1},uO:{value:new i(e.ox,e.oz)},uU:{value:new i(e.ux,e.uz)},uV:{value:new i(e.vx,e.vz)},uSMid:{value:e.sMid},uTC:{value:e.tc},uCut:{value:[new t,new t,new t,new t]},uPasto1:{value:n(A.pasto1)},uPasto2:{value:n(A.pasto2)},uTierra1:{value:n(A.tierra1)},uTierra2:{value:n(A.tierra2)},uRoca1:{value:n(A.roca1)},uRoca2:{value:n(A.roca2)},uArena1:{value:n(A.arena1)},uArena2:{value:n(A.arena2)},uAsfalto:{value:n(A.asfalto)},uGrava:{value:n(A.grava)},uMask:{value:B(0,0,0,255)},uMaskO:{value:new i(0,0)},uMaskS:{value:1},uUrbano:{value:n(`#a79e90`)},uCamino:{value:n(`#b09c78`)},uSat:{value:B(0,0,0,255)},uSatOn:{value:0},uSatT:{value:new t(0,0,1,0)},uSatS:{value:1},uHi:{value:B(0,0,0,255)},uHiOn:{value:0},uHiS:{value:1},uOa:{value:B(0,0,0,0)},uOb:{value:B(0,0,0,0)},uOc:{value:B(0,0,0,0)},uOT:{value:[new t,new t,new t]},uOrOn:{value:0}},o=new a({color:16777215,roughness:.96,metalness:0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1});return o.userData.uniformes=r,o.customProgramCacheKey=()=>`entorno-terreno-v4`,o.onBeforeCompile=e=>{Object.assign(e.uniforms,r),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute vec3 aZona; varying vec3 vWP; varying vec3 vWN; varying vec3 vZ;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vWP = position; vWN = normal; vZ = aZona;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 vWP; varying vec3 vWN; varying vec3 vZ;
uniform float uGroundY, uCutOn, uSMid, uTC; uniform vec2 uO, uU, uV; uniform vec4 uCut[4];
uniform vec3 uPasto1, uPasto2, uTierra1, uTierra2, uRoca1, uRoca2, uArena1, uArena2, uAsfalto, uGrava, uUrbano, uCamino;
uniform sampler2D uMask; uniform vec2 uMaskO; uniform float uMaskS;
uniform sampler2D uSat; uniform float uSatOn, uSatS; uniform vec4 uSatT;
uniform sampler2D uHi; uniform float uHiOn, uHiS;
uniform sampler2D uOa, uOb, uOc; uniform vec4 uOT[3]; uniform float uOrOn;
vec4 capaO(sampler2D t, vec4 p, vec2 dd) {   // una capa de la ortofoto: color y opacidad (borde de la capa y de la huella del vuelo suaves)
  vec2 uv = (dd - p.xy) / (2.0 * p.z) + 0.5; vec2 ed = min(uv, 1.0 - uv); float e = smoothstep(0.0, 0.025, min(ed.x, ed.y));
  vec4 c = texture2D(t, clamp(uv, 0.0, 1.0)); return vec4(c.rgb, c.a * e * p.w);
}
${re}`).replace(`#include <clipping_planes_fragment>`,`#include <clipping_planes_fragment>
if (uCutOn > 0.5) {   // hueco sobre la huella de la subestructura (pilotes y cabezales)
  vec2 q = vWP.xz - uO; float dd = dot(q, uU) - uSMid, tt = dot(q, uV) - uTC;
  for (int i = 0; i < 4; i++) { vec4 r = uCut[i]; if (r.y > r.x && dd > r.x && dd < r.y && tt > r.z && tt < r.w) discard; }
}`).replace(`#include <color_fragment>`,`#include <color_fragment>
{
  vec3 nn = normalize(vWN); float pend = 1.0 - nn.y; float alt = vWP.y - uGroundY;
  float ruido = vnoise(vWP.xz * 0.06) * 0.55 + vnoise(vWP.xz * 0.5) * 0.3 + vnoise(vWP.xz * 3.0) * 0.15;
  float manchas = vnoise(vWP.xz * 0.02 + 7.0);
  vec3 pasto = mix(uPasto1, uPasto2, ruido), tierra = mix(uTierra1, uTierra2, ruido), roca = mix(uRoca1, uRoca2, ruido), arena = mix(uArena1, uArena2, ruido);
  vec3 col = mix(pasto, tierra, smoothstep(0.55, 0.78, manchas) * 0.85);
  col = mix(col, tierra, smoothstep(-2.0, 3.0, -alt) * 0.35);
  col = mix(col, roca, smoothstep(0.20, 0.40, pend));
  float calma = 0.0, kk = 1.0;   // calma = 1 donde hay foto nítida: ahí no se pintan manchas ni zonas de colores planos, solo un grano fino; kk atenúa el camino de acceso y su talud para que la foto asome
  if (uSatOn > 0.5 || uHiOn > 0.5 || uOrOn > 0.5) {   // color real de la zona: Sentinel-2 (10 m), la imagen nítida en vivo y, encima de todo, la ortofoto de dron
    vec2 r = vWP.xz - uSatT.xy; vec2 dd = vec2(uSatT.z * r.x + uSatT.w * r.y, -uSatT.w * r.x + uSatT.z * r.y);
    vec3 sat = vec3(0.0); float ins = 0.0;
    if (uSatOn > 0.5) {
      vec2 uvs = (dd + uSatS) / (2.0 * uSatS);
      ins = step(0.0, uvs.x) * step(uvs.x, 1.0) * step(0.0, uvs.y) * step(uvs.y, 1.0);
      sat = texture2D(uSat, clamp(uvs, 0.0, 1.0)).rgb;
    }
    if (uHiOn > 0.5) {
      vec2 uvh = (dd + uHiS) / (2.0 * uHiS); vec2 ed = min(uvh, 1.0 - uvh);
      calma = smoothstep(0.0, 0.08, min(ed.x, ed.y));
      vec3 hi = texture2D(uHi, clamp(uvh, 0.0, 1.0)).rgb;
      sat = uSatOn > 0.5 ? mix(sat, hi, calma) : hi; ins = max(ins, calma);
    }
    if (uOrOn > 0.5) {   // de la capa más gruesa a la más fina: cada una tapa a la anterior donde tiene datos
      vec4 o = capaO(uOa, uOT[0], dd); sat = mix(sat, o.rgb, o.a); calma = max(calma, o.a);
      o = capaO(uOb, uOT[1], dd); sat = mix(sat, o.rgb, o.a); calma = max(calma, o.a);
      o = capaO(uOc, uOT[2], dd); sat = mix(sat, o.rgb, o.a); calma = max(calma, o.a);
      ins = max(ins, calma);
    }
    kk = 1.0 - 0.55 * calma;
    float lum = dot(sat, vec3(0.2126, 0.7152, 0.0722)); sat = mix(vec3(lum), sat, 1.12) * 0.80;   // color casi natural; algo menos brillo porque con el sol y el tono la imagen salía lavada
    float grano = 0.97 + 0.06 * vnoise(vWP.xz * 5.0);
    col = mix(col, sat * mix(0.9 + 0.2 * ruido, grano, calma), 0.95 * ins * (1.0 - vZ.z * kk) * (1.0 - vZ.y * kk));
  }
  col = mix(col, arena, smoothstep(0.05, 0.6, vZ.x) * (1.0 - 0.8 * uSatOn) * (1.0 - calma));
  col = mix(col, uGrava, vZ.z * 0.8 * kk);
  vec2 uvm = (vWP.xz - uMaskO) / (2.0 * uMaskS) + 0.5;
  float dentro = step(0.0, uvm.x) * step(uvm.x, 1.0) * step(0.0, uvm.y) * step(uvm.y, 1.0);
  vec3 mk = texture2D(uMask, clamp(uvm, 0.0, 1.0)).rgb * dentro * (1.0 - 0.92 * calma);   // la foto ya trae caminos y casas reales
  col = mix(col, uUrbano * (0.9 + 0.2 * ruido), smoothstep(0.25, 0.75, mk.b) * 0.85);
  col = mix(col, uCamino * (0.9 + 0.2 * ruido), smoothstep(0.25, 0.7, mk.g));
  col = mix(col, uAsfalto * (0.9 + 0.2 * ruido), smoothstep(0.25, 0.7, mk.r));
  col = mix(col, uAsfalto * (0.9 + 0.2 * ruido), vZ.y * kk);
  diffuseColor.rgb = col * mix(0.9 + 0.2 * ruido, 1.0, calma);
}`)},o}function H(e,t){let n=e.userData.uniformes;if(!t){n.uMaskS.value=1,n.uMaskO.value.set(1e9,1e9);return}n.uMask.value=t.textura,n.uMaskO.value.set(t.centro[0],t.centro[1]),n.uMaskS.value=t.S}function U(e,t,n,r){let i=e.userData.uniformes;if(!t){i.uSatOn.value=0;return}i.uSat.value=t,i.uSatS.value=n,i.uSatT.value.set(r[0],r[1],r[2],r[3]),i.uSatOn.value=1}function W(e,t,n,r,i=!0){let a=e.userData.uniformes;if(!t){a.uHiOn.value=0;return}a.uHi.value=t,a.uHiS.value=n,a.uSatT.value.set(r[0],r[1],r[2],r[3]),a.uHiOn.value=+!!i}function G(e,t,n,r=!0){let i=e.userData.uniformes,a=[i.uOa,i.uOb,i.uOc],o=!1;i.uSatT.value.set(n[0],n[1],n[2],n[3]);for(let e=0;e<3;e++){let n=t?.[e];n&&n.tex?(a[e].value=n.tex,i.uOT.value[e].set(n.cx,n.cz,n.S,+!!r),o||=r):i.uOT.value[e].set(0,0,1,0)}i.uOrOn.value=+!!o}function K(e,t,n){let r=e.userData.uniformes;r.uCutOn.value=+(t===`recorte`);for(let e=0;e<4;e++){let t=n[e];r.uCut.value[e].set(...t||[0,0,0,0])}let i=t===`translucido`;e.transparent=i,e.opacity=i?.38:1,e.depthWrite=!i,e.needsUpdate=!0}var q=[`general`,`medio`,`cerca`];async function J(e){try{let t=await fetch(new URL(`proyectos/${e}/ortofoto.json`,document.baseURI),{cache:`no-cache`});return t.ok?await t.json():null}catch{return null}}var Y=class{constructor(e,t,n,r=4){this.pid=e,this.meta=t,this.perfil=n,this.aniso=r,this.cancelado=!1,this.alCapa=null,this.estado=`cargando`,this.kb=0,this.capas=q.map(e=>{let n=t.capas.find(t=>t.nombre===e);return n?{nombre:e,cx:n.cx,cz:n.cz,S:n.S,px:n.px,tex:null}:null}).filter(Boolean)}get atribucion(){return this.meta.atribucion||`Ortofoto de dron`}async cargar(){for(let t=0;t<this.capas.length&&!this.cancelado;t++){let n=this.capas[t],r=this.perfil.orto?.[t]||1024;try{let i=new URL(`proyectos/${this.pid}/ortofoto_${n.nombre}.webp`,document.baseURI).href,a=await new Promise((e,t)=>{let r=new Image;r.onload=()=>e(r),r.onerror=()=>t(Error(`no se pudo leer `+n.nombre)),r.src=i});if(this.cancelado)return;let o=a;if(a.width>r){let e=document.createElement(`canvas`);e.width=e.height=r;let t=e.getContext(`2d`);t.imageSmoothingQuality=`high`,t.drawImage(a,0,0,r,r),o=e}let s=new e(o);s.colorSpace=E,s.flipY=!1,s.wrapS=s.wrapT=_,s.anisotropy=this.aniso,s.needsUpdate=!0,n.tex=s,this.alCapa?.(t,n)}catch(e){n.error=String(e?.message||e)}}this.estado=this.capas.every(e=>e.tex)?`completa`:this.capas.some(e=>e.tex)?`parcial`:`error`,this.alCapa?.(-1)}dispose(){this.cancelado=!0;for(let e of this.capas)e.tex?.dispose(),e.tex=null;this.alCapa=null}},ie=(e,t,n)=>`https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/${e}/${n}/${t}`,ae=`Esri, Maxar, Earthstar Geographics`,oe=class{constructor(e,t,{z:n,lado:r,aniso:i=4,base:a=null,baseS:s=0}){this.z=n,this.lado=r,this.cancelado=!1,this.ok=0,this.fallos=0,this.total=0,this.estado=`cargando`,this.alProgreso=null;let c=2**n*256,l=e*Math.PI/180;this.mpp=156543.03392804097*Math.cos(l)/2**n,this.S=r/2*this.mpp,this.ox=Math.round((t+180)/360*c-r/2),this.oy=Math.round((1-Math.log(Math.tan(l)+1/Math.cos(l))/Math.PI)/2*c-r/2);let u=this.canvas=document.createElement(`canvas`);u.width=u.height=r;let d=this.ctx=u.getContext(`2d`);if(d.fillStyle=`#6d7a55`,d.fillRect(0,0,r,r),a&&s>0){let e=a.width||a.naturalWidth,t=e*Math.min(1,this.S/s),n=(e-t)/2;try{d.imageSmoothingQuality=`high`,d.drawImage(a,n,n,t,t,0,0,r,r)}catch{}}let f=this.tex=new o(u);f.colorSpace=E,f.flipY=!1,f.wrapS=f.wrapT=_,f.anisotropy=i}_lista(){let e=Math.floor(this.ox/256),t=Math.floor((this.ox+this.lado-1)/256),n=Math.floor(this.oy/256),r=Math.floor((this.oy+this.lado-1)/256),i=[],a=this.ox+this.lado/2,o=this.oy+this.lado/2;for(let s=n;s<=r;s++)for(let n=e;n<=t;n++)i.push({tx:n,ty:s,d:Math.hypot(n*256+128-a,s*256+128-o)});return i.sort((e,t)=>e.d-t.d)}async cargar(){let e=this._lista();this.total=e.length;let t=0,n=0,r=!1,i=e=>{if(e){this.tex.needsUpdate=!0,this.alProgreso?.();return}r||(r=!0,setTimeout(()=>{r=!1,this.cancelado||(this.tex.needsUpdate=!0,this.alProgreso?.())},450))};await Promise.all(Array.from({length:6},async()=>{for(;!this.cancelado;){let r=t++;if(r>=e.length)return;let{tx:a,ty:o}=e[r];try{let e=await new Promise((e,t)=>{let n=new Image;n.crossOrigin=`anonymous`,n.onload=()=>e(n),n.onerror=t,n.src=ie(this.z,a,o)});if(this.cancelado)return;this.ctx.drawImage(e,a*256-this.ox,o*256-this.oy),this.ok++,n=0,i(!1)}catch{this.fallos++,++n>=6&&this.ok===0&&(this.estado=`sin conexión`,t=e.length)}}})),!this.cancelado&&(this.estado=this.ok?this.fallos?`parcial`:`completa`:`sin conexión`,i(!0))}dispose(){this.cancelado=!0,this.tex.dispose(),this.alProgreso=null}};function X(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new p,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Z(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Z(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Z(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new y(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var se={motorway:12,trunk:11,primary:9,secondary:8,tertiary:7,unclassified:6,residential:5,service:4,track:3.2,path:2.4,footway:2},ce=new Set([`motorway`,`trunk`,`primary`,`secondary`,`tertiary`,`unclassified`,`residential`]),le=class{constructor(e,{centro:t,rumboModelo:n,ajuste:r={}}){this.d=e,this.centro=t;let i=0;e.rumbo!=null&&n!=null&&(i=((n-e.rumbo)%180+180)%180,i>90&&(i-=180)),this.giroAuto=i;let a=f.degToRad(i+(r.giro||0));this.c=Math.cos(a),this.s=Math.sin(a),this.dx=r.dx||0,this.dz=r.dz||0;let o=e.alturas;this.A=o,this.dm=Int16Array.from(o.dm);let s=(e.rio||[]).filter(e=>e.p.length>1);s.sort((e,t)=>this._dmin(e.p)-this._dmin(t.p)),this.rioLinea=s.length?s[0].p.map(([e,t])=>this.aModelo(e,t)):null,this.rioSegs=this.rioLinea?this.rioLinea.slice(1).map((e,t)=>[this.rioLinea[t][0],this.rioLinea[t][1],e[0],e[1]]):[],this._mask=null}_dmin(e){let t=1e9;for(let n=0;n+1<e.length;n++)t=Math.min(t,Q(0,0,e[n][0],e[n][1],e[n+1][0],e[n+1][1]));return t}aModelo(e,t){return[this.centro[0]+this.c*e-this.s*t+this.dx,this.centro[1]+this.s*e+this.c*t+this.dz]}transformacion(){return[this.centro[0]+this.dx,this.centro[1]+this.dz,this.c,this.s]}aDatos(e,t){let n=e-this.centro[0]-this.dx,r=t-this.centro[1]-this.dz;return[this.c*n+this.s*r,-this.s*n+this.c*r]}alturaRel(e,t){let[n,r]=this.aDatos(e,t),i=this.A,a=i.n,o=Math.min(a-1.001,Math.max(0,(n-i.x0)/i.paso)),s=Math.min(a-1.001,Math.max(0,(r-i.z0)/i.paso)),c=Math.floor(o),l=Math.floor(s),u=o-c,d=s-l,f=this.dm;return((f[l*a+c]*(1-u)+f[l*a+c+1]*u)*(1-d)+(f[(l+1)*a+c]*(1-u)+f[(l+1)*a+c+1]*u)*d)/10}distanciaRio(e,t){let n=1e9;for(let r of this.rioSegs){let i=Q(e,t,r[0],r[1],r[2],r[3]);i<n&&(n=i)}return n}crearMascara(e){let t=this.d.radio*1.1,n=document.createElement(`canvas`);n.width=n.height=e;let r=n.getContext(`2d`,{willReadFrequently:!0});r.fillStyle=`#000`,r.fillRect(0,0,e,e),r.globalCompositeOperation=`lighter`,r.lineCap=`round`,r.lineJoin=`round`;let i=(n,r)=>[(n-(this.centro[0]-t))/(2*t)*e,(r-(this.centro[1]-t))/(2*t)*e],a=e/(2*t),s=(e,t,n)=>{r.strokeStyle=n,r.lineWidth=Math.max(1.4,t*a),r.beginPath(),e.forEach(([e,t],n)=>{let[a,o]=i(...this.aModelo(e,t));n?r.lineTo(a,o):r.moveTo(a,o)}),r.stroke()},c=(e,t)=>{r.fillStyle=t,r.beginPath(),e.forEach(([e,t],n)=>{let[a,o]=i(...this.aModelo(e,t));n?r.lineTo(a,o):r.moveTo(a,o)}),r.closePath(),r.fill()};for(let e of this.d.usos||[])/residential|commercial|industrial|retail/.test(e.t)&&c(e.p,`rgb(0,0,150)`);for(let e of this.d.edificios||[])c(e.p,`rgb(0,0,255)`);for(let e of this.d.vias||[]){let t=se[e.c]||3;ce.has(e.c)?s(e.p,t,`rgb(255,0,0)`):s(e.p,t,`rgb(0,255,0)`)}this._dato=r.getImageData(0,0,e,e).data,this._tam=e,this._S=t;let l=new o(n);return l.flipY=!1,l.colorSpace=``,l.anisotropy=4,l.wrapS=l.wrapT=_,l.needsUpdate=!0,{textura:l,S:t,centro:this.centro}}enMascara(e,t){if(!this._dato)return!1;let n=this._tam,r=this._S,i=Math.floor((e-(this.centro[0]-r))/(2*r)*n),a=Math.floor((t-(this.centro[1]-r))/(2*r)*n);if(i<0||a<0||i>=n||a>=n)return!1;let o=(a*n+i)*4;return this._dato[o]>60||this._dato[o+1]>60||this._dato[o+2]>60}crearEdificios(e,{max:t,ocupado:n}){let o=[],s=0;for(let a of this.d.edificios||[]){if(s>=t)break;let c=a.p.map(([e,t])=>this.aModelo(e,t));if(c.length<3)continue;let u=c.reduce((e,t)=>e+t[0],0)/c.length,d=c.reduce((e,t)=>e+t[1],0)/c.length;if(n(u,d))continue;let f=new r(c.map(([e,t])=>new i(e-u,-(t-d)))),p=3.6+Math.abs(Math.sin(u*12.9898+d*78.233))*43758.5453%1*2.4,m=new l(f,{depth:p,bevelEnabled:!1});m.rotateX(-Math.PI/2),m.translate(u,e.alturaEn(u,d)-.15,d),o.push(m.toNonIndexed()),s++}if(!o.length)return null;let c=X(o);o.forEach(e=>e.dispose());let u=new d(c,new a({color:`#b8ac98`,roughness:.92,flatShading:!0}));return u.castShadow=!0,u.receiveShadow=!0,u.name=`entorno-edificios`,u.raycast=()=>{},u.userData.cantidad=o.length,u}};function Q(e,t,n,r,i,a){let o=i-n,s=a-r,c=o*o+s*s||1,l=Math.max(0,Math.min(1,((e-n)*o+(t-r)*s)/c));return Math.hypot(n+l*o-e,r+l*s-t)}var ue=`
float h21(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), f.x), mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), f.x), f.y); }
`,de=class{constructor(e,t,{ancho:n,bordeRio:r,nivel:i,linea:o}){let s=n/2+r,c=[];if(o&&o.length>1)c=o.map((e,t)=>{let n=o[Math.max(0,t-1)],r=o[Math.min(o.length-1,t+1)],i=r[0]-n[0],a=r[1]-n[1],s=Math.hypot(i,a)||1;return{x:e[0],z:e[1],tx:i/s,tz:a/s}});else for(let n=0;n<=120;n++){let r=(n/120-.5)*1800,i=-t.meandro(r),a=e.sMid+i,o=e.tc+r;c.push({x:e.ox+e.ux*a+e.vx*o,z:e.oz+e.uz*a+e.vz*o,tx:e.vx,tz:e.vz})}let l=c.length,u=new p,f=new Float32Array(l*2*3),m=new Float32Array(l*2),h=new Float32Array(l*2*2),g=[];for(let e=0;e<l;e++){let t=c[e],n=t.tz,r=-t.tx;for(let a=0;a<2;a++){let o=a?1:-1,c=(e*2+a)*3;f[c]=t.x+n*s*o,f[c+1]=i,f[c+2]=t.z+r*s*o,m[e*2+a]=o,h[(e*2+a)*2]=t.tx,h[(e*2+a)*2+1]=t.tz}if(e<l-1){let t=e*2;g.push(t,t+2,t+1,t+1,t+2,t+3)}}u.setAttribute(`position`,new y(f,3)),u.setAttribute(`aCruz`,new y(m,1)),u.setAttribute(`aDir`,new y(h,2)),u.setIndex(g);let _=new Float32Array(f.length);for(let e=1;e<_.length;e+=3)_[e]=1;u.setAttribute(`normal`,new y(_,3)),u.computeBoundingSphere();let v={uTime:{value:0},uProfunda:{value:new b(A.aguaProfunda)},uSomera:{value:new b(A.aguaSomera)},uFrac:{value:n/(n+2*r)},uAlfa:{value:1}},x=new a({color:16777215,roughness:.07,metalness:0,transparent:!0,opacity:.9,depthWrite:!1,envMapIntensity:1});x.customProgramCacheKey=()=>`entorno-agua-v4`,x.onBeforeCompile=e=>{Object.assign(e.uniforms,v),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aCruz; attribute vec2 aDir; varying float vCruz; varying vec2 vDir; varying vec3 vWP2;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vCruz = aCruz; vDir = aDir; vWP2 = position;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vCruz; varying vec2 vDir; varying vec3 vWP2; uniform float uTime, uFrac, uAlfa; uniform vec3 uProfunda, uSomera;
${ue}`).replace(`#include <color_fragment>`,`#include <color_fragment>
{ vec2 fl = normalize(vDir), p = vWP2.xz, pe = vec2(-fl.y, fl.x);
  vec2 q = vec2(dot(p, pe), dot(p, fl) - uTime * 2.6);                         // coordenadas que viajan río abajo
  float orilla = smoothstep(uFrac * 0.35, uFrac, abs(vCruz));
  float espuma = smoothstep(uFrac * 0.9, uFrac * 1.02, abs(vCruz)) * (0.4 + 0.6 * vnoise(q * 0.5));
  float rayas = smoothstep(0.6, 0.86, vnoise(vec2(q.x * 0.55, q.y * 0.11))) * (1.0 - 0.5 * orilla);   // rayas de corriente
  diffuseColor.rgb = mix(uProfunda, uSomera, orilla) + espuma * 0.1 + rayas * 0.1;
  diffuseColor.a = mix(0.93, 0.5, orilla) * uAlfa; }`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
{ vec2 fl = normalize(vDir), p = vWP2.xz, pe = vec2(-fl.y, fl.x);
  vec2 q1 = vec2(dot(p, pe), dot(p, fl) - uTime * 2.6) * 0.35, q2 = vec2(dot(p, pe), dot(p, fl) - uTime * 4.2) * 1.1;
  float a = vnoise(q1), b = vnoise(q2);
  vec2 g = vec2(a - vnoise(q1 + vec2(0.4, 0.0)), a - vnoise(q1 + vec2(0.0, 0.4))) + 0.5 * vec2(b - vnoise(q2 + vec2(0.4, 0.0)), b - vnoise(q2 + vec2(0.0, 0.4)));
  vec3 gv = normalize((viewMatrix * vec4(g.x * pe.x + g.y * fl.x, 0.0, g.x * pe.y + g.y * fl.y, 0.0)).xyz + vec3(1e-5));
  normal = normalize(normal + gv * length(g) * 0.7); }`)},this.mesh=new d(u,x),this.mesh.renderOrder=2,this.mesh.frustumCulled=!1,this.mesh.name=`entorno-agua`,this.uniformes=v}setFoto(e){let t=this.uniformes;t.uProfunda.value.set(e?`#7b6a52`:A.aguaProfunda),t.uSomera.value.set(e?`#9d8c6c`:A.aguaSomera),t.uAlfa.value=e?.42:1}animar(e){this.uniformes.uTime.value+=e}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}},$=class e extends d{constructor(){let t=e.SkyShader,n=new T({name:t.name,uniforms:w.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:1,depthWrite:!1});super(new g(1,1,1),n),this.isSky=!0}};$.SkyShader={name:`SkyShader`,uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new n},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( vSunDirection.y );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform float cloudScale;
		uniform float cloudSpeed;
		uniform float cloudCoverage;
		uniform float cloudDensity;
		uniform float cloudElevation;
		uniform float showSunDisc;
		uniform float time;

		// gradient at a lattice corner; sinless hash so every GPU produces the same clouds
		vec2 gradient( vec2 i ) {
			vec3 p = fract( i.xyx * vec3( 0.1031, 0.1030, 0.0973 ) );
			p += dot( p, p.yzx + 33.33 );
			return fract( ( p.xx + p.yz ) * p.zy ) * 2.0 - 1.0;
		}

		// 2D gradient noise: isotropic lobes like Perlin at value-noise cost
		float noise( vec2 p ) {
			vec2 i = floor( p );
			vec2 f = fract( p );
			vec2 u = f * f * f * ( f * ( f * 6.0 - 15.0 ) + 10.0 ); // quintic fade
			float a = dot( gradient( i ), f );
			float b = dot( gradient( i + vec2( 1.0, 0.0 ) ), f - vec2( 1.0, 0.0 ) );
			float c = dot( gradient( i + vec2( 0.0, 1.0 ) ), f - vec2( 0.0, 1.0 ) );
			float d = dot( gradient( i + vec2( 1.0, 1.0 ) ), f - vec2( 1.0, 1.0 ) );
			return mix( mix( a, b, u.x ), mix( c, d, u.x ), u.y ) * 1.6; // ~[-1,1]
		}

		// fbm; per-octave drift makes clouds billow instead of scrolling as a rigid stamp
		float fbm( vec2 p, float drift ) {
			float result = 0.0;
			float amplitude = 1.0;
			for ( int i = 0; i < 4; i ++ ) {
				result += amplitude * noise( p );
				amplitude *= 0.5;
				p = p * 2.0 + drift;
			}
			return result;
		}

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, direction.y ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - vSunDirection.y, 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisc = clamp( ( cosTheta - sunAngularDiameterCos ) * 50000.0, 0.0, 1.0 ) * showSunDisc;
			vec3 sundiscColor = ( 760.0 * sundisc ) * min( vSunE * Fex, 80.0 );

			vec3 texColor = ( Lin + L0 ) * 0.04 + sundiscColor + vec3( 0.0, 0.0003, 0.00075 );

			// Clouds
			if ( direction.y > 0.0 && cloudCoverage > 0.0 ) {

				// Project to cloud plane (higher elevation = clouds appear lower/closer)
				float elevation = mix( 1.0, 0.1, cloudElevation );
				vec2 cloudUV = direction.xz / ( direction.y * elevation );
				cloudUV *= cloudScale;
				cloudUV += time * cloudSpeed;

				// Cloud density field
				float evolve = time * cloudSpeed * 300.0;
				float cloudNoise = clamp( fbm( cloudUV * 1000.0, evolve ) * 0.7 + 0.5, 0.0, 1.0 );

				// Large-scale coverage variation: clear gaps next to dense banks
				float region = noise( cloudUV * 300.0 ) * 0.37 + 0.5;
				float cov = clamp( cloudCoverage + ( region - 0.5 ) * 0.6, 0.0, 1.0 );

				// Carve clouds where noise rises above the coverage level
				float threshold = 1.0 - cov;
				float cloudMask = smoothstep( threshold, threshold + 0.3, cloudNoise );

				// Fade clouds near horizon (adjusted by elevation)
				float horizonFade = smoothstep( 0.0, 0.03 + 0.06 * cloudElevation, direction.y );
				cloudMask *= horizonFade;

				// Cloud lighting from the sky's own radiance
				float dayFactor = smoothstep( -0.08, 0.3, vSunDirection.y );
				vec3 sunColor = vSunE * Fex * 0.22 * 0.04; // 0.22 ~ albedo/pi, 0.04 = exposure; the aerial composite adds the eye-leg extinction
				vec3 skyAmbient = Lin * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

				// Beer-powder self-shadow from the sampled density
				float depth = max( 0.0, cloudNoise - threshold );
				float beer = exp( depth * -4.0 );
				float powder = 1.0 - beer * beer; // beer*beer == exp(-8*depth)
				float shade = mix( 0.45, 1.0, clamp( beer * powder * 2.6, 0.0, 1.0 ) ); // 2.6 = 1/0.385, normalizes beer*powder peak to 1

				// Henyey-Greenstein forward lobe ( g = 0.7 ): silver lining on rims toward the sun
				float silver = clamp( 0.51 / pow( 1.49 - cosTheta * 1.4, 1.5 ), 0.0, 3.0 ); // 0.51=1-g^2, 1.49=1+g^2, 1.4=2g
				float edge = cloudMask * ( 1.0 - cloudMask ) * 4.0;

				vec3 cloudColor = skyAmbient + sunColor * shade;
				cloudColor += sunColor * silver * edge * 0.6;
				cloudColor *= max( dayFactor, 0.03 );

				// Cloud opacity via Beer's law: density sets how solid the clouds get
				float alpha = ( 1.0 - exp( depth * cloudDensity * -12.0 ) ) * horizonFade;

				// Occlude the sun disc/glow behind opaque cloud
				texColor -= L0 * 0.04 * alpha;

				// Composite through the atmosphere so distant clouds dissolve into haze
				vec3 cloudAerial = mix( texColor, cloudColor, Fex );
				texColor = mix( texColor, cloudAerial, alpha );

			}

			gl_FragColor = vec4( texColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var fe=class{constructor(e){this.v=e,this.g=null,this.sky=null,this.envTex=null,this.sun=null,this._t=0}activar({centro:e,radio:t,perfil:n,solElevacion:r,solAzimut:i,sombras:a}){let o=this.v,s=o.scene,c=o.renderer,l=s.children.filter(e=>e.isLight),d=l.find(e=>e.isHemisphereLight),f=l.filter(e=>e.isDirectionalLight);this.sun=f[0]||null,this.fill=f[1]||null,this.hemi=d||null,this.centro=e.clone(),this.radio=t,this.perfil=n,this.g={fog:s.fog,env:s.environment,envInt:s.environmentIntensity,tone:c.toneMapping,exp:c.toneMappingExposure,sh:{en:c.shadowMap.enabled,ty:c.shadowMap.type,au:c.shadowMap.autoUpdate},hemi:d&&{c:d.color.clone(),g:d.groundColor.clone(),i:d.intensity},sun:this.sun&&{p:this.sun.position.clone(),i:this.sun.intensity,c:this.sun.color.clone(),cast:this.sun.castShadow,tp:this.sun.target.position.clone(),tin:!!this.sun.target.parent},fill:this.fill&&{i:this.fill.intensity}},this.sky=new $,this.sky.scale.setScalar(4e3),this.sky.name=`entorno-cielo`,this.sky.raycast=()=>{};let p=this.sky.material.uniforms;p.turbidity.value=3.2,p.rayleigh.value=1.1,p.mieCoefficient.value=.004,p.mieDirectionalG.value=.82,s.add(this.sky),s.fog=new u(A.niebla,.0011),c.toneMapping=7,c.toneMappingExposure=.9,d&&(d.color.set(`#d4e3f2`),d.groundColor.set(`#6b6552`),d.intensity=.95),this.fill&&(this.fill.intensity=.2),this.sun&&(this.sun.color.set(`#fff1dc`),this.sun.intensity=2.5,this.sun.target.parent||s.add(this.sun.target),this.sun.target.position.copy(this.centro)),this.setSol(r,i,!0),this.setSombras(a)}_dir(e,t){let r=f.degToRad(e),i=f.degToRad(t);return new n(Math.cos(r)*Math.sin(i),Math.sin(r),-Math.cos(r)*Math.cos(i))}setSol(e,t,n=!1){if(!this.sky)return;let r=this._dir(e,t);this.sky.material.uniforms.sunPosition.value.copy(r),this.sun&&(this.sun.position.copy(this.centro).addScaledVector(r,450),this.sun.target.updateMatrixWorld()),this.v.renderer.shadowMap.needsUpdate=!0,this.v._dirty=!0,clearTimeout(this._t),this._t=setTimeout(()=>this._reflejos(r),n?0:350)}_reflejos(e){if(!this.sky)return;let t=this.v.renderer,n=new s,r=new $;r.scale.setScalar(10);let i=r.material.uniforms,a=this.sky.material.uniforms;for(let e of[`turbidity`,`rayleigh`,`mieCoefficient`,`mieDirectionalG`])i[e].value=a[e].value;i.sunPosition.value.copy(e),n.add(r);let o=new x(t),c=o.fromScene(n,0,.1,100);this.envRT?.dispose(),this.envRT=c,this.envTex=c.texture,o.dispose(),r.geometry.dispose(),r.material.dispose(),this.v.scene.environment=this.envTex,this.v.scene.environmentIntensity=.5,this.v._dirty=!0}setSombras(e){let t=this.v.renderer,n=this.sun,r=this.perfil.sombras;if(this.sombrasOn=!!(e&&n&&r>0),this.sombrasOn){t.shadowMap.enabled=!0,t.shadowMap.type=1,n.castShadow=!0,n.shadow.mapSize.x!==r&&(n.shadow.map?.dispose(),n.shadow.map=null,n.shadow.mapSize.set(r,r));let e=n.shadow.camera,i=this.radio;e.left=-i,e.right=i,e.top=i,e.bottom=-i,e.near=10,e.far=900,e.updateProjectionMatrix(),n.shadow.bias=-3e-4,n.shadow.normalBias=.35}else n&&(n.castShadow=!1),t.shadowMap.enabled=this.g?this.g.sh.en:!1;this.v._dirty=!0}refrescarSombras(){this.sombrasOn&&(this.v.renderer.shadowMap.needsUpdate=!0,this.v._dirty=!0)}restaurar(){let e=this.v,t=e.scene,n=e.renderer,r=this.g;clearTimeout(this._t),this.sky&&=(t.remove(this.sky),this.sky.geometry.dispose(),this.sky.material.dispose(),null),this.envRT?.dispose(),this.envRT=null,this.envTex=null,r&&(t.fog=r.fog,t.environment=r.env,t.environmentIntensity=r.envInt,n.toneMapping=r.tone,n.toneMappingExposure=r.exp,n.shadowMap.enabled=r.sh.en,n.shadowMap.type=r.sh.ty,n.shadowMap.autoUpdate=r.sh.au,this.hemi&&r.hemi&&(this.hemi.color.copy(r.hemi.c),this.hemi.groundColor.copy(r.hemi.g),this.hemi.intensity=r.hemi.i),this.fill&&r.fill&&(this.fill.intensity=r.fill.i),this.sun&&r.sun&&(this.sun.position.copy(r.sun.p),this.sun.intensity=r.sun.i,this.sun.color.copy(r.sun.c),this.sun.castShadow=r.sun.cast,this.sun.target.position.copy(r.sun.tp),r.sun.tin||t.remove(this.sun.target),this.sun.target.updateMatrixWorld(),this.sun.shadow.map?.dispose(),this.sun.shadow.map=null)),this.g=null,e._dirty=!0}};function pe(){let e=(e,t)=>{let n=new b(t),r=e.attributes.position.count,i=new Float32Array(r*3);for(let e=0;e<r;e++)i[e*3]=n.r,i[e*3+1]=n.g,i[e*3+2]=n.b;return e.setAttribute(`color`,new y(i,3)),e},t=e(new m(.22,.34,2.4,5).translate(0,1.2,0),`#5a4631`),n=e(new c(2.3,5.6,7).translate(0,4.7,0),`#4f7a3e`),r=e(new c(1.7,4.2,7).translate(0,7.4,0),`#5d8a46`),i=X([t,n,r].map(e=>e.toNonIndexed()));return[t,n,r].forEach(e=>e.dispose()),i}function me(e,t,n,r,i,o=null,s=null){let c=n.arboles;if(!c)return null;let l=R(r^2654435761),u={h:0,rio:0,via:0,talud:0},d=Math.min(n.radio*.72,650),f=new C,p=new b,m=new h(pe(),new a({vertexColors:!0,roughness:1,flatShading:!0}),c),g=0;for(let n=0;n<c*(s?40:8)&&g<c;n++){let n=l()*Math.PI*2,r=d*Math.sqrt(l()),a=t.cx+Math.cos(n)*r,c=t.cz+Math.sin(n)*r;if(e.sample(a,c,u),u.rio>.001||u.via>0||u.talud||o&&o(a,c)||s&&l()>s(a,c))continue;let[h,_]=e.local(a,c),v=Math.abs(h),y=Math.abs(_);if(v<t.Lh+14&&y<t.halfW+14||i.some(e=>e&&h>e[0]-10&&h<e[1]+10&&_>e[2]-10&&_<e[3]+10))continue;let b=e.alturaEn(a+2,c),x=e.alturaEn(a,c+2);if(Math.hypot(b-u.h,x-u.h)/2>.45||u.h<t.groundY-2.5)continue;let S=.75+l()*.95;f.position.set(a,u.h-.1,c),f.rotation.set(0,l()*6.28,0),f.scale.set(S,S*(.9+l()*.35),S),f.updateMatrix(),m.setMatrixAt(g,f.matrix),p.setHSL(.27+l()*.08,.35+l()*.2,.62+l()*.3),m.setColorAt(g,p),g++}return m.count=g,m.instanceMatrix.needsUpdate=!0,m.instanceColor&&(m.instanceColor.needsUpdate=!0),m.castShadow=!0,m.receiveShadow=!0,m.frustumCulled=!1,m.name=`entorno-arboles`,m.raycast=()=>{},m}var he=class{constructor(e,t={}){this.v=e,this.cfg={...O,...t},this.perfil=j(e),this.activo=!1,this.grupo=null,this.luz=new fe(e),this.marcados=new Set,this.info=``,this._tok=0}async _marco(){let e=this.v,t=e.map;if(!e.model||!t)return null;let r=[...t.layers?.concrete||[],...t.layers?.other||[]];if(!r.length)return null;let i=await e.boxOf(r);if(!i||i.isEmpty())return null;let a=i.getCenter(new n),o=i.getSize(new n),s=t.axis;if(!s){let e=o.x>=o.z;s={origin:[e?i.min.x:a.x,0,e?a.z:i.min.z],ux:+!!e,uz:+!e,length:Math.max(o.x,o.z)}}let c=Math.hypot(s.ux,s.uz)||1,l=s.ux/c,u=s.uz/c,d=-u,f=l,p=s.origin[0],m=s.origin[2],h=await this._extensiones(t.layers?.concrete||[],p,m,l,u,d,f),g=1/0,_=-1/0,v=1/0,y=-1/0,b=Number.isFinite(e.grid?.position?.y)?e.grid.position.y:i.min.y+.4*o.y,x=h.filter(e=>e.y1>b+3);for(let e of x.length?x:h)g=Math.min(g,e.s0),_=Math.max(_,e.s1),v=Math.min(v,e.t0),y=Math.max(y,e.t1);Number.isFinite(g)||(g=-o.x/2,_=o.x/2,v=-o.z/2,y=o.z/2);let S=Number.isFinite(e.grid?.position?.y)?e.grid.position.y:i.min.y+.4*o.y,C=Math.min(Math.max(S,i.min.y+1),i.max.y-2);return{frame:{ox:p,oz:m,ux:l,uz:u,vx:d,vz:f,sMid:(g+_)/2,tc:(v+y)/2,Lh:(_-g)/2,halfW:Math.max(3,(y-v)/2),groundY:C,deckY:i.max.y-k.descuentoTablero,cx:a.x,cz:a.z},box:i,ids:r,ext:h,centro:a,tam:o}}async _extensiones(e,t,n,r,i,a,o){let s=this.v,c=`${t}|${n}|${r}|${i}`;if(this._ext&&this._ext.modelo===s.model&&this._ext.k===c)return this._ext.datos;let l=[];for(let c of e){let e;try{e=(await s.model.getItemsGeometry([c]))[0]||[]}catch{continue}let u=1/0,d=-1/0,f=1/0,p=-1/0,m=1/0,h=-1/0;for(let s of e){if(!s.positions)continue;let e=s.transform.elements,c=s.positions,l=c.length>1800?3*Math.ceil(c.length/1800):3;for(let s=0;s+2<c.length;s+=l){let l=c[s],g=c[s+1],_=c[s+2],v=e[0]*l+e[4]*g+e[8]*_+e[12],y=e[1]*l+e[5]*g+e[9]*_+e[13],b=e[2]*l+e[6]*g+e[10]*_+e[14],x=(v-t)*r+(b-n)*i,S=(v-t)*a+(b-n)*o;x<u&&(u=x),x>d&&(d=x),S<f&&(f=S),S>p&&(p=S),y<m&&(m=y),y>h&&(h=y)}}Number.isFinite(u)&&l.push({id:c,s0:u,s1:d,t0:f,t1:p,y0:m,y1:h})}return this._ext={modelo:s.model,k:c,datos:l},l}async _huellas(e,t){let n=[[],[]];for(let r of t){if(r.y0>e.groundY-3)continue;let t=[r.s0-e.sMid,r.s1-e.sMid,r.t0-e.tc,r.t1-e.tc];n[(t[0]+t[1])/2<0?0:1].push(t)}let r=k.margenHueco,i=e=>e.length?[Math.min(...e.map(e=>e[0]))-r,Math.max(...e.map(e=>e[1]))+r,Math.min(...e.map(e=>e[2]))-r,Math.max(...e.map(e=>e[3]))+r]:null,a=[i(n[0]),i(n[1])];return a[0]||=[-e.Lh-r,-e.Lh+22,-e.halfW-r,e.halfW+r],a[1]||=[e.Lh-22,e.Lh+r,-e.halfW-r,e.halfW+r],a}async activar(){return this._tok++,this.vaciar(),this._construir(this._tok)}async reconstruir(){return this.activo?(this._tok++,this._quitarObjetos(),this._construir(this._tok)):!1}async _construir(e){let t=this.v,n=await this._marco();if(!n||e!==this._tok)return!1;let{frame:r,ext:i,centro:a,tam:o}=n;this.frame=r;let s=this.rectas=await this._huellas(r,i);if(e!==this._tok)return!1;let c=L((()=>{try{return new URLSearchParams(location.search).get(`proyecto`)||`obra`}catch{return`obra`}})()),l={activo:!!this.cfg.agua,ancho:Math.max(24,2*r.Lh-44)},u=null;if(this.cfg.real){let t=await this._datosReales();if(e!==this._tok)return!1;if(t){let e=[r.ox+r.ux*r.sMid+r.vx*r.tc,r.oz+r.uz*r.sMid+r.vz*r.tc];u=this.real=new le(t,{centro:e,rumboModelo:(Math.atan2(r.ux,-r.uz)*180/Math.PI+360)%360,ajuste:this.ajuste()})}}let f=this.fuente=new ee(r,{relieve:this.cfg.relieve,semilla:c,rio:l,real:u,terraplen:this.cfg.terraplen}),p=this.grupo=new v;p.name=`entorno`;let m=ne(f,{cx:a.x,cz:a.z,radio:this.perfil.radio,n:this.perfil.rejilla});this.matTerreno=V(r),K(this.matTerreno,this.cfg.subestructura,s),u&&(this.mascara=u.crearMascara(this.perfil.nombre===`alta`?2048:1024),H(this.matTerreno,this.mascara));let h=null;if(u&&this.cfg.satelite&&this.perfil.imagen){if(h=await this._satelite(),e!==this._tok)return!1;h&&U(this.matTerreno,h.tex,h.meta.S,u.transformacion())}this.usaSat=!!h,this.usaOrto=!1,this.usaOrtoDisponible=!1;let g=u&&this.perfil.orto?await this._ortoMeta():null;if(e!==this._tok)return!1;if(g&&(this.usaOrtoDisponible=!0,this._ortoDecidido||(this._ortoDecidido=!0,this.cfg.nitida=!1)),g&&this.cfg.orto){let e=this._orto(g);G(this.matTerreno,e.capas,u.transformacion(),!0),this.usaOrto=!0}this.usaVivo=!1;let _=u&&this.cfg.nitida&&this.perfil.vivo&&navigator.onLine!==!1?this._vivo(h):null;if(_&&(W(this.matTerreno,_.tex,_.S,u.transformacion()),this.usaVivo=!0),this.terreno=new d(m,this.matTerreno),this.terreno.receiveShadow=!0,this.terreno.frustumCulled=!1,this.terreno.name=`entorno-terreno`,this.terreno.raycast=()=>{},p.add(this.terreno),l.activo&&(this.agua=new de(r,f,{ancho:l.ancho,bordeRio:k.bordeRio,nivel:r.groundY-k.profundidadRio*.45,linea:u&&u.rioLinea}),this.agua.mesh.raycast=()=>{},this.agua.setFoto(this.usaVivo||this.usaOrto),p.add(this.agua.mesh)),this.cfg.vegetacion&&(this.arboles=me(f,r,this.perfil,c,s,u?(e,t)=>u.enMascara(e,t):null,h?(e,t)=>this._probArbol(h,u,e,t):null),this.arboles&&p.add(this.arboles)),u){let e={h:0,rio:0,via:0,talud:0},t=u.crearEdificios(f,{max:this.perfil.nombre===`alta`?1500:600,ocupado:(t,n)=>{if(Math.hypot(t-a.x,n-a.z)>this.perfil.radio*.9||(f.sample(t,n,e),e.rio>.001||e.via>0||e.talud))return!0;let[i,o]=f.local(t,n);return Math.abs(i)<r.Lh+8&&Math.abs(o)<r.halfW+10||s.some(e=>e&&i>e[0]-6&&i<e[1]+6&&o>e[2]-6&&o<e[3]+6)}});t?(p.add(t),this.nEdificios=t.userData.cantidad):this.nEdificios=0}t.scene.add(p),this.luz.g||this.luz.activar({centro:a,radio:Math.max(90,o.length()*.62+30),perfil:this.perfil,solElevacion:this.cfg.solElevacion,solAzimut:this.cfg.solAzimut,sombras:this.cfg.sombras}),this._grid===void 0&&(this._grid=t.grid.visible,t.grid.visible=!1),this._enlazarMosaicos(),this.activo=!0,this.info=`calidad ${this.perfil.nombre} · ${Math.round(m.index.count/3/1e3)} mil triángulos de terreno${this.arboles?` · ${this.arboles.count} árboles`:``}${u?` · terreno real: ${this.nEdificios} edificios, ${(this.real.d.vias||[]).length} caminos`:``}${h?` · imagen Sentinel-2 del ${h.meta.fecha}`:``}${this.usaOrto?` · ortofoto de dron (${this._or.d.capas.length} capas)`:``}${this.usaVivo?` · imagen nítida Esri z${this.perfil.vivo.z}`:``}`,this.usaReal=!!u,this.atribucion=[h?h.meta.atribucion:``,this.usaOrto?this._or.d.atribucion:``,this.usaVivo?ae:``].filter(Boolean).join(` · `),this._animacion(),t._dirty=!0;try{this.alActivar?.()}catch{}return!0}async _datosReales(){let e=this._pid();if(this._datos&&this._datos.pid===e)return this._datos.d;let t=null;try{let n=await fetch(new URL(`proyectos/${e}/terreno_real.json`,document.baseURI),{cache:`no-cache`});n.ok&&(t=await n.json())}catch{}return this._datos={pid:e,d:t},t}_pid(){try{return new URLSearchParams(location.search).get(`proyecto`)||localStorage.getItem(`bim5d-proj`)||`obra`}catch{return`obra`}}get tieneDatos(){return!!(this._datos&&this._datos.d)}async _satelite(){let t=this._pid();if(this._sat&&this._sat.pid===t)return this._sat.d;let n=null;try{let r=await fetch(new URL(`proyectos/${t}/terreno_imagen.json`,document.baseURI),{cache:`no-cache`});if(r.ok){let i=await r.json(),a=await new Promise((e,n)=>{let r=new Image;r.onload=()=>e(r),r.onerror=n,r.src=new URL(`proyectos/${t}/terreno_imagen.jpg`,document.baseURI).href}),o=this.perfil.imagen,s=a;if(a.width>o){let e=document.createElement(`canvas`);e.width=e.height=o,e.getContext(`2d`).drawImage(a,0,0,o,o),s=e}let c=new e(s);c.colorSpace=E,c.flipY=!1,c.wrapS=c.wrapT=_,c.anisotropy=Math.min(8,this.v.renderer.capabilities.getMaxAnisotropy()),c.needsUpdate=!0;let l=document.createElement(`canvas`);l.width=l.height=256;let u=l.getContext(`2d`,{willReadFrequently:!0});u.drawImage(a,0,0,256,256),n={meta:i,tex:c,px:u.getImageData(0,0,256,256).data}}}catch{}return this._sat={pid:t,d:n},this.usaSatDisponible=!!n,n}async _ortoMeta(){let e=this._pid();if(this._om&&this._om.pid===e)return this._om.meta;let t=await J(e);return this._om={pid:e,meta:t},t}_orto(e){let t=this._pid();if(this._or&&this._or.pid===t)return this._or.d;let n=new Y(t,e,this.perfil,Math.min(8,this.v.renderer.capabilities.getMaxAnisotropy()));return n.alCapa=()=>{this.matTerreno&&this.real&&this.usaOrto&&G(this.matTerreno,n.capas,this.real.transformacion(),this.cfg.orto),this.v._dirty=!0;try{this.alOrto?.(n)}catch{}},this._or={pid:t,d:n},n.cargar(),n}setOrto(e){this.cfg.orto=e,this.activo&&(this.matTerreno&&this._or?(G(this.matTerreno,this._or.d.capas,this.real.transformacion(),e),this.usaOrto=e,this.agua?.setFoto(e||this.usaVivo),this.v._dirty=!0):e&&this.reconstruir())}_vivo(e){let t=this._pid();if(this._hi&&this._hi.pid===t)return this._hi.d;let n=this.real.d.origen,r=this.perfil.vivo,i=e?.tex?.image||null,a=new oe(n.lat,n.lon,{z:r.z,lado:r.lado,aniso:Math.min(8,this.v.renderer.capabilities.getMaxAnisotropy()),base:i,baseS:e?.meta?.S||0});return a.alProgreso=()=>{this.v._dirty=!0;try{this.alVivo?.(a)}catch{}},this._hi={pid:t,d:a},a.cargar().then(()=>{try{this.alVivo?.(a)}catch{}}),a}setNitida(e){this.cfg.nitida=e,this.activo&&(this.matTerreno&&this._hi?(W(this.matTerreno,this._hi.d.tex,this._hi.d.S,this.real.transformacion(),e),this.usaVivo=e,this.agua?.setFoto(e||this.usaOrto),this.v._dirty=!0):e&&this.reconstruir())}_probArbol(e,t,n,r){let[i,a]=t.aDatos(n,r),o=e.meta.S,s=(i+o)/(2*o),c=(a+o)/(2*o);if(s<0||c<0||s>=1||c>=1)return 0;let l=(Math.floor(c*256)*256+Math.floor(s*256))*4,u=e.px[l],d=e.px[l+1],f=e.px[l+2],p=(.3*u+.59*d+.11*f)/255;return d-Math.max(u,f)<6?0:p<.3?1:p<.4?.35:.04}ajuste(){try{return{dx:0,dz:0,giro:0,...JSON.parse(localStorage.getItem(`bim5d-entorno-ajuste-`+this._pid())||`null`)||{}}}catch{return{dx:0,dz:0,giro:0}}}guardarAjuste(e){try{localStorage.setItem(`bim5d-entorno-ajuste-`+this._pid(),JSON.stringify(e))}catch{}}_quitarObjetos(){let e=this.v;this.mascara?.textura.dispose(),this.mascara=null,this.real=null,this.usaSat=!1,this.grupo&&=(e.scene.remove(this.grupo),this.grupo.traverse(e=>{e.geometry?.dispose?.();let t=e.material;(Array.isArray(t)?t:t?[t]:[]).forEach(e=>e.dispose())}),null),this.terreno=this.agua=this.arboles=this.matTerreno=null}_enlazarMosaicos(){let e=this.v,t=e.model?.tiles;if(!t||this._h1)return;let n=e=>{let t=Array.isArray(e.material)?e.material[0]:e.material;this.luz.sombrasOn&&t&&t.isMeshLambertMaterial&&(e.castShadow=!0,e.receiveShadow=!0,this.marcados.add(e),(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>{e.needsUpdate=!0}))};this._marcar=n;for(let e of t.values())n(e);this._h1=({value:e})=>{n(e),this._pedirSombra()},t.onItemSet.add(this._h1),this._h2=()=>this._pedirSombra(),e.model.onViewUpdated.add(this._h2)}_desenlazarMosaicos(){let e=this.v;try{e.model?.tiles?.onItemSet.remove(this._h1),e.model?.onViewUpdated.remove(this._h2)}catch{}this._h1=this._h2=null,clearTimeout(this._ts);for(let e of this.marcados)e.castShadow=!1,e.receiveShadow=!1,(Array.isArray(e.material)?e.material:[e.material]).forEach(e=>{e&&(e.needsUpdate=!0)});this.marcados.clear()}_pedirSombra(){clearTimeout(this._ts),this._ts=setTimeout(()=>this.luz.refrescarSombras(),250)}setSombras(e){if(this.cfg.sombras=e,this.luz.setSombras(e),this.activo){for(let e of this.marcados)e.castShadow=!1,e.receiveShadow=!1;if(this.marcados.clear(),this._marcar&&this.v.model)for(let e of this.v.model.tiles.values())this._marcar(e)}for(let t of this.grupo?[this.arboles]:[])t&&(t.castShadow=e);this.v._dirty=!0}_animacion(){cancelAnimationFrame(this._raf),this._raf=0;let e=this.perfil.aguaFps;if(!this.agua||!e||!this.cfg.aguaMovimiento)return;let t=performance.now(),n=1e3/e,r=e=>{if(!this.agua||!this.cfg.aguaMovimiento){this._raf=0;return}this._raf=requestAnimationFrame(r);let i=e-t;i<n||(t=e,this.agua.animar(Math.min(i,1e3)/1e3),this.v._dirty=!0)};this._raf=requestAnimationFrame(r)}setAguaMovimiento(e){this.cfg.aguaMovimiento=e,this._animacion()}setSubestructura(e){this.cfg.subestructura=e,this.matTerreno&&(K(this.matTerreno,e,this.rectas),this.v._dirty=!0)}setSol(e,t){this.cfg.solElevacion=e,this.cfg.solAzimut=t,this.luz.setSol(e,t)}vaciar(){let e=this.v;cancelAnimationFrame(this._raf),this._raf=0,this._desenlazarMosaicos(),this._sat?.d&&(this._sat.d.tex.dispose(),this._sat=null),this._hi&&=(this._hi.d.dispose(),null),this._or&&=(this._or.d.dispose(),null),this._quitarObjetos(),this.luz.restaurar(),this._grid!==void 0&&(e.grid.visible=this._grid,this._grid=void 0),this.activo=!1,e._dirty=!0;try{e.fragments?.update(!0)}catch{}}},ge=`
#entPil{position:fixed;right:14px;bottom:132px;z-index:30;width:236px;font:12px/1.35 system-ui,sans-serif;color:var(--tx,#eef2fa);background:var(--glass,rgba(11,20,36,.88));border:1px solid var(--line2,#2a3a5c);border-radius:12px;backdrop-filter:blur(10px);box-shadow:0 8px 28px rgba(0,0,0,.35)}
#entPil .eh{display:flex;align-items:center;gap:8px;padding:8px 10px;cursor:pointer;user-select:none}#entPil .eh b{flex:1;font-weight:650}#entPil .eh small{opacity:.6;font-weight:400}
#entPil .eb{padding:2px 10px 10px;display:grid;gap:7px}#entPil .eb[hidden]{display:none}
#entPil label{display:flex;align-items:center;gap:8px}#entPil .fila{display:grid;grid-template-columns:92px 1fr;gap:8px;align-items:center}
#entPil input[type=range]{width:100%;accent-color:var(--acc,#6ea0f5)}#entPil select{width:100%;background:var(--input,#0b1424);color:inherit;border:1px solid var(--line2,#2a3a5c);border-radius:6px;padding:3px 4px}
#entPil .info{opacity:.65;font-size:11px}#entPil .aviso{color:var(--amber,#d9a441);font-size:11px}
`;function _e(e){let t=new he(e);window.__entorno=t;let n=document.createElement(`style`);n.textContent=ge,document.head.appendChild(n);let r=document.createElement(`div`);r.id=`entPil`,r.innerHTML=`<div class="eh"><b>🌄 Entorno 3D</b><label title="Encender o apagar el entorno"><input type="checkbox" id="entOn" checked></label></div>
    <div class="eb" id="entB">
      <div class="fila"><span>Relieve</span><input type="range" id="entRel" min="0" max="2" step="0.1" value="${O.relieve}"></div>
      <div class="fila" title="Altura del terraplén de acceso junto a los estribos: 100 % llega al nivel del tablero; en la obra real el terreno queda a media altura del panel del MSR"><span>Terraplén</span><input type="range" id="entTer" min="0" max="100" step="5" value="${Math.round(O.terraplen*100)}"></div>
      <div class="fila"><span>Subestructura</span><select id="entSub"><option value="recorte">Hueco en el terreno</option><option value="translucido">Terreno translúcido</option><option value="solido">Terreno sólido</option></select></div>
      <label title="Relieve del MDT global y formas de OpenStreetMap (río, caminos, edificios) de la zona"><input type="checkbox" id="entReal" ${O.real?`checked`:``}> Terreno real <small id="entRealEst" style="opacity:.6"></small></label>
      <label title="Color real de la zona: imagen Sentinel-2 de 10 m (Copernicus, libre), pegada al terreno. Pesa menos de 1 MB"><input type="checkbox" id="entSat" ${O.satelite?`checked`:``}> Imagen satelital <small id="entSatEst" style="opacity:.6"></small></label>
      <label title="Ortofoto del vuelo de dron del proyecto (sept. 2025): 3 capas de hasta ~10 cm por píxel, guardadas en el proyecto. Funciona sin internet"><input type="checkbox" id="entOr" ${O.orto?`checked`:``}> Ortofoto de dron <small id="entOrEst" style="opacity:.6"></small></label>
      <label title="Foto satelital (~0.6 m por píxel) alrededor del puente, tomada en vivo de Esri World Imagery: no se guarda en el proyecto y necesita internet. Rellena lo que la ortofoto no cubre. Sin conexión queda la de Sentinel-2"><input type="checkbox" id="entHi" ${O.nitida?`checked`:``}> Imagen Esri (en vivo) <small id="entHiEst" style="opacity:.6"></small></label>
      <details id="entCal" hidden><summary style="cursor:pointer;opacity:.85">Alinear con el puente</summary>
        <div class="fila"><span>Este ↔ Oeste</span><input type="range" id="entDx" min="-200" max="200" step="1" value="0"></div>
        <div class="fila"><span>Norte ↔ Sur</span><input type="range" id="entDz" min="-200" max="200" step="1" value="0"></div>
        <div class="fila"><span>Girar (°)</span><input type="range" id="entGi" min="-30" max="30" step="0.5" value="0"></div>
        <div class="info" id="entCalTxt">Mueve el mapa hasta que el río pase bajo el puente.</div>
        <button type="button" id="entCalRes" style="margin-top:4px">Restablecer alineación</button></details>
      <label><input type="checkbox" id="entAgua" ${O.agua?`checked`:``}> Río animado</label>
      <label><input type="checkbox" id="entMov" ${O.aguaMovimiento?`checked`:``}> Corriente en movimiento</label>
      <label><input type="checkbox" id="entSom" ${O.sombras?`checked`:``}> Sombras</label>
      <label><input type="checkbox" id="entVeg" ${O.vegetacion?`checked`:``}> Árboles</label>
      <div class="fila"><span>Sol · altura</span><input type="range" id="entEl" min="8" max="80" step="1" value="${O.solElevacion}"></div>
      <div class="fila"><span>Sol · giro</span><input type="range" id="entAz" min="0" max="360" step="1" value="${O.solAzimut}"></div>
      <div class="info" id="entInfo">Cargando el modelo…</div>
      <div class="info" id="entAtr" style="font-size:10px;opacity:.5"></div>
    </div>`,document.body.appendChild(r);let i=e=>r.querySelector(e);if(!t.perfil.sombras){t.cfg.sombras=!1;let e=i(`#entSom`);e.checked=!1,e.disabled=!0,e.parentElement.title=`No disponible en calidad `+t.perfil.nombre,e.parentElement.style.opacity=`.5`}if(!t.perfil.arboles){t.cfg.vegetacion=!1;let e=i(`#entVeg`);e.checked=!1,e.disabled=!0,e.parentElement.title=`No disponible en calidad `+t.perfil.nombre,e.parentElement.style.opacity=`.5`}let a=(e,t)=>{let n=i(`#entInfo`);n.textContent=e,n.className=t?`aviso`:`info`},o=()=>a(t.activo?t.info:`Apagado: el visor está como siempre.`),s=null,c=()=>{clearTimeout(s),s=setTimeout(async()=>{i(`#entOn`).checked&&(await t.reconstruir(),o())},180)};i(`.eh`).addEventListener(`click`,e=>{if(e.target.closest(`label`))return;let t=i(`#entB`);t.hidden=!t.hidden}),i(`#entOn`).addEventListener(`change`,async e=>{e.target.checked?(a(`Preparando el entorno…`),await g()):(t.vaciar(),o())}),i(`#entRel`).addEventListener(`input`,e=>{t.cfg.relieve=+e.target.value,c()}),i(`#entTer`).addEventListener(`input`,e=>{t.cfg.terraplen=e.target.value/100,c()}),i(`#entSub`).addEventListener(`change`,e=>t.setSubestructura(e.target.value)),i(`#entAgua`).addEventListener(`change`,e=>{t.cfg.agua=e.target.checked,c()}),i(`#entMov`).addEventListener(`change`,e=>t.setAguaMovimiento(e.target.checked)),i(`#entReal`).addEventListener(`change`,e=>{t.cfg.real=e.target.checked,c()}),i(`#entSat`).addEventListener(`change`,e=>{t.cfg.satelite=e.target.checked,c()});let l=e=>{t.cfg.agua=!e,i(`#entAgua`).checked=!e};t.perfil.vivo&&O.nitida&&l(!0),i(`#entHi`).addEventListener(`change`,e=>{l(e.target.checked),t.setNitida(e.target.checked),c(),d(t._hi?.d)}),i(`#entOr`).addEventListener(`change`,e=>{t.setOrto(e.target.checked),u(t._or?.d)});let u=e=>{let n=i(`#entOr`),r=i(`#entOrEst`);if(!t.perfil.orto){n.disabled=!0,n.checked=!1,r.textContent=`(no disponible en calidad `+t.perfil.nombre+`)`;return}if(!t.usaOrtoDisponible){n.disabled=!0,n.checked=!1,r.textContent=t.tieneDatos?`(sin ortofoto de este frente)`:``;return}if(n.disabled=!1,!n.checked||!e){r.textContent=``;return}let a=e.capas.filter(e=>e.tex).length;r.textContent=e.estado===`cargando`?`· capa ${a}/${e.capas.length}`:e.estado===`error`?`· no se pudo cargar`:`· ${a}/${e.capas.length} capas`};t.alOrto=u;let d=e=>{let n=i(`#entHiEst`),r=i(`#entHi`);if(!t.perfil.vivo){r.disabled=!0,r.checked=!1,n.textContent=`(no disponible en calidad `+t.perfil.nombre+`)`;return}if(!r.checked||!e){n.textContent=``;return}n.textContent=e.estado===`cargando`?`· bajando ${e.ok}/${e.total}`:e.estado===`sin conexión`?`· sin conexión (queda Sentinel-2)`:`· ${e.ok}/${e.total} · ${t.atribucion.split(` · `).pop()}`};t.alVivo=d;let f=()=>({dx:+i(`#entDx`).value,dz:+i(`#entDz`).value,giro:+i(`#entGi`).value}),p=()=>{let e=f();i(`#entCalTxt`).textContent=`Desplazado ${e.dx} m E, ${e.dz} m S · girado ${e.giro}°`},m=e=>{i(`#entDx`).value=e.dx,i(`#entDz`).value=e.dz,i(`#entGi`).value=e.giro,p()};for(let e of[`#entDx`,`#entDz`,`#entGi`])i(e).addEventListener(`input`,()=>{t.guardarAjuste(f()),p(),c()});if(i(`#entCalRes`).addEventListener(`click`,()=>{m({dx:0,dz:0,giro:0}),t.guardarAjuste({dx:0,dz:0,giro:0}),c()}),t.alActivar=()=>{let e=i(`#entReal`),n=i(`#entCal`),r=i(`#entRealEst`);if(!t.tieneDatos){e.disabled=!0,e.checked=!1,r.textContent=`(sin datos de este frente)`,n.hidden=!0;return}e.disabled=!1,r.textContent=t.usaReal?`© OpenStreetMap · MDT`:``,n.hidden=!t.usaReal,n.hidden||m(t.ajuste());let a=i(`#entSat`),o=i(`#entSatEst`);!t.usaSatDisponible||!t.perfil.imagen?(a.disabled=!0,t.perfil.imagen||(a.checked=!1),o.textContent=t.perfil.imagen?`(sin imagen de este frente)`:`(no disponible en calidad `+t.perfil.nombre+`)`):(a.disabled=!1,o.textContent=t.usaSat?`· Sentinel-2 10 m`:``),i(`#entHi`).checked=!!t.cfg.nitida&&!!t.perfil.vivo,u(t._or?.d),d(t._hi?.d),i(`#entAtr`).textContent=[t.usaReal?`© OpenStreetMap`:``,t.atribucion].filter(Boolean).join(` · `)},!t.perfil.aguaFps){t.cfg.aguaMovimiento=!1;let e=i(`#entMov`);e.checked=!1,e.disabled=!0,e.parentElement.title=`No disponible en calidad `+t.perfil.nombre,e.parentElement.style.opacity=`.5`}i(`#entVeg`).addEventListener(`change`,e=>{t.cfg.vegetacion=e.target.checked,c()}),i(`#entSom`).addEventListener(`change`,e=>{t.setSombras(e.target.checked)});let h=()=>t.setSol(+i(`#entEl`).value,+i(`#entAz`).value);i(`#entEl`).addEventListener(`input`,h),i(`#entAz`).addEventListener(`input`,h);async function g(){try{await t.activar()?o():a(`Todavía no hay un modelo con eje para armar el entorno.`,!0)}catch(e){console.error(`Entorno piloto:`,e),t.vaciar(),a(`No se pudo armar el entorno: `+(e.message||e),!0),i(`#entOn`).checked=!1}}let _=e.setElementMap.bind(e);e.setElementMap=e=>{_(e),i(`#entOn`).checked&&y()};let v=e.unload.bind(e);e.unload=async()=>(t.vaciar(),v());async function y(){for(let t=0;t<40&&!e.homeBox;t++)await new Promise(e=>setTimeout(e,150));await new Promise(e=>setTimeout(e,200)),await g()}return e.model&&e.map&&y(),t}export{_e as iniciar};