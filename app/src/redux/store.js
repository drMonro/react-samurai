import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

// const SUBMIT_POST = 'SUBMIT-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const SUBMIT_NEW_MESSAGE = 'SUBMIT-NEW-MESSAGE';
// const UPDATE_NEW_MESSAGE_DATA = 'UPDATE-NEW-MESSAGE-DATA';

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
    // submitPost() {
    //     const newPost = {
    //         message: this._state.profilePage.newPostText,
    //     };
    //     this._state.profilePage.postsData.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },
    // submitNewMessage() {
    //     const newMessage = {
    //         message: this._state.dialogsPage.newMessage,
    //     };
    //     this._state.dialogsPage.messagesData.push(newMessage);
    //     this._state.dialogsPage.newMessage = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewMessageData(newData) {
    //     this._state.dialogsPage.newMessage = newData;
    //     this._callSubscriber(this._state);
    // },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        // console.log(action)
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
        // switch (action.type) {
        //     case 'SUBMIT-POST':
        //         this.submitPost();
        //         break;
        //     case 'UPDATE-NEW-POST-TEXT':
        //         this.updateNewPostText(action.newText);
        //         break;
        //     case 'SUBMIT-NEW-MESSAGE':
        //         this.submitNewMessage();
        //         break;
        //     case 'UPDATE-NEW-MESSAGE-DATA':
        //         this.updateNewMessageData(action.messageData);
        //         break;
        //     default:
        //         break;
        // }
    },
};






export default store;
