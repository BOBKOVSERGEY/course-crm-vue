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
</script>

