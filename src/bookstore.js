import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './Slice/BookSlice'; 

const store = configureStore({
    reducer: {
        book: bookReducer, 
    },
});

export default store;