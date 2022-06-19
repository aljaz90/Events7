<script setup>
    import { ref } from 'vue';
    import { db } from './db';
    import { collection, getDocs } from "firebase/firestore"; 

    import Layout from './containers/Layout.vue';

    const EVENTS = [
        { id: 1, type: "app", name: "click-event", description: "when the user clicks the button the event should be triggered", priority: 0, relatedEvents: [2, 3] },
        { id: 2, type: "crosspromo", name: "click-event", description: "when the user clicks the button the event should be triggered", priority: 2, relatedEvents: [] },
        { id: 3, type: "app", name: "click-event", description: "when the user clicks the button the event should be triggered", priority: 5, relatedEvents: [1] },
        { id: 3, type: "app", name: "click-event", description: "when the user clicks the button the event should be triggered", priority: 5, relatedEvents: [1] },
        { id: 3, type: "app", name: "click-event", description: "when the user clicks the button the event should be triggered", priority: 5, relatedEvents: [1] },
        { id: 3, type: "app", name: "click-event", description: "when the user clicks the button the event should be triggered", priority: 5, relatedEvents: [1] },
        { id: 3, type: "app", name: "click-event", description: "when the user clicks the button the event should be triggered", priority: 5, relatedEvents: [1] },
        { id: 3, type: "app", name: "click-event", description: "when the user clicks the button the event should be triggered", priority: 5, relatedEvents: [1] },
        { id: 3, type: "app", name: "click-event", description: "when the user clicks the button the event should be triggered", priority: 5, relatedEvents: [1] },
        { id: 3, type: "app", name: "click-event", description: "when the user clicks the button the event should be triggered", priority: 5, relatedEvents: [1] },
        { id: 3, type: "app", name: "click-event", description: "when the user clicks the button the event should be triggered", priority: 5, relatedEvents: [1] },
        { id: 3, type: "app", name: "click-event", description: "when the user clicks the button the event should be triggered", priority: 5, relatedEvents: [1] },
        { id: 3, type: "app", name: "click-event", description: "when the user clicks the button the event should be triggered", priority: 5, relatedEvents: [1] },
        { id: 3, type: "app", name: "click-event", description: "when the user clicks the button the event should be triggered", priority: 5, relatedEvents: [1] },
        { id: 3, type: "app", name: "click-event", description: "when the user clicks the button the event should be triggered", priority: 5, relatedEvents: [1] },
    ];

    const getData = async () => {
        let data = [];
        try {
            //const querySnapshot = await getDocs(collection(db, "events"));
    
            data = EVENTS;
            // querySnapshot.forEach((doc) => {
            //     data.push(doc.data());
            // });    
        } 
        catch (error) {
            console.log(error);
        }
        events.value = data;
        return data;     
    }

    const events = ref([]);
    getData();
</script>
<template>
    <Layout />
    <router-view :events="events" :get-data="getData" />
</template>