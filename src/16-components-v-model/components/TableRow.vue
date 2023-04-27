<template>
    <tr class="table__body-row">
        <td class="table__body-cell">ООО "Иванов и партнеры"
        </td>
        <td class="table__body-cell"><a href="#">noemail@please.com</a>
        </td>
        <td class="table__body-cell">Гендиректор
        </td>
        <td class="table__body-cell">Заказчик
        </td>
        <td class="table__body-cell table__body-cell_actions">
            <Button size="xs" icon="pencil" rounded transparent/>
            <Button size="xs" icon="trash" rounded transparent/>
            <Button size="xs" icon="check" rounded transparent/>
        </td>
    </tr>
</template>

<script setup>
import Button from "@/16-components-v-model/components/Button.vue"
</script>
