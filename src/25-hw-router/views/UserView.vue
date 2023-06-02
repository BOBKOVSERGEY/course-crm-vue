<template>
  <h1>User # {{userId}}</h1>
  <pre>
    {{userId}}
  </pre>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();
const props = defineProps({
  userId: String,
  required: true
})
</script>