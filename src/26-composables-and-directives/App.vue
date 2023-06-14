<template>
    <div class="app__wrapper app__wrapper_page-type_inner">
        <LeftBar/>
        <div class="app__main">
            <div class="main-content">
                <div class="main-content__head">
                    <div class="main-content__head-row">
                        <div class="main-content__title">Контактные лица и сотрудники {{x}}  {{y}}
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

        </div>
    </div>
    <Footer/>
</template>

<script setup>
import LeftBar from "@/26-composables-and-directives/components/LeftBar.vue"
import Footer from "@/26-composables-and-directives/components/Footer.vue"
import UsersList from "@/26-composables-and-directives/components/UsersList.vue";
import TextBox from "@/26-composables-and-directives/components/TextBox.vue";
import Modal from "@/26-composables-and-directives/components/Modal.vue";

import {ref, onMounted, onUnmounted} from "vue";
import Button from "@/26-composables-and-directives/components/Button.vue";
import {useMouse} from "@/26-composables-and-directives/use/mouse";




const searchText = ref('');
const modalActive = ref(false);

function toggleModal() {
    modalActive.value = !modalActive.value;
}

const { x , y }  = useMouse();

</script>
