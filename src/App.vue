<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	html,
	body {
		/* position: relative; */
		height: 100%;
		font-size:10px;
	}

	#app {
		position: absolute;
		top: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
	}
</style>
