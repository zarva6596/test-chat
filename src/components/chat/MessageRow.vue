<script setup lang="ts">
import UserIcon from '~/components/user/UserIcon.vue';
import { useChatStore } from '~/store/useChatStore';

const { users, authLogin } = useChatStore()

interface Item {
    message: string
    date: string
    time: string
    authLogin: string
    online?: boolean
}

const { item } = defineProps<{ item: Item }>()

const user = computed(() => users.find(user => user.login === item.authLogin))
const itIsAuth = computed(() => user.value?.login === authLogin)
</script>

<template>
    <div
        class="flex mb-1.5"
        :class="itIsAuth ? 'justify-end' : 'justify-start'"
    >
        <div class="flex">
            <UserIcon
                v-if="user && !itIsAuth"
                :first-name="user?.firstName"
                :last-name="user?.lastName"
                :online="user.online"
                show-online
                class="mr-4 relative"
            />

            <div
                class="rounded-md py-1 px-2 relative"
                :class="[itIsAuth ? 'bg-primary text-white' : 'bg-gray-light text-dark']"
            >
                <div
                    v-if="itIsAuth"
                    class="absolute top-0 left-full h-4 w-4 bg-primary -ml-1.5"
                >
                    <div class="absolute left-1.5 top-1.5 rounded-t-full bg-white h-3 w-5" />
                </div>

                <div
                    v-if="!itIsAuth"
                    class="absolute top-0 right-full h-4 w-4 bg-gray-light -mr-1.5"
                >
                    <div class="absolute right-1.5 top-1.5 rounded-t-full bg-white h-3 w-4" />
                </div>

                <div class="mr-16 flex flex-col max-w-60">
                    <span
                        v-if="!itIsAuth"
                        class="capitalize text-sm font-semibold"
                    >
                        {{ item.authLogin }}
                    </span>

                    <span class="text-sm font-normal">{{ item.message }}</span>
                </div>

                <div class="flex justify-end text-xs font-light">
                    {{ item.time }}
                </div>
            </div>
        </div>
    </div>
</template>