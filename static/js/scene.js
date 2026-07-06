/* Kardashev Systems — hero scene
   A minimal orbital structure: a particle sphere with a faint geodesic
   frame, three orbital rings, and a distant halo. Nord-colored, theme-aware. */

import * as THREE from "three";

const container = document.getElementById("hero-scene");
if (container) init(container);

function init(container) {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ------------------------------ Palettes ------------------------------ */

  const PALETTES = {
    dark: {
      points: ["#88c0d0", "#8fbcbb", "#81a1c1", "#d8dee9"],
      weights: [0.4, 0.25, 0.25, 0.1],
      frame: "#88c0d0",
      frameOpacity: 0.14,
      ring: "#81a1c1",
      ringOpacity: 0.75,
      halo: "#4c566a",
      haloOpacity: 0.55,
      pointOpacity: 0.95,
      blending: THREE.AdditiveBlending
    },
    light: {
      points: ["#5e81ac", "#81a1c1", "#6b7a94", "#8fbcbb"],
      weights: [0.4, 0.3, 0.2, 0.1],
      frame: "#5e81ac",
      frameOpacity: 0.2,
      ring: "#5e81ac",
      ringOpacity: 0.6,
      halo: "#81a1c1",
      haloOpacity: 0.5,
      pointOpacity: 0.85,
      blending: THREE.NormalBlending
    }
  };

  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") === "light"
      ? "light"
      : "dark";
  }

  /* ------------------------------ Renderer ------------------------------ */

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 50);
  camera.position.set(0, 0, 4.4);

  /* Soft round sprite for points */
  const dotTexture = makeDotTexture();

  function makeDotTexture() {
    const size = 64;
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext("2d");
    const g = ctx.createRadialGradient(
      size / 2, size / 2, 0,
      size / 2, size / 2, size / 2
    );
    g.addColorStop(0, "rgba(255,255,255,1)");
    g.addColorStop(0.4, "rgba(255,255,255,0.85)");
    g.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, size, size);
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  /* ------------------------------ Geometry ------------------------------ */

  const pivot = new THREE.Group(); // mouse parallax
  const world = new THREE.Group(); // slow auto-rotation
  pivot.add(world);
  scene.add(pivot);

  // Main sphere: Fibonacci-distributed particles
  const SPHERE_COUNT = 1500;
  const sphereGeo = new THREE.BufferGeometry();
  const spherePos = new Float32Array(SPHERE_COUNT * 3);
  const sphereColorIdx = new Uint8Array(SPHERE_COUNT);
  const GOLDEN = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < SPHERE_COUNT; i++) {
    const y = 1 - (i / (SPHERE_COUNT - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = GOLDEN * i;
    spherePos[i * 3] = Math.cos(theta) * r;
    spherePos[i * 3 + 1] = y;
    spherePos[i * 3 + 2] = Math.sin(theta) * r;
    sphereColorIdx[i] = pickWeighted(i);
  }

  function pickWeighted(seed) {
    // deterministic pseudo-random pick so theme swaps keep the same pattern
    const x = Math.abs(Math.sin(seed * 12.9898) * 43758.5453) % 1;
    const w = PALETTES.dark.weights;
    let acc = 0;
    for (let k = 0; k < w.length; k++) {
      acc += w[k];
      if (x < acc) return k;
    }
    return 0;
  }

  sphereGeo.setAttribute("position", new THREE.BufferAttribute(spherePos, 3));
  sphereGeo.setAttribute(
    "color",
    new THREE.BufferAttribute(new Float32Array(SPHERE_COUNT * 3), 3)
  );

  const sphereMat = new THREE.PointsMaterial({
    size: 0.065,
    map: dotTexture,
    vertexColors: true,
    transparent: true,
    depthWrite: false,
    sizeAttenuation: true
  });
  world.add(new THREE.Points(sphereGeo, sphereMat));

  // Geodesic frame
  const frameMat = new THREE.LineBasicMaterial({
    transparent: true,
    depthWrite: false
  });
  world.add(
    new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1, 1)),
      frameMat
    )
  );

  // Orbital rings
  const RINGS = [
    { radius: 1.5, tilt: [1.1, 0, 0.5], speed: 0.1, count: 220 },
    { radius: 1.8, tilt: [-0.9, 0.4, -0.3], speed: -0.065, count: 260 },
    { radius: 2.12, tilt: [0.5, -0.3, 1.2], speed: 0.045, count: 300 }
  ];

  const ringMat = new THREE.PointsMaterial({
    size: 0.04,
    map: dotTexture,
    transparent: true,
    depthWrite: false,
    sizeAttenuation: true
  });

  const ringSpinners = [];

  RINGS.forEach(function (spec, ringIdx) {
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(spec.count * 3);
    for (let i = 0; i < spec.count; i++) {
      const a = (i / spec.count) * Math.PI * 2;
      const jitter = Math.sin(i * 7.13 + ringIdx) * 0.015;
      const r = spec.radius + jitter;
      pos[i * 3] = Math.cos(a) * r;
      pos[i * 3 + 1] = Math.sin(i * 3.7) * 0.012;
      pos[i * 3 + 2] = Math.sin(a) * r;
    }
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));

    const ring = new THREE.Points(geo, ringMat);
    const tiltGroup = new THREE.Group();
    tiltGroup.rotation.set(spec.tilt[0], spec.tilt[1], spec.tilt[2]);
    tiltGroup.add(ring);
    world.add(tiltGroup);
    ringSpinners.push({ mesh: ring, speed: spec.speed });
  });

  // Distant halo
  const HALO_COUNT = 320;
  const haloGeo = new THREE.BufferGeometry();
  const haloPos = new Float32Array(HALO_COUNT * 3);
  for (let i = 0; i < HALO_COUNT; i++) {
    const u = Math.abs(Math.sin(i * 12.9898) * 43758.5453) % 1;
    const v = Math.abs(Math.sin(i * 78.233) * 12543.2571) % 1;
    const w = Math.abs(Math.sin(i * 3.1415) * 26251.4331) % 1;
    const radius = 2.6 + u * 1.4;
    const phi = Math.acos(2 * v - 1);
    const theta = w * Math.PI * 2;
    haloPos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    haloPos[i * 3 + 1] = radius * Math.cos(phi);
    haloPos[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
  }
  haloGeo.setAttribute("position", new THREE.BufferAttribute(haloPos, 3));

  const haloMat = new THREE.PointsMaterial({
    size: 0.036,
    map: dotTexture,
    transparent: true,
    depthWrite: false,
    sizeAttenuation: true
  });
  world.add(new THREE.Points(haloGeo, haloMat));

  /* ------------------------------- Theme -------------------------------- */

  function applyPalette(theme) {
    const p = PALETTES[theme];
    const colors = sphereGeo.getAttribute("color");
    const parsed = p.points.map(function (hex) {
      return new THREE.Color(hex);
    });
    for (let i = 0; i < SPHERE_COUNT; i++) {
      const c = parsed[sphereColorIdx[i]];
      colors.setXYZ(i, c.r, c.g, c.b);
    }
    colors.needsUpdate = true;

    sphereMat.opacity = p.pointOpacity;
    sphereMat.blending = p.blending;
    frameMat.color.set(p.frame);
    frameMat.opacity = p.frameOpacity;
    ringMat.color.set(p.ring);
    ringMat.opacity = p.ringOpacity;
    ringMat.blending = p.blending;
    haloMat.color.set(p.halo);
    haloMat.opacity = p.haloOpacity;
    haloMat.blending = p.blending;

    sphereMat.needsUpdate = true;
    frameMat.needsUpdate = true;
    ringMat.needsUpdate = true;
    haloMat.needsUpdate = true;
  }

  applyPalette(currentTheme());

  window.addEventListener("themechange", function (event) {
    applyPalette(event.detail.theme);
    if (reducedMotion) renderer.render(scene, camera);
  });

  /* ------------------------------- Layout ------------------------------- */

  let baseScale = 1;

  function layout() {
    const w = container.clientWidth || 1;
    const h = container.clientHeight || 1;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();

    const aspect = w / h;
    if (aspect >= 1.05) {
      // desktop: structure sits to the right of the headline
      world.position.set(Math.min(aspect * 0.62, 1.6), 0, 0);
      baseScale = 1;
    } else {
      // portrait: centered behind content, raised and smaller
      world.position.set(0, 0.55, 0);
      baseScale = 0.72;
    }
    world.scale.setScalar(baseScale);
  }

  layout();
  window.addEventListener("resize", function () {
    layout();
    if (reducedMotion) renderer.render(scene, camera);
  });

  /* ------------------------------ Parallax ------------------------------ */

  const target = { x: 0, y: 0 };
  const canHover = window.matchMedia("(hover: hover)").matches;

  if (canHover && !reducedMotion) {
    window.addEventListener(
      "pointermove",
      function (event) {
        target.x = (event.clientX / window.innerWidth) * 2 - 1;
        target.y = (event.clientY / window.innerHeight) * 2 - 1;
      },
      { passive: true }
    );
  }

  /* ------------------------------ Animation ------------------------------ */

  world.rotation.x = 0.16;

  if (reducedMotion) {
    world.rotation.y = 0.6;
    renderer.render(scene, camera);
    return;
  }

  const clock = new THREE.Clock();
  let rafId = 0;

  function frame() {
    rafId = requestAnimationFrame(frame);
    const dt = Math.min(clock.getDelta(), 0.05);
    const t = clock.elapsedTime;

    world.rotation.y += dt * 0.07;
    ringSpinners.forEach(function (r) {
      r.mesh.rotation.y += dt * r.speed * 6;
    });

    // breathing
    world.scale.setScalar(baseScale * (1 + Math.sin(t * 0.45) * 0.012));

    // parallax easing
    pivot.rotation.y += (target.x * 0.22 - pivot.rotation.y) * 0.04;
    pivot.rotation.x += (target.y * 0.14 - pivot.rotation.x) * 0.04;

    renderer.render(scene, camera);
  }

  function start() {
    if (!rafId) {
      clock.getDelta();
      frame();
    }
  }

  function stop() {
    cancelAnimationFrame(rafId);
    rafId = 0;
  }

  document.addEventListener("visibilitychange", function () {
    document.hidden ? stop() : start();
  });

  start();
}
