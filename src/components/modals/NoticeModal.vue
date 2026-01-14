<template>
  <div class="backdrop" @click.self="cancel">
    <div class="modal" role="dialog" aria-modal="true">
      <h3 class="title">{{ title }}</h3>

      <p v-if="message" class="message">
        {{ message }}
      </p>

      <div class="actions">

        <button class="btn primary" :class="variant" @click="confirm" autofocus>
          {{ confirmText }}
        </button>

      </div>
    </div>
  </div>
</template>

<script setup>
import { close } from '@/composables/useModal'

defineProps({
  title: { type: String, required: true },
  message: { type: String, default: '' },
  confirmText: { type: String, default: 'Ok Then' },
  variant: {
    type: String,
    default: 'standard' // 'danger' | 'default'
  }
})

function confirm() {
  close(true)
}

</script>

<style scoped>
.backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: grid;
  place-items: center;
  z-index: 1000;
}

.modal {
  width: 100%;
  max-width: 360px;
  background: #1e1e1e;
  border: 1px solid #2f2f2f;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.title {
  margin: 0 0 8px;
  font-size: 16px;
}

.message {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 16px;
}

.actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

.btn {
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 13px;
  cursor: pointer;
  border: 1px solid transparent;
}

.btn.secondary {
  background: transparent;
  color: rgba(255, 255, 255, 0.7);
  border-color: #2f2f2f;
}

.btn.primary {
  background: #6366f1;
  color: white;
}

.btn.primary.danger {
  background: #ff646183;
}

.btn.primary.danger:hover {
  background: #ff6461;
}


.btn.primary.cool {
  background: #7442b983;
  border-color: transparent;
}

.btn.primary.cool:hover {
  background: #bc5090;
}

.btn.primary.standard {
  background: #ffa600;
  border-color: transparent;
}

.btn.primary.standard:hover {
  background: #ff7c43;
}

.btn.primary.purple {
  background: #a05195;
  border-color: transparent;
}

.btn.primary.purple:hover {
  background: #665191;
}
</style>
