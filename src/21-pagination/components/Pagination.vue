<template>
    <div class="pagination">
        <div class="pagination__column">
            <div class="pagination__text pagination__text_range">0 — 10
            </div>
            <div class="pagination__text">из 1200 записей
            </div>
        </div>
        <div class="pagination__column">
            <div class="pagination__text">страница
            </div>
            <div class="pagination__controls">
                <Button
                    @click="changePage(-1)"
                    size="xs" icon="chevron-left"/>
                <TextBox size="s" text-center placeholder="#"
                v-model="page"
                />
                <Button
                    @click="changePage(1)"
                    size="xs" icon="chevron-right"/>
            </div>
            <div class="pagination__text">из 120
            </div>
        </div>
    </div>
</template>

<script setup>
import Button from "@/21-pagination/components/Button.vue";
import TextBox from "@/21-pagination/components/TextBox.vue";
import {computed} from 'vue';

const props = defineProps({
  modelValue: Number
});



const emits = defineEmits(['update:modelValue']);

const page = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emits('update:modelValue', value)
  }
})


const changePage = (delta) => {
  if(page.value + delta < 1) {
    page.value = 1;
    return;
  }
  page.value += delta;
}
</script>
