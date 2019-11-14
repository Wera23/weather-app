import React from 'react'
import {
    TableHead,
    TableCell,
    TableRow
  } from "@material-ui/core/";
  

const UserManagement = () => {
  return (
    
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Username</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
       
  )
}

export default UserManagement