<template>
	<section id="projetos" class="scroll-mt-28">
		<div class="w-full text-center bg-myPurple-700 px-5 py-10 space-y-10">
			<h1 class="font-kusanagi text-white text-shadow text-4xl sm:text-5xl">Projetos</h1>
			<div class="flex flex-col gap-y-8 justify-center items-center">
				<ProjetoCard
					v-for="project in projectsData"
					:key="project.id"
					:project="project"
				/>
			</div>
			<div class="w-full flex flex-col sm:flex-row gap-5 justify-center items-center">
				<a class="px-5 py-1 text-lg font-madeTommy text-neutral-300 bg-myPurple-800 rounded border border-myPurple-400 hover:bg-myPurple-400 hover:text-myPurple-900 shadow-button transition-all cursor-pointer" href="https://github.com/thalesmariiano" target="_blank">Ver mais</a>
				<a class="px-5 py-1 text-lg font-madeTommy text-neutral-300 bg-myPurple-800 rounded border border-myPurple-400 hover:bg-myPurple-400 hover:text-myPurple-900 shadow-button transition-all cursor-pointer" href="#contato">Entre em contato</a>
			</div>
		</div>
	</section>
</template>

<script setup>
	import ProjetoCard from "./ProjetoCard.vue"
	import projectsData from "../assets/data/projectsData.json"
</script>