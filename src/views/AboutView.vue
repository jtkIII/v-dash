<template>
  <main class="content-prose">
    <h2>About VuDash</h2>
    <p>VuDash is a small demo dashboard built with Vue and Vite to showcase layout and typographic patterns. This page
      demonstrates how basic content will look across the app including headings, lists, tables, forms, code, and
      components.</p>

    <h3>Headings & Text</h3>
    <p>Use <strong>strong</strong>, <em>emphasis</em>, and <code>inline code</code> to highlight text. Here's an example
      link to the <a href="#">home page</a>.</p>

    <h4>Blockquote</h4>
    <blockquote>“Good design is as little design as possible.” — Dieter Rams</blockquote>

    <h3>Lists</h3>
    <ul>
      <li>Bullet list item</li>
      <li>Nested list:
        <ul>
          <li>Nested item one</li>
          <li>Nested item two</li>
        </ul>
      </li>
      <li>Another item</li>
    </ul>

    <h3>Ordered list</h3>
    <ol>
      <li>First step</li>
      <li>Second step</li>
      <li>Third step</li>
    </ol>

    <h2>Code</h2>
    <pre><code>function greet(name) {
  return `Hello, ${name}!`
}</code></pre>

    <h2>Table</h2>
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>Status</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Routing</td>
          <td>Done</td>
          <td>Vue Router configured</td>
        </tr>
        <tr>
          <td>State</td>
          <td>Partial</td>
          <td>Simple global state in `store/state.js`</td>
        </tr>
        <tr>
          <td>Styling</td>
          <td>Planned</td>
          <td><a href="#">Utility and component styles</a></td>
        </tr>
      </tbody>
    </table>

    <h2>Form Elements</h2>
    <form @submit.prevent="onSubmit" class="sample-form" aria-label="sample form">
      <div class="form-row">
        <label for="name">Name</label>
        <input id="name" name="name" type="text" v-model="form.name" placeholder="Your name" />
      </div>
      <div class="form-row">
        <label for="role">Role</label>
        <select id="role" v-model="form.role">
          <option>Designer</option>
          <option>Engineer</option>
          <option>Product</option>
        </select>
      </div>
      <div class="form-row">
        <label>
          <input type="checkbox" v-model="form.subscribe" />
          Subscribe to updates
        </label>
      </div>
      <div class="form-row">
        <button type="submit">Submit</button>
        <button class="btn-secondary" type="button" @click="reset">Reset</button>
      </div>
    </form>

    <h2>Grid & Cards</h2>
    <div class="grid-cards">
      <article class="card">
        <h4>Card One</h4>
        <p>Short description to show card layout and spacing.</p>
      </article>
      <article class="card">
        <h4>Card Two</h4>
        <p>Cards automatically flow to available columns.</p>
      </article>
      <article class="card">
        <h4>Card Three</h4>
        <p>Use these for small summary items and actions.</p>
      </article>
    </div>

    <div class="callout">
      <strong>Tip:</strong> Keep content concise — use this page as the reference for typographic scale and spacing.
    </div>

    <h2>Image</h2>
    <figure>
      <img src="https://picsum.photos/800/300" alt="Placeholder photo" />
      <figcaption>Example image to show responsive behavior.</figcaption>
    </figure>

  </main>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      form: {
        name: '',
        role: 'Engineer',
        subscribe: false
      }
    }
  },
  methods: {
    onSubmit() {
      // noop for demo
      alert(`Submitted: ${this.form.name} (${this.form.role}) - subscribed: ${this.form.subscribe}`);
    },
    reset() {
      this.form.name = '';
      this.form.role = 'Engineer';
      this.form.subscribe = false;
    }
  }
}
</script>