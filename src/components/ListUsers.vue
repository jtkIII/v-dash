<template>
  <div class="user-list">
    <div
      v-for="user in users"
      :key="user.id"
      class="user-card"
      :class="{ active: user.id === selectedUserId }"
      @click="selectUser(user.id)"
    >
      <img
        class="avatar"
        :src="user.avatar"
        :alt="user.name"
      />

      <div class="user-info">
        <div class="user-header">
          <h3 class="name">{{ user.name }}</h3>
          <span class="position">{{ user.position }}</span>
        </div>

        <p class="blurb">
          {{ user.blurb }}
        </p>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'

const selectedUserId = ref(null)

const users = [
  {
    id: 1,
    name: 'Alex Johnson',
    position: 'Frontend Engineer',
    blurb: 'Loves Vue, clean UI, and performance optimizations.',
    avatar: 'https://i.pravatar.cc/80?img=12'
  },
  {
    id: 2,
    name: 'Maria Lopez',
    position: 'Product Designer',
    blurb: 'Focused on usability, accessibility, and delightful UX.',
    avatar: 'https://i.pravatar.cc/80?img=32'
  },
  {
    id: 3,
    name: 'Sam Patel',
    position: 'Backend Developer',
    blurb: 'API specialist with a passion for scalable systems.',
    avatar: 'https://i.pravatar.cc/80?img=45'
  }
]

function selectUser(id) {
  selectedUserId.value = id
}
</script>


<style>
.user-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.user-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 16px;
  border-radius: 12px;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  cursor: pointer;
  transition: background-color 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

/* Hover (non-active) */
.user-card:hover:not(.active) {
  background-color: #f9fafb;
}

/* ACTIVE STATE */
.user-card.active {
  background-color: #eef2ff;
  border-color: #6366f1;
  box-shadow: 0 4px 10px rgba(99, 102, 241, 0.15);
}

/* Avatar */
.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  transition: box-shadow 0.2s ease;
}

/* Avatar ring when active */
.user-card.active .avatar {
  box-shadow: 0 0 0 2px #6366f1;
}

.user-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.user-header {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

.name {
  font-size: 15px;
  font-weight: 600;
  margin: 0;
  color: #111827;
}

.position {
  font-size: 13px;
  color: #6b7280;
}

.blurb {
  font-size: 13px;
  color: #4b5563;
  margin: 0;
  line-height: 1.4;
}

</style>