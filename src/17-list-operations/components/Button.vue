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
        <Icon :type="icon" v-if="icon"/>
        {{ text }} {{ counter }}
    </a>
</template>
<script setup>
import svgUrl from '@/assets/i/sprite/sprite.svg'
import Icon from "@/17-list-operations/components/Icon.vue";

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

const btnColor = props.buttonColor;

</script>
