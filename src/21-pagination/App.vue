<template>
    <div class="app__wrapper app__wrapper_page-type_inner">
        <LeftBar/>
        <div class="app__main">
            <div class="main-content">
                <div class="main-content__head">
                    <div class="main-content__head-row">
                        <div class="main-content__title">Контактные лица и сотрудники
                        </div>
                        <div class="page-controls">
                            <Button size="s" icon="plus-circle" text="Получить данные"

                            />
                        </div>
                    </div>
                </div>
                <div class="main-content__body">
                    <div class="search">
                        <TextBox placeholder="Телефон, имя..."
                                 v-model="searchText"

                        />
                        <Button icon="search" text="Искать"

                        />
                    </div>
                    <UsersList
                    :username="searchText"
                    />
                </div>
            </div>
            <Modal
                :active="modalActive"
                @close="toggleModal"
            >
                <template #default>содержимое</template>
                <template #additional>Внедряемое содержимое</template>
                <template #footer> test</template>
            </Modal>
        </div>
    </div>
    <Footer/>
</template>

<script setup>
import LeftBar from "@/21-pagination/components/LeftBar.vue"
import Footer from "@/21-pagination/components/Footer.vue"
import UsersList from "@/21-pagination/components/UsersList.vue";
import TextBox from "@/21-pagination/components/TextBox.vue";
import Modal from "@/21-pagination/components/Modal.vue";

import { ref, onMounted } from "vue";
import Button from "@/21-pagination/components/Button.vue";




const searchText = ref('');
const modalActive = ref(false);

function toggleModal() {
    modalActive.value = !modalActive.value;
}


</script>
