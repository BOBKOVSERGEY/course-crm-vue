<template>
  <div class="table-view">
    <table class="table">
      <thead class="table__head">
      <tr class="table__head-row">
        <TableHeadCell text="№"/>
        <TableHeadCell text="Заказчик"
                       @change-sort="(sortDir) => handleSort('name', sortDir)"
                       :sort-dir="sortKey === 'name' && sortDir ? sortDir : ''"
        />
        <th class="table__head-cell">
          Исполнитель
        </th>
        <th class="table__head-cell">
          Подписан
        </th>
        <th class="table__head-cell">
          Сделки
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
        <tr
            v-if="contractList.length"
            v-for="item in contractList"
            :key="item.id"
            class="table__body-row">
          <td class="table__body-cell">
            {{item.phone}}
          </td>
          <td class="table__body-cell">
            <a href="#">
            {{ item.name }}
            </a>
          </td>
          <td class="table__body-cell">
            <a href="#">
              {{ item.company.name }}
            </a>
          </td>
          <td class="table__body-cell">Нет
          </td>
          <td class="table__body-cell">25
          </td>
          <td class="table__body-cell table__body-cell_actions"><a class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
            <svg class="icon icon_type_pencil">
              <use xlink:href="@/assets/i/sprite/sprite.svg#pencil"></use>
            </svg></a><a class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
            <svg class="icon icon_type_trash">
              <use xlink:href="@/assets/i/sprite/sprite.svg#trash"></use>
            </svg></a>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination />
  </div>
</template>

<script setup>
import Pagination from "@/20-hw-sorting/components/Pagination.vue";
import TableHeadCell from "@/20-hw-sorting/components/table/TableHeadCell.vue";

const props = defineProps({
  contractList: {
    type: Array,
    required: true
  },
  sortDir: {
    type: String,
    default: ''
  },
  sortKey: String,
});

const emit = defineEmits(['change-sort']);
function handleSort(key, sortDir){
  emit('change-sort', key, sortDir);
}
</script>