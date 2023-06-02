<template>
  <div class="main-content">
    <div class="main-content__head">
      <div class="main-content__title">Настройка дополнительных полей
      </div>
    </div>
    <div class="main-content__body">
      <div class="tabs">
        <div class="tabs__head">
          <div class="tabs__tab tabs__tab_active">Сделка
          </div>
          <div class="tabs__tab">Контрагент
          </div>
          <div class="tabs__tab">Контракт
          </div>
          <div class="tabs__tab">Пользователь
          </div>
        </div>
        <div class="tabs__body">
          <div class="tabs__content tabs__content_active">
            <div class="table-view">
              <table class="table">
                <thead class="table__head">
                <tr class="table__head-row">
                  <th class="table__head-cell table__head-cell_width_min">Ключ
                  </th>
                  <th class="table__head-cell table__head-cell_width_min">Название поля
                  </th>
                  <th class="table__head-cell table__head-cell_width_min">Тип значения
                  </th>
                  <th class="table__head-cell table__head-cell_actions"><a class="button button_size_xs" href="#">
                    <svg class="icon icon_type_plus-circle">
                      <use xlink:href="@/assets/i/sprite/sprite.svg#plus-circle"></use>
                    </svg><span>Добавить поле</span></a>
                  </th>
                </tr>
                </thead>
                <tbody class="table__body">
                <tr class="table__body-row">
                  <td class="table__body-cell table__body-cell_one-line">creation_date
                  </td>
                  <td class="table__body-cell table__body-cell_one-line">Дата формирования
                  </td>
                  <td class="table__body-cell table__body-cell_one-line">Дата
                  </td>
                  <td class="table__body-cell table__body-cell_actions">
                  </td>
                </tr>
                <tr class="table__body-row">
                  <td class="table__body-cell table__body-cell_one-line">plan_close_date
                  </td>
                  <td class="table__body-cell table__body-cell_one-line">Предполагаемая дата закрытия
                  </td>
                  <td class="table__body-cell table__body-cell_one-line">Дата
                  </td>
                  <td class="table__body-cell table__body-cell_actions">
                  </td>
                </tr>
                <tr class="table__body-row">
                  <td class="table__body-cell table__body-cell_one-line">contract_id
                  </td>
                  <td class="table__body-cell table__body-cell_one-line">Контракт
                  </td>
                  <td class="table__body-cell table__body-cell_one-line">Контракты
                  </td>
                  <td class="table__body-cell table__body-cell_actions">
                  </td>
                </tr>
                <tr class="table__body-row">
                  <td class="table__body-cell table__body-cell_one-line">custom_field
                  </td>
                  <td class="table__body-cell table__body-cell_one-line">Кастомное поле
                  </td>
                  <td class="table__body-cell table__body-cell_one-line">Число
                  </td>
                  <td class="table__body-cell table__body-cell_actions"><a class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
                    <svg class="icon icon_type_refresh">
                      <use xlink:href="@/assets/i/sprite/sprite.svg#refresh"></use>
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
          <div class="tabs__content">
            <p>здесь должна быть таблица настройки полей контрагента</p>
          </div>
          <div class="tabs__content">
            <p>здесь должна быть таблица настройки полей контракта</p>
          </div>
          <div class="tabs__content">
            <p>здесь должна быть таблица настройки полей пользователя</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>