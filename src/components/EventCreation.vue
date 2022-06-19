<script setup>
    import { db } from '../db';
    import { setDoc, doc } from "firebase/firestore"; 
    import EventForm from './EventCreation/EventForm.vue';
import { computed } from '@vue/reactivity';
    
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

    const createEvent = async (data, clearFields) => {
        let events = await props.getData();
        let ids = events.map(el => el.id);
        if (ids.some(el => el == data.id)) {
            return;
        }
    
        try {
            await setDoc(doc(db, "events", `${data.id}`), data);
            clearFields();
            props.getData();
        } 
        catch (error) {
            console.log(error);
        }        
    };

    const relatedEventOptions = computed(() => props.events.map(el => ({ key: el.id, value: el.name })));
</script>
<template>
    <div class="dashboard--event_creation">
        <div class="dashboard--event_creation--title">
            Create an event
        </div>
        <EventForm 
            :relatedEventOptions="relatedEventOptions"
            :onSubmit="createEvent"
        />
    </div>
</template>