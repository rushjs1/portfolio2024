<script setup lang="ts">
useSeoMeta({
  title: 'About'
})
</script>

<template>
  <div class="flex flex-col items-start w-full">
    <div class="flex flex-col items-start w-full space-y-3">
      <div class="flex items-center space-x-4 w-full">
        <BackButton />
        <span class="text-5xl font-bold"> About Me </span>
      </div>
      <span class="bg-yellow-400 rounded-full h-2 w-44">
      </span>
    </div>
      <div class="w-full p-6 rounded-lg flex-col space-y-4 backdrop-blur-sm bg-white/10 ring-white/30 mt-6 mb-20 flex items-start">
        <span class="text-lg">
          I am currently employed as a Web Developer at <NuxtLink to="https://jacksonsystems.com/" target="_blank" external ><b><u>Jackson Systems</u></b></NuxtLink>. 
          Outside of my professional endeavors I enjoy spending time with my family and friends, watching sports, gaming, exercising and learning new things about programming!
        </span>
        <div>
          <span class='text-xl font-bold'>
            Additional Interests
          </span>
          <ul class="ml-4">
            <li>3D Art</li>
            <li>Guitar & Piano</li>
            <li>Music Production</li>
            <li>Game Development</li>
          </ul>
        </div>
        <span class="text-lg">
          If you would like to learn more about my work, please feel free to check out my <NuxtLink to="/projects"><u>projects</u></NuxtLink>. Additionally, please feel free to contact me <NuxtLink to="/contact"><u>here</u></NuxtLink>, or at any of the following social medias below for any business inquires!
        </span>
        <div class="space-y-3">
          <span class="text-xl font-bold">
            Lets Connect
          </span>
          <div class="flex items-center space-x-3">
            <SocialMediaButton to="https://github.com/rushjs1" aria-label="Github for John Rush">
              <Icon name="bi:github" size="1.5em" color="black" />
            </SocialMediaButton>

            <SocialMediaButton to="https://www.linkedin.com/in/john-rush-6680101a4" aria-label="linkedin for John Rush">
              <Icon name="logos:linkedin-icon" size="1.5em"/>
            </SocialMediaButton>
          </div>
        </div>
      </div>
  </div>
</template>
