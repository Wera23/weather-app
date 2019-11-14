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
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
       
  )
}

export default UserManagement