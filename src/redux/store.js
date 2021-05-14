import {rerenderEntireTree} from "../index";

const CHANGE_TYPE_OF_SELL = 'CHANGE-TYPE-OF-SELL';
const CHANGE_TYPE_OF_BUILD = 'CHANGE-TYPE-OF-BUILD';
const CHANGE_COUNT_OF_ROOMS = 'CHANGE-COUNT-OF-ROOMS';
const ADD_IMG_INPUTS_FILEDS = 'ADD-IMG-INPUTS-FIELDS';


let store = {
    _state: {
        data:   [
            {
                id: 1,
                img: ['https://img.lunstatic.net/building-440x330/40188.jpg','https://img.lunstatic.net/building-440x330/40188.jpg','https://img.lunstatic.net/building-440x330/40188.jpg','https://img.lunstatic.net/building-440x330/40188.jpg'],
                type: 1,
                description: 'strias;kldasl;kdjhkdskjasdkldjklaskdjkdkhladslkhasd;asdalskdng',
                longDescription: 'longString  lofadsndadjasdnsadaskdljad;ibjasdjadabdn;dsaskdfjksfnsw;newpijfbwihofcbwdicwoifwowhwejofbjj',
                price: '111 211$',
                address: 'Кри8'
            },
            {
                id: 2,
                img: ['https://img.lunstatic.net/building-440x330/40188.jpg'],
                type: 1,
                description: 'string',
                longDescription: 'longString',
                price: '111 211$',
                address: 'Кри8'
            },
            {
                id: 3,
                img: ['https://img.lunstatic.net/building-440x330/40188.jpg'],
                type: 2,
                description: 'string',
                longDescription: 'longString',
                price: '111 111$',
                address: 'Крипякча 8'
            },
            {
                id: 4,
                img: ['https://img.lunstatic.net/building-440x330/40188.jpg'],
                type: 3,
                description: 'ring',
                longDescription: 'longString',
                price: '111 211$',
                address: 'Крипякевича 2'
            }
        ],
        imgInputsFields: 1,
        addItem: {
            id: '',
            img: '',
            typeSell: '',
            typeBuild: '',
            countRooms: '',
            description: '',
            longDescription: '',
            price: '',
            address: ''
        }
    },
    getState() {
      return this._state;
    },
    dispatch(action) {
        debugger;
        if (action.type === ADD_IMG_INPUTS_FILEDS) {
            this._state.imgInputsFields++;
            rerenderEntireTree(this);
        } else if (action.type === CHANGE_TYPE_OF_SELL) {
            this._state.addItem.typeSell = action.info;
            rerenderEntireTree(this);
        } else if (action.type === CHANGE_TYPE_OF_BUILD) {
            this._state.addItem.typeBuild = action.info;
            rerenderEntireTree(this);
        } else if (action.type === CHANGE_COUNT_OF_ROOMS) {
            this._state.addItem.countRooms = action.info;
            rerenderEntireTree(this);
        }

    }
};


export const addImgInputsFieldsActionCreator = () => ({type: ADD_IMG_INPUTS_FILEDS});
export const changeTypeOfSellActionCreator = (text) => ({type: CHANGE_TYPE_OF_SELL, info: text});
export const changeTypeOfBuildActionCreator = (text) => ({type: CHANGE_TYPE_OF_BUILD, info: text});
export const changeCountOfRoomsActionCreator = (text) => ({type: CHANGE_COUNT_OF_ROOMS, info: text});


export default store;
window.store = store;