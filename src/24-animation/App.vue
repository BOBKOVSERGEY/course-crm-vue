<template>
  <div class="app">
    <div class="app__wrapper app__wrapper_page-type_inner">
      <aside class="left-bar">
        <div class="left-bar__expander"><a class="button button_no-text button_size_xs button_rounded button_color_secondary" href="#">
          <svg class="icon icon_type_chevron-left">
            <use xlink:href="@/assets/i/sprite/sprite.svg#chevron-left"></use>
          </svg></a>
        </div>
        <div class="left-bar__inner">
          <div class="left-bar__logo-wrapper"><a class="logo"><img src="@/assets/i/logo/logo-light.svg" alt="OpenCrm"></a>
          </div>
          <div class="main-menu">
            <div class="main-menu__profile-item"><a class="main-menu__link" href="profile.html">
              <div class="user-avatar user-avatar_size_s">
                <div class="user-avatar__wrapper"><img class="user-avatar__image" src="@/assets/i/avatar-example.jpg" alt="avatar">
                </div>
              </div>
              <div class="main-menu__link-title">Иван Иванов
              </div></a><a class="main-menu__link" href="#logout">
              <svg class="icon_size_s icon icon_type_logout">
                <use xlink:href="@/assets/i/sprite/sprite.svg#logout"></use>
              </svg></a>
            </div>
            <div class="main-menu__item"><a class="main-menu__link" href="users.html">
              <svg class="icon icon_type_user-group">
                <use xlink:href="@/assets/i/sprite/sprite.svg#user-group"></use>
              </svg>
              <div class="main-menu__link-title">Пользователи
              </div>
              <div class="main-menu__control">
                <svg class="icon icon_type_chevron-right">
                  <use xlink:href="@/assets/i/sprite/sprite.svg#chevron-right"></use>
                </svg>
              </div></a>
            </div>
            <div class="main-menu__item  main-menu__item_active"><a class="main-menu__link" href="company-groups.html">
              <svg class="icon icon_type_office-building">
                <use xlink:href="@/assets/i/sprite/sprite.svg#office-building"></use>
              </svg>
              <div class="main-menu__link-title">Группы компаний
              </div>
              <div class="main-menu__control">
                <svg class="icon icon_type_chevron-right">
                  <use xlink:href="@/assets/i/sprite/sprite.svg#chevron-right"></use>
                </svg>
              </div></a>
            </div>
            <div class="main-menu__item"><a class="main-menu__link" href="contractors.html">
              <svg class="icon icon_type_share">
                <use xlink:href="@/assets/i/sprite/sprite.svg#share"></use>
              </svg>
              <div class="main-menu__link-title">Контрагенты
              </div>
              <div class="main-menu__control">
                <svg class="icon icon_type_chevron-right">
                  <use xlink:href="@/assets/i/sprite/sprite.svg#chevron-right"></use>
                </svg>
              </div></a>
            </div>
            <div class="main-menu__item"><a class="main-menu__link" href="contracts.html">
              <svg class="icon icon_type_document-text">
                <use xlink:href="@/assets/i/sprite/sprite.svg#document-text"></use>
              </svg>
              <div class="main-menu__link-title">Контракты
              </div>
              <div class="main-menu__control">
                <svg class="icon icon_type_chevron-right">
                  <use xlink:href="@/assets/i/sprite/sprite.svg#chevron-right"></use>
                </svg>
              </div></a>
            </div>
            <div class="main-menu__item"><a class="main-menu__link" href="deals.html">
              <svg class="icon icon_type_receipt-tax">
                <use xlink:href="@/assets/i/sprite/sprite.svg#receipt-tax"></use>
              </svg>
              <div class="main-menu__link-title">Сделки
              </div>
              <div class="main-menu__control">
                <svg class="icon icon_type_chevron-right">
                  <use xlink:href="@/assets/i/sprite/sprite.svg#chevron-right"></use>
                </svg>
              </div></a>
            </div>
            <div class="main-menu__item  main-menu__item_has-sub-items main-menu__item_expanded"><a class="main-menu__link" href="settings.html">
              <svg class="icon icon_type_cog">
                <use xlink:href="@/assets/i/sprite/sprite.svg#cog"></use>
              </svg>
              <div class="main-menu__link-title">Настройки
              </div>
              <div class="main-menu__control">
                <svg class="icon icon_type_plus">
                  <use xlink:href="@/assets/i/sprite/sprite.svg#plus"></use>
                </svg>
                <svg class="icon icon_type_minus">
                  <use xlink:href="@/assets/i/sprite/sprite.svg#minus"></use>
                </svg>
              </div></a>
              <div class="main-menu__sub-items">
                <div class="main-menu__item"><a class="main-menu__link" href="settings-roles.html">
                  <svg class="icon icon_type_shield-exclamation">
                    <use xlink:href="@/assets/i/sprite/sprite.svg#shield-exclamation"></use>
                  </svg>
                  <div class="main-menu__link-title">Роли и права
                  </div>
                  <div class="main-menu__control">
                    <svg class="icon icon_type_chevron-right">
                      <use xlink:href="@/assets/i/sprite/sprite.svg#chevron-right"></use>
                    </svg>
                  </div></a>
                </div>
                <div class="main-menu__item  main-menu__item_active"><a class="main-menu__link" href="settings-deal-statuses.html">
                  <svg class="icon icon_type_view-boards">
                    <use xlink:href="@/assets/i/sprite/sprite.svg#view-boards"></use>
                  </svg>
                  <div class="main-menu__link-title">Статусы сделок
                  </div>
                  <div class="main-menu__control">
                    <svg class="icon icon_type_chevron-right">
                      <use xlink:href="@/assets/i/sprite/sprite.svg#chevron-right"></use>
                    </svg>
                  </div></a>
                </div>
                <div class="main-menu__item"><a class="main-menu__link" href="settings-custom-fields.html">
                  <svg class="icon icon_type_table">
                    <use xlink:href="@/assets/i/sprite/sprite.svg#table"></use>
                  </svg>
                  <div class="main-menu__link-title">Настройка доп. полей
                  </div>
                  <div class="main-menu__control">
                    <svg class="icon icon_type_chevron-right">
                      <use xlink:href="@/assets/i/sprite/sprite.svg#chevron-right"></use>
                    </svg>
                  </div></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <div class="app__main">
        <div class="main-content">
          <div class="main-content__head">
            <div class="main-content__head-row">
              <div class="main-content__title">Контактные лица и сотрудники
              </div>
              <div class="page-controls">
                <a
                    @click="toggleModal"
                    class="button button_size_s" href="#">
                  <svg class="icon icon_type_plus-circle">
                    <use xlink:href="@/assets/i/sprite/sprite.svg#plus-circle"></use>
                  </svg><span>Новый пользователь</span>
                </a>
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
                  </svg><span>Лиды</span>
                </div>
                <div class="named-filter__description">
                  Необработанные пользователи, которые проявили интерес.
                  Создайте контрагентов на их основе или удалите этих пользователей
                </div>
              </div>
              <div class="named-filter named-filter_color_error">
                <div class="counter">15
                </div>
                <div class="named-filter__title">
                  <svg class="icon_size_s icon icon_type_filter">
                    <use xlink:href="@/assets/i/sprite/sprite.svg#filter"></use>
                  </svg><span>Контактные лица клиентов</span>
                </div>
                <div class="named-filter__description">Сотрудники контрагентов, зарегистрированные в системе
                </div>
              </div>
              <div class="named-filter named-filter_color_error">
                <div class="counter">15
                </div>
                <div class="named-filter__title">
                  <svg class="icon_size_s icon icon_type_filter">
                    <use xlink:href="@/assets/i/sprite/sprite.svg#filter"></use>
                  </svg><span>Сотрудники</span>
                </div>
                <div class="named-filter__description">Пользователи внутри вашей компании
                </div>
              </div>
            </div>
            <div class="search">
              <div class="textbox">
                <label class="textbox__wrapper">
                  <input class="textbox__input" type="text" placeholder="Телефон, название...">
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
                  <th class="table__head-cell table__head-cell_width_min">
                  </th>
                  <th class="table__head-cell">ФИО
                  </th>
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
                  <td class="table__body-cell">
                    <div class="user-avatar user-avatar_size_s">
                      <div class="user-avatar__wrapper"><img class="user-avatar__image" src="@/assets/i/avatar-example.jpg" alt="avatar">
                      </div>
                    </div>
                  </td>
                  <td class="table__body-cell"><a href="user.html">Иванов Иван</a>
                  </td>
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
                  <td class="table__body-cell">
                    <div class="user-avatar user-avatar_size_s">
                      <div class="user-avatar__wrapper"><img class="user-avatar__image" src="@/assets/i/avatar-example.jpg" alt="avatar">
                      </div>
                    </div>
                  </td>
                  <td class="table__body-cell">Иванов Иван
                  </td>
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
                  <td class="table__body-cell">
                    <div class="user-avatar user-avatar_size_s">
                      <div class="user-avatar__wrapper"><img class="user-avatar__image" src="@/assets/i/avatar-example.jpg" alt="avatar">
                      </div>
                    </div>
                  </td>
                  <td class="table__body-cell">Иванов Иван
                  </td>
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
                  <td class="table__body-cell">
                    <div class="user-avatar user-avatar_size_s">
                      <div class="user-avatar__wrapper"><img class="user-avatar__image" src="@/assets/i/avatar-example.jpg" alt="avatar">
                      </div>
                    </div>
                  </td>
                  <td class="table__body-cell">Иванов Иван
                  </td>
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
                  <td class="table__body-cell">
                    <div class="user-avatar user-avatar_size_s">
                      <div class="user-avatar__wrapper"><img class="user-avatar__image" src="@/assets/i/avatar-example.jpg" alt="avatar">
                      </div>
                    </div>
                  </td>
                  <td class="table__body-cell">Иванов Иван
                  </td>
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
                  <td class="table__body-cell">
                    <div class="user-avatar user-avatar_size_s">
                      <div class="user-avatar__wrapper"><img class="user-avatar__image" src="@/assets/i/avatar-example.jpg" alt="avatar">
                      </div>
                    </div>
                  </td>
                  <td class="table__body-cell">Иванов Иван
                  </td>
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
                  <td class="table__body-cell">
                    <div class="user-avatar user-avatar_size_s">
                      <div class="user-avatar__wrapper"><img class="user-avatar__image" src="@/assets/i/avatar-example.jpg" alt="avatar">
                      </div>
                    </div>
                  </td>
                  <td class="table__body-cell">Иванов Иван
                  </td>
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
                  <td class="table__body-cell">
                    <div class="user-avatar user-avatar_size_s">
                      <div class="user-avatar__wrapper"><img class="user-avatar__image" src="@/assets/i/avatar-example.jpg" alt="avatar">
                      </div>
                    </div>
                  </td>
                  <td class="table__body-cell">Иванов Иван
                  </td>
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
                  <td class="table__body-cell">
                    <div class="user-avatar user-avatar_size_s">
                      <div class="user-avatar__wrapper"><img class="user-avatar__image" src="@/assets/i/avatar-example.jpg" alt="avatar">
                      </div>
                    </div>
                  </td>
                  <td class="table__body-cell">Иванов Иван
                  </td>
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
                        <input class="textbox__input" type="text" placeholder="Плейсхолдер" value="1">
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
        <ProjectTransition>
          <OffCanvas
              @close="toggleModal"
              v-if="modalActive"
          >

          </OffCanvas>
        </ProjectTransition>
      </div>
    </div>
    <footer class="footer">
      <div class="footer__copyright">©2019-2022 Company Name
      </div>
      <div class="footer__items-group">
        <div class="footer__item"><a class="footer__link" href="#">Ссылка</a>
        </div>
        <div class="footer__item"><a class="footer__link" href="#">Техподдержка</a>
        </div>
      </div>
      <div class="footer__item">
        Построено на
        <a class="footer__link" href="#">OpenCRM</a>
      </div>
    </footer>
  </div>
</template>

<script setup>
import {ref} from "vue";
import OffCanvas from "@/24-animation/components/OffCanvas.vue";
const modalActive = ref(false);
import ProjectTransition from "@/24-animation/components/ProjectTransition.vue";
const toggleModal = () => {
  modalActive.value = !modalActive.value
}
</script>