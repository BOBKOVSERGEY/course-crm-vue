<template>
    <div class="radio-group">
        <div class="radio-group__wrapper">
            <div class="radio-group__controls">
                <div class="radio-group__control"
                     v-for="item in values"
                >
                    <Radio :name="name"
                           :value="item.value"
                           :text="item.text"
                           :checked="item.value===value"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Radio from "@/15-events/components/Radio.vue";

const props = defineProps({
    name: String,
    values: Array,
    value: [String,Number,Boolean]
});
</script>
