# Components

## CardHeader

**Purpose:** Small reusable header for card-like UI that displays a title and optional subtitle.

### Props

| Prop | Type | Default | Description |
|---|---:|---:|---|
| `title` | `String` | `'Team Members'` | Main heading text (rendered in an `<h3>`). |
| `subtitle` | `String` | `'Overview of the team and their roles.'` | Secondary descriptive text (rendered in a `<p>`). |

### Usage

Basic static usage:

```vue
<CardHeader title="Project Stats" subtitle="Current sprint progress" />
```

Dynamic usage:

```vue
<CardHeader :title="group.name" :subtitle="group.description" />
```

Default props (no attributes):

```vue
<CardHeader />
<!-- Renders the default title and subtitle -->
```

### Styling

- The component uses the `.card-heading` class. Override or extend that class in your CSS to change spacing/typography.
- The component renders an `<h3>` element — ensure it fits the page's heading hierarchy.

### Accessibility

- Keep the heading level appropriate for the page structure. If needed, convert to a configurable heading level or wrap in a semantic container.

### Suggested Unit Test (Jest + Vue Test Utils)

```js
import { mount } from '@vue/test-utils'
import CardHeader from '@/components/CardHeader.vue'

test('renders props and defaults', () => {
  const wrapper = mount(CardHeader, {
    props: { title: 'Hello', subtitle: 'World' }
  })
  expect(wrapper.get('h3').text()).toBe('Hello')
  expect(wrapper.get('p').text()).toBe('World')
})
```
