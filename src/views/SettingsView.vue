<template>
  <SettingsSection title="Notifications" description="Control how and when the app notifies you">

    <SettingsRow label="Username" description="This will be visible to other users">
      <SettingInput v-model="form.username" placeholder="Enter username" />
    </SettingsRow>

    <SettingsRow label="Enable notifications" description="Allow system notifications">
      <SettingToggle v-model="form.notificationsEnabled" @commit="commit" />
    </SettingsRow>

    <SettingsRow label="Email updates" description="Receive weekly summaries">
      <SettingToggle v-model="form.emailUpdates" @commit="commit" />
    </SettingsRow>

    <SettingsRow label="Theme" description="Choose your preferred appearance">
      <SettingsSelect v-model="form.theme" :options="[
        { value: 'light', label: 'Light' },
        { value: 'dark', label: 'Dark' },
        { value: 'system', label: 'System' }
      ]" />
    </SettingsRow>

    <SettingsRow label="Crypto" description="Choose your preferred Crypto">
      <SettingsSelect v-model="form.crypto" :options="[
        { value: 'bitcoin', label: 'Bitcoin' },
        { value: 'ethereum', label: 'Ethereum' },
        { value: 'solana', label: 'Solana' }
      ]" />
    </SettingsRow>

    <SettingsRow label="Hash" description="Enter the provided hash value">
      <SettingInput v-model="form.hash" placeholder="Enter hash" />
    </SettingsRow>

    <SettingsRow label="Clear cache" description="Remove locally stored temporary data">
      <SettingAction @click="clearCache">
        Clear Local Data
      </SettingAction>
    </SettingsRow>

    <SettingsRow label="Reset settings" description="Restore all settings to their default values">
      <SettingAction variant="danger" @click="resetSettings">
        Reset Settings
      </SettingAction>
    </SettingsRow>
    emailUpdates
  </SettingsSection>
  <SettingsFooter :dirty="dirty" @save="save" @cancel="cancel" />
</template>

<script setup>
import { watch, ref, computed } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import SettingsRow from '@/components/settings/SettingsRow.vue'
import SettingToggle from '@/components/settings/SettingToggle.vue'
import SettingsSection from '@/components/settings/SettingsSection.vue'
import SettingsSelect from '@/components/settings/SettingsSelect.vue'
import SettingInput from '@/components/settings/SettingInput.vue'
import SettingAction from '@/components/settings/SettingAction.vue'
import SettingsFooter from '@/components/settings/SettingsFooter.vue'
import { confirm } from '@/composables/useModal'
import { useDirtyState } from '@/composables/useDirtyState'

const form = ref({
  hash: '',
  notificationsEnabled: true,
  emailUpdates: false,
  theme: 'dark',
  username: 'Jtk',
  crypto: 'bitcoin'
})

const defaultForm = { ...form.value }

// Computed property to check if form has changed
const hasChanged = computed(() => {
  return Object.keys(form.value).some(
    key => form.value[key] !== defaultForm[key]
  )
})

const props = defineProps({
  modelValue: Boolean,
  autoCommit: { type: Boolean, default: true }
})

const emit = defineEmits(['update:modelValue', 'commit'])


watch(
  () => props.modelValue,
  () => {
    if (props.autoCommit) {
      emit('commit')
    }
  }
)

const settings = ref({
  notifications: form.value.notificationsEnabled,
  theme: form.value.theme,
  username: form.value.username,
  hash: form.value.hash,
  crypto: form.value.crypto
})

const { dirty, commit, reset } = useDirtyState(settings)

// onBeforeRouteLeave(async () => {
//   if (hasChanged()) {
//   return await confirm({
//     title: 'Unsaved changes',
//     message: 'You have unsaved changes. Leave without saving?',
//     confirmText: 'Leave',
//     cancelText: 'Stay',
//     variant: 'danger'
//   })
// }
// })

const original = JSON.stringify(settings.value)

function save() {
  console.log(hasChanged.value)
  Object.assign(settings.value, JSON.parse(JSON.stringify(settings.value)))
}

function cancel() {
  settings.value = JSON.parse(original)
}

const resetSettings = () => {
  form.value.notificationsEnabled = false
  form.value.emailUpdates = false
  form.value.theme = 'dark'
  form.value.username = ''
  form.value.crypto = 'bitcoin'
  form.value.hash = ''
}

const clearCache = async () => {
  return await confirm({
    title: 'Unsaved changes',
    message: 'You have unsaved changes. Leave without saving?',
    confirmText: 'Leave',
    cancelText: 'Stay',
    variant: 'danger'
  })
}

</script>
