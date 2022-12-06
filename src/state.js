export const state = {
    profilePage: {
        avatarData: [{
            id: 1,
            src: 'https://klike.net/uploads/posts/2019-03/medium/1551511784_4.jpg',
            name: 'Anita',
            age: '34',
            zodiac: 'Libra',
            professional: 'Front-end Developer',
        },],
        postData: [
            {
                id: 1,
                src: 'https://vibir.ru/wp-content/uploads/2019/10/avatarka-dlya-zhenshhin-glavnye-pravila-vybora.jpg',
                description: 'Hi!',
                countLike: 15,
                countDislike: 1,
            },
            {
                id: 2,
                src: 'https://vibir.ru/wp-content/uploads/2019/10/avatarka-dlya-zhenshhin-glavnye-pravila-vybora.jpg',
                description: 'How are you?', countLike: 10, countDislike: 0,
            },
            {
                id: 3,
                src: 'https://vibir.ru/wp-content/uploads/2019/10/avatarka-dlya-zhenshhin-glavnye-pravila-vybora.jpg',
                description: 'I\'m OK, and you?', countLike: 5, countDislike: 0,
            },
        ],
    },
    messagePage: {
        dialogsData: [
            {id: '1', src: 'https://klike.net/uploads/posts/2019-03/medium/1551511784_4.jpg', message: 'Hi!'},
            {id: '2', src: 'https://klike.net/uploads/posts/2019-03/1551511808_5.jpg', message: 'Hi'},
            {id: '3', src: 'https://klike.net/uploads/posts/2019-03/medium/1551511784_4.jpg', message: 'I love you'},
            {id: '4', src: 'https://klike.net/uploads/posts/2019-03/1551511808_5.jpg', message: 'Me too'},
        ],
        correspondentData: [
            {id: '1', name: 'Anna', src: 'https://klike.net/uploads/posts/2019-03/1551511823_2.jpg'},
            {id: '2', name: 'Dima', src: 'https://klike.net/uploads/posts/2019-03/1551515594_15.jpg'},
            {id: '3', name: 'Milana', src: 'https://klike.net/uploads/posts/2019-03/1551511808_5.jpg'},
            {id: '4', name: 'Diana', src: 'https://klike.net/uploads/posts/2019-03/medium/1551511866_11.jpg'},
            {id: '5', name: 'Alex', src: 'https://klike.net/uploads/posts/2019-03/1551511862_19.jpg'},
            {id: '6', name: 'Esmi', src: 'https://klike.net/uploads/posts/2019-03/medium/1551511789_7.jpg'},
        ],
    }
}