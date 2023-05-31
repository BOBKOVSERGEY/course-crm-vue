<template>
    <svg class="icon"
         :class="[
             'icon_type_' + type,
             size ? 'icon_size_' + size : ''
         ]"
    >
        <use :href="svgUrl + '#' + type"></use>
    </svg>
</template>
<script setup>
import svgUrl from '@/assets/i/sprite/sprite.svg'
const props = defineProps({
    type: String,
    size: {
        type: String,
        validator(value) {
            return ['s', 'xs'].includes(value);
        }
    }
});
</script>
