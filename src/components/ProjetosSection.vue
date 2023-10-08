<template>
	<section>
		<div class="w-full text-center bg-myPurple-700 px-5 py-10 space-y-10">
			<h1 class="font-kusanagi text-white text-shadow text-4xl sm:text-5xl">Projetos</h1>
			<div class="flex flex-col gap-y-8 justify-center items-center">
				<ProjetoCard
					v-for="project in projectsData"
					:key="project.id"
					:project="project"
				/>
			</div>
			<div class="space-x-5">
				<a class="px-5 py-1.5 text-lg font-madeTommy text-white bg-myPurple-400 rounded hover:bg-myPurple-100 hover:text-neutral-400 transition-all" href="https://github.com/thalesmariiano">Ver mais</a>
				<a class="px-5 py-1.5 text-lg font-madeTommy text-white bg-myPurple-400 rounded hover:bg-myPurple-100 hover:text-neutral-400 transition-all" href="#">Entre em contato</a>
			</div>
		</div>
	</section>
</template>

<script setup>
	import ProjetoCard from "./ProjetoCard.vue"
	import projectsData from "../assets/data/projectsData.json"
</script>