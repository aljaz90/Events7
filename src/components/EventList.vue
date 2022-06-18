<script setup>
    import { ref } from 'vue'

    const props = defineProps({
        trackers: {
            type: Array,
            required: true
        }
    });

    const selectedTracker = ref(null);

    const selectTracker = id => {
        let tracker = props.trackers.find(el => el.id == id);
        selectedTracker.value = tracker;
    };
    const unselectTracker = () => {
        selectedTracker.value = null;
    };
    const handlePopupClick = e => {
        e.preventDefault();
        e.stopPropagation();
    };


</script>
<template>
    <div class="tracker_popup" @click="unselectTracker" v-if="selectedTracker">
        <div class="tracker_popup--popup" @click="handlePopupClick" v-if="selectedTracker">
            
        </div>
    </div>
    <div class="dashboard--event_list">
        <div class="dashboard--event_list--title">
            Event trackers
        </div>
        <div class="dashboard--event_list--list">
            <div v-for="tracker in trackers" @click="selectTracker(tracker.id)" class="dashboard--event_list--list--item">
                <span class="dashboard--event_list--list--item--group">
                    <div class="dashboard--event_list--list--item--id">
                        <span class="dashboard--event_list--list--item--id--label">
                            Id
                        </span>
                        {{ tracker.id }}
                    </div>
                    <div class="dashboard--event_list--list--item--type">
                        <span class="dashboard--event_list--list--item--type--label">
                            Type
                        </span>
                        {{ tracker.type }}
                    </div>
                    <div class="dashboard--event_list--list--item--name">
                        <span class="dashboard--event_list--list--item--name--label">
                            Name
                        </span>
                        {{ tracker.name }}
                    </div>
                </span>
                <div class="dashboard--event_list--list--item--priority">
                    <span class="dashboard--event_list--list--item--priority--label">
                        Priority
                    </span>
                    {{ tracker.priority }}
                </div>
            </div>
        </div>
        <div class="btn dashboard--event_list--view_all">
            View all
        </div>
    </div>
</template>