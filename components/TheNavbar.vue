<script setup lang="ts">
const { isCurrent, navArr } = useNav()

const mobileMenuOpen = ref(false)
</script>

<template>
  <div class="hidden sm:flex items-center m-auto justify-end xl:w-1/2 w-full space-x-6">
    <nav class="p-1">
      <ul class="text-xs font-bold no-highlight flex items-center space-x-6">
        <NuxtLink v-for="(r, idx) in navArr" :to="r.to" :key="idx" class="group">
          <li
            :class="[
              isCurrent(r.match) ? 'bg-[length:100%_2px]' : '',
              'p-1 bg-left-bottom bg-gradient-to-r from-yellow-400 to-yellow-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out',
            ]"
          >
            {{ r.name }}
          </li>
        </NuxtLink>
      </ul>
    </nav>
  </div>
  <MobileMenu v-model="mobileMenuOpen" />
</template>
