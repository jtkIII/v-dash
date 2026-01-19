## Views

### Files
```
├── views/
│   ├── AboutView.vue
│   ├── BlogView.vue
│   ├── EvenMore.vue
│   ├── HomeView.vue
│   ├── SettingView.vue

```

#### Router Level
My idea has always been that router level, pages if you will, belong in a folder called views in /src/views.  These views usually assemble components into what renders as a web page.  They don't **Have** to have components - see the AboutView.vue - although that is generally the pattern.  See (SettingsView.vue)[https://github.com/jtkIII/v-dash/blob/main/src/views/SettingsView.vue] for an example of importing components inside of other components.

##### HomeView.vue
HomeView is the, well, home page in this app.  

In App.vue itself you can think of *Router Level Views* appearing where <router-view /> is.  Basically what you choose via the router replaces the router-view.

I include links to the files in /src/views in the router in /src/router/index.js