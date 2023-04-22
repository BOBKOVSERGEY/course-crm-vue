<template>
  <div class="main-menu">
    <div class="main-menu__profile-item">
      <a class="main-menu__link" href="profile.html">
      <div class="user-avatar user-avatar_size_s">
        <div class="user-avatar__wrapper"><img class="user-avatar__image" src="@/assets/i/avatar-example.jpg" alt="avatar">
        </div>
      </div>
      <div class="main-menu__link-title">
        Some
      </div></a>
      <a class="main-menu__link" href="#logout">
      <svg class="icon_size_s icon icon_type_logout">
        <use xlink:href="@/assets/i/sprite/sprite.svg#logout"></use>
      </svg>
      </a>
    </div>


    <MenuItem />
    <MenuItem />
    <MenuItem />
    <MenuItem />
    <MenuItem />
    <MenuItem />
    <MenuItem />

    <div class="main-menu__item  main-menu__item_has-sub-items main-menu__item_expanded"><a class="main-menu__link" href="settings.html">
      <svg class="icon icon_type_cog">
        <use xlink:href="@/assets/i/sprite/sprite.svg#cog"></use>
      </svg>
      <div class="main-menu__link-title">Настройки
      </div>
      <div class="main-menu__control">
        <svg class="icon icon_type_plus" style="display: none">
          <use xlink:href="@/assets/i/sprite/sprite.svg#plus"></use>
        </svg>
        <svg class="icon icon_type_minus">
          <use xlink:href="@/assets/i/sprite/sprite.svg#minus"></use>
        </svg>
      </div></a>
      <div class="main-menu__sub-items">
        <div class="main-menu__item"><a class="main-menu__link" href="settings-roles.html">
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
        <div class="main-menu__item  main-menu__item_active"><a class="main-menu__link" href="settings-deal-statuses.html">
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
        <div class="main-menu__item"><a class="main-menu__link" href="settings-custom-fields.html">
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
</template>

<script setup>

import MenuItem from "@/12-hw-custom-components/components/Menu/MenuItem.vue";
</script>