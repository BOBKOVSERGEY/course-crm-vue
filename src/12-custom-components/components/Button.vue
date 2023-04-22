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
import {ref} from "vue";

const counter = ref(0);
</script>