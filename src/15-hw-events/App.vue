<template>
  <RadioGroup
      @change="genderChange"
      name="gender"
      value="Ж"
      :values="[
                        {
                          value: 'М',
                          text: 'М',
                        },
                        {
                          value: 'Ж',
                          text: 'Ж'
                        },
                        {
                          value: '',
                          text: 'Не определился',
                    }]"
  />
  <div v-if="choice.length">
    Ваш выбор {{ choice }}
  </div>

  <Checkbox label="Foo" @change="getValue" @edit="getValueEdit" />
  <Checkbox label="Bar" @change="getValue" />
  <Checkbox label="Baz" checked @change="getValue" />
</template>

<script setup>

import RadioGroup from "@/15-hw-events/components/RadioGroup.vue";
import {ref} from "vue";
import Checkbox from "@/15-hw-events/components/Checkbox.vue";

const choice = ref('');

function genderChange(gender) {
  choice.value = gender;
  console.log(gender);
}

function getValue(value) {
  console.log(value);
}
function getValueEdit(data)
{
  console.log(data);
}
</script>