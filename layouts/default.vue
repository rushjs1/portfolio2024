<template>
  <div class="w-full text-white min-h-screen bg-[#161616]">
    <div class="foo">
      <div
        class="bg-blue-500 absolute bottom-24 xl:right-72 transition-all duration-200 right-0 w-40 h-40 blur-3xl"
      ></div>

      <!--   <div class="bg-blue-500 absolute bottom-24 w-40 right-24 h-40 blur-3xl"></div> -->

      <!--       <div class="bg-orange-500 absolute left-20 w-40 h-40 blur-3xl"></div> -->

      <!-- <div
        class="bg-yellow-500 absolute bottom-20 xl:right-96 transition-all duration-200 right-10 w-40 h-40 blur-3xl"
      ></div> -->

      <header class="w-full fixed right-0 left-0 top-0 p-4 backdrop-blur-sm">
        <TheNavbar />
      </header>

      <div
        class="m-auto animate-fade-in shrink-0 space-y-6 md:px-10 px-4 flex flex-col pt-48 items-start h-full w-full transition-width duration-200 xl:w-2/3"
      >
        <slot />
      </div>

      <footer class="fixed bottom-0 flex items-center justify-center w-full p-3 backdrop-blur-sm">
        <div class="text-xs inline-flex items-center space-x-2">
          <span>
            Made with 
          </span>
          <IconNuxt class="h-5 w-5" />
        </div>
      </footer>
    </div>
  </div>
</template>

<style>
body,
html {
  background: #161616;
}

.foo {
  background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="20" height="20" transform="scale(3)"%3E%3Crect width="100%25" height="100%25" fill="hsl(0, 0%25, 8.5%25)"%3E%3C/rect%3E%3Crect width="100%25" height="100%25" fill="hsl(0, 0%25, 8.5%25)"%3E%3C/rect%3E%3Cpath fill="none" stroke="hsl(0, 0%25, 11.0%25)" stroke-width=".2" d="M10 0v20ZM0 10h20Z"%3E%3C/path%3E%3C/svg%3E');
  background-repeat: repeat;
  width: 100%;
  min-height: 100vh;
  background-size: 40px 40px;
}

.bar {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' transform='scale(3)'%3E%3Crect width='100%25' height='100%25' fill='%23fff'/%3E%3Cpath fill='none' stroke='hsla(0, 0%25, 98%25, 1)' stroke-width='.2' d='M10 0v20ZM0 10h20Z'/%3E%3C/svg%3E");
  background-repeat: repeat;
  width: 100%;
  min-height: 100vh;
  background-size: 40px 40px;
}
</style>
