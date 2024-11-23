export const useChatStore = defineStore('chat-store', () => {
    const users = [
        {
            login: 'zarva',
            firstName: 'Roman',
            lastName: 'Zarva',
        },
        {
            login: 'kola',
            firstName: 'Mukola',
            lastName: 'Getman'
    
        },
        {
            login: 'miha',
            firstName: 'Mukhailo',
            lastName: 'Koval'
        },
        {
            login: 'den',
            firstName: 'Denus',
            lastName: 'Pustolit'
        },
    ]

    return {
        users,
    }
})