<template>
  <input type="text" v-model="searchQuery">
  <button
      @click="fetchSeach"
      class="button">Искать</button>
  <br>
  <br>
  <br>
  <button
      class="button"
  @click="fetchUsers"
  >
    get data
  </button>
  <pre>
    {{ users }}
    {{ loading }}
    {{ errors }}
    {{ searchQuery }}
  </pre>
</template>

<script setup>
import {onMounted, ref} from "vue";
const searchQuery = ref('');
const users = ref([]);
const errors = ref([]);
const loading = ref(false);
const fetchUsers = async () => {
  loading.value = true
  await fetch(`https://jsonplaceholder.typicode.com/users?_limit=5`)
      .then( (response) => response.json())
      .then((json) => users.value = json)
      .catch((error) => errors.value = error)
      .finally( () => loading.value = false)
}

const fetchSeach = async () => {
  loading.value = true
  await fetch(`https://jsonplaceholder.typicode.com/users?username=${searchQuery.value}`)
      .then( (response) => response.json())
      .then((json) => users.value = json)
      .catch((error) => errors.value = error)
      .finally( () => loading.value = false)
}

onMounted(() => {
  fetchUsers()
})
</script>
