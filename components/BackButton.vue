<script setup></script>

<template>
  <button @click="$router.back()">
    <slot>
      <IconArrowLeft />
    </slot>
  </button>
</template>
