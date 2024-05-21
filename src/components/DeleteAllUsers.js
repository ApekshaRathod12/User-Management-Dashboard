import React from 'react'
import { useDispatch } from 'react-redux'
import { clearAllUser } from '../store/slice/userSlice';

const DeleteAllUsers = () => {

    const dispatch = useDispatch();

    const deleteUser = () => {
        dispatch(clearAllUser())
    }

  return (
    <div className='text-center'>
        <button className='btn btn-danger' onClick={deleteUser}>Clear All Users</button>
    </div>
  )
}

export default DeleteAllUsers