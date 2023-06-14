import Icon from "@/27-hw-plugins/components/Icon.vue";


export default {
    install(app) {
        app.component('Icon', Icon);
        app.directive("focus", (el, binding, vnode) => {
            el.focus()
        });
    }
}