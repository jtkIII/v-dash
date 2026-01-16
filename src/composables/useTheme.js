import { ref, watch } from 'vue'

const theme = ref('dark') // 👈 shared singleton

export function useTheme() {
  watch(
    theme,
    value => {
      document.documentElement.dataset.theme = value
      localStorage.setItem('theme', value)
    },
    { immediate: true }
  )

  function toggle() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  return { theme, toggle }
}
