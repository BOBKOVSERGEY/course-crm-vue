<template>
{{ count }}
{{ translations }}
  <br>
  <button class="button" @click="incrise">Click</button>
  <hr>
  <textarea v-focus />
  <br>
  {{$translate('translate.en')}}
</template>

<script setup>
import {ref, inject} from "vue";
import {useDebug} from "@/27-plugins/use/useDebug";
import {vFocus} from "@/27-plugins/directives/vFocus";

const translations = inject('translations')

const count = ref(1);

useDebug(count);

const incrise = () => {
  count.value++
}
</script>