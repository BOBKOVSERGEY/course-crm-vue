<template>
    <div class="textbox"
         :class="{
            'textbox_fixable': fixable && !editState,
            'textbox_size_s': size === 's',
            'textbox_text-center': textCenter,
            'textbox_fixable_edit': fixable && editState
         }"
    >
        <label class="textbox__wrapper">
            <div class="textbox__label"
                 v-if="label"
            >{{ label }}</div>
            <textarea class="textbox__input"
                      :disabled="fixable && !editState"
                      :placeholder="placeholder"
                      :value="modelValue"
                      @change="processInput"
                      v-if="textarea"
            ></textarea>
            <input class="textbox__input" type="text"
                   :disabled="fixable && !editState"
                   :placeholder="placeholder"
                   :value="modelValue"
                   @change="processInput"
                   v-else
            />
            <div class="textbox__controls"
                 v-if="fixable"
            >
                <Button size="xs" rounded transparent icon="pencil"
                        @click="toggleEditState"
                />
                <Button size="xs" rounded icon="check"
                        @click="commitValue"
                />
                <Button size="xs" rounded transparent icon="trash"
                        @click="toggleEditState"
                />
            </div>
        </label>
        <div class="textbox__message"
             v-if="message"
        >
            {{ message }}
        </div>
    </div>
</template>

<script setup>
import Button from '@/24-animation-transition-g/components/Button.vue'
import { ref } from 'vue'

const props = defineProps({
    placeholder: String,
    textarea: Boolean,
    fixable: Boolean,
    message: String,
    label: String,
    modelValue: [String, Number],
    textCenter: Boolean,
    size: {
        type: String,
        validator(value) {
            return ['s'].includes(value)
        }
    },
});
const emit = defineEmits({
    change: null
});

const editState = ref(!props.fixable);

const tmpValue = ref(props.modelValue);

function processInput(event){
    if(!props.fixable){
        commitValue(event.target.value);
    }
    else{
        tmpValue.value = event.target.value;
    }
}

function commitValue(value){
    emit('update:modelValue', props.fixable ? tmpValue.value : value);
    toggleEditState();
}

function toggleEditState(){
    editState.value = !editState.value;
}
</script>
