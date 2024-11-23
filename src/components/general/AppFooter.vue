<script setup lang="ts">
import { useChatStore } from '~/store/useChatStore';

const { authLogin } = useChatStore()
const { messages } = storeToRefs(useChatStore())

const message = ref('')

const addMailMark = () => message.value = `${message.value}@`

const sendMessage = () => {
    const date = new Date()

    let hours = date.getHours()
    const minutes = date.getMinutes()
    const ampm = hours >= 12 ? 'PM' : 'AM'

    hours = hours % 12
    hours = hours ? hours : 12

    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    messages.value.push({
        message: message.value,
        authLogin,
        date: `${day}/${month}/${year}`,
        time: `${hours}:${minutes} ${ampm}`
    })

    message.value = ''
}

const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
        sendMessage()
    }
}
</script>

<template>
    <footer class="p-4 shadow-footer">
        <div class="flex justify-between">
            <div class="flex items-center flex-auto mr-2">
                <Icon
                    name="uil:smile"
                    class="mr-2 mt-0.5 cursor-pointer hover:text-primary transition-all duration-500"
                />


                <input
                    v-model="message"
                    type="text"
                    class="w-full outline-none placeholder:text-sm placeholder:font-normal"
                    placeholder="Start typing..."
                    @keydown="handleKeydown"
                >
            </div>

            <div class="flex items-center">
                <div
                    class="mr-2 cursor-pointer hover:text-primary transition-all duration-500"
                    @click="addMailMark"
                >
                    @
                </div>

                <Icon
                    name="fa:paper-plane"
                    class="text-gray-500 cursor-pointer hover:text-primary transition-all duration-500"
                    @click="sendMessage"
                />
            </div>
        </div>
    </footer>
</template>