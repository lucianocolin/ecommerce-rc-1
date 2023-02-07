import React from 'react'
import { Button } from 'react-bootstrap'

const AdminProductsList = ({ data }) => {
  return (<>
    <td>{data.name}</td>
    <td>{data.brand}</td>
    <td>{data.price}</td>
    <td>{data.stock}</td>
    <td>{data.category}</td>
    <td>{data.isInOffer}</td>
    <td>
      <Button>Editar</Button>
      <Button>Eliminar</Button>
    </td>
    </>
  )
}

export default AdminProductsList