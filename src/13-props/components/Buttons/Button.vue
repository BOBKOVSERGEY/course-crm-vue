<template>
  <a
      @click.prevent="counter++"
      class="button button_no-text button_size_xs button_transparent" href="#">
    <svg class="icon icon_type_cog">
      <use xlink:href="@/assets/i/sprite/sprite.svg#cog"></use>
    </svg> {{counter}}
  </a>
</template>

<script setup>
import { ref } from "vue";
import svgUrl from '@/assets/i/sprite/sprite.svg';


defineProps({
  counter: Number,
  icon: String,
  size: {
    type: String,
    validator(value) {
      return ['xs', 's'].includes(value)
    }
  },
  color: String,
  rounded: String,
  transparent: String,
  disabled: Boolean,
  text: String,
  value: {
    required: true,
    type: [String, Number]
  }
})
</script>