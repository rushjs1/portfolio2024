<script setup lang="ts">
import Vue from '@/components/icon/Vue.vue';
import Laravel from '@/components/icon/Laravel.vue';
import Tailwind from '@/components/icon/Tailwind.vue';
import PaintBrush from '@/components/icon/PaintBrush.vue';
import Ionic from '@/components/icon/Ionic.vue';
import Capacitor from '@/components/icon/Capacitor.vue';
import Typescript from '@/components/icon/Typescript.vue';
import Neovim from '@/components/icon/Neovim.vue';
import Lua from '@/components/icon/Lua.vue';
import PuzzlePiece from '@/components/icon/PuzzlePiece.vue';

const projects = [
  {
    id: 1,
    title: 'Filter Fetch',
    body: 'E-Commerce program for HVAC contractors with a focus on streamlining the filter replacement process.',
    image: '/filter-fetch-card-bg.png',
    link: 'https://filterfetch.com',
    tags: [
      {
        component: Vue,
        title: 'Vue'
      },
      {
        component: Laravel,
        title: 'Laravel'
      },
      {
        component: Tailwind,
        title: 'Tailwindcss'
      },
      {
        component: PaintBrush,
        title: 'New Design'
      },
    ]
  },
  {
    id: 1,
    title: 'EContractor',
    body: 'E-Commerce store for contractor websites. Highly customizable and integrates into any type of website. Notable features include product subscriptions, customizable product markups, customizable promo codes, marketing emails and more.',
    image: '/EContractor-card-bg.png',
    link: 'https://v2--rainmakerhvac.netlify.app/econtractor#/home',
    tags: [
      {
        component: Vue,
        title: 'Vue'
      },
      {
        component: Laravel,
        title: 'Laravel'
      },
      {
        component: Tailwind,
        title: 'Tailwindcss'
      },
      {
        component: PaintBrush,
        title: 'New Design'
      },
    ]
  },
  {
    id: 1,
    title: 'Filter Fetch Mobile',
    body: 'Mobile app for the Filter Fetch program. Designed specifically for HVAC Technicians with a strong focus on usability.',
    image: '/filter-fetch-mobile-card-bg.png',
    link: 'itms-apps://apps.apple.com/us/app/filterfetch-mobile/id1166270595',
    tags: [
      {
        component: Vue,
        title: 'Vue'
      },
      {
        component: Ionic,
        title: 'Ionic'
      },
      {
        component: Capacitor,
        title: 'Capacitor'
      },
      {
        component: Typescript,
        title: 'TypeScript'
      },
      {
        component: Laravel,
        title: 'Laravel'
      },
      {
        component: Tailwind,
        title: 'Tailwindcss'
      },
      {
        component: PaintBrush,
        title: 'New Design'
      },
    ]
  },
  {
    id: 1,
    title: 'Tailwind UI Rebuilds',
    body: 'Mobile app for the Filter Fetch program. Designed specifically for HVAC Technicians with a strong focus on usability.',
    image: '/tur2.png',
    link: 'https://tailwind-ui-rebuilds.netlify.app/',
    tags: [
      {
        component: Vue,
        title: 'Vue'
      },
      {
        component: Tailwind,
        title: 'Tailwindcss'
      },
    ]
  },
  {
    id: 1,
    title: 'Clock.nvim',
    body: 'A simple clock and pomodoro timer plugin for Neovim.',
    image: '/clock.nvim-card-bg.png',
    link: 'https://github.com/rushjs1/clock.nvim',
    tags: [
      {
        component: Neovim,
        title: 'Neovim'
      },
      {
        component: Lua,
        title: 'Lua'
      },
      {
        component: PuzzlePiece,
        title: 'Plugin'
      }
    ]
  },
  {
    id: 1,
    title: 'Nuxt-goto.nvim',
    body: "Neovim plugin that redirects LSP 'Go to Definition' on a vue component from within a nuxt project to the correct definition source.",
    image: '/nuxt-goto.nvim-card-bg.png',
    link: 'https://github.com/rushjs1/nuxt-goto-alias.nvim',
    tags: [
      {
        component: Neovim,
        title: 'Neovim'
      },
      {
        component: Lua,
        title: 'Lua'
      },
      {
        component: PuzzlePiece,
        title: 'Plugin'
      }
    ]
  }
]
</script>

<template>
  <div class="flex flex-col items-start w-full">
    <div class="flex items-center space-x-4 w-full">
      <BackButton />
      <span class="text-5xl font-bold"> Projects </span>
    </div>
    <div class="w-full mt-6 mb-20 grid md:grid-cols-2 grid-cols-1 gap-4">
      <ProjectCard 
        v-for="(project, idx) in projects" 
        :key="idx" 
        :title="project.title" 
        :body="project.body" 
        :img="project.image" 
        :link="project.link" 
        :tags="project.tags" 
      />

      <div class="bg-emerald-500">foo</div>
    </div>
  </div>
</template>
