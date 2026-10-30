/* ==========================================================================
   TRIPPLE A CO. DESIGNS - GLOBAL INTERACTIVITY & FULL-SITE TRANSLATIONS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // --- Element Selectors ---
  const langToggleBtn = document.getElementById('langToggleBtn');
  const langDropdown = document.getElementById('langDropdown');
  const currentLangLabel = document.getElementById('currentLang');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navCapsule = document.querySelector('.nav-capsule');

  // --- 1. Mobile Menu Toggle & Auto-Close on Scroll ---
  if (mobileToggle && navCapsule) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navCapsule.classList.toggle('active-mobile');
      mobileToggle.classList.toggle('is-open', isOpen);
      mobileToggle.innerHTML = isOpen ? '&#10005;' : '&#9776;'; // Switch between ✕ and ☰
    });

    // Close mobile nav when clicking anywhere outside
    document.addEventListener('click', (e) => {
      if (!navCapsule.contains(e.target) && !mobileToggle.contains(e.target)) {
        navCapsule.classList.remove('active-mobile');
        mobileToggle.classList.remove('is-open');
        mobileToggle.innerHTML = '&#9776;';
      }
    });

    // Close mobile nav automatically on scroll
    window.addEventListener('scroll', () => {
      if (navCapsule.classList.contains('active-mobile')) {
        navCapsule.classList.remove('active-mobile');
        mobileToggle.classList.remove('is-open');
        mobileToggle.innerHTML = '&#9776;';
      }
    }, { passive: true });
  }

  // --- 2. Comprehensive Multi-Language Dictionary ---
  const translations = {
    English: {
      // Header & Navigation
      navHome: "HOME",
      navAbout: "ABOUT",
      navServices: "SERVICES",
      navPages: "PAGES",
      navContact: "CONTACT",
      getIn: "Get In",
      getStarted: "Get Started",

      // Home Page
      heroHeading: "Hello!<br>Welcome",
      feelHome: "Feel at home.",

      // About Page
      helloSubtext: "Hello there!",
      designerSubtitle: "Freelance Graphic Designer",
      leftIntroText: "I design elegant, high-performing digital experiences that merge strategy, aesthetics and creativity.",
      btnViewWork: "View my work",
      portfolioBarLabel: "Portfolio",
      fieldsHeading: "SOME FIELDS",
      fieldBranding: "BRANDING",
      fieldUXUI: "UX/UI DESIGN",
      fieldWebDesign: "WEBSITE DESIGN",
      fieldDesignSystem: "DESIGN SYSTEM",

      // Services Page
      whyHireHeading: 'Why you <span class="orange-italic">hire me</span><br>for your next projects?',
      creativeMindsTitle: "CREATIVE MINDS",
      creativeMindsDesc: "Turning ideas into<br>impactful designs",
      dedicatedTitle: "DEDICATED",
      dedicatedDesc: "Committed to<br>quality and deadlines",
      detailOrientedTitle: "DETAIL ORIENTED",
      detailOrientedDesc: "Focused on details<br>that make a difference",
      resultDrivenTitle: "RESULT DRIVEN",
      resultDrivenDesc: "Designs that drive<br>engagement and growth",
      statExp: "Years of Experience",
      statProjects: "Projects completed",
      statClients: "Happy Clients",
      statAudience: "Audience Reached",

      // Portfolio & Brands Page
      portfolioHeading: 'Let\'s have a look at<br>my <span class="purple-italic">portfolio</span>',
      seeMoreBtn: "See more >",
      seeMoreSmall: "see more",
      catLogos: "LOGO DESIGNING",
      catSocial: "SOCIAL MEDIA DESIGNS",
      catRandom: "RANDOM DESIGNS",
      workedWithHeading: 'Companies and brands i have <br><span class="orange-italic">worked</span> with',
      companiesSubhead: "Companies",

      // Contact Page
      contactHeading: 'Let\'s create something<br><span class="pink-italic">extraordinary.</span>',
      locationText: "HARARE, ZIMBABWE (CHITUNGWIZA)",
      contactUsBtn: "CONTACT US",

      // 404 Error Page
      errTitle: "Oops! Page not found.",
      errDesc: "The canvas you are looking for doesn't exist or has been moved.",
      btnBackHome: "Back to Homepage",

      // Footer Section
      footerBrandDesc: "Independent creative art and design brand founded by Abraham Chere based in Harare & Chitungwiza, Zimbabwe.",
      footerNavTitle: "Navigation",
      footerContactTitle: "Get in Touch",
      footerEmailLabel: "Email:",
      footerPhoneLabel: "Phone:",
      footerLocLabel: "Location: Harare / Chitungwiza, Zimbabwe",
      footerRights: "All rights reserved. Developed by"
    },
    Spanish: {
      // Header & Navigation
      navHome: "INICIO",
      navAbout: "ACERCA DE",
      navServices: "SERVICIOS",
      navPages: "PÁGINAS",
      navContact: "CONTACTO",
      getIn: "Entrar",
      getStarted: "Empezar",

      // Home Page
      heroHeading: "¡Hola!<br>Bienvenido",
      feelHome: "Siéntete como en casa.",

      // About Page
      helloSubtext: "¡Hola a todos!",
      designerSubtitle: "Diseñador Gráfico Freelance",
      leftIntroText: "Diseño experiencias digitales elegantes y de alto rendimiento que combinan estrategia, estética y creatividad.",
      btnViewWork: "Ver mi trabajo",
      portfolioBarLabel: "Portafolio",
      fieldsHeading: "ALGUNAS ÁREAS",
      fieldBranding: "IDENTIDAD DE MARCA",
      fieldUXUI: "DISEÑO UX/UI",
      fieldWebDesign: "DISEÑO WEB",
      fieldDesignSystem: "SISTEMA DE DISEÑO",

      // Services Page
      whyHireHeading: '¿Por qué <span class="orange-italic">contratarme</span><br>para tus próximos proyectos?',
      creativeMindsTitle: "MENTES CREATIVAS",
      creativeMindsDesc: "Transformando ideas en<br>diseños de alto impacto",
      dedicatedTitle: "DEDICADO",
      dedicatedDesc: "Comprometido con la<br>calidad y los plazos",
      detailOrientedTitle: "ORIENTADO AL DETALLE",
      detailOrientedDesc: "Enfocado en los detalles<br>que marcan la diferencia",
      resultDrivenTitle: "ORIENTADO A RESULTADOS",
      resultDrivenDesc: "Diseños que impulsan<br>el compromiso y crecimiento",
      statExp: "Años de Experiencia",
      statProjects: "Proyectos completados",
      statClients: "Clientes Satisfechos",
      statAudience: "Audiencia Alcanzada",

      // Portfolio & Brands Page
      portfolioHeading: 'Echemos un vistazo a<br>mi <span class="purple-italic">portafolio</span>',
      seeMoreBtn: "Ver más >",
      seeMoreSmall: "ver más",
      catLogos: "DISEÑO DE LOGOTIPOS",
      catSocial: "DISEÑOS PARA REDES SOCIALES",
      catRandom: "DISEÑOS VARIADOS",
      workedWithHeading: 'Empresas y marcas con las que he <br><span class="orange-italic">trabajado</span>',
      companiesSubhead: "Empresas",

      // Contact Page
      contactHeading: 'Creemos algo<br><span class="pink-italic">extraordinario.</span>',
      locationText: "HARARE, ZIMBABWE (CHITUNGWIZA)",
      contactUsBtn: "CONTÁCTENOS",

      // 404 Error Page
      errTitle: "¡Página no encontrada!",
      errDesc: "El lienzo que buscas no existe o se ha movido.",
      btnBackHome: "Volver al Inicio",

      // Footer Section
      footerBrandDesc: "Marca independiente de arte creativo y diseño fundada por Abraham Chere con sede en Harare y Chitungwiza, Zimbabue.",
      footerNavTitle: "Navegación",
      footerContactTitle: "Póngase en Contacto",
      footerEmailLabel: "Correo electrónico:",
      footerPhoneLabel: "Teléfono:",
      footerLocLabel: "Ubicación: Harare / Chitungwiza, Zimbabue",
      footerRights: "Todos los derechos reservados. Desarrollado por"
    },
    French: {
      // Header & Navigation
      navHome: "ACCUEIL",
      navAbout: "À PROPOS",
      navServices: "SERVICES",
      navPages: "PAGES",
      navContact: "CONTACT",
      getIn: "Entrer",
      getStarted: "Commencer",

      // Home Page
      heroHeading: "Bonjour !<br>Bienvenue",
      feelHome: "Faites comme chez vous.",

      // About Page
      helloSubtext: "Bonjour !",
      designerSubtitle: "Designer Graphique Indépendant",
      leftIntroText: "Je conçois des expériences numériques élégantes et performantes alliant stratégie, esthétique et créativité.",
      btnViewWork: "Voir mon travail",
      portfolioBarLabel: "Portfolio",
      fieldsHeading: "QUELQUES DOMAINES",
      fieldBranding: "IMAGE DE MARQUE",
      fieldUXUI: "DESIGN UX/UI",
      fieldWebDesign: "DESIGN WEB",
      fieldDesignSystem: "SYSTÈME DE DESIGN",

      // Services Page
      whyHireHeading: 'Pourquoi me <span class="orange-italic">choisir</span><br>pour vos prochains projets ?',
      creativeMindsTitle: "ESPRITS CRÉATIFS",
      creativeMindsDesc: "Transformer des idées en<br>design à fort impact",
      dedicatedTitle: "DÉVOUE",
      dedicatedDesc: "Engagé envers la<br>qualité et les délais",
      detailOrientedTitle: "SOUCIEUX DU DÉTAIL",
      detailOrientedDesc: "Axé sur les détails<br>qui font la différence",
      resultDrivenTitle: "AXÉ SUR LES RÉSULTATS",
      resultDrivenDesc: "Des designs qui stimulent<br>l'engagement et la croissance",
      statExp: "Années d'Expérience",
      statProjects: "Projets réalisés",
      statClients: "Clients Satisfaits",
      statAudience: "Audience Atteinte",

      // Portfolio & Brands Page
      portfolioHeading: 'Jetez un œil à<br>mon <span class="purple-italic">portfolio</span>',
      seeMoreBtn: "Voir plus >",
      seeMoreSmall: "voir plus",
      catLogos: "CONCEPTION DE LOGO",
      catSocial: "DESIGNS POUR RÉSEAUX SOCIAUX",
      catRandom: "DESIGNS DIVERS",
      workedWithHeading: 'Entreprises et marques avec lesquelles j\'ai <br><span class="orange-italic">travaillé</span>',
      companiesSubhead: "Entreprises",

      // Contact Page
      contactHeading: 'Créons quelque chose d\'<br><span class="pink-italic">extraordinaire.</span>',
      locationText: "HARARE, ZIMBABWE (CHITUNGWIZA)",
      contactUsBtn: "CONTACTEZ-NOUS",

      // 404 Error Page
      errTitle: "Oups ! Page introuvable.",
      errDesc: "La page que vous recherchez n'existe pas ou a été déplacée.",
      btnBackHome: "Retour à l'Accueil",

      // Footer Section
      footerBrandDesc: "Marque indépendante d'art créatif et de design fondée par Abraham Chere basée à Harare et Chitungwiza, Zimbabwe.",
      footerNavTitle: "Navigation",
      footerContactTitle: "Contactez-nous",
      footerEmailLabel: "E-mail :",
      footerPhoneLabel: "Téléphone :",
      footerLocLabel: "Lieu : Harare / Chitungwiza, Zimbabwe",
      footerRights: "Tous droits réservés. Développé par"
    },
    Chinese: {
      // Header & Navigation
      navHome: "首页",
      navAbout: "关于我们",
      navServices: "服务项目",
      navPages: "作品页面",
      navContact: "联系我们",
      getIn: "登录",
      getStarted: "立即开始",

      // Home Page
      heroHeading: "你好！<br>欢迎光临",
      feelHome: "宾至如归",

      // About Page
      helloSubtext: "你好！",
      designerSubtitle: "独立平面设计师",
      leftIntroText: "我致力于打造优雅且高性能的数字体验，将商业策略、美学艺术与创新灵感完美融合。",
      btnViewWork: "浏览我的作品",
      portfolioBarLabel: "作品集",
      fieldsHeading: "专业领域",
      fieldBranding: "品牌设计",
      fieldUXUI: "UX/UI 设计",
      fieldWebDesign: "网页设计",
      fieldDesignSystem: "设计系统",

      // Services Page
      whyHireHeading: '为什么选择<span class="orange-italic">雇用我</span><br>开展您的下一个项目？',
      creativeMindsTitle: "创意思维",
      creativeMindsDesc: "将创意转化为<br>极具影响力的设计",
      dedicatedTitle: "专注敬业",
      dedicatedDesc: "恪守高品质<br>与交付时限",
      detailOrientedTitle: "注重细节",
      detailOrientedDesc: "聚焦每一个<br>造就卓越的细节",
      resultDrivenTitle: "结果导向",
      resultDrivenDesc: "驱动用户互动<br>与业务增长的设计",
      statExp: "年行业经验",
      statProjects: "完成项目数",
      statClients: "满意客户数",
      statAudience: "覆盖受众数",

      // Portfolio & Brands Page
      portfolioHeading: '让您纵览<br>我的<span class="purple-italic">作品集</span>',
      seeMoreBtn: "查看更多 >",
      seeMoreSmall: "查看更多",
      catLogos: "标志设计",
      catSocial: "社交媒体设计",
      catRandom: "精选创意设计",
      workedWithHeading: '曾与我携手合作的<br><span class="orange-italic">企业与品牌</span>',
      companiesSubhead: "合作企业",

      // Contact Page
      contactHeading: '让我们携手缔造<br><span class="pink-italic">非凡之作</span>',
      locationText: "津巴布韦，哈拉雷 (赤通威扎)",
      contactUsBtn: "联系我们",

      // 404 Error Page
      errTitle: "抱歉！页面未找到",
      errDesc: "您正在寻找的页面不存在或已被移动。",
      btnBackHome: "返回首页",

      // Footer Section
      footerBrandDesc: "由 Abraham Chere 创办的独立创意艺术与设计品牌，总部位于津巴布韦哈拉雷与赤通威扎。",
      footerNavTitle: "网站导航",
      footerContactTitle: "联系方式",
      footerEmailLabel: "电子邮箱：",
      footerPhoneLabel: "联系电话：",
      footerLocLabel: "地理位置：津巴布韦哈拉雷 / 赤通威扎",
      footerRights: "版权所有。技术支持："
    }
  };

  // Helper Function: Safely Update Inner Content
  const updateElem = (selector, content, isHTML = false) => {
    const el = document.querySelector(selector);
    if (el) {
      if (isHTML) el.innerHTML = content;
      else el.textContent = content;
    }
  };

  const updateAll = (selector, content) => {
    document.querySelectorAll(selector).forEach(el => {
      el.textContent = content;
    });
  };

  // Main UI Translation Engine
  function applyLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;

    if (currentLangLabel) currentLangLabel.textContent = lang;

    // --- Header Nav Links ---
    const navLinks = document.querySelectorAll('.nav-links li a');
    if (navLinks.length >= 5) {
      navLinks[0].textContent = dict.navHome;
      navLinks[1].textContent = dict.navAbout;
      navLinks[2].textContent = dict.navServices;
      navLinks[3].textContent = dict.navPages;
      navLinks[4].textContent = dict.navContact;
    }

    // --- Action Buttons ---
    updateElem('.btn-nav-text', dict.getIn);
    updateAll('.btn-black-pill, .btn-center-getstarted', dict.getStarted);
    updateAll('.btn-see-more-pill', dict.seeMoreBtn);
    updateAll('.btn-see-more-small, .btn-see-more', dict.seeMoreSmall);

    // Contact Us Button Text Safeguard
    const btnContactUs = document.querySelector('.btn-contact-us-pill');
    if (btnContactUs) {
      btnContactUs.innerHTML = `<span>${dict.contactUsBtn}</span>`;
    }

    // --- Home Page ---
    updateElem('.hero-main-title', dict.heroHeading, true);
    updateElem('.feel-home-text', dict.feelHome);

    // --- About Page ---
    updateElem('.hello-subtext', dict.helloSubtext);
    updateElem('.designer-subtitle', dict.designerSubtitle);
    updateElem('.left-intro-text', dict.leftIntroText);
    updateElem('.btn-view-work-dark', dict.btnViewWork);
    updateElem('.portfolio-bar-label', dict.portfolioBarLabel);
    updateElem('.fields-heading', dict.fieldsHeading);

    const fieldCapsules = document.querySelectorAll('.field-capsule');
    if (fieldCapsules.length >= 4) {
      fieldCapsules[0].textContent = dict.fieldBranding;
      fieldCapsules[1].textContent = dict.fieldUXUI;
      fieldCapsules[2].textContent = dict.fieldWebDesign;
      fieldCapsules[3].textContent = dict.fieldDesignSystem;
    }

    // --- Services Page ---
    updateElem('.services-header-title h1', dict.whyHireHeading, true);

    const cards = document.querySelectorAll('.grey-box-card');
    if (cards.length >= 4) {
      // Card 1
      const c1Title = cards[0].querySelector('.card-title-white');
      const c1Desc = cards[0].querySelector('.card-desc-dark');
      if (c1Title) c1Title.textContent = dict.creativeMindsTitle;
      if (c1Desc) c1Desc.innerHTML = dict.creativeMindsDesc;

      // Card 2
      const c2Title = cards[1].querySelector('.card-title-white');
      const c2Desc = cards[1].querySelector('.card-desc-dark');
      if (c2Title) c2Title.textContent = dict.dedicatedTitle;
      if (c2Desc) c2Desc.innerHTML = dict.dedicatedDesc;

      // Card 3
      const c3Title = cards[2].querySelector('.card-title-white');
      const c3Desc = cards[2].querySelector('.card-desc-dark');
      if (c3Title) c3Title.textContent = dict.detailOrientedTitle;
      if (c3Desc) c3Desc.innerHTML = dict.detailOrientedDesc;

      // Card 4
      const c4Title = cards[3].querySelector('.card-title-white');
      const c4Desc = cards[3].querySelector('.card-desc-dark');
      if (c4Title) c4Title.textContent = dict.resultDrivenTitle;
      if (c4Desc) c4Desc.innerHTML = dict.resultDrivenDesc;
    }

    const statLabels = document.querySelectorAll('.stat-label');
    if (statLabels.length >= 4) {
      statLabels[0].textContent = dict.statExp;
      statLabels[1].textContent = dict.statProjects;
      statLabels[2].textContent = dict.statClients;
      statLabels[3].textContent = dict.statAudience;
    }

    // --- Portfolio Page ---
    updateElem('.portfolio-main-heading', dict.portfolioHeading, true);
    updateElem('.card-logos .category-label', dict.catLogos);
    updateElem('.card-social .category-label', dict.catSocial);
    updateElem('.card-random .category-label', dict.catRandom);
    updateElem('.clients-title', dict.workedWithHeading, true);
    updateElem('.companies-heading', dict.companiesSubhead);

    // --- Contact Page ---
    updateElem('.contact-header-title h1', dict.contactHeading, true);
    updateElem('.static-item span', dict.locationText);

    // --- 404 Error Page ---
    updateElem('.error-title', dict.errTitle);
    updateElem('.error-desc', dict.errDesc);
    updateElem('.btn-back-home', dict.btnBackHome);

    // --- Footer Section ---
    updateElem('.footer-brand p', dict.footerBrandDesc);
    updateElem('.footer-nav h4', dict.footerNavTitle);
    updateElem('.footer-contact h4', dict.footerContactTitle);

    const footerNavLinks = document.querySelectorAll('.footer-nav ul li a');
    if (footerNavLinks.length >= 5) {
      footerNavLinks[0].textContent = dict.navHome;
      footerNavLinks[1].textContent = dict.navAbout;
      footerNavLinks[2].textContent = dict.navServices;
      footerNavLinks[3].textContent = dict.navPages;
      footerNavLinks[4].textContent = dict.navContact;
    }

    // Footer bottom text
    const footerBottom = document.querySelector('.footer-bottom p');
    if (footerBottom) {
      footerBottom.innerHTML = `&copy; 2026 Tripple A Co. Designs. ${dict.footerRights} <a href="https://tumailife.com" target="_blank" rel="noopener noreferrer">TumaiLife Technologies Co.</a>`;
    }

    // Save language preference across pages
    localStorage.setItem('trippleA_selected_lang', lang);
  }

  // Language Dropdown Interactivity
  if (langToggleBtn && langDropdown) {
    langToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('show');
    });

    document.querySelectorAll('.lang-option').forEach(option => {
      option.addEventListener('click', (e) => {
        const selectedLang = e.target.getAttribute('data-lang');
        applyLanguage(selectedLang);
        langDropdown.classList.remove('show');
      });
    });

    document.addEventListener('click', () => {
      langDropdown.classList.remove('show');
    });
  }

  // Load Saved Language Preference
  const savedLang = localStorage.getItem('trippleA_selected_lang') || 'English';
  applyLanguage(savedLang);
});