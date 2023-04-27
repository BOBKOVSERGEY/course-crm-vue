<template>
  <div class="textbox"
       :class="{
            'textbox_size_s': size === 's',
            'textbox_text-center': textCenter,
         }"
  >
    <label class="textbox__wrapper">
      <div class="textbox__label">Имя</div>
      <textarea class="textbox__input"
                placeholder="Имя"
                v-model="firstNameValue"
                v-if="textarea"
      ></textarea>
      <input class="textbox__input" type="text"
             placeholder="Имя"
             v-model="firstNameValue"
             v-else
      />
    </label>
    <div class="textbox__message"
         v-if="message"
    >
      {{ message }}
    </div>
  </div>
  <div class="textbox"
       :class="{
            'textbox_size_s': size === 's',
            'textbox_text-center': textCenter,
         }"
  >
    <label class="textbox__wrapper">
      <div class="textbox__label">Фамилия</div>
      <textarea class="textbox__input"
                placeholder="Фамилия"
                v-model="lastNameValue"
                v-if="textarea"
      ></textarea>
      <input class="textbox__input" type="text"
             placeholder="Фамилия"
             v-model="lastNameValue"
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
import {computed} from "vue";

const props = defineProps({
  textarea: Boolean,
  message: String,
  firstName: String,
  firstNameModifiers: {
    default: () => ({ upper: true })
  },
  lastName: String,
  lastNameModifiers: {
    default: () => ({})
  },
  textCenter: Boolean,
  size: {
    type: String,
    validator(value) {
      return ['s'].includes(value)
    }
  },
});

const emit = defineEmits(['update:firstName', 'update:lastName']);

const firstNameValue = computed({
  get(){
    return props.firstName;
  },
  set(value){
    if(props.firstNameModifiers.upper){
      value = value.toUpperCase();
    }
    emit('update:firstName', value);
  }
});
const lastNameValue = computed({
  get(){
    return props.lastName;
  },
  set(value){
    if(props.lastNameModifiers.upper){
      value = value.toUpperCase();
    }
    emit('update:lastName', value);
  }
});
</script>