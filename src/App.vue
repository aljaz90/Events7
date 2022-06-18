<script setup>
    import Layout from './containers/Layout.vue';
    import EventCreation from './components/EventCreation.vue';
    import EventList from './components/EventList.vue';
    import EventSummary from './components/EventSummary.vue';

    const trackers = [
        { id: 1, type: "app", name: "click-event", description: "when the user clicks the button the event should be triggered", priority: 0, relatedEvents: [1, 2] },
        { id: 1, type: "app", name: "click-event", description: "when the user clicks the button the event should be triggered", priority: 0, relatedEvents: [1, 2] },
        { id: 1, type: "app", name: "click-event", description: "when the user clicks the button the event should be triggered", priority: 0, relatedEvents: [1, 2] }
    ];
</script>

<template>
    <Layout />
    <EventSummary />
    <EventCreation />
    <EventList :trackers="trackers" />
</template>