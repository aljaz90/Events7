<script setup>
import EventForm from '../EventCreation/EventForm.vue';
    const props = defineProps({
        editMode: {
            type: Boolean,
            required: true
        },
        selectedEvent: {
            required: true
        },
        unselectEvent: {
            type: Function,
            required: true
        },
        handlePopupClick: {
            type: Function,
            required: true
        },
        editEvent: {
            type: Function,
            required: true
        },
        saveEvent: {
            type: Function,
            required: true
        },
        deleteEvent: {
            type: Function,
            required: true
        },
        events: {
            type: Array,
            required: true
        }
    });

    const relatedEventOptions = props.events.map(el => ({ key: el.id, value: el.name }));
    const defaultFormValues = {
        ...props.selectedEvent,
        relatedEvents: props.selectedEvent.relatedEvents.map(el => el.id)
    }
    const submitBtnOptions = {
        class: "btn btn-success",
        value: "Save"
    }
</script>
<template>
    <div class="tracker_popup" @click="unselectEvent">
        <div class="tracker_popup--popup" @click="handlePopupClick">
            <EventForm 
                v-if="editMode" 
                :relatedEventOptions="relatedEventOptions"
                :onSubmit="saveEvent"
                :default-values="defaultFormValues"
                :submit-button="submitBtnOptions"
            />
            <div v-else class="tracker_popup--popup--tracker">
                <div class="tracker_popup--popup--tracker--header">
                    <span class="tracker_popup--popup--tracker--header--group">
                        <div class="tracker_popup--popup--tracker--header--id">
                            <span class="tracker_popup--popup--tracker--header--id--label">
                                Id
                            </span>
                            <span>
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
                <div @click="deleteEvent" class="btn btn-error tracker_popup--popup--footer--action">
                    Delete
                </div>
                <div @click="unselectEvent" class="btn btn-secondary tracker_popup--popup--footer--action">
                    Close
                </div>
            </div>
        </div>
    </div>
</template>