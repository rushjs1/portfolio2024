<script setup lang="ts">
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})

function pad(n: number | string) {
  return String(n).padStart(2, '0')
}
</script>

<template>
  <component
    :is="props.project.link ? 'a' : 'div'"
    :href="props.project.link || undefined"
    :target="props.project.link ? '_blank' : undefined"
    :rel="props.project.link ? 'noreferrer' : undefined"
    :aria-label="props.project.link ? `Open ${props.project.title}` : undefined"
    class="group relative grid grid-cols-[2.5rem_1fr] md:grid-cols-[3.5rem_1fr_12rem] items-baseline gap-x-6 md:gap-x-10 gap-y-3 py-8 md:py-10"
  >
    <span
      class="pointer-events-none absolute -left-3 top-0 bottom-0 w-px bg-yellow-400 origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-[400ms] ease-out"
    ></span>

    <div class="font-mono text-sm tabular-nums text-white/35 group-hover:text-white/75 transition-colors duration-200">
      {{ pad(props.project.id) }}
    </div>

    <div class="flex flex-col gap-3 min-w-0">
      <div class="flex items-baseline gap-2 flex-wrap">
        <h3 class="text-3xl md:text-5xl font-semibold tracking-tight text-balance text-white/95">
          {{ props.project.title }}
        </h3>
        <Icon
          v-if="props.project.link"
          name="heroicons:arrow-up-right"
          size="0.85em"
          class="text-white/30 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-yellow-400 transition-all duration-300 ease-out"
        />
      </div>

      <p class="text-sm md:text-[0.95rem] leading-relaxed text-white/55 text-pretty max-w-[58ch]">
        {{ props.project.description }}
      </p>

      <div class="flex flex-wrap items-center gap-x-2 gap-y-1 pt-0.5">
        <template v-for="(tag, i) in props.project.tags" :key="i">
          <span v-if="i !== 0" class="font-mono text-white/15">&middot;</span>
          <span class="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-white/45">
            {{ tag.title }}
          </span>
        </template>
      </div>
    </div>

    <div
      class="hidden md:block self-start mt-2 h-20 w-full overflow-hidden rounded-md bg-white/[0.02] outline outline-1 -outline-offset-1 outline-white/10 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out"
    >
      <NuxtImg
        :src="props.project.image"
        alt=""
        class="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        :placeholder="[591, 313]"
      />
    </div>
  </component>
</template>
