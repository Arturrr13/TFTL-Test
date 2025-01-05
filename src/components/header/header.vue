<script setup>
import LangSwitcher from '../UI/langSwitcher.vue'
import logo from '../UI/logo.vue'
import burgerMenu from './burgerMenu.vue'
</script>

<template>
	<header>
		<lang-switcher />
		<logo />
		<burger-menu />
	</header>
</template>

<style lang="scss" scoped>
header{
	@include flex(false, center, space-between, false);
	padding: em(24) em(24) 0 em(24);
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
}
</style>