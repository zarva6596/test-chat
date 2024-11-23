<script setup lang="ts">
import MessageRow from '~/components/chat/MessageRow.vue';
import { useChatStore } from '~/store/useChatStore';

const { messages } = storeToRefs(useChatStore())
</script>

<template>
    <div class="p-6">
        <MessageRow
            v-for="(item, i) in messages"
            :item="item"
        />
    </div>
</template>