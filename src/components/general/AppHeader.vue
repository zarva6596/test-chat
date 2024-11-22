<script setup lang="ts">
import UserIcon from '../user/UserIcon.vue';
import UsersIconsRow from '../user/UsersIconsRow.vue';
</script>

<template>
    <header class="flex items-center justify-between py-4 px-3 shadow-header">
        <UsersIconsRow />

        <div class="flex flex-col items-center">
            <div class="text-lg text-dark-500">
                🦄 Test Progect for Vinod
            </div>

            <span class="text-xs text-gray-500">
                last seen 45 minutes ago
            </span>
        </div>

        <div>
            toggle
        </div>
    </header>
</template>