<template>
    <div class="main-menu">
        <div class="main-menu__profile-item"><a class="main-menu__link" href="profile.html">
            <div class="user-avatar user-avatar_size_s">
                <div class="user-avatar__wrapper"><img class="user-avatar__image" src="@/assets/i/avatar-example.jpg"
                                                       alt="avatar"/>
                </div>
            </div>
            <div class="main-menu__link-title">Иван Иванов
            </div>
        </a><a class="main-menu__link" href="#logout">
            <svg class="icon_size_s icon icon_type_logout">
                <use xlink:href="@/assets/i/sprite/sprite.svg#logout"></use>
            </svg>
        </a>
        </div>
        <div
            v-for="item in items"
            class="main-menu__item"
            :class="{
                'main-menu__item_active': item.active,
                'main-menu__item_has-sub-items': item.subitems,
                'main-menu__item_expanded': item.expanded,
            }"
        ><a class="main-menu__link" :href="item.link" @click.prevent>
            <svg :class="'icon icon_type_' + item.icon">
                <use :href="SPRITE_URL + '#' + item.icon"></use>
            </svg>
            <div class="main-menu__link-title">{{ item.title }}
            </div>
            <div class="main-menu__control">
                <template
                    v-if="item.subitems"
                >
                    <svg class="icon icon_type_plus"
                         @click.stop.prevent="toggle(item)"
                    >
                        <use href="@/assets/i/sprite/sprite.svg#plus"></use>
                    </svg>
                    <svg class="icon icon_type_minus"
                         @click.stop.prevent="toggle(item)"
                    >
                        <use xlink:href="@/assets/i/sprite/sprite.svg#minus"></use>
                    </svg>
                </template>
                <svg class="icon icon_type_chevron-right"
                     v-else
                >
                    <use xlink:href="@/assets/i/sprite/sprite.svg#chevron-right"></use>
                </svg>
            </div>
        </a>
            <div class="main-menu__sub-items"
                 v-if="item.subitems"
            >
                <div
                    v-for="subitem in item.subitems"
                    class="main-menu__item"
                    :class="{
                        'main-menu__item_active': subitem.active,
                        'main-menu__item_expanded': subitem.expanded,
                    }"
                ><a class="main-menu__link" :href="subitem.link">
                    <svg :class="'icon icon_type_' + subitem.icon">
                        <use :href="SPRITE_URL + '#' + subitem.icon"></use>
                    </svg>
                    <div class="main-menu__link-title">{{ subitem.title }}
                    </div>
                    <div class="main-menu__control">
                        <svg class="icon icon_type_chevron-right">
                            <use xlink:href="@/assets/i/sprite/sprite.svg#chevron-right"></use>
                        </svg>
                    </div>
                </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import SPRITE_URL from '@/assets/i/sprite/sprite.svg';
import { reactive } from 'vue';

const items = reactive([
    {
        icon: 'user-group',
        title: 'Пользователи',
        active: false,
        link: 'main',
    }, {
        icon: 'office-building',
        title: 'Группы компаний',
        active: false,
        link: 'second',
    }, {
        icon: 'share',
        title: 'Контрагенты',
        active: false,
        link: 'contractors.html',
    }, {
        icon: 'document-text',
        title: 'Контракты',
        active: false,
        link: 'contracts.html',
    }, {
        icon: 'receipt-tax',
        title: 'Сделки',
        active: false,
        link: 'deals.html',
    }, {
        icon: 'cog',
        title: 'Настройки',
        active: false,
        link: 'settings.html',
        subitems: [{
            icon: 'shield-exclamation',
            title: 'Роли и права',
            active: false,
            link: 'settings-roles.html',
        }, {
            icon: 'view-boards',
            title: 'Статусы сделок',
            active: false,
            link: 'settings-deal-statuses.html',
        }, {
            icon: 'table',
            title: 'Настройка доп. полей',
            active: false,
            link: 'settings-custom-fields.html',
        },]
    },]);

function toggle(item) {
    item.active = !item.active;
    if (item.subitems) {
        item.expanded = !item.expanded;
    }
}
</script>

<style scoped>

</style>
