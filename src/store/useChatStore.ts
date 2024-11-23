export const useChatStore = defineStore('chat-store', () => {
    const authLogin = 'zarva'

    const users = [
        {
            login: 'zarva',
            firstName: 'Roman',
            lastName: 'Zarva',
        },
        {
            login: 'kola',
            firstName: 'Mukola',
            lastName: 'Getman',
        },
        {
            login: 'miha',
            firstName: 'Mukhailo',
            lastName: 'Koval',
        },
        {
            login: 'den',
            firstName: 'Denus',
            lastName: 'Pustolit'
        },
        {
            login: 'aubrey',
            firstName: 'Andrey',
            lastName: 'Roduch',
            online: true,
        },
    ]

    const messages = ref([
        {
            message: 'Hi team 👋',
            date: '23/11/2024',
            time: '02:22 AM',
            authLogin: 'zarva'
        },
        {
            message: 'Anyone on for lunch today',
            date: '23/11/2024',
            time: '02:22 AM',
            authLogin: 'zarva'
        },
        {
            message: 'I’m down! Any ideas??',
            date: '23/11/2024',
            time: '03:41 AM',
            authLogin: 'den'
        },
        {
            message: 'I am down for whatever!',
            date: '23/11/2024',
            time: '03:42 AM',
            authLogin: 'zarva'
        },
        {
            message: 'I was thinking the cafe downtown',
            date: '23/11/2024',
            time: '03:44 AM',
            authLogin: 'aubrey'
        },
        {
            message: 'But limited vegan options @Janet!',
            date: '23/11/2024',
            time: '03:45 AM',
            authLogin: 'aubrey'
        },
        {
            message: 'Agreed',
            date: '23/11/2024',
            time: '03:45 AM',
            authLogin: 'zarva'
        },
        {
            message: 'That works- I was actually planning to get a smoothie anyways 👍',
            date: '23/11/2024',
            time: '03:47 AM',
            authLogin: 'kola'
        },
        {
            message: 'On for 12:30 PM then ?',
            date: '23/11/2024',
            time: '03:47 AM',
            authLogin: 'miha'
        },
    ])

    return {
        users,
        authLogin,
        messages,
    }
})