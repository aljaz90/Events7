<script setup>
    import { computed } from '@vue/reactivity';
    import CheckmarkIcon from 'vue-ionicons/dist/ios-checkmark.vue';
    import OptionsIcon from 'vue-ionicons/dist/ios-options.vue';

    const props = defineProps({
        events: {
            type: Array,
            required: true
        }
    });

    const activeEvents = computed(() => props.events.length);
    const typesOfEvents = computed(() => new Set(props.events.map(el => el.type)).size);
</script>
<template>
    <div class="dashboard--event_summary">
        <div class="dashboard--event_summary--title">
            Summary
        </div>
        <div class="dashboard--event_summary--list">
            <div class="dashboard--event_summary--list--item dashboard--event_summary--list--item-active_trackers">
                <CheckmarkIcon />
                <span class="dashboard--event_summary--list--item--key">
                    Active events: 
                </span>
                <span class="dashboard--event_summary--list--item--value">
                    {{ activeEvents }}
                </span>
            </div>
            <div class="dashboard--event_summary--list--item">
                <OptionsIcon />
                <span class="dashboard--event_summary--list--item--key">
                    Types of events: 
                </span>
                <span class="dashboard--event_summary--list--item--value">
                    {{ typesOfEvents }}
                </span>
            </div>
        </div>
    </div>
</template>