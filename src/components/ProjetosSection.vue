<template>
	<section id="projetos" class="scroll-mt-28 bg-myPurple-700">

		<div class="w-full text-center px-5 py-10 space-y-10">
			<h1 class="font-kusanagi text-white text-shadow text-4xl sm:text-5xl">Projetos</h1>

			<div class="w-full flex justify-center">
				<div class="w-full max-w-xs sm:max-w-sm md:max-w-3xl">
					<SelectInput
						@filter="setFilter"
					/>
				</div>
			</div>

			<p v-if="!projects.length" class="font-madeTommy text-white">Nenhum projeto encontrado. :/</p>

			<div class="flex flex-col gap-y-8 justify-center items-center">
				<TransitionGroup name="projects">
					<ProjetoCard
						v-for="project in projects"
						:key="project.id"
						:project="project"
					/>
				</TransitionGroup>
			</div>
			<div class="w-full flex flex-col sm:flex-row gap-5 justify-center items-center">
				<a class="px-5 py-1 text-lg font-madeTommy text-neutral-300 bg-myPurple-800 rounded border border-myPurple-400 hover:bg-myPurple-400 hover:text-myPurple-900 shadow-button transition-all cursor-pointer" href="https://github.com/thalesmariiano" target="_blank">Ver mais</a>
				<a class="px-5 py-1 text-lg font-madeTommy text-neutral-300 bg-myPurple-800 rounded border border-myPurple-400 hover:bg-myPurple-400 hover:text-myPurple-900 shadow-button transition-all cursor-pointer" href="#contato">Entre em contato</a>
			</div>
		</div>
	</section>
</template>

<script setup>
	import { ref } from 'vue'
	import SelectInput from '@/components/SelectInput.vue'
	import ProjetoCard from "./ProjetoCard.vue"
	import projectsData from "../assets/data/projectsData.json"

	const projects = ref([])
	const projectCategory = ref('')

	function setFilter(filter){
		projects.value = projectsData.filter(p => p.categorys.find(c => c === filter))
	}

	setFilter('All')
	

</script>

<style>
	.projects-enter-active,
	.projects-leave-active {
	  transition: all 0.5s ease;
	}
	.projects-enter-from,
	.projects-leave-to {
	  transform: translateX(10px);
	  opacity: 0;
	}
	.projects-leave-active {
  		
	}
</style>