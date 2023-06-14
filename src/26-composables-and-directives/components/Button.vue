<template>
    <a class="button" href="#"
       :class="[
           text ? '' : 'button_no-text',
           (size && size !== 'm') ? 'button_size_' + size : '',
           transparent ? 'button_transparent' : '',
           rounded ? 'button_rounded' : '',
           (color && color !== 'primary') ? 'button_color_' + color : '',
           disabled ? 'button_disabled' : '',
       ]"
    >
        <Icon :type="icon"/>
        {{ text }} {{ counter }}
    </a>
</template>
<script setup>
import Icon from "@/26-composables-and-directives/components/Icon.vue";

const props = defineProps({
    color: String,
    transparent: Boolean,
    rounded: Boolean,
    icon: String,
    text: String,
    counter: Number,
    size: {
        type: String,
        validator(value) {
            return ['xs', 's'].includes(value)
        }
    },
    disabled: Boolean
});

</script>
