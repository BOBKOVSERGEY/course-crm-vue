<template>
  <aside class="left-bar">
    <div class="left-bar__expander"><a class="button button_no-text button_size_xs button_rounded button_color_secondary" href="#">
      <svg class="icon icon_type_chevron-left">
        <use xlink:href="@/assets/i/sprite/sprite.svg#chevron-left"></use>
      </svg></a>
    </div>
    <div class="left-bar__inner">
      <div class="left-bar__logo-wrapper"><a class="logo"><img src="@/assets/i/logo/logo-light.svg" alt="OpenCrm"></a>
      </div>
      <Menu />
    </div>
  </aside>
</template>

<script setup>

import Menu from "@/12-hw-custom-components/components/Menu/Menu.vue";
</script>