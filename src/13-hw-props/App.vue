<template>
    <div class="app__wrapper app__wrapper_page-type_inner">
        <LeftBar/>
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
                                        <TableHeadCell
                                            showButtons
                                            :value="[
                                                'Контрагент',
                                                'Email',
                                                'Должность',
                                                'Тип контракта'
                                                ]"
                                            :icon="['cog', 'filter']"
                                        />
                                        <tbody class="table__body">
                                           <TableBodyCell
                                               :value='[
                                                   "ООО \"Иванов и партнеры\"",
                                                   "noemail@please.com",
                                                   "Гендиректор",
                                                   "Заказчик"
                                                    ]'
                                               show-buttons
                                               :icon="['pencil', 'trash', 'check']"
                                           />
                                           <TableBodyCell
                                               :value='[
                                                   "ООО \"OBs NT\"",
                                                   "noes@plse.com",
                                                   "Менеджер",
                                                   "Заказчик"
                                                    ]'
                                               show-buttons
                                               :icon="['pencil', 'check']"
                                           />

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
                            <div class="tabs__content">
                                <p>Вкладка со сделками</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RightBar/>
        </div>
    </div>
    <Footer/>
</template>

<script setup>
import LeftBar from "@/13-hw-props/components/LeftBar.vue";
import TableRow from "@/13-hw-props/components/TableRow.vue";
import RightBar from "@/13-hw-props/components/RightBar.vue";
import Footer from "@/13-hw-props/components/Footer.vue";
import Button from "@/13-hw-props/components/Button.vue";
import TableHeadCell from "@/13-hw-props/components/TableHeadCell.vue";
import TableBodyCell from "@/13-hw-props/components/TableBodyCell.vue";

const buttonAttrs = {
    color: 'primary',
    transparent: true,
    icon: 'cog'
};
</script>
