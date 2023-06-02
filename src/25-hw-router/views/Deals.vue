<template>
  <div class="main-content">
    <div class="main-content__head">
      <div class="main-content__head-row">
        <div class="main-content__title">Сделки
        </div>
        <div class="page-controls"><a class="button button_size_s" href="#">
          <svg class="icon icon_type_plus-circle">
            <use xlink:href="@/assets/i/sprite/sprite.svg#plus-circle"></use>
          </svg><span>Новая сделка</span></a>
        </div>
      </div>
    </div>
    <div class="main-content__body">
      <div class="named-filter-group">
        <div class="named-filter named-filter_active">
          <div class="counter counter_color_success">
            <svg class="icon icon_type_check">
              <use xlink:href="@/assets/i/sprite/sprite.svg#check"></use>
            </svg>
          </div>
          <div class="named-filter__title">
            <svg class="icon_size_s icon icon_type_filter">
              <use xlink:href="@/assets/i/sprite/sprite.svg#filter"></use>
            </svg><span>Мои сделки</span>
          </div>
          <div class="named-filter__description">Контракты, в которых есть сделки с нарушенными сроками поставки. Обработайте их или перенесите сроки сделки
          </div>
        </div>
        <div class="named-filter">
          <div class="counter counter_color_success">15
          </div>
          <div class="named-filter__title">
            <svg class="icon_size_s icon icon_type_filter">
              <use xlink:href="@/assets/i/sprite/sprite.svg#filter"></use>
            </svg><span>Сроки нарушены!</span>
          </div>
          <div class="named-filter__description">Обработайте этих клиентов или отложите подписание контракта
          </div>
        </div>
        <div class="named-filter named-filter_color_warning">
          <div class="counter counter_color_warning">15
          </div>
          <div class="named-filter__title">
            <svg class="icon_size_s icon icon_type_filter">
              <use xlink:href="@/assets/i/sprite/sprite.svg#filter"></use>
            </svg><span>Срок сделки в течение недели</span>
          </div>
          <div class="named-filter__description">Контракты, у которых близится срок завершения сделки. Обработайте их или перенесите даты завершения сделки.
          </div>
        </div>
        <div class="named-filter">
          <div class="counter counter_color_success">15
          </div>
          <div class="named-filter__title">
            <svg class="icon_size_s icon icon_type_filter">
              <use xlink:href="@/assets/i/sprite/sprite.svg#filter"></use>
            </svg><span>Архивные сделки</span>
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
            </svg><span>Почти завершенные сделки</span>
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
            <th class="table__head-cell">Контракт
            </th>
            <th class="table__head-cell">Заказчик
            </th>
            <th class="table__head-cell">Ответственный
            </th>
            <th class="table__head-cell">Срок поставки
            </th>
            <th class="table__head-cell">Сумма
            </th>
            <th class="table__head-cell">Статус
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
          <tr class="table__body-row table__body-row_color_warning">
            <td class="table__body-cell"><a href="#">20220612-O-2</a>
            </td>
            <td class="table__body-cell"><a href="#">ИП Иванов Иван Иванович</a>
            </td>
            <td class="table__body-cell"><a href="#">Иванов И. И. (ip.ivanov@mail.ru)</a>
            </td>
            <td class="table__body-cell">
              <svg class="icon_size_s table__cell-item icon icon_type_fire">
                <use xlink:href="@/assets/i/sprite/sprite.svg#fire"></use>
              </svg><span>25 сен</span>
            </td>
            <td class="table__body-cell">25 000 ₽
            </td>
            <td class="table__body-cell">
              <div class="dropdown-select dropdown-select_size_s">
                <div class="dropdown-select__wrapper">
                  <div class="dropdown-select__input-wrapper">
                    <input class="dropdown-select__input" type="text" placeholder="Плейсхолдер"/>
                    <div class="dropdown-select__arrow">
                      <svg class="icon icon_type_chevron-down">
                        <use xlink:href="@/assets/i/sprite/sprite.svg#chevron-down"></use>
                      </svg>
                    </div>
                  </div>
                  <div class="dropdown-select__list-wrapper">
                    <div class="dropdown-select__list">
                      <div class="dropdown-select__list-item">Пункт 1
                      </div>
                      <div class="dropdown-select__list-item">Пункт 2
                      </div>
                      <div class="dropdown-select__list-item">Очень-очень-очень длинный пункт с огромным и большим названием
                      </div>
                      <div class="dropdown-select__list-item dropdown-select__list-item_active">Пункт 3
                      </div>
                      <div class="dropdown-select__list-item">Пункт 4
                      </div>
                      <div class="dropdown-select__list-item">Пункт 5
                      </div>
                      <div class="dropdown-select__list-item">Пункт 6
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
          <tr class="table__body-row table__body-row_color_warning">
            <td class="table__body-cell"><a href="#">20220612-O-2</a>
            </td>
            <td class="table__body-cell"><a href="#">ИП Иванов Иван Иванович</a>
            </td>
            <td class="table__body-cell"><a href="#">Иванов И. И. (ip.ivanov@mail.ru)</a>
            </td>
            <td class="table__body-cell">
              <svg class="icon_size_s table__cell-item icon icon_type_fire">
                <use xlink:href="@/assets/i/sprite/sprite.svg#fire"></use>
              </svg><span>25 сен</span>
            </td>
            <td class="table__body-cell">$ 14 000
            </td>
            <td class="table__body-cell">
              <div class="dropdown-select dropdown-select_size_s">
                <div class="dropdown-select__wrapper">
                  <div class="dropdown-select__input-wrapper">
                    <input class="dropdown-select__input" type="text" placeholder="Плейсхолдер"/>
                    <div class="dropdown-select__arrow">
                      <svg class="icon icon_type_chevron-down">
                        <use xlink:href="@/assets/i/sprite/sprite.svg#chevron-down"></use>
                      </svg>
                    </div>
                  </div>
                  <div class="dropdown-select__list-wrapper">
                    <div class="dropdown-select__list">
                      <div class="dropdown-select__list-item">Пункт 1
                      </div>
                      <div class="dropdown-select__list-item">Пункт 2
                      </div>
                      <div class="dropdown-select__list-item">Очень-очень-очень длинный пункт с огромным и большим названием
                      </div>
                      <div class="dropdown-select__list-item dropdown-select__list-item_active">Пункт 3
                      </div>
                      <div class="dropdown-select__list-item">Пункт 4
                      </div>
                      <div class="dropdown-select__list-item">Пункт 5
                      </div>
                      <div class="dropdown-select__list-item">Пункт 6
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
            <td class="table__body-cell"><a href="#">20220612-O-2</a>
            </td>
            <td class="table__body-cell"><a href="#">ИП Иванов Иван Иванович</a>
            </td>
            <td class="table__body-cell"><a href="#">Иванов И. И. (ip.ivanov@mail.ru)</a>
            </td>
            <td class="table__body-cell">
              <svg class="icon_size_s table__cell-item icon icon_type_calendar">
                <use xlink:href="@/assets/i/sprite/sprite.svg#calendar"></use>
              </svg><span>5 мар 2023</span>
            </td>
            <td class="table__body-cell">$ 14 000
            </td>
            <td class="table__body-cell">
              <div class="dropdown-select dropdown-select_size_s">
                <div class="dropdown-select__wrapper">
                  <div class="dropdown-select__input-wrapper">
                    <input class="dropdown-select__input" type="text" placeholder="Плейсхолдер"/>
                    <div class="dropdown-select__arrow">
                      <svg class="icon icon_type_chevron-down">
                        <use xlink:href="@/assets/i/sprite/sprite.svg#chevron-down"></use>
                      </svg>
                    </div>
                  </div>
                  <div class="dropdown-select__list-wrapper">
                    <div class="dropdown-select__list">
                      <div class="dropdown-select__list-item">Пункт 1
                      </div>
                      <div class="dropdown-select__list-item">Пункт 2
                      </div>
                      <div class="dropdown-select__list-item">Очень-очень-очень длинный пункт с огромным и большим названием
                      </div>
                      <div class="dropdown-select__list-item dropdown-select__list-item_active">Пункт 3
                      </div>
                      <div class="dropdown-select__list-item">Пункт 4
                      </div>
                      <div class="dropdown-select__list-item">Пункт 5
                      </div>
                      <div class="dropdown-select__list-item">Пункт 6
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
          <tr class="table__body-row table__body-row_color_error">
            <td class="table__body-cell"><a href="#">20220612-O-2</a>
            </td>
            <td class="table__body-cell"><a href="#">ИП Иванов Иван Иванович</a>
            </td>
            <td class="table__body-cell"><a href="#">Иванов И. И. (ip.ivanov@mail.ru)</a>
            </td>
            <td class="table__body-cell">
              <svg class="icon_size_s table__cell-item icon icon_type_calendar">
                <use xlink:href="@/assets/i/sprite/sprite.svg#calendar"></use>
              </svg><span>5 мар 2023</span>
            </td>
            <td class="table__body-cell">$ 14 000
            </td>
            <td class="table__body-cell">
              <div class="dropdown-select dropdown-select_size_s">
                <div class="dropdown-select__wrapper">
                  <div class="dropdown-select__input-wrapper">
                    <input class="dropdown-select__input" type="text" placeholder="Плейсхолдер"/>
                    <div class="dropdown-select__arrow">
                      <svg class="icon icon_type_chevron-down">
                        <use xlink:href="@/assets/i/sprite/sprite.svg#chevron-down"></use>
                      </svg>
                    </div>
                  </div>
                  <div class="dropdown-select__list-wrapper">
                    <div class="dropdown-select__list">
                      <div class="dropdown-select__list-item">Пункт 1
                      </div>
                      <div class="dropdown-select__list-item">Пункт 2
                      </div>
                      <div class="dropdown-select__list-item">Очень-очень-очень длинный пункт с огромным и большим названием
                      </div>
                      <div class="dropdown-select__list-item dropdown-select__list-item_active">Пункт 3
                      </div>
                      <div class="dropdown-select__list-item">Пункт 4
                      </div>
                      <div class="dropdown-select__list-item">Пункт 5
                      </div>
                      <div class="dropdown-select__list-item">Пункт 6
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
            <td class="table__body-cell"><a href="#">20220612-O-2</a>
            </td>
            <td class="table__body-cell"><a href="#">ИП Иванов Иван Иванович</a>
            </td>
            <td class="table__body-cell"><a href="#">Иванов И. И. (ip.ivanov@mail.ru)</a>
            </td>
            <td class="table__body-cell">
              <svg class="icon_size_s table__cell-item icon icon_type_calendar">
                <use xlink:href="@/assets/i/sprite/sprite.svg#calendar"></use>
              </svg><span>5 мар 2023</span>
            </td>
            <td class="table__body-cell">$ 14 000
            </td>
            <td class="table__body-cell">
              <div class="dropdown-select dropdown-select_size_s">
                <div class="dropdown-select__wrapper">
                  <div class="dropdown-select__input-wrapper">
                    <input class="dropdown-select__input" type="text" placeholder="Плейсхолдер"/>
                    <div class="dropdown-select__arrow">
                      <svg class="icon icon_type_chevron-down">
                        <use xlink:href="@/assets/i/sprite/sprite.svg#chevron-down"></use>
                      </svg>
                    </div>
                  </div>
                  <div class="dropdown-select__list-wrapper">
                    <div class="dropdown-select__list">
                      <div class="dropdown-select__list-item">Пункт 1
                      </div>
                      <div class="dropdown-select__list-item">Пункт 2
                      </div>
                      <div class="dropdown-select__list-item">Очень-очень-очень длинный пункт с огромным и большим названием
                      </div>
                      <div class="dropdown-select__list-item dropdown-select__list-item_active">Пункт 3
                      </div>
                      <div class="dropdown-select__list-item">Пункт 4
                      </div>
                      <div class="dropdown-select__list-item">Пункт 5
                      </div>
                      <div class="dropdown-select__list-item">Пункт 6
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
            <td class="table__body-cell"><a href="#">20220612-O-2</a>
            </td>
            <td class="table__body-cell"><a href="#">ИП Иванов Иван Иванович</a>
            </td>
            <td class="table__body-cell"><a href="#">Иванов И. И. (ip.ivanov@mail.ru)</a>
            </td>
            <td class="table__body-cell">
              <svg class="icon_size_s table__cell-item icon icon_type_calendar">
                <use xlink:href="@/assets/i/sprite/sprite.svg#calendar"></use>
              </svg><span>5 мар 2023</span>
            </td>
            <td class="table__body-cell">$ 14 000
            </td>
            <td class="table__body-cell">
              <div class="dropdown-select dropdown-select_size_s">
                <div class="dropdown-select__wrapper">
                  <div class="dropdown-select__input-wrapper">
                    <input class="dropdown-select__input" type="text" placeholder="Плейсхолдер"/>
                    <div class="dropdown-select__arrow">
                      <svg class="icon icon_type_chevron-down">
                        <use xlink:href="@/assets/i/sprite/sprite.svg#chevron-down"></use>
                      </svg>
                    </div>
                  </div>
                  <div class="dropdown-select__list-wrapper">
                    <div class="dropdown-select__list">
                      <div class="dropdown-select__list-item">Пункт 1
                      </div>
                      <div class="dropdown-select__list-item">Пункт 2
                      </div>
                      <div class="dropdown-select__list-item">Очень-очень-очень длинный пункт с огромным и большим названием
                      </div>
                      <div class="dropdown-select__list-item dropdown-select__list-item_active">Пункт 3
                      </div>
                      <div class="dropdown-select__list-item">Пункт 4
                      </div>
                      <div class="dropdown-select__list-item">Пункт 5
                      </div>
                      <div class="dropdown-select__list-item">Пункт 6
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
            <td class="table__body-cell"><a href="#">20220612-O-2</a>
            </td>
            <td class="table__body-cell"><a href="#">ИП Иванов Иван Иванович</a>
            </td>
            <td class="table__body-cell"><a href="#">Иванов И. И. (ip.ivanov@mail.ru)</a>
            </td>
            <td class="table__body-cell">
              <svg class="icon_size_s table__cell-item icon icon_type_calendar">
                <use xlink:href="@/assets/i/sprite/sprite.svg#calendar"></use>
              </svg><span>5 мар 2023</span>
            </td>
            <td class="table__body-cell">$ 14 000
            </td>
            <td class="table__body-cell">
              <div class="dropdown-select dropdown-select_size_s">
                <div class="dropdown-select__wrapper">
                  <div class="dropdown-select__input-wrapper">
                    <input class="dropdown-select__input" type="text" placeholder="Плейсхолдер"/>
                    <div class="dropdown-select__arrow">
                      <svg class="icon icon_type_chevron-down">
                        <use xlink:href="@/assets/i/sprite/sprite.svg#chevron-down"></use>
                      </svg>
                    </div>
                  </div>
                  <div class="dropdown-select__list-wrapper">
                    <div class="dropdown-select__list">
                      <div class="dropdown-select__list-item">Пункт 1
                      </div>
                      <div class="dropdown-select__list-item">Пункт 2
                      </div>
                      <div class="dropdown-select__list-item">Очень-очень-очень длинный пункт с огромным и большим названием
                      </div>
                      <div class="dropdown-select__list-item dropdown-select__list-item_active">Пункт 3
                      </div>
                      <div class="dropdown-select__list-item">Пункт 4
                      </div>
                      <div class="dropdown-select__list-item">Пункт 5
                      </div>
                      <div class="dropdown-select__list-item">Пункт 6
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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