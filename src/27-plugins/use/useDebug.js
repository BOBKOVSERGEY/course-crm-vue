import {onMounted, watch,} from "vue";

export function useDebug(param) {
    watch(() => param.value, (newParam) => {
        console.log(newParam)
    })
    onMounted(() => {
        console.log(param.value)
    })
}