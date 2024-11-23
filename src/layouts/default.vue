<script setup lang="ts">

</script>

<template>
    <div class="bg-blue-100/50 h-screen">
        <div class="h-full flex flex-col justify-between max-w-max mx-auto bg-white">
            <AppHeader />

            <main class="flex-auto overflow-auto">
                <slot />
            </main>

            <AppFooter />
        </div>
    </div>
</template>