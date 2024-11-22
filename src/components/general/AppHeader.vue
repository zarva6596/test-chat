<template>
    <header class="flex items-center justify-between py-4 px-3 shadow-header">
        <div class="flex items-center">
            <div v-for="i in 4" :key="i">{{ i }}</div>
        </div>

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