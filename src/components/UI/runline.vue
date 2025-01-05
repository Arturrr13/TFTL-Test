<script setup>
import { onMounted } from 'vue'

const removeText = (runlineText, runlineHalf) => {
	let addExtraLetters = ''

	if(runlineHalf.clientWidth < runlineText.clientWidth){
		const letterSize = runlineText.clientWidth / runlineText.innerHTML.split('').length
		const extraLetters = -((runlineText.clientWidth - runlineHalf.clientWidth) / letterSize)
		const newText = runlineText.innerHTML.slice(0, Math.floor(extraLetters))
		addExtraLetters = runlineText.innerHTML.slice(Math.floor(extraLetters))
	
		runlineText.innerHTML = newText
	}

	return { addExtraLetters }
}

const addText = (runlineText, runlineHalf, extraLettersForSecond = false) => {
	const stringSize = runlineText.clientWidth / runlineText.innerHTML.split('').length * 24 // 24 def size of string "FULL-CYCLE EVENT AGENCY "
	const timesToRepeat = Math.ceil(runlineHalf.clientWidth / stringSize)

	runlineText.innerHTML = 'FULL-CYCLE EVENT AGENCY '.repeat(timesToRepeat)
	if(extraLettersForSecond) runlineText.innerHTML = extraLettersForSecond.concat(runlineText.innerHTML)

	return removeText(runlineText, runlineHalf)
}

const runlineResize = () => {
	const w = window.innerWidth, h = window.innerHeight
	const runline = document.querySelector('.runline-wr')
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
		const { addExtraLetters } = addText(runlineText[i], runlineHalf[i])
		addText(runlineTextSecond[i], runlineHalfSecond[i], addExtraLetters)
	}
}

document.addEventListener('DOMContentLoaded', () => {
	window.addEventListener('resize', runlineResize())
	runlineResize()
	setTimeout(() => runlineResize(), 1000)
})

onMounted(async () => runlineResize())
</script>

<template>
	<div class="runline-wr">
		<div class="runline" v-for="index in 2" :key="'runline-id' + index">
			<div class="runline__first-half">
				<p class="runline__first-half--text">
					FULL
				</p>
			</div>
			<div class="runline__second-half">
				<p class="runline__second-half--text">
					FULL
				</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
$duration: 30s;

.runline-wr{
	width: em(1800);
	position: absolute;
	rotate: -30deg;
	@include flex(column, false, false, em(15));

	.runline{
		width: 100%;
		height: em(60);
		position: relative;

		&:nth-child(1){
			rotate: 180deg;
		}

		&__first-half, &__second-half{
  		  	position: absolute;
  		  	top: 0;
  		  	right: 0;
  		  	animation: ticker 30s infinite linear forwards;
			@include flex(false, center, center, false);
  		  	width: 97%;
  		  	transform: translate(100%, 0);

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