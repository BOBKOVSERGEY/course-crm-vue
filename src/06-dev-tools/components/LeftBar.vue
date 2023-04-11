<template>
    <aside class="left-bar">
        <div class="left-bar__expander">
            <a @click.prevent="toggle"
               class="button button_no-text button_size_xs button_rounded button_color_secondary" href="#"
            >
                <svg class="icon icon_type_chevron-left"
                     v-if="collapsed"
                >
                    <use xlink:href="@/assets/i/sprite/sprite.svg#chevron-left"></use>
                </svg>
                <svg class="icon icon_type_chevron-right"
                     v-else
                >
                    <use xlink:href="@/assets/i/sprite/sprite.svg#chevron-right"></use>
                </svg>
            </a>
        </div>
        <div class="left-bar__inner">
            <div class="left-bar__logo-wrapper"><a class="logo"><img src="@/assets/i/logo/logo-light.svg" alt="OpenCrm"/></a>
            </div>
            <MainMenu></MainMenu>
        </div>
    </aside>
</template>

<script setup>
    import MainMenu from "@/06-dev-tools/components/MainMenu.vue";
    import { ref } from 'vue'

    const collapsed = ref(true);

    function toggle(){
        collapsed.value = !collapsed.value;
    }
</script>

<style scoped>

</style>
