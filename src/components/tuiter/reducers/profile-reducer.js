import ProfileData from '../data/profile.json'
import tuits from "../data/tuits.json";

const profileReducer = (state = ProfileData, action) => {
    switch (action.type) {
        case 'change-profile':
            console.log(action);
            const newProfile = {
                ...state, ... action.profileChange
            };
            console.log(newProfile);
            return newProfile;

        default:
            return state;
    }
}

export default profileReducer;