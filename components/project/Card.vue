<script setup lang="ts">
const props = defineProps({
  project: {
    type: Object,
    required: true
  }
});

const icons2 = [
  {tag: 'Vue', icon: 'logos:vue'},
  {tag: 'Laravel', icon: 'logos:laravel'},
  {tag: 'Tailwindcss', icon: 'devicon:tailwindcss'},
  {tag: 'New Design', icon: 'heroicons:paint-brush'},
  {tag: 'Ionic', icon: 'logos:ionic-icon'},
  {tag: 'Capacitor', icon: 'devicon:capacitor'},
  {tag: 'TypeScript', icon: 'devicon:typescript'},
  {tag: 'Neovim', icon: 'devicon:neovim'},
  {tag: 'Lua', icon: 'logos:lua'},
  {tag: 'Plugin', icon: 'heroicons:puzzle-piece'},
  {tag: 'JavaScript', icon: 'logos:javascript'},
  {tag: 'Mapbox', icon: 'simple-line-icons:location-pin'},
  {tag: 'Unity', icon: 'skill-icons:unity-dark'},
  {tag: 'Oculus', icon: 'gg:oculus'},
  {tag: 'iOS', icon: 'logos:apple-app-store'},
  {tag: 'VitePress', icon: 'devicon:vitejs' },
  {tag: 'Markdown', icon: 'skill-icons:markdown-light' },
  { tag: 'Nextjs', icon: 'logos:nextjs-icon' }
]

function getTagIcon(tag: string){
  return icons2.find((i) => i.tag === tag)?.icon
}

</script>

<template>
  <div class="bg-white/10 space-y-2 backdrop-blur-sm rounded-lg pb-2 ring-white/30">
    <NuxtLink :to="props.project.link" target="_blank" external>
      <div class="overflow-hidden rounded-t-lg">
        <NuxtImg
          :src="props.project.image"
          :alt="`${props.project.title} image card`"
          class="rounded-t-lg hover:scale-105 transition-all h-full w-full object-cover duration-200"
          :placeholder="[591, 313]"
          preload
        />
      </div>
    </NuxtLink>

    <div class="gap-2 flex flex-wrap pb-2 items-center w-fit px-2">
      <div
        v-for="(tag, idx) in props.project.tags" :key="idx"
        class="flex items-center shrink-0 ring-[1px] ring-white/15 gap-2 bg-white/10 px-2 py-1 rounded-md"
      >
        <span class="text-xs">{{ tag.title }}</span>
        <Icon :name="getTagIcon(tag.title) as string" />
      </div>
    </div>
    <span class="text-3xl tracking-wide font-bold px-2"> {{ props.project.title }}</span>
    <div class="text-sm leading-normal px-2">
      {{ props.project.description }}
    </div>

    <NuxtLink v-if="props.project.link" :to="props.project.link" target="_blank" :aria-label="`Link for ${props.project.title}`" external>
      <div
        class="flex items-center mx-2 rounded-md transition-all duration-200 w-fit hover:ring-[1px] ring-white/15 mt-2 p-0.5 hover:bg-white/10"
      >
        <Icon name="heroicons-outline:external-link" size="1.5em"/>
      </div>
    </NuxtLink>
  </div>
</template>
