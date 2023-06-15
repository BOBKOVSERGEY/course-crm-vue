import {onMounted, onUnmounted, unref} from "vue";

export function useEventHanler(event, target, callback) {
    onMounted(() => unref(target).addEventListener(event, callback))
    onUnmounted(() => unref(target).removeEventListener(event, callback));
}
