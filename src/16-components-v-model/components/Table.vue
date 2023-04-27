<template>
    <table class="table">
        <thead class="table__head">
        <tr class="table__head-row">
            <th class="table__head-cell">Контрагент
            </th>
            <th class="table__head-cell">E-mail
            </th>
            <th class="table__head-cell">Должность
            </th>
            <th class="table__head-cell">Тип контрагента
            </th>
            <th class="table__head-cell table__head-cell_actions">
                <Button icon="cog" size="xs" transparent/>
                <Button icon="filter" size="xs" transparent/>
            </th>
        </tr>
        </thead>
        <tbody class="table__body">
        <tr is="vue:TableRow"></tr>
        <tr is="vue:TableRow"></tr>
        <tr is="vue:TableRow"></tr>
        <tr is="vue:TableRow"></tr>
        </tbody>
    </table>
</template>

<script setup>
import TableRow from '@/16-components-v-model/components/TableRow.vue'
import Button from '@/16-components-v-model/components/Button.vue'
</script>
