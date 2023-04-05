<template>
  <div class="widget-summary-entity">
    <div class="widget-summary-entity__head">
      <div class="widget-summary-entity__title">
        <svg class="icon_size_l icon icon_type_receipt-tax">
          <use xlink:href="@/assets/i/sprite/sprite.svg#receipt-tax"></use>
        </svg><span>Координаты</span>
      </div><a class="button button_size_s button_rounded button_no-text button_transparent" href="#" @click.prevent="increaseCounter">
      <svg class="icon icon_type_arrow-right">
        <use xlink:href="@/assets/i/sprite/sprite.svg#arrow-right"></use>
      </svg></a>
    </div>
    <div class="widget-summary-entity__body">
      <div class="widget-summary-entity__item">
        <div class="counter">{{ x }}
        </div><span>X</span>
      </div>
      <div class="widget-summary-entity__item">
        <div class="counter counter_color_neutral-0">{{ y }}
        </div><span>Y</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref, onUnmounted, onUpdated} from "vue";
const
    x = ref(0),
    y = ref(0);

onMounted(() => {
  window.addEventListener('mousemove', update);
});

onUpdated(()=> {
  console.log('x', x.value, 'y', y.value);
})

onUnmounted(() => {
  window.removeEventListener('mousemove', update);
});

function update(event) {
  x.value = event.pageX
  y.value = event.pageY
}
</script>

<script>
/***
 * option api ***/

/*export default  {
  data() {
    return {
      x: 0,
      y: 0,
    }
  },
  methods: {
    update(event) {
      this.x = event.pageX
      this.y = event.pageY
    }
  },
  mounted() {
    window.addEventListener('mousemove', this.update);
  },
  updated() {
    console.log('x', this.x, 'y', this.y);
  },
  unmounted() {
    window.removeEventListener('mousemove', this.update);
  }
}*/
</script>
