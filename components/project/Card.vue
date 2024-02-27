<script setup lang="ts">
import Vue from '@/components/icon/Vue.vue';
import Laravel from '@/components/icon/Laravel.vue';
import Tailwind from '@/components/icon/Tailwind.vue';
import PaintBrush from '@/components/icon/PaintBrush.vue';
import Ionic from '@/components/icon/Ionic.vue';
import Capacitor from '@/components/icon/Capacitor.vue';
import Typescript from '@/components/icon/Typescript.vue';
import Neovim from '@/components/icon/Neovim.vue';
import Lua from '@/components/icon/Lua.vue';
import PuzzlePiece from '@/components/icon/PuzzlePiece.vue';

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
});

let icons = [Vue, Laravel, Tailwind, PaintBrush, Ionic, Capacitor, Typescript, Neovim, Lua, PuzzlePiece]

function getTagIcon(tag: string){
  icons.forEach((i) => {
    console.log(i)
  })

 return icons.find((i) => i.__file?.includes(tag))
}
</script>

<template>
  <div class="bg-white/10 space-y-2 backdrop-blur-sm ring-[1px] rounded-lg pb-2 ring-white/30">
    <NuxtLink :to="props.project.link" target="_blank" external>
      <div class="overflow-hidden rounded-t-lg">
        <img
          :src="props.project.image"
          class="rounded-t-lg hover:scale-105 transition-all h-full w-full object-cover duration-200"
        />
      </div>
    </NuxtLink>

    <div class="gap-2 flex flex-wrap pb-2 items-center w-fit px-2">
      <div
        v-for="(tag, idx) in props.project.tags" :key="idx"
        class="flex items-center shrink-0 ring-[1px] ring-white/15 gap-2 bg-white/10 px-2 py-1 rounded-md"
      >
        <span class="text-xs">{{ tag.title }}</span>
         <component :is="getTagIcon(tag.component)" class="h-4 w-4"/>
      </div>
    </div>
    <span class="text-3xl tracking-wide font-bold px-2"> {{ props.project.title }}</span>
    <div class="text-sm leading-normal px-2">
      {{ props.project.description }}
    </div>

    <NuxtLink :to="props.project.link" target="_blank" external>
      <div
        class="mx-2 rounded-md transition-all duration-200 w-fit hover:ring-[1px] ring-white/15 mt-2 p-1 hover:bg-white/10"
      >
        <IconExternalLink class="h-4 w-4" />
      </div>
    </NuxtLink>
  </div>
</template>
