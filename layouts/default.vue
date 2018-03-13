<template>
	<div>
		<nuxt/>
	</div>
</template>

<style lang="scss" scoped>
	html {
		font-family: 'Kanit';
		box-sizing: border-box;
	}

	*,
	*:before,
	*:after {
		box-sizing: border-box;
		margin: 0;
	}

	a {
		color: $link;

		&:hover {
			color: darken($color: $link, $amount: 10%);
		}
	}
</style>
