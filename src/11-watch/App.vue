<template>
  <div class="app__wrapper app__wrapper_page-type_auth">
    <a class="logo logo_size_l"><img src="@/assets/i/logo/logo-dark.svg" alt="OpenCrm"></a>
    <div class="form-auth">
      <div class="form-auth__main">
        <div class="textbox">
          <label class="textbox__wrapper">
            <div class="textbox__label">
              Code from sms
            </div>
            <input class="textbox__input"
                   type="number"
                   placeholder="****"
                   v-model="code"
            >
          </label>
          <div class="textbox__message">
            {{ message }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>

import {reactive, ref, watch} from "vue";

const code = ref();
const message = ref('Input code from sms');

const a = reactive({
  name: 'N',
  code: 1234
})

watch(a, (newVal, oldVal) => {
  console.log(newVal.subfield)
  if (newVal.subfield == oldVal.subfield) {
    alert('Вот так Vue3')
  }
})

watch(code, (newVal, oldValue) => {
  if (newVal.toString().length === 4) {
    message.value = 'Идет отправка...'
    code.value = '';
  }
})
</script>

