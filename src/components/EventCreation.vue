<script setup>
    import Select from './Select.vue';
    
    const props = defineProps({
        events: {
            type: Array,
            required: true
        }
    });

    const relatedEventOptions = props.events.map(el => ({ key: el.id, value: el.name }));
</script>
<template>
    <div class="dashboard--event_creation">
        <div class="dashboard--event_creation--title">
            Create an event
        </div>
        <form class="form dashboard--event_creation--form" action="#">
            <div class="form--input_group">
                <label for="id">Id</label>
                <input required type="number" min="0" name="id" id="id" placeholder="Id">
            </div>
            <div class="form--input_group">
                <label for="name">Name</label>
                <input required type="text" name="name" id="name" placeholder="Name">
            </div>
            <div class="form--input_group">
                <label for="description">Description</label>
                <textarea name="description" id="description" placeholder="Description" />
            </div>
            <div class="form--input_group">
                <label for="type">Type</label>
                <select name="type" id="type" required>
                    <option value="crosspromo">Crosspromo</option>
                    <option value="liveops">Liveops</option>
                    <option value="app">App</option>
                    <option value="ads">Ads</option>
                </select>
            </div>
            <div class="form--input_group">
                <label for="priority">Priority</label>
                <input type="number" min="0" max="10" placeholder="Priority (0-10)" required name="priority" id="priority">
            </div>
            <div class="form--input_group">
                <label for="type">Related events</label>
                <Select 
                    text="Select related events"
                    :on-select="NULL"
                    :options="relatedEventOptions"
                />
            </div>
            <div class="form--input_group form--input_group-submit">
                <input type="submit" class="btn" value="Create">
            </div>
        </form>
    </div>
</template>