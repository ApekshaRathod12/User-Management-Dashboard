import React from 'react'
import { MdDeleteForever } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../store/slice/userSlice';

const DisplayUsers = () => {

    const dispatch = useDispatch();

    const data = useSelector((state) => {
        return state.users;
    })

    const deleteUser = (id) => {
        dispatch(removeUser(id))
    }

  return (
    data.map((user,id) => {
       return <li key={id} className='list-group-item d-flex justify-content-between align-items-center'>
            {user}
        <button onClick={() => deleteUser(id)} style={{ backgroundColor : 'white' , border:'none' }}>
            <MdDeleteForever className='delete-icon'  style={{ color: 'red' , fontSize : '24px'}} />
        </button>
        </li>
    })
  )
       
}

export default DisplayUsers