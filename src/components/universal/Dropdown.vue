<script setup lang="ts">
import { useToggle, onClickOutside } from '@vueuse/core'

const el = ref()

const [showMenu, toggleMenu] = useToggle(false)

const close = () => toggleMenu(false)

onClickOutside(el, close)
</script>

<template>
    <div ref="el" class="relative">
        <div
            class="cursor-pointer"
            @click="toggleMenu(!showMenu)"
        >
            <slot name="toggle" />
        </div>

        <div
            class="z-10 w-max absolute top-full right-0 transition-all duration-500"
            :class="showMenu ? 'opacity-100 visible' : 'opacity-0 invisible'"
        >
            <div
                class="border border-gray-100 shadow-sm rounded-lg overflow-hidden bg-white" 
                @click="close"
            >
                <slot name="menu" />
            </div>
        </div>
    </div>
</template>