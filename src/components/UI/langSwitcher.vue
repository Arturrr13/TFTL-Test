<script setup>
import { ref } from 'vue'

const activeLang = ref('en')
const langsArr = ref(['ua', 'ru'])

const changeLang = (lang) => {
	langsArr.value = langsArr.value.map(el => el === lang ? activeLang.value : el)
	activeLang.value = lang
}
</script>

<template>
	<div class="lang-switcher">
		<div class="lang-switcher__icon">
			<img src="../../assets/img/lang.png" alt="lang" loading="lazy">
		</div>

		<div class="lang-switcher__langs">
			<div class="lang-switcher__langs--el" v-for="item in langsArr" :key="item">
				<span v-if="activeLang !== item" class="tx-style-1"  @click="changeLang(item)">
					{{ item }}
				</span>
			</div>
		</div>
	</div>	
</template>

<style lang="scss" scoped>
.lang-switcher{
	display: grid;
    grid-template-columns: 1fr 0fr;
	align-items: center;
	gap: em(15);
	width: fit-content;
	overflow: hidden;
	transition: grid-template-columns ease-in-out .35s;

	&:hover{
		grid-template-columns: 1fr auto;
		z-index: 5;

		.lang-switcher__icon{
			cursor: pointer;
			box-shadow: inset 0 0 0 em(3) $bg-y;
		}

		.lang-switcher__langs--el{
			span{
				transform: translateX(0); opacity: 1;
			}

			@for $i from 1 through 2 {
				&:nth-child(#{$i}) span{
					transition-delay: calc(.25s / #{$i})
				}
			}
		}
	}

	&__icon{
		width: em(38);
        height: em(38);
		background: $bg-g;
        box-shadow: inset 0 0 0 em(1) $border-g;
        border-radius: 50%;
		@include flex(false, center, center, false);
		flex-shrink: 0;
		transition: box-shadow ease-in-out .35s;
		position: relative;
		z-index: 1;

		img{
			width: em(15);
			object-fit: contain;
		}
	}

	&__langs{
		@include flex(false, center, flex-start, em(10));
		min-width: 0;

		&--el span{
			@include flex(false, center, center, false);
			height: em(38);
			width: em(65);
			box-shadow: inset 0 0 0 em(1) $border-g;
			border-radius: em(10);
			background: $bg-g;
			text-transform: uppercase;
			transition: all ease-in-out .35s;
			transform: translateX(-150%);
			opacity: 0;

			&:hover{
				transition-delay: 0;
				cursor: pointer;
				box-shadow: inset 0 0 0 em(30) $bg-y;
				color: $tx-w;
			}
		}
	}
}
</style>