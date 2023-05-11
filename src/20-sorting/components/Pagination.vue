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
                <Button size="xs" icon="chevron-left"/>
                <TextBox size="s" text-center placeholder="#" model-value="1"/>
                <Button size="xs" icon="chevron-right"/>
            </div>
            <div class="pagination__text">из 120
            </div>
        </div>
    </div>
</template>

<script setup>
import Button from "@/20-sorting/components/Button.vue";
import TextBox from "@/20-sorting/components/TextBox.vue";
</script>
