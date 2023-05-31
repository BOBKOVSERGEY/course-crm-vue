<template>
  <div class="pagination">
    <div class="pagination__column">
      <div class="pagination__text pagination__text_range">0 — 10
      </div>
      <div class="pagination__text">из 1200 записей
      </div>
    </div>
    <div class="pagination__column">
      <div class="pagination__text">страница
      </div>
      <div class="pagination__controls"><a class="button button_size_xs button_no-text" href="#">
        <svg class="icon icon_type_chevron-left">
          <use xlink:href="@/assets/i/sprite/sprite.svg#chevron-left"></use>
        </svg></a>
        <div class="textbox textbox_size_s textbox_text-center">
          <label class="textbox__wrapper">
            <input class="textbox__input" type="text" placeholder="Плейсхолдер" value="1"/>
          </label>
        </div><a class="button button_size_xs button_no-text" href="#">
          <svg class="icon icon_type_chevron-right">
            <use xlink:href="@/assets/i/sprite/sprite.svg#chevron-right"></use>
          </svg></a>
      </div>
      <div class="pagination__text">из 120
      </div>
    </div>
  </div>
</template>

<script setup>

</script>