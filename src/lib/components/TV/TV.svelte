<script>
	/*
		This svg file is broken up in smaller parts to make it easier to read. 
		Be wary that most of the parts are dependent on the Defs file for fill and gradient definitiions.
		Standard HTML page content lives in the default slot in an absolutely positioned div (positioned using JS with a reasonable CSS default).
		There is a foreignObject with a named 'backup' slot. This is useful for content that needs to scale with the TV.
		Interactive elements are styled with CSS, not SVG animations.
	*/
	import Speakers from './Speakers.svelte';
	import Defs from './Defs.svelte';
	import ControlPanel from './ControlPanel.svelte';
	import Logo from './Logo.svelte';
	import { onMount } from 'svelte';

	let screen;
	let content;
	let container;

	const sizeScreen = () => {
		let s = screen.getBoundingClientRect();
		let c = container.getBoundingClientRect();
		content.style.position = 'absolute';
		content.style.top = `${s.top - c.top}px`;
		content.style.left = `${s.left - c.left}px`;
		content.style.width = `${s.width}px`;
		content.style.height = `${s.height}px`;
	};

	onMount(sizeScreen);
</script>

<svelte:window on:resize={sizeScreen} />

<div class="container" bind:this={container}>
	<svg viewBox="0 0 847 810" fill="none" xmlns="http://www.w3.org/2000/svg">
		<g id="nosignal-tv">
			<path
				id="tv-front"
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M6 0C2.68629 0 0 2.68628 0 5.99999V758C0 761.314 2.6863 764 6.00001 764H841C844.314 764 847 761.314 847 758V6C847 2.68629 844.314 0 841 0H6ZM789 69H57V614H789V69Z"
				fill="#1E2128"
			/>
			<path
				id="screen-inset"
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M56 62C52.6863 62 50 64.6863 50 68V615C50 618.314 52.6863 621 56 621H790C793.314 621 796 618.314 796 615V68C796 64.6863 793.314 62 790 62H56ZM779 79H67V604H779V79Z"
				fill="url(#paint0_linear_143_262)"
			/>
			<path
				id="black-screen-border"
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M65 71C61.6863 71 59 73.6863 59 77V607C59 610.314 61.6863 613 65 613H781C784.314 613 787 610.314 787 607V77C787 73.6863 784.314 71 781 71H65ZM779 79H67V604H779V79Z"
				fill="url(#paint1_linear_143_262)"
			/>
			<path
				id="tv-bottom"
				d="M0 751H847V758C847 761.314 844.314 764 841 764H6.00001C2.6863 764 0 761.314 0 758V751Z"
				fill="url(#paint2_linear_143_262)"
			/>

			<foreignObject id="screen" x="66" y="78" width="714" height="527" bind:this={screen}>
				<!-- <slot name="embedded" /> -->
			</foreignObject>

			<Speakers />
			<Logo />
			<ControlPanel />
			<rect id="bottom-front" x="24" y="764" width="798" height="18" fill="#1E2128" />
			<rect
				id="foot-inner-front"
				x="74"
				y="764"
				width="698"
				height="18"
				fill="url(#paint25_linear_143_262)"
			/>
			<rect id="foot-outer-front" x="65" y="798" width="717" height="12" fill="#22252C" />
			<path
				id="foot-top"
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M74.4653 782H772.535L782 798H65L74.4653 782Z"
				fill="url(#paint26_linear_143_262)"
			/>
		</g>
		<Defs />
	</svg>
	<div class="content" bind:this={content}>
		<slot>hello there</slot>
	</div>
</div>

<style>
	.container {
		position: relative;
		width: 90vmin;
		height: 90vmin;
	}

	.content {
		position: absolute;
		overflow: auto;

		left: 8%;
		right: 8%;
		top: 9%;
		bottom: 29%;
	}

	svg {
		position: absolute;
		inset: 0;
	}

	foreignObject {
		font-size: 1rem;
		background-color: var(--c-black);
	}
</style>
