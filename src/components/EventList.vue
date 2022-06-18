<script setup>
    import { ref } from 'vue'

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
    <div class="tracker_popup" @click="unselectEvent" v-if="selectedEvent">
        <div class="tracker_popup--popup" @click="handlePopupClick" v-if="selectedEvent">
            <div class="tracker_popup--popup--tracker">
                <div class="tracker_popup--popup--tracker--header">
                    <span class="tracker_popup--popup--tracker--header--group">
                        <div class="tracker_popup--popup--tracker--header--id">
                            <span class="tracker_popup--popup--tracker--header--id--label">
                                Id
                            </span>
                            <input v-if="editMode" :value="selectedEvent.id" />
                            <span v-else>
                                {{ selectedEvent.id }}
                            </span>
                        </div>
                        <div class="tracker_popup--popup--tracker--header--type">
                            <span class="tracker_popup--popup--tracker--header--type--label">
                                Type
                            </span>
                            {{ selectedEvent.type }}
                        </div>
                        <div class="tracker_popup--popup--tracker--header--name">
                            <span class="tracker_popup--popup--tracker--header--name--label">
                                Name
                            </span>
                            {{ selectedEvent.name }}
                        </div>
                    </span>
                    <div class="tracker_popup--popup--tracker--header--priority">
                        <span class="tracker_popup--popup--tracker--header--priority--label">
                            Priority
                        </span>
                        {{ selectedEvent.priority }}
                    </div>
                </div>
                <div class="tracker_popup--popup--tracker--description">
                    <span class="tracker_popup--popup--tracker--description--label">
                        Description
                    </span>
                    {{ selectedEvent.description }}
                </div>
                <div class="tracker_popup--popup--tracker--related_events">
                    <span class="tracker_popup--popup--tracker--related_events--label">
                        Related events
                    </span>
                    <div v-for="event in selectedEvent.relatedEvents" class="tracker_popup--popup--tracker--related_events--item">
                        <span class="tracker_popup--popup--tracker--related_events--item--group">
                            <div class="tracker_popup--popup--tracker--related_events--item--id">
                                <span class="tracker_popup--popup--tracker--related_events--item--id--label">
                                    Id
                                </span>
                                {{ event.id }}
                            </div>                        
                            <div class="tracker_popup--popup--tracker--related_events--item--type">
                                <span class="tracker_popup--popup--tracker--related_events--item--type--label">
                                    Type
                                </span>
                                {{ event.type }}
                            </div>                        
                            <div class="tracker_popup--popup--tracker--related_events--item--name">
                                <span class="tracker_popup--popup--tracker--related_events--item--name--label">
                                    Name
                                </span>
                                {{ event.name }}
                            </div>                        
                        </span>
                        <div class="tracker_popup--popup--tracker--related_events--item--priority">
                            <span class="tracker_popup--popup--tracker--related_events--item--priority--label">
                                Priority
                            </span>
                            {{ event.priority }}
                        </div>                        
                    </div>
                </div>
            </div>
            <div class="tracker_popup--popup--footer">
                <div v-if="!editMode" @click="editEvent" class="btn btn-warning tracker_popup--popup--footer--action">
                    Edit
                </div>
                <div v-if="editMode" @click="saveEvent" class="btn btn-success tracker_popup--popup--footer--action">
                    Save
                </div>
                <div @click="deleteEvent" class="btn btn-error tracker_popup--popup--footer--action">
                    Delete
                </div>
                <div @click="unselectEvent" class="btn btn-secondary tracker_popup--popup--footer--action">
                    Close
                </div>
            </div>
        </div>
    </div>
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