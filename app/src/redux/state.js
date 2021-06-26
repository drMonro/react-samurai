const store = {
    _state: {
        profilePage: {
            postsData: [
                {message: 'Hello!'},
                {message: 'Hi!'},
                {message: "What's up!"},
            ],
            newPostText: ''
        },
        dialogsPage: {
            messagesData: [
                {message: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'},
                {message: 'Lorem ipsum dolor sit amet.'},
                {message: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'},
            ],
            recipientsData: [
                {id: 1, name: 'Olga'},
                {id: 2, name: 'Toha'},
                {id: 3, name: 'Alex'},
                {id: 4, name: 'Marta'},
            ],
        },
    },
    get state() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State imposed')
    },
    submitPost() {
        const newPost = {
            message: this._state.profilePage.newPostText,
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}


export default store;
