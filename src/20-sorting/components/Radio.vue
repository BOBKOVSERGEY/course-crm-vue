<template>
    <label class="radio">
        <input type="radio" :name="name" :value="value" :checked="checked"/>
        <div class="radio__input"></div>
        <div class="radio__label">{{ text }}
        </div>
    </label>
</template>

<script setup>
const props = defineProps({
    name: String,
    checked: Boolean,
    text: String,
    value: {

        type: [String, Number]
    }
});
</script>
