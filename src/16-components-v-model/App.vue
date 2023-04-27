<template>
    <div class="app__wrapper app__wrapper_page-type_inner">
        <LeftBar/>
        <div class="app__main">
            <div class="main-content">
                <div class="main-content__head">
                    <div class="main-content__head-row">
                        <div class="main-content__title">Мой профиль</div>
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
                                    <Table/>
                                    <Pagination/>
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
import LeftBar from "@/16-components-v-model/components/LeftBar.vue"
import RightBar from "@/16-components-v-model/components/RightBar.vue"
import Footer from "@/16-components-v-model/components/Footer.vue"
import Table from "@/16-components-v-model/components/Table.vue"
import Pagination from '@/16-components-v-model/components/Pagination.vue'
</script>
