<script setup>
    import EventList from '../components/EventList.vue';

    defineProps({
        events: {
            type: Array,
            required: true
        },
        getData: {
            type: Function,
            required: true
        }
    });
</script>
<template>
    <EventList :displayed-events="events" :events="events" :get-data="getData" route="events" />
</template>