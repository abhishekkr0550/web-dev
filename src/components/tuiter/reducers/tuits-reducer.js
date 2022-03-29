import tuits from "../data/tuits.json";


const tuitsReducer = (state = tuits, action) => {
    switch (action.type) {
        case 'create-tuit':
            const newTuit = {
                data: action.tuit,
                _id: (new Date()).getTime() + '',

                name: 'New Tuit Creator',
                date: (new Date() + '').substring(3, 10),
                title: 'New Tuit through Reducer',
                image: '../../images/tesla.jpeg',
                profile: '../../images/abhishek.jpeg',
                heading: 'This is a brand new Tuit',
                coment: '550',
                likes: 550,
                retuit: '550',
                upload: '550',
                liked: false

                }

            return [
                newTuit,
                ...state,
            ];

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
            return tuits
    }
}

export default tuitsReducer;