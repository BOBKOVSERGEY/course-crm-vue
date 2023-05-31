<template>
  <div class="app">
    <div class="app__wrapper app__wrapper_page-type_inner">
      <LeftBar />
      <div class="app__main">
        <div class="main-content">
          <MainContentHead />
          <div class="main-content__body">
            <Search />
            <ContractsList
                @change-sort="sortUsers"
                :sort-dir="sortDir"
                :sort-key="sortKey"
                :contractList="contractList"
            />
          </div>
        </div>
     
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>

import Footer from "@/24-hw-transition/components/Footer.vue";
import LeftBar from "@/24-hw-transition/components/LeftBar.vue";
import MainContentHead from "@/24-hw-transition/components/MainContentHead.vue";
import Search from "@/24-hw-transition/components/Search.vue";
import ContractsList from "@/24-hw-transition/components/table/ContractsList.vue";
import {onMounted, ref} from "vue";

const contractList = ref([]);
const loading = ref(false);
const errors = ref([]);

const getContractList = async () => {
  loading.value = true;
  await fetch(`https://jsonplaceholder.typicode.com/users`)
      .then( (response) => response.json())
      .then((res) => {
        contractList.value = res;
      })
      .catch((error) => errors.value = error)
      .finally( () => loading.value = false)
}

onMounted(() => {
  getContractList();
})

const sortDir = ref('');
const sortKey = ref('');
function sortUsers(key, dir){
  sortDir.value = dir;
  sortKey.value = key;
  if(!dir){
    getContractList();
    return;
  }
  contractList.value.sort((user1, user2) => {
    return dir === 'asc' ? user1[key].localeCompare(user2[key]) : -(user1[key].localeCompare(user2[key]));
  });
}
</script>