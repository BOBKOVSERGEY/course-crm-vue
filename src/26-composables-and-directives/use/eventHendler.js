import {onMounted, onUnmounted} from "vue";

export function useEventHanler(event, target, callback) {
    onMounted(() => target.addEventListener(event, callback))
    onUnmounted(() => target.removeEventListener(event, callback));
}
