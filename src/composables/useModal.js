import { shallowRef } from 'vue'

export const modal = shallowRef(null)

let resolver = null

export function open(component, props = {}) {
  return new Promise((resolve) => {
    resolver = resolve
    modal.value = { component, props }
  })
}

export function close(result) {
  modal.value = null
  resolver?.(result)
  resolver = null
}

import ConfirmModal from '@/components/modals/ConfirmModal.vue'
import NoticeModal from '@/components/modals/NoticeModal.vue'

export function notice(options) {
  return open(NoticeModal, options)
}

export function confirm(options) {
  return open(ConfirmModal, options)
}
