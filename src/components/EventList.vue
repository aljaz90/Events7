<script setup>
    import { ref } from 'vue';
    import { db } from '../db';
    import { doc, deleteDoc, setDoc } from "firebase/firestore";

    import Popup from './EventList/Popup.vue'
import { computed } from '@vue/reactivity';

    const props = defineProps({
        events: {
            type: Array,
            required: true
        },
        displayedEvents: {
            type: Array,
            required: true
        },
        getData: {
            type: Function,
            required: true
        },
        route: {
            type: String,
            required: true
        }
    });

    const selectedEvent = ref(null);
    const editMode = ref(false);

    const selectEvent = id => {
        let event = { ...props.events.find(el => el.id == id) };
        event.relatedEvents = event.relatedEvents.map(eventId => props.events.find(el => el.id === eventId));
        selectedEvent.value = event;
    };

    const unselectEvent = () => {
        selectedEvent.value = null;
        editMode.value = false;
    };

    const saveEvent = async (data) => {
        try {
            await setDoc(doc(db, "events", `${data.id}`), data);
            let newData = await props.getData();

            data.relatedEvents = data.relatedEvents.map(id => newData.find(el => id == el.id));
            selectedEvent.value = data;

            editMode.value = false;
        } 
        catch (error) {
            console.log(error);    
        }
    };
    const editEvent = () => {
        editMode.value = true;
    };
    const deleteEvent = async () => {
        try {
            await deleteDoc(doc(db, "events", `${selectedEvent.value.id}`));
            unselectEvent();
            props.getData();
        } 
        catch (error) {
            console.log(error);    
        }
    };

    const handlePopupClick = e => {
        e.preventDefault();
        e.stopPropagation();
    };

    const rootClass = computed(() => props.route === "events" ? "dashboard--event_list dashboard--event_list-events" : "dashboard--event_list");
</script>
<template>
    <Popup 
        v-if="selectedEvent"
        :editMode="editMode" 
        :selected-event="selectedEvent" 
        :delete-event="deleteEvent" 
        :save-event="saveEvent"
        :handle-popup-click="handlePopupClick" 
        :unselect-event="unselectEvent" 
        :edit-event="editEvent" 
        :events="events"
    />
    <div :class="rootClass">
        <div class="dashboard--event_list--title">
            Events
        </div>
        <div class="dashboard--event_list--list">
            <div v-for="event in displayedEvents" @click="selectEvent(event.id)" class="dashboard--event_list--list--item">
                <span class="dashboard--event_list--list--item--group">
                    <div class="dashboard--event_list--list--item--id">
                        <span class="dashboard--event_list--list--item--id--label">
                            Id
                        </span>
                        {{ event.id }}
                    </div>
                    <div class="dashboard--event_list--list--item--type">
                        <span class="dashboard--event_list--list--item--type--label">
                            Type
                        </span>
                        {{ event.type }}
                    </div>
                    <div class="dashboard--event_list--list--item--name">
                        <span class="dashboard--event_list--list--item--name--label">
                            Name
                        </span>
                        {{ event.name }}
                    </div>
                </span>
                <div class="dashboard--event_list--list--item--priority">
                    <span class="dashboard--event_list--list--item--priority--label">
                        Priority
                    </span>
                    {{ event.priority }}
                </div>
            </div>
        </div>
        <router-link v-if="route === 'dashboard'" to="/events" class="btn dashboard--event_list--view_all">
            View all
        </router-link>
    </div>
</template>