/* Kardashev Systems — theme, i18n, and interaction layer */
(function () {
  "use strict";

  /* ------------------------------ Theme ------------------------------ */

  var THEME_KEY = "kardashev-theme";
  var themeToggle = document.getElementById("theme-toggle");
  var themeColors = { dark: "#2E3440", light: "#ECEFF4" };

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", themeColors[theme]);
    localStorage.setItem(THEME_KEY, theme);
    window.dispatchEvent(
      new CustomEvent("themechange", { detail: { theme: theme } })
    );
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme");
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }

  /* ------------------------------ i18n ------------------------------- */

  var LANG_KEY = "kardashev-lang";
  var langToggle = document.getElementById("lang-toggle");

  var copy = {
    ja: {
      title: "Kardashev Systems — AI automation company",
      metaDescription:
        "Kardashev Systemsは、AIで労働を自動化し、経済効率を高め、文明をカルダシェフ・スケールの次の段階へ押し上げるための自律システムを構築しています。",
      skipLink: "本文へスキップ",
      navAbout: "会社概要",
      navSystems: "システム",
      navScale: "スケール",
      navTeam: "チーム",
      navContact: "お問い合わせ",
      langLabel: "Switch to English",
      themeLabel: "テーマを切り替える",
      menuLabel: "メニュー",
      heroEyebrow: "AI AUTOMATION COMPANY — TOKYO · SAN FRANCISCO",
      heroTitle: "労働を自動化し、<br>文明を前進させる。",
      heroLede:
        "Kardashev Systemsは、実務を自動化し、経済効率を高め、文明をカルダシェフ・スケールの次の段階へ押し上げる自律型AIシステムを構築しています。",
      heroCta1: "お問い合わせ",
      heroCta2: "詳しく見る",
      scrollHint: "スクロール",
      statNow: "現在の人類文明",
      statTargetValue: "Type I",
      statTarget: "惑星規模の効率へ",
      statHqValue: "東京 · SF",
      statHq: "拠点",
      aboutTitle: "会社概要",
      aboutP1:
        "Kardashev Systemsは、東京に本社を置きサンフランシスコにもプレゼンスを持つ日米スタートアップです。人間の労働を高度な自律システムで置き換えることに特化したAIオートメーション企業として、ワークフローを運用し、判断し、実務を遂行するソフトウェアを構築しています。",
      aboutP2:
        "会社は意図的にリーンでステルス志向です。目指しているのは小さな改善ではなく、経済全体で仕事のあり方を再構成するシステムレベルのレバレッジです。",
      missionTitle: "ミッション",
      missionStatement:
        "私たちのミッションは、AIであらゆる人間の労働を自動化することです。",
      missionP1:
        "単純作業だけでなく、分析、調整、意思決定、複雑なオペレーションまで。労働がソフトウェアになると、経済はより効率的になり、エネルギー、資源、人間の注意をより良く使えるようになります。",
      systemsTitle: "システム",
      systemsLede:
        "見せるためのデモではなく、実運用に耐える自動化を構築しています。",
      sys1Title: "ワークフロー自動化",
      sys1Desc:
        "実際のプロセスを運用する、エンドツーエンドのAIワークフロー自動化。",
      sys2Title: "自律的意思決定",
      sys2Desc: "判断を伴って行動する、自律的な意思決定・計画システム。",
      sys3Title: "オペレーショナル・インテリジェンス",
      sys3Desc: "稼働中のシステムを横断する、運用インテリジェンスと予測。",
      sys4Title: "経済効率の最適化",
      sys4Desc: "システム規模での経済効率の最適化。",
      scaleTitle: "カルダシェフ・スケール",
      scaleP1:
        "私たちは、カルダシェフ・スケールを文明の方向性を示すフレームワークとして本気で捉えています。文明は、より多くのエネルギーを効果的に利用することで前進し、経済の自動化はその最短経路のひとつです。",
      scaleMarker: "現在 K ≈ 0.73",
      type1Title: "惑星文明",
      type1Desc:
        "惑星が利用できるエネルギーを完全に活用する文明。無駄を減らし、調整を加速するAIシステムは、そこへ到達するためのインフラの一部です。",
      type2Title: "恒星文明",
      type2Desc: "恒星のエネルギーを活用する文明。惑星規模の効率は、その前提条件です。",
      type3Title: "銀河文明",
      type3Desc: "銀河規模のエネルギーを扱う文明。方向性としての北極星です。",
      principlesTitle: "原則",
      principle1: "文明レベルの大胆な野心",
      principle2: "実運用システムにおける技術的卓越性",
      principle3: "見せるだけのデモではなく、複利で効く自動化",
      principle4: "ステルス、集中、長期的時間軸",
      teamTitle: "チーム",
      teamP1:
        "私たちは、アイビーリーグのトップ研究機関やシリコンバレーの主要テクノロジー企業出身の、経験豊富な研究者とエンジニアによる専任チームを擁しています。",
      teamP2:
        "拠点は東京ですが、チームは国際的です。業界のベテランと実績ある科学者が、国境をまたいで協働しています。",
      contactTitle: "お問い合わせ",
      contactP1:
        "事業提携、パートナーシップ、あるいはAIオートメーションに関する真剣なご相談は、メールでご連絡ください。",
      footerHq: "東京 · サンフランシスコ",
      navHome: "ホーム",
      notFoundTitle: "ページが見つかりません",
      notFoundLede: "このアドレスにはページがありません。",
      notFoundHome: "ホームへ戻る",
      notFoundDocTitle: "404 — Kardashev Systems"
    },
    en: {
      title: "Kardashev Systems — AI automation company",
      metaDescription:
        "Kardashev Systems is an AI automation company building autonomous systems to automate work, increase economic efficiency, and move civilization up the Kardashev Scale.",
      skipLink: "Skip to content",
      navAbout: "About",
      navSystems: "Systems",
      navScale: "Scale",
      navTeam: "Team",
      navContact: "Contact",
      langLabel: "日本語に切り替える",
      themeLabel: "Switch theme",
      menuLabel: "Menu",
      heroEyebrow: "AI AUTOMATION COMPANY — TOKYO · SAN FRANCISCO",
      heroTitle: "Automating work.<br>Advancing civilization.",
      heroLede:
        "Kardashev Systems builds autonomous AI systems that automate real work, increase economic efficiency, and help move civilization up the Kardashev Scale.",
      heroCta1: "Get in touch",
      heroCta2: "Learn more",
      scrollHint: "Scroll",
      statNow: "Humanity today",
      statTargetValue: "Type I",
      statTarget: "Toward planetary efficiency",
      statHqValue: "Tokyo · SF",
      statHq: "Locations",
      aboutTitle: "About",
      aboutP1:
        "Kardashev Systems is a Japanese-American startup with headquarters in Tokyo and a presence in San Francisco. We are an AI automation company focused on replacing human labor with capable autonomous systems that can operate workflows, make decisions, and carry out meaningful work.",
      aboutP2:
        "The company is intentionally lean and stealth-oriented. The aim is not incremental tooling, but systems-level leverage: using AI to reshape how work gets done across the economy.",
      missionTitle: "Mission",
      missionStatement: "Our mission is to automate all human labor with AI.",
      missionP1:
        "Not only repetitive tasks, but analysis, coordination, decision-making, and complex operational work. As labor becomes software, the economy becomes more efficient — energy, resources, and human attention are put to better use.",
      systemsTitle: "Systems",
      systemsLede:
        "We build automation that survives production — not demos that impress.",
      sys1Title: "Workflow automation",
      sys1Desc:
        "End-to-end AI workflow automation that operates real processes.",
      sys2Title: "Autonomous decisions",
      sys2Desc: "Autonomous decision and planning systems that act with judgment.",
      sys3Title: "Operational intelligence",
      sys3Desc: "Operational intelligence and forecasting across live systems.",
      sys4Title: "Economic efficiency",
      sys4Desc: "Economic efficiency optimization at system scale.",
      scaleTitle: "Kardashev Scale",
      scaleP1:
        "We take the Kardashev Scale seriously as a directional framework. A civilization advances by harnessing more energy effectively, and economic automation is one of the clearest paths upward.",
      scaleMarker: "Today K ≈ 0.73",
      type1Title: "Planetary",
      type1Desc:
        "A civilization harnessing the full energy available to its planet. AI systems that eliminate waste and accelerate coordination are part of the infrastructure that gets us there.",
      type2Title: "Stellar",
      type2Desc:
        "A civilization harnessing the energy of its star. Planetary efficiency is the prerequisite.",
      type3Title: "Galactic",
      type3Desc:
        "A civilization commanding energy on a galactic scale. The north star of direction.",
      principlesTitle: "Principles",
      principle1: "Bold civilizational ambition",
      principle2: "Technical excellence in deployed systems",
      principle3: "Automation that compounds, not demos that impress",
      principle4: "Stealth, focus, and long time horizons",
      teamTitle: "Team",
      teamP1:
        "We have a dedicated team of researchers and engineers from top Ivy League institutions and Silicon Valley technology companies, including industry veterans and accomplished scientists.",
      teamP2:
        "We are based in Tokyo, but our team is international — collaborating across borders.",
      contactTitle: "Contact",
      contactP1:
        "For business inquiries, partnerships, or serious conversations about AI automation, reach us by email.",
      footerHq: "Tokyo · San Francisco",
      navHome: "Home",
      notFoundTitle: "Page not found",
      notFoundLede: "This page doesn’t exist.",
      notFoundHome: "Back to home",
      notFoundDocTitle: "404 — Kardashev Systems"
    }
  };

  function setLanguage(lang) {
    var dict = copy[lang];
    document.documentElement.lang = lang;
    var is404 = document.documentElement.getAttribute("data-page") === "404";
    document.title = is404
      ? dict.notFoundDocTitle || "404 — Kardashev Systems"
      : dict.title;

    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", dict.metaDescription);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    if (langToggle) {
      langToggle.textContent = lang === "ja" ? "EN" : "日本語";
      langToggle.setAttribute("aria-label", dict.langLabel);
    }
    if (themeToggle) themeToggle.setAttribute("aria-label", dict.themeLabel);
    var menuBtn = document.getElementById("menu-toggle");
    if (menuBtn) menuBtn.setAttribute("aria-label", dict.menuLabel);

    localStorage.setItem(LANG_KEY, lang);
  }

  if (langToggle) {
    langToggle.addEventListener("click", function () {
      var current = document.documentElement.lang === "ja" ? "ja" : "en";
      setLanguage(current === "ja" ? "en" : "ja");
    });
  }

  function browserPrefersJapanese() {
    var list = [];
    if (navigator.languages && navigator.languages.length) {
      list = Array.prototype.slice.call(navigator.languages);
    } else if (navigator.language) {
      list = [navigator.language];
    }
    for (var i = 0; i < list.length; i++) {
      var tag = String(list[i] || "").toLowerCase().replace(/_/g, "-");
      if (tag === "ja" || tag.indexOf("ja-") === 0) return true;
    }
    return false;
  }

  function initialLanguage() {
    var stored = localStorage.getItem(LANG_KEY);
    if (stored === "ja" || stored === "en") return stored;
    return browserPrefersJapanese() ? "ja" : "en";
  }

  setLanguage(initialLanguage());

  /* --------------------------- Header state --------------------------- */

  var header = document.getElementById("site-header");

  function onScroll() {
    if (header) header.classList.toggle("scrolled", window.scrollY > 8);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* --------------------------- Mobile menu ---------------------------- */

  var menuToggle = document.getElementById("menu-toggle");
  var nav = document.getElementById("site-nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(open));
    });

    nav.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        nav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ------------------------- Reveal on scroll ------------------------- */

  var reveals = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("in");
    });
  }

  /* ------------------------ Active nav section ------------------------ */

  var navLinks = document.querySelectorAll(".site-nav a[href^='#']");
  var sectionsById = {};

  navLinks.forEach(function (link) {
    var section = document.querySelector(link.getAttribute("href"));
    if (section) sectionsById[section.id] = link;
  });

  if ("IntersectionObserver" in window) {
    var sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var link = sectionsById[entry.target.id];
          if (!link) return;
          if (entry.isIntersecting) {
            navLinks.forEach(function (l) {
              l.classList.remove("active");
            });
            link.classList.add("active");
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    Object.keys(sectionsById).forEach(function (id) {
      sectionObserver.observe(document.getElementById(id));
    });
  }

  /* ------------------------ Hero scene fade-out ----------------------- */

  var heroScene = document.getElementById("hero-scene");

  if (heroScene) {
    window.addEventListener(
      "scroll",
      function () {
        var h = window.innerHeight || 1;
        var t = Math.min(window.scrollY / (h * 0.85), 1);
        heroScene.style.opacity = String(1 - t);
      },
      { passive: true }
    );
  }

  /* ------------------------------ Footer ------------------------------ */

  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
