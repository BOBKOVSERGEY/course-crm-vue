<template>
    <table class="table">
        <thead class="table__head">
        <tr class="table__head-row">
            <th class="table__head-cell table__head-cell_width_min">
                <Icon type="user-circle" size="s"/>
            </th>
            <th class="table__head-cell">ФИО
            </th>
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
            <tr is="vue:TableRow"
                v-for="cells in rows"
                :cells="cells"
            ></tr>
        </tbody>
    </table>
</template>

<script setup>
import TableRow from '@/20-sorting/components/TableRow.vue'
import Button from '@/20-sorting/components/Button.vue'
import Icon from "@/20-sorting/components/Icon.vue";

const props = defineProps({
    rows: {
        type: Array
    }
});
</script>
