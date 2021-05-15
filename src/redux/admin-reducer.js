

const CHANGE_TYPE_OF_SELL = 'CHANGE-TYPE-OF-SELL';
const CHANGE_TYPE_OF_BUILD = 'CHANGE-TYPE-OF-BUILD';
const CHANGE_COUNT_OF_ROOMS = 'CHANGE-COUNT-OF-ROOMS';
const ADD_IMG_INPUTS_FIELDS = 'ADD-IMG-INPUTS-FIELDS';

export const adminReducer = (state, action) => {


    switch(action.type) {
        case ADD_IMG_INPUTS_FIELDS:
            state.imgInputsFields++;
            return state;
        case CHANGE_TYPE_OF_SELL:
            state.addItem.typeSell = action.info;
            return state;
        case CHANGE_TYPE_OF_BUILD:
            state.addItem.typeBuild = action.info;
            return state;
        case CHANGE_COUNT_OF_ROOMS:
            state.addItem.countRooms = action.info;
            return state;
        default:
            return state;

    }
};