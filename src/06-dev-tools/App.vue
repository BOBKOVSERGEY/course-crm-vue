<template>
    <div class="app__wrapper app__wrapper_page-type_inner">
        <LeftBar></LeftBar>
        <div class="app__main">
            <RouterMainView/>
        </div>
        <PageNotifications/>
    </div>

    <Footer></Footer>
</template>

<script setup>
    import Footer from '@/06-dev-tools/components/Footer.vue';
    import LeftBar from '@/06-dev-tools/components/LeftBar.vue';
    import PageNotifications from "@/06-dev-tools/components/PageNotifications.vue";
    import RouterMainView from "@/06-dev-tools/router-views/RouterMainView.vue";
</script>
