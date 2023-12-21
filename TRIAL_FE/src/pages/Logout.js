import React from 'react'
import Auth from '../services/Auth'
import {Navigate} from 'react-router-dom'
import usePromise from "react-promise";

const Logout = ({children}) => {
    const {value, loading} = usePromise(Auth.logOut)
    if (loading) return null
    return <Navigate to="/Home"/>;

}
export default Logout