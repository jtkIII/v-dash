<script setup>
import { useTheme } from '@/composables/useTheme'
 import {
    Sun, Moon
  } from 'lucide-vue-next'

const { theme, toggle } = useTheme()
</script>

<template>
  <button @click="toggle" class="btn secondary">
    <Sun v-if="theme === 'light'" class="icon" />
    <Moon v-else class="icon" />
    {{ theme === 'dark' ? 'Dark' : 'Light' }}
  </button>
</template>

<style scoped>
.btn.secondary {
  display: flex;
  align-items: center;
  gap: 4px;
}

.icon {
  width: 16px;
  height: 16px;
}
</style>