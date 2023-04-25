<template>
  <thead class="table__head">
  <tr class="table__head-row">
    <th
        v-for="item in value"
        class="table__head-cell">
      {{ item }}
    </th>
    <th class="table__head-cell table__head-cell_actions">
      <Button
          v-if="showButtons"
          v-for="item in icon"
          :icon="item" size="xs" transparent/>
    </th>
  </tr>
  </thead>
</template>

<script setup>
import Button from "@/13-hw-props/components/Button.vue";

defineProps({
  value: {
    type: Array,
    required: true
  },
  showButtons: Boolean,
  icon: {
    type: Array
  }
})
</script>