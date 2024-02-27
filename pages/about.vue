<template>
  <div class="flex flex-col items-start w-full">
    <div class="flex items-center space-x-4 w-full">
      <BackButton />
      <span class="text-5xl font-bold"> About Me </span>
    </div>
    <div class="w-full p-6 rounded-lg flex-col space-y-4 backdrop-blur-sm bg-white/10 ring-[1px] ring-white/30 mt-6 mb-20 flex items-start">
      <span class="text-lg">
        I am currently employed as a Web Developer at <NuxtLink to="https://jacksonsystems.com/" target="_blank" external ><b><u>Jackson Systems</u></b></NuxtLink>. 
        Outside of my professional endeavors I enjoy spending time with my family and friends, watching sports, gaming, exercising and learning new things about programming!
      </span>
      <!-- <div>
        <span class='text-xl font-bold'>
          Fun Facts
        </span>
        <ul>
          <li>foo</li>
          <li>bar</li>
          <li>baz</li>
        </ul>
      </div> -->
      <span class="text-lg">
        If you would like to learn more about my work, please feel free to check out my <NuxtLink to="/projects"><u>projects</u></NuxtLink>. Additionally, please feel free to contact me <NuxtLink to="/contact"><u>here</u></NuxtLink>, or at any of the following social medias below for any business inquires!
      </span>
      <div class="space-y-3">
        <span class="text-xl font-bold">
          Lets Connect
        </span>
        <div class="flex items-center space-x-3">
          <SocialMediaButton to="https://github.com/rushjs1">
            <IconGithub />
          </SocialMediaButton>

          <SocialMediaButton to="https://www.linkedin.com/in/john-rush-6680101a4">
              <IconLinkedin />
          </SocialMediaButton>
        </div>

      </div>
    </div>
  </div>
</template>
