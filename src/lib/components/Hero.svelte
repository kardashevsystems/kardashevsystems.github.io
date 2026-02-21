<script lang="ts">
	import { t } from '$lib/stores/lang';
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;

	function scrollTo(id: string) {
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({ behavior: 'smooth' });
	}

	onMount(() => {
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		let animId: number;
		const stars: { x: number; y: number; z: number; o: number }[] = [];

		function resize() {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		}

		resize();
		window.addEventListener('resize', resize);

		for (let i = 0; i < 400; i++) {
			stars.push({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				z: Math.random() * 3 + 0.5,
				o: Math.random()
			});
		}

		function draw() {
			ctx!.clearRect(0, 0, canvas.width, canvas.height);

			for (const star of stars) {
				star.o += (Math.random() - 0.5) * 0.02;
				star.o = Math.max(0.1, Math.min(1, star.o));
				star.y -= star.z * 0.15;

				if (star.y < -5) {
					star.y = canvas.height + 5;
					star.x = Math.random() * canvas.width;
				}

				const r = star.z * 0.8;
				ctx!.beginPath();
				ctx!.arc(star.x, star.y, r, 0, Math.PI * 2);
				const alpha = star.o * 0.8;
				if (star.z > 2) {
					ctx!.fillStyle = `rgba(0, 212, 255, ${alpha * 0.6})`;
					ctx!.shadowBlur = 8;
					ctx!.shadowColor = 'rgba(0, 212, 255, 0.3)';
				} else {
					ctx!.fillStyle = `rgba(255, 255, 255, ${alpha})`;
					ctx!.shadowBlur = 0;
				}
				ctx!.fill();
				ctx!.shadowBlur = 0;
			}

			animId = requestAnimationFrame(draw);
		}

		draw();

		return () => {
			cancelAnimationFrame(animId);
			window.removeEventListener('resize', resize);
		};
	});
</script>

<section id="hero" class="hero">
	<canvas bind:this={canvas} class="starfield"></canvas>
	<div class="hero-gradient"></div>
	<div class="hero-content">
		<div class="hero-badge">KARDASHEV SYSTEMS</div>
		<h1 class="hero-title">
			<span class="title-jp">カルダシェフ・システムズ</span>
		</h1>
		<p class="hero-tagline">{$t['hero.tagline']}</p>
		<p class="hero-subtitle">{$t['hero.subtitle']}</p>
		<div class="hero-cta">
			<button class="btn-primary" onclick={() => scrollTo('mission')}>
				{$t['hero.cta.primary']}
			</button>
			<button class="btn-secondary" onclick={() => scrollTo('contact')}>
				{$t['hero.cta.secondary']}
			</button>
		</div>
	</div>
	<div class="scroll-indicator">
		<div class="scroll-line"></div>
	</div>
</section>

<style>
	.hero {
		position: relative;
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.starfield {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
	}

	.hero-gradient {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: radial-gradient(ellipse at 50% 50%, rgba(0, 212, 255, 0.03) 0%, transparent 70%),
			radial-gradient(ellipse at 20% 80%, rgba(0, 100, 255, 0.05) 0%, transparent 50%);
		z-index: 1;
	}

	.hero-content {
		position: relative;
		z-index: 2;
		text-align: center;
		padding: 2rem;
		max-width: 800px;
	}

	.hero-badge {
		display: inline-block;
		font-family: 'Space Grotesk', monospace;
		font-size: 0.7rem;
		font-weight: 600;
		letter-spacing: 0.4em;
		color: #00d4ff;
		border: 1px solid rgba(0, 212, 255, 0.3);
		padding: 0.5rem 1.5rem;
		border-radius: 100px;
		margin-bottom: 2rem;
		background: rgba(0, 212, 255, 0.05);
	}

	.hero-title {
		margin-bottom: 1.5rem;
	}

	.title-jp {
		font-family: 'Noto Sans JP', sans-serif;
		font-size: clamp(1.8rem, 5vw, 3.5rem);
		font-weight: 700;
		color: #ffffff;
		letter-spacing: 0.05em;
		text-shadow: 0 0 60px rgba(0, 212, 255, 0.2);
	}

	.hero-tagline {
		font-family: 'Noto Sans JP', 'Inter', sans-serif;
		font-size: clamp(1rem, 2.5vw, 1.4rem);
		font-weight: 300;
		color: #c0c0d0;
		margin-bottom: 0.75rem;
		line-height: 1.6;
	}

	.hero-subtitle {
		font-family: 'Inter', 'Noto Sans JP', sans-serif;
		font-size: clamp(0.85rem, 1.5vw, 1rem);
		font-weight: 300;
		color: #808090;
		margin-bottom: 2.5rem;
		line-height: 1.6;
	}

	.hero-cta {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.btn-primary {
		font-family: 'Inter', 'Noto Sans JP', sans-serif;
		font-size: 0.9rem;
		font-weight: 500;
		padding: 0.85rem 2rem;
		background: linear-gradient(135deg, #00d4ff, #0088cc);
		color: #0a0a0f;
		border: none;
		border-radius: 8px;
		cursor: pointer;
		transition: all 0.3s ease;
		letter-spacing: 0.02em;
	}

	.btn-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 30px rgba(0, 212, 255, 0.3);
	}

	.btn-secondary {
		font-family: 'Inter', 'Noto Sans JP', sans-serif;
		font-size: 0.9rem;
		font-weight: 500;
		padding: 0.85rem 2rem;
		background: transparent;
		color: #00d4ff;
		border: 1px solid rgba(0, 212, 255, 0.3);
		border-radius: 8px;
		cursor: pointer;
		transition: all 0.3s ease;
		letter-spacing: 0.02em;
	}

	.btn-secondary:hover {
		border-color: #00d4ff;
		background: rgba(0, 212, 255, 0.1);
		transform: translateY(-2px);
	}

	.scroll-indicator {
		position: absolute;
		bottom: 2rem;
		left: 50%;
		transform: translateX(-50%);
		z-index: 2;
	}

	.scroll-line {
		width: 1px;
		height: 40px;
		background: linear-gradient(to bottom, #00d4ff, transparent);
		animation: pulse-line 2s ease-in-out infinite;
	}

	@keyframes pulse-line {
		0%,
		100% {
			opacity: 0.3;
			height: 30px;
		}
		50% {
			opacity: 1;
			height: 50px;
		}
	}
</style>
