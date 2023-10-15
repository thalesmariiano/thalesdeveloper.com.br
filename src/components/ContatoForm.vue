<template>
	<div class="w-full flex justify-center items-center mt-10">
		<form action="/" method="POST" netlify>
			<div class="space-y-2">
				<div class="w-full flex flex-col sm:flex-row gap-2 ">
					<input class="w-64 sm:w-56 pl-4 py-1 font-madeTommy text-neutral-500 focus:text-neutral-900 text-lg rounded" type="text" name="name" placeholder="Nome" autocomplete="off" required />
					<input class="w-64 pl-4 py-1 font-madeTommy text-neutral-500 focus:text-neutral-900 text-lg rounded" type="email" name="eamil" placeholder="Email" autocomplete="off" required />
				</div>
				<div class="w-full">
					<input class="w-full pl-4 py-1 font-madeTommy text-neutral-500 focus:text-neutral-900 text-lg rounded" type="text" name="topic" placeholder="Assunto" autocomplete="off" required />
				</div>
				<div class="w-full">
					<textarea class="w-full h-36 pl-4 py-1 font-madeTommy text-neutral-500 focus:text-neutral-900 text-lg rounded" name="message" placeholder="Mensagem" required></textarea>
				</div>

				<div>
					<button class="mt-5 px-12 py-0.5 font-madeTommy text-white bg-myPurple-400 hover:bg-myPurple-100 uppercase transition-all text-lg rounded" type="submit">Enviar</button>
				</div>
			</div>
		</form>
	</div>
</template>