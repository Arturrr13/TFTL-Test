<template>
	<nav class="main-navigation">
		<ul class="nav-list">
			<li class="nav-list__el" v-for="item in ['where', 'what', 'who']" :key="item">
                <router-link class="tx-style-1 tx-hover-anim" rel="nofollow" to="/test" :data-content="$t(`nav.${item}`) + '?'">
                    {{ $t(`nav.${item}`) + '?' }}
                </router-link>
            </li>
		</ul>
	</nav>
</template>

<style lang="scss" scoped>
.nav-list__el{
	position: absolute;

	&:nth-child(1){
        transform: translateX(-50%) rotate(-90deg);
        left: em(30);
        transform-origin: center;
	}

	&:nth-child(2){
        transform: translateX(50%) rotate(90deg);
        right: em(30);
        transform-origin: center;
    }
    &:nth-child(3){
        bottom: em(20);
        right: calc(50% - em(34));
    }
}
</style>