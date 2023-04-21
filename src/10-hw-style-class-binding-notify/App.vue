<template>
  <div class="form">
    <div class="textbox textbox_size_s">
      <label class="textbox__wrapper">
        <div class="textbox__label">Input title notify
        </div>
        <input
            v-model="model.title"
            class="textbox__input"
               type="text"
               placeholder="Title notify"
        >
      </label>
    </div>
    <div class="textbox textbox_size_s">
      <label class="textbox__wrapper">
        <div class="textbox__label">Input message notify
        </div>
        <input
            v-model="model.message"
            class="textbox__input" type="text" placeholder="Message notify">
      </label>
    </div>
    <div class="textbox textbox_size_s">
      <label class="textbox__wrapper">
        <div class="textbox__label">Input link notify
        </div>
        <input
            v-model="model.link"
            class="textbox__input" type="text" placeholder="Link notify">
      </label>
    </div>
    <div class="radio-group__wrapper">
      <div class="radio-group__title">Select type notify
      </div>
    </div>
    <div class="radio-group__wrapper">
      <div class="radio-group__controls">
        <div class="radio-group__control">
          <label class="radio">
            <input type="radio" value="success" v-model="model.type">
            <div class="radio__input"></div>
            <div class="radio__label">success
            </div>
          </label>
        </div>
        <div class="radio-group__control">
          <label class="radio">
            <input type="radio" value="warning" v-model="model.type">
            <div class="radio__input"></div>
            <div class="radio__label">warning
            </div>
          </label>
        </div>
        <div class="radio-group__control">
          <label class="radio">
            <input type="radio" value="error" v-model="model.type">
            <div class="radio__input"></div>
            <div class="radio__label">error
            </div>
          </label>
        </div>
        <div class="radio-group__control">
          <label class="radio">
            <input type="radio" value="" v-model="model.type">
            <div class="radio__input"></div>
            <div class="radio__label">default
            </div>
          </label>
        </div>
      </div>
    </div>
    <button

        @click="addNotify(model)"
        class="button" >Add notify</button>
    <br>
    <br>
    <pre>
      {{model}}
    </pre>
  </div>
    <TransitionGroup
        v-if="notifications.length"
        tag="div"
        enter-from-class="translate-x-full opacity-0"
        enter-active-class="duration-500"
        leave-active-class="duration-500"
        leave-to-class="translate-x-full opacity-0"
        class="page-notifications">
    <div class="notification"
         v-for="notification in notifications"
         :key="notification.id"
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
    </TransitionGroup>
</template>
<script setup>
import {onMounted, ref} from "vue";
import notificationsApi from './data/notifications.json';
import avatarUrl from "@/assets/i/avatar-example.jpg";

const notifications = ref([]);

onMounted(() => {
  notifications.value = notificationsApi
})

const model = ref({
  title: '',
  message: '',
  link: '',
  type: '',
});

const addNotify = (model) => {
  if(model.title.length) {
    notifications.value.unshift({
      id: Symbol(),
      title: model.title,
      message: model.message,
      link: model.link,
      type: model.type,
    });
    resetForm(model);
  }

}

const resetForm = (model) => {
  model.title = '';
  model.message = '';
  model.link = '';
  model.type = '';
}


</script>
<style lang="scss" scoped>
.opacity-0 {
  opacity: 0;
}
.duration-500 {
  transition-duration: .5s;
}
.translate-x-full {
  transform: translateX(100%);
}
@import "@/assets/sass/_variables.scss";
.form {
  padding: $gap_m;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  & .textbox {
    min-width: 270px;
  }
  & > * {
    margin-right: $gap_m;
    margin-bottom: $gap_m;
  }
  &__checkbox {
    display: flex;
    flex-direction: column;
    & > label {
      margin-bottom: 10px;
    }
  }
}
</style>

