<template>
  <div>
    <div class="cards-grid">
      <div class="card">
        <div class="card-heading">
          <h3>Team Members</h3>
        <p>A quick overview of your team and their roles.</p>
        </div>
        <ListUsers />
      </div>
      <div class="card">
        <h3>Quick Links</h3>
        <p>Links and shortcuts to common areas of the app.</p>
      </div>
      <div class="card">
        <h3>Stats</h3>
        <p>Summary metrics and recent activity.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import ListUsers from '../components/ListUsers.vue'
</script>

<style>
  .cards-grid {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 16px;
  }

  .card {
    padding: .5rem;
    border-radius: 8px;
    background: #262626;
  }
  .card h3 {
    margin-bottom: 0.1rem;
    font-size: small;
    color: #ffffff92;
  }
  .card p {
    font-size: 0.75rem;
    color: #b3b3b3;
  }
</style>