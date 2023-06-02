<template>
  <div class="main-content">
    <div class="main-content__head">
      <div class="main-content__head-row">
        <div class="main-content__title">Группы компаний
        </div>
        <div class="page-controls"><a class="button button_size_s" href="#">
          <svg class="icon icon_type_plus-circle">
            <use xlink:href="@/assets/i/sprite/sprite.svg#plus-circle"></use>
          </svg><span>Новая группа</span></a>
        </div>
      </div>
    </div>
    <div class="main-content__body">
      <div class="search">
        <div class="textbox">
          <label class="textbox__wrapper">
            <input class="textbox__input" type="text" placeholder="Телефон, название..."/>
          </label>
        </div><a class="button" href="#">
        <svg class="icon icon_type_search">
          <use xlink:href="@/assets/i/sprite/sprite.svg#search"></use>
        </svg><span>Искать</span></a>
      </div>
      <div class="table-view">
        <table class="table">
          <thead class="table__head">
          <tr class="table__head-row">
            <th class="table__head-cell">Название группы
            </th>
            <th class="table__head-cell">Компании
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
          <tr class="table__body-row">
            <td class="table__body-cell">
              <svg class="table__cell-item icon_size_s icon icon_type_user-group">
                <use xlink:href="@/assets/i/sprite/sprite.svg#user-group"></use>
              </svg><a href="company-group.html"><strong class="table__cell-item">Холдинг "Рога и копыта"</strong></a>
            </td>
            <td class="table__body-cell"><a class="table__cell-item" href="#">ООО "Иванов и партнеры"</a><a class="table__cell-item" href="#">ООО "Компания 2"</a><a class="table__cell-item" href="#">ЗАО "Строительный трест"</a>
            </td>
            <td class="table__body-cell table__body-cell_actions"><a class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
              <svg class="icon icon_type_pencil">
                <use xlink:href="@/assets/i/sprite/sprite.svg#pencil"></use>
              </svg></a><a class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
              <svg class="icon icon_type_trash">
                <use xlink:href="@/assets/i/sprite/sprite.svg#trash"></use>
              </svg></a><a class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
              <svg class="icon icon_type_check-circle">
                <use xlink:href="@/assets/i/sprite/sprite.svg#check-circle"></use>
              </svg></a>
            </td>
          </tr>
          <tr class="table__body-row">
            <td class="table__body-cell">
              <svg class="table__cell-item icon_size_s icon icon_type_user-group">
                <use xlink:href="@/assets/i/sprite/sprite.svg#user-group"></use>
              </svg><strong class="table__cell-item">Холдинг "Рога и копыта"</strong>
            </td>
            <td class="table__body-cell"><a class="table__cell-item" href="#">ООО "Иванов и партнеры"</a><a class="table__cell-item" href="#">ООО "Компания 2"</a><a class="table__cell-item" href="#">ЗАО "Строительный трест"</a>
            </td>
            <td class="table__body-cell table__body-cell_actions"><a class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
              <svg class="icon icon_type_pencil">
                <use xlink:href="@/assets/i/sprite/sprite.svg#pencil"></use>
              </svg></a><a class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
              <svg class="icon icon_type_trash">
                <use xlink:href="@/assets/i/sprite/sprite.svg#trash"></use>
              </svg></a><a class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
              <svg class="icon icon_type_check-circle">
                <use xlink:href="@/assets/i/sprite/sprite.svg#check-circle"></use>
              </svg></a>
            </td>
          </tr>
          <tr class="table__body-row">
            <td class="table__body-cell">
              <svg class="table__cell-item icon_size_s icon icon_type_user-group">
                <use xlink:href="@/assets/i/sprite/sprite.svg#user-group"></use>
              </svg><strong class="table__cell-item">Холдинг "Рога и копыта"</strong>
            </td>
            <td class="table__body-cell"><a class="table__cell-item" href="#">ООО "Иванов и партнеры"</a><a class="table__cell-item" href="#">ООО "Компания 2"</a><a class="table__cell-item" href="#">ЗАО "Строительный трест"</a>
            </td>
            <td class="table__body-cell table__body-cell_actions"><a class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
              <svg class="icon icon_type_pencil">
                <use xlink:href="@/assets/i/sprite/sprite.svg#pencil"></use>
              </svg></a><a class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
              <svg class="icon icon_type_trash">
                <use xlink:href="@/assets/i/sprite/sprite.svg#trash"></use>
              </svg></a><a class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
              <svg class="icon icon_type_check-circle">
                <use xlink:href="@/assets/i/sprite/sprite.svg#check-circle"></use>
              </svg></a>
            </td>
          </tr>
          <tr class="table__body-row">
            <td class="table__body-cell">
              <svg class="table__cell-item icon_size_s icon icon_type_user-group">
                <use xlink:href="@/assets/i/sprite/sprite.svg#user-group"></use>
              </svg><strong class="table__cell-item">Холдинг "Рога и копыта"</strong>
            </td>
            <td class="table__body-cell"><a class="table__cell-item" href="#">ООО "Иванов и партнеры"</a><a class="table__cell-item" href="#">ООО "Компания 2"</a><a class="table__cell-item" href="#">ЗАО "Строительный трест"</a>
            </td>
            <td class="table__body-cell table__body-cell_actions"><a class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
              <svg class="icon icon_type_pencil">
                <use xlink:href="@/assets/i/sprite/sprite.svg#pencil"></use>
              </svg></a><a class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
              <svg class="icon icon_type_trash">
                <use xlink:href="@/assets/i/sprite/sprite.svg#trash"></use>
              </svg></a><a class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
              <svg class="icon icon_type_check-circle">
                <use xlink:href="@/assets/i/sprite/sprite.svg#check-circle"></use>
              </svg></a>
            </td>
          </tr>
          <tr class="table__body-row">
            <td class="table__body-cell">
              <svg class="table__cell-item icon_size_s icon icon_type_user-group">
                <use xlink:href="@/assets/i/sprite/sprite.svg#user-group"></use>
              </svg><strong class="table__cell-item">Холдинг "Рога и копыта"</strong>
            </td>
            <td class="table__body-cell"><a class="table__cell-item" href="#">ООО "Иванов и партнеры"</a><a class="table__cell-item" href="#">ООО "Компания 2"</a><a class="table__cell-item" href="#">ЗАО "Строительный трест"</a>
            </td>
            <td class="table__body-cell table__body-cell_actions"><a class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
              <svg class="icon icon_type_pencil">
                <use xlink:href="@/assets/i/sprite/sprite.svg#pencil"></use>
              </svg></a><a class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
              <svg class="icon icon_type_trash">
                <use xlink:href="@/assets/i/sprite/sprite.svg#trash"></use>
              </svg></a><a class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
              <svg class="icon icon_type_check-circle">
                <use xlink:href="@/assets/i/sprite/sprite.svg#check-circle"></use>
              </svg></a>
            </td>
          </tr>
          <tr class="table__body-row">
            <td class="table__body-cell">
              <svg class="table__cell-item icon_size_s icon icon_type_user-group">
                <use xlink:href="@/assets/i/sprite/sprite.svg#user-group"></use>
              </svg><strong class="table__cell-item">Холдинг "Рога и копыта"</strong>
            </td>
            <td class="table__body-cell"><a class="table__cell-item" href="#">ООО "Иванов и партнеры"</a><a class="table__cell-item" href="#">ООО "Компания 2"</a><a class="table__cell-item" href="#">ЗАО "Строительный трест"</a>
            </td>
            <td class="table__body-cell table__body-cell_actions"><a class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
              <svg class="icon icon_type_pencil">
                <use xlink:href="@/assets/i/sprite/sprite.svg#pencil"></use>
              </svg></a><a class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
              <svg class="icon icon_type_trash">
                <use xlink:href="@/assets/i/sprite/sprite.svg#trash"></use>
              </svg></a><a class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
              <svg class="icon icon_type_check-circle">
                <use xlink:href="@/assets/i/sprite/sprite.svg#check-circle"></use>
              </svg></a>
            </td>
          </tr>
          <tr class="table__body-row">
            <td class="table__body-cell">
              <svg class="table__cell-item icon_size_s icon icon_type_user-group">
                <use xlink:href="@/assets/i/sprite/sprite.svg#user-group"></use>
              </svg><strong class="table__cell-item">Холдинг "Рога и копыта"</strong>
            </td>
            <td class="table__body-cell"><a class="table__cell-item" href="#">ООО "Иванов и партнеры"</a><a class="table__cell-item" href="#">ООО "Компания 2"</a><a class="table__cell-item" href="#">ЗАО "Строительный трест"</a>
            </td>
            <td class="table__body-cell table__body-cell_actions"><a class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
              <svg class="icon icon_type_pencil">
                <use xlink:href="@/assets/i/sprite/sprite.svg#pencil"></use>
              </svg></a><a class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
              <svg class="icon icon_type_trash">
                <use xlink:href="@/assets/i/sprite/sprite.svg#trash"></use>
              </svg></a><a class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
              <svg class="icon icon_type_check-circle">
                <use xlink:href="@/assets/i/sprite/sprite.svg#check-circle"></use>
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