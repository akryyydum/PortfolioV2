import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

/* ─────────────────────────────────────────────
   Contact data
───────────────────────────────────────────── */
const contactLinks = [
  {
    id: "email",
    label: "Email",
    value: "lanceandres12.la@gmail.com",
    href: "mailto:lanceandres12.la@gmail.com",
    accent: "#6366f1",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <polyline points="2,4 12,13 22,4" />
      </svg>
    ),
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/akryyydum",
    href: "https://github.com/akryyydum",
    accent: "#06b6d4",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/lance-krystian/",
    href: "https://www.linkedin.com/in/lance-krystian/",
    accent: "#8b5cf6",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    id: "twitter",
    label: "Twitter / X",
    value: "@lanschristiannn",
    href: "https://twitter.com/lanschristiannn",
    accent: "#ec4899",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63L18.243 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

/* ─────────────────────────────────────────────
   Draw screen texture onto a 2D canvas
───────────────────────────────────────────── */
function drawScreenTexture(texCanvas) {
  const ctx = texCanvas.getContext("2d");
  const W = texCanvas.width;
  const H = texCanvas.height;

  // Background
  const bg = ctx.createLinearGradient(0, 0, 0, H);
  bg.addColorStop(0, "#0d0d1c");
  bg.addColorStop(1, "#080810");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  // Scanlines
  for (let y = 0; y < H; y += 4) {
    ctx.fillStyle = "rgba(255,255,255,0.012)";
    ctx.fillRect(0, y + 2, W, 1);
  }

  // Top glow
  const topGlow = ctx.createRadialGradient(W / 2, 0, 0, W / 2, 0, W * 0.7);
  topGlow.addColorStop(0, "rgba(99,102,241,0.18)");
  topGlow.addColorStop(1, "rgba(99,102,241,0)");
  ctx.fillStyle = topGlow;
  ctx.fillRect(0, 0, W, H);

  // Window chrome bar
  ctx.fillStyle = "rgba(255,255,255,0.03)";
  ctx.fillRect(0, 0, W, 48);
  ctx.strokeStyle = "rgba(255,255,255,0.07)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, 48);
  ctx.lineTo(W, 48);
  ctx.stroke();

  // Traffic dots
  ["#ff5f57", "#febc2e", "#28c840"].forEach((c, i) => {
    ctx.fillStyle = c;
    ctx.beginPath();
    ctx.arc(24 + i * 24, 24, 8, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.fillStyle = "rgba(255,255,255,0.18)";
  ctx.font = "500 14px 'DM Mono', monospace";
  ctx.textAlign = "center";
  ctx.fillText("contact.view", W / 2, 30);

  // Subheading
  ctx.textAlign = "left";
  ctx.fillStyle = "rgba(99,102,241,0.85)";
  ctx.font = "500 14px 'DM Mono', monospace";
  ctx.fillText("// get in touch", 48, 96);

  // Main heading
  ctx.fillStyle = "rgba(255,255,255,0.95)";
  ctx.font = "bold 52px 'DM Serif Display', serif";
  ctx.fillText("Let's Build", 48, 168);
  ctx.fillText("Something", 48, 228);

  ctx.fillStyle = "rgba(139,92,246,0.92)";
  ctx.font = "italic bold 52px 'DM Serif Display', serif";
  ctx.fillText("Together.", 48, 288);

  // Helper: rounded rect path
  const rr = (x, y, w, h, r) => {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
  };

  // Contact cards grid
  const cards = [
    { label: "Email",       value: "hello@yourname.dev",          accent: "#6366f1" },
    { label: "GitHub",      value: "github.com/yourname",         accent: "#06b6d4" },
    { label: "LinkedIn",    value: "linkedin.com/in/yourname",     accent: "#8b5cf6" },
    { label: "Twitter / X", value: "@yourhandle",                  accent: "#ec4899" },
  ];
  const cols = 2;
  const cardW = (W - 96 - 16) / cols;
  const cardH = 82;
  const startY = 320;

  cards.forEach((card, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const cx = 48 + col * (cardW + 16);
    const cy = startY + row * (cardH + 12);

    // Card bg
    ctx.fillStyle = "rgba(255,255,255,0.04)";
    ctx.strokeStyle = "rgba(255,255,255,0.09)";
    ctx.lineWidth = 1;
    rr(cx, cy, cardW, cardH, 12);
    ctx.fill();
    ctx.stroke();

    // Left accent strip
    ctx.fillStyle = card.accent;
    rr(cx, cy + 16, 3, cardH - 32, 2);
    ctx.fill();

    // Label
    ctx.fillStyle = card.accent;
    ctx.font = "500 12px 'DM Mono', monospace";
    ctx.textAlign = "left";
    ctx.fillText(card.label.toUpperCase(), cx + 20, cy + cardH / 2 - 6);

    // Value
    ctx.fillStyle = "rgba(255,255,255,0.58)";
    ctx.font = "400 13px 'DM Mono', monospace";
    ctx.fillText(card.value, cx + 20, cy + cardH / 2 + 18);
  });

  // Divider
  ctx.strokeStyle = "rgba(255,255,255,0.06)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(48, H - 58);
  ctx.lineTo(W - 48, H - 58);
  ctx.stroke();

  // Availability
  ctx.fillStyle = "rgba(16,185,129,0.9)";
  ctx.beginPath();
  ctx.arc(52, H - 38, 6, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "rgba(255,255,255,0.25)";
  ctx.font = "400 13px 'DM Mono', monospace";
  ctx.textAlign = "left";
  ctx.fillText("Available for freelance & full-time roles", 68, H - 34);
}

/* ─────────────────────────────────────────────
   Three.js Monitor Canvas component
───────────────────────────────────────────── */
function MonitorCanvas({ scrollProgress }) {
  const canvasRef = useRef(null);
  const scrollRef = useRef(scrollProgress);
  useEffect(() => { scrollRef.current = scrollProgress; }, [scrollProgress]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    /* ── Renderer ── */
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    /* ── Scene ── */
    const scene = new THREE.Scene();

    /* ── Camera ── */
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.set(0, 0.3, 5.8);

    /* ── Lights ── */
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));

    const key = new THREE.DirectionalLight(0xa0a8ff, 2.5);
    key.position.set(4, 6, 5);
    key.castShadow = true;
    scene.add(key);

    const rim = new THREE.DirectionalLight(0x6366f1, 1.8);
    rim.position.set(-5, 2, -3);
    scene.add(rim);

    const fill = new THREE.PointLight(0x06b6d4, 1.2, 14);
    fill.position.set(0, -3, 4);
    scene.add(fill);

    const screenGlow = new THREE.PointLight(0x4f46e5, 3.0, 7);
    screenGlow.position.set(0, 0.2, 1.8);
    scene.add(screenGlow);

    /* ── Materials ── */
    const bezelMat = new THREE.MeshStandardMaterial({
      color: 0x0e0e1e,
      metalness: 0.72,
      roughness: 0.28,
    });
    const neckMat = new THREE.MeshStandardMaterial({
      color: 0x0c0c1a,
      metalness: 0.68,
      roughness: 0.35,
    });

    /* ── Screen texture ── */
    const texCanvas = document.createElement("canvas");
    texCanvas.width = 1024;
    texCanvas.height = 720;
    drawScreenTexture(texCanvas);

    const screenTex = new THREE.CanvasTexture(texCanvas);
    screenTex.colorSpace = THREE.SRGBColorSpace;

    // Redraw after fonts load
    document.fonts.ready.then(() => {
      drawScreenTexture(texCanvas);
      screenTex.needsUpdate = true;
    });

    const screenMat = new THREE.MeshStandardMaterial({
      map: screenTex,
      emissive: new THREE.Color(0x18183a),
      emissiveIntensity: 0.55,
      roughness: 0.04,
      metalness: 0.05,
    });

    /* ── Monitor group ── */
    const group = new THREE.Group();
    scene.add(group);

    // Bezel outer shell
    const bezelGeo = new THREE.BoxGeometry(3.8, 2.55, 0.16);
    const bezel = new THREE.Mesh(bezelGeo, bezelMat);
    bezel.castShadow = true;
    group.add(bezel);

    // Screen panel
    const screenGeo = new THREE.PlaneGeometry(3.38, 2.24);
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.z = 0.082;
    group.add(screenMesh);

    // Thin inner edge ring around screen
    const ringMat = new THREE.MeshStandardMaterial({ color: 0x1a1a38, metalness: 0.6, roughness: 0.5 });
    const ringGeo = new THREE.BoxGeometry(3.48, 2.34, 0.012);
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.z = 0.079;
    group.add(ring);

    // Logo/power dot on bottom bezel center
    const dotGeo = new THREE.CylinderGeometry(0.045, 0.045, 0.025, 20);
    const dotMat = new THREE.MeshStandardMaterial({ color: 0x222240, metalness: 0.95, roughness: 0.08 });
    const dot = new THREE.Mesh(dotGeo, dotMat);
    dot.rotation.x = Math.PI / 2;
    dot.position.set(0, -1.14, 0.083);
    group.add(dot);

    // Neck
    const neckGeo = new THREE.BoxGeometry(0.13, 0.5, 0.12);
    const neck = new THREE.Mesh(neckGeo, neckMat);
    neck.position.set(0, -1.54, -0.01);
    group.add(neck);

    // Base arm (horizontal T-piece)
    const armGeo = new THREE.BoxGeometry(0.52, 0.07, 0.38);
    const arm = new THREE.Mesh(armGeo, neckMat);
    arm.position.set(0, -1.8, 0.05);
    group.add(arm);

    // Base plate
    const baseGeo = new THREE.BoxGeometry(1.3, 0.06, 0.56);
    const baseMat = new THREE.MeshStandardMaterial({ color: 0x0a0a18, metalness: 0.75, roughness: 0.3 });
    const base = new THREE.Mesh(baseGeo, baseMat);
    base.position.set(0, -1.84, 0.06);
    base.castShadow = true;
    group.add(base);

    // Base foot underlay
    const footGeo = new THREE.BoxGeometry(1.5, 0.035, 0.65);
    const footMat = new THREE.MeshStandardMaterial({ color: 0x080812, metalness: 0.7, roughness: 0.38 });
    const foot = new THREE.Mesh(footGeo, footMat);
    foot.position.set(0, -1.875, 0.06);
    foot.receiveShadow = true;
    group.add(foot);

    /* ── Drag rotation state ── */
    const drag = { active: false, lastX: 0, lastY: 0 };
    const velocity = { x: 0, y: 0 };
    const userRot = { x: 0, y: 0 };
    const targetRot = { x: 0, y: 0 };

    const getXY = (e) =>
      e.touches ? { x: e.touches[0].clientX, y: e.touches[0].clientY } : { x: e.clientX, y: e.clientY };

    const onDown = (e) => {
      drag.active = true;
      const p = getXY(e);
      drag.lastX = p.x;
      drag.lastY = p.y;
      velocity.x = velocity.y = 0;
      canvas.style.cursor = "grabbing";
    };
    const onMove = (e) => {
      if (!drag.active) return;
      const p = getXY(e);
      const dx = p.x - drag.lastX;
      const dy = p.y - drag.lastY;
      targetRot.y += dx * 0.009;
      targetRot.x += dy * 0.006;
      targetRot.x = Math.max(-0.6, Math.min(0.6, targetRot.x));
      velocity.x = dy * 0.006;
      velocity.y = dx * 0.009;
      drag.lastX = p.x;
      drag.lastY = p.y;
    };
    const onUp = () => {
      drag.active = false;
      canvas.style.cursor = "grab";
    };

    canvas.addEventListener("mousedown", onDown);
    canvas.addEventListener("touchstart", onDown, { passive: true });
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);
    canvas.style.cursor = "grab";

    /* ── Resize ── */
    const resize = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    /* ── Animation loop ── */
    let t = 0;
    let animId;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      t += 0.012;

      const sp = scrollRef.current;

      // Scroll-driven X rotation: bird's eye (−1.15 rad) → front-facing (0)
      const scrollX = -1.15 * (1 - sp);

      if (!drag.active) {
        // Inertia
        velocity.x *= 0.90;
        velocity.y *= 0.90;
        targetRot.x += velocity.x * 0.25;
        targetRot.y += velocity.y * 0.25;
        // Gentle X restore + idle Y sway
        targetRot.x += (0 - targetRot.x) * 0.018;
        const idleY = Math.sin(t * 0.38) * 0.055;
        targetRot.y += (idleY - targetRot.y) * 0.014;
      }

      userRot.x += (targetRot.x - userRot.x) * 0.1;
      userRot.y += (targetRot.y - userRot.y) * 0.1;

      group.rotation.x = scrollX + userRot.x;
      group.rotation.y = userRot.y;

      // Subtle hover float (only when mostly front-facing)
      group.position.y = Math.sin(t * 0.55) * 0.042 * sp;

      // Screen glow breathe
      screenGlow.intensity = 2.6 + Math.sin(t * 1.1) * 0.45;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener("mousedown", onDown);
      canvas.removeEventListener("touchstart", onDown);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
      ro.disconnect();
      renderer.dispose();
      screenTex.dispose();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", display: "block", touchAction: "none" }}
    />
  );
}

/* ─────────────────────────────────────────────
   HTML contact cards (shown after scroll lands)
───────────────────────────────────────────── */
function ContactCards({ visible }) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "90%",
        display: "flex",
        flexWrap: "wrap",
        gap: 8,
        justifyContent: "center",
        opacity: visible ? 1 : 0,
        translate: visible ? "0 0" : "0 18px",
        transition: "opacity 0.5s ease, translate 0.5s ease",
        pointerEvents: visible ? "auto" : "none",
        zIndex: 10,
      }}
    >
      {contactLinks.map((link) => (
        <a
          key={link.id}
          href={link.href}
          target={link.id !== "email" ? "_blank" : undefined}
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 9,
            padding: "9px 14px",
            borderRadius: 11,
            background: "rgba(8,8,18,0.84)",
            border: `1px solid ${link.accent}33`,
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            textDecoration: "none",
            transition: "all 0.22s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = `${link.accent}16`;
            e.currentTarget.style.borderColor = `${link.accent}55`;
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow = `0 10px 28px ${link.accent}1f`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(8,8,18,0.84)";
            e.currentTarget.style.borderColor = `${link.accent}33`;
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <span style={{ color: link.accent, display: "flex", alignItems: "center" }}>{link.icon}</span>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: link.accent, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            {link.label}
          </span>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "rgba(255,255,255,0.48)" }}>
            {link.value}
          </span>
        </a>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Contact section
───────────────────────────────────────────── */
export default function Contact() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const raw = 1 - rect.top / window.innerHeight;
      setProgress(Math.min(1, Math.max(0, raw)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headingFade = Math.min(1, progress * 2.5);
  const cardsVisible = progress > 0.75;

  return (
    <>
      <style>{`
        @keyframes orb-drift {
          0%,100% { transform: scale(1) translateY(0px); opacity: 0.14; }
          50%      { transform: scale(1.07) translateY(-16px); opacity: 0.22; }
        }
        .c-orb-a { animation: orb-drift 7s ease-in-out infinite; }
        .c-orb-b { animation: orb-drift 10s ease-in-out infinite reverse; }
        .c-orb-c { animation: orb-drift 8.5s ease-in-out infinite 3s; }
        @keyframes pulse-dot {
          0%,100% { opacity: 1; box-shadow: 0 0 8px rgba(16,185,129,0.6); }
          50%      { opacity: 0.5; box-shadow: 0 0 4px rgba(16,185,129,0.3); }
        }
        .corner-brace {
          position: absolute; width: 18px; height: 18px;
          border-color: rgba(255,255,255,0.14); border-style: solid;
          pointer-events: none;
        }
      `}</style>

      <section
        ref={sectionRef}
        id="contact"
        className="relative flex justify-center items-center min-h-screen overflow-hidden"
      >
        {/* Sticky viewport */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {/* Ambient background */}
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
            <div className="c-orb-a" style={{ position: "absolute", width: 560, height: 560, top: "4%", right: "-12%", borderRadius: "50%", filter: "blur(90px)", background: "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)" }} />
            <div className="c-orb-b" style={{ position: "absolute", width: 430, height: 430, bottom: "6%", left: "-10%", borderRadius: "50%", filter: "blur(80px)", background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)" }} />
            <div className="c-orb-c" style={{ position: "absolute", width: 300, height: 300, top: "50%", left: "50%", transform: "translate(-50%,-50%)", borderRadius: "50%", filter: "blur(70px)", background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)" }} />
            <div style={{ position: "absolute", inset: 0, opacity: 0.12, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.28) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
            {/* Corner braces */}
            {[
              { top: 24, left: 24, borderTopWidth: 2, borderLeftWidth: 2, borderRightWidth: 0, borderBottomWidth: 0, borderRadius: "6px 0 0 0" },
              { top: 24, right: 24, borderTopWidth: 2, borderRightWidth: 2, borderLeftWidth: 0, borderBottomWidth: 0, borderRadius: "0 6px 0 0" },
              { bottom: 24, left: 24, borderBottomWidth: 2, borderLeftWidth: 2, borderRightWidth: 0, borderTopWidth: 0, borderRadius: "0 0 0 6px" },
              { bottom: 24, right: 24, borderBottomWidth: 2, borderRightWidth: 2, borderLeftWidth: 0, borderTopWidth: 0, borderRadius: "0 0 6px 0" },
            ].map((st, i) => (
              <div key={i} className="corner-brace" style={st} />
            ))}
          </div>

          {/* Section heading */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              textAlign: "center",
              marginBottom: 20,
              opacity: headingFade,
              transform: `translateY(${(1 - headingFade) * 18}px)`,
              transition: "none",
            }}
          >
            <div style={{ fontSize: "0.65rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(99,102,241,0.85)", marginBottom: 8 }}>
              // contact
            </div>
            <h2 className="font-bold" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "rgba(255,255,255,0.95)", margin: 0, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              Say <em style={{ color: "rgba(139,92,246,0.92)" }}>Hello</em>
            </h2>
          </div>

          {/* Three.js canvas */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              width: "min(800px, 96vw)",
              height: "min(520px, 58vh)",
            }}
          >
            <MonitorCanvas scrollProgress={progress} />
            <ContactCards visible={cardsVisible} />
          </div>

          {/* Hint */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              marginTop: 14,
              display: "flex",
              alignItems: "center",
              gap: 8,
              opacity: Math.min(1, progress * 2.8),
            }}
          >
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "rgba(16,185,129,1)", animation: "pulse-dot 2s ease-in-out infinite" }} />
           
          </div>
        </div>
      </section>
    </>
  );
}