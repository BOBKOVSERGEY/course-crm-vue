<template>
    <label class="radio">
        <input
            type="radio"
            :name="name"
            :value="value"
            v-model="setValue"
        />
        <div class="radio__input"></div>
        <div class="radio__label">{{ text }}
        </div>
    </label>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
    name: String,
    checked: Boolean,
    text: String,
  value: [String, Number],
    modelValue: {
      type: [String, Number]
    }
});
const emit = defineEmits(['update:modelValue']);

const setValue = computed({
  get(){
    return props.modelValue;
  },
  set(value){
    emit('update:modelValue', value);
  }
});
</script>
