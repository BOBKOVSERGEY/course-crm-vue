<template>
    <div class="radio-group">
        <div class="radio-group__wrapper">
          <div class="radio-group__title">Пол
          </div>
          {{modelValue}}
            <div class="radio-group__controls">
                <div class="radio-group__control"
                     v-for="item in values"
                >
                    <Radio :name="name"
                           v-model="value"
                           :value="item.value"
                           :text="item.text"
                           :checked="item.value===value"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Radio from "@/16-hw-components-v-model/components/Radio.vue";
import {computed} from "vue";
const emit = defineEmits(['update:modelValue']);
const props = defineProps({
    name: String,
    values: Array,
    modelValue: String,
    value: [String,Number,Boolean],
});


const value = computed({
  get(){
    return props.modelValue;
  },
  set(value){
    emit('update:modelValue', value);
  }
});
</script>
