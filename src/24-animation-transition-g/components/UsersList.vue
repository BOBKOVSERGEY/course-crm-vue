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
            <TransitionGroup>
            <tr class="table__body-row"
                v-for="user in users"
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
            </TransitionGroup>
            </tbody>
        </table>
        <Pagination
            v-model="currentPage"
        />
    </div>
</template>

<script setup>
import Pagination from '@/24-animation-transition-g/components/Pagination.vue'
import Button from '@/24-animation-transition-g/components/Button.vue'
import TableBodyCell from "@/24-animation-transition-g/components/TableBodyCell.vue";
import Icon from "@/24-animation-transition-g/components/Icon.vue";
import {ref, watchEffect} from "vue";

const props = defineProps({
  username: String
})
const users = ref([]);
const currentPage = ref(1);
const searchText = ref('');
const isLoading = ref(false);


const emit = defineEmits(['delete']);

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
  isLoading.value = true;
  let url = 'https://jsonplaceholder.typicode.com/users?';
  console.log(url)
  if (props.username) {
    url += `&username=${ props.username }`;
  }
  else {
    url += `&_limit=3`;
    if(currentPage.value > 1) {
      url += `&_page=${ currentPage.value }`;
    }
  }




    await fetch(url)
        .then((response) => {
          return response.json()
        })
        .then((json) => {
          users.value = json;
        })
        .catch((error) => {
          alert('Error: ' + error)
        })
        .finally(() => {
          isLoading.value = false;
        })

}



watchEffect(() => {
  fetchUsers()
})
</script>
