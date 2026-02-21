<script lang="ts">
	import { t } from '$lib/stores/lang';
	import { inview } from '$lib/actions/inview';

	const values = [
		{ key: 'value1', icon: '◇' },
		{ key: 'value2', icon: '⬡' },
		{ key: 'value3', icon: '△' }
	];

	const members = ['member1', 'member2', 'member3'];
</script>

<section id="about" class="about">
	<div class="container">
		<div class="section-header" use:inview>
			<span class="section-label">{$t['about.label']}</span>
			<h2 class="section-title">{$t['about.title']}</h2>
			<p class="section-desc">{$t['about.desc']}</p>
		</div>

		<div class="values-grid" use:inview>
			{#each values as v}
				<div class="value-card">
					<span class="value-icon">{v.icon}</span>
					<h3 class="value-title">{$t[`about.${v.key}.title`]}</h3>
					<p class="value-desc">{$t[`about.${v.key}.desc`]}</p>
				</div>
			{/each}
		</div>

		<div class="team-grid" use:inview>
			{#each members as member}
				<div class="team-card">
					<div class="avatar">
						<span class="avatar-initial">{$t[`about.${member}.name`][0]}</span>
					</div>
					<h4 class="member-name">{$t[`about.${member}.name`]}</h4>
					<p class="member-role">{$t[`about.${member}.role`]}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.about {
		padding: 8rem 2rem;
		background: linear-gradient(180deg, transparent 0%, rgba(0, 212, 255, 0.02) 50%, transparent 100%);
	}

	.container {
		max-width: 1100px;
		margin: 0 auto;
	}

	.section-desc {
		font-family: 'Noto Sans JP', 'Inter', sans-serif;
		font-size: 1rem;
		font-weight: 300;
		color: #808090;
		max-width: 600px;
		margin: 0 auto;
		text-align: center;
		line-height: 1.8;
	}

	.values-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
		margin-top: 3rem;
		margin-bottom: 4rem;
		opacity: 0;
		transform: translateY(30px);
		transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
	}

	:global(.values-grid.in-view) {
		opacity: 1;
		transform: translateY(0);
	}

	.value-card {
		text-align: center;
		padding: 2rem 1.5rem;
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 12px;
		transition: all 0.3s ease;
	}

	.value-card:hover {
		border-color: rgba(0, 212, 255, 0.15);
		background: rgba(0, 212, 255, 0.03);
	}

	.value-icon {
		font-size: 1.5rem;
		color: #00d4ff;
		display: block;
		margin-bottom: 1rem;
		opacity: 0.7;
	}

	.value-title {
		font-family: 'Noto Sans JP', 'Space Grotesk', sans-serif;
		font-size: 1rem;
		font-weight: 600;
		color: #e0e0f0;
		margin-bottom: 0.5rem;
	}

	.value-desc {
		font-family: 'Noto Sans JP', 'Inter', sans-serif;
		font-size: 0.85rem;
		font-weight: 300;
		color: #808090;
		line-height: 1.7;
	}

	.team-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
		opacity: 0;
		transform: translateY(30px);
		transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
		transition-delay: 200ms;
	}

	:global(.team-grid.in-view) {
		opacity: 1;
		transform: translateY(0);
	}

	.team-card {
		text-align: center;
		padding: 2rem;
	}

	.avatar {
		width: 64px;
		height: 64px;
		border-radius: 50%;
		border: 1px solid rgba(0, 212, 255, 0.3);
		background: rgba(0, 212, 255, 0.05);
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 1rem;
	}

	.avatar-initial {
		font-family: 'Space Grotesk', monospace;
		font-size: 1.2rem;
		font-weight: 600;
		color: #00d4ff;
	}

	.member-name {
		font-family: 'Noto Sans JP', 'Inter', sans-serif;
		font-size: 0.95rem;
		font-weight: 500;
		color: #e0e0f0;
		margin-bottom: 0.25rem;
	}

	.member-role {
		font-family: 'Inter', 'Noto Sans JP', sans-serif;
		font-size: 0.8rem;
		font-weight: 300;
		color: #606070;
	}

	@media (max-width: 768px) {
		.about {
			padding: 5rem 1.25rem;
		}

		.values-grid {
			grid-template-columns: 1fr;
		}

		.team-grid {
			grid-template-columns: 1fr;
			gap: 0.5rem;
		}
	}
</style>
