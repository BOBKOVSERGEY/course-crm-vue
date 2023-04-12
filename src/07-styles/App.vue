<template>
  <aside class="left-bar">
    <div class="left-bar__expander"><a class="button button_no-text button_size_xs button_rounded button_color_secondary" href="#">
      <svg class="icon icon_type_chevron-left">
        <use xlink:href="@/assets/i/sprite/sprite.svg#chevron-left"></use>
      </svg></a>
    </div>
    <div class="left-bar__inner">
      <div class="left-bar__logo-wrapper"><a class="logo"><img src="@/assets/i/logo/logo-light.svg" alt="OpenCrm"/></a>
      </div>
      <div class="main-menu">
        <div class="main-menu__profile-item"><a class="main-menu__link" href="#">
          <div class="user-avatar user-avatar_size_s">
            <div class="user-avatar__wrapper"><img class="user-avatar__image" src="@/assets/i/avatar-example.jpg" alt="avatar"/>
            </div>
          </div>
          <div class="main-menu__link-title">Иван Иванов
          </div></a><a class="main-menu__link" href="#">
          <svg class="icon_size_s icon icon_type_logout">
            <use xlink:href="@/assets/i/sprite/sprite.svg#logout"></use>
          </svg></a>
        </div>
        <div class="main-menu__item  main-menu__item_has-sub-items main-menu__item_expanded">
          <a class="main-menu__link" href="#">
          <svg class="icon icon_type_cog" >
            <use xlink:href="@/assets/i/sprite/sprite.svg#cog"></use>
          </svg>
          <div class="main-menu__link-title">Настройки (Свернут: {{ collapsed ? 'Yes': 'No' }} Tag: {{tag}})
          </div>
          <div class="main-menu__control" @click.prevent="toggleCollapsed">

            <svg class="icon icon_type_plus" v-if="collapsed">
              <use xlink:href="@/assets/i/sprite/sprite.svg#plus"></use>
            </svg>
            <svg class="icon icon_type_minus" v-else>
              <use xlink:href="@/assets/i/sprite/sprite.svg#minus"></use>
            </svg>
          </div></a>
          <div class="main-menu__sub-items">
            <div class="main-menu__item"><a class="main-menu__link" href="#">
              <svg class="icon icon_type_shield-exclamation">
                <use xlink:href="@/assets/i/sprite/sprite.svg#shield-exclamation"></use>
              </svg>
              <div class="main-menu__link-title">Роли и права
              </div>
              <div class="main-menu__control">
                <svg class="icon icon_type_chevron-right">
                  <use xlink:href="@/assets/i/sprite/sprite.svg#chevron-right"></use>
                </svg>
              </div></a>
            </div>
            <div class="main-menu__item  main-menu__item_active"><a class="main-menu__link" href="#">
              <svg class="icon icon_type_view-boards">
                <use xlink:href="@/assets/i/sprite/sprite.svg#view-boards"></use>
              </svg>
              <div class="main-menu__link-title">Статусы сделок
              </div>
              <div class="main-menu__control">
                <svg class="icon icon_type_chevron-right">
                  <use xlink:href="@/assets/i/sprite/sprite.svg#chevron-right"></use>
                </svg>
              </div></a>
            </div>
            <div class="main-menu__item"><a class="main-menu__link" href="#">
              <svg class="icon icon_type_table">
                <use xlink:href="@/assets/i/sprite/sprite.svg#table"></use>
              </svg>
              <div class="main-menu__link-title">Настройка доп. полей
              </div>
              <div class="main-menu__control">
                <svg class="icon icon_type_chevron-right">
                  <use xlink:href="@/assets/i/sprite/sprite.svg#chevron-right"></use>
                </svg>
              </div></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref } from "vue";

const collapsed = ref(false);
const tag = ref('');
const toggleCollapsed = (event) => {
  collapsed.value = !collapsed.value
  tag.value = event.target.tagName
}

const setCollapsed = (value, event) => {
  collapsed.value = !!value
  tag.value = event.target.tagName
}
</script>

<style lang="scss">
@use "sass:math";
@import '@/assets/sass/variables';

@import '../assets/sass/extends/_*.scss';
@import '../assets/common.blocks/button/**/*.scss';
@import '../assets/common.blocks/icon/**/*.scss';
@import '../assets/common.blocks/main-menu/**/*.scss';
@import '../assets/common.blocks/user-avatar/**/*.scss';
@import '../assets/common.blocks/logo/**/*.scss';
@import '../assets/common.blocks/left-bar/**/*.scss';
</style>
