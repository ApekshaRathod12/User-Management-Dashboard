import React from 'react';
import DisplayUsers from './DisplayUsers';
import { addUser } from '../store/slice/userSlice';
import { useDispatch } from 'react-redux';
import { fakeUserData } from '../api';
import DeleteAllUsers from './DeleteAllUsers';

const UserDetails = () => {

    const dispatch = useDispatch()

    const addNewUSer = (name) => {
        dispatch(addUser(name))
    }

  return (
    <div className='container'>
        <h1 className='text-center' style={{ color : '#576CBC'}}>User Management Dashboard</h1>
        <div className='row text-center d-flex justify-content-around p-2 align-items-center' style={{ backgroundColor: '#EEF7FF'}}>
            <div className='col-4 text-center text-uppercase font-weight-bold' style={{ color:'#576CBC'}}>List of User Details</div>
            <div className='col-4'><button className='btn btn-primary' onClick={() => addNewUSer(fakeUserData())}>Add new Users</button></div>
        </div>

        <ul className='list-group'>
            <DisplayUsers/>
        </ul>

        <hr/>

        <DeleteAllUsers/>
    </div>
  )
}

export default UserDetails