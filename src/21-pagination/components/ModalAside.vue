<template>
  <div class="modal modal_aside">
    <div class="modal__main">
      <div class="modal__close">
        <svg class="icon icon_type_x">
          <use xlink:href="@/assets/i/sprite/sprite.svg#x"></use>
        </svg>
      </div>
      <div class="modal__body">
        <div class="modal__title">Новый контракт
        </div>
        <div class="entity-fields">
          <div class="entity-fields__group">
            <div class="textbox">
              <label class="textbox__wrapper">
                <div class="textbox__label">Номер
                </div>
                <input class="textbox__input" type="text" placeholder="Плейсхолдер" value="20220115-О-2"/>
              </label>
            </div>
            <div class="dropdown-select">
              <div class="dropdown-select__wrapper">
                <div class="dropdown-select__label">Заказчик
                </div>
                <div class="dropdown-select__input-wrapper">
                  <input class="dropdown-select__input" type="text" placeholder="Плейсхолдер" value="ООО &quot;Иванов и партнеры&quot;"/>
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
            <div class="dropdown-select">
              <div class="dropdown-select__wrapper">
                <div class="dropdown-select__label">Исполнитель
                </div>
                <div class="dropdown-select__input-wrapper">
                  <input class="dropdown-select__input" type="text" placeholder="Плейсхолдер" value="ООО &quot;Кит консалтинг&quot;"/>
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
            <div class="entity-fields__row">
              <div class="entity-fields__col">
                <div class="datepicker">
                  <div class="datepicker__wrapper">
                    <svg class="icon icon_type_calendar">
                      <use xlink:href="@/assets/i/sprite/sprite.svg#calendar"></use>
                    </svg>
                    <svg class="icon icon_type_x">
                      <use xlink:href="@/assets/i/sprite/sprite.svg#x"></use>
                    </svg>
                    <div class="datepicker__label">Дата формирования
                    </div>
                    <input class="datepicker__input" type="text" placeholder="Выберите дату" value="25 мар 2022"/>
                  </div>
                </div>
              </div>
              <div class="entity-fields__col">
                <div class="datepicker">
                  <div class="datepicker__wrapper">
                    <svg class="icon icon_type_calendar">
                      <use xlink:href="@/assets/i/sprite/sprite.svg#calendar"></use>
                    </svg>
                    <svg class="icon icon_type_x">
                      <use xlink:href="@/assets/i/sprite/sprite.svg#x"></use>
                    </svg>
                    <div class="datepicker__label">Дата подписания
                    </div>
                    <input class="datepicker__input" type="text" placeholder="Выберите дату" value=""/>
                  </div>
                </div>
              </div>
            </div>
            <div class="textbox">
              <label class="textbox__wrapper">
                <textarea class="textbox__input" placeholder="Комментарии и заметки к контракту"></textarea>
              </label>
            </div>
            <div class="entity-fields__expandable-wrapper entity-fields__expandable-wrapper_expanded">
              <div class="entity-fields__expander"><span>Дополнительная информация</span><a class="button button_size_xs button_transparent button_no-text" href="#">
                <svg class="icon icon_type_chevron-down">
                  <use xlink:href="@/assets/i/sprite/sprite.svg#chevron-down"></use>
                </svg></a>
              </div>
              <div class="entity-fields__expandable-group">
                <div class="entity-fields__group">
                  <div class="textbox">
                    <label class="textbox__wrapper">
                      <div class="textbox__label">Кастомное поле
                      </div>
                      <input class="textbox__input" type="text" placeholder="Плейсхолдер" value="Кастомное значение"/>
                    </label>
                  </div>
                  <div class="textbox">
                    <label class="textbox__wrapper">
                      <div class="textbox__label">Кастомное поле
                      </div>
                      <textarea class="textbox__input" placeholder="Плейсхолдер">Кастомное значение гораздо длиннее по своему значению. Возможно даже на несколько строк</textarea>
                    </label>
                  </div>
                  <div class="textbox">
                    <label class="textbox__wrapper">
                      <div class="textbox__label">Кастомное поле
                      </div>
                      <textarea class="textbox__input" placeholder="Плейсхолдер">Кастомное значение гораздо длиннее по своему значению. Возможно даже на несколько строк</textarea>
                    </label>
                  </div>
                  <div class="textbox">
                    <label class="textbox__wrapper">
                      <div class="textbox__label">Кастомное поле
                      </div>
                      <textarea class="textbox__input" placeholder="Плейсхолдер">Кастомное значение гораздо длиннее по своему значению. Возможно даже на несколько строк</textarea>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal__footer"><a class="button button_transparent" href="#">Сохранить и закрыть</a><a class="button" href="#">Сохранить</a>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>