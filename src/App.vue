<script setup>
import {ref} from "vue";

const textOne = ref('Привет');
const textTwo = ref('из моего');
const textTree = ref('первого приложения на Vue3');
</script>

<template>
  <button class="button">{{textOne}} {{textTwo}} {{textTree}}</button>
</template>
