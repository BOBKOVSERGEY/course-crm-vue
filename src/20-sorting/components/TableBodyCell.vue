<template>
    <td class="table__body-cell"
        :class="{
            'table__body-cell_actions': type === 'actions'
        }"
    >
        <template v-if="type==='actions'">
            <Button size="xs" icon="pencil" rounded transparent/>
            <Button size="xs" icon="trash" rounded transparent
                    @click="$emit('delete')"
            />
            <Button size="xs" icon="check" rounded transparent/>
        </template>
        <div class="user-avatar user-avatar_size_s"
             v-else-if="type==='avatar'"
        >
            <div class="user-avatar__wrapper">
                <img class="user-avatar__image" :src="value" alt="avatar">
            </div>
        </div>
        <a :href="value"
           v-else-if="type==='link'"
        >
            {{ value }}
        </a>
        <a :href="'mailto:' + value"
           v-else-if="type==='email'"
        >
            {{ value }}
        </a>
        <template v-else>
            {{ value }}
        </template>
    </td>
</template>

<script setup>
import Button from '@/20-sorting/components/Button.vue'

const emit = defineEmits(['delete']);

const props = defineProps({
    type: String,
    value: [String, Array],
});
</script>
