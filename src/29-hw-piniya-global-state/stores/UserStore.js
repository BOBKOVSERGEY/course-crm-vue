import {defineStore} from "pinia";
import {computed, ref} from "vue";

export const useUserStore = defineStore(
    'user',
    () => {
        const firstName = ref('');
        const lastName = ref('');
        const avatar = ref('');

        const fullName = computed(() => {
            return firstName.value + ' ' + lastName.value;
        })

        const logout = () => {
            alert('logout')
        }

        return {
            firstName,
            lastName,
            avatar,
            fullName,
            logout,
        }
    }
)