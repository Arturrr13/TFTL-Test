<script setup>
import { ref } from 'vue'
const menuStatus = ref(false)
const toggleMenuStatus = () => menuStatus.value = !menuStatus.value
</script>

<template>
	<div class="burger" :class="{ active: menuStatus }">
		<div class="burger__toggle-btn" @click="toggleMenuStatus"></div>

		<div class="burger__menu-wr">
			<nav class="burger-navigation">
				<ul class="nav-list">
					<li class="nav-list__el" @click="toggleMenuStatus">
						<router-link class="nav-list__el--logo" rel="nofollow" to="/">
							<img src="../../assets/img/logo.svg" alt="logo" loading="lazy">
						</router-link>
					</li>
					<li class="nav-list__el" @click="toggleMenuStatus" v-for="item in ['where', 'what', 'who']" :key="item">
						<router-link class="tx-style-1 tx-hover-anim" rel="nofollow" to="/test" :data-content="$t(`nav.${item}`) + '?'">
							{{ $t(`nav.${item}`) + '?' }}
						</router-link>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.burger{
	z-index: 10;
	display: none;

	&__toggle-btn{
		position: relative;
		z-index: 11;
		height: em(10);
		width: em(22);
		@include flex(false, center, center, false);

		&:hover{
			cursor: pointer;

			&::before, &::after{
				background: $bg-y;
			}
		}

		&::before{
			transition: all .5s ease-in-out;
			content: '';
			display: block;
			position: absolute;
			background: #000;
			width: 100%;
			height: em(1);
			transform: translateY(em(-4));
		}

		&::after{
			transition: all .5s ease-in-out;
			content: '';
			display: block;
			position: absolute;
			background: #000;
			width: 100%;
			height: em(1);
			transform: translateY(em(4));
		}
	}

	&.active{
		.burger__toggle-btn{
			&::before{
				transform: translateY(0) rotate(45deg);
				background: $bg-g;
			}

			&::after{
				transform: translateY(0) rotate(-45deg);
				background: $bg-g;
			}

			&:hover::before, &:hover::after{
				background: red;
			}
		}

		.burger__menu-wr{
			transform: translateX(0)
		}
	}

	&__menu-wr{
		position: absolute;
		background: $bg-g-2;
		width: 100%;
		height: 100dvh;
		left: 0;
		top: 0;
		@include flex(false, flex-start, center, false);
		padding: em(16) 0;
		transform: translateX(-100%);
		transition: transform .35s ease-in-out;
	}
}

.nav-list{
	@include flex(column, false, false, em(15));

	&__el--logo{
		@include flex(false, center, center, false);
		margin: 0 auto;
		width: em(46);
		padding: em(10) 0;
	}

	&__el a{
		color: $tx-g-2;
		text-transform: uppercase;
	}
}
</style>