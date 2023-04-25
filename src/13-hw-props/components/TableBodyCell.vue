<template>
    <tr class="table__body-row">
        <td
            v-for="(item, index) in value"
            class="table__body-cell">
          <template v-if="index === 1">
            <a :href="`mailto:` +item">
              {{ item }}
            </a>
          </template>
          <template v-else>
            {{item}}
          </template>

        </td>

        <td class="table__body-cell table__body-cell_actions">
            <Button
                v-if="showButtons"
                v-for="item in icon"
                size="xs"  :icon="item" rounded transparent/>
        </td>
    </tr>
</template>

<script setup>
import Button from "@/13-hw-props/components/Button.vue"

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
