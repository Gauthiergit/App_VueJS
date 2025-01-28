<script setup>
	import {ref} from 'vue';
	// const props = defineProps(['user'])
	const name = ref('');
	const emit = defineEmits(['updateName']);

	const handleUpdate = () => {

	}
</script>

<template>
	<h1>Hello World</h1>
	<!-- <p>{{ props.user.name }} {{ props.user.age }}</p> -->
 	<!-- <slot name="name"></slot>
	<slot name="age"></slot> -->\

	{{ name }}
	<br>
	<br>
	<input type="text" v-model="name" @input="handleUpdate">
</template>
