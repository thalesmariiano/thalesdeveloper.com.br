<template>
	<section id="contato">
		<div class="w-full text-center bg-myPurple-800 py-10">
			<h1 class="font-kusanagi text-white text-shadow text-4xl sm:text-5xl">Contato</h1>

			<SocialMedia />

			<div class="w-full flex flex-col justify-center items-center">
				<p class="font-madeTommy text-neutral-400 mb-2 text-sm">Ou mande um email:</p>
				<a class="flex items-center gap-x-3 px-5 py-1 text-lg font-madeTommy text-neutral-300 bg-myPurple-800 rounded border border-myPurple-400 hover:bg-myPurple-400 shadow-button transition-all cursor-pointer"
				   href="mailto: thaleswebdev@gmail.com"
				>
					<img class="w-4" src="@/assets/icons/envelope-fill-white.svg">
					thaleswebdev@gmail.com
				</a>
			</div>
		</div>
	</section>
</template>

<script setup>
 	import SocialMedia from './SocialMedia.vue'
</script>