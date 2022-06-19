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
            default: {
                relatedEvents: []
            }
        }
    });

    const selectedRelatedEvents = ref([...props.defaultValues.relatedEvents]);
    const formValues = ref({...props.defaultValues});
    const formElement = ref(0);

    const selectRelatedEvents = selectedEvents => selectedRelatedEvents.value = selectedEvents;

    const clearFields = () => {
        formValues.value.id = "";
        formValues.value.name = "";
        formValues.value.description = "";
        formValues.value.type = "";
        formValues.value.priority = "";
    }

    const onSubmit = () => {
        const data = {
            id: Number.parseInt(formValues.value.id),
            name: formValues.value.name,
            description: formValues.value.description,
            type: formValues.value.type,
            priority: Number.parseInt(formValues.value.priority),
            relatedEvents: selectedRelatedEvents.value.map(el => Number.parseInt(el))
        }

        props.onSubmit(data, clearFields);
    };

    const checkValidity = e => {
        e.preventDefault();

        if (!formElement.value.checkValidity()) {
            formElement.value.reportValidity();
        }
        else {
            onSubmit();
        }
    }
</script>
<template>
    <form ref="formElement" class="form dashboard--event_creation--form" action="#">
        <div class="form--input_group">
            <label for="id">Id</label>
            <input :disabled="defaultValues.id" required type="number" min="0" name="id" id="id" placeholder="Id" v-model="formValues.id">
        </div>
        <div class="form--input_group">
            <label for="name">Name</label>
            <input required type="text" name="name" id="name" placeholder="Name" v-model="formValues.name">
        </div>
        <div class="form--input_group">
            <label for="description">Description</label>
            <textarea name="description" id="description" placeholder="Description" v-model="formValues.description"></textarea>
        </div>
        <div class="form--input_group">
            <label for="type">Type</label>
            <select name="type" id="type" required v-model="formValues.type">
                <option value="crosspromo">Crosspromo</option>
                <option value="liveops">Liveops</option>
                <option value="app">App</option>
                <option value="ads">Ads</option>
            </select>
        </div>
        <div class="form--input_group">
            <label for="priority">Priority</label>
            <input type="number" min="0" max="10" placeholder="Priority (0-10)" required name="priority" id="priority" v-model="formValues.priority">
        </div>
        <div class="form--input_group">
            <label for="type">Related events</label>
            <Select 
                text="Select related events"
                :onSelect="selectRelatedEvents"
                :options="relatedEventOptions"
                :defaultOptions="selectedRelatedEvents"
            />
        </div>
        <div class="form--input_group form--input_group-submit">
            <button @click="checkValidity" :class="submitButton.class" >
                {{ submitButton.value }}
            </button>
        </div>
    </form>
</template>