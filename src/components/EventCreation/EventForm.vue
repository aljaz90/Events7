<script setup>
    import { ref } from 'vue';
    import Select from '../Select.vue';

    const props = defineProps({
        onSubmit: {
            type: Function,
            required: true
        },
        relatedEventOptions: {
            type: Array,
            required: true
        },
        submitButton: {
            type: Object,
            default: {
                class: "btn",
                value: "Create"
            }
        },
        defaultValues: {
            type: Object,
            default: {}
        }
    });

    const selectedRelatedEvents = ref(props.defaultValues?.relatedEvents || []);

    const selectRelatedEvents = selectedEvents => selectedRelatedEvents.value = selectedEvents;
    const checkIfSelected = val => val === props.defaultValues?.type;
    const clearFields = e => {
        e.target.elements.id.value = "";
        e.target.elements.name.value = "";
        e.target.elements.description.value = "";
        e.target.elements.type.value = "";
        e.target.elements.priority.value = "";
    }

    const onSubmit = e => {
        e.preventDefault();

        const data = {
            id: Number.parseInt(e.target.elements.id.value),
            name: e.target.elements.name.value,
            description: e.target.elements.description.value,
            type: e.target.elements.type.value,
            priority: Number.parseInt(e.target.elements.priority.value),
            relatedEvents: selectedRelatedEvents.value.map(el => Number.parseInt(el))
        }

        props.onSubmit(data, () => clearFields(e));
    };

</script>
<template>
    <form class="form dashboard--event_creation--form" @submit="onSubmit" action="#">
        <div class="form--input_group">
            <label for="id">Id</label>
            <input required type="number" min="0" name="id" id="id" placeholder="Id" :value="defaultValues.id">
        </div>
        <div class="form--input_group">
            <label for="name">Name</label>
            <input required type="text" name="name" id="name" placeholder="Name" :value="defaultValues.name">
        </div>
        <div class="form--input_group">
            <label for="description">Description</label>
            <textarea name="description" id="description" placeholder="Description">{{ defaultValues.description }}</textarea>
        </div>
        <div class="form--input_group">
            <label for="type">Type</label>
            <select name="type" id="type" required>
                <option :selected="checkIfSelected('crosspromo')" value="crosspromo">Crosspromo</option>
                <option :selected="checkIfSelected('liveops')" value="liveops">Liveops</option>
                <option :selected="checkIfSelected('app')" value="app">App</option>
                <option :selected="checkIfSelected('ads')" value="ads">Ads</option>
            </select>
        </div>
        <div class="form--input_group">
            <label for="priority">Priority</label>
            <input type="number" min="0" max="10" placeholder="Priority (0-10)" required name="priority" id="priority" :value="defaultValues.priority">
        </div>
        <div class="form--input_group">
            <label for="type">Related events</label>
            <Select 
                text="Select related events"
                :on-select="selectRelatedEvents"
                :options="relatedEventOptions"
                :defaultOptions="selectedRelatedEvents"
            />
        </div>
        <div class="form--input_group form--input_group-submit">
            <input type="submit" :class="submitButton.class" :value="submitButton.value">
        </div>
    </form>
</template>