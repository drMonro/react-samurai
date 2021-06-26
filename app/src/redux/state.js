const SUBMIT_POST = 'SUBMIT-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
    },

    dispatch(action) {
        switch (action.type) {
            case 'SUBMIT-POST':
                this.submitPost();
                break;
            case 'UPDATE-NEW-POST-TEXT':
                this.updateNewPostText(action.newText);
                break;
        }
    },
};

export const submitPostActionCreator = () => {
    return {
        type: SUBMIT_POST,
    }
};

export const updateNewPostTextActionCreator = (newPostText) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newPostText,
    }
};


export default store;
