<script setup lang="ts">
useSeoMeta({
  title: 'Projects',
  ogDescription: 'Explore a curated collection of my web development projects built with modern technologies—featuring custom web apps, platform plugins, widgets, and more.'
})

const { data: projects } = await useAsyncData('projects', async () => {
  const res = await queryContent('/projects').find()

  return res.sort((a, b) => Number(a.id) - Number(b.id))
})

function pad(n: number | string) {
  return String(n).padStart(2, '0')
}

const tagIcons: Record<string, string> = {
  Vue: 'logos:vue',
  Laravel: 'logos:laravel',
  Tailwindcss: 'devicon:tailwindcss',
  'New Design': 'heroicons:paint-brush',
  Ionic: 'logos:ionic-icon',
  Capacitor: 'devicon:capacitor',
  TypeScript: 'devicon:typescript',
  Neovim: 'devicon:neovim',
  Lua: 'logos:lua',
  Plugin: 'heroicons:puzzle-piece',
  JavaScript: 'logos:javascript',
  Mapbox: 'simple-line-icons:location-pin',
  Unity: 'skill-icons:unity-dark',
  Oculus: 'gg:oculus',
  iOS: 'logos:apple-app-store',
  VitePress: 'devicon:vitejs',
  Markdown: 'skill-icons:markdown-light',
  Nextjs: 'logos:nextjs-icon',
}

function getTagIcon(tag: string) {
  return tagIcons[tag]
}

const hoveredIdx = ref<number | null>(null)
const previewProject = computed(() =>
  hoveredIdx.value !== null ? projects.value?.[hoveredIdx.value] : null
)
</script>

<template>
  <div class="flex flex-col items-start w-full">
    <div class="flex flex-col items-start w-full space-y-3">
      <div class="flex items-center space-x-4 w-full">
        <BackButton />
        <span class="text-5xl font-bold"> Projects </span>
      </div>
      <span class="bg-yellow-400 rounded-full h-2 w-44"></span>
    </div>

    <div class="w-full mt-6 mb-20 grid md:grid-cols-[1fr_20rem] gap-x-12">
      <ul
        role="list"
        class="flex flex-col"
        @mouseleave="hoveredIdx = null"
      >
        <li
          v-for="(project, idx) in projects"
          :key="idx"
          class="border-t border-white/10 last:border-b"
          @mouseenter="hoveredIdx = idx"
        >
          <component
            :is="project.link ? 'a' : 'div'"
            :href="project.link || undefined"
            :target="project.link ? '_blank' : undefined"
            :rel="project.link ? 'noreferrer' : undefined"
            :aria-label="project.link ? `Open ${project.title}` : undefined"
            class="relative grid grid-cols-[2.5rem_1fr] md:grid-cols-[3.5rem_1fr_auto] items-baseline gap-x-6 md:gap-x-8 gap-y-3 py-7 md:py-9"
          >
            <span
              class="pointer-events-none absolute -left-3 top-0 bottom-0 w-px bg-yellow-400 origin-top transition-transform duration-[400ms] ease-out"
              :class="hoveredIdx === idx ? 'scale-y-100' : 'scale-y-0'"
            ></span>

            <div
              class="font-mono text-sm tabular-nums transition-colors duration-200"
              :class="hoveredIdx === idx ? 'text-white/80' : 'text-white/35'"
            >
              {{ pad(project.id) }}
            </div>

            <div class="flex flex-col gap-2 min-w-0">
              <div class="flex items-baseline gap-2 flex-wrap">
                <h3 class="text-2xl md:text-4xl font-semibold tracking-tight text-balance text-white/95">
                  {{ project.title }}
                </h3>
                <Icon
                  v-if="project.link"
                  name="heroicons:arrow-up-right"
                  size="0.85em"
                  class="transition-all duration-300 ease-out"
                  :class="hoveredIdx === idx ? 'opacity-100 translate-x-0 text-yellow-400' : 'opacity-0 -translate-x-1 text-white/30'"
                />
              </div>
              <p class="text-sm leading-relaxed text-white/55 text-pretty max-w-[56ch]">
                {{ project.description }}
              </p>
              <div class="flex flex-wrap items-center gap-x-4 gap-y-1 pt-0.5">
                <span
                  v-for="(tag, i) in project.tags"
                  :key="i"
                  class="inline-flex items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-white/50"
                >
                  <Icon :name="getTagIcon(tag.title) as string" size="0.95em" />
                  {{ tag.title }}
                </span>
              </div>
            </div>
          </component>
        </li>
      </ul>

      <aside class="hidden md:block">
        <div class="sticky top-28">
          <div class="w-full overflow-hidden rounded-md bg-[#0d0d0d] outline outline-1 -outline-offset-1 outline-white/10">
            <NuxtImg
              v-if="previewProject"
              :src="previewProject.image"
              alt=""
              class="block w-full h-auto max-h-[26rem] object-contain"
            />
            <div
              v-else
              class="aspect-[1957/1037] flex items-center justify-center"
            >
              <span class="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-white/30">
                Hover a project
              </span>
            </div>
          </div>

          <div class="mt-3 flex items-center justify-between gap-3">
            <div class="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-white/45 truncate">
              {{ previewProject ? previewProject.title : 'Preview' }}
            </div>
            <div v-if="previewProject" class="font-mono text-[0.7rem] tabular-nums text-white/45 shrink-0">
              {{ pad(previewProject.id) }} / {{ pad(projects?.length || 0) }}
            </div>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>
