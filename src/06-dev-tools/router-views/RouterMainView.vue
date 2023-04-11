<template>
    <MainContent></MainContent>
    <RightBar></RightBar>
</template>

<script>
import MainContent from '@/06-dev-tools/components/MainContent.vue';
import { defineAsyncComponent } from 'vue'

export default {
    components: {
        MainContent,
        RightBar: defineAsyncComponent(() => import("@/06-dev-tools/components/RightBar.vue"))
    }
}
</script>
