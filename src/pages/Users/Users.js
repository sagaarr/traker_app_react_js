import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import User from '../../components/User';
import { userListAction } from '../../utils/redux/actions/userListAction';
import './Users.css'
import Loader from '../../components/Loader';

const Users = () => {

    const dispatch = useDispatch();
    const {loading, error, data} = useSelector((state) => state.userListReducer);

    console.log(data)
    useEffect(() => {
        dispatch(userListAction())
    },[])

    return (
        <>
        {
            loading && !error &&  <Loader/>
        }
        <div className="container mt-top">
            <div className="align-user">

            
            {
                data.map((val, index) => (
                    <User key={index} record={val}/>
                ))
            }
            </div>
        </div>
        </>
    )
}

export default Users
