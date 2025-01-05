<script setup>
import headerC from './components/header/header.vue'
import navigation from './components/header/navigation.vue'
import runline from './components/UI/runline.vue'

const parallax = (e) => {
  	document.querySelectorAll('.parallaxEl').forEach(el => {
    	if (window.innerWidth > 1024) {
    	  	const speed = parseFloat(el.getAttribute('data-speed')) || 1
    	  	const rect = el.getBoundingClientRect()
    	  	const offsetX = (e.pageX - rect.left) * speed / 100
    	  	const offsetY = (e.pageY - rect.top) * speed / 100

    	  	el.style.transform = `translateX(${offsetX}px) translateY(${offsetY}px)`
    	} else {
			el.style.transform = `translateX(0) translateY(0)`
    	}
  	})
}

document.querySelector('body').addEventListener('mousemove', parallax)
</script>

<template>
	<runline />

	<router-view class="router-view" v-slot="{ Component }">
		<transition name="fade" mode="out-in">
			<component :is="Component"/>
		</transition>
	</router-view>
	
	<header-c />
	<navigation />
</template>

<style scoped lang="scss">
.fade-enter-active, .fade-leave-active{
	transition: all 1s ease-in-out;

	&::after{
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
	}
}

.fade-enter-active::after{
	animation: ticker .5s linear forwards;
}

.fade-leave-active::after{
	animation: ticker2 .5s linear forwards;
}

@keyframes ticker {
	0% {
		box-shadow: inset 0 0 0 50dvw $tx-g;
  	}
  	100% {
		box-shadow: inset 0 0 0 0 $tx-g;
  	}
}

@keyframes ticker2 {
  	0% {
  	  	box-shadow: inset 0 0 0 0 $tx-g;
  	}
  	100% {
		box-shadow: inset 0 0 0 50dvw $tx-g;
  	}
}
</style>
