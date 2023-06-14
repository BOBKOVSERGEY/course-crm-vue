<template>
    <div class="table-view">
        <table class="table">
            <thead class="table__head">
            <tr class="table__head-row">
                <th class="table__head-cell">Имя
                </th>
                <th class="table__head-cell">UserName
                </th>
                <th class="table__head-cell">E-mail
                </th>
                <th class="table__head-cell">Адрес
                </th>
                <th class="table__head-cell">Контрагент
                </th>
                <th class="table__head-cell table__head-cell_actions">
                    <Button icon="cog" size="xs" transparent/>
                    <Button icon="filter" size="xs" transparent/>
                </th>
            </tr>
            </thead>
            <tbody class="table__body">
            <tr class="table__body-row"
                v-for="user in data"
                :key="user.id"
            >
                <TableBodyCell :value="`${user.name} (${user.id})`"/>
                <TableBodyCell :value="user.username"/>
                <TableBodyCell :value="user.email" type="email"/>
                <TableBodyCell :value="user.address.street"/>
                <TableBodyCell :value="user.company.name"/>
                <TableBodyCell type="actions"
                               @click="deleteUser(user.id)"
                >
                    <Icon type="user"/>
                </TableBodyCell>
            </tr>
            </tbody>
        </table>
        <Pagination
            v-intersection="incrementPageNumber"
            v-model="currentPage"
        />
    </div>
</template>

<script setup>
import Pagination from '@/26-composables-and-directives/components/Pagination.vue'
import Button from '@/26-composables-and-directives/components/Button.vue'
import TableBodyCell from "@/26-composables-and-directives/components/TableBodyCell.vue";
import Icon from "@/26-composables-and-directives/components/Icon.vue";
import {computed, onMounted, ref, watch, watchEffect} from "vue";
import {useFetch} from "@/26-composables-and-directives/use/useFetch";


const props = defineProps({
  username: String
})
const users = ref([]);
const currentPage = ref(1);
const searchText = ref('');
const isLoading = ref(false);
const isInfinitePagination = ref(true);

const dataFinished = ref(false);


const emit = defineEmits(['delete']);

const url = computed(() => {
  return `https://jsonplaceholder.typicode.com/users?_limit=3&_page=`+currentPage.value;
});

const {data, error} = useFetch(url);

/*watch(data, (newValue) => {
  if(!newValue.length) {
    dataFinished.value = true;
    return;
  }
  data.value = isInfinitePagination ? [...data.value, ...newValue] : newValue

})*/

function deleteUser(id) {
  fetch('https://url-delete-user')
      .then((response) => response.json())
      .then((json) => {
        if (json.success) {
          users.value = users.value.filter(user => user.id !== id);
        } else if (json.message) {
          alert(json.message);
        }
      })
}





async function fetchUsers() {
  if(dataFinished.value) return;
  isLoading.value = true;



}






const incrementPageNumber = () => {
  if(!dataFinished.value) {
    !isInfinitePagination.value || currentPage.value++
  }
}
</script>
