<script setup>
console.log("foo");
</script>

<template>
  <div class="w-full text-white min-h-screen bg-blue-500">
    <div class="foo">
      <header class="w-full fixed right-0 left-0 top-0 p-4 backdrop-blur-sm">
        <div class="flex items-center m-auto justify-between w-1/2 space-x-6">
          <div>logo</div>
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

      <!--       <div class="bg-blue-500 absolute top-20 w-40 h-40 blur-3xl">foo</div> -->
      <!--       <div class="bg-emerald-400 absolute top-72 w-40 h-40 blur-3xl">foo</div> -->
      <div
        class="bg-yellow-500 absolute bottom-0 right-72 w-40 h-40 blur-3xl"
      ></div>

      <div
        class="m-auto space-y-6 flex flex-col pt-48 items-start h-full w-1/2"
      >
        <div class="relative group h-24 w-24 p-1 rounded-lg">
          <div
            class="bg-blue-500 blur-2xl absolute group-hover:blur-3xl transition-all duration-200 top-1 left-1 inset-0 w-24 h-24"
          ></div>
          <img
            src="https://secure.gravatar.com/avatar/3683a0f4629cd4e57fc226338b081615?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FJR-6.png"
            class="ring-[1px] rounded-lg w-full h-full absolute ring-white/20"
          />
        </div>
        <span class="text-white text-3xl font-bold md:text-6xl sm:text-5xl">
          John Rush
        </span>
        <span class="text-md md:text-xl">
          I am a web developer from <b>Indianapolis, Indiana</b> with a passion
          for building secure and user friendly web applications
        </span>
      </div>
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
