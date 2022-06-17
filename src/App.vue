<script setup>
  import Layout from './containers/Layout.vue';
  import EventCreation from './components/EventCreation.vue';
  import EventList from './components/EventList.vue';
  import EventSummary from './components/EventSummary.vue';
</script>

<template>
  <Layout />
  <EventSummary />
  <EventCreation />
  <EventList />
</template>