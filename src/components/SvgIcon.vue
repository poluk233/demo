<template>
	<svg :class="svgClass" aria-hidden="true">
		<use :xlink:href="iconName" :fill="color" />
	</svg>
</template>



<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
	iconClass: String,
	className: String,
	color: String
})
const iconName = computed(() => `#icon-${props.iconClass}`)
const svgClass = computed(() => {
	let className = 'svg-icon';
	if (props.className) className = `${className} ${props.className}`;
	return className
})

</script>

<style scoped>
.svg-icon {
  fill: currentColor;
}
</style>
