<div class="overlay">
	<slot />
</div>

<style>
	.overlay {
		position: absolute;
		top: 0.5rem;
		left: 0.5rem;
		font-size: 1rem;
		color: var(--c-green);
		animation: overlay 5000ms infinite;
	}

	@keyframes overlay {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 0;
		}
		50.0001% {
			opacity: 1;
		}
		100% {
			opacity: 1;
		}
	}
</style>
