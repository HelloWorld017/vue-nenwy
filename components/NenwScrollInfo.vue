<template>
	<div class="nenw-scroll-info mouse">
		<div class="scroll"></div>
	</div>
</template>

<style scoped>
	:root {
		/* Scroll Notifier */
		--sn-mouse-width: 50px;
		--sn-mouse-height: calc(2 * var(--sn-mouse-width));
		--sn-mouse-radius: var(--sn-mouse-width);
		--sn-mouse-color: #fff;
		--sn-mouse-weight: 1px;
		--sn-mouse-duration: .8s;

		--sn-scroll-size: calc(var(--sn-mouse-width) / 10);
		--sn-scroll-radius: var(--sn-scroll-size);
		--sn-scroll-start: calc(var(--sn-mouse-height) / 8);
		--sn-scroll-end: calc(var(--sn-mouse-height) * 3 / 5);
		--sn-scroll-duration: 2s;
		--sn-scroll-iteration: 3;
		--sn-scroll-running-time: calc(var(--sn-scroll-duration) * var(--sn-scroll-iteration));

		--sn-expand-delay: calc(var(--sn-scroll-running-time) + var(--sn-scroll-duration) * .9);
		--sn-expand-size: calc(var(--sn-scroll-size) * 10);
		--sn-expand-duration: 1s;

	}

	.mouse {
		animation-name: border-fade-out;
		animation-delay: var(--sn-scroll-running-time);
		animation-duration: var(--sn-mouse-duration);
		animation-fill-mode: forwards;

		width: var(--sn-mouse-width);
		height: var(--sn-mouse-height);
		border-radius: var(--sn-mouse-radius);
		border: var(--sn-mouse-weight) solid var(--sn-mouse-color);
		display: flex;
		justify-content: center;
	}

	.scroll {
		animation: scroll var(--sn-scroll-duration) ease 0s var(--sn-scroll-iteration),
			show-scroll-down-chev var(--sn-scroll-duration) ease var(--sn-scroll-running-time);

		animation-fill-mode: forwards;

		width: var(--sn-scroll-size);
		height: var(--sn-scroll-size);
		border-radius: var(--sn-scroll-radius);
		background: transparent;
		position: relative;

		&::before, &::after {
			animation-duration: var(--sn-expand-duration);
			animation-timing-function: ease;
			animation-delay: var(--sn-expand-delay);
			animation-fill-mode: forwards;

			content: '';
			display: block;
			position: absolute;
			top: 0;
			width: var(--sn-scroll-size);
			height: var(--sn-scroll-size);
			border-radius: var(--sn-scroll-radius);
			opacity: 0;
			background-color: rgba(255, 255, 255, 1);
		}

		&::before {
			animation-name: expand-chev, expand-chev-right;
			transform: rotate(45deg);
		}

		&::after {
			animation-name: expand-chev, expand-chev-left;
			transform: rotate(-45deg);
		}
	}

	@keyframes scroll {
		0% {
			background-color: rgba(255, 255, 255, 0);
			top: var(--sn-scroll-start);
		}

		10% {
			background-color: rgba(255, 255, 255, 1);
		}

		65% {
			background-color: rgba(255, 255, 255, 1);
		}

		100% {
			background-color: rgba(255, 255, 255, 0);
			top: var(--sn-scroll-end);
		}
	}

	@keyframes expand-chev {
		0% {
			opacity: 0;
			width: var(--sn-scroll-size);
		}

		1% {
			opacity: 1;
		}

		100% {
			opacity: 1;
			width: var(--sn-expand-size);
		}
	}

	@keyframes expand-chev-left {
		0% {
			left: 0;
		}

		100% {
			left: calc((var(--sn-expand-size) - var(--sn-scroll-size)) * -0.146);
		}
	}

	@keyframes expand-chev-right {
		0% {
			right: 0;
		}

		100% {
			right: calc((var(--sn-expand-size) - var(--sn-scroll-size)) * -0.146);
		}
	}

	@keyframes show-scroll-down-chev {
		0% {
			background-color: rgba(255, 255, 255, 0);
			top: var(--sn-scroll-start);
		}

		10% {
			background-color: rgba(255, 255, 255, 1);
		}

		90% {
			background-color: rgba(255, 255, 255, 1);
			top: calc(var(--sn-mouse-height) + var(--sn-scroll-start));
			opacity: 1;
		}

		100% {
			background-color: rgba(255, 255, 255, 0);
			opacity: .5;
			top: calc(var(--sn-mouse-height) + var(--sn-scroll-start));
		}
	}

	@keyframes border-fade-out {
		0% {
			border-color: rgba(255, 255, 255, 1);
		}

		100% {
			border-color: rgba(255, 255, 255, 0);
		}
	}
</style>
