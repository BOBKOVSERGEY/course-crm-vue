<template>
    <div class="right-bar">
        <div class="entity-fields">
            <div class="user-avatar user-avatar_size_xl"><a class="button button_rounded button_no-text button_color_secondary button_size_xs" href="#">
                <svg class="icon icon_type_trash">
                    <use xlink:href="@/assets/i/sprite/sprite.svg#trash"></use>
                </svg></a>
                <div class="user-avatar__wrapper"><img class="user-avatar__image" src="@/assets/i/avatar-example.jpg" alt="avatar">
                    <label class="user-avatar__upload-link">
                        <input type="file" name="avatar_image">
                        <svg class="icon icon_type_upload">
                            <use xlink:href="@/assets/i/sprite/sprite.svg#upload"></use>
                        </svg><span>загрузить</span>
                    </label>
                </div>
            </div>
            <div class="entity-fields__group">
                <div class="textbox">
                    <label class="textbox__wrapper">
                        <div class="textbox__label">Имя
                        </div>
                        <input class="textbox__input"
                               type="text"
                               placeholder="Имя"
                        >
                    </label>
                </div>
                <div class="textbox">
                    <label class="textbox__wrapper">
                        <div class="textbox__label">Фамилия
                        </div>
                        <input class="textbox__input"
                               type="text"
                               placeholder="Фамилия"
                        >
                    </label>
                </div>
                <RadioGroup
                    name="gender"
                    :values="[{
                        value: 'М',
                        text: 'М',
                    },{
                        value: 'Ж',
                        text: 'Ж'
                    },{
                        value: '',
                        text: 'Не определился',
                        checked: true
                    }]"
                />
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
            <div class="entity-fields__group">
                <div class="textbox textbox_fixable">
                    <label class="textbox__wrapper">
                        <div class="textbox__label">E-mail (логин)
                        </div>
                        <input class="textbox__input" type="text" placeholder="Плейсхолдер" value="noemail@please.com">
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
                        <input class="textbox__input" type="text" placeholder="Плейсхолдер" value="+7(123) 456-55-11">
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
                        <input class="textbox__input" type="password" placeholder="Плейсхолдер" value="qwertyuiop">
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
                        <input class="textbox__input" type="text" placeholder="Плейсхолдер" value="Кастомное значение">
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
</template>

<script setup>
import RadioGroup from "@/13-hw-props/components/RadioGroup.vue";
</script>
