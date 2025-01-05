<script setup>
import { onMounted, ref } from 'vue'

const text = ref('FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY')

const addText = (runlineText, runlineHalf, runlineEl) => {
	const stringSize = runlineText.clientWidth / runlineText.innerText.split('').length * 23 // 23 def size of string "FULL-CYCLE EVENT AGENCY"
	const timesToRepeat = Math.ceil(runlineEl / stringSize)
	//alert(runlineText.innerText.split('').length, runlineText.clientWidth, runlineEl)
	console.log('lol')
	//alert("hey!")
	//runlineText.innerText = 'FULL-CYCLE EVENT AGENCY'.repeat(timesToRepeat)
	text.value = 'FULL-CYCLE EVENT AGENCY'.repeat(timesToRepeat)
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

	runline.style.width = `${Math.ceil(d + d * 0.1)}px`
	//alert(`${Math.ceil(d + d * 0.1)}, ${window.innerWidth}, ${window.innerHeight}`)

	const angleInRadians = Math.atan(h / w)
	const angleInDegrees = angleInRadians * (180 / Math.PI)
	runline.style.rotate = `-${angleInDegrees}deg`

	// for(let i = 0; i < 2; i++){
	// 	addText(runlineText[i], runlineHalf[i], runlineEl.clientWidth)
	// 	addText(runlineTextSecond[i], runlineHalfSecond[i], runlineEl.clientWidth)
	// }
}

window.addEventListener('resize', runlineResize)
window.addEventListener('orientationchange', runlineResize)
// window.addEventListener("load", (event) => {
// 	alert("hey!")
// })
onMounted(async () => {
	runlineResize()
	// setTimeout(() => {
	// 	runlineResize()
	// }, 10)

	// const interval = setInterval(() => {
	// 	runlineResize()
	// 	console.log('+')
	// }, 1050)
})
</script>

<template>
	<div class="runline-wr">
		<div class="runline" v-for="index in 2" :key="'runline-id' + index">
			<div class="runline__first-half">
				<span class="runline__first-half--text">
					{{ text }}
				</span>
			</div>
			<div class="runline__second-half">
				<span class="runline__second-half--text">
					{{ text }}
				</span>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
$duration: 30s;

.runline-wr{
	width: 10px;
	position: absolute;
	rotate: -30deg;
	@include flex(column, false, false, em(15));

	.runline{
		width: 100%;
		height: em(60);
		position: relative;
		@include flex(false, center, space-between, false);

		&:nth-child(1){
			rotate: 180deg;
		}

		&__first-half, &__second-half{
  		  	position: absolute;
  		  	top: 0;
  		  	right: 0;
  		  	animation: ticker 30s infinite linear forwards;
			@include flex(false, center, center, false);
  		  	//transform: translate(100%, 0);

  		  	&--text{
				@include text($tx-g, em(52), 700, 110%);
				font-style: italic;
				text-transform: uppercase;
				opacity: 0.1;
				white-space: nowrap;
				color: transparent;
				-webkit-text-stroke: em(1) $tx-g;
			}
  		}

		&__first-half{
			//flex-shrink: 0;
		}

		&__second-half{
			animation: 30s ticker 15s infinite linear forwards;
		}
	}
}

@keyframes ticker {
  	0% { transform: translate(100%, 0) }
  	50% { transform: translate(0, 0) }
  	100% { transform: translate(-100%, 0) }
}
</style>