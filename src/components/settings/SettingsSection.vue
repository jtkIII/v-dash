<template>
  <section class="settings-section">
    <header class="header">
      <h2 class="title">{{ title }}</h2>
      <p v-if="description" class="description">
        {{ description }}
      </p>
    </header>

    <div class="rows">
      <slot />
    </div>
  </section>
</template>


<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  }
})
</script>


<style scoped>
.settings-section {
  padding: 16px 0;
}

.settings-section .header{
    background-color: var(--bg-surface);
    padding: 5px;
    margin-bottom: 5px;
    border-radius: var(--radius-sm);
}

.title {
  font-size: var(--txt-lg);
  font-weight: 600;
  color: var(--text-heading);
  margin: 5px 0 0 5px;
}

.description {
  margin: 2px 0 10px 5px;
  font-size: var(--txt-md);
  color: var(--text-muted);
}

.rows {
  margin-top: var(--space-lg);
  background-color: var(--bg-list);
  border-radius: var(--radius-md);
  padding: 0;
  border: 1px solid var(--border-subtle);
}
</style>
