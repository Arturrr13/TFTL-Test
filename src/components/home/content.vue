<script setup>
let anim, deg = 0

const startAnimation = (e) => anim = setInterval(() => e.target.children[0].style.transform = `rotate(${deg <= -360 ? deg = (deg % 360) - 1 : deg--}deg)`, 25)
const stopAnimation = () => clearInterval(anim)
</script>

<template>
	<div class="content-home">
		<h1 class="content-home__title parallaxEl h1-style" data-speed="1.5">
			full-cycle event agency
		</h1>

		<div class="content-home__circular-text" @mouseleave="stopAnimation" @mouseenter="startAnimation">
			<img src="../../assets/img/circular-text.svg" alt="circular-text" loading="lazy">
		</div>
	</div>
</template>

<style lang="scss" scoped>
.content-home{
	position: relative;
	@include flex(false, center, center, false);
	text-align: center;
 
	&::after{
		content: '';
		display: block;
		position: absolute;
		width: em(578);
        height: em(578);
		background: $bg-y;
		border-radius: 50%;
		filter: blur(em(36));
	}

	&__title{
		z-index: 1;
		width: 80%;
	}

	&__circular-text{
		width: em(115);
		@include flex(false, center, center, false);
		position: absolute;
		z-index: 1;
		transform: translate(em(205), em(210));
		
		&::after{
			content: '';
			display: block;
			position: absolute;
			width: em(8);
    	    height: em(8);
			background: #000;
			border-radius: 50%;
		}
	}
}
</style>