import { configureStore } from '@reduxjs/toolkit'
import { cityReducer } from './reducers/cityReducer'

const store = configureStore({
    reducer: {
        city: cityReducer
    }
})

export default store