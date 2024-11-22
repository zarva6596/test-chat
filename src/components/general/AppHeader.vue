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
            <template #toggle>...</template>

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