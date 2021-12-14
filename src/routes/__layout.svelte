<script>
	import '$lib/css/reset.css';
	import '$lib/css/base.css';

	import Marquee from '$lib/components/Marquee.svelte';
	import TV from '$lib/components/TV.svelte';

	let size = '4rem';
</script>

<main style="--s: {size}">
	<TV>
		<slot />
	</TV>
</main>

<aside>
	<Marquee {size} vertical><slot name="scroll">Tune your communication</slot></Marquee>
</aside>

<style>
	aside {
		transform: rotate(-90deg);
		transform-origin: top left;
		position: fixed;
		top: 100vh;
		left: 0;
	}

	main {
		margin-left: var(--s);
		width: calc(100% - var(--s));
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
