<script lang="ts">
	import { t } from '$lib/stores/lang';

	function scrollTo(id: string) {
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({ behavior: 'smooth' });
	}

	const navItems = [
		{ id: 'mission', key: 'nav.mission' },
		{ id: 'scale', key: 'nav.scale' },
		{ id: 'technology', key: 'nav.technology' },
		{ id: 'about', key: 'nav.about' },
		{ id: 'contact', key: 'nav.contact' }
	];
</script>

<footer class="footer">
	<div class="footer-inner">
		<div class="footer-top">
			<div class="footer-brand">
				<div class="footer-logo">
					<span class="footer-k">K</span>
					<span class="footer-name">KARDASHEV SYSTEMS</span>
				</div>
				<p class="footer-tagline">{$t['footer.tagline']}</p>
			</div>

			<div class="footer-nav">
				<h4>{$t['footer.nav']}</h4>
				{#each navItems as item}
					<button onclick={() => scrollTo(item.id)}>{$t[item.key]}</button>
				{/each}
			</div>

			<div class="footer-legal">
				<h4>{$t['footer.legal']}</h4>
				<a href="/">{$t['footer.privacy']}</a>
				<a href="/">{$t['footer.terms']}</a>
				<a href="/">{$t['footer.company']}</a>
			</div>
		</div>

		<div class="footer-bottom">
			<p>{$t['footer.rights']}</p>
		</div>
	</div>
</footer>

<style>
	.footer {
		border-top: 1px solid rgba(255, 255, 255, 0.05);
		padding: 4rem 2rem 2rem;
		background: rgba(0, 0, 0, 0.3);
	}

	.footer-inner {
		max-width: 1100px;
		margin: 0 auto;
	}

	.footer-top {
		display: grid;
		grid-template-columns: 1.5fr 1fr 1fr;
		gap: 3rem;
		margin-bottom: 3rem;
	}

	.footer-logo {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	.footer-k {
		font-family: 'Space Grotesk', monospace;
		font-size: 1.25rem;
		font-weight: 700;
		color: #00d4ff;
	}

	.footer-name {
		font-family: 'Space Grotesk', sans-serif;
		font-size: 0.7rem;
		font-weight: 600;
		letter-spacing: 0.3em;
		color: #808090;
	}

	.footer-tagline {
		font-family: 'Noto Sans JP', 'Inter', sans-serif;
		font-size: 0.85rem;
		font-weight: 300;
		color: #505060;
		line-height: 1.6;
	}

	.footer-nav h4,
	.footer-legal h4 {
		font-family: 'Inter', sans-serif;
		font-size: 0.7rem;
		font-weight: 600;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		color: #606070;
		margin-bottom: 1rem;
	}

	.footer-nav button,
	.footer-legal a {
		display: block;
		background: none;
		border: none;
		font-family: 'Noto Sans JP', 'Inter', sans-serif;
		font-size: 0.8rem;
		color: #505060;
		cursor: pointer;
		padding: 0.3rem 0;
		text-decoration: none;
		text-align: left;
		transition: color 0.2s ease;
	}

	.footer-nav button:hover,
	.footer-legal a:hover {
		color: #00d4ff;
	}

	.footer-bottom {
		border-top: 1px solid rgba(255, 255, 255, 0.04);
		padding-top: 1.5rem;
	}

	.footer-bottom p {
		font-family: 'Inter', sans-serif;
		font-size: 0.7rem;
		color: #404050;
		text-align: center;
	}

	@media (max-width: 768px) {
		.footer {
			padding: 3rem 1.25rem 1.5rem;
		}

		.footer-top {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
	}
</style>
