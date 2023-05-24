<template>
  <div class="app">
    <div class="app__wrapper app__wrapper_page-type_inner">
      <LeftBar />
      <div class="app__main">
        <div class="main-content">
          <MainContentHead />
          <div class="main-content__body">
            <Search />
            <Comments
            />
          </div>
        </div>
        <ModalAside />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>

import Footer from "@/21-hw-pagination/components/Footer.vue";
import LeftBar from "@/21-hw-pagination/components/LeftBar.vue";
import ModalAside from "@/21-hw-pagination/components/ModalAside.vue";
import MainContentHead from "@/21-hw-pagination/components/MainContentHead.vue";
import Search from "@/21-hw-pagination/components/Search.vue";
import Comments from "@/21-hw-pagination/components/table/Comments.vue";
import {onMounted, ref} from "vue";


</script>