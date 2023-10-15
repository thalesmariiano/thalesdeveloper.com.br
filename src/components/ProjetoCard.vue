<template>
	<div :class="cardClass">
		<div class="w-full">
			<img class="mx-auto w-72 md:w-80" :src="project.image" :alt="project.name">
		</div>
		<div class="w-full md:text-left space-y-5">
			<div class="md:text-left mx-auto md:mx-0 space-y-2 w-3/4 md:w-4/5">
				<h2 class="font-bold font-madeTommy text-2xl text-myPurple-400">{{ project.name }}</h2>
				<p class="text-neutral-200 font-madeTommy leading-5">
					{{ project.description }}
				</p>
			</div>
			<div class="space-x-3 mt-2">
				<a :class="linkClass" :href="siteLink" target="_blank">Acessar</a>
				<a :class="repositoryClass" :href="repositoryLink" target="_blank">Github</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			project: {
				type: Object,
				default: {}
			}
		},
		setup(props){
			const cardClass = props.project.id % 2 ? 'card-normal' : 'card-reverse'

			const siteLink = props.project.link
			const repositoryLink = props.project.repository

			const linkClass = props.project.link ? 'project-button-active' : 'project-button-desactived' 
			const repositoryClass = props.project.repository ? 'project-button-active' : 'project-button-desactived' 


			return {
				siteLink,
				repositoryLink,
				linkClass,
				repositoryClass,
				cardClass
			}
		}
	}
</script>

<style scoped>
	.project-button-active {
		@apply px-5 py-1 text-lg font-madeTommy text-neutral-300 bg-myPurple-900 rounded border border-myPurple-400 hover:bg-myPurple-400 hover:text-myPurple-900 transition-all cursor-pointer
	}

	.project-button-desactived {
		@apply px-5 py-1 text-lg font-madeTommy text-neutral-300 bg-myPurple-900 rounded border border-myPurple-400 cursor-not-allowed opacity-50
	}
	.card-normal {
		@apply w-full max-w-xs sm:max-w-sm md:max-w-3xl p-5 bg-myPurple-900/40 flex flex-col md:flex-row justify-between items-center rounded gap-y-4 border border-myPurple-400
	}
	.card-reverse {
		@apply w-full max-w-xs sm:max-w-sm md:max-w-3xl px-12 py-5 bg-myPurple-900/40 flex flex-col md:flex-row-reverse justify-between items-center rounded gap-y-4 border border-myPurple-400
	}

</style>