import {rerenderEntireTree} from "../index";

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
    addImgInputsFields() {
        this._state.imgInputsFields++;
        rerenderEntireTree(this._state);
    },
    changeTypeOfSell(event) {
        this._state.addItem.typeSell = event.target.innerHTML;
        rerenderEntireTree(this._state);
    },
    changeTypeOfBuild(event) {
        this._state.addItem.typeSell = event.target.innerHTML;
        rerenderEntireTree(this._state);
    },
    changeCountRooms(event) {
        this._state.addItem.typeSell = event.target.innerHTML;
        rerenderEntireTree(this._state);
    },
    dispatch(action) {
        if (action.type === 'ADD-IMG-INPUTS-FIELDS') {

        } else if (action.type === 'CHANGE-TYPE-OF-SELL') {

        } else if (action.type === 'CHANGE-TYPE-OF-BUILD') {

        } else if (action.type === 'CHANGE-TYPE-OF-ROOMS') {

        }

    }
};




export default store;
window.store = store;