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
        const value = event.target.innerHTML;
        this._state.addItem.typeSell = value;
        rerenderEntireTree(this._state);
    },
    changeTypeOfBuild(event) {
        const value = event.target.innerHTML;
        this._state.addItem.typeSell = value;
        rerenderEntireTree(this._state);
    },
    changeCountRooms(event) {
        const value = event.target.innerHTML;
        this._state.addItem.typeSell = value;
        rerenderEntireTree(this._state);
    },

};



// export let changeTypeOfSell = event => {
//     const value = event.target.innerHTML;
//     state.addItem.typeSell = value;
//     rerenderEntireTree(state);
// };

// export let changeTypeOfBuild = event => {
//     const value = event.target.innerHTML;
//     state.addItem.typeBuild = value;
//     rerenderEntireTree(state);
// };

// export let changeCountRooms = event => {
//     const value = event.target.innerHTML;
//     state.addItem.countRooms = value;
//     rerenderEntireTree(state);
// };


export default store;
window.store = store;