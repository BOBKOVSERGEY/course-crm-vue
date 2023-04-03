<template>
    <div class="widget-summary-entity">
      <div class="widget-summary-entity__head">
        <div class="widget-summary-entity__title">
          <svg class="icon_size_l icon icon_type_receipt-tax">
            <use xlink:href="@/assets/i/sprite/sprite.svg#receipt-tax"></use>
          </svg><span>Сделки</span>
        </div><a class="button button_size_s button_rounded button_no-text button_transparent" href="#" @click.prevent="increaseCounter">
        <svg class="icon icon_type_arrow-right">
          <use xlink:href="@/assets/i/sprite/sprite.svg#arrow-right"></use>
        </svg></a>
      </div>
      <div class="widget-summary-entity__body">
        <div class="widget-summary-entity__item">
          <div class="counter">{{ counter }}
          </div><span>Требуют внимания</span>
        </div>
        <div class="widget-summary-entity__item">
          <div class="counter counter_color_neutral-0">{{ counter }}
          </div><span>В этом месяце</span>
        </div>
        <div class="widget-summary-entity__item">
          <div class="counter counter_color_neutral-0">{{ counter }}
          </div><span>Всего</span>
        </div>
      </div>
    </div>
</template>

<script setup>
import {ref} from "vue";
const counter = ref(0);

function increaseCounter() {
  counter.value++
}
</script>

<script>
/*
option api
export default  {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increaseCounter() {
      this.counter++
    }
  }
}*/
</script>
