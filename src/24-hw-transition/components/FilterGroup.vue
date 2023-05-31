<template>
  <div class="named-filter-group">
    <div class="named-filter named-filter_color_error named-filter_active">
      <div class="counter">15
      </div>
      <div class="named-filter__title">
        <svg class="icon_size_s icon icon_type_filter">
          <use xlink:href="@/assets/i/sprite/sprite.svg#filter"></use>
        </svg><span>Сроки нарушены!</span>
      </div>
      <div class="named-filter__description">Контракты, в которых есть сделки с нарушенными сроками поставки. Обработайте их или перенесите сроки сделки
      </div>
    </div>
    <div class="named-filter named-filter_color_error">
      <div class="counter">15
      </div>
      <div class="named-filter__title">
        <svg class="icon_size_s icon icon_type_filter">
          <use xlink:href="@/assets/i/sprite/sprite.svg#filter"></use>
        </svg><span>Ожидают подписания</span>
      </div>
      <div class="named-filter__description">Обработайте этих клиентов или отложите подписание контракта
      </div>
    </div>
    <div class="named-filter named-filter_color_error">
      <div class="counter">15
      </div>
      <div class="named-filter__title">
        <svg class="icon_size_s icon icon_type_filter">
          <use xlink:href="@/assets/i/sprite/sprite.svg#filter"></use>
        </svg><span>Завершение сделки в течение недели</span>
      </div>
      <div class="named-filter__description">Контракты, у которых близится срок завершения сделки. Обработайте их или перенесите даты завершения сделки.
      </div>
    </div>
  </div>
</template>

<script setup>

</script>