<template>
    <div class="textbox"
         :class="{
            'textbox_size_s': size === 's',
            'textbox_text-center': textCenter,
         }"
    >
        <label class="textbox__wrapper">
            <div class="textbox__label"
                 @click="$emit('myEvent', label, '123')"
                 v-if="label"
            >{{ label }}</div>
            <textarea class="textbox__input"
                   :placeholder="placeholder"
                   :value="value"
                   @change="processInput"
                   v-if="textarea"
            ></textarea>
            <input class="textbox__input" type="text"
                   :placeholder="placeholder"
                   :value="value"
                   @change="processInput"
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
import { ref } from 'vue'

const props = defineProps({
    placeholder: String,
    textarea: Boolean,
    message: String,
    label: String,
    value: [String, Number],
    textCenter: Boolean,
    size: {
        type: String,
        validator(value) {
            return ['s'].includes(value)
        }
    },
});

const emit = defineEmits({
    myEvent: (value) => {
        if(value === ''){
            console.warn('Поле не может быть пустым');
            return false;
        }
        return true;
    },
});

const realValue = ref(props.value);

function processInput(event){
    realValue.value = event.target.value;
    emit('myEvent', realValue.value);
}
</script>
