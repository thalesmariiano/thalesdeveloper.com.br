<template>
	<div class="flex w-full md:px-24 px-5 py-5 bg-myPurple-900">
		<div>
			<a href="https://thalesdeveloper.com.br">
				<img class="w-52" src="../assets/logo_purple_white.png">
			</a>
		</div>

		<div class="w-full flex justify-end items-center">
			<nav class="hidden md:block">
				<ul class="flex gap-x-7">
					<li><a class="text-white text-xl font-madeTommy hover:text-myPurple-100" href="#">Inicio</a></li>
					<li><a class="text-white text-xl font-madeTommy hover:text-myPurple-100" href="#">Sobre</a></li>
					<li><a class="text-white text-xl font-madeTommy hover:text-myPurple-100" href="#">Projetos</a></li>
					<li><a class="text-white text-xl font-madeTommy hover:text-myPurple-100" href="#">Contato</a></li>
				</ul>
			</nav>

			<div class="md:hidden">
				<button class="space-y-2">
					<div class="w-8 h-1 bg-white"></div>
					<div class="w-8 h-1 bg-white"></div>
					<div class="w-8 h-1 bg-white"></div>
				</button>
			</div>
		</div>

		<DrawerMenu />

	</div>
</template>

<script setup>
	import DrawerMenu from '@/components/DrawerMenu.vue'
</script>