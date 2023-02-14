import React, { useContext, useEffect } from "react";
import { Table } from "react-bootstrap";
import AdminUsersList from "../components/entities/admin/AdminUsersList";
import AdminUsersContext from "../context/admin/users/AdminUsersContext";
import '../css/Admin/AdminUsers.css';

const AdminUsers = () => {

  const { users, getUsers } = useContext(AdminUsersContext);

  useEffect(()=>{
    getUsers()
  }, []);

  return (<>
      <h1 className="admin-users-title">Usuarios - ADMIN</h1>
      <div className="admin-users-table-container">
        <Table
          striped
          bordered
          hover
          variant="dark"
          className="admin-users-table"
        >
          <thead className="admin-products-table-head">
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Correo electrónico</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index)=>(
                <AdminUsersList 
                data={user}
                key={index} />
              ))
            }
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default AdminUsers;
