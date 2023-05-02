<template>
  <div
      :class="{
        'modal_active': active
      }"
      class="modal modal_aside">
    <div class="modal__main">
      <div
          @click="close"
          class="modal__close">
        <svg class="icon icon_type_x">
          <use xlink:href="@/assets/i/sprite/sprite.svg#x"></use>
        </svg>
      </div>
      <div class="modal__body">
        <div class="modal__title">Новый пользователь
        </div>
        <div class="entity-fields">
          <div class="user-avatar user-avatar_size_xl user-avatar_empty"><a class="button button_rounded button_no-text button_color_secondary button_size_xs" href="#">
            <svg class="icon icon_type_trash">
              <use xlink:href="@/assets/i/sprite/sprite.svg#trash"></use>
            </svg></a>
            <div class="user-avatar__wrapper">
              <label class="user-avatar__upload-link">
                <input type="file" name="avatar_image">
                <svg class="icon icon_type_upload">
                  <use xlink:href="@/assets/i/sprite/sprite.svg#upload"></use>
                </svg><span>загрузить</span>
              </label>
            </div>
          </div>
          <slot>
            <div class="entity-fields__group">
              <div class="textbox">
                <label class="textbox__wrapper">
                  <div class="textbox__label">Имя
                  </div>
                  <input class="textbox__input" type="text" placeholder="Плейсхолдер" value="Иванов">
                </label>
              </div>
              <div class="textbox">
                <label class="textbox__wrapper">
                  <div class="textbox__label">Фамилия
                  </div>
                  <input class="textbox__input" type="text" placeholder="Плейсхолдер" value="Иван">
                </label>
              </div>
              <div class="textbox">
                <label class="textbox__wrapper">
                  <div class="textbox__label">Отчество
                  </div>
                  <input class="textbox__input" type="text" placeholder="Плейсхолдер" value="Иванович">
                </label>
              </div>
              <div class="entity-fields__row">
                <div class="entity-fields__col">
                  <div class="textbox">
                    <label class="textbox__wrapper">
                      <div class="textbox__label">E-mail (логин)
                      </div>
                      <input class="textbox__input" type="text" placeholder="Плейсхолдер" value="noemail@please.com">
                    </label>
                  </div>
                </div>
                <div class="entity-fields__col">
                  <div class="textbox">
                    <label class="textbox__wrapper">
                      <div class="textbox__label">Телефон
                      </div>
                      <input class="textbox__input" type="text" placeholder="Плейсхолдер" value="+7(123) 456-55-11">
                    </label>
                  </div>
                </div>
              </div>
              <div class="textbox">
                <label class="textbox__wrapper">
                  <div class="textbox__label">Пароль
                  </div>
                  <input class="textbox__input" type="password" placeholder="Плейсхолдер" value="qwertyuiop">
                </label>
              </div>
            </div>
            <div class="linked-fields linked-fields_edit">
              <div class="linked-fields__label-row">
                <div class="linked-fields__label">Котрагент/должность
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
                        <input class="textbox__input" type="text" placeholder="Плейсхолдер" value="ООО Иванов и партнеры">
                      </label>
                    </div>
                    <div class="textbox textbox_fixable_no-buttons">
                      <label class="textbox__wrapper">
                        <div class="textbox__label">Должность
                        </div>
                        <input class="textbox__input" type="text" placeholder="Плейсхолдер" value="Менеджер среднего звена">
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
                        <input class="textbox__input" type="text" placeholder="Плейсхолдер">
                      </label>
                    </div>
                    <div class="textbox textbox_fixable_no-buttons">
                      <label class="textbox__wrapper">
                        <div class="textbox__label">Должность
                        </div>
                        <input class="textbox__input" type="text" placeholder="Плейсхолдер">
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
                        <input class="textbox__input" type="text" placeholder="Плейсхолдер">
                      </label>
                    </div>
                    <div class="textbox textbox_fixable_no-buttons">
                      <label class="textbox__wrapper">
                        <div class="textbox__label">Должность
                        </div>
                        <input class="textbox__input" type="text" placeholder="Плейсхолдер">
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
                        <input class="textbox__input" type="text" placeholder="Плейсхолдер">
                      </label>
                    </div>
                    <div class="textbox textbox_fixable_no-buttons">
                      <label class="textbox__wrapper">
                        <div class="textbox__label">Должность
                        </div>
                        <input class="textbox__input" type="text" placeholder="Плейсхолдер">
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
          </slot>

          <slot name="additional">
            <div class="entity-fields__expandable-wrapper">
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
                    <input class="textbox__input" type="text" placeholder="Плейсхолдер" value="Кастомное значение">
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
          </slot>
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
                    <input class="textbox__input" type="text" placeholder="Плейсхолдер" value="Кастомное значение">
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
      <div class="modal__footer">
        <slot name="footer">
          <a class="button button_transparent" href="#">Сохранить и закрыть</a><a class="button" href="#">Сохранить</a>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['close'])
defineProps({
  active: Boolean
})

const close = () => {
  emit('close')
}
</script>