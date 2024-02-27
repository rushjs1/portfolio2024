<script setup lang="ts">
console.log("foo");
</script>

<template>
  <div class="relative shadow-lg group shrink-0 h-32 w-32 p-1 rounded-lg">
    <div
      class="bg-blue-500 absolute animate-pulse-slow blur-2xl group-hover:blur-3xl transition-all duration-200 top-1 left-1 inset-0 w-32 h-32"
    ></div>

    <!-- <div
class="absolute flex items-center animate-spin-slow group-hover:blur-3xl top-1 blur-3xl left-1 inset-0 w-32 h-32"
>
<div class="bg-blue-500 w-1/2 h-full">foo</div>
<div class="bg-yellow-500 w-1/2 h-full">bar</div>
</div> -->

    <!-- <img
      src="https://cdn.discordapp.com/attachments/958954015641702400/964913112291606598/chest.png?ex=65da0ddd&is=65c798dd&hm=38c36096849d85302dda5e93e397e049666215b6aa758751f2b4f0889f2f3205&"
      class="ring-[2px] rounded-lg w-full h-full absolute ring-white/20"
    /> -->

    <img
      src="/chest.png"
      class="ring-[2px] rounded-lg w-full h-full absolute ring-white/20"
    />
  </div>
  <span class="text-white text-3xl font-bold md:text-6xl sm:text-5xl">
    John Rush
  </span>
  <span class="text-md md:text-xl">
    I am a web developer from <b>Indianapolis, Indiana</b> with a passion for
    building secure and user friendly web applications.
  </span>
  <div class="flex items-center space-x-3">
    <SocialMediaButton to="https://github.com/rushjs1">
      <IconGithub />
    </SocialMediaButton>

    <SocialMediaButton to="https://www.linkedin.com/in/john-rush-6680101a4">
        <IconLinkedin />
    </SocialMediaButton>
  </div>
  <div class="flex items-center space-x-4">
    <NuxtLink
      to="/projects"
      class="px-8 relative bg-white/10 flex grow-0 text-sm items-center group py-2 border border-white/20 rounded-md space-x-2"
    >
      <span class="group-hover:-translate-x-4 duration-200 ease-out">
        My Projects
      </span>
      <IconArrowRight
        class="text-white absolute right-4 transition-all w-4 h-4 group-hover:opacity-100 opacity-0 duration-300"
      />
    </NuxtLink>
    <NuxtLink to="/about">
      <span class="text-sm"> About Me </span>
    </NuxtLink>
  </div>
</template>
