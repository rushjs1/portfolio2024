<script setup>
console.log("foo");
</script>

<template>
  <header class="w-full fixed right-0 left-0 top-0 p-4 backdrop-blur-sm">
    <div class="flex items-center m-auto justify-end xl:w-1/2 w-full space-x-6">
      <nav class="ring-[1px] p-0.5 ring-white/20 rounded-lg">
        <ul
          class="child:transition-colors child:duration-200 text-xs font-bold flex items-center space-x-0.5"
        >
          <li class="hover:bg-white/20 p-2 px-3 rounded-md">
            <a href="/home" class="">Home</a>
          </li>
          <li class="hover:bg-white/20 p-2 rounded-md px-3">
            <a href="/projects"> Projects </a>
          </li>
          <li class="hover:bg-white/20 p-2 rounded-md px-3">
            <a href="/about"> About </a>
          </li>
          <li class="hover:bg-white/20 p-2 rounded-md px-3">
            <a href="/contact"> contact </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <div
    class="bg-blue-500 absolute bottom-48 xl:right-72 transition-all duration-200 right-0 w-40 h-40 blur-3xl"
  ></div>
  <!-- <div
class="bg-purple-500 absolute top-20 w-40 right-24 h-40 blur-3xl"
></div> -->

  <!--       <div class="bg-orange-500 absolute left-20 w-40 h-40 blur-3xl"></div> -->

  <div
    class="bg-yellow-500 absolute bottom-20 xl:right-96 transition-all duration-200 right-10 w-40 h-40 blur-3xl"
  ></div>

  <div
    class="m-auto px-10 space-y-6 flex flex-col pt-48 items-start h-full w-full transition-width duration-200 xl:w-1/2"
  >
    <div class="relative shadow-lg group h-32 w-32 p-1 rounded-lg">
      <div
        class="bg-blue-500 absolute animate-pulse-slow blur-2xl group-hover:blur-3xl transition-all duration-200 top-1 left-1 inset-0 w-32 h-32"
      ></div>

      <!-- <div
class="absolute flex items-center animate-spin-slow group-hover:blur-3xl top-1 blur-3xl left-1 inset-0 w-32 h-32"
>
<div class="bg-blue-500 w-1/2 h-full">foo</div>
<div class="bg-yellow-500 w-1/2 h-full">bar</div>
</div> -->

      <img
        src="https://cdn.discordapp.com/attachments/958954015641702400/964913112291606598/chest.png?ex=65da0ddd&is=65c798dd&hm=38c36096849d85302dda5e93e397e049666215b6aa758751f2b4f0889f2f3205&"
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
    <div class="flex items-center space-x-4">
      <a href="https://github.com/rushjs1" target="_blank">
        <div class="bg-white rounded-md p-1">
          <IconGithubIcon />
        </div>
      </a>

      <a href="https://www.linkedin.com/in/john-rush-6680101a4">
        <div class="bg-white rounded-md p-1">
          <IconLinkedinIcon />
        </div>
      </a>
    </div>
    <div class="flex items-center space-x-4">
      <a
        href="/projects"
        class="px-6 bg-white/20 flex text-sm items-center group py-2 border border-white/20 rounded-md space-x-2"
      >
        <span> My Projects </span>
        <IconArrowRight
          class="text-white transition-all w-4 h-4 group-hover:translate-x-2 duration-300"
        />
      </a>
      <a href="/about">
        <span class="text-sm"> About Me </span>
      </a>
    </div>
  </div>
</template>

<style>
.foo {
  background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="20" height="20" transform="scale(3)"%3E%3Crect width="100%25" height="100%25" fill="hsl(0, 0%25, 8.5%25)"%3E%3C/rect%3E%3Crect width="100%25" height="100%25" fill="hsl(0, 0%25, 8.5%25)"%3E%3C/rect%3E%3Cpath fill="none" stroke="hsl(0, 0%25, 11.0%25)" stroke-width=".2" d="M10 0v20ZM0 10h20Z"%3E%3C/path%3E%3C/svg%3E');
  background-repeat: repeat;
  width: 100%;
  height: 100vh;
  background-size: 40px 40px;
}

.bar {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' transform='scale(3)'%3E%3Crect width='100%25' height='100%25' fill='%23fff'/%3E%3Cpath fill='none' stroke='hsla(0, 0%25, 98%25, 1)' stroke-width='.2' d='M10 0v20ZM0 10h20Z'/%3E%3C/svg%3E");
  background-repeat: repeat;
  width: 100%;
  height: 100vh;
  background-size: 40px 40px;
}
</style>
