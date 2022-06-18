<script setup>
    import { ref } from 'vue';
    import Popup from './EventList/Popup.vue'

    const props = defineProps({
        events: {
            type: Array,
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
    };

    const saveEvent = () => {
        editMode.value = false;
    };
    const editEvent = () => {
        editMode.value = true;
    };
    const deleteEvent = () => {
        // todo
    };

    const handlePopupClick = e => {
        e.preventDefault();
        e.stopPropagation();
    };


</script>
<template>
    <Popup :editMode="editMode" :selected-event="selectedEvent" :delete-event="deleteEvent" :save-event="saveEvent" :handle-popup-click="handlePopupClick" :unselect-event="unselectEvent" :edit-event="editEvent" />
    <div class="dashboard--event_list">
        <div class="dashboard--event_list--title">
            Events
        </div>
        <div class="dashboard--event_list--list">
            <div v-for="event in events" @click="selectEvent(event.id)" class="dashboard--event_list--list--item">
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
        <div class="btn dashboard--event_list--view_all">
            View all
        </div>
    </div>
</template>