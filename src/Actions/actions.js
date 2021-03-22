import { LOAD_DATA } from './types';

export const loadData = () => dispatch => {
    console.log('action called')
    const myData= [
        {
            "id": 1,
            "title": "First Video",
            "vOwner": "ChanelX"
        },
        {
            "id": 2,
            "title": "First Video",
            "vOwner": "ChanelX"
        },
        {
            "id": 3,
            "title": "First Video",
            "vOwner": "ChanelX"
        },
        {
            "id": 4,
            "title": "First Video",
            "vOwner": "ChanelX"
        },
        {
            "id": 5,
            "title": "First Video",
            "vOwner": "ChanelX"
        },
        {
            "id": 6,
            "title": "First Video",
            "vOwner": "ChanelX"
        },
    ]
    dispatch({
        type: LOAD_DATA,
        payload: myData,
    })
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => res.json())
    //     .then(data => dispatch({
    //         type: LOAD_DATA,
    //         payload: data,
    //     }))
}