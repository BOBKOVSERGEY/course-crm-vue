import {isRef, ref, unref, watchEffect} from "vue";

export function useFetch(url) {

    const data = ref(null);
    const error = ref(null);

    function getData() {
        fetch(unref(url))
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                data.value = json;
            })
            .catch((error) => {
                error.value = error;
            });
    }

    if(isRef(url)) {
        watchEffect(() => {
            getData()
        })
    } else {
        getData();
    }

    return { data, error };
}