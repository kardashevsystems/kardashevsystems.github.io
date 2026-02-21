<script lang="ts">
	import { t } from '$lib/stores/lang';
	import { inview } from '$lib/actions/inview';
</script>

<section id="contact" class="contact">
	<div class="container">
		<div class="section-header" use:inview>
			<span class="section-label">{$t['contact.label']}</span>
			<h2 class="section-title">{$t['contact.title']}</h2>
			<p class="section-desc">{$t['contact.desc']}</p>
		</div>

		<div class="contact-grid" use:inview>
			<form class="contact-form" onsubmit={(e) => e.preventDefault()}>
				<div class="form-row">
					<div class="form-group">
						<label for="name">{$t['contact.name']}</label>
						<input id="name" type="text" required />
					</div>
					<div class="form-group">
						<label for="email">{$t['contact.email']}</label>
						<input id="email" type="email" required />
					</div>
				</div>
				<div class="form-group">
					<label for="company">{$t['contact.company']}</label>
					<input id="company" type="text" />
				</div>
				<div class="form-group">
					<label for="message">{$t['contact.message']}</label>
					<textarea id="message" rows="5" required></textarea>
				</div>
				<button type="submit" class="submit-btn">
					{$t['contact.submit']}
					<span class="btn-arrow">→</span>
				</button>
			</form>

			<div class="contact-info">
				<h3 class="info-title">{$t['contact.info.title']}</h3>
				<div class="info-item">
					<span class="info-icon">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
							<rect x="2" y="4" width="20" height="16" rx="2"/>
							<polyline points="22,6 12,13 2,6"/>
						</svg>
					</span>
					<span class="info-text">{$t['contact.info.email']}</span>
				</div>
				<div class="info-item">
					<span class="info-icon">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
							<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
							<circle cx="12" cy="10" r="3"/>
						</svg>
					</span>
					<span class="info-text">{$t['contact.info.location']}</span>
				</div>
				<div class="info-decoration">
					<div class="orbit"></div>
					<div class="orbit orbit-2"></div>
					<div class="orbit orbit-3"></div>
					<div class="core"></div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.contact {
		padding: 8rem 2rem;
	}

	.container {
		max-width: 1000px;
		margin: 0 auto;
	}

	.section-desc {
		font-family: 'Noto Sans JP', 'Inter', sans-serif;
		font-size: 1rem;
		font-weight: 300;
		color: #808090;
		max-width: 500px;
		margin: 0 auto;
		text-align: center;
		line-height: 1.8;
	}

	.contact-grid {
		display: grid;
		grid-template-columns: 1.2fr 0.8fr;
		gap: 4rem;
		margin-top: 3rem;
		opacity: 0;
		transform: translateY(30px);
		transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
	}

	:global(.contact-grid.in-view) {
		opacity: 1;
		transform: translateY(0);
	}

	.form-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}

	.form-group {
		margin-bottom: 1.25rem;
	}

	label {
		display: block;
		font-family: 'Inter', 'Noto Sans JP', sans-serif;
		font-size: 0.75rem;
		font-weight: 500;
		color: #606070;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		margin-bottom: 0.5rem;
	}

	input,
	textarea {
		width: 100%;
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 8px;
		padding: 0.75rem 1rem;
		font-family: 'Noto Sans JP', 'Inter', sans-serif;
		font-size: 0.9rem;
		color: #e0e0f0;
		transition: all 0.2s ease;
		outline: none;
		box-sizing: border-box;
	}

	input:focus,
	textarea:focus {
		border-color: rgba(0, 212, 255, 0.4);
		background: rgba(0, 212, 255, 0.03);
		box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.05);
	}

	textarea {
		resize: vertical;
		min-height: 120px;
	}

	.submit-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
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
	}

	.submit-btn:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 30px rgba(0, 212, 255, 0.3);
	}

	.btn-arrow {
		transition: transform 0.2s ease;
	}

	.submit-btn:hover .btn-arrow {
		transform: translateX(4px);
	}

	.contact-info {
		padding: 2rem 0;
	}

	.info-title {
		font-family: 'Noto Sans JP', 'Space Grotesk', sans-serif;
		font-size: 1.1rem;
		font-weight: 600;
		color: #e0e0f0;
		margin-bottom: 1.5rem;
	}

	.info-item {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 1rem;
	}

	.info-icon {
		width: 20px;
		height: 20px;
		color: #00d4ff;
		opacity: 0.6;
		flex-shrink: 0;
	}

	.info-icon :global(svg) {
		width: 100%;
		height: 100%;
	}

	.info-text {
		font-family: 'Inter', 'Noto Sans JP', sans-serif;
		font-size: 0.9rem;
		color: #a0a0b0;
	}

	.info-decoration {
		position: relative;
		width: 180px;
		height: 180px;
		margin-top: 2.5rem;
	}

	.orbit {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 120px;
		height: 120px;
		border: 1px solid rgba(0, 212, 255, 0.1);
		border-radius: 50%;
		animation: spin 20s linear infinite;
	}

	.orbit-2 {
		width: 80px;
		height: 80px;
		border-color: rgba(0, 212, 255, 0.15);
		animation-duration: 15s;
		animation-direction: reverse;
	}

	.orbit-3 {
		width: 160px;
		height: 160px;
		border-color: rgba(0, 212, 255, 0.05);
		animation-duration: 25s;
	}

	.core {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #00d4ff;
		box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);
	}

	@keyframes spin {
		from { transform: translate(-50%, -50%) rotate(0deg); }
		to { transform: translate(-50%, -50%) rotate(360deg); }
	}

	@media (max-width: 768px) {
		.contact {
			padding: 5rem 1.25rem;
		}

		.contact-grid {
			grid-template-columns: 1fr;
			gap: 2.5rem;
		}

		.form-row {
			grid-template-columns: 1fr;
		}

		.info-decoration {
			display: none;
		}
	}
</style>
