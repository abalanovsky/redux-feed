import {createReducer} from "@reduxjs/toolkit";

const defaultState = {
    posts: [
        {
            name: 'Noah',
            username: 'hinoah',
            id: 1,
            img: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
            date: new Date(2023, 3, 7, 8, 43, 54).toLocaleString(),
            content: 'As an avid traveler, I\'ve had the privilege of exploring many different countries and cultures.' +
                ' One of my favorite destinations has to be Japan, with its unique blend of ancient traditions and modern technology.' +
                ' From the bustling streets of Tokyo to the tranquil gardens of Kyoto, Japan has something to offer for every kind of traveler. ' +
                'The food is also absolutely amazing - I highly recommend trying sushi and ramen from a local restaurant!\n',
        },
        {
            name: 'Emma',
            username: 'em.ma',
            id: 2,
            img: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
            date: new Date(2023, 3, 7, 17,10,1).toLocaleString(),
            content: 'As a lifelong learner, I\'m always seeking out new knowledge and experiences. ' +
                'One of my favorite ways to do this is by reading books from a wide range of genres and authors.' +
                ' Recently, I\'ve been particularly interested in historical fiction, which allows me to learn about ' +
                'different time periods and cultures while also enjoying a good story. Some of my favorites include ' +
                '"The Nightingale" by Kristin Hannah and "The Book Thief" by Markus Zusak - both of which are incredibly' +
                ' powerful and moving tales.',
        },
        {
            name: 'Sarah',
            username: 'spaulson',
            id: 3,
            img: 'https://cdn-icons-png.flaticon.com/512/3177/3177440.png',
            date: new Date(2023, 3, 7, 21,20,33).toLocaleString(),
            content: 'As a nature enthusiast, I love spending time outdoors and exploring the natural world. ' +
                'One of my favorite activities is hiking, and there\'s no shortage of beautiful trails to discover' +
                ' in my home state of Colorado. Whether you\'re looking for a challenging mountain climb or a leisurely' +
                ' stroll through a wildflower-filled meadow, Colorado has it all. Plus, the stunning vistas of the' +
                ' Rocky Mountains never fail to take my breath away.',
        },
    ],
}


export const reducer = createReducer(defaultState, builder => {
    builder
        .addCase('ADD_POST', (state, action) => {
            const id = Math.floor(Math.random() * 9999)
            state.posts.push({...action.payload, id})
        })
        .addCase('DELETE_POST', (state, action) => {
            state.posts = state.posts.filter(post => action.payload.id !== post.id)
        })
        .addCase('UPDATE_POST', (state, action) => {
            const postToChangeIndex = state.posts.findIndex(post => post.id === action.payload.id)
            state.posts[postToChangeIndex].content = action.payload.content
            state.posts[postToChangeIndex].date = new Date(Date.now()).toLocaleString()
        })
})
