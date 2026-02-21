<script lang="ts">
	import { t } from '$lib/stores/lang';
	import { inview } from '$lib/actions/inview';

	const cards = [
		{
			key: 'card1',
			icon: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 8h32v32H8z"/><path d="M16 20h16M16 28h10"/><circle cx="36" cy="36" r="8" fill="rgba(0,212,255,0.1)"/><path d="M33 36h6M36 33v6"/></svg>`
		},
		{
			key: 'card2',
			icon: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="4,36 12,24 20,30 28,16 36,22 44,12"/><line x1="4" y1="42" x2="44" y2="42"/><circle cx="44" cy="12" r="3" fill="rgba(0,212,255,0.2)"/></svg>`
		},
		{
			key: 'card3',
			icon: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="24" r="8"/><circle cx="24" cy="24" r="16"/><path d="M24 4v4M24 40v4M4 24h4M40 24h4"/><circle cx="24" cy="24" r="3" fill="rgba(0,212,255,0.3)"/></svg>`
		},
		{
			key: 'card4',
			icon: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="16" r="8"/><path d="M12 40c0-6.627 5.373-12 12-12s12 5.373 12 12"/><path d="M32 12l6-6M36 6h-6v6"/><circle cx="24" cy="16" r="2" fill="rgba(0,212,255,0.3)"/></svg>`
		}
	];
</script>

<section id="technology" class="technology">
	<div class="container">
		<div class="section-header" use:inview>
			<span class="section-label">{$t['tech.label']}</span>
			<h2 class="section-title">{$t['tech.title']}</h2>
		</div>

		<div class="tech-grid">
			{#each cards as card, i}
				<div class="tech-card" use:inview style="--delay: {i * 100}ms">
					<div class="tech-icon">
						{@html card.icon}
					</div>
					<h3 class="tech-title">{$t[`tech.${card.key}.title`]}</h3>
					<p class="tech-desc">{$t[`tech.${card.key}.desc`]}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.technology {
		padding: 8rem 2rem;
	}

	.container {
		max-width: 1100px;
		margin: 0 auto;
	}

	.tech-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
	}

	.tech-card {
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 12px;
		padding: 2rem;
		transition: all 0.3s ease;
		opacity: 0;
		transform: translateY(20px);
		transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
		transition-delay: var(--delay);
	}

	:global(.tech-card.in-view) {
		opacity: 1;
		transform: translateY(0);
	}

	.tech-card:hover {
		background: rgba(0, 212, 255, 0.03);
		border-color: rgba(0, 212, 255, 0.15);
		transform: translateY(-4px);
	}

	.tech-icon {
		width: 48px;
		height: 48px;
		color: #00d4ff;
		margin-bottom: 1.25rem;
		opacity: 0.8;
	}

	.tech-icon :global(svg) {
		width: 100%;
		height: 100%;
	}

	.tech-title {
		font-family: 'Noto Sans JP', 'Space Grotesk', sans-serif;
		font-size: 1.1rem;
		font-weight: 600;
		color: #e0e0f0;
		margin-bottom: 0.75rem;
	}

	.tech-desc {
		font-family: 'Noto Sans JP', 'Inter', sans-serif;
		font-size: 0.85rem;
		font-weight: 300;
		line-height: 1.8;
		color: #808090;
	}

	@media (max-width: 768px) {
		.technology {
			padding: 5rem 1.25rem;
		}

		.tech-grid {
			grid-template-columns: 1fr;
		}

		.tech-card {
			padding: 1.5rem;
		}
	}
</style>
