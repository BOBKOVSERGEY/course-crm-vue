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
                            <Button size="s" icon="plus-circle" text="Новый пользователь"/>
                        </div>
                    </div>
                </div>
                <div class="main-content__body">
                    <div class="search">
                        <TextBox placeholder="Телефон, имя, email..."
                                 v-model="searchString"
                                 @keyup.enter="filterUsers"
                        />
                        <Button icon="search" text="Искать"
                                @click="filterUsers"
                        />
                    </div>
                    <div class="table-view">
                        <UsersList
                            :users="users"
                            @delete="deleteUser"
                        />
                        <Pagination/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
</template>

<script setup>
import LeftBar from "@/17-list-operations/components/LeftBar.vue"
import Button from "@/17-list-operations/components/Button.vue"
import Footer from "@/17-list-operations/components/Footer.vue"
import Pagination from '@/17-list-operations/components/Pagination.vue'
import TextBox from "@/17-list-operations/components/TextBox.vue";
import UsersList from "@/17-list-operations/components/UsersList.vue";
import { ref } from "vue";

import avatarUrl from '@/assets/i/avatar-example.jpg';

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
        email: 'noreply@please.com',
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
        email: 'noreply@please.com',
        position: 'Директор',
        type: 'Заказчик'
    },
    {
        id: 5,
        avatar: avatarUrl,
        fullname: 'Аглафира Скотобойникова',
        contractor: 'ООО "Иванов и партнеры"',
        email: 'noreply@please.com',
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
const users = ref(originalUsers);
const searchString = ref('');

function deleteUser(userId){
    users.value = users.value.filter(user => {
        return user.id !== userId;
    });
}

function filterUsers(){
    users.value = originalUsers.filter(user => {
        return user.fullname.indexOf(searchString.value) !== -1 ||
            user.contractor.indexOf(searchString.value) !== -1 ||
            user.position.indexOf(searchString.value) !== -1 ||
            user.type.indexOf(searchString.value) !== -1;
    });
}
</script>
