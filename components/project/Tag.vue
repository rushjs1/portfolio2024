<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="flex items-center shrink-0 ring-[1px] ring-white/15 gap-2 bg-white/10 px-2 py-1 rounded-md"
  >
    <span class="text-xs">{{ props.title }}</span>
    <slot />
  </div>
</template>
