<template>
   <div class="new-box">
      <UserInfoInput
          v-model:fullName="model.fullName"
          v-model:age="model.age"
          v-model:gender="model.gender"
      />
     <pre>
       {{model}}
     </pre>
    </div>
</template>

<script setup>

import UserInfoInput from "@/16-hw-components-v-model/components/UserInfoInput.vue";
import {ref} from "vue";

const model = ref({
  fullName: '',
  age: null,
  gender: ''
})
</script>
<style lang="scss">
.new-box {
  max-width: 500px;
  width: 100%;
  background-color: #F0F0F0;
  margin: 25px auto;
  padding: 25px;
  border-radius: 1rem;
}
</style>