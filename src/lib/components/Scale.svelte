<script lang="ts">
	import { t } from '$lib/stores/lang';
	import { inview } from '$lib/actions/inview';

	const types = [
		{ num: 'I', key: 'type1', color: '#00d4ff', glow: 'rgba(0, 212, 255, 0.15)' },
		{ num: 'II', key: 'type2', color: '#6366f1', glow: 'rgba(99, 102, 241, 0.15)' },
		{ num: 'III', key: 'type3', color: '#a855f7', glow: 'rgba(168, 85, 247, 0.15)' }
	];
</script>

<section id="scale" class="scale">
	<div class="container">
		<div class="section-header" use:inview>
			<span class="section-label">{$t['scale.label']}</span>
			<h2 class="section-title">{$t['scale.title']}</h2>
		</div>

		<div class="scale-timeline">
			<div class="timeline-line"></div>
			{#each types as type, i}
				<div class="scale-card" use:inview style="--delay: {i * 150}ms; --accent: {type.color}; --glow: {type.glow}">
					<div class="card-marker">
						<div class="marker-dot"></div>
					</div>
					<div class="card-content">
						<div class="card-header">
							<span class="type-badge">TYPE {type.num}</span>
							<span class="type-power">{$t[`scale.${type.key}.power`]}</span>
						</div>
						<h3 class="card-title">{$t[`scale.${type.key}.title`]}</h3>
						<p class="card-desc">{$t[`scale.${type.key}.desc`]}</p>
						<div class="card-status">
							<span class="status-dot"></span>
							{$t[`scale.${type.key}.status`]}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.scale {
		padding: 8rem 2rem;
		position: relative;
		background: linear-gradient(180deg, transparent 0%, rgba(0, 212, 255, 0.02) 50%, transparent 100%);
	}

	.container {
		max-width: 900px;
		margin: 0 auto;
	}

	.scale-timeline {
		position: relative;
		margin-top: 1rem;
	}

	.timeline-line {
		position: absolute;
		left: 24px;
		top: 0;
		bottom: 0;
		width: 1px;
		background: linear-gradient(to bottom, rgba(0, 212, 255, 0.4), rgba(168, 85, 247, 0.4));
	}

	.scale-card {
		position: relative;
		padding-left: 64px;
		margin-bottom: 3rem;
		opacity: 0;
		transform: translateX(-20px);
		transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
		transition-delay: var(--delay);
	}

	:global(.scale-card.in-view) {
		opacity: 1;
		transform: translateX(0);
	}

	.card-marker {
		position: absolute;
		left: 16px;
		top: 1.5rem;
		width: 17px;
		height: 17px;
		border-radius: 50%;
		border: 2px solid var(--accent);
		background: #0a0a0f;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.marker-dot {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: var(--accent);
		box-shadow: 0 0 10px var(--accent);
	}

	.card-content {
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 12px;
		padding: 2rem;
		transition: all 0.3s ease;
	}

	.card-content:hover {
		background: var(--glow);
		border-color: rgba(255, 255, 255, 0.1);
		transform: translateY(-2px);
	}

	.card-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 0.75rem;
	}

	.type-badge {
		font-family: 'Space Grotesk', monospace;
		font-size: 0.7rem;
		font-weight: 600;
		letter-spacing: 0.2em;
		color: var(--accent);
		background: rgba(255, 255, 255, 0.03);
		padding: 0.3rem 0.75rem;
		border-radius: 4px;
		border: 1px solid rgba(255, 255, 255, 0.06);
	}

	.type-power {
		font-family: 'Space Grotesk', monospace;
		font-size: 0.85rem;
		font-weight: 500;
		color: var(--accent);
		opacity: 0.7;
	}

	.card-title {
		font-family: 'Noto Sans JP', 'Space Grotesk', sans-serif;
		font-size: 1.3rem;
		font-weight: 600;
		color: #e0e0f0;
		margin-bottom: 0.75rem;
	}

	.card-desc {
		font-family: 'Noto Sans JP', 'Inter', sans-serif;
		font-size: 0.9rem;
		font-weight: 300;
		line-height: 1.8;
		color: #808090;
		margin-bottom: 1rem;
	}

	.card-status {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-family: 'Inter', 'Noto Sans JP', sans-serif;
		font-size: 0.75rem;
		font-weight: 500;
		color: var(--accent);
		letter-spacing: 0.05em;
		opacity: 0.8;
	}

	.status-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--accent);
		animation: blink 2s ease-in-out infinite;
	}

	@keyframes blink {
		0%, 100% { opacity: 1; }
		50% { opacity: 0.3; }
	}

	@media (max-width: 768px) {
		.scale {
			padding: 5rem 1.25rem;
		}

		.card-content {
			padding: 1.5rem;
		}

		.card-title {
			font-size: 1.1rem;
		}
	}
</style>
