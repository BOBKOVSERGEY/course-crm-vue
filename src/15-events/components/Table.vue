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
import TableRow from '@/15-events/components/TableRow.vue'
import Button from '@/15-events/components/Button.vue'
</script>
