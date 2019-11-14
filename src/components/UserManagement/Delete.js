import React from "react";
//import stylesManagement from "./UserManagement.css";
import {
  Button,
  TableBody,
  TableCell,
  TableRow
} from "@material-ui/core/";

const userManagementDelete = props => {
  return (
    <TableBody>
      
        <TableRow >
          <TableCell component="th" scope="row">
            
          </TableCell>
          <TableCell align="right">{props.mgname}</TableCell>
          <TableCell align="right">{props.mgusername}</TableCell>
          <Button type="submit" onClick={props.click}>
        Delete
      </Button>
        </TableRow>
     
      
    </TableBody>
  );
};

export default userManagementDelete;
