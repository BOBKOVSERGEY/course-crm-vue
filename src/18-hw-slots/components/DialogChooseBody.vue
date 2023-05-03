<template>
  <div class="dialog-choose__body">
    <ul
        class="dialog-choose__items" v-if="contractors.length">
      <!--<li class="dialog-choose__item dialog-choose__item_active">
        <div class="dialog-choose__item-title">ООО "Иванов и партнеры"
        </div>
        <div class="dialog-choose__item-subtitle">ИНН 7711555111 / КПП 770101001
        </div>
      </li>-->
      <li
          v-for="contractor in contractors"
          :key="contractor.id"
          class="dialog-choose__item"
      >
        <div class="dialog-choose__item-title">
           {{contractor.name}}
        </div>
        <div class="dialog-choose__item-subtitle">
          ИНН {{ contractor.inn }} / КПП {{ contractor.kpp }}
        </div>
      </li>

    </ul>
    <div class="no-res" v-else >
      Не нашлось компаний
    </div>
  </div>
</template>

<script setup>
defineProps({
  contractors: {
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