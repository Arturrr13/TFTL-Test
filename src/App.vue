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

import { onMounted } from 'vue'

const addText = (runlineText, runlineHalf, runlineEl) => {
	const stringSize = runlineText.clientWidth / runlineText.innerHTML.split('').length * 24 // 24 def size of string "FULL-CYCLE EVENT AGENCY "
	const timesToRepeat = Math.ceil(runlineEl / stringSize)

	runlineText.innerHTML = 'FULL-CYCLE EVENT AGENCY'.repeat(timesToRepeat)
}

const runlineResize = () => {
	const w = window.innerWidth, h = window.innerHeight
	const runline = document.querySelector('.runline-wr')
	const runlineEl = document.querySelector('.runline')
	const runlineHalf = document.querySelectorAll('.runline__first-half')
	const runlineText = document.querySelectorAll('.runline__first-half--text')
	const runlineHalfSecond = document.querySelectorAll('.runline__second-half')
	const runlineTextSecond = document.querySelectorAll('.runline__second-half--text')

	const d = Math.sqrt(Math.pow(w, 2) + Math.pow(h, 2))

	runline.style.width = `${d + d * 0.1}px`

	const angleInRadians = Math.atan(h / w)
	const angleInDegrees = angleInRadians * (180 / Math.PI)
	runline.style.rotate = `-${angleInDegrees}deg`

	for(let i = 0; i < 2; i++){
		addText(runlineText[i], runlineHalf[i], runlineEl.clientWidth)
		addText(runlineTextSecond[i], runlineHalfSecond[i], runlineEl.clientWidth)
	}
}

window.addEventListener('resize', runlineResize)
window.addEventListener('orientationchange', runlineResize)
// window.addEventListener("load", (event) => {
// 	alert("hey!")
// })
onMounted(async () => {
	//runlineResize()
	setTimeout(() => {
		runlineResize()
		//alert("hey!2")
	}, 1000)
})
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
