import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    loading: false,
}

// creamos el slice
export const uiSlice = createSlice({
    name: 'loading',
    initialState,

    reducers:{
        setLoading: (state, action ) => {
            state.loading = action.payload
        }
    }
})

//exportamos y desestructuramos los acction
export const {setLoading } =uiSlice.actions

// exportamos los reducers
export default uiSlice.reducer