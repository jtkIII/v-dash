##### Simple Global State (No Pinia)
- src/store/state.js

```
import { reactive } from 'vue'

- export const state = reactive({
  user: null,
  isLoggedIn: false
})
```

- Usage in components:

```
import { state } from '@/store/state'
state.isLoggedIn = true
```+