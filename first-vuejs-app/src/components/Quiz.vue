<template>
	<h1>{{ quiz.title }}</h1>
	<p v-if="state === 'begin'">Vous avez 5 secondes pour répondre au questions.<br>Bonne chance</p>
	<button @click="beginQuiz" v-if="state === 'begin'">Commencer le Quiz</button>
	<Progress :value="step" :max="quiz.questions.length - 1" v-if="state === 'question'"/>
	<Question :key="question" :question="question" v-if="state === 'question'" @answer="addAnswer"/>
	<Recap v-if="state === 'recap'" :answers="answers" :quiz="quiz"/>
</template>

<script setup>
	import Progress from './Progress.vue';
	import Question from './Question.vue';
	import Recap from './Recap.vue';
	import { computed, ref } from 'vue';

	const props = defineProps({
		quiz: Object,
	})

	const step = ref(0)
	const state = ref('begin')
	const beginQuiz = () => {state.value = 'question'}
	const question = computed(() => props.quiz.questions[step.value])
	const answers = ref(props.quiz.questions.map(() => null))
	const addAnswer = (answer) => {
		answers.value[step.value] = answer
		if (step.value === props.quiz.questions.length - 1)
			state.value = 'recap'
		else
			step.value++
	}
</script>

<style>
	p {
		margin-top: 2rem;
	}

	button, p {
		display: flex;
		margin-left: auto;
		margin-right: auto;
	}
</style>