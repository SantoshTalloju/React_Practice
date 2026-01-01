// import {createStore} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './counter';

// const INITIAL_VALUE = {
//     counter: 0
// }
// const counterReducer = (store = INITIAL_VALUE, action) => {
//     switch(action.type) {
//         case 'INCREMENT':
//             return {
//                 ...store,
//                 counter: store.counter + 1
//             };
//         case 'DECREMENT':
//             return {
//                 ...store,
//                 counter: store.counter - 1
//             };
//         case 'ADD':
//             return {
//                 ...store,
//                 counter: store.counter + action.payload
//             };
//         case 'SUBTRACT':
//             return {
//                 ...store,
//                 counter: store.counter - action.payload
//             };
//         default:
//             return store;
//     }
// }

// const counterStore = createStore(counterReducer);
const counterStore = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
});

export default counterStore;