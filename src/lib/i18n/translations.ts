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
		'hero.tagline': 'AIで、すべての仕事を再定義する',
		'hero.subtitle': 'あらゆる人間の労働をAIで自動化し、文明を次のステージへ押し上げる。',
		'hero.cta.primary': 'ミッションを見る',
		'hero.cta.secondary': 'お問い合わせ',

		// Mission
		'mission.label': 'OUR MISSION',
		'mission.title': 'すべての労働を自動化し、文明を加速させる',
		'mission.p1':
			'人類は何千年もの間、労働に膨大なエネルギーを費やしてきました。Kardashev Systemsは、AIエージェントであらゆる人間の仕事を自動化します。単純作業だけでなく、意思決定、分析、創造的業務まで——すべてをAIが担います。',
		'mission.p2':
			'AIが労働を引き受けることで、経済はより効率的に回り始めます。効率化が進めば、地球上のエネルギーをより高度に活用できるようになる。それこそが、カルダシェフ・スケールを上昇する道なのです。',
		'mission.stat1.value': '10x',
		'mission.stat1.label': '生産性の向上',
		'mission.stat2.value': '500+',
		'mission.stat2.label': '自動化済みプロセス',
		'mission.stat3.value': '99.9%',
		'mission.stat3.label': '稼働率',

		// Kardashev Scale
		'scale.label': 'KARDASHEV SCALE',
		'scale.title': 'なぜ労働の自動化が文明を進化させるのか',
		'scale.type1.title': 'Type I — 惑星文明',
		'scale.type1.desc':
			'地球上の全エネルギーを完全に活用する段階。AIによる経済の全面的な効率化が、エネルギー利用の最適化を実現し、人類をType I文明へと導きます。',
		'scale.type1.power': '~10¹⁶ W',
		'scale.type1.status': '現在の目標',
		'scale.type2.title': 'Type II — 恒星文明',
		'scale.type2.desc':
			'恒星のエネルギー全体を利用する段階。Type Iを達成した文明が、さらなるエネルギー源の開拓へと向かう未来。AIが築いた効率的な経済基盤がその土台となります。',
		'scale.type2.power': '~10²⁶ W',
		'scale.type2.status': '次世代構想',
		'scale.type3.title': 'Type III — 銀河文明',
		'scale.type3.desc':
			'銀河全体のエネルギーを制御する究極の段階。AIによる自動化と効率化の延長線上にある、人類文明の最終的な到達点です。',
		'scale.type3.power': '~10³⁶ W',
		'scale.type3.status': '究極のビジョン',

		// Technology
		'tech.label': 'TECHNOLOGY',
		'tech.title': 'AIエージェントが、あらゆる仕事を引き継ぐ',
		'tech.card1.title': '業務プロセスの完全自動化',
		'tech.card1.desc':
			'機械学習と自然言語処理を活用し、複雑な業務プロセスをエンドツーエンドで自動化。人的ミスを排除し、24時間365日の稼働を実現します。',
		'tech.card2.title': '意思決定AIエンジン',
		'tech.card2.desc':
			'大規模データから未来のトレンドを予測し、最適な判断を自動で下す。需要予測、リスク管理、戦略立案まで、人間の判断をAIが代替します。',
		'tech.card3.title': '経済効率の最適化',
		'tech.card3.desc':
			'あらゆる産業のリソース配分を分析し、リアルタイムで最適化。無駄を排除し、経済全体の効率を最大化することで、エネルギー利用を根本から変革します。',
		'tech.card4.title': '自律型AIエージェント',
		'tech.card4.desc':
			'自律的に判断し行動するAIエージェントが、複数のタスクを並行処理。あらゆる職種の業務を、人間の指示なしに遂行します。',

		// About
		'about.label': 'ABOUT US',
		'about.title': '文明の未来を設計するチーム',
		'about.desc':
			'Kardashev Systemsは、AIによる労働の自動化に特化したスタートアップです。あらゆる人間の仕事をAIエージェントで代替し、より効率的な経済を構築することで、人類文明を次のレベルへ引き上げます。',
		'about.value1.title': '大胆な構想',
		'about.value1.desc': 'すべての仕事をAIで自動化するという、文明レベルの変革を目指す',
		'about.value2.title': '技術的卓越性',
		'about.value2.desc': '最先端のAI研究を、実用的なソリューションに変換する',
		'about.value3.title': '人類の解放',
		'about.value3.desc': '労働からの解放が、人類の可能性を最大化する',
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
			'AIによる労働の自動化にご関心をお持ちの方は、ぜひお問い合わせください。',
		'contact.name': 'お名前',
		'contact.email': 'メールアドレス',
		'contact.company': '会社名',
		'contact.message': 'メッセージ',
		'contact.submit': '送信する',
		'contact.info.title': 'お問い合わせ先',
		'contact.info.email': 'contact@kardashev.systems',
		'contact.info.location': '東京都渋谷区',

		// Footer
		'footer.tagline': 'AIで、すべての仕事を再定義する',
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
		'hero.tagline': 'Redefining Every Job with AI',
		'hero.subtitle': 'Automating all human labor with AI to propel civilization to the next level.',
		'hero.cta.primary': 'Our Mission',
		'hero.cta.secondary': 'Contact Us',

		// Mission
		'mission.label': 'OUR MISSION',
		'mission.title': 'Automate All Work. Accelerate Civilization.',
		'mission.p1':
			'For millennia, humanity has poured vast energy into labor. Kardashev Systems builds AI agents that automate all human jobs — not just repetitive tasks, but decision-making, analysis, and creative work. Everything.',
		'mission.p2':
			'When AI takes over labor, the economy runs more efficiently. Greater efficiency means better utilization of planetary energy. That is the path up the Kardashev Scale.',
		'mission.stat1.value': '10x',
		'mission.stat1.label': 'Productivity Gain',
		'mission.stat2.value': '500+',
		'mission.stat2.label': 'Automated Processes',
		'mission.stat3.value': '99.9%',
		'mission.stat3.label': 'Uptime',

		// Kardashev Scale
		'scale.label': 'KARDASHEV SCALE',
		'scale.title': 'Why Automating Labor Advances Civilization',
		'scale.type1.title': 'Type I — Planetary Civilization',
		'scale.type1.desc':
			'Full utilization of all energy on Earth. AI-driven economic efficiency optimizes energy use across every industry, bringing humanity to Type I.',
		'scale.type1.power': '~10¹⁶ W',
		'scale.type1.status': 'Current Goal',
		'scale.type2.title': 'Type II — Stellar Civilization',
		'scale.type2.desc':
			'Harnessing the total energy of a star. A future built on the efficient economic foundation that AI creates at the planetary level.',
		'scale.type2.power': '~10²⁶ W',
		'scale.type2.status': 'Next Generation',
		'scale.type3.title': 'Type III — Galactic Civilization',
		'scale.type3.desc':
			'Controlling energy at the galactic scale. The ultimate destination on the trajectory that begins with AI automation and economic efficiency.',
		'scale.type3.power': '~10³⁶ W',
		'scale.type3.status': 'Ultimate Vision',

		// Technology
		'tech.label': 'TECHNOLOGY',
		'tech.title': 'AI Agents That Take Over Every Job',
		'tech.card1.title': 'Full Process Automation',
		'tech.card1.desc':
			'End-to-end automation of complex business processes using machine learning and NLP. Eliminate human error with 24/7 operation.',
		'tech.card2.title': 'Decision-Making AI Engine',
		'tech.card2.desc':
			'Predict future trends from large-scale data and make optimal decisions automatically. From demand forecasting to risk management to strategic planning.',
		'tech.card3.title': 'Economic Efficiency Optimization',
		'tech.card3.desc':
			'Analyze resource allocation across industries and optimize in real-time. Eliminate waste and maximize economic efficiency to fundamentally transform energy use.',
		'tech.card4.title': 'Autonomous AI Agents',
		'tech.card4.desc':
			'Self-directed AI agents that make decisions and act autonomously, executing tasks across every job category without human instruction.',

		// About
		'about.label': 'ABOUT US',
		'about.title': 'A Team Designing the Future of Civilization',
		'about.desc':
			'Kardashev Systems is a startup focused on automating labor with AI. By replacing all human jobs with AI agents and building a more efficient economy, we elevate civilization to the next level.',
		'about.value1.title': 'Bold Vision',
		'about.value1.desc': 'Automating every job — a civilization-level transformation.',
		'about.value2.title': 'Technical Excellence',
		'about.value2.desc': 'Transforming cutting-edge AI research into practical solutions.',
		'about.value3.title': 'Human Liberation',
		'about.value3.desc': 'Freedom from labor unlocks the full potential of humanity.',
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
			"Interested in automating labor with AI? We'd love to hear from you.",
		'contact.name': 'Name',
		'contact.email': 'Email',
		'contact.company': 'Company',
		'contact.message': 'Message',
		'contact.submit': 'Send Message',
		'contact.info.title': 'Get in Touch',
		'contact.info.email': 'contact@kardashev.systems',
		'contact.info.location': 'Shibuya, Tokyo',

		// Footer
		'footer.tagline': 'Redefining Every Job with AI',
		'footer.rights': '© 2026 Kardashev Systems. All rights reserved.',
		'footer.nav': 'Navigation',
		'footer.legal': 'Legal',
		'footer.privacy': 'Privacy Policy',
		'footer.terms': 'Terms of Service',
		'footer.company': 'Company Information'
	}
};
