<template>
	<div class="question">
		<h3>{{ question.question }}</h3>
		<ul>
			<li v-for="(choice, index) in randomChoices" :key="choice">
				<Answer
					:id="`answer${index}`"
					:disabled="hasAnswer"
					:value="choice"
					:correctAnswer="question.correct_answer"
					@change="onAnswer"
					v-model="answer"
				/>
			</li>
		</ul>
		<!-- <button :disabled="!hasAnswer" @click="emits('answer', answer)">Question suivante</button> -->
	</div>
</template>

<script setup>
	import { suffleArray } from '@/functions/array';
	import { computed, onMounted, onUnmounted, ref } from 'vue';
	import Answer from './Answer.vue';
	
	let timer
	const answer = ref(null)
	const emits = defineEmits(['answer'])

	const props = defineProps({
		question: Object
	})

	const onAnswer = () => {
		clearTimeout(timer)
		timer = setTimeout(() => {
			emits('answer', answer.value)
		}, 1000)
	}

	const hasAnswer = computed(() => answer.value !== null)

	const randomChoices = computed(() => suffleArray(props.question.choices))

	onMounted(() => {
		timer = setTimeout(() => {
			answer.value = ''
			onAnswer()
		}, 5000)
	})

	onUnmounted(() => {
		clearTimeout(timer)
	})
</script>

<style>
	.question {
		padding-top: 2rem;
	}
</style>