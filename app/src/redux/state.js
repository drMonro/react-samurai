import {rerenderDOM} from "../render";

const state = {
    profilePage: {
        postsData: [
            {message: 'Hello!'},
            {message: 'Hi!'},
            {message: "What's up!"},
        ],
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

export const submitPost = (postMessage) => {
    const newPost = {
        message: postMessage,
    };
    state.profilePage.postsData.push(newPost);
    rerenderDOM(state);
}

export default state;
