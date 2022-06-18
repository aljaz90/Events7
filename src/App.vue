<script setup>
    import Layout from './containers/Layout.vue';
    import EventCreation from './components/EventCreation.vue';
    import EventList from './components/EventList.vue';
    import EventSummary from './components/EventSummary.vue';

    const events = [
        { id: 1, type: "app", name: "click-event", description: "when the user clicks the button the event should be triggered", priority: 0, relatedEvents: [2, 3] },
        { id: 2, type: "app", name: "click-event", description: "when the user clicks the button the event should be triggered", priority: 2, relatedEvents: [] },
        { id: 3, type: "app", name: "click-event", description: "when the user clicks the button the event should be triggered", priority: 5, relatedEvents: [1] }
    ];
</script>

<template>
    <Layout />
    <EventSummary />
    <EventCreation />
    <EventList :events="events" />
</template>