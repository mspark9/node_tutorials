import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "../../utils/jwtDecode";

const initialToken = localStorage.getItem('token')
const decodedToken = initialToken ? jwtDecode(initialToken) : null;

const initialState = {
    token: initialToken || null,
    user: decodedToken || null,
    isAuthenticated: !!initialToken,
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
            state.isAuthenticated = true
            state.user = jwtDecode(action.payload)
            localStorage.setItem('token', action.payload)
        },
        clearToken: (state) => {
            state.token = null
            state.isAuthenticated = false
            state.user = null
            localStorage.removeItem('token')
        },
    }
})

export const { setToken, clearToken } = loginSlice.actions
export default loginSlice.reducer
