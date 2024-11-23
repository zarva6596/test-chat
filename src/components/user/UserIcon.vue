<script setup lang="ts">
const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
} as const;

const { firstName, lastName, size } = defineProps<{
    firstName: string
    lastName: string
    size?: typeof SIZES[keyof typeof SIZES]
    online?: boolean
    showOnline?: boolean
}>()

const initials = computed(() => `${firstName.at(0)}${lastName.at(0)}`.toUpperCase())

const iconRadius = computed(() => {
    switch(size) {
        case SIZES.SMALL:
            return '1.5rem'
        case SIZES.LARGE:
            return '2.5rem'
        case SIZES.MEDIUM:
        default:
            return '2rem'    
    }
})

const fontSize = computed(() => {
    switch(size) {
        case SIZES.SMALL:
            return '.75rem'
        case SIZES.LARGE:
            return '1.5rem'
        case SIZES.MEDIUM:
        default:
            return '1rem'    
    }
})
</script>

<template>
    <div
        class="flex items-center justify-center rounded-full border border-white text-white bg-black"
        :style="{
            width: iconRadius,
            height: iconRadius
        }"
    >
        <span :style="{ fontSize }">{{ initials }}</span>

        <div
            v-if="online && showOnline"
            class="absolute h-2.5 w-2.5 bg-green-500 rounded-full border border-white right-0 bottom-0" 
        />
    </div>
</template>