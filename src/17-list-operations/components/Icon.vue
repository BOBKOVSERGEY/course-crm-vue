<template>
    <svg class="icon"
         :class="'icon_type_' + type"
    >
        <use :href="svgUrl + '#' + type"></use>
    </svg>
</template>

<script setup>
import svgUrl from '@/assets/i/sprite/sprite.svg'

defineProps({
    type: String
});
</script>
