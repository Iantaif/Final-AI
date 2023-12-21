import React from 'react'
import Auth from '../services/Auth'
import {Navigate} from 'react-router-dom'
import usePromise from "react-promise";

const PrivateRoute = ({children}) => {
    const {value, loading} = usePromise(Auth.isLoggedIn)
    if (loading) return null
    return value ? children : <Navigate to="/Login"/>;

}
export default PrivateRoute