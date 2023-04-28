<template>
  <Test
      v-model="myName"
      label="Some input"
      placeholder="Some input"
  />

  {{ myName }}
</template>

<script setup>
import Test from "@/16-test/components/Test.vue";
import {ref} from "vue";

const myName = ref('Sergey');
</script>