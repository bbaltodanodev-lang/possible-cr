import * as THREE from "three";

const quieto = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ---------- escena 3D del hero ----------
// calidad segun el equipo: en celulares y compus lentas se baja para que vaya fluido
const movil = window.matchMedia("(max-width: 980px)").matches;
const lento = (navigator.hardwareConcurrency || 4) <= 4 || (navigator.deviceMemory || 8) <= 4;
const detalle = movil || lento ? 32 : 56;

const canvas = document.getElementById("escena");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: !movil, alpha: true, powerPreference: "high-performance" });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, movil ? 1.5 : 2));
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
camera.position.set(0, 0, 7);

// esfera que se deforma con los colores del logo
const blobMat = new THREE.ShaderMaterial({
  uniforms: { uTime: { value: 0 } },
  vertexShader: `
    uniform float uTime;
    varying vec3 vN;
    varying vec3 vPos;
    varying float vD;
    // ruido simple con senos, suficiente para una forma organica
    float n(vec3 p) {
      return sin(p.x * 1.7 + uTime * .9) * sin(p.y * 1.9 + uTime * .7) * sin(p.z * 1.5 + uTime * .8);
    }
    void main() {
      float d = n(position * 1.3) * .32 + n(position * 2.6 + 3.0) * .12;
      vec3 p = position + normal * d;
      vD = d;
      vN = normalize(normalMatrix * normal);
      vPos = p;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
    }`,
  fragmentShader: `
    uniform float uTime;
    varying vec3 vN;
    varying vec3 vPos;
    varying float vD;
    vec3 paleta(float t) {
      vec3 c1 = vec3(0.961, 0.776, 0.310); // dorado
      vec3 c2 = vec3(0.894, 0.427, 0.200); // naranja
      vec3 c3 = vec3(0.769, 0.271, 0.467); // magenta
      vec3 c4 = vec3(0.537, 0.141, 0.698); // morado
      vec3 c5 = vec3(0.286, 0.216, 0.808); // indigo
      t = fract(t);
      if (t < .25) return mix(c1, c2, t / .25);
      if (t < .5)  return mix(c2, c3, (t - .25) / .25);
      if (t < .75) return mix(c3, c4, (t - .5) / .25);
      return mix(c4, c5, (t - .75) / .25);
    }
    void main() {
      float fres = pow(1.0 - abs(dot(normalize(vN), vec3(0., 0., 1.))), 2.2);
      float t = vPos.y * .22 + vPos.x * .12 + vD * 1.4 + uTime * .06;
      vec3 col = paleta(t);
      col += fres * vec3(1.0, .85, .6) * .55;
      col *= .78 + .35 * dot(normalize(vN), normalize(vec3(.4, .6, 1.)));
      gl_FragColor = vec4(col, 1.0);
    }`,
});
const blob = new THREE.Mesh(new THREE.IcosahedronGeometry(1.75, detalle), blobMat);
scene.add(blob);

// anillos alrededor
const anillos = new THREE.Group();
[[2.6, 0x8924B2, 0.5], [3.05, 0xF4AA21, 0.35], [3.5, 0x4937CE, 0.25]].forEach(([r, c, o], i) => {
  const m = new THREE.Mesh(
    new THREE.TorusGeometry(r, 0.008, 8, 220),
    new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: o })
  );
  m.rotation.x = Math.PI / 2.4 + i * 0.25;
  m.rotation.y = i * 0.5;
  anillos.add(m);
});
scene.add(anillos);

// particulas de fondo
const N = movil ? 450 : 900;
const pos = new Float32Array(N * 3);
const cols = new Float32Array(N * 3);
const tonos = [new THREE.Color(0xF5C64F), new THREE.Color(0xE46D33), new THREE.Color(0xC44577), new THREE.Color(0x8924B2), new THREE.Color(0x4937CE)];
for (let i = 0; i < N; i++) {
  const r = 4 + Math.random() * 9;
  const th = Math.random() * Math.PI * 2;
  const ph = Math.acos(2 * Math.random() - 1);
  pos.set([r * Math.sin(ph) * Math.cos(th), r * Math.sin(ph) * Math.sin(th), r * Math.cos(ph) - 4], i * 3);
  const c = tonos[i % tonos.length];
  cols.set([c.r, c.g, c.b], i * 3);
}
const pGeo = new THREE.BufferGeometry();
pGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
pGeo.setAttribute("color", new THREE.BufferAttribute(cols, 3));
const puntos = new THREE.Points(pGeo, new THREE.PointsMaterial({ size: 0.035, vertexColors: true, transparent: true, opacity: 0.85 }));
scene.add(puntos);

// en pantallas anchas la esfera va a la derecha para no tapar el texto
function acomodar() {
  const w = canvas.clientWidth, h = canvas.clientHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  const ancho = w > 980;
  const x = ancho ? 2.4 : 0;
  // en el celular queda arriba y mas chica para que se lea el texto
  const y = ancho ? 0 : 2.6;
  const s = ancho ? 1 : 0.55;
  blob.position.set(x, y, -1.5 * (ancho ? 0 : 1));
  anillos.position.set(x, y, -1.5 * (ancho ? 0 : 1));
  blob.scale.setScalar(s);
  anillos.scale.setScalar(s);
}
window.addEventListener("resize", acomodar);
acomodar();

// el mouse mueve un poco la escena
const mouse = { x: 0, y: 0 };
window.addEventListener("pointermove", (e) => {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
});

const reloj = new THREE.Clock();
let visible = true;
let enPantalla = !document.hidden;
new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(canvas);
// si cambian de pestaña no se gasta bateria dibujando
document.addEventListener("visibilitychange", () => {
  enPantalla = !document.hidden;
  if (enPantalla && !quieto) { reloj.start(); requestAnimationFrame(frame); }
});

function frame() {
  if (!enPantalla) return;
  const t = reloj.getElapsedTime();
  if (visible) {
    blobMat.uniforms.uTime.value = t;
    blob.rotation.y = t * 0.12 + mouse.x * 0.3;
    blob.rotation.x = mouse.y * 0.2;
    anillos.rotation.z = t * 0.08;
    anillos.rotation.x = mouse.y * 0.15;
    puntos.rotation.y = t * 0.015 + mouse.x * 0.05;
    camera.position.x += (mouse.x * 0.35 - camera.position.x) * 0.04;
    camera.position.y += (-mouse.y * 0.25 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
  }
  if (!quieto) requestAnimationFrame(frame);
}
frame();
// el 3D aparece suave cuando ya esta dibujado
// (con setTimeout y no requestAnimationFrame para que aparezca aunque la pestaña cargue en segundo plano)
setTimeout(() => canvas.classList.add("listo"), 60);

// ---------- interfaz ----------
const nav = document.getElementById("nav");
const alScroll = () => nav.classList.toggle("is-solid", window.scrollY > 30);
window.addEventListener("scroll", alScroll, { passive: true });
alScroll();

// menu del celular
const toggle = document.querySelector(".nav__toggle");
const menu = document.getElementById("menu-movil");
toggle.addEventListener("click", () => {
  const abierto = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!abierto));
  menu.hidden = abierto;
});
menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
  menu.hidden = true;
  toggle.setAttribute("aria-expanded", "false");
}));

// las tarjetas se inclinan en 3D con el mouse
if (!quieto && window.matchMedia("(hover: hover)").matches) {
  document.querySelectorAll(".tilt").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
    });
    card.addEventListener("pointerleave", () => { card.style.transform = ""; });
  });
}

document.getElementById("anio").textContent = new Date().getFullYear();
