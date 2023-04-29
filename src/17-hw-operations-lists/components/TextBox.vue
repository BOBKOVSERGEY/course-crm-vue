<template>
  <div class="textbox">
    <label class="textbox__wrapper">
      <div class="textbox__label">
        {{ label }}
      </div>
      <input
          class="textbox__input"
          type="text"
          :placeholder="placeholder"
          v-model="value"
      >
    </label>
  </div>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  placeholder: String,
  modelValue: {
    type: [String, Number]
  }
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