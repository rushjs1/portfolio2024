<script setup lang="ts">

const { data: projects } = await useAsyncData('projects', () => queryContent('/projects').sort({ id: 1 }).find())
</script>

<template>
  <div class="flex flex-col items-start w-full">
    <!-- <div class="flex items-center space-x-4 w-full">
      <BackButton />
      <span class="text-5xl font-bold"> Projects </span>
    </div> -->

    <div class="flex flex-col items-start w-full space-y-3">
      <div class="flex items-center space-x-4 w-full">
        <BackButton />
        <span class="text-5xl font-bold"> Projects </span>
      </div>
      <span class="bg-yellow-400 rounded-full h-2 w-44">
      </span>
    </div>
    <div class="w-full mt-6 mb-20 grid md:grid-cols-2 grid-cols-1 gap-4">
      <ProjectCard 
        v-for="(project, idx) in projects" 
        :key="idx" 
        :project="project"
      />
    </div>
  </div>
</template>
