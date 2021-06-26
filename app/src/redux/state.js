import {rerenderDOM} from "../render";

const state = {
    profilePage: {
        postsData: [
            {message: 'Hello!'},
            {message: 'Hi!'},
            {message: "What's up!"},
        ],
        newPostText: ''
    },
    dialogsPage: {
        messagesData : [
            {message: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'},
            {message: 'Lorem ipsum dolor sit amet.'},
            {message: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'},
        ],
        recipientsData : [
            {id: 1, name: 'Olga'},
            {id: 2, name: 'Toha'},
            {id: 3, name: 'Alex'},
            {id: 4, name: 'Marta'},
        ],
    },
}

export const submitPost = () => {
    const newPost = {
        message: state.profilePage.newPostText,
    };
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderDOM(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText =  newText;
    rerenderDOM(state);
}


export default state;
