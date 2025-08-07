<script setup lang="ts">
useSeoMeta({
  titleTemplate: 'John Rush | %s',
  themeColor: '#161616',
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator :throttle="100" color="#facc15" :height="1.5" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <UNotifications>
    <template #title="{ title }">
      <span v-html="title" />
    </template>
    <template #description="{ description }">
      <span v-html="description" />
    </template>
  </UNotifications>
</template>
