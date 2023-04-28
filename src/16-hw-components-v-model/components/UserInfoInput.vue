<template>
  <div class="entity-fields__group">
 <Test v-model="fullNameValue"
      label="Some input"
      placeholder="Some input"  />
    <Test v-model="ageValue"
          label="Some input"
          placeholder="Some input"  />

   <!-- <Radio
          v-model="genderValue"
           value="М"
           text="M"
    />
    <Radio
        v-model="genderValue"
        value="Ж"
        text="Ж"
    />
    <Radio
        v-model="genderValue"
        value=""
        text="Неопределен"
    />-->
  <RadioGroup
      name="gender"
      v-model="genderValue"
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
  </div>
</template>

<script setup>
import RadioGroup from "@/16-hw-components-v-model/components/RadioGroup.vue";
import {computed} from "vue";
import Test from "@/16-hw-components-v-model/components/Test.vue";
import Radio from "@/16-hw-components-v-model/components/Radio.vue";
const emit = defineEmits([
  'update:fullName',
  'update:age',
  'update:gender'
]);
const props = defineProps({
  fullName: {
    type: String
  },
  age: {
    type: Number
  },
  gender: {
    type: String
  },
  ageModifiers: {
    default: () => ({ number: true })
  },
})

const fullNameValue = computed({
  get(){
    return props.fullName;
  },
  set(value){
    emit('update:fullName', value);
  }
});

const ageValue = computed({
  get(){
    return props.age;
  },
  set(value){
    if(props.ageModifiers.number){
      value = +value;
    }
    emit('update:age', value);
  }
});

const genderValue = computed({
  get(){
    return props.gender;
  },
  set(value){
    emit('update:gender', value);
  }
});


</script>