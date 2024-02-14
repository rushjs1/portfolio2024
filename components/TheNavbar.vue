<script setup lang="ts">
const route = useRoute();

function isCurrent(name: string) {
  return route.name === name;
}
</script>

<template>
  <div class="flex items-center m-auto justify-end xl:w-1/2 w-full space-x-6">
    <nav class="ring-[1px] p-0.5 ring-white/20 rounded-lg">
      <ul class="text-xs font-bold flex items-center space-x-0.5">
        <NuxtLink to="/">
          <li
            :class="[
              isCurrent('index') ? 'bg-white/20' : '',
              'hover:bg-white/20 p-2 px-3 rounded-md transition-colors duration-200',
            ]"
          >
            Home
          </li>
        </NuxtLink>
        <NuxtLink to="/projects">
          <li
            :class="[
              isCurrent('projects') ? 'bg-white/20' : '',
              'hover:bg-white/20 p-2 rounded-md px-3 transition-colors duration-200 ',
            ]"
          >
            Projects
          </li>
        </NuxtLink>

        <NuxtLink to="/about">
          <li
            :class="[
              isCurrent('about') ? 'bg-white/20' : '',
              'hover:bg-white/20 p-2 rounded-md px-3 transition-colors duration-200 ',
            ]"
          >
            About
          </li>
        </NuxtLink>

        <NuxtLink to="/contact">
          <li
            :class="[
              isCurrent('contact') ? 'bg-white/20' : '',
              'hover:bg-white/20 p-2 rounded-md px-3 transition-colors duration-200 ',
            ]"
          >
            Contact
          </li>
        </NuxtLink>
      </ul>
    </nav>
  </div>
</template>
