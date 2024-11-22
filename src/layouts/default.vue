<script setup lang="ts">
import AppHeader from '../components/general/AppHeader.vue';
</script>

<template>
    <div>
        <AppHeader />

        <main>
            <slot />
        </main>

        <AppFooter />
    </div>
</template>