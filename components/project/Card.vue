<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    required: false
  }
});
</script>

<template>
  <div class="bg-white/10 space-y-2 backdrop-blur-sm ring-[1px] rounded-lg pb-2 ring-white/30">
    <NuxtLink :to="props.link" target="_blank" external>
      <div class="overflow-hidden rounded-t-lg">
        <img
          :src="props.img"
          class="rounded-t-lg hover:scale-105 transition-all h-full w-full object-cover duration-200"
        />
      </div>
    </NuxtLink>

    <div class="gap-2 flex flex-wrap pb-2 items-center w-fit px-2">
        <div
          v-for="(tag, idx) in props.tags" :key="idx"
          class="flex items-center shrink-0 ring-[1px] ring-white/15 gap-2 bg-white/10 px-2 py-1 rounded-md"
        >
          <span class="text-xs">{{ tag.title }}</span>
          <component  :is="tag.component" class="h-4 w-4"/>
        </div>
    </div>
    <span class="text-3xl font-bold px-2"> {{ props.title }}</span>
    <div class="text-sm px-2">
      {{ props.body }}
    </div>

    <NuxtLink :to="props.link" target="_blank" external>
      <div
        class="mx-2 rounded-md transition-all duration-200 w-fit hover:ring-[1px] ring-white/15 mt-2 p-1 hover:bg-white/10"
      >
        <IconExternalLink class="h-4 w-4" />
      </div>
    </NuxtLink>
  </div>
</template>
