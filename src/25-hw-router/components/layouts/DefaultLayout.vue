<template>
  <div class="app">
    <div class="app__wrapper app__wrapper_page-type_inner">
      <aside class="left-bar">
        <div class="left-bar__expander"><a class="button button_no-text button_size_xs button_rounded button_color_secondary" href="#">
          <svg class="icon icon_type_chevron-left">
            <use xlink:href="@/assets/i/sprite/sprite.svg#chevron-left"></use>
          </svg></a>
        </div>
        <LeftBar/>
      </aside>
      <div class="app__main">
        <RouterView></RouterView>
        <div
            v-if="$route.name === 'Deals'"
            class="page-notifications">
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
    </div>
    <footer class="footer">
      <div class="footer__copyright">&copy;2019-2022 Company Name
      </div>
      <div class="footer__items-group">
        <div class="footer__item"><a class="footer__link" href="#">Ссылка</a>
        </div>
        <div class="footer__item"><a class="footer__link" href="#">Техподдержка</a>
        </div>
      </div>
      <div class="footer__item">
        Построено на
        <a class="footer__link" href="#">OpenCRM</a>
      </div>
    </footer>
  </div>
</template>

<script setup>

import LeftBar from "@/25-hw-router/components/menu/LeftBar.vue";
</script>