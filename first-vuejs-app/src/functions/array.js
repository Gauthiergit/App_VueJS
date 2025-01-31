export function suffleArray(array){
	return array
		.map((item) => ({value: item, sort: Math.random()}))
		.sort((a, b) => a.sort - b.sort)
		.map((item) => item.value)
}