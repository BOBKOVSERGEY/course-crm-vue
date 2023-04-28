<template>
<div>
  <label for="">
    {{label}}
  </label>
  <br>
  <input type="text" v-model="value" :placeholder="placeholder">
</div>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
  label: {
    type: String
  },
  placeholder: {
    type: String,
    required: true
  },
  modelValue: {
    type: [String, Number]
  }
})

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