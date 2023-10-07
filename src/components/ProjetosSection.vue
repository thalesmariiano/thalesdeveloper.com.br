<template>
	<section>
		<div class="w-full text-center bg-myPurple-700 p-5">
			<h1 class="font-kusanagi text-white text-shadow text-4xl sm:text-5xl lg:text-6xl">Projetos</h1>
			<div class="flex flex-col gap-y-8 justify-center items-center mt-10">
				<ProjetoCard
					v-for="project in projectsData"
					:key="project.id"
					:project="project"
				/>
			</div>
		</div>
	</section>
</template>

<script setup>
	import ProjetoCard from "./ProjetoCard.vue"
	import projectsData from "../assets/data/projectsData.json"
</script>