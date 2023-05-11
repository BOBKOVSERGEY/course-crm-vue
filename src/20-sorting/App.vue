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
                            <Button size="s" icon="plus-circle" text="Новый пользователь"
                                    @click="toggleModal"
                            />
                        </div>
                    </div>
                </div>
                <div class="main-content__body">
                    <div class="search">
                        <TextBox placeholder="Телефон, имя..."
                                 v-model="searchText"
                                 @keyup.enter="search"
                        />
                        <Button icon="search" text="Искать"
                                @click="search"
                        />
                    </div>
                    <UsersList :users="users"
                               @delete="deleteUser"
                               @change-sort="sortUsers"
                               :sort-dir="sortDir"
                               :sort-key="sortKey"
                    />
                </div>
            </div>
            <Modal
                :active="modalActive"
                @close="toggleModal"
            />
        </div>
    </div>
    <Footer/>
</template>

<script setup>
import LeftBar from "@/20-sorting/components/LeftBar.vue"
import Footer from "@/20-sorting/components/Footer.vue"
import UsersList from "@/20-sorting/components/UsersList.vue";
import TextBox from "@/20-sorting/components/TextBox.vue";
import Modal from "@/20-sorting/components/Modal.vue";

import avatarUrl from '@/assets/i/avatar-example.jpg';
import { ref } from "vue";
import Button from "@/20-sorting/components/Button.vue";

const originalUsers = [
    {
        id: 1,
        avatar: avatarUrl,
        fullname: 'Иван Иванов',
        contractor: 'ООО "Иванов и партнеры"',
        email: 'noreply@please.com',
        position: 'Директор',
        type: 'Заказчик'
    },
    {
        id: 2,
        avatar: avatarUrl,
        fullname: 'Аркадий Вульф',
        contractor: 'ООО "Иванов и партнеры"',
        email: 'noreply@please1.com',
        position: 'Директор',
        type: 'Заказчик'
    },
    {
        id: 3,
        avatar: avatarUrl,
        fullname: 'Бедрос Папандокис',
        contractor: 'ООО "Иванов и партнеры"',
        email: 'noreply@please.com',
        position: 'Директор',
        type: 'Заказчик'
    },
    {
        id: 4,
        avatar: avatarUrl,
        fullname: 'Рик Санчез',
        contractor: 'ООО "Иванов и партнеры"',
        email: 'noreply@please2.com',
        position: 'Директор',
        type: 'Заказчик'
    },
    {
        id: 5,
        avatar: avatarUrl,
        fullname: 'Аглафира Скотобойникова',
        contractor: 'ООО "Иванов и партнеры"',
        email: 'noreply@please3.com',
        position: 'Директор',
        type: 'Заказчик'
    },
    {
        id: 6,
        avatar: avatarUrl,
        fullname: 'Гвидон Ман',
        contractor: 'ООО "Иванов и партнеры"',
        email: 'noreply@please.com',
        position: 'Директор',
        type: 'Заказчик'
    },


];
const users = ref([...originalUsers]);

const searchText = ref('');

function deleteUser(id){
    users.value = users.value.filter(user => user.id !== id);
}

function search(){
    users.value = originalUsers.filter(user => {
        return user.fullname.indexOf(searchText.value) !== -1
    });
}

const modalActive = ref(false);
function toggleModal(){
    modalActive.value = !modalActive.value;
}

const sortDir = ref('');
const sortKey = ref('');
function sortUsers(key, dir){
    sortDir.value = dir;
    sortKey.value = key;
    if(!dir){
        users.value = originalUsers;
        return;
    }
    users.value.sort((user1, user2) => {
        return dir === 'asc' ? user1[key].localeCompare(user2[key]) : -(user1[key].localeCompare(user2[key]));
    });
}
</script>
