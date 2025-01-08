<template>
  <div class="w-full text-white min-h-dvh bg-[#161616]">
    <div class="">

      <!-- <div
        class="bg-blue-800/10 fixed left-64 inset-y-1/4 transition-all duration-200 w-[1500px] h-[300px] rounded-full blur-3xl rotate-[26deg]"
      ></div> -->

      <!-- <div
        class="blur-[250px] bg-gradient-to-r from-[#f8e42e]/30 to-[#ff7d54]/30 fixed left-64 inset-y-1/4 transition-all duration-200 w-[1500px] h-[300px] rounded-full rotate-[26deg]"
      ></div> -->

      <!-- <div
        class="bg-fuchsia-400/10 fixed left-80 transition-all duration-200 w-[1500px] h-[300px] rounded-full blur-3xl rotate-[26deg]"
      ></div> -->

      <!-- <div
        class="bg-blue-800/10 fixed left-64 inset-y-1/4 transition-all duration-200 w-[1500px] h-[300px] rounded-full blur-3xl rotate-[26deg]"
      ></div>

      <div
        class="bg-fuchsia-400/10 fixed left-80 transition-all duration-200 w-[1500px] h-[300px] rounded-full blur-3xl rotate-[26deg]"
      ></div> -->


      <!-- <div
        class="bg-blue-500/40 fixed bottom-24 xl:right-72 transition-all duration-200 right-0 w-40 h-40 blur-3xl"
      ></div> -->

      <!-- <div
        class="bg-blue-500 fixed bottom-24 xl:right-72 transition-all duration-200 right-0 w-40 h-40 blur-3xl"
      ></div> -->

      <!--   <div class="bg-blue-500 absolute bottom-24 w-40 right-24 h-40 blur-3xl"></div> -->

<!--     <div class="bg-orange-500 absolute left-20 w-40 h-40 blur-3xl"></div> -->

      <!-- <div
        class="bg-yellow-500 absolute bottom-20 xl:right-96 transition-all duration-200 right-10 w-40 h-40 blur-3xl"
      ></div> -->

      <TheNavbar />
      <div
        class="m-auto max-w-[1400px] animate-fade-in shrink-0 space-y-6 md:px-10 px-4 flex flex-col md:pt-48 pt-32 items-start h-full w-full transition-width duration-200 xl:w-2/3"
      >
        <slot />
      </div>

      <footer class="fixed bottom-0 flex items-center justify-center w-full p-3 backdrop-blur-sm">
        <NuxtLink to="https://nuxt.com/" target="_blank" external>
          <div class="text-xs inline-flex items-center space-x-2">
            <span>
              Made with 
            </span>
            <Icon name="logos:nuxt-icon" size="1.15em" />
          </div>
        </NuxtLink>
      </footer>
    </div>
  </div>
</template>

<style>
body,
html {
  background: #161616;
  padding-top: env(safe-area-insert-top);
}

:root {
  background: #161616;
}

::selection {
  background: #FAE38A;
  color: #000000;
}

.foo {
  background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="20" height="20" transform="scale(3)"%3E%3Crect width="100%25" height="100%25" fill="hsl(0, 0%25, 8.5%25)"%3E%3C/rect%3E%3Crect width="100%25" height="100%25" fill="hsl(0, 0%25, 8.5%25)"%3E%3C/rect%3E%3Cpath fill="none" stroke="hsl(0, 0%25, 11.0%25)" stroke-width=".2" d="M10 0v20ZM0 10h20Z"%3E%3C/path%3E%3C/svg%3E');
  background-repeat: repeat;
  width: 100%;
  min-height: 100vh;
  background-size: 40px 40px;
/*   background-size: 20px 20px; */
}
</style>
