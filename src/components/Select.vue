<script setup>
    import { ref } from 'vue';
    import CheckmarkIcon from 'vue-ionicons/dist/ios-checkmark.vue';

    const props = defineProps({
        text: {
            type: String,
            required: true
        },
        onSelect: {
            type: Function,
            required: true
        },
        options: {
            type: Array,
            required: true
        },
        defaultOptions: {
            type: Array,
            default: []
        }
    });

    const selectedItems = ref([...props.defaultOptions]);
    const listOpen = ref(false);

    const toggleList = () => listOpen.value = !listOpen.value;
    const closeList = () => listOpen.value = false;

    const handleListClick = e => {
        e.preventDefault();
        e.stopPropagation();
    };

    const toggleItem = key => {
        if (selectedItems.value.includes(key)) {
            selectedItems.value = selectedItems.value.filter(el => el !== key);
        }
        else {
            selectedItems.value.push(key);
        }

        props.onSelect(selectedItems.value);
    };
    const check = key => selectedItems.value.includes(key);
 
</script>
<template>
    <div v-click-outside="closeList" class="select">
        <div @click="toggleList" class="select--btn">
            <span v-if="selectedItems.length">
                {{ selectedItems.length }} {{ selectedItems.length === 1 ? "item" : "items"}}  selected
            </span>
            <span v-else>
                {{ text }}
            </span>
            <div v-if="listOpen" @click="handleListClick" class="select--list">
                <div v-for="option in options" @click="toggleItem(option.key)" class="select--list--item">
                    <CheckmarkIcon v-if="check(option.key)" />
                    <span v-else class="select--list--item--placeholder"></span>
                    {{ option.key }} - {{ option.value }}
                </div>
            </div>
        </div>
    </div>
</template>