<script setup lang="ts">
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

        <Dropdown>
            <template #toggle>
                <div class="group flex items-center gap-0.5 h-4">
                    <div
                        v-for="i in 3"
                        :key="i"
                        class="rounded-full h-1 w-1 bg-gray-400 group-hover:bg-gray-500 transition-all duration-500"
                    />
                </div>
            </template>

            <template #menu>
                <div class="flex flex-col items-center">
                    <div
                        class="toggle-menu-item"
                    >
                        Add new user
                    </div>

                    <div class="toggle-menu-item">Log Out</div>
                </div>
            </template>
        </Dropdown>
    </header>
</template>

<style>
.toggle-menu-item {
    @apply hover:bg-blue-100/50 cursor-pointer w-full text-center p-2 transition-all
        duration-500;
}
</style>