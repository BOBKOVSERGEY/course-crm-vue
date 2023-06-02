<template>
  <div class="main-content">
    <div class="main-content__head">
      <div class="main-content__title">Роли и права
      </div>
    </div>
    <div class="main-content__body">
      <div class="table-view">
        <table class="table">
          <thead class="table__head">
          <tr class="table__head-row">
            <th class="table__head-cell table__head-cell_width_min">Роль
            </th>
            <th class="table__head-cell">Описание
            </th>
            <th class="table__head-cell table__head-cell_width_min">Разрешения
            </th>
            <th class="table__head-cell table__head-cell_actions">
            </th>
          </tr>
          </thead>
          <tbody class="table__body">
          <tr class="table__body-row">
            <td class="table__body-cell table__body-cell_one-line">Администратор
            </td>
            <td class="table__body-cell">Неограниченные права и возможности
            </td>
            <td class="table__body-cell table__body-cell_one-line">55 из 55
            </td>
            <td class="table__body-cell table__body-cell_actions">
            </td>
          </tr>
          <tr class="table__body-row">
            <td class="table__body-cell table__body-cell_one-line">Менеджер
            </td>
            <td class="table__body-cell">Управляет клиентами/контрактами/сделками
            </td>
            <td class="table__body-cell table__body-cell_one-line">18 из 55
            </td>
            <td class="table__body-cell table__body-cell_actions"><a class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
              <svg class="icon icon_type_pencil">
                <use xlink:href="@/assets/i/sprite/sprite.svg#pencil"></use>
              </svg></a><a class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
              <svg class="icon icon_type_trash">
                <use xlink:href="@/assets/i/sprite/sprite.svg#trash"></use>
              </svg></a>
            </td>
          </tr>
          <tr class="table__body-row">
            <td class="table__body-cell table__body-cell_one-line">Пользователь
            </td>
            <td class="table__body-cell">Роль для учетной записи обычного пользователя
            </td>
            <td class="table__body-cell table__body-cell_one-line">2 из 55
            </td>
            <td class="table__body-cell table__body-cell_actions"><a class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
              <svg class="icon icon_type_pencil">
                <use xlink:href="@/assets/i/sprite/sprite.svg#pencil"></use>
              </svg></a><a class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
              <svg class="icon icon_type_trash">
                <use xlink:href="@/assets/i/sprite/sprite.svg#trash"></use>
              </svg></a>
            </td>
          </tr>
          </tbody>
        </table>
        <div class="pagination">
          <div class="pagination__column">
            <div class="pagination__text pagination__text_range">0 — 10
            </div>
            <div class="pagination__text">из 1200 записей
            </div>
          </div>
          <div class="pagination__column">
            <div class="pagination__text">страница
            </div>
            <div class="pagination__controls"><a class="button button_size_xs button_no-text" href="#">
              <svg class="icon icon_type_chevron-left">
                <use xlink:href="@/assets/i/sprite/sprite.svg#chevron-left"></use>
              </svg></a>
              <div class="textbox textbox_size_s textbox_text-center">
                <label class="textbox__wrapper">
                  <input class="textbox__input" type="text" placeholder="Плейсхолдер" value="1"/>
                </label>
              </div><a class="button button_size_xs button_no-text" href="#">
                <svg class="icon icon_type_chevron-right">
                  <use xlink:href="@/assets/i/sprite/sprite.svg#chevron-right"></use>
                </svg></a>
            </div>
            <div class="pagination__text">из 120
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>