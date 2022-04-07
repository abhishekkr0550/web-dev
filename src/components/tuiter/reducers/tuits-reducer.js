// import tuits from "../data/tuits.json";
import {DELETE_TUIT, FIND_ALL_TUITS, CREATE_TUIT, UPDATE_TUIT} from "../../actions/tuits-actions";

const tuitsReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_ALL_TUITS:
            return action.tuits;

        case DELETE_TUIT:
            return state.filter(
                tuit => tuit._id !== action.tuit._id);

        case CREATE_TUIT:
            console.log("Create tuit reducer")
            console.log(action.newTuit);
            // const saveNewTuit = {
            //     data: action.newTuit.tuit,
            //     _id: (new Date()).getTime() + '',
            //
            //     name: 'New Tuit Creator',
            //     date: (new Date() + '').substring(3, 10),
            //     title: 'New Tuit through Reducer',
            //     image: '../../images/tesla.jpeg',
            //     profile: '../../images/abhishek.jpeg',
            //     heading: 'This is a brand new Tuit',
            //     coment: '550',
            //     likes: 550,
            //     retuit: '550',
            //     upload: '550',
            //     liked: false
            //
            // }
            return [
                ...state,
                action.newTuit
            ];



        case UPDATE_TUIT:
            return state.map(
                tuit => tuit._id === action.tuit._id ?
                    action.tuit : tuit);

        // case 'create-tuit':
        //     const newTuit = {
        //         data: action.tuit,
        //         _id: (new Date()).getTime() + '',
        //
        //         name: 'New Tuit Creator',
        //         date: (new Date() + '').substring(3, 10),
        //         title: 'New Tuit through Reducer',
        //         image: '../../images/tesla.jpeg',
        //         profile: '../../images/abhishek.jpeg',
        //         heading: 'This is a brand new Tuit',
        //         coment: '550',
        //         likes: 550,
        //         retuit: '550',
        //         upload: '550',
        //         liked: false
        //
        //         }
        //
        //     return [
        //         newTuit,
        //         ...state,
        //     ];

        case 'delete-tuit':
            console.log(action.post._id);
            console.log(state);
            return state.filter(
                tuit => tuit._id !== action.post._id);

        case 'like-tuit':
            return state.map(tuit => {

                if(tuit._id === action.post._id) {
                    if(tuit.liked === true) {
                        tuit.liked = false;
                        tuit.likes--;
                    } else {

                        tuit.liked = true;
                        tuit.likes++;
                    }
                    return tuit;
                } else {
                    return tuit;
                }
            });

        default:
            return state;
    }
}

export default tuitsReducer;