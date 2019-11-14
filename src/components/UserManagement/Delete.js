import React from "react";
//import stylesManagement from "./UserManagement.css";
import { Button, TableBody, TableCell, TableRow } from "@material-ui/core/";

const userManagementDelete = props => {
  return (
    <TableBody>
      <TableRow>
      
        <TableCell align="left">{props.mgname}</TableCell>
        <TableCell align="left">{props.mgusername}</TableCell>
        <TableCell align="right" >
        <Button variant="outlined" size="small" color="secondary" type="submit" onClick={props.click}>
          Delete
        </Button>
      </TableCell>
      </TableRow>
    
    </TableBody>
  );
};

export default userManagementDelete;
