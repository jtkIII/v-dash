# Composables

## DISCLAIMER:
I am new to composables!  I've done a fair amount of Vue and more web projects than anyone in the history of web projects...  Still, this is new to me.  I used to just inclue .js files back before the Composition API; composables are similar but better.

### In the context of Vue applications, a "composable" is a function that leverages Vue's Composition API to encapsulate and reuse stateful logic.

[Composable](https://vuejs.org/guide/reusability/composables.html)

Still, I think that I have the hang of them but if you see anything that can be done better I wouldn't be surprised and please, feel free.

#### useModal

- useModal.js is prolly the best example (here)[https://github.com/jtkIII/v-dash/blob/main/src/composables/useModal.js] of how you are supposed to use composables
- useUsers is more of how I have always done things. 
- useDirtyState.js is the most half-baked part of this dashboard.

##### Todos

The charts have too much logic in the components.  Some of that should be in composables.