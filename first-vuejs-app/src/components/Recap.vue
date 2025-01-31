<template>
	<h3>Recap</h3>
	<p>Score: {{ score }} / {{ quiz.questions.length }}</p>
	<p>{{ hasWon ? quiz.success_message : quiz.failure_message }}</p>
</template>

<script setup>
import { computed } from 'vue';

	const props = defineProps({
		answers: Array,
		quiz: Object
	})

	const score = computed(() => {
		return props.quiz.questions.reduce((acc, question, k) => {
			if (question.correct_answer === props.answers[k])
				return acc + 1
			else
				return acc
		}, 0)
	})

	const hasWon = computed(() => score.value >= props.quiz.minimum_score)
</script>