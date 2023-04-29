<template>
    <td class="table__body-cell"
        :class="{
            'table__body-cell_actions': type === 'actions'
        }"
    >
        <a :href="link"
           v-if="type === 'link'"
        >
            {{ value }}
        </a>
        <div class="user-avatar user-avatar_size_s"
             v-else-if="type === 'avatar'"
        >
            <div class="user-avatar__wrapper"><img class="user-avatar__image" src="@/assets/i/avatar-example.jpg" alt="avatar">
            </div>
        </div>
        <template
            v-else-if="type === 'actions'"
        >
            <Button size="xs" rounded transparent icon="pencil"/>
            <Button size="xs" rounded transparent icon="trash"
                    @click="handleDelete"
            />
            <Button size="xs" rounded transparent icon="check-circle"/>
        </template>
        <template v-else>
            {{ value }}
        </template>
    </td>
</template>

<script setup>
import Button from "@/17-list-operations/components/Button.vue";

const emit = defineEmits(['delete']);

defineProps({
    type: {
        type: String,
        validator(value) {
            return ['avatar', 'link', 'actions'].includes(value);
        }
    },
    value: String,
    link: String,
});

function handleDelete(){
    emit('delete')
}
</script>
