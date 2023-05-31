<template>
    <tr class="table__body-row">
        <template
            v-for="(cellValue,cellKey) in cells"
        >
            <td is="vue:TableBodyCell"
                v-if="cellKey==='avatar'"
                type="avatar"
                :value="cellValue"
            />
            <td is="vue:TableBodyCell"
                v-else-if="cellKey==='email'"
                type="email"
                :value="cellValue"
            />
            <td is="vue:TableBodyCell"
                v-else="cellKey==='email'"
                :value="cellValue"
            />
        </template>
        <td is="vue:TableBodyCell"
            type="actions"
            :value="cellValue"
        />
    </tr>
</template>

<script setup>
import TableBodyCell from "@/24-animation-transition-g/components/TableBodyCell.vue";

const props = defineProps({
    cells: {
        type: Array,
        required: true
    }
});
</script>
