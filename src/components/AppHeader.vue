<template>
	<header class="sticky top-0 left-0 z-50">
		<div class="flex w-full md:px-24 px-5 py-5 bg-myPurple-900 shadow-header">
			<div>
				<a href="https://thalesdeveloper.com.br">
					<img class="min-w-[10rem] w-56" src="../assets/logo_purple_white.png" alt="Thales Web Developer Logo">
				</a>
			</div>

			<div class="w-full flex justify-end items-center">
				<nav class="hidden md:block">
					<ul class="flex gap-x-7">
						<li><a class="text-white text-xl font-madeTommy hover:text-myPurple-100" href="#">Inicio</a></li>
						<li><a class="text-white text-xl font-madeTommy hover:text-myPurple-100" href="#sobre">Sobre</a></li>
						<li><a class="text-white text-xl font-madeTommy hover:text-myPurple-100" href="#projetos">Projetos</a></li>
						<li><a class="text-white text-xl font-madeTommy hover:text-myPurple-100" href="#contato">Contato</a></li>
					</ul>
				</nav>

				<div class="md:hidden">
					<button @click="drawer()" :class="[{'hamburger-close': isOpen}, 'space-y-2', 'transiton-all', 'duration-500']">
						<div class="w-8 h-1 bg-white line1 rounded transition-all duration-500"></div>
						<div class="w-8 h-1 bg-white line2 rounded transition-all duration-500"></div>
						<div class="w-8 h-1 bg-white line3 rounded"></div>
					</button>
				</div>
			</div>

			<Transition
				enter-active-class="animate__animated animate__slideInRight"
				leave-active-class="animate__animated animate__slideOutRight"
			>
				<DrawerMenu
					v-show="isOpen"
					:drawerBg="isOpen"
				/>
			</Transition>
		</div>
	</header>
</template>

<script setup>
	import { ref, onMounted, onBeforeUnmount } from 'vue'
	import DrawerMenu from '@/components/DrawerMenu.vue'

	const isOpen = ref(false)

	const drawer = () => isOpen.value = !isOpen.value
	const closeDrawer = () => isOpen.value = false

	onMounted(() => {
		window.addEventListener('resize', closeDrawer)
	})

	onBeforeUnmount(() => {
		window.removeEventListener('resize', closeDrawer)
	})

</script>

<style scoped>
	.hamburger-close {
		@apply rotate-90
	}

	.hamburger-close .line1 {
		transform: translateY(26px) rotate(-60deg);
	  	transform-origin: left;
	  	z-index: 1;
	}
	.hamburger-close .line2 {
		transform: translateY(14px) rotate(60deg);
		margin-left: 0;
		transform-origin: right;
		z-index: 2;
	}
</style>