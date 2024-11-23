<script setup>
import UserIcon from '@/components/user/UserIcon.vue'
import { useChatStore } from '@/store/useChatStore'

const { users } = useChatStore()
</script>

<template>
    <div class="flex items-center relative">
        <UserIcon
            v-for="({ firstName, lastName }, i) in users"
            :key="i"
            :first-name
            :last-name
            size="small"
            :style="`left: ${i}rem`"
            class="absolute"
        />
    </div>
</template>