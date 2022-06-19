<script setup>
    import { computed } from '@vue/reactivity';
    import EventCreation from '../components/EventCreation.vue';
    import EventList from '../components/EventList.vue';
    import EventSummary from '../components/EventSummary.vue';

    const props = defineProps({
        events: {
            type: Array,
            required: true
        },
        getData: {
            type: Function,
            required: true
        }
    });

    const displayedEvents = computed(() => props.events.slice(0, 8));
</script>
<template>
    <EventSummary :events="events" />
    <EventCreation :events="events" :get-data="getData" />
    <EventList :displayedEvents="displayedEvents" :events="events" :get-data="getData" route="dashboard" />
</template>