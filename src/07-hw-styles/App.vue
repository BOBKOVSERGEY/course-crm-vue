<template>
  <div class="my-component">
    App
  </div>
  <MyComponent />
  <div class="utility-container">
    <div class="utility-container__header">
      <div class="utility-container__title">.notification
      </div><a class="logo"><img src="@/assets/i/logo/logo-neutral-0.svg" alt="OpenCrm"/></a>
    </div>
    <div class="utility-container__body">
      <div class="notification">
        <div class="notification__close">
          <svg class="icon_size_xs icon icon_type_x">
            <use xlink:href="@/assets/i/sprite/sprite.svg#x"></use>
          </svg>
        </div>
        <svg class="icon icon_type_exclamation-circle">
          <use xlink:href="@/assets/i/sprite/sprite.svg#exclamation-circle"></use>
        </svg>
        <div class="notification__content">
          <div class="notification__title">Есть незакрытые сделки
          </div>
          <div class="notification__description">
            Перейдите в интерфейс
            <a href="#">Сделки</a>
            и обработайте незакрытые сделки
          </div>
          <div class="notification__buttons"><a class="button button_size_xs" href="#">Перейти</a><a class="button button_size_xs button_transparent" href="#">Закрыть</a>
          </div>
        </div>
      </div>
      <div class="notification notification_color_success">
        <div class="notification__close">
          <svg class="icon_size_xs icon icon_type_x">
            <use xlink:href="@/assets/i/sprite/sprite.svg#x"></use>
          </svg>
        </div>
        <svg class="icon icon_type_exclamation-circle">
          <use xlink:href="@/assets/i/sprite/sprite.svg#exclamation-circle"></use>
        </svg>
        <div class="notification__content">
          <div class="notification__title">Есть незакрытые сделки
          </div>
          <div class="notification__description">
            Перейдите в интерфейс
            <a href="#">Сделки</a>
            и обработайте незакрытые сделки
          </div>
          <div class="notification__buttons"><a class="button button_size_xs" href="#">Перейти</a><a class="button button_size_xs button_transparent button_color_neutral-0" href="#">Закрыть</a>
          </div>
        </div>
      </div>
      <div class="notification notification_color_warning">
        <div class="notification__close">
          <svg class="icon_size_xs icon icon_type_x">
            <use xlink:href="@/assets/i/sprite/sprite.svg#x"></use>
          </svg>
        </div>
        <svg class="icon icon_type_exclamation-circle">
          <use xlink:href="@/assets/i/sprite/sprite.svg#exclamation-circle"></use>
        </svg>
        <div class="notification__content">
          <div class="notification__title">Есть незакрытые сделки
          </div>
          <div class="notification__description">
            Перейдите в интерфейс
            <a href="#">Сделки</a>
            и обработайте незакрытые сделки
          </div>
          <div class="notification__buttons"><a class="button button_size_xs" href="#">Перейти</a><a class="button button_size_xs button_transparent" href="#">Закрыть</a>
          </div>
        </div>
      </div>
      <div class="notification notification_color_error">
        <div class="notification__close">
          <svg class="icon_size_xs icon icon_type_x">
            <use xlink:href="@/assets/i/sprite/sprite.svg#x"></use>
          </svg>
        </div>
        <svg class="icon icon_type_exclamation-circle">
          <use xlink:href="@/assets/i/sprite/sprite.svg#exclamation-circle"></use>
        </svg>
        <div class="notification__content">
          <div class="notification__title">Есть незакрытые сделки
          </div>
          <div class="notification__description">
            Перейдите в интерфейс
            <a href="#">Сделки</a>
            и обработайте незакрытые сделки
          </div>
          <div class="notification__buttons"><a class="button button_size_xs" href="#">Перейти</a><a class="button button_size_xs button_transparent button_color_neutral-0" href="#">Закрыть</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import MyComponent from "@/07-hw-styles/MyComponent.vue";
</script>
<style lang="scss">
@use "sass:math";
@import '@/assets/sass/variables';
@import '../assets/sass/extends/_*.scss';

@import '../assets/common.blocks/icon/**/*.scss';
@import '../assets/common.blocks/notification/**/*.scss';
@import '../assets/common.blocks/button/**/*.scss';
@import '../assets/common.blocks/utility-container/**/*.scss';

.my-component {
  color: orange;
  font-size: 22px;
}

</style>
