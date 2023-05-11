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
            <div>
                Мое имя: {{ myFirstName + ' ' + myLastName }}
            </div>
            <div class="entity-fields__group"
            >
                <UserNameInput
                    v-model:firstName="myFirstName"
                    v-model:lastName="myLastName"
                />
                <TextBox label="Фамилия" placeholder="Фамилия" fixable/>
                <RadioGroup
                    name="gender"
                    value="Ж"
                    :values="[{
                        value: 'М',
                        text: 'М',
                    },{
                        value: 'Ж',
                        text: 'Ж'
                    },{
                        value: '',
                        text: 'Не определился',
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
                <TextBox label="E-mail (логин)" placeholder="E-mail" fixable/>
                <TextBox label="Телефон" placeholder="Телефон" fixable/>
                <TextBox label="Пароль" placeholder="Пароль" fixable/>
            </div>
            <div class="entity-fields__group">
                <TextBox label="Кастомное поле" placeholder="Кастомное поле" fixable/>
                <TextBox label="Кастомное поле" textarea placeholder="Кастомное поле" fixable/>
                <TextBox label="Кастомное поле" textarea placeholder="Кастомное поле" fixable/>
                <TextBox label="Кастомное поле" textarea placeholder="Кастомное поле" fixable/>
            </div>
        </div>
    </div>
</template>

<script setup>
import RadioGroup from "@/20-sorting/components/RadioGroup.vue";
import TextBox from "@/20-sorting/components/TextBox.vue";
import TextBoxSimple from "@/20-sorting/components/TextBoxSimple.vue";

import { ref } from 'vue';
import UserNameInput from "@/20-sorting/components/UserNameInput.vue";

const myFirstName = ref('Артем');
const myLastName = ref('Зернов');
</script>
