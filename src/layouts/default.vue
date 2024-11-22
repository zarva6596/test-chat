<script setup lang="ts">

</script>

<template>
    <div class="h-screen flex flex-col justify-between max-w-max mx-auto">
        <AppHeader />

        <main class="flex-auto">
            <slot />
        </main>

        <AppFooter />
    </div>
</template>