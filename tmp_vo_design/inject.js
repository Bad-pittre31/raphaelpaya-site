const fs = require('fs');
const path = require('path');

const targetPath = '/Users/raphael/Library/Application Support/Claude/local-agent-mode-sessions/d1967b8a-0863-4aae-a1d6-55dd2b256227/63d614da-3cf3-4ce9-ac2f-ed1e49db3201/local_77745963-bb6f-47c9-af65-c4e88ba2e7b7/outputs/index.html';
let content = fs.readFileSync(targetPath, 'utf8');

const cssToInject = `
/* ==========================================================================
   VIKTOR ODDY REDESIGN (Vanilla CSS converted from Tailwind prompt)
   ========================================================================== */
@font-face {
  font-family: 'PP Neue Montreal';
  src: url('https://assets.website-files.com/6009ec8cda7f305645c9d91b/60176f9bb43e36419997ecfe_PPNeueMontreal-Book.otf') format('opentype');
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: 'PP Neue Montreal';
  src: url('https://assets.website-files.com/6009ec8cda7f305645c9d91b/60176f9b39c5673e51a86f5a_PPNeueMontreal-Medium.otf') format('opentype');
  font-weight: 500;
  font-display: swap;
}

#page-home {
  font-family: 'PP Neue Montreal', system-ui, sans-serif;
  background-color: #ffffff;
  color: #051A24;
  padding-bottom: 120px;
}

.vo-serif {
  font-family: 'Instrument Serif', serif;
}
.vo-serif-it {
  font-family: 'Instrument Serif', serif;
  font-style: italic;
}

/* Animations */
@keyframes vo-fadeInUp {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}
.vo-anim { opacity: 0; }
.vo-anim.animate-fade-in-up {
  animation: vo-fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* Hero Section */
.vo-hero {
  max-width: 440px; margin: 0 auto; padding: 64px 24px 0; text-align: center;
}
@media (min-width: 768px) { .vo-hero { padding-top: 80px; } }
.vo-hero-logo { font-size: 32px; font-weight: 600; color: #051A24; letter-spacing: -0.05em; margin-bottom: 16px; line-height: 1;}
@media (min-width: 768px) { .vo-hero-logo { font-size: 40px; } }
@media (min-width: 1024px) { .vo-hero-logo { font-size: 44px; } }
.vo-hero-tag { font-family: monospace; font-size: 12px; color: #051A24; margin-bottom: 8px; }
@media (min-width: 768px) { .vo-hero-tag { font-size: 14px; } }
.vo-hero-h1 { font-size: 32px; line-height: 1.1; color: #0D212C; letter-spacing: -0.02em; white-space: nowrap; margin-top: 8px; }
@media (min-width: 768px) { .vo-hero-h1 { font-size: 40px; } }
@media (min-width: 1024px) { .vo-hero-h1 { font-size: 44px; } }
.vo-hero-desc { display: flex; flex-direction: column; gap: 24px; font-size: 14px; color: #051A24; line-height: 1.6; margin-top: 24px; text-align: left;}
@media (min-width: 768px) { .vo-hero-desc { font-size: 16px; } }

/* Buttons */
.vo-btn-row { display: flex; flex-direction: column; gap: 12px; margin-top: 24px;}
@media (min-width: 640px) { .vo-btn-row { flex-direction: row; justify-content: center; gap: 16px; margin-top: 24px;} }

.vo-btn-pri {
  background: #051A24; color: #ffffff; border-radius: 999px; padding: 12px 28px;
  font-weight: 500; font-size: 15px; cursor: pointer; text-decoration: none; border: none;
  box-shadow: 0 1px 2px 0 rgba(5,26,36,0.1), 0 4px 4px 0 rgba(5,26,36,0.09), 0 9px 6px 0 rgba(5,26,36,0.05), 0 17px 7px 0 rgba(5,26,36,0.01), 0 26px 7px 0 rgba(5,26,36,0), inset 0 2px 8px 0 rgba(255,255,255,0.5);
  transition: transform 0.2s, opacity 0.2s; display: inline-flex; align-items: center; justify-content: center;
}
.vo-btn-pri:hover { opacity: 0.9; transform: translateY(-1px); }

.vo-btn-sec {
  background: #ffffff; color: #051A24; border-radius: 999px; padding: 12px 28px;
  font-weight: 500; font-size: 15px; cursor: pointer; text-decoration: none; border: none;
  box-shadow: 0 0 0 0.5px rgba(0,0,0,0.05), 0 4px 30px rgba(0,0,0,0.08);
  transition: transform 0.2s; display: inline-flex; align-items: center; justify-content: center;
}
.vo-btn-sec:hover { transform: translateY(-1px); box-shadow: 0 0 0 0.5px rgba(0,0,0,0.08), 0 8px 40px rgba(0,0,0,0.12); }

/* Infinite Marquee */
.vo-marquee-wrap { margin-top: 64px; margin-bottom: 64px; width: 100%; overflow: hidden; display: flex; }
@media (min-width: 768px) { .vo-marquee-wrap { margin-top: 80px; } }
.vo-marquee-track { display: flex; flex-shrink: 0; animation: vo-marquee linear infinite; animation-duration: 10s; }
@media (min-width: 768px) { .vo-marquee-track { animation-duration: 30s; } }
.vo-marquee-item { height: 280px; margin: 0 12px; border-radius: 16px; object-fit: cover; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
@media (min-width: 768px) { .vo-marquee-item { height: 500px; } }
@keyframes vo-marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-100%); } }

/* Quote Section */
.vo-quote-sec { padding: 48px 24px; max-width: 672px; margin: 0 auto; text-align: center; }
.vo-quote-icon { width: 24px; height: 24px; color: #0f172a; margin: 0 auto 24px; }
.vo-quote-text { font-size: 32px; line-height: 1.1; color: #0D212C; letter-spacing: -0.02em; margin-bottom: 24px;}
@media (min-width: 768px) { .vo-quote-text { font-size: 40px; } }
@media (min-width: 1024px) { .vo-quote-text { font-size: 44px; } }
.vo-quote-auth { font-size: 14px; color: #273C46; font-style: italic; margin-bottom: 32px; }
.vo-quote-logos { display: flex; justify-content: center; gap: 24px; flex-wrap: wrap; margin-bottom: 48px; font-weight: 500; font-size: 24px; color: #0f172a; align-items: center; }
.vo-parallax-env { width: 100%; max-width: 320px; margin: 0 auto; overflow: hidden; border-radius: 16px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); height: 400px; position: relative; }
.vo-parallax-img { width: 100%; height: 130%; object-fit: cover; position: absolute; top: -15%; left: 0; will-change: transform; transition: transform 0.1s ease-out; }

/* Pricing */
.vo-pricing { padding: 48px 24px; max-width: 896px; margin: 0 auto; display: grid; grid-template-columns: 1fr; gap: 32px; }
@media (min-width: 768px) { .vo-pricing { grid-template-columns: 1fr 1fr; justify-content: end; margin-right: auto;} }
.vo-price-c1 { background: #051A24; border-radius: 40px; padding: 12px 24px 40px 40px; color: #F6FCFF; display: flex; flex-direction: column; box-shadow: inset 0 2px 10px rgba(0,0,0,0.5);}
@media (min-width: 768px) { .vo-price-c1 { padding-right: 96px; } }
.vo-price-c2 { background: #ffffff; border-radius: 40px; padding: 12px 24px 40px 40px; color: #0D212C; box-shadow: 0 4px 16px rgba(0,0,0,0.08); display: flex; flex-direction: column; }
@media (min-width: 768px) { .vo-price-c2 { padding-right: 96px; } }
.vo-price-h3 { font-size: 22px; font-weight: 500; margin-top: 12px; margin-bottom: 16px; }
.vo-price-desc { font-size: 15px; color: #E0EBF0; margin-bottom: 32px; line-height: 1.5; }
.vo-price-c2 .vo-price-desc { color: #273C46; }
.vo-price-val { font-size: 24px; margin-bottom: 4px; }
.vo-price-lbl { font-size: 14px; opacity: 0.8; margin-bottom: 32px; }

/* Testimonial Carousel */
.vo-t-sec { padding: 80px 0; width: 100%; overflow: hidden; }
.vo-t-hdr { padding: 0 24px; max-width: 896px; margin: 0 auto 40px; display: flex; justify-content: space-between; align-items: flex-end; }
@media (min-width: 768px) { .vo-t-hdr { margin-left: auto; margin-right: auto; } }
.vo-t-h2 { font-size: 32px; color: #0D212C; letter-spacing: -0.02em; }
@media (min-width: 768px) { .vo-t-h2 { font-size: 40px; } }
.vo-stars-wrap { display: flex; flex-direction: column; align-items: flex-end; gap: 4px; }
.vo-stars { display: flex; gap: 4px; color: #000; }
.vo-stars svg { width: 20px; height: 20px; fill: #000; }
.vo-stars-txt { font-weight: 500; font-size: 14px; }

.vo-carousel { display: flex; gap: 24px; margin-left: max(24px, calc((100% - 896px) / 2)); transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1); cursor: grab; padding-bottom: 20px; padding-right: 24px;}
.vo-card { flex-shrink: 0; width: calc(100vw - 48px); max-width: 427.5px; background: #ffffff; border-radius: 32px; box-shadow: 0 4px 16px rgba(0,0,0,0.08); padding: 32px 24px; }
@media (min-width: 768px) { .vo-card { border-radius: 40px; padding: 32px 96px 32px 40px; } }
.vo-card-q { color: #e2e8f0; margin-bottom: 16px; }
.vo-card-txt { font-size: 16px; color: #0D212C; line-height: 1.6; margin-bottom: 32px; font-style: italic;}
.vo-card-auth { display: flex; align-items: center; gap: 16px; }
.vo-card-av { width: 48px; height: 48px; border-radius: 50%; object-fit: cover; }
.vo-card-n { font-weight: 600; font-size: 14px; color: #0D212C; }
.vo-card-r { font-size: 14px; color: #64748b; }
.vo-controls { display: flex; gap: 16px; max-width: 896px; margin: 24px auto 0; padding: 0 24px; justify-content: flex-end; }
.vo-nav-btn { width: 48px; height: 48px; border-radius: 50%; border: 1px solid rgba(13,33,44,0.2); background: transparent; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: background 0.2s; }
.vo-nav-btn:hover { background: rgba(13,33,44,0.05); }

/* Projects */
.vo-proj-sec { max-width: 1200px; margin: 0 auto; padding: 48px 24px; display: flex; flex-direction: column; gap: 64px; }
@media(min-width: 768px) { .vo-proj-sec { gap: 80px; } }
.vo-proj-item { display: flex; flex-direction: column; gap: 24px; }
.vo-proj-text { margin-left: 80px; max-width: 400px; }
@media(min-width: 768px) { .vo-proj-text { margin-left: 112px; } }
.vo-proj-title { font-size: 24px; color: #051A24; margin-bottom: 8px; font-weight: 600; line-height:1.2;}
@media(min-width: 768px) { .vo-proj-title { font-size: 30px; } }
.vo-proj-desc { font-size: 14px; color: rgba(5,26,36,0.7); }
@media(min-width: 768px) { .vo-proj-desc { font-size: 16px; } }
.vo-proj-img { width: 100%; border-radius: 16px; object-fit: cover; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }

/* Partner */
.vo-partner-sec { padding: 48px 24px; }
.vo-partner-wrap { max-width: 1200px; margin: 0 auto; padding: 192px 24px; border-radius: 40px; text-align: center; box-shadow: 0 4px 60px rgba(0,0,0,0.04); position: relative; overflow: hidden; background: #ffffff; cursor: crosshair;}
.vo-partner-h2 { font-size: 48px; color: #0D212C; margin-bottom: 48px; position: relative; z-index: 2;}
@media(min-width: 768px) { .vo-partner-h2 { font-size: 64px; } }
@media(min-width: 1024px) { .vo-partner-h2 { font-size: 80px; } }
.vo-cursor-trail { position: absolute; pointer-events: none; border-radius: 12px; width: 160px; height: 100px; object-fit: cover; box-shadow: 0 10px 20px rgba(0,0,0,0.2); transition: opacity 1s, transform 1s; opacity: 1; z-index:1; transform-origin: center; animation: vo-spawn 0.2s cubic-bezier(0.16,1,0.3,1); }
@keyframes vo-spawn { 0% { opacity: 0; transform: scale(0.5); } 100% { opacity: 1; transform: scale(1); } }
.vo-partner-cta-wrap { position: relative; z-index: 2; display: flex; justify-content: center; }

/* Footer */
.vo-ftr { max-width: 1200px; margin: 0 auto; padding: 48px 24px; display: flex; flex-direction: column; gap: 32px;}
@media(min-width: 768px) { .vo-ftr { flex-direction: row; justify-content: space-between; align-items: flex-start; } }
.vo-ftr-links { display: flex; gap: 32px;}
@media(min-width: 768px) { .vo-ftr-links { gap: 64px; } }
.vo-ftr-col { display: flex; flex-direction: column; gap: 16px; }
.vo-ftr-link { text-decoration: none; color: #051A24; font-size: 16px; transition: opacity 0.2s; font-weight: 500;}
.vo-ftr-link:hover { opacity: 0.7; }
.vo-ftr-icon { width: 24px; height: 24px; color: #051A24; }
.vo-copy { max-width: 1200px; margin: 0 auto; padding: 16px 24px; display: flex; justify-content: space-between; font-size: 14px; color: #051A24; }

/* Fixed Bottom Nav */
.vo-bottom { position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%); z-index: 50; background: #ffffff; border-radius: 999px; padding: 8px 12px 8px 32px; display: flex; align-items: center; gap: 24px; box-shadow: 0 4px 30px rgba(0,0,0,0.15), inset 0 0 0 1px rgba(0,0,0,0.05); opacity: 0; pointer-events: none; transition: opacity 0.4s;}
.vo-bottom.vis { opacity: 1; pointer-events: auto; }
.vo-bottom-v { font-size: 32px; color: #051A24; line-height: 1; position: relative; top: -2px;}
`;

// Make sure styles inject properly
if (!content.includes('VIKTOR ODDY REDESIGN')) {
  content = content.replace('</style>', cssToInject + '\n</style>');
}

// Generate the HTML replacement for #page-home
const newHomeHTML = \`<!-- ================================================================
     PAGE : HOME (Viktor Oddy Redesign)
================================================================ -->
<div id="page-home" class="page active">

  <!-- HERO SECTION -->
  <section class="vo-hero">
    <div class="vo-anim vo-d1 vo-hero-logo vo-serif">Raphaël Paya</div>
    <div class="vo-anim vo-d2 vo-hero-tag">The creative studio of Raphaël Paya</div>
    <div class="vo-anim vo-d3 vo-hero-h1">
      <span class="vo-serif">Build the next wave,</span><br>
      <span class="vo-serif">the bold way.</span>
    </div>
    
    <div class="vo-anim vo-d4 vo-hero-desc">
      <p>I spent ten years crafting business strategies and products used by the best. I founded my studio to bring that same level of thinking to innovators shaping what comes next.</p>
      <p>The studio is deliberately small. I guide the creative vision on every project, backed by a veteran design crew that moves fast without cutting corners.</p>
      <p>Projects start at $5,000 per month.</p>
    </div>

    <div class="vo-anim vo-d5 vo-btn-row">
      <a href="mailto:contact@raphaelpaya.com" class="vo-btn-pri">Start a chat</a>
      <a href="#" onclick="sp('tribu'); return false;" class="vo-btn-sec">View projects</a>
    </div>
  </section>

  <!-- INFINITE MARQUEE -->
  <section class="vo-marquee-wrap vo-anim vo-d1">
    <div class="vo-marquee-track">
      <img src="https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif" class="vo-marquee-item" alt="Space Voyage">
      <img src="https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif" class="vo-marquee-item" alt="Portfolio Cosmic">
      <img src="https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif" class="vo-marquee-item" alt="Velorah">
      <img src="https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif" class="vo-marquee-item" alt="Asme">
      <img src="https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif" class="vo-marquee-item" alt="Transform Data">
      <img src="https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif" class="vo-marquee-item" alt="Aethera">
      <img src="https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif" class="vo-marquee-item" alt="Orbit Web3">
      <img src="https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif" class="vo-marquee-item" alt="Nexora">
      <!-- dupe for infinity -->
      <img src="https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif" class="vo-marquee-item" alt="Space Voyage">
      <img src="https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif" class="vo-marquee-item" alt="Portfolio Cosmic">
      <img src="https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif" class="vo-marquee-item" alt="Velorah">
      <img src="https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif" class="vo-marquee-item" alt="Asme">
      <img src="https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif" class="vo-marquee-item" alt="Transform Data">
      <img src="https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif" class="vo-marquee-item" alt="Aethera">
      <img src="https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif" class="vo-marquee-item" alt="Orbit Web3">
      <img src="https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif" class="vo-marquee-item" alt="Nexora">
    </div>
  </section>

  <!-- TESTIMONIAL QUOTE SECTION -->
  <section class="vo-quote-sec">
    <svg class="vo-anim vo-d1 vo-quote-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path></svg>
    <h2 class="vo-anim vo-d2 vo-quote-text">
      'I left <span class="vo-serif">Apple</span> to build the studio I always wanted to work with'
    </h2>
    <div class="vo-anim vo-d3 vo-quote-auth">Raphaël Paya</div>
    
    <div class="vo-anim vo-d4 vo-quote-logos">
      <span style="font-size:24px;width:80px;text-align:center;">Apple</span>
      <span style="font-size:24px;width:83px;text-align:center;">IDEO</span>
      <span style="font-size:24px;width:110px;text-align:center;">Polygon</span>
    </div>

    <div class="vo-anim vo-d5 vo-parallax-env">
      <img src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260330_103804_7aa5494f-4d5b-432e-9dc7-20715275f143.png&w=1280&q=85" alt="Raphael Parallax" class="vo-parallax-img" id="vo-parallax">
    </div>
  </section>

  <!-- PRICING SECTION -->
  <section class="vo-pricing">
    <div class="vo-anim vo-d1 vo-price-c1">
      <h3 class="vo-price-h3">Monthly Partnership</h3>
      <p class="vo-price-desc">A dedicated creative design team.<br>You work directly with Raphaël.</p>
      <div style="flex-grow:1;"></div>
      <div class="vo-price-val">$5,000</div>
      <div class="vo-price-lbl">Monthly</div>
      <div class="vo-btn-row" style="margin-top:0;justify-content:flex-start;">
        <a href="mailto:contact@raphaelpaya.com" class="vo-btn-pri" style="background:#ffffff; color:#051A24;">Start a chat</a>
        <button class="vo-btn-tert" style="background:transparent; color:#F6FCFF; box-shadow:inset 0 0 0 1px rgba(255,255,255,0.2);">How it works</button>
      </div>
    </div>
    
    <div class="vo-anim vo-d2 vo-price-c2">
      <h3 class="vo-price-h3">Custom Project</h3>
      <p class="vo-price-desc">Fixed scope, fixed timeline.<br>Same team, same standards.</p>
      <div style="flex-grow:1;"></div>
      <div class="vo-price-val">$5,000</div>
      <div class="vo-price-lbl">Minimum</div>
      <div class="vo-btn-row" style="margin-top:0;justify-content:flex-start;">
        <a href="mailto:contact@raphaelpaya.com" class="vo-btn-tert">Start a chat</a>
      </div>
    </div>
  </section>

  <!-- TESTIMONIAL CAROUSEL -->
  <section class="vo-t-sec">
    <div class="vo-t-hdr vo-anim vo-d1">
      <h2 class="vo-t-h2">What <span class="vo-serif">builders</span> say</h2>
      <div class="vo-stars-wrap">
        <div class="vo-stars">
          <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        </div>
        <div class="vo-stars-txt">Clutch 5/5</div>
      </div>
    </div>
    
    <div class="vo-carousel vo-anim vo-d2" id="vo-carousel" style="transform: translateX(0px);">
      <div class="vo-card">
        <svg class="vo-card-q" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
        <p class="vo-card-txt">"With very little guidance team delivered designs that were consistently spot on. Raphaël has an eye for what converts."</p>
        <div class="vo-card-auth">
          <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=100&w=100" class="vo-card-av" alt="Avatar">
          <div>
            <div class="vo-card-n">Marcus Anderson</div>
            <div class="vo-card-r">↗ CEO, Data.storage</div>
          </div>
        </div>
      </div>
      <div class="vo-card">
        <svg class="vo-card-q" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
        <p class="vo-card-txt">"Raphaël led the creation of our best fundraising deck to date! Perfect balance of aesthetics and data."</p>
        <div class="vo-card-auth">
          <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&h=100&w=100" class="vo-card-av" alt="Avatar">
          <div>
            <div class="vo-card-n">alexwu</div>
            <div class="vo-card-r">↗ Founder, Nexgate</div>
          </div>
        </div>
      </div>
      <div class="vo-card">
        <svg class="vo-card-q" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
        <p class="vo-card-txt">"Working with Raphaël transformed our product vision. We wouldn't be where we are without their speed."</p>
        <div class="vo-card-auth">
          <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&h=100&w=100" class="vo-card-av" alt="Avatar">
          <div>
            <div class="vo-card-n">James Mitchell</div>
            <div class="vo-card-r">↗ VP Product, LaunchPad</div>
          </div>
        </div>
      </div>
      <div class="vo-card">
        <svg class="vo-card-q" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
        <p class="vo-card-txt">"The design quality exceeded our expectations. The turnaround time was unbelievable."</p>
        <div class="vo-card-auth">
          <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&h=100&w=100" class="vo-card-av" alt="Avatar">
          <div>
            <div class="vo-card-n">Rachel Foster</div>
            <div class="vo-card-r">↗ Co-founder, Nexus Labs</div>
          </div>
        </div>
      </div>
      <div class="vo-card">
        <svg class="vo-card-q" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
        <p class="vo-card-txt">"Incredible work from start to finish. We consider Raphaël an extension of our internal team."</p>
        <div class="vo-card-auth">
          <img src="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&h=100&w=100" class="vo-card-av" alt="Avatar">
          <div>
            <div class="vo-card-n">David Zhang</div>
            <div class="vo-card-r">↗ Head of Design, Paradigm</div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="vo-controls vo-anim vo-d3">
      <button class="vo-nav-btn" id="vo-prev">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <button class="vo-nav-btn" id="vo-next">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
      </button>
    </div>
  </section>

  <!-- PROJECTS SECTION -->
  <section class="vo-proj-sec">
    <!-- Proj 1 -->
    <div class="vo-proj-item vo-anim vo-d1">
      <div class="vo-proj-text">
        <div class="vo-proj-title vo-serif">evr</div>
        <div class="vo-proj-desc">From idea to millions raised for a web3 AI product</div>
      </div>
      <img src="https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif" class="vo-proj-img" alt="evr">
    </div>
    <!-- Proj 2 -->
    <div class="vo-proj-item vo-anim vo-d2">
      <div class="vo-proj-text">
        <div class="vo-proj-title vo-serif">Automation Machines</div>
        <div class="vo-proj-desc">Streamlining industrial automation processes</div>
      </div>
      <img src="https://motionsites.ai/assets/hero-automation-machines-preview-DlTveRIN.gif" class="vo-proj-img" alt="Automation Machines">
    </div>
    <!-- Proj 3 -->
    <div class="vo-proj-item vo-anim vo-d3">
      <div class="vo-proj-text">
        <div class="vo-proj-title vo-serif">xPortfolio</div>
        <div class="vo-proj-desc">Modern portfolio management platform</div>
      </div>
      <img src="https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif" class="vo-proj-img" alt="xPortfolio">
    </div>
  </section>

  <!-- PARTNER SECTION -->
  <section class="vo-partner-sec">
    <div class="vo-partner-wrap vo-anim vo-d1" id="vo-partner-zone">
      <div class="vo-partner-h2 vo-serif">Partner with us</div>
      <div class="vo-partner-cta-wrap">
        <a href="mailto:contact@raphaelpaya.com" class="vo-btn-pri" style="padding: 6px 20px 6px 6px;">
          <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=100&w=100" style="width:36px; height:36px; border-radius:50%; object-fit:cover; margin-right: 12px;" alt="Raphael">
          Start chat with Raphaël
        </a>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="vo-ftr vo-anim vo-d1">
    <div class="vo-ftr-left">
      <a href="mailto:contact@raphaelpaya.com" class="vo-btn-pri">Start a chat</a>
    </div>
    <div style="flex-grow:1;"></div>
    <svg class="vo-ftr-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
    <div class="vo-ftr-links">
      <div class="vo-ftr-col">
        <a href="#" class="vo-ftr-link" onclick="sp('tribu'); return false;">Services</a>
        <a href="#" class="vo-ftr-link" onclick="sp('miixeo'); return false;">Work</a>
        <a href="#" class="vo-ftr-link" onclick="sp('bio'); return false;">About</a>
      </div>
      <div class="vo-ftr-col">
        <a href="https://x.com" target="_blank" rel="noopener" class="vo-ftr-link">x.com</a>
        <a href="https://linkedin.com/in/raphaelpaya" target="_blank" rel="noopener" class="vo-ftr-link">LinkedIn</a>
      </div>
    </div>
  </footer>

  <!-- COPYRIGHT -->
  <div class="vo-copy vo-anim vo-d2">
    <div>Raphaël Paya Studio</div>
    <div>Paris, France</div>
  </div>

  <!-- BOTTOM NAV -->
  <div class="vo-bottom" id="vo-bottom-nav">
    <div class="vo-bottom-v vo-serif">R</div>
    <a href="mailto:contact@raphaelpaya.com" class="vo-btn-pri" style="padding:10px 24px;">Start a chat</a>
  </div>

  <script>
    // VO Interactive Logic
    (function(){
      // 1. Intersection Observer for Fade In Up
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('animate-fade-in-up');
            observer.unobserve(e.target);
          }
        });
      }, { threshold: 0.1 });
      document.querySelectorAll('.vo-anim').forEach(el => observer.observe(el));

      // 2. Parallax
      const parallaxImg = document.getElementById('vo-parallax');
      if (parallaxImg) {
        window.addEventListener('scroll', () => {
          const rect = parallaxImg.parentElement.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            // max offset 20%; 
            const walk = (window.innerHeight - rect.top) / window.innerHeight;
            parallaxImg.style.transform = \`translateY(\${walk * 15}%)\`;
          }
        });
      }

      // 3. Carousel
      const carousel = document.getElementById('vo-carousel');
      const prevBtn = document.getElementById('vo-prev');
      const nextBtn = document.getElementById('vo-next');
      if (carousel) {
        let idx = 0;
        const total = 5; // 5 real cards
        const move = () => {
          // approx slide width + gap
          const slideW = carousel.children[0].offsetWidth + 24;
          carousel.style.transform = \`translateX(-\${idx * slideW}px)\`;
        };
        prevBtn.addEventListener('click', () => { idx = Math.max(0, idx - 1); move(); });
        nextBtn.addEventListener('click', () => { idx = Math.min(total - 1, idx + 1); move(); });
        
        // Auto scroll
        let interval = setInterval(() => {
          idx = (idx + 1) % total;
          move();
        }, 3000);
        carousel.addEventListener('mouseenter', () => clearInterval(interval));
        carousel.addEventListener('mouseleave', () => {
          interval = setInterval(() => { idx = (idx + 1) % total; move(); }, 3000);
        });
      }

      // 4. Partner cursor tail
      const zone = document.getElementById('vo-partner-zone');
      if (zone) {
        const gifs = [
          'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
          'https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif',
          'https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif',
          'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
          'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
          'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
          'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
          'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif'
        ];
        let lastTime = 0;
        zone.addEventListener('mousemove', (e) => {
          const now = Date.now();
          if (now - lastTime < 80) return;
          lastTime = now;
          const rect = zone.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const img = document.createElement('img');
          img.src = gifs[Math.floor(Math.random() * gifs.length)];
          img.className = 'vo-cursor-trail';
          const rot = -10 + Math.random() * 20;
          
          img.style.left = \`\${x - 80}px\`;
          img.style.top = \`\${y - 50}px\`;
          img.style.transform = \`rotate(\${rot}deg)\`;
          
          zone.appendChild(img);
          
          // force reflow
          void img.offsetWidth;
          
          setTimeout(() => {
            img.style.opacity = '0';
            img.style.transform = \`rotate(\${rot}deg) scale(0.6)\`;
          }, 100);
          
          setTimeout(() => {
            if (zone.contains(img)) zone.removeChild(img);
          }, 1100);
        });
      }

      // 5. Fixed bottom nav logic
      const bottomNav = document.getElementById('vo-bottom-nav');
      if (bottomNav) {
        window.addEventListener('scroll', () => {
          if (window.scrollY > 300) {
            bottomNav.classList.add('vis');
          } else {
            bottomNav.classList.remove('vis');
          }
        });
      }
    })();
  </script>
</div><!-- /page-home -->\`;

// Replace specifically from <div id="page-home" class="page active"> to </div><!-- /page-home -->
const startIndex = content.indexOf('<div id="page-home" class="page active">');
const endIndex = content.indexOf('</div><!-- /page-home -->', startIndex);

if (startIndex > -1 && endIndex > -1) {
  content = content.substring(0, startIndex) + newHomeHTML + content.substring(endIndex + 25);
  fs.writeFileSync(targetPath, content, 'utf8');
  console.log('Successfully injected Viktor Oddy redesign');
} else {
  console.log('Error: Could not find bounds to replace for #page-home');
}
