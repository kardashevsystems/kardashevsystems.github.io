<script lang="ts">
	import { lang, t } from '$lib/stores/lang';

	let scrolled = $state(false);
	let menuOpen = $state(false);

	function handleScroll() {
		scrolled = window.scrollY > 50;
	}

	function toggleLang() {
		lang.update((l) => (l === 'ja' ? 'en' : 'ja'));
	}

	function scrollTo(id: string) {
		menuOpen = false;
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({ behavior: 'smooth' });
	}

	const navLinks = [
		{ id: 'mission', key: 'nav.mission' },
		{ id: 'scale', key: 'nav.scale' },
		{ id: 'technology', key: 'nav.technology' },
		{ id: 'about', key: 'nav.about' },
		{ id: 'contact', key: 'nav.contact' }
	];
</script>

<svelte:window onscroll={handleScroll} />

<nav class:scrolled aria-label="Main navigation">
	<div class="nav-inner">
		<button class="logo" onclick={() => scrollTo('hero')}>
			<span class="logo-k">K</span>
			<span class="logo-text">KARDASHEV</span>
		</button>

		<div class="nav-links" class:open={menuOpen}>
			{#each navLinks as link}
				<button class="nav-link" onclick={() => scrollTo(link.id)}>
					{$t[link.key]}
				</button>
			{/each}
			<button class="lang-toggle" onclick={toggleLang}>
				{$lang === 'ja' ? 'EN' : 'JP'}
			</button>
		</div>

		<button
			class="hamburger"
			class:open={menuOpen}
			onclick={() => (menuOpen = !menuOpen)}
			aria-label="Toggle menu"
		>
			<span></span>
			<span></span>
			<span></span>
		</button>
	</div>
</nav>

<style>
	nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		padding: 1rem 2rem;
		transition: all 0.3s ease;
		background: transparent;
	}

	nav.scrolled {
		background: rgba(10, 10, 15, 0.9);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border-bottom: 1px solid rgba(0, 212, 255, 0.1);
		padding: 0.75rem 2rem;
	}

	.nav-inner {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.logo {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
	}

	.logo-k {
		font-family: 'Space Grotesk', monospace;
		font-size: 1.5rem;
		font-weight: 700;
		color: #00d4ff;
		text-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
	}

	.logo-text {
		font-family: 'Space Grotesk', sans-serif;
		font-size: 0.85rem;
		font-weight: 600;
		letter-spacing: 0.3em;
		color: #e0e0e0;
	}

	.nav-links {
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}

	.nav-link {
		background: none;
		border: none;
		color: #a0a0b0;
		font-family: 'Inter', 'Noto Sans JP', sans-serif;
		font-size: 0.8rem;
		font-weight: 400;
		letter-spacing: 0.05em;
		cursor: pointer;
		padding: 0.5rem 0.75rem;
		border-radius: 6px;
		transition: all 0.2s ease;
	}

	.nav-link:hover {
		color: #00d4ff;
		background: rgba(0, 212, 255, 0.05);
	}

	.lang-toggle {
		background: rgba(0, 212, 255, 0.1);
		border: 1px solid rgba(0, 212, 255, 0.3);
		color: #00d4ff;
		font-family: 'Space Grotesk', monospace;
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.1em;
		cursor: pointer;
		padding: 0.4rem 0.8rem;
		border-radius: 4px;
		margin-left: 0.5rem;
		transition: all 0.2s ease;
	}

	.lang-toggle:hover {
		background: rgba(0, 212, 255, 0.2);
		border-color: #00d4ff;
	}

	.hamburger {
		display: none;
		flex-direction: column;
		gap: 5px;
		background: none;
		border: none;
		cursor: pointer;
		padding: 4px;
		z-index: 1001;
	}

	.hamburger span {
		display: block;
		width: 24px;
		height: 2px;
		background: #e0e0e0;
		transition: all 0.3s ease;
		border-radius: 1px;
	}

	.hamburger.open span:nth-child(1) {
		transform: translateY(7px) rotate(45deg);
	}

	.hamburger.open span:nth-child(2) {
		opacity: 0;
	}

	.hamburger.open span:nth-child(3) {
		transform: translateY(-7px) rotate(-45deg);
	}

	@media (max-width: 768px) {
		nav {
			padding: 0.75rem 1.25rem;
		}

		.hamburger {
			display: flex;
		}

		.nav-links {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: rgba(10, 10, 15, 0.97);
			backdrop-filter: blur(20px);
			-webkit-backdrop-filter: blur(20px);
			flex-direction: column;
			justify-content: center;
			gap: 0.5rem;
			opacity: 0;
			pointer-events: none;
			transition: opacity 0.3s ease;
		}

		.nav-links.open {
			opacity: 1;
			pointer-events: all;
		}

		.nav-link {
			font-size: 1.2rem;
			padding: 0.75rem 1.5rem;
		}

		.lang-toggle {
			margin-left: 0;
			margin-top: 1rem;
			font-size: 0.9rem;
			padding: 0.5rem 1.25rem;
		}
	}
</style>
