<template>
  <div class="user-list">
    <div v-for="user in users" :key="user.id" class="user-card" :class="{ active: user.id === selectedUserId }"
      @click="selectUser(user.id)">
      <div class="avatar-wrapper">
        <img class="avatar" :src="user.avatar" :alt="user.name" />

        <span class="status-dot" :class="{ online: user.online, offline: !user.online }" />
      </div>

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
    avatar: 'https://i.pravatar.cc/80?img=12',
    online: true
  },
  {
    id: 2,
    name: 'Maria Lopez',
    position: 'Product Designer',
    blurb: 'Focused on usability, accessibility, and delightful UX.',
    avatar: 'https://i.pravatar.cc/80?img=32',
    online: false
  },
  {
    id: 3,
    name: 'Linda Linda',
    position: 'Backend Developer',
    blurb: 'API specialist with a passion for scalable systems.',
    avatar: 'https://i.pravatar.cc/80?img=45',
    online: true
  },
  {
    id: 4,
    name: 'Sam Shades',
    position: 'QA Engineer',
    blurb: 'Ensures top-notch quality through rigorous testing.',
    avatar: 'https://i.pravatar.cc/80?img=68',
    online: false
  },
  {
    id: 5,
    name: 'David Kendall',
    position: 'DevOps Engineer',
    blurb: 'Automates deployments and maintains infrastructure.',
    avatar: 'https://i.pravatar.cc/80?img=15',
    online: true
  }
]

function selectUser(id) {
  selectedUserId.value = id
}
</script>



<style>
.user-list {
  margin-top: .5rem;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* User card */
.user-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 16px;
  border-radius: 12px;
  background-color: #232323;
  border: 1px solid #8f8f8f13;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}

/* Hover (non-active) */
.user-card:hover:not(.active) {
  background-color: #161616;
}

/* Active / selected state */
.user-card.active {
  background-color: #202020;
  border-color: #6365f13c;
  box-shadow: 0 4px 10px rgba(99, 102, 241, 0.15);
}

/* Avatar wrapper */
.avatar-wrapper {
  position: relative;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
}

/* Avatar */
.avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  transition: box-shadow 0.2s ease;
}

/* Avatar ring when active */
.user-card.active .avatar {
  box-shadow: 0 0 0 2px #6365f1c9;
}

/* Status dot */
.status-dot {
  position: absolute;
  bottom: -1px;
  right: -1px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid #ffffff;
}

/* Online status */
.status-dot.online {
  background-color: #22c55e;
  box-shadow: 0 0 6px rgba(34, 197, 94, 0.7);
}

/* Offline status */
.status-dot.offline {
  background-color: #9ca3af;
}

/* User info */
.user-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

/* Name + position row */
.user-header {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

/* Name */
.name {
  font-size: 15px;
  font-weight: 600;
  margin: 0;
  color: #648ce3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Position */
.position {
  font-size: 13px;
  color: #6b7280;
  white-space: nowrap;
}

/* Blurb */
.blurb {
  font-size: 13px;
  color: #4b5563;
  margin: 0;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>