<template>
	<div class="w-full max-w-xs sm:max-w-sm md:max-w-3xl p-5 bg-myPurple-900/40 flex flex-col md:flex-row justify-between items-center rounded gap-y-4 border border-myPurple-400">
		<div class="w-full">
			<img class="mx-auto w-72 md:w-80" src="../assets/banners/venancin-mockup.png">
		</div>
		<div class="w-full md:text-left space-y-5">
			<div class="md:text-left mx-auto md:mx-0 space-y-2 w-3/4 md:w-4/5">
				<h2 class="font-bold font-madeTommy text-2xl text-myPurple-400">Venancin Coins</h2>
				<p class="text-neutral-200 font-madeTommy leading-5">
					O primeiro freelancer como Front-End que fiz.
					Tive algumas dificuldades no inicio,
					mas deu tudo certo no final.
				</p>
			</div>
			<div class="space-x-3 mt-2">
				<a class="project-button">Acessar</a>
				<a class="project-button">Github</a>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.project-button {
		@apply px-5 py-1 text-lg font-madeTommy text-neutral-300 bg-myPurple-900 rounded border border-myPurple-400 hover:bg-myPurple-400 hover:text-myPurple-900 transition-all cursor-pointer
	}

</style>