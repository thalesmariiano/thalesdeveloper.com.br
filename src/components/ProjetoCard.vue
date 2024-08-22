<template>
	<div :class="card_class">
		<div class="w-full">
			<img class="mx-auto w-72 md:w-80" :src="`/src/assets/banners/${project.image}.png`" :alt="project.name">
		</div>
		<div class="w-full md:text-left space-y-5">
			<div class="md:text-left mx-auto md:mx-0 space-y-2 w-3/4 md:w-4/5">
				<h2 class="font-bold font-madeTommy text-2xl text-myPurple-400">{{ project.name }}</h2>
				<ul class="w-56 flex gap-x-2 justify-center md:justify-start items-center">
					<li
						v-for="lang in project.langs"
						:key="project.id"
						class="bg-neutral-400/10 p-1.5 rounded-full"
					>
						<img class="w-4" :src="`/src/assets/icons/langs/${lang}.svg`" :title="lang" :alt="lang">
					</li>
				</ul>
				<p class="text-neutral-200 font-madeTommy leading-5">
					{{ project.description }}
				</p>
			</div>
			<div class="space-x-3 mt-2">
				<a :class="link_class" :href="project.link" target="_blank">Acessar</a>
				<a :class="repository_class" :href="project.repository" target="_blank">Github</a>
			</div>
		</div>
	</div>
</template>

<script setup>
	const { project } = defineProps(['project'])
	// project.image = new URL('/src/assets/banners/'+project.image, import.meta.url)

	const card_class = project.id % 2 ? 'card card-normal' : 'card card-reverse'
	const link_class = project.link ? 'project-button' : 'project-button-desactived' 
	const repository_class = project.repository ? 'project-button' : 'project-button-desactived' 
</script>

<style scoped>
	.project-button {
		@apply px-5 py-1 text-lg font-madeTommy text-neutral-300 bg-myPurple-900 rounded border border-myPurple-400 hover:bg-myPurple-400 hover:text-myPurple-900 transition-all cursor-pointer
	}

	.project-button-desactived {
		@apply px-5 py-1 text-lg font-madeTommy text-neutral-300 bg-myPurple-900 rounded border border-myPurple-400 cursor-not-allowed opacity-50
	}

	.card {
		@apply w-full max-w-xs sm:max-w-sm md:max-w-3xl flex flex-col justify-between items-center bg-myPurple-900/40 rounded gap-y-4 border border-myPurple-400
	}

	.card-normal {
		@apply p-5 md:flex-row
	}
	.card-reverse {
		@apply px-12 py-5 md:flex-row-reverse
	}
</style>