<template>
	<div class="container">
		<div v-if="state === 'error'">
			<p>Impossible de charger le json</p>
		</div>
		<div :aria-busy="state === 'loading'">
			<Quiz :quiz="quiz" v-if="quiz"/> 
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Quiz from './components/Quiz.vue';

const quiz = ref (null);
const state = ref ('loading')

onMounted(() => {
	fetch('/quiz.json')
		.then(r => {
			if (r.ok)
				return r.json()
			else
				throw new Error("Impossible de charger le json");
		})
		.then(data => {
			quiz.value = data
			state.value = 'idle'
		})
		.catch(error => {
			state.value = 'error'
		})
})
</script>


<style>

	.container {
		margin-top: 2rem;
		display: flex;
		justify-content: center;
	}

</style>