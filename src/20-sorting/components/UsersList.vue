<template>
    <div class="table-view">
        <table class="table">
            <thead class="table__head">
            <tr class="table__head-row">
                <th is="vue:TableHeadCell" min-width icon="user-circle" type="icon"/>
                <th is="vue:TableHeadCell" text="ФИО"
                    @change-sort="(sortDir) => handleSort('fullname', sortDir)"
                    :sort-dir="sortKey === 'fullname' && sortDir ? sortDir : ''"
                />
                <th is="vue:TableHeadCell" text="Контрагент"/>
                <th is="vue:TableHeadCell" text="E-mail"
                    @change-sort="(sortDir) => handleSort('email', sortDir)"
                    :sort-dir="sortKey === 'email' && sortDir ? sortDir : ''"
                />
                <th is="vue:TableHeadCell" text="Должность"/>
                <th is="vue:TableHeadCell" text="Тип контрагента"/>
                <th is="vue:TableHeadCell" type="actions"/>
            </tr>
            </thead>
            <tbody class="table__body">
            <tr class="table__body-row"
                v-for="user in users"
                :key="user.id"
            >
                <TableBodyCell :value="user.avatar" type="avatar"/>
                <TableBodyCell :value="`${user.fullname} (${user.id})`"/>
                <TableBodyCell :value="user.contractor"/>
                <TableBodyCell :value="user.email" type="email"/>
                <TableBodyCell :value="user.position"/>
                <TableBodyCell :value="user.type"/>
                <TableBodyCell type="actions"
                               @delete="deleteUser(user.id)"
                >
                    <Icon type="user"/>
                </TableBodyCell>
            </tr>
            </tbody>
        </table>
        <Pagination/>
    </div>
</template>

<script setup>
import Pagination from '@/20-sorting/components/Pagination.vue'
import Button from '@/20-sorting/components/Button.vue'
import TableBodyCell from "@/20-sorting/components/TableBodyCell.vue";
import TableHeadCell from "@/20-sorting/components/TableHeadCell.vue";
import Icon from "@/20-sorting/components/Icon.vue";

const props = defineProps({
    users: {
        type: Array,
        required: true
    },
    sortDir: {
        type: String,
        default: ''
    },
    sortKey: String,
});

const emit = defineEmits(['delete', 'change-sort']);

function deleteUser(id){
    emit('delete', id);
}

function handleSort(key, sortDir){
    emit('change-sort', key, sortDir);
}
</script>
