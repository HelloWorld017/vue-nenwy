<template>
	<div class="nenw-input">
		<label>
			<input ref="input"
				v-model="_content"
				:type="type"
				:name="inputName"
				:maxlength="maxlen"
				:placeholder="placeholder"
				:style="{color}"
				:autocomplete="autocomplete"
				:novalidate="novalidate"
				:spellcheck="spellcheck"
				:required="required">

			<div class="indicator">
				<div class="focus-indicator"></div>
				<div class="length-indicator-alternative" :style="transformObject" v-if="alternative"></div>
				<div class="length-indicator" :style="{width: percent}" v-else>
					<div class="overflow-hider">
						<div class="length-progress">
							{{length}}/{{maxlen}}
						</div>
					</div>
				</div>
			</div>
		</label>
	</div>
</template>

<style lang="less" scoped>
	*::selection {
		background: rgba(255, 255, 255, .1);
	}

	.nenw-input {
		margin: 15px;

		input {
			border: none;
			background: transparent;
			outline: none;
			padding: 15px;
			font-size: 1.1rem;
			font-family: 'Mina', sans-serif;
			position: relative;
			border-bottom: 2px solid rgba(255, 255, 255, .1);

			& + .indicator {
				position: relative;

				.focus-indicator {
					content: '';
					display: block;
					position: absolute;
					background: #2196f3;
					width: 100%;
					height: 2px;
					bottom: 0;
					left: 0;
					transition: transform .5s ease;
					transform: scaleX(0);
				}

				.length-indicator-alternative {
					content: '';
					display: block;
					position: absolute;
					background: darken(#2196f3, 20%);
					width: 100%;
					height: 2px;
					bottom: 0;
					left: 0;
					transition: transform .4s, opacity .4s ease;
					opacity: .4;
					transform: scaleX(0);
				}

				.length-indicator {
					position: absolute;
					display: inline-block;
					text-align: right;
					transition: width .4s;

					.overflow-hider {
						display: inline-block;
						overflow: hidden;

						.length-progress {
							background: #2196f3;
							font-family: 'Roboto Mono', monospace;
							padding: 5px 10px;
							transition: transform .4s ease .2s;
							transform: translateY(-28px);
						}
					}
				}
			}

			&:focus + .indicator {
				.focus-indicator {
					transform: scaleX(1);
				}

				.length-indicator .length-progress {
					transform: translateY(0);
				}

				.length-indicator-alternative {
					opacity: 1;
				}
			}
		}
	}
</style>

<script>
	export default {
		model: {
			prop: 'content',
			event: 'change'
		},

		props: {
			alternative: Boolean,
			spellcheck: Boolean,
			autocomplete: Boolean,
			required: Boolean,
			novalidate: Boolean,
			content: String,
			inputName: String,

			type: {
				type: String,
				default: "text"
			},

			maxlen: {
				type: Number,
				default: 100
			},

			color: {
				type: String,
				default: "#f1f2f3"
			},

			placeholder: {
				type: String,
				default: "Type here..."
			}
		},

		computed: {
			_content: {
				get() {
					return this.content;
				},

				set(v) {
					this.$emit('change', v);
				}
			},

			length() {
				return this.content.length;
			},

			percent() {
				return `${this.length / this.maxlen * 100}%`;
			},

			transformObject() {
				return {
					transform: `scaleX(${this.length / this.maxlen})`
				};
			}
		}
	};
</script>
