import React from "react";
//import stylesManagement from "./UserManagement.css";
import {TableBody, TableCell, TableRow } from "@material-ui/core/";
import Dialog from './Dialog'


const userManagementDelete = props => {
  return (
    <TableBody>
      <TableRow>
      
        <TableCell align="left">{props.mgname}</TableCell>
        <TableCell align="left">{props.mgusername}</TableCell>
        <TableCell align="right" >
        <Dialog deleteUser={() => props.deleteUser(props.index)} />
      </TableCell>
      </TableRow>
    
    </TableBody>
  );
};

export default userManagementDelete;
