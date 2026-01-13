<template>
  <div id="even-more-header">
    <CardHeader title="Even More Features" subtitle="Explore additional functionalities below." />
  </div>
  <StatCards />
  <ContentSep />
  <LeaderBoard @update:order="saveLeaderboardOrder" />
</template>

<script setup>
import LeaderBoard from '../components/shared/LeaderBoard.vue';
import StatCards from '../components/shared/StatCards.vue';
import CardHeader from '../components/shared/CardHeader.vue';
import ContentSep from '../components/shared/ContentSep.vue';
function saveLeaderboardOrder(order) {
  // later → API / localStorage / backend
  console.log('New order:', order)
}
</script>

<style scoped>
  #even-more-header {
    padding: 15px 0 5px 5px;
    display: block;
  }
</style>