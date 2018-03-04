<template>
	<main>
		<div class="test-section">
			<h2>Scroll Info <nenw-code-tag>nenw-scroll-info</nenw-code-tag></h2>
			<div class="test-contents">
				<nenw-scroll-info></nenw-scroll-info>
			</div>
		</div>

		<div class="test-section">
			<h2>Input <nenw-code-tag>nenw-input</nenw-code-tag></h2>
			<div class="test-contents">
				<nenw-input v-model="content"></nenw-input>
				<br>
				<nenw-input v-model="content" alternative></nenw-input>
			</div>
		</div>

		<div class="test-section">
			<h2>Code Tag <nenw-code-tag>nenw-code-tag</nenw-code-tag></h2>
			<div class="test-contents">
				<nenw-code-tag>1f2c83ad92db27</nenw-code-tag>
			</div>
		</div>
	</main>
</template>

<style lang="less" scoped>
	main {
		background: #303030;

		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100vw;
		height: 100vh;
		overflow: auto;
	}

	.test-section {
		display: flex;
		flex-direction: column;
		height: 100vh;

		h2 {
			color: #fff;
			font-weight: 200;
			font-family: "Dekar";
			margin-left: 5vw;

			code {
				font-size: 1.2rem;
				margin-left: 20px;
			}
		}

		.test-contents {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			flex: 1;
			color: #fff;
		}
	}
</style>

<script>
	export default {
		data() {
			return {
				content: ''
			};
		}
	};
</script>
