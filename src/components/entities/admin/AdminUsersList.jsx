import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import AdminUsersContext from "../../../context/admin/users/AdminUsersContext";
import "../../../css/Admin/AdminUsersList.css";

const AdminUsersList = ({ data }) => {

  const { changeUserRole } = useContext(AdminUsersContext);

  return (
    <>
      <tr>
        <td>{data.name}</td>
        <td>{data.surname}</td>
        <td>{data.email}</td>
        <td>{data.role}</td>
        <td className="admin-users-btns-container">
          <Button variant="warning" 
            onClick={() => 
              changeUserRole(data) }>
            {data.role === "admin" ? "Quitar Admin" : "Hacer Admin"}
          </Button>
        </td>
      </tr>
    </>
  );
};

export default AdminUsersList;
