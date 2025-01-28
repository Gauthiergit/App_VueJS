<script setup>
	import HelloWorld from './components/HelloWorld.vue';
	import {watch, computed, ref} from 'vue';

	// const sentence = computed( () => {
	// 	return `Salut je m'appelle ${name.value} et j'ai ${age.value} ans.`;
	// });

	const name = ref('gpeyre');
	const age = ref(26)

	// const user = ref({
	// 	name: 'gpeyre',
	// 	age: 26
	// });

	// watch(name, (newValue, oldValue) => {
	// 	console.log(newValue + ' ' + oldValue)
	// });
</script>

<template>
	<!-- <HelloWorld :user="user"/> -->
	<!-- <HelloWorld>
		<template v-slot:name> {{ user.name }} </template>
		<template v-slot:age> {{ user.age }} </template>
	</HelloWorld> -->
	<HelloWorld/>
	<!-- <div class="bold" :class="[ user.age > 18 ? 'text-green' : 'text-red']">{{ user.name }}</div> -->
	<!-- <span>{{ sentence }}</span> -->
	<!-- <span>Salut je m'appelle {{user.name}} et j'ai {{user.age}} ans.</span> -->
	<br>
	<br>
	<!-- <input type="text" v-model="name">
	<input type="text" v-model="age"> -->
</template>

<style scoped>

	.bold {
		font-weight: bolder;
	}

	.text-red {
		color:indianred;
	}

	.text-green {
		color:green;
	}

</style>
