<template>
  <div class="dialog-choose__body">
    <ul
        class="dialog-choose__items" v-if="todoLists.length">
      <!--<li class="dialog-choose__item dialog-choose__item_active">
        <div class="dialog-choose__item-title">ООО "Иванов и партнеры"
        </div>
        <div class="dialog-choose__item-subtitle">ИНН 7711555111 / КПП 770101001
        </div>
      </li>-->
      <li
          v-for="item in todoLists"
          :key="item.id"
          class="dialog-choose__item"
      >
        <div class="dialog-choose__item-title">
          {{item.title}}
        </div>
        <div class="dialog-choose__item-subtitle">
          {{item.completed ? 'выполнено' : 'невыполнено'}}
        </div>
      </li>

    </ul>
    <div class="no-res" v-else >
      Не нашлось дел
    </div>
  </div>
</template>

<script setup>
defineProps({
  todoLists: {
    type: Array,
    required: true
  }
})
</script>
<style lang="scss">
.no-res {
  text-align: center;
}
</style>