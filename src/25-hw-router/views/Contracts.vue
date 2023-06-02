<template>
  <div class="main-content">
    <div class="main-content__head">
      <div class="main-content__head-row">
        <div class="main-content__title">Контракты
        </div>
        <div class="page-controls"><a class="button button_size_s" href="#">
          <svg class="icon icon_type_plus-circle">
            <use xlink:href="@/assets/i/sprite/sprite.svg#plus-circle"></use>
          </svg><span>Новый контракт</span></a>
        </div>
      </div>
    </div>
    <div class="main-content__body">
      <div class="named-filter-group">
        <div class="named-filter named-filter_color_error named-filter_active">
          <div class="counter">15
          </div>
          <div class="named-filter__title">
            <svg class="icon_size_s icon icon_type_filter">
              <use xlink:href="@/assets/i/sprite/sprite.svg#filter"></use>
            </svg><span>Сроки нарушены!</span>
          </div>
          <div class="named-filter__description">Контракты, в которых есть сделки с нарушенными сроками поставки. Обработайте их или перенесите сроки сделки
          </div>
        </div>
        <div class="named-filter named-filter_color_error">
          <div class="counter">15
          </div>
          <div class="named-filter__title">
            <svg class="icon_size_s icon icon_type_filter">
              <use xlink:href="@/assets/i/sprite/sprite.svg#filter"></use>
            </svg><span>Ожидают подписания</span>
          </div>
          <div class="named-filter__description">Обработайте этих клиентов или отложите подписание контракта
          </div>
        </div>
        <div class="named-filter named-filter_color_error">
          <div class="counter">15
          </div>
          <div class="named-filter__title">
            <svg class="icon_size_s icon icon_type_filter">
              <use xlink:href="@/assets/i/sprite/sprite.svg#filter"></use>
            </svg><span>Завершение сделки в течение недели</span>
          </div>
          <div class="named-filter__description">Контракты, у которых близится срок завершения сделки. Обработайте их или перенесите даты завершения сделки.
          </div>
        </div>
      </div>
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
            <th class="table__head-cell">№
            </th>
            <th class="table__head-cell">Заказчик
            </th>
            <th class="table__head-cell">Исполнитель
            </th>
            <th class="table__head-cell">Подписан
            </th>
            <th class="table__head-cell">Сделки
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
          <tr class="table__body-row table__body-row_color_secondary">
            <td class="table__body-cell">20220612-O-2
            </td>
            <td class="table__body-cell"><a href="#">ИП Иванов Иван</a>
            </td>
            <td class="table__body-cell"><a href="#">ИП Иванов Иван</a>
            </td>
            <td class="table__body-cell">Нет
            </td>
            <td class="table__body-cell">25
            </td>
            <td class="table__body-cell table__body-cell_actions"><a class="button button_size_xs button_rounded button_no-text" href="#">
              <svg class="icon icon_type_pencil">
                <use xlink:href="@/assets/i/sprite/sprite.svg#pencil"></use>
              </svg></a><a class="button button_size_xs button_rounded button_no-text" href="#">
              <svg class="icon icon_type_trash">
                <use xlink:href="@/assets/i/sprite/sprite.svg#trash"></use>
              </svg></a>
            </td>
          </tr>
          <tr class="table__body-row table__body-row_color_secondary">
            <td class="table__body-cell">20220612-O-2
            </td>
            <td class="table__body-cell"><a href="#">ИП Иванов Иван</a>
            </td>
            <td class="table__body-cell"><a href="#">ИП Иванов Иван</a>
            </td>
            <td class="table__body-cell">Нет
            </td>
            <td class="table__body-cell">25
            </td>
            <td class="table__body-cell table__body-cell_actions"><a class="button button_size_xs button_rounded button_no-text" href="#">
              <svg class="icon icon_type_pencil">
                <use xlink:href="@/assets/i/sprite/sprite.svg#pencil"></use>
              </svg></a><a class="button button_size_xs button_rounded button_no-text" href="#">
              <svg class="icon icon_type_trash">
                <use xlink:href="@/assets/i/sprite/sprite.svg#trash"></use>
              </svg></a>
            </td>
          </tr>
          <tr class="table__body-row">
            <td class="table__body-cell">20220612-O-2
            </td>
            <td class="table__body-cell"><a href="#">ИП Иванов Иван</a>
            </td>
            <td class="table__body-cell"><a href="#">ИП Иванов Иван</a>
            </td>
            <td class="table__body-cell">Нет
            </td>
            <td class="table__body-cell">25
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
            <td class="table__body-cell">20220612-O-2
            </td>
            <td class="table__body-cell"><a href="#">ИП Иванов Иван</a>
            </td>
            <td class="table__body-cell"><a href="#">ИП Иванов Иван</a>
            </td>
            <td class="table__body-cell">Нет
            </td>
            <td class="table__body-cell">25
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
            <td class="table__body-cell">20220612-O-2
            </td>
            <td class="table__body-cell"><a href="#">ИП Иванов Иван</a>
            </td>
            <td class="table__body-cell"><a href="#">ИП Иванов Иван</a>
            </td>
            <td class="table__body-cell">Нет
            </td>
            <td class="table__body-cell">25
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
            <td class="table__body-cell">20220612-O-2
            </td>
            <td class="table__body-cell"><a href="#">ИП Иванов Иван</a>
            </td>
            <td class="table__body-cell"><a href="#">ИП Иванов Иван</a>
            </td>
            <td class="table__body-cell">Нет
            </td>
            <td class="table__body-cell">25
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
            <td class="table__body-cell">20220612-O-2
            </td>
            <td class="table__body-cell"><a href="#">ИП Иванов Иван</a>
            </td>
            <td class="table__body-cell"><a href="#">ИП Иванов Иван</a>
            </td>
            <td class="table__body-cell">Нет
            </td>
            <td class="table__body-cell">25
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
            <td class="table__body-cell">20220612-O-2
            </td>
            <td class="table__body-cell"><a href="#">ИП Иванов Иван</a>
            </td>
            <td class="table__body-cell"><a href="#">ИП Иванов Иван</a>
            </td>
            <td class="table__body-cell">Нет
            </td>
            <td class="table__body-cell">25
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