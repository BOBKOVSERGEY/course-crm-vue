<template>
  <div class="page-notifications" v-if="notifications.length">
    <div class="notification"
         v-for="notification in notifications"
         :key="notification.title"
         :class="[notification.type ? 'notification_color_'+notification.type : '']"
    >
      <div class="notification__close">
        <svg class="icon_size_xs icon icon_type_x">
          <use xlink:href="@/assets/i/sprite/sprite.svg#x"></use>
        </svg>
      </div>
      <svg class="icon icon_type_exclamation-circle">
        <use xlink:href="@/assets/i/sprite/sprite.svg#exclamation-circle"></use>
      </svg>
      <div class="notification__content">
        <div class="notification__title">
          {{ notification.title }}
        </div>
        <div class="notification__description">
          {{ notification.message }}
        </div>
        <div class="notification__buttons" >
          <a class="button button_size_xs"
             v-if="notification.link !== ''"
             :href="notification.link">Перейти</a>
          <a
              class="button button_size_xs button_transparent"
              :class="[notification.type === 'error' ||  notification.type === 'success' ? 'button_color_neutral-0' : '']"
              href="#">Закрыть</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import notifications from './data/notifications.json';
import { ref } from "vue";

</script>

