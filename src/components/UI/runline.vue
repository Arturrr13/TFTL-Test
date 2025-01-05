<script setup>

</script>

<template>
	<div class="runline-wr">
		<div class="runline" v-for="index in 2" :key="'runline-id' + index">
			<div class="runline__first-half">
				<p class="runline__first-half--text">
					F
				</p>
			</div>
			<div class="runline__second-half">
				<p class="runline__second-half--text">
					F
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
		display: flex;

		&:nth-child(1){
			rotate: 180deg;
		}

		&__first-half, &__second-half{
  		  	position: absolute;
  		  	top: 0;
  		  	right: 0;
  		  	animation: ticker 30s infinite linear forwards;
			@include flex(false, center, center, false);
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

		&__first-half{
			flex-shrink: 0;
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