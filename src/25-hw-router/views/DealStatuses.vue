<template>
  <div class="main-content">
    <div class="main-content__head">
      <div class="main-content__head-row">
        <div class="main-content__title">Статусы сделок
        </div>
      </div>
      <div class="main-content__head-row">
        <div class="main-content__description">Добавьте статусы, через которые проходит сделка в вашей бизнес-модели. Начальный и конечный статус являются неудаляемыми. Перед начальным и после конечного статуса нельзя добавить новые.
        </div>
      </div>
    </div>
    <div class="main-content__body">
      <div class="settings-deal-statuses">
        <div class="dialog-deal-status">
          <div class="dialog-deal-status__fixed-state-wrapper">
            <div class="dialog-deal-status__title">1
              /
              Новая
            </div>
            <div class="dialog-deal-status__description">Статус по-умолчанию для новой создаваемой сделки
            </div>
            <div class="dialog-deal-status__buttons"><a class="button button_size_xs" href="#">
              <svg class="icon icon_type_pencil">
                <use xlink:href="@/assets/i/sprite/sprite.svg#pencil"></use>
              </svg><span>Изменить</span></a>
            </div>
          </div>
          <div class="dialog-deal-status__editable-state-wrapper">
            <div class="dialog-deal-status__close">
              <svg class="icon_size_xs icon icon_type_x">
                <use xlink:href="@/assets/i/sprite/sprite.svg#x"></use>
              </svg>
            </div>
            <div class="dialog-deal-status__fields">
              <div class="textbox textbox_size_s">
                <label class="textbox__wrapper">
                  <div class="textbox__label">Название статуса
                  </div>
                  <input class="textbox__input" type="text" placeholder="Название статуса" value="Новая"/>
                </label>
              </div>
              <div class="textbox textbox_size_s">
                <label class="textbox__wrapper">
                  <div class="textbox__label">Описание статуса
                  </div>
                  <textarea class="textbox__input" placeholder="Описание статуса"></textarea>
                </label>
              </div>
            </div>
            <div class="dialog-deal-status__buttons"><a class="button button_size_xs" href="#">
              <svg class="icon icon_type_check">
                <use xlink:href="@/assets/i/sprite/sprite.svg#check"></use>
              </svg><span>Сохранить</span></a><a class="button button_size_xs button_transparent button_color_secondary" href="#">
              <svg class="icon icon_type_x">
                <use xlink:href="@/assets/i/sprite/sprite.svg#x"></use>
              </svg><span>Отменить</span></a>
            </div>
          </div>
        </div><a class="button button_no-text button_transparent button_size_s" href="#">
        <svg class="icon icon_type_plus-circle">
          <use xlink:href="@/assets/i/sprite/sprite.svg#plus-circle"></use>
        </svg></a>
        <div class="dialog-deal-status dialog-deal-status_editable">
          <div class="dialog-deal-status__fixed-state-wrapper">
            <div class="dialog-deal-status__title">2
              /
              В работе
            </div>
            <div class="dialog-deal-status__description">Статус по-умолчанию для новой создаваемой сделки
            </div>
            <div class="dialog-deal-status__buttons"><a class="button button_size_xs" href="#">
              <svg class="icon icon_type_pencil">
                <use xlink:href="@/assets/i/sprite/sprite.svg#pencil"></use>
              </svg><span>Изменить</span></a>
            </div>
          </div>
          <div class="dialog-deal-status__editable-state-wrapper">
            <div class="dialog-deal-status__close">
              <svg class="icon_size_xs icon icon_type_x">
                <use xlink:href="@/assets/i/sprite/sprite.svg#x"></use>
              </svg>
            </div>
            <div class="dialog-deal-status__fields">
              <div class="textbox textbox_size_s">
                <label class="textbox__wrapper">
                  <div class="textbox__label">Название статуса
                  </div>
                  <input class="textbox__input" type="text" placeholder="Название статуса" value="В работе"/>
                </label>
              </div>
              <div class="textbox textbox_size_s">
                <label class="textbox__wrapper">
                  <div class="textbox__label">Описание статуса
                  </div>
                  <textarea class="textbox__input" placeholder="Описание статуса"></textarea>
                </label>
              </div>
            </div>
            <div class="dialog-deal-status__buttons"><a class="button button_size_xs" href="#">
              <svg class="icon icon_type_check">
                <use xlink:href="@/assets/i/sprite/sprite.svg#check"></use>
              </svg><span>Сохранить</span></a><a class="button button_size_xs button_transparent button_color_secondary" href="#">
              <svg class="icon icon_type_x">
                <use xlink:href="@/assets/i/sprite/sprite.svg#x"></use>
              </svg><span>Отменить</span></a>
            </div>
          </div>
        </div><a class="button button_no-text button_transparent button_size_s" href="#">
        <svg class="icon icon_type_plus-circle">
          <use xlink:href="@/assets/i/sprite/sprite.svg#plus-circle"></use>
        </svg></a>
        <div class="dialog-deal-status">
          <div class="dialog-deal-status__fixed-state-wrapper">
            <div class="dialog-deal-status__title">3
              /
              На согласовании
            </div>
            <div class="dialog-deal-status__description">Статус по-умолчанию для новой создаваемой сделки
            </div>
            <div class="dialog-deal-status__buttons"><a class="button button_size_xs" href="#">
              <svg class="icon icon_type_pencil">
                <use xlink:href="@/assets/i/sprite/sprite.svg#pencil"></use>
              </svg><span>Изменить</span></a>
            </div>
          </div>
          <div class="dialog-deal-status__editable-state-wrapper">
            <div class="dialog-deal-status__close">
              <svg class="icon_size_xs icon icon_type_x">
                <use xlink:href="@/assets/i/sprite/sprite.svg#x"></use>
              </svg>
            </div>
            <div class="dialog-deal-status__fields">
              <div class="textbox textbox_size_s">
                <label class="textbox__wrapper">
                  <div class="textbox__label">Название статуса
                  </div>
                  <input class="textbox__input" type="text" placeholder="Название статуса" value="На согласовании"/>
                </label>
              </div>
              <div class="textbox textbox_size_s">
                <label class="textbox__wrapper">
                  <div class="textbox__label">Описание статуса
                  </div>
                  <textarea class="textbox__input" placeholder="Описание статуса"></textarea>
                </label>
              </div>
            </div>
            <div class="dialog-deal-status__buttons"><a class="button button_size_xs" href="#">
              <svg class="icon icon_type_check">
                <use xlink:href="@/assets/i/sprite/sprite.svg#check"></use>
              </svg><span>Сохранить</span></a><a class="button button_size_xs button_transparent button_color_secondary" href="#">
              <svg class="icon icon_type_x">
                <use xlink:href="@/assets/i/sprite/sprite.svg#x"></use>
              </svg><span>Отменить</span></a>
            </div>
          </div>
        </div><a class="button button_no-text button_transparent button_size_s" href="#">
        <svg class="icon icon_type_plus-circle">
          <use xlink:href="@/assets/i/sprite/sprite.svg#plus-circle"></use>
        </svg></a>
        <div class="dialog-deal-status">
          <div class="dialog-deal-status__fixed-state-wrapper">
            <div class="dialog-deal-status__title">4
              /
              Выполнена
            </div>
            <div class="dialog-deal-status__description">Статус по-умолчанию для новой создаваемой сделки
            </div>
            <div class="dialog-deal-status__buttons"><a class="button button_size_xs" href="#">
              <svg class="icon icon_type_pencil">
                <use xlink:href="@/assets/i/sprite/sprite.svg#pencil"></use>
              </svg><span>Изменить</span></a>
            </div>
          </div>
          <div class="dialog-deal-status__editable-state-wrapper">
            <div class="dialog-deal-status__close">
              <svg class="icon_size_xs icon icon_type_x">
                <use xlink:href="@/assets/i/sprite/sprite.svg#x"></use>
              </svg>
            </div>
            <div class="dialog-deal-status__fields">
              <div class="textbox textbox_size_s">
                <label class="textbox__wrapper">
                  <div class="textbox__label">Название статуса
                  </div>
                  <input class="textbox__input" type="text" placeholder="Название статуса" value="Выполнена"/>
                </label>
              </div>
              <div class="textbox textbox_size_s">
                <label class="textbox__wrapper">
                  <div class="textbox__label">Описание статуса
                  </div>
                  <textarea class="textbox__input" placeholder="Описание статуса"></textarea>
                </label>
              </div>
            </div>
            <div class="dialog-deal-status__buttons"><a class="button button_size_xs" href="#">
              <svg class="icon icon_type_check">
                <use xlink:href="@/assets/i/sprite/sprite.svg#check"></use>
              </svg><span>Сохранить</span></a><a class="button button_size_xs button_transparent button_color_secondary" href="#">
              <svg class="icon icon_type_x">
                <use xlink:href="@/assets/i/sprite/sprite.svg#x"></use>
              </svg><span>Отменить</span></a>
            </div>
          </div>
        </div><a class="button button_no-text button_transparent button_size_s" href="#">
        <svg class="icon icon_type_plus-circle">
          <use xlink:href="@/assets/i/sprite/sprite.svg#plus-circle"></use>
        </svg></a>
        <div class="dialog-deal-status">
          <div class="dialog-deal-status__fixed-state-wrapper">
            <div class="dialog-deal-status__title">5
              /
              Завершена
            </div>
            <div class="dialog-deal-status__description">Статус по-умолчанию для новой создаваемой сделки
            </div>
            <div class="dialog-deal-status__buttons"><a class="button button_size_xs" href="#">
              <svg class="icon icon_type_pencil">
                <use xlink:href="@/assets/i/sprite/sprite.svg#pencil"></use>
              </svg><span>Изменить</span></a>
            </div>
          </div>
          <div class="dialog-deal-status__editable-state-wrapper">
            <div class="dialog-deal-status__close">
              <svg class="icon_size_xs icon icon_type_x">
                <use xlink:href="@/assets/i/sprite/sprite.svg#x"></use>
              </svg>
            </div>
            <div class="dialog-deal-status__fields">
              <div class="textbox textbox_size_s">
                <label class="textbox__wrapper">
                  <div class="textbox__label">Название статуса
                  </div>
                  <input class="textbox__input" type="text" placeholder="Название статуса" value="Завершена"/>
                </label>
              </div>
              <div class="textbox textbox_size_s">
                <label class="textbox__wrapper">
                  <div class="textbox__label">Описание статуса
                  </div>
                  <textarea class="textbox__input" placeholder="Описание статуса"></textarea>
                </label>
              </div>
            </div>
            <div class="dialog-deal-status__buttons"><a class="button button_size_xs" href="#">
              <svg class="icon icon_type_check">
                <use xlink:href="@/assets/i/sprite/sprite.svg#check"></use>
              </svg><span>Сохранить</span></a><a class="button button_size_xs button_transparent button_color_secondary" href="#">
              <svg class="icon icon_type_x">
                <use xlink:href="@/assets/i/sprite/sprite.svg#x"></use>
              </svg><span>Отменить</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>