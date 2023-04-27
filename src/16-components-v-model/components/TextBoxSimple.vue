<template>
    <div class="textbox"
         :class="{
            'textbox_size_s': size === 's',
            'textbox_text-center': textCenter,
         }"
    >
        <label class="textbox__wrapper">
            <div class="textbox__label"
                 v-if="label"
            >{{ label }}</div>
            <textarea class="textbox__input"
                   :placeholder="placeholder"
                   v-model="value"
                   v-if="textarea"
            ></textarea>
            <input class="textbox__input" type="text"
                   :placeholder="placeholder"
                   v-model="value"
                   v-else
            />
        </label>
        <div class="textbox__message"
             v-if="message"
        >
            {{ message }}
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    placeholder: String,
    textarea: Boolean,
    message: String,
    label: String,
    modelValue: [String, Number],
    model2: [String, Number],
    model3: [String, Number],
    textCenter: Boolean,
    size: {
        type: String,
        validator(value) {
            return ['s'].includes(value)
        }
    },
});

const emit = defineEmits(['update:modelValue']);

const value = computed({
    get(){
        return props.modelValue;
    },
    set(value){
        emit('update:modelValue', value);
    }
});
</script>
