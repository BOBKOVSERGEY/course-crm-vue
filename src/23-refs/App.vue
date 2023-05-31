<template>
  <div style="padding: 15px">
    <DropdownSelect ref="el" />
  </div>

</template>

<script setup>
import {onMounted, ref} from "vue";

const el = ref();
console.log(el.value)
onMounted(() => {
  console.log(el.value)
})
import DropdownSelect from "@/23-refs/components/DropdownSelect.vue";
</script>