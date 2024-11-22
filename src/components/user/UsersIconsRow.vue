<script setup>
import UserIcon from '@/components/user/UserIcon.vue'

const users = [
    {
        firstName: 'Roman',
        lastName: 'Zarva',
    },
    {
        firstName: 'Mukola',
        lastName: 'Getman'

    },
    {
        firstName: 'Mukhailo',
        lastName: 'Koval'
    },
    {
        firstName: 'Denus',
        lastName: 'Pustolit'
    },
]
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