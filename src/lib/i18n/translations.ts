export type Lang = 'ja' | 'en';

export const translations: Record<Lang, Record<string, string>> = {
	ja: {
		// Nav
		'nav.mission': 'ミッション',
		'nav.scale': 'カルダシェフ・スケール',
		'nav.technology': 'テクノロジー',
		'nav.about': '会社概要',
		'nav.contact': 'お問い合わせ',

		// Hero
		'hero.tagline': '人類の可能性を、宇宙規模で解放する',
		'hero.subtitle': 'AIによる労働の自動化で、文明を次のステージへ。',
		'hero.cta.primary': 'ミッションを見る',
		'hero.cta.secondary': 'お問い合わせ',

		// Mission
		'mission.label': 'OUR MISSION',
		'mission.title': '労働を自動化し、文明を加速させる',
		'mission.p1':
			'人類は長い間、日常的な労働に多大なエネルギーを費やしてきました。Kardashev Systemsは、AIの力で定型業務を自動化し、人間の知的資源をより大きな課題に振り向けます。',
		'mission.p2':
			'私たちの目標は明確です——地球規模のエネルギー活用から恒星系の開拓、そして銀河文明へ。AIが労働を引き受けることで、人類はカルダシェフ・スケールを駆け上がることができるのです。',
		'mission.stat1.value': '10x',
		'mission.stat1.label': '生産性の向上',
		'mission.stat2.value': '500+',
		'mission.stat2.label': '自動化済みプロセス',
		'mission.stat3.value': '99.9%',
		'mission.stat3.label': '稼働率',

		// Kardashev Scale
		'scale.label': 'KARDASHEV SCALE',
		'scale.title': '文明の進化を、スケールで描く',
		'scale.type1.title': 'Type I — 惑星文明',
		'scale.type1.desc':
			'地球上の全エネルギー資源を完全に活用する段階。再生可能エネルギー、核融合、AIによる最適化で、惑星規模の課題を克服します。',
		'scale.type1.power': '~10¹⁶ W',
		'scale.type1.status': '現在の目標',
		'scale.type2.title': 'Type II — 恒星文明',
		'scale.type2.desc':
			'恒星のエネルギー全体を利用する段階。ダイソン球のような構造物を構築し、太陽系全体をインフラストラクチャとして活用します。',
		'scale.type2.power': '~10²⁶ W',
		'scale.type2.status': '次世代構想',
		'scale.type3.title': 'Type III — 銀河文明',
		'scale.type3.desc':
			'銀河全体のエネルギーを制御する究極の段階。数十億の恒星系を結びつけ、銀河規模のネットワークを形成します。',
		'scale.type3.power': '~10³⁶ W',
		'scale.type3.status': '究極のビジョン',

		// Technology
		'tech.label': 'TECHNOLOGY',
		'tech.title': 'AIが切り拓く、次世代ソリューション',
		'tech.card1.title': 'インテリジェント自動化',
		'tech.card1.desc':
			'機械学習と自然言語処理を活用し、複雑な業務プロセスをエンドツーエンドで自動化。人的ミスを排除し、24時間365日の稼働を実現します。',
		'tech.card2.title': '予測分析エンジン',
		'tech.card2.desc':
			'大規模データから未来のトレンドを予測。需要予測、リスク管理、戦略立案をAIが支援し、意思決定の精度を飛躍的に向上させます。',
		'tech.card3.title': 'エネルギー最適化AI',
		'tech.card3.desc':
			'エネルギー消費パターンを分析し、リアルタイムで最適化。持続可能な社会の実現に向けて、資源の無駄を最小限に抑えます。',
		'tech.card4.title': '自律型AIエージェント',
		'tech.card4.desc':
			'自律的に判断し行動するAIエージェントが、複数のタスクを並行処理。人間の指示を待たず、最適な結果を導き出します。',

		// About
		'about.label': 'ABOUT US',
		'about.title': '宇宙規模の野望を持つチーム',
		'about.desc':
			'Kardashev Systemsは、AIと宇宙工学の交差点に立つスタートアップです。私たちは、テクノロジーが人類の限界を押し広げると信じています。',
		'about.value1.title': '大胆な構想',
		'about.value1.desc': '惑星規模で思考し、銀河規模で行動する',
		'about.value2.title': '技術的卓越性',
		'about.value2.desc': '最先端のAI研究を、実用的なソリューションに変換する',
		'about.value3.title': '人類第一主義',
		'about.value3.desc': 'テクノロジーは人類を解放するために存在する',
		'about.member1.name': '田中 洋介',
		'about.member1.role': 'CEO & 共同創業者',
		'about.member2.name': '佐藤 美咲',
		'about.member2.role': 'CTO & 共同創業者',
		'about.member3.name': 'Alex Chen',
		'about.member3.role': 'VP of AI Research',

		// Contact
		'contact.label': 'CONTACT',
		'contact.title': '未来を共に創りませんか',
		'contact.desc':
			'カルダシェフ・スケールを駆け上がる旅に、あなたも参加しませんか。お気軽にお問い合わせください。',
		'contact.name': 'お名前',
		'contact.email': 'メールアドレス',
		'contact.company': '会社名',
		'contact.message': 'メッセージ',
		'contact.submit': '送信する',
		'contact.info.title': 'お問い合わせ先',
		'contact.info.email': 'contact@kardashev.systems',
		'contact.info.location': '東京都渋谷区',

		// Footer
		'footer.tagline': '人類の可能性を、宇宙規模で解放する',
		'footer.rights': '© 2026 Kardashev Systems. All rights reserved.',
		'footer.nav': 'ナビゲーション',
		'footer.legal': '法的情報',
		'footer.privacy': 'プライバシーポリシー',
		'footer.terms': '利用規約',
		'footer.company': '特定商取引法に基づく表記'
	},
	en: {
		// Nav
		'nav.mission': 'Mission',
		'nav.scale': 'Kardashev Scale',
		'nav.technology': 'Technology',
		'nav.about': 'About',
		'nav.contact': 'Contact',

		// Hero
		'hero.tagline': "Unleashing Humanity's Potential at Cosmic Scale",
		'hero.subtitle': 'Automating labor through AI to propel civilization forward.',
		'hero.cta.primary': 'Our Mission',
		'hero.cta.secondary': 'Contact Us',

		// Mission
		'mission.label': 'OUR MISSION',
		'mission.title': 'Automate Work. Accelerate Civilization.',
		'mission.p1':
			'For millennia, humanity has spent vast energy on routine labor. Kardashev Systems harnesses AI to automate repetitive tasks, redirecting human intellect toward the grand challenges that define our future.',
		'mission.p2':
			'Our goal is clear — from planetary-scale energy utilization to stellar system development and galactic civilization. By letting AI handle the work, humanity can ascend the Kardashev Scale.',
		'mission.stat1.value': '10x',
		'mission.stat1.label': 'Productivity Gain',
		'mission.stat2.value': '500+',
		'mission.stat2.label': 'Automated Processes',
		'mission.stat3.value': '99.9%',
		'mission.stat3.label': 'Uptime',

		// Kardashev Scale
		'scale.label': 'KARDASHEV SCALE',
		'scale.title': 'Mapping the Evolution of Civilization',
		'scale.type1.title': 'Type I — Planetary Civilization',
		'scale.type1.desc':
			'Full utilization of all energy resources on Earth. Renewable energy, fusion power, and AI optimization to overcome planetary-scale challenges.',
		'scale.type1.power': '~10¹⁶ W',
		'scale.type1.status': 'Current Goal',
		'scale.type2.title': 'Type II — Stellar Civilization',
		'scale.type2.desc':
			'Harnessing the total energy output of a star. Constructing Dyson sphere-like structures and utilizing the entire solar system as infrastructure.',
		'scale.type2.power': '~10²⁶ W',
		'scale.type2.status': 'Next Generation',
		'scale.type3.title': 'Type III — Galactic Civilization',
		'scale.type3.desc':
			'The ultimate stage of controlling galactic-scale energy. Connecting billions of star systems into a galaxy-wide network.',
		'scale.type3.power': '~10³⁶ W',
		'scale.type3.status': 'Ultimate Vision',

		// Technology
		'tech.label': 'TECHNOLOGY',
		'tech.title': 'Next-Generation Solutions Powered by AI',
		'tech.card1.title': 'Intelligent Automation',
		'tech.card1.desc':
			'End-to-end automation of complex business processes using machine learning and NLP. Eliminate human error with 24/7 operation.',
		'tech.card2.title': 'Predictive Analytics Engine',
		'tech.card2.desc':
			'Forecast future trends from large-scale data. AI-powered demand forecasting, risk management, and strategic planning.',
		'tech.card3.title': 'Energy Optimization AI',
		'tech.card3.desc':
			'Analyze energy consumption patterns and optimize in real-time. Minimize waste for a sustainable future.',
		'tech.card4.title': 'Autonomous AI Agents',
		'tech.card4.desc':
			'Self-directed AI agents that make decisions and act autonomously, processing multiple tasks in parallel for optimal outcomes.',

		// About
		'about.label': 'ABOUT US',
		'about.title': 'A Team with Cosmic Ambition',
		'about.desc':
			'Kardashev Systems is a startup at the intersection of AI and space engineering. We believe technology can push the boundaries of human civilization.',
		'about.value1.title': 'Bold Vision',
		'about.value1.desc': 'Think planetary. Act galactic.',
		'about.value2.title': 'Technical Excellence',
		'about.value2.desc': 'Transforming cutting-edge AI research into practical solutions.',
		'about.value3.title': 'Humanity First',
		'about.value3.desc': 'Technology exists to liberate humanity.',
		'about.member1.name': 'Yosuke Tanaka',
		'about.member1.role': 'CEO & Co-founder',
		'about.member2.name': 'Misaki Sato',
		'about.member2.role': 'CTO & Co-founder',
		'about.member3.name': 'Alex Chen',
		'about.member3.role': 'VP of AI Research',

		// Contact
		'contact.label': 'CONTACT',
		'contact.title': "Let's Build the Future Together",
		'contact.desc':
			"Join us on the journey up the Kardashev Scale. We'd love to hear from you.",
		'contact.name': 'Name',
		'contact.email': 'Email',
		'contact.company': 'Company',
		'contact.message': 'Message',
		'contact.submit': 'Send Message',
		'contact.info.title': 'Get in Touch',
		'contact.info.email': 'contact@kardashev.systems',
		'contact.info.location': 'Shibuya, Tokyo',

		// Footer
		'footer.tagline': "Unleashing Humanity's Potential at Cosmic Scale",
		'footer.rights': '© 2026 Kardashev Systems. All rights reserved.',
		'footer.nav': 'Navigation',
		'footer.legal': 'Legal',
		'footer.privacy': 'Privacy Policy',
		'footer.terms': 'Terms of Service',
		'footer.company': 'Company Information'
	}
};
