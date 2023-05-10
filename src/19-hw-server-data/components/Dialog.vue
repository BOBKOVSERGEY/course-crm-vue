<template>
  <div class="utility-container__body">
    <div class="dialog-choose">
      <div class="dialog-choose__close">
        <svg class="icon_size_l icon icon_type_x">
          <use xlink:href="@/assets/i/sprite/sprite.svg#x"></use>
        </svg>
      </div>
      <div class="dialog-choose__head">
        <HeadingDialog>
          Список дел
        </HeadingDialog>
        <DescriptionDialog>
          <template #default>
            Выберите дело из списка. Чтобы добавить новое дело, воспользуйтесь интерфейсом
          </template>
          <template #link>
            <a href="#">Список дел</a>
          </template>
        </DescriptionDialog>
      <TextBox
          label="Название контрагента"
          v-model="searchQuery"
          placeholder="Введите название компании, Инн, КПП"
          @getData="fetchList"
      />
      </div>
      <DialogChooseBody v-if="todoList.items.length" :todoLists="todoList.items" />
      <div class="dialog-choose__footer">
        <a
            class="button button_size_s button_no-text button_rounded" href="#">
          <svg class="icon icon_type_plus-circle">
            <use xlink:href="@/assets/i/sprite/sprite.svg#plus-circle"></use>
          </svg>
        </a>
        <DialogChooseFooterText>
            новое дело
        </DialogChooseFooterText>
      </div>
    </div>
  </div>
</template>

<script setup>
import TextBox from "@/19-hw-server-data/components/TextBox.vue";
import {computed, onBeforeMount, onMounted, ref} from "vue";
import { faker} from "@faker-js/faker";
import DialogChooseBody from "@/19-hw-server-data/components/DialogChooseBody.vue";
import HeadingDialog from "@/19-hw-server-data/components/HeadingDialog.vue";
import DescriptionDialog from "@/19-hw-server-data/components/DescriptionDialog.vue";
import DialogChooseFooterText from "@/19-hw-server-data/components/DialogChooseFooterText.vue";
const searchQuery = ref('');

const todoList = ref({
  items: [],
  errors: [],
  loading: false
});
const fetchList = async () => {
  todoList.value.loading = true
  await fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then( (response) => response.json())
      .then((res) => {
        if (searchQuery.value) {
          todoList.value.items = res.filter(list =>
              list.title.toLowerCase().includes(searchQuery.value.toLowerCase())
          );
        } else {
          todoList.value.items = res;
        }
      })
      .catch((error) => todoList.value.errors = error)
      .finally( () => todoList.value.loading = false)
}

onMounted(() => {
  fetchList()
});

</script>

<style lang="scss">
.dialog-choose__footer {
  flex-direction: column!important;
}
</style>