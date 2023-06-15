<template>
  <div class="app">
    <div class="app__wrapper app__wrapper_page-type_inner">
      <LeftBar />
      <div class="app__main">
        <div class="main-content">
          <div class="main-content__head">
            <div class="main-content__head-row">
              <div class="main-content__title">Мой профиль
              </div>
            </div>
          </div>
          <div class="main-content__body">
            <div class="tabs">
              <div class="tabs__head">
                <div class="tabs__tab tabs__tab_active">Мои клиенты
                </div>
                <div class="tabs__tab">Мои сделки
                </div>
              </div>
              <div class="tabs__body">
                <div class="tabs__content tabs__content_active">
                  <div class="table-view">
                    <table class="table">
                      <thead class="table__head">
                      <tr class="table__head-row">
                        <th class="table__head-cell">Контрагент
                        </th>
                        <th class="table__head-cell">E-mail
                        </th>
                        <th class="table__head-cell">Должность
                        </th>
                        <th class="table__head-cell">Тип контрагента
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
                        <td class="table__body-cell">ООО "Иванов и партнеры"
                        </td>
                        <td class="table__body-cell"><a href="#">noemail@please.com</a>
                        </td>
                        <td class="table__body-cell">Гендиректор
                        </td>
                        <td class="table__body-cell">Заказчик
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
                        <td class="table__body-cell">ООО "Иванов и партнеры"
                        </td>
                        <td class="table__body-cell"><a href="#">noemail@please.com</a>
                        </td>
                        <td class="table__body-cell">Гендиректор
                        </td>
                        <td class="table__body-cell">Заказчик
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
                        <td class="table__body-cell">ООО "Иванов и партнеры"
                        </td>
                        <td class="table__body-cell"><a href="#">noemail@please.com</a>
                        </td>
                        <td class="table__body-cell">Гендиректор
                        </td>
                        <td class="table__body-cell">Заказчик
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
                        <td class="table__body-cell">ООО "Иванов и партнеры"
                        </td>
                        <td class="table__body-cell"><a href="#">noemail@please.com</a>
                        </td>
                        <td class="table__body-cell">Гендиректор
                        </td>
                        <td class="table__body-cell">Заказчик
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
                        <td class="table__body-cell">ООО "Иванов и партнеры"
                        </td>
                        <td class="table__body-cell"><a href="#">noemail@please.com</a>
                        </td>
                        <td class="table__body-cell">Гендиректор
                        </td>
                        <td class="table__body-cell">Заказчик
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
                        <td class="table__body-cell">ООО "Иванов и партнеры"
                        </td>
                        <td class="table__body-cell"><a href="#">noemail@please.com</a>
                        </td>
                        <td class="table__body-cell">Гендиректор
                        </td>
                        <td class="table__body-cell">Заказчик
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
                        <td class="table__body-cell">ООО "Иванов и партнеры"
                        </td>
                        <td class="table__body-cell"><a href="#">noemail@please.com</a>
                        </td>
                        <td class="table__body-cell">Гендиректор
                        </td>
                        <td class="table__body-cell">Заказчик
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
                        <td class="table__body-cell">ООО "Иванов и партнеры"
                        </td>
                        <td class="table__body-cell"><a href="#">noemail@please.com</a>
                        </td>
                        <td class="table__body-cell">Гендиректор
                        </td>
                        <td class="table__body-cell">Заказчик
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
                        <td class="table__body-cell">ООО "Иванов и партнеры"
                        </td>
                        <td class="table__body-cell"><a href="#">noemail@please.com</a>
                        </td>
                        <td class="table__body-cell">Гендиректор
                        </td>
                        <td class="table__body-cell">Заказчик
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
                        <td class="table__body-cell">ООО "Иванов и партнеры"
                        </td>
                        <td class="table__body-cell"><a href="#">noemail@please.com</a>
                        </td>
                        <td class="table__body-cell">Гендиректор
                        </td>
                        <td class="table__body-cell">Заказчик
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
                        <td class="table__body-cell">ООО "Иванов и партнеры"
                        </td>
                        <td class="table__body-cell"><a href="#">noemail@please.com</a>
                        </td>
                        <td class="table__body-cell">Гендиректор
                        </td>
                        <td class="table__body-cell">Заказчик
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
                        <td class="table__body-cell">ООО "Иванов и партнеры"
                        </td>
                        <td class="table__body-cell"><a href="#">noemail@please.com</a>
                        </td>
                        <td class="table__body-cell">Гендиректор
                        </td>
                        <td class="table__body-cell">Заказчик
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
                        <td class="table__body-cell">ООО "Иванов и партнеры"
                        </td>
                        <td class="table__body-cell"><a href="#">noemail@please.com</a>
                        </td>
                        <td class="table__body-cell">Гендиректор
                        </td>
                        <td class="table__body-cell">Заказчик
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
                        <td class="table__body-cell">ООО "Иванов и партнеры"
                        </td>
                        <td class="table__body-cell"><a href="#">noemail@please.com</a>
                        </td>
                        <td class="table__body-cell">Гендиректор
                        </td>
                        <td class="table__body-cell">Заказчик
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
                        <td class="table__body-cell">ООО "Иванов и партнеры"
                        </td>
                        <td class="table__body-cell"><a href="#">noemail@please.com</a>
                        </td>
                        <td class="table__body-cell">Гендиректор
                        </td>
                        <td class="table__body-cell">Заказчик
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
                        <td class="table__body-cell">ООО "Иванов и партнеры"
                        </td>
                        <td class="table__body-cell"><a href="#">noemail@please.com</a>
                        </td>
                        <td class="table__body-cell">Гендиректор
                        </td>
                        <td class="table__body-cell">Заказчик
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
                        <td class="table__body-cell">ООО "Иванов и партнеры"
                        </td>
                        <td class="table__body-cell"><a href="#">noemail@please.com</a>
                        </td>
                        <td class="table__body-cell">Гендиректор
                        </td>
                        <td class="table__body-cell">Заказчик
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
                        <td class="table__body-cell">ООО "Иванов и партнеры"
                        </td>
                        <td class="table__body-cell"><a href="#">noemail@please.com</a>
                        </td>
                        <td class="table__body-cell">Гендиректор
                        </td>
                        <td class="table__body-cell">Заказчик
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
                        <td class="table__body-cell">ООО "Иванов и партнеры"
                        </td>
                        <td class="table__body-cell"><a href="#">noemail@please.com</a>
                        </td>
                        <td class="table__body-cell">Гендиректор
                        </td>
                        <td class="table__body-cell">Заказчик
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
                        <td class="table__body-cell">ООО "Иванов и партнеры"
                        </td>
                        <td class="table__body-cell"><a href="#">noemail@please.com</a>
                        </td>
                        <td class="table__body-cell">Гендиректор
                        </td>
                        <td class="table__body-cell">Заказчик
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
                        <td class="table__body-cell">ООО "Иванов и партнеры"
                        </td>
                        <td class="table__body-cell"><a href="#">noemail@please.com</a>
                        </td>
                        <td class="table__body-cell">Гендиректор
                        </td>
                        <td class="table__body-cell">Заказчик
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
                        <td class="table__body-cell">ООО "Иванов и партнеры"
                        </td>
                        <td class="table__body-cell"><a href="#">noemail@please.com</a>
                        </td>
                        <td class="table__body-cell">Гендиректор
                        </td>
                        <td class="table__body-cell">Заказчик
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
                        <td class="table__body-cell">ООО "Иванов и партнеры"
                        </td>
                        <td class="table__body-cell"><a href="#">noemail@please.com</a>
                        </td>
                        <td class="table__body-cell">Гендиректор
                        </td>
                        <td class="table__body-cell">Заказчик
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
                <div class="tabs__content">
                  <p>Вкладка со сделками</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right-bar">
          <div class="entity-fields">
            <UserAvatar />
            <div class="entity-fields__group">

            </div>
            <div class="linked-fields">
              <div class="linked-fields__label-row">
                <div class="linked-fields__label">Котрагент/должность
                </div>
                <div class="linked-fields__top-controls"><a class="button button_no-text button_transparent button_size_xs button_rounded" href="#">
                  <svg class="icon icon_type_pencil">
                    <use xlink:href="@/assets/i/sprite/sprite.svg#pencil"></use>
                  </svg></a><a class="button button_no-text button_size_xs button_rounded" href="#">
                  <svg class="icon icon_type_check">
                    <use xlink:href="@/assets/i/sprite/sprite.svg#check"></use>
                  </svg></a><a class="button button_no-text button_size_xs button_rounded" href="#">
                  <svg class="icon icon_type_x">
                    <use xlink:href="@/assets/i/sprite/sprite.svg#x"></use>
                  </svg></a>
                </div>
              </div>
              <div class="linked-fields__main">
                <div class="linked-fields__main-item">
                  <div class="linked-fields__display-item">
                    <div class="linked-fields__display-item-col">
                      <svg class="icon icon_type_office-building">
                        <use xlink:href="@/assets/i/sprite/sprite.svg#office-building"></use>
                      </svg>
                    </div>
                    <div class="linked-fields__display-item-col">
                      <div class="linked-fields__display-item-title">ООО Иванов и партнеры
                      </div>
                      <div class="linked-fields__display-item-subtitle">Менеджер среднего звена
                      </div>
                    </div>
                  </div>
                  <div class="linked-fields__edit-item">
                    <div class="textbox textbox_fixable_no-buttons">
                      <label class="textbox__wrapper">
                        <div class="textbox__label">Контрагент
                        </div>
                        <input class="textbox__input" type="text" placeholder="Плейсхолдер" value="ООО Иванов и партнеры"/>
                      </label>
                    </div>
                    <div class="textbox textbox_fixable_no-buttons">
                      <label class="textbox__wrapper">
                        <div class="textbox__label">Должность
                        </div>
                        <input class="textbox__input" type="text" placeholder="Плейсхолдер" value="Менеджер среднего звена"/>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="linked-fields__main-item">
                  <div class="linked-fields__display-item">
                    <div class="linked-fields__display-item-col">
                      <svg class="icon icon_type_office-building">
                        <use xlink:href="@/assets/i/sprite/sprite.svg#office-building"></use>
                      </svg>
                    </div>
                    <div class="linked-fields__display-item-col">
                      <div class="linked-fields__display-item-title">ООО Иванов и партнеры
                      </div>
                      <div class="linked-fields__display-item-subtitle">Менеджер среднего звена
                      </div>
                    </div>
                  </div>
                  <div class="linked-fields__edit-item">
                    <div class="textbox textbox_fixable_no-buttons">
                      <label class="textbox__wrapper">
                        <div class="textbox__label">Контрагент
                        </div>
                        <input class="textbox__input" type="text" placeholder="Плейсхолдер"/>
                      </label>
                    </div>
                    <div class="textbox textbox_fixable_no-buttons">
                      <label class="textbox__wrapper">
                        <div class="textbox__label">Должность
                        </div>
                        <input class="textbox__input" type="text" placeholder="Плейсхолдер"/>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="linked-fields__main-item">
                  <div class="linked-fields__display-item">
                    <div class="linked-fields__display-item-col">
                      <svg class="icon icon_type_office-building">
                        <use xlink:href="@/assets/i/sprite/sprite.svg#office-building"></use>
                      </svg>
                    </div>
                    <div class="linked-fields__display-item-col">
                      <div class="linked-fields__display-item-title">ООО Иванов и партнеры
                      </div>
                      <div class="linked-fields__display-item-subtitle">Менеджер среднего звена
                      </div>
                    </div>
                  </div>
                  <div class="linked-fields__edit-item">
                    <div class="textbox textbox_fixable_no-buttons">
                      <label class="textbox__wrapper">
                        <div class="textbox__label">Контрагент
                        </div>
                        <input class="textbox__input" type="text" placeholder="Плейсхолдер"/>
                      </label>
                    </div>
                    <div class="textbox textbox_fixable_no-buttons">
                      <label class="textbox__wrapper">
                        <div class="textbox__label">Должность
                        </div>
                        <input class="textbox__input" type="text" placeholder="Плейсхолдер"/>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="linked-fields__main-item">
                  <div class="linked-fields__display-item">
                    <div class="linked-fields__display-item-col">
                      <svg class="icon icon_type_office-building">
                        <use xlink:href="@/assets/i/sprite/sprite.svg#office-building"></use>
                      </svg>
                    </div>
                    <div class="linked-fields__display-item-col">
                      <div class="linked-fields__display-item-title">ООО Иванов и партнеры
                      </div>
                      <div class="linked-fields__display-item-subtitle">Менеджер среднего звена
                      </div>
                    </div>
                  </div>
                  <div class="linked-fields__edit-item">
                    <div class="textbox textbox_fixable_no-buttons">
                      <label class="textbox__wrapper">
                        <div class="textbox__label">Контрагент
                        </div>
                        <input class="textbox__input" type="text" placeholder="Плейсхолдер"/>
                      </label>
                    </div>
                    <div class="textbox textbox_fixable_no-buttons">
                      <label class="textbox__wrapper">
                        <div class="textbox__label">Должность
                        </div>
                        <input class="textbox__input" type="text" placeholder="Плейсхолдер"/>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="linked-fields__bottom-controls"><a class="button button_no-text button_size_xs button_rounded" href="#">
                <svg class="icon icon_type_plus-circle">
                  <use xlink:href="@/assets/i/sprite/sprite.svg#plus-circle"></use>
                </svg></a>
              </div>
            </div>
            <div class="entity-fields__group">
              <div class="textbox textbox_fixable">
                <label class="textbox__wrapper">
                  <div class="textbox__label">E-mail (логин)
                  </div>
                  <input class="textbox__input" type="text" placeholder="Плейсхолдер" value="noemail@please.com"/>
                  <div class="textbox__controls"><a class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
                    <svg class="icon icon_type_pencil">
                      <use xlink:href="@/assets/i/sprite/sprite.svg#pencil"></use>
                    </svg></a><a class="button button_size_xs button_rounded button_no-text" href="#">
                    <svg class="icon icon_type_check">
                      <use xlink:href="@/assets/i/sprite/sprite.svg#check"></use>
                    </svg></a><a class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
                    <svg class="icon icon_type_trash">
                      <use xlink:href="@/assets/i/sprite/sprite.svg#trash"></use>
                    </svg></a>
                  </div>
                </label>
              </div>
              <div class="textbox textbox_fixable">
                <label class="textbox__wrapper">
                  <div class="textbox__label">Телефон
                  </div>
                  <input class="textbox__input" type="text" placeholder="Плейсхолдер" value="+7(123) 456-55-11"/>
                  <div class="textbox__controls"><a class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
                    <svg class="icon icon_type_pencil">
                      <use xlink:href="@/assets/i/sprite/sprite.svg#pencil"></use>
                    </svg></a><a class="button button_size_xs button_rounded button_no-text" href="#">
                    <svg class="icon icon_type_check">
                      <use xlink:href="@/assets/i/sprite/sprite.svg#check"></use>
                    </svg></a><a class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
                    <svg class="icon icon_type_trash">
                      <use xlink:href="@/assets/i/sprite/sprite.svg#trash"></use>
                    </svg></a>
                  </div>
                </label>
              </div>
              <div class="textbox textbox_fixable">
                <label class="textbox__wrapper">
                  <div class="textbox__label">Пароль
                  </div>
                  <input class="textbox__input" type="password" placeholder="Плейсхолдер" value="qwertyuiop"/>
                  <div class="textbox__controls"><a class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
                    <svg class="icon icon_type_pencil">
                      <use xlink:href="@/assets/i/sprite/sprite.svg#pencil"></use>
                    </svg></a><a class="button button_size_xs button_rounded button_no-text" href="#">
                    <svg class="icon icon_type_check">
                      <use xlink:href="@/assets/i/sprite/sprite.svg#check"></use>
                    </svg></a><a class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
                    <svg class="icon icon_type_trash">
                      <use xlink:href="@/assets/i/sprite/sprite.svg#trash"></use>
                    </svg></a>
                  </div>
                </label>
              </div>
            </div>
            <div class="entity-fields__group">
              <div class="textbox textbox_fixable">
                <label class="textbox__wrapper">
                  <div class="textbox__label">Кастомное поле
                  </div>
                  <input class="textbox__input" type="text" placeholder="Плейсхолдер" value="Кастомное значение"/>
                  <div class="textbox__controls"><a class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
                    <svg class="icon icon_type_pencil">
                      <use xlink:href="@/assets/i/sprite/sprite.svg#pencil"></use>
                    </svg></a><a class="button button_size_xs button_rounded button_no-text" href="#">
                    <svg class="icon icon_type_check">
                      <use xlink:href="@/assets/i/sprite/sprite.svg#check"></use>
                    </svg></a><a class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
                    <svg class="icon icon_type_trash">
                      <use xlink:href="@/assets/i/sprite/sprite.svg#trash"></use>
                    </svg></a>
                  </div>
                </label>
              </div>
              <div class="textbox textbox_fixable">
                <label class="textbox__wrapper">
                  <div class="textbox__label">Кастомное поле
                  </div>
                  <textarea class="textbox__input" placeholder="Плейсхолдер">Кастомное значение гораздо длиннее по своему значению. Возможно даже на несколько строк</textarea>
                  <div class="textbox__controls"><a class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
                    <svg class="icon icon_type_pencil">
                      <use xlink:href="@/assets/i/sprite/sprite.svg#pencil"></use>
                    </svg></a><a class="button button_size_xs button_rounded button_no-text" href="#">
                    <svg class="icon icon_type_check">
                      <use xlink:href="@/assets/i/sprite/sprite.svg#check"></use>
                    </svg></a><a class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
                    <svg class="icon icon_type_trash">
                      <use xlink:href="@/assets/i/sprite/sprite.svg#trash"></use>
                    </svg></a>
                  </div>
                </label>
              </div>
              <div class="textbox textbox_fixable">
                <label class="textbox__wrapper">
                  <div class="textbox__label">Кастомное поле
                  </div>
                  <textarea class="textbox__input" placeholder="Плейсхолдер">Кастомное значение гораздо длиннее по своему значению. Возможно даже на несколько строк</textarea>
                  <div class="textbox__controls"><a class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
                    <svg class="icon icon_type_pencil">
                      <use xlink:href="@/assets/i/sprite/sprite.svg#pencil"></use>
                    </svg></a><a class="button button_size_xs button_rounded button_no-text" href="#">
                    <svg class="icon icon_type_check">
                      <use xlink:href="@/assets/i/sprite/sprite.svg#check"></use>
                    </svg></a><a class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
                    <svg class="icon icon_type_trash">
                      <use xlink:href="@/assets/i/sprite/sprite.svg#trash"></use>
                    </svg></a>
                  </div>
                </label>
              </div>
              <div class="textbox textbox_fixable">
                <label class="textbox__wrapper">
                  <div class="textbox__label">Кастомное поле
                  </div>
                  <textarea class="textbox__input" placeholder="Плейсхолдер">Кастомное значение гораздо длиннее по своему значению. Возможно даже на несколько строк</textarea>
                  <div class="textbox__controls"><a class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
                    <svg class="icon icon_type_pencil">
                      <use xlink:href="@/assets/i/sprite/sprite.svg#pencil"></use>
                    </svg></a><a class="button button_size_xs button_rounded button_no-text" href="#">
                    <svg class="icon icon_type_check">
                      <use xlink:href="@/assets/i/sprite/sprite.svg#check"></use>
                    </svg></a><a class="button button_size_xs button_rounded button_no-text button_transparent" href="#">
                    <svg class="icon icon_type_trash">
                      <use xlink:href="@/assets/i/sprite/sprite.svg#trash"></use>
                    </svg></a>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script setup>

import UserAvatar from "@/29-hw-piniya-global-state/components/UserAvatar.vue";
import Footer from "@/29-hw-piniya-global-state/components/Footer.vue";
import LeftBar from "@/29-hw-piniya-global-state/components/LeftBar.vue";
import TextBox from "@/29-hw-piniya-global-state/components/TextBox.vue";

import { useUserStore } from "@/29-hw-piniya-global-state/stores/UserStore";

const userStore  = useUserStore();

import { useEventBus } from '@vueuse/core'

const bus = useEventBus('news')

function listener(event) {
  alert(`news: ${event}`)
}

bus.on(listener)

// fire an event


// unregister the listener

// or
    //bus.off(listener)

// clearing all listeners
//bus.reset()
</script>