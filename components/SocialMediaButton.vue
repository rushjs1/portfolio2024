<script setup lang="ts">
const props = defineProps({
  to: {
    type: String,
    required: true
  }
})

</script>

<template>
  <NuxtLink :to="props.to" target="_blank" external>
    <div class="bg-white rounded-md p-1">
      <slot></slot>
    </div>
  </NuxtLink>
</template>
