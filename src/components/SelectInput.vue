<template>
	<div class="w-44 bg-myPurple-800 rounded border border-myPurple-400 shadow-button transition-all relative z-40">
		<button @click="openSelect" class="w-full h-full flex px-2 py-1 gap-x-3 items-center cursor-pointer">
			<img ref="caretIcon" class="mt-0.5 transition-all duration-300" src="@/assets/icons/caret-down-fill.svg">
			<p ref="selectText" class="font-madeTommy text-neutral-300">All</p>
		</button>

		<Transition
			enter-active-class="animate__animated animate__fadeIn animate__faster"
			leave-active-class="animate__animated animate__fadeOut animate__faster"
		>
			<div v-show="showSelect" class="w-full border-x border-b border-myPurple-400 bg-myPurple-800 absolute rounded">
				<ul>
					<li class="text-neutral-300 font-madeTommy text-left border-t border-myPurple-400">
						<label class="flex items-center gap-x-2 p-1 cursor-pointer hover:bg-myPurple-400/30 pl-2">
							<input class="accent-myPurple-400" @click="radioClick" type="radio" name="select-filter" value="All" checked>
							All
						</label>
					</li>
					<li class="text-neutral-300 font-madeTommy text-left border-t border-myPurple-400">
						<label class="flex items-center gap-x-2 p-1 cursor-pointer hover:bg-myPurple-400/30 pl-2">
							<input class="accent-myPurple-400" @click="radioClick" type="radio" name="select-filter" value="Personal">
							Personal
						</label>
					</li>
					<li class="text-neutral-300 font-madeTommy text-left border-t border-myPurple-400">
						<label class="flex items-center gap-x-2 p-1 cursor-pointer hover:bg-myPurple-400/30 pl-2">
							<input class="accent-myPurple-400" @click="radioClick" type="radio" name="select-filter" value="Freelancer">
							Freelancer
						</label>
					</li>
					<li class="text-neutral-300 font-madeTommy text-left border-t border-myPurple-400">
						<label class="flex items-center gap-x-2 p-1 cursor-pointer hover:bg-myPurple-400/30 pl-2">
							<input class="accent-myPurple-400" @click="radioClick" type="radio" name="select-filter" value="Full-Stack">
							Full-Stack
						</label>
					</li>
					<li class="text-neutral-300 font-madeTommy text-left border-t border-myPurple-400">
						<label class="flex items-center gap-x-2 p-1 cursor-pointer hover:bg-myPurple-400/30 pl-2">
							<input class="accent-myPurple-400" @click="radioClick" type="radio" name="select-filter" value="Front-End">
							Front-End
						</label>
					</li>
					<li class="text-neutral-300 font-madeTommy text-left border-t border-myPurple-400">
						<label class="flex items-center gap-x-2 p-1 cursor-pointer hover:bg-myPurple-400/30 pl-2">
							<input class="accent-myPurple-400" @click="radioClick" type="radio" name="select-filter" value="Back-End">
							Back-End
						</label>
					</li>
					<li class="text-neutral-300 font-madeTommy text-left border-t border-myPurple-400">
						<label class="flex items-center gap-x-2 p-1 cursor-pointer hover:bg-myPurple-400/30 pl-2">
							<input class="accent-myPurple-400" @click="radioClick" type="radio" name="select-filter" value="Study">
							Study
						</label>
					</li>
				</ul>
			</div>
		</Transition>
	</div>
</template>

<script setup>
	import { ref } from 'vue'

	const caretIcon = ref(null)
	const selectText = ref(null)
	const showSelect = ref(false)
	const emit = defineEmits(['filter'])

	function openSelect(){
		showSelect.value = showSelect.value ? false : true

		if(showSelect.value) caretIcon.value.style.transform = "rotateZ(180deg)"
		else caretIcon.value.style.transform = "rotateZ(0deg)"
	}

	function radioClick(e){
		const inputValue = e.srcElement.value
		selectText.value.innerHTML = inputValue
		emit('filter', inputValue)
		showSelect.value = false

		if(showSelect.value) caretIcon.value.style.transform = "rotateZ(180deg)"
		else caretIcon.value.style.transform = "rotateZ(0deg)"
	}

</script>