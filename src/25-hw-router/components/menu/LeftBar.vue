<template>
  <div class="left-bar__inner">
    <div class="left-bar__logo-wrapper"><a class="logo"><img src="@/assets/i/logo/logo-light.svg" alt="OpenCrm"/></a>
    </div>
    <div class="main-menu">
      <div class="main-menu__profile-item">
        <RouterLink
            :to="{ name: 'Profile'}"
            class="main-menu__link" >
          <div class="user-avatar user-avatar_size_s">
            <div class="user-avatar__wrapper"><img class="user-avatar__image" src="@/assets/i/avatar-example.jpg" alt="avatar"/>
            </div>
          </div>
          <div class="main-menu__link-title">Иван Иванов
          </div>
        </RouterLink>
        <a class="main-menu__link" href="#logout">
        <svg class="icon_size_s icon icon_type_logout">
          <use xlink:href="@/assets/i/sprite/sprite.svg#logout"></use>
        </svg></a>
      </div>
      <div class="main-menu__item">
        <RouterLink
            :to="{ name: 'Users'}"
            class="main-menu__link">
        <svg class="icon icon_type_user-group">
          <use xlink:href="@/assets/i/sprite/sprite.svg#user-group"></use>
        </svg>
        <div class="main-menu__link-title">Пользователи
        </div>
        <div class="main-menu__control">
          <svg class="icon icon_type_chevron-right">
            <use xlink:href="@/assets/i/sprite/sprite.svg#chevron-right"></use>
          </svg>
        </div>
        </RouterLink>
      </div>
      <div class="main-menu__item  main-menu__item_active">
        <RouterLink
            :to="{ name: 'CompanyGroups'}"
            class="main-menu__link">
        <svg class="icon icon_type_office-building">
          <use xlink:href="@/assets/i/sprite/sprite.svg#office-building"></use>
        </svg>
        <div class="main-menu__link-title">Группы компаний
        </div>
        <div class="main-menu__control">
          <svg class="icon icon_type_chevron-right">
            <use xlink:href="@/assets/i/sprite/sprite.svg#chevron-right"></use>
          </svg>
        </div>
        </RouterLink>
      </div>
      <div class="main-menu__item">
        <RouterLink
            :to="{name: 'Contractors'}"
            class="main-menu__link" >
        <svg class="icon icon_type_share">
          <use xlink:href="@/assets/i/sprite/sprite.svg#share"></use>
        </svg>
        <div class="main-menu__link-title">Контрагенты
        </div>
        <div class="main-menu__control">
          <svg class="icon icon_type_chevron-right">
            <use xlink:href="@/assets/i/sprite/sprite.svg#chevron-right"></use>
          </svg>
        </div>
        </RouterLink>
      </div>
      <div class="main-menu__item">
        <RouterLink
            :to="{ name: 'Contracts' }"
            class="main-menu__link" >
        <svg class="icon icon_type_document-text">
          <use xlink:href="@/assets/i/sprite/sprite.svg#document-text"></use>
        </svg>
        <div class="main-menu__link-title">Контракты
        </div>
        <div class="main-menu__control">
          <svg class="icon icon_type_chevron-right">
            <use xlink:href="@/assets/i/sprite/sprite.svg#chevron-right"></use>
          </svg>
        </div>
        </RouterLink>
      </div>
      <div class="main-menu__item">
        <RouterLink
            :to="{name: 'Deals'}"
            class="main-menu__link">
        <svg class="icon icon_type_receipt-tax">
          <use xlink:href="@/assets/i/sprite/sprite.svg#receipt-tax"></use>
        </svg>
        <div class="main-menu__link-title">Сделки
        </div>
        <div class="main-menu__control">
          <svg class="icon icon_type_chevron-right">
            <use xlink:href="@/assets/i/sprite/sprite.svg#chevron-right"></use>
          </svg>
        </div>
        </RouterLink>
      </div>
      <div class="main-menu__item  main-menu__item_has-sub-items main-menu__item_expanded">
        <RouterLink
            :to="{name: 'Settings'}"
            class="main-menu__link">
        <svg class="icon icon_type_cog">
          <use xlink:href="@/assets/i/sprite/sprite.svg#cog"></use>
        </svg>
        <div class="main-menu__link-title">Настройки
        </div>
        <div class="main-menu__control">
          <svg class="icon icon_type_plus">
            <use xlink:href="@/assets/i/sprite/sprite.svg#plus"></use>
          </svg>
          <svg class="icon icon_type_minus">
            <use xlink:href="@/assets/i/sprite/sprite.svg#minus"></use>
          </svg>
        </div>
        </RouterLink>
        <div class="main-menu__sub-items">
          <div class="main-menu__item">
            <RouterLink
                :to="{name: 'RolesPermissions'}"
                class="main-menu__link">
            <svg class="icon icon_type_shield-exclamation">
              <use xlink:href="@/assets/i/sprite/sprite.svg#shield-exclamation"></use>
            </svg>
            <div class="main-menu__link-title">Роли и права
            </div>
            <div class="main-menu__control">
              <svg class="icon icon_type_chevron-right">
                <use xlink:href="@/assets/i/sprite/sprite.svg#chevron-right"></use>
              </svg>
            </div>
            </RouterLink>
          </div>
          <div class="main-menu__item  main-menu__item_active">
            <RouterLink
                :to="{name: 'DealStatuses'}"
                class="main-menu__link">
            <svg class="icon icon_type_view-boards">
              <use xlink:href="@/assets/i/sprite/sprite.svg#view-boards"></use>
            </svg>
            <div class="main-menu__link-title">Статусы сделок
            </div>
            <div class="main-menu__control">
              <svg class="icon icon_type_chevron-right">
                <use xlink:href="@/assets/i/sprite/sprite.svg#chevron-right"></use>
              </svg>
            </div>
            </RouterLink>
          </div>
          <div class="main-menu__item">
            <RouterLink
                :to="{name: 'CustomFields'}"
                class="main-menu__link">
            <svg class="icon icon_type_table">
              <use xlink:href="@/assets/i/sprite/sprite.svg#table"></use>
            </svg>
            <div class="main-menu__link-title">Настройка доп. полей
            </div>
            <div class="main-menu__control">
              <svg class="icon icon_type_chevron-right">
                <use xlink:href="@/assets/i/sprite/sprite.svg#chevron-right"></use>
              </svg>
            </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>