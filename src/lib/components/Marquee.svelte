<script>
	export let background = 'var(--c-g-dark)';
	export let color = 'var(--c-yellow)';
	export let font = 'var(--font-pixel)';

	export let size = '4rem';
	export let speed = 100;

	export let reversed = false;
	export let vertical = false;

	let width;
	$: duration = width / speed + 's';
</script>

<div
	class:vertical
	class:reversed
	style="--bg: {background}; --fg: {color}; --ff: {font}; --fs: {size};"
	bind:clientWidth={width}
>
	<span style="--d: {duration}; --w: {width}px"><slot />&nbsp;</span>
	<span style="--d: {duration}; --w: {width}px"><slot />&nbsp;</span>
</div>

<style>
	div {
		background: var(--bg);
		color: var(--fg);
		font-family: var(--ff);
		font-size: var(--fs);

		display: flex;
		flex-direction: row;
		width: 100%;
		flex-direction: row;
		overflow: hidden;
	}

	.vertical {
		width: 100vh;
	}

	span {
		flex: 0 0 auto;
		min-width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		animation: marquee var(--d) linear infinite;
	}

	.reversed > span {
		animation-direction: reverse;
	}

	@keyframes marquee {
		0% {
			transform: translate3d(0%, 0, 0);
		}
		100% {
			transform: translate3d(-100%, 0, 0);
		}
	}
</style>
