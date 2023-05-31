<template>
  <Transition
      name="slide"
      :duration="{ enter: 600, leave: 600 }">
    <slot></slot>
  </Transition>
</template>

<script setup>

</script>