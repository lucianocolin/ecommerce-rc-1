import React, { useState } from 'react'
import AdminUsersContext from './AdminUsersContext';
import clientAxios from '../../../config/axios';

const AdminUsersProvider = ({ children }) => {

  const initialValues = {
    users: [],
    currentUser: {}
  };

  const [values, setValues] = useState(initialValues);

  const getUsers = async () =>{
    try {
      const res = await clientAxios.get('/user');
      res && setValues({ ...values, users: res.data.users });
    } catch (error) {
      throw error;
    }
  };

  const changeUserRole = async user =>{
    try {
      if(user.role === 'admin'){
        user.role = 'client'
      } else if(user.role === 'client'){
        user.role = 'admin'
      }
      const res = await clientAxios.put(`/user/${user._id}`, user);
      res && getUsers();
    } catch (error) {
      throw error
    }
  }

  return (
    <AdminUsersContext.Provider value={{
      ...values,
      getUsers,
      changeUserRole
    }}>
      { children }
    </AdminUsersContext.Provider>
  )
}

export default AdminUsersProvider;