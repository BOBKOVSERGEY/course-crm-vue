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
            </tbody>
        </table>
        <Pagination
            id="infinite-pagination-trigger"
            v-model="currentPage"
        />
    </div>
</template>

<script setup>
import Pagination from '@/22-infinity-scroll/components/Pagination.vue'
import Button from '@/22-infinity-scroll/components/Button.vue'
import TableBodyCell from "@/22-infinity-scroll/components/TableBodyCell.vue";
import Icon from "@/22-infinity-scroll/components/Icon.vue";
import {onMounted, ref, watchEffect} from "vue";


const props = defineProps({
  username: String
})
const users = ref([]);
const currentPage = ref(1);
const searchText = ref('');
const isLoading = ref(false);

const dataFinished = ref(false);


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
  if(dataFinished.value) return;
  isLoading.value = true;
  let url = 'https://jsonplaceholder.typicode.com/users?';
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
          if(!json.length) {
            dataFinished.value = true;
          }
          users.value = [...users.value, ...json]; // взять текущий массив и к нему добавить новую порцию
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

onMounted(() => {

  let options = {
    //root: document.querySelector("#scrollArea"), // елемент внутри которого мы будем следить за пресенчением искомого элемента
    rootMargin: "0px",
    threshold: 1.0,
  };
  const callback = (entries, observer)=> {
    //console.log(entries);
    console.log(observer);
    if(entries[0].isIntersecting && !dataFinished.value) {
      // load new portion data
      currentPage.value++
    }

    //observer.unobserve(entries[0].target) // отвязаться
  }
  let observer = new IntersectionObserver(callback, options);

  observer.observe(document.getElementById('infinite-pagination-trigger'));
})
</script>
