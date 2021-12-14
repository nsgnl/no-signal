<script>
	import Overlay from './Overlay.svelte';

	export let overlay = 'NO SIGNAL';
	export let testcard = true;
	export let crt = true;
	export let flicker = true;
</script>

<div class="screen">
	<Overlay>{overlay}</Overlay>
	<div class="content" class:crt class:flicker class:testcard>
		<slot />
	</div>
</div>

<style>
	.screen {
		width: 100%;
		height: 100%;
		background-color: var(--c-black);
		animation: poweron 1000ms ease-out;
	}

	@keyframes poweron {
		0% {
			transform: scale(0, 0.01);
			background-color: var(--c-g-light);
		}

		30% {
			transform: scale(0, 0.01);
			background-color: var(--c-g-light);
		}

		85% {
			transform: scale(1, 0.01);
			background-color: var(--c-g-light);
		}

		87% {
			transform: scale(1, 0.01);
			background-color: var(--c-black);
		}

		100% {
			transform: scale(1);
			background-color: var(--c-black);
		}
	}

	.crt {
		color: var(--c-white);
	}

	.crt::before {
		content: ' ';
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-image:
			/* rgb pixels */ linear-gradient(
				to right,
				rgba(255, 0, 0, 0.1),
				rgba(0, 255, 0, 0.1),
				rgba(0, 0, 255, 0.1),
				transparent
			),
			/* pixel lines */ linear-gradient(to bottom, rgba(0, 0, 0, 0.4), transparent);
		background-size: 4px 2px;
		z-index: 10;
		pointer-events: none;
	}

	.crt::after {
		content: ' ';
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background-color: var(--c-g-dark);
		z-index: 200;
		opacity: 0;
		pointer-events: none;
	}

	.flicker::after {
		animation: flicker 0.1s infinite;
	}

	@keyframes flicker {
		0% {
			opacity: 0;
		}
		10% {
			opacity: 0.1;
		}
		20% {
			opacity: 0.2;
		}
		30% {
			opacity: 0;
		}
		40% {
			opacity: 0.2;
		}
		50% {
			opacity: 0.2;
		}
		60% {
			opacity: 0;
		}
		70% {
			opacity: 0.1;
		}
		80% {
			opacity: 0.2;
		}
		90% {
			opacity: 0.1;
		}
		100% {
			opacity: 0.2;
		}
	}

	.testcard {
		background-image: var(--c-testcard);
	}
</style>
