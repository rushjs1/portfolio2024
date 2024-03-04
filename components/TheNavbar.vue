<script setup lang="ts">
const route = useRoute();

const navArr = [
  { name: 'Home', to: '/', match: 'index' },
  { name: 'Projects', to: '/projects', match: 'projects' },
  { name: 'About', to: '/about', match: 'about' },
  { name: 'Contact', to: '/contact', match: 'contact' }
]

function isCurrent(name: string) {
  return route.name === name;
}
</script>

<template>
  <div class="flex items-center m-auto justify-end xl:w-1/2 w-full space-x-6">
    <nav class="p-1">
      <ul class="text-xs font-bold no-highlight flex items-center space-x-6">
        <NuxtLink v-for="(r, _) in navArr" :to="r.to" class="group">
          <li
            :class="[
              isCurrent(r.match) ? 'bg-[length:100%_2px]' : '',
              'p-1 bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out',
            ]"
          >
            {{ r.name }}
          </li>
        </NuxtLink>
      </ul>
    </nav>
  </div>
</template>
