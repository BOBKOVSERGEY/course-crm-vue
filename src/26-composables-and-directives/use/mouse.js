import {ref} from "vue";
import {useEventHanler} from "@/26-composables-and-directives/use/eventHendler";

export function useMouse() {
    const x = ref(0)
    const y = ref(0)

    function update(event) {
        x.value = event.pageX
        y.value = event.pageY
    }

    useEventHanler('mousemove', window, update)

    return {x, y}
}
