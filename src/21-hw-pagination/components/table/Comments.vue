<template>
  <div class="table-view">
    <table class="table">
      <thead class="table__head">
      <tr class="table__head-row">
        <TableHeadCell text="Name"/>
        <TableHeadCell text="Email"
                       @change-sort="(sortDir) => handleSort('email', sortDir)"
                       :sort-dir="sortKey === 'email' && sortDir ? sortDir : ''"
        />
        <th class="table__head-cell">
          Body
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
            v-if="comments.length"
            v-for="comment in comments"
            :key="comment.id"
            class="table__body-row">
          <td class="table__body-cell">
            {{comment.name}}
          </td>
          <td class="table__body-cell">
            <a href="#">
              {{comment.email}}
            </a>
          </td>
          <td class="table__body-cell">
              {{comment.body.slice(0, 10)}}
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
    <Pagination
        v-model="currentPage"
    />
  </div>
</template>

<script setup>
import Pagination from "@/21-hw-pagination/components/Pagination.vue";
import TableHeadCell from "@/21-hw-pagination/components/table/TableHeadCell.vue";
import {onMounted, ref, watchEffect} from "vue";

const currentPage = ref(1);



function handleSort(key, sortDir){
  console.log(key, sortDir)
  sortUsers(key, sortDir)
}


const comments = ref([]);
const loading = ref(false);
const errors = ref([]);

const getComments = async () => {
  loading.value = true;
  let url = `https://jsonplaceholder.typicode.com/comments?&_limit=10`;
  if(currentPage.value > 1) {
    url += `&_page=${ currentPage.value }`;
  }
  await fetch(url)
      .then( (response) => response.json())
      .then((res) => {
        comments.value = res;
      })
      .catch((error) => errors.value = error)
      .finally( () => loading.value = false)
}


watchEffect(() => {
  getComments();
})

const sortDir = ref('');
const sortKey = ref('');
function sortUsers(key, dir){
  sortDir.value = dir;
  sortKey.value = key;
  if(!dir){
    getComments();
    return;
  }
  comments.value.sort((user1, user2) => {
    return dir === 'asc' ? user1[key].localeCompare(user2[key]) : -(user1[key].localeCompare(user2[key]));
  });
}
</script>