import React from "react";
//import stylesManagement from "./UserManagement.css";
import { Button } from "@material-ui/core/";

const buttonDelete = props => {
  return (
    <Button
      variant="outlined"
      color="secondary"
      type="submit"
      onClick={props.deleteUser}
    >
      Yes
    </Button>
  );
};

export default buttonDelete;
