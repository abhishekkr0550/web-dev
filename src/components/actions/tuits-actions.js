import * as service from '../services/tuits-service';

export const CREATE_TUIT = 'CREATE_TUIT';
export const FIND_ALL_TUITS = 'FIND_ALL_TUITS';
export const UPDATE_TUIT = 'UPDATE_TUIT';
export const DELETE_TUIT = 'DELETE_TUIT';

export const createTuit = async (dispatch, tuit) => {
    const saveNewTuit = {
        data: tuit.tuit,
        // _id: (new Date()).getTime() + '',

        name: tuit.tuit,
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
    const newTuit = await service.createTuit(saveNewTuit);
    console.log("Testing new tuit");
    console.log(newTuit);

    dispatch({
        type: CREATE_TUIT,
        newTuit
    });
}

export const findAllTuits = async (dispatch) => {
    const tuits = await service.findAllTuits();
    dispatch({
        type: FIND_ALL_TUITS,
        tuits
    });
}

export const updateTuit = async (dispatch, tuit) => {
    await service.updateTuit(tuit);
    dispatch({
        type: UPDATE_TUIT,
        tuit
    });
}

export const deleteTuit = async (dispatch, tuit) => {
    await service.deleteTuit(tuit);
    dispatch({
        type: DELETE_TUIT,
        tuit
    })
}


