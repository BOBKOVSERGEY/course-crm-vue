<template>
    <table class="table">
        <thead class="table__head">
        <tr class="table__head-row">
            <th class="table__head-cell table__head-cell_width_min">
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
            <th class="table__head-cell table__head-cell_actions"><a class="button button_no-text button_size_xs button_transparent" href="#">
                <svg class="icon icon_type_cog">
                    <use xlink:href="@/assets/i/sprite/sprite.svg#cog"></use>
                </svg></a><a class="button button_no-text button_size_xs button_transparent" href="#">
                <svg class="icon icon_type_filter">
                    <use xlink:href="@/assets/i/sprite/sprite.svg#filter"></use>
                </svg></a>
            </th>
        </tr>
        </thead>
        <tbody class="table__body">
        <tr class="table__body-row"
            v-for="user in users"
            :key="user.id"
        >
            <td is="vue:TableBodyCell" type="avatar"></td>
            <td is="vue:TableBodyCell"
                :value="user.fullname"></td>
            <td is="vue:TableBodyCell"
                :value="user.contractor"></td>
            <td is="vue:TableBodyCell"
                type="link" :link="'mailto:' + user.email"
                :value="user.email"></td>
            <td is="vue:TableBodyCell"
                :value="user.position"></td>
            <td is="vue:TableBodyCell"
                :value="user.type"></td>
            <td is="vue:TableBodyCell"
                type="actions"
                @delete="handleDelete(user.id)"
            ></td>
        </tr>

        </tbody>
    </table>
</template>

<script setup>
import TableBodyCell from "@/17-list-operations/components/TableBodyCell.vue";

const emit = defineEmits(['delete']);

defineProps({
    users: Array
});

function handleDelete(id){
    emit('delete', id);
}
</script>
