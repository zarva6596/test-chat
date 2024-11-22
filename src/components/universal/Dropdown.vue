<template>
    <div class="relative">
        <div>
            <slot name="toggle" />
        </div>

        <div class="absolute top-full right-0">
            <div class="shadow-sm rounded-sm p-2">
                <slot name="menu" />
            </div>
        </div>
    </div>
</template>