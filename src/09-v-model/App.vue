<template>
  <table class="table">
    <thead class="table__head">
    <tr class="table__head-row">
      <th class="table__head-cell">
      </th>
      <th class="table__head-cell">#
      </th>
      <th class="table__head-cell">Имя
      </th>
      <th class="table__head-cell">Фамилия
      </th>
      <th class="table__head-cell table__head-cell_actions"><a class="button button_no-text button_size_xs button_transparent" href="#">
        <svg class="icon icon_type_cog">
          <use xlink:href="@/assets/i/sprite/sprite.svg#cog"></use>
        </svg></a><a class="button button_no-text button_size_xs button_transparent" href="#">
        <svg class="icon icon_type_filter">
          <use xlink:href="@/assets/i/sprite/sprite.svg#filter"></use>
        </svg></a>
      </th>
    </tr>
    </thead>
    <tbody class="table__body">
    <tr class="table__body-row"
    v-for="item in items"
        :key="item.firstname"
    >
      <td class="table__body-cell table__body-cell_width_min">
        <label class="checkbox">
          <input type="checkbox"/>
          <div class="checkbox__input">
            <svg class="icon icon_type_checkbox">
              <use xlink:href="@/assets/i/sprite/sprite.svg#checkbox"></use>
            </svg>
          </div>
        </label>
      </td>
      <td class="table__body-cell table__body-cell_width_min">
        <div class="user-avatar user-avatar_size_s">
          <div class="user-avatar__wrapper">
            <img class="user-avatar__image" :src="item.avatar" alt="avatar"/>
          </div>
        </div>
      </td>
      <td class="table__body-cell">
        {{ item.firstname }}
      </td>
      <td class="table__body-cell">
        {{ item.lastname }}
      </td>

      <td class="table__body-cell table__body-cell_actions">
        <a
            v-if="item.canEdit"
            class="button button_no-text button_rounded button_size_xs button_transparent" href="#">
          <svg class="icon icon_type_pencil">
            <use xlink:href="@/assets/i/sprite/sprite.svg#pencil"></use>
          </svg>
        </a>
        <a
            v-if="item.canRemove"
            class="button button_no-text button_rounded button_size_xs button_transparent" href="#">
          <svg class="icon icon_type_trash">
            <use xlink:href="@/assets/i/sprite/sprite.svg#trash"></use>
          </svg>
        </a>
        <a
            v-if="item.canCheck"
            class="button button_no-text button_rounded button_size_xs button_transparent" href="#">
          <svg class="icon icon_type_check-circle">
            <use xlink:href="@/assets/i/sprite/sprite.svg#check-circle"></use>
          </svg>
        </a>
        <a
            class="button button_no-text button_rounded button_size_xs button_transparent" href="#">
          <svg class="icon icon_type_x">
            <use xlink:href="@/assets/i/sprite/sprite.svg#x"></use>
          </svg>
        </a>
      </td>
    </tr>

    </tbody>
  </table>
  <div class="form">
    <div class="textbox ">
      <label class="textbox__wrapper">
        <div class="textbox__label">Имя
        </div>
        <input
            v-model="model.firstname"
            class="textbox__input"
            type="text" placeholder="Имя">
      </label>
    </div>
    <div class="textbox ">
      <label class="textbox__wrapper">
        <div class="textbox__label">Фамилия
        </div>
        <input class="textbox__input"
               v-model="model.lastname" type="text" placeholder="Фамилия">
      </label>
    </div>
    <div class="form__checkbox">
      <label class="checkbox">
        <input type="checkbox"  v-model="model.canEdit">
        <div class="checkbox__input">
          <svg class="icon icon_type_checkbox">
            <use xlink:href="@/assets/i/sprite/sprite.svg#checkbox"></use>
          </svg>
        </div>
        <div class="checkbox__label">edit
        </div>
      </label>
      <label class="checkbox">
        <input type="checkbox"  v-model="model.canRemove">
        <div class="checkbox__input">
          <svg class="icon icon_type_checkbox">
            <use xlink:href="@/assets/i/sprite/sprite.svg#checkbox"></use>
          </svg>
        </div>
        <div class="checkbox__label">delete
        </div>
      </label>
      <label class="checkbox">
        <input type="checkbox"  v-model="model.canCheck">
        <div class="checkbox__input">
          <svg class="icon icon_type_checkbox">
            <use xlink:href="@/assets/i/sprite/sprite.svg#checkbox"></use>
          </svg>
        </div>
        <div class="checkbox__label">check
        </div>
      </label>
    </div>
    <button
        @click="addRecord(model)"
        class="button">Add record</button>
  </div>
  <pre>
      {{model}}
  </pre>
</template>
<script setup>
import { ref, reactive } from "vue";
import avatarUrl from '@/assets/i/avatar-example.jpg';

  const items = reactive([
    {
      avatar: avatarUrl,
      firstname: 'Ivan',
      lastname: 'Ivanov',
      canEdit: true,
      canRemove: true,
      canCheck: true
    },
    {
      avatar: avatarUrl,
      firstname: 'Petr',
      lastname: 'Valuev',
      canEdit: true,
      canRemove: true,
      canCheck: true
    },
    {
      avatar: avatarUrl,
      firstname: 'Gena',
      lastname: 'Turbo',
      canEdit: false,
      canRemove: true,
      canCheck: true,
    },
    {
      avatar: avatarUrl,
      firstname: 'Ilia',
      lastname: 'Tolokonkov',
      canEdit: true,
      canRemove: true,
      canCheck: false
    },
  ]);

  const model = ref({
    firstname: '',
    lastname: '',
    canEdit: false,
    canRemove: false,
    canCheck: false,
  });

  const addRecord = (model) => {
    let newRecord = {
      avatar: avatarUrl,
      firstname: model.firstname,
      lastname: model.lastname,
      canEdit: model.canEdit,
      canRemove: model.canRemove,
      canCheck: model.canCheck
    }
    items.unshift(newRecord)
    //reset(model)
  }
  const reset = (model) => {
        model.firstname = '';
        model.lastname = '';
        model.canEdit = false;
        model.canRemove = false;
        model.canCheck = false;
  }
</script>
<style lang="scss" scoped>
  @import "@/assets/sass/_variables.scss";
  .form {
    padding: $gap_m;
    display: flex;
    align-items: center;
    justify-content: center;
    //flex-direction: column;
    & > * {
      margin-right: $gap_m;
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

