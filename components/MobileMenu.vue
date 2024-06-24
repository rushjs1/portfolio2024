<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
const { isCurrent, navArr } = useNav()

const isOpen = defineModel()
const isPageTop = ref(true)
const { y } = useWindowScroll()

function toggle(){
  isOpen.value = !isOpen.value

  document.body.style.overflow = isOpen.value ? 'visible' : 'hidden'
}

watch((y), () => {
  isPageTop.value = y.value <= 80
})
</script>

<template>
  <div :class="[isPageTop ? 'p-6' : 'p-0', 'flex sm:hidden items-center m-auto justify-end w-full space-x-6 transition-spacing duration-300']">
    <Icon name="pepicons-pop:menu-circle" size="2.5em" class="cursor-pointer" role="button" @click="toggle"/>
  </div>

  <Teleport to="body">
    <div class="relative">
      <Transition
        enter-active-class="transition-all duration-500 ease-in-out"
        leave-active-class="transition-all duration-500 ease-in-out"
        enter-from-class="translate-x-full"
        leave-to-class="translate-x-full"
      >
        <div v-if="isOpen" class="fixed z-[1000] inset-0 max-h-screen bg-[#161616] flex items-start overflow-hidden">
          <nav class="flex items-start justify-between w-full p-10">
            <ul class="text-2xl font-bold no-highlight flex flex-col items-start space-y-10 w-full">
              <NuxtLink v-for="(r, idx) in navArr" :to="r.to" :key="idx" class="group w-full" @click="toggle">
                <li
                  :class="[
                    isCurrent(r.match) ? 'bg-[length:30%_2px]' : '',
                    'p-1 text-white bg-left-bottom bg-gradient-to-r from-yellow-400 to-yellow-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:30%_2px] transition-all duration-500 ease-out',
                  ]"

                >
                  {{ r.name }}
                </li>
              </NuxtLink>
            </ul>
            <div class="text-white">
              <Icon name="carbon:close-outline" size="2.5em" class="cursor-pointer" role="button" @click="toggle"/>
            </div>
          </nav>
        </div>
      </Transition>
    </div>
  </Teleport>
</template>
