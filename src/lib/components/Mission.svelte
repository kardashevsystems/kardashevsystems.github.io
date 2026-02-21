<script lang="ts">
	import { t } from '$lib/stores/lang';
	import { inview } from '$lib/actions/inview';
</script>

<section id="mission" class="mission">
	<div class="container">
		<div class="section-header" use:inview>
			<span class="section-label">{$t['mission.label']}</span>
			<h2 class="section-title">{$t['mission.title']}</h2>
		</div>

		<div class="mission-grid" use:inview>
			<div class="mission-text">
				<p>{$t['mission.p1']}</p>
				<p>{$t['mission.p2']}</p>
			</div>
			<div class="mission-stats">
				<div class="stat">
					<span class="stat-value">{$t['mission.stat1.value']}</span>
					<span class="stat-label">{$t['mission.stat1.label']}</span>
				</div>
				<div class="stat">
					<span class="stat-value">{$t['mission.stat2.value']}</span>
					<span class="stat-label">{$t['mission.stat2.label']}</span>
				</div>
				<div class="stat">
					<span class="stat-value">{$t['mission.stat3.value']}</span>
					<span class="stat-label">{$t['mission.stat3.label']}</span>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.mission {
		padding: 8rem 2rem;
		position: relative;
	}

	.mission::before {
		content: '';
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 1px;
		height: 80px;
		background: linear-gradient(to bottom, transparent, rgba(0, 212, 255, 0.3));
	}

	.container {
		max-width: 1100px;
		margin: 0 auto;
	}

	.mission-grid {
		display: grid;
		grid-template-columns: 1.2fr 0.8fr;
		gap: 4rem;
		align-items: start;
		opacity: 0;
		transform: translateY(30px);
		transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
	}

	:global(.mission-grid.in-view) {
		opacity: 1;
		transform: translateY(0);
	}

	.mission-text p {
		font-family: 'Noto Sans JP', 'Inter', sans-serif;
		font-size: 1rem;
		font-weight: 300;
		line-height: 2;
		color: #a0a0b0;
		margin-bottom: 1.5rem;
	}

	.mission-stats {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		padding-left: 2rem;
		border-left: 1px solid rgba(0, 212, 255, 0.2);
	}

	.stat-value {
		font-family: 'Space Grotesk', monospace;
		font-size: 2.5rem;
		font-weight: 700;
		color: #00d4ff;
		display: block;
		text-shadow: 0 0 30px rgba(0, 212, 255, 0.3);
	}

	.stat-label {
		font-family: 'Noto Sans JP', 'Inter', sans-serif;
		font-size: 0.8rem;
		color: #707080;
		letter-spacing: 0.05em;
	}

	@media (max-width: 768px) {
		.mission {
			padding: 5rem 1.25rem;
		}

		.mission-grid {
			grid-template-columns: 1fr;
			gap: 2.5rem;
		}

		.mission-stats {
			flex-direction: row;
			flex-wrap: wrap;
			padding-left: 0;
			border-left: none;
			border-top: 1px solid rgba(0, 212, 255, 0.2);
			padding-top: 2rem;
			gap: 1.5rem;
		}

		.stat {
			flex: 1;
			min-width: 100px;
		}

		.stat-value {
			font-size: 2rem;
		}
	}
</style>
