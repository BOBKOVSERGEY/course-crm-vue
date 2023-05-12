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
        <ModalAside />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>

import Footer from "@/20-hw-sorting/components/Footer.vue";
import LeftBar from "@/20-hw-sorting/components/LeftBar.vue";
import ModalAside from "@/20-hw-sorting/components/ModalAside.vue";
import MainContentHead from "@/20-hw-sorting/components/MainContentHead.vue";
import Search from "@/20-hw-sorting/components/Search.vue";
import ContractsList from "@/20-hw-sorting/components/table/ContractsList.vue";
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