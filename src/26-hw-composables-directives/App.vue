<template>
{{ count }}
  <br>
  <button class="button" @click="incrise">Click</button>
  <hr>
  <textarea v-focus />
</template>

<script setup>
import {ref} from "vue";
import {useDebug} from "@/26-hw-composables-directives/use/useDebug";
import {vFocus} from "@/26-hw-composables-directives/directives/vFocus";

const count = ref(1);

useDebug(count);

const incrise = () => {
  count.value++
}
</script>