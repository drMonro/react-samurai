import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

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
            newMessage: '',
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
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    },
};






export default store;
