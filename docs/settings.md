## SettingsView.vue

### Files
```
├── settings/
│   ├── SettingsAction.vue
│   ├── Settinginput.vue
│   ├── SettingFooter.vue
│   ├── SettingsRow.vue
│   ├── SettingSection.vue
│   ├── SettingSelect.vue
│   ├── SettingToggle.vue

```

#### Settings in Slots
This is a seemingly very simple section with components for standard form sections like input and select.  But it's one of my favorite parts of this app as it shows off a great way to use slots instead of props that I often use like a crutch... I digress.

You can see these components in action in the SettingsView.vue.  The idea is that settings components ( like SettingsInput.vue ) are displayed inside of SettingsRow, which is itself inside of SettingsSection.

You pass in the arguments you need for each component.  For instance SetttingsAction.vue needs a function to use for the action, SettingsInput needs a label, etc.