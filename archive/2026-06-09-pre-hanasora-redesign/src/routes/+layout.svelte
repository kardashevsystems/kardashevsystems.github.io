<script lang="ts">
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.svg" />
</svelte:head>

{@render children()}

<style>
	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(html) {
		scroll-behavior: smooth;
	}

	:global(body) {
		background: #0a0a0f;
		color: #e0e0f0;
		font-family: 'Inter', 'Noto Sans JP', -apple-system, BlinkMacSystemFont, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		overflow-x: hidden;
	}

	:global(.section-header) {
		text-align: center;
		margin-bottom: 3rem;
		opacity: 0;
		transform: translateY(20px);
		transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
	}

	:global(.section-header.in-view) {
		opacity: 1;
		transform: translateY(0);
	}

	:global(.section-label) {
		display: inline-block;
		font-family: 'Space Grotesk', monospace;
		font-size: 0.7rem;
		font-weight: 600;
		letter-spacing: 0.3em;
		color: #00d4ff;
		margin-bottom: 1rem;
		opacity: 0.7;
	}

	:global(.section-title) {
		font-family: 'Noto Sans JP', 'Space Grotesk', sans-serif;
		font-size: clamp(1.5rem, 3vw, 2.2rem);
		font-weight: 700;
		color: #e0e0f0;
		line-height: 1.3;
		margin-bottom: 1rem;
	}

	:global(::selection) {
		background: rgba(0, 212, 255, 0.2);
		color: #ffffff;
	}

	:global(::-webkit-scrollbar) {
		width: 6px;
	}

	:global(::-webkit-scrollbar-track) {
		background: #0a0a0f;
	}

	:global(::-webkit-scrollbar-thumb) {
		background: rgba(0, 212, 255, 0.2);
		border-radius: 3px;
	}

	:global(::-webkit-scrollbar-thumb:hover) {
		background: rgba(0, 212, 255, 0.4);
	}
</style>
