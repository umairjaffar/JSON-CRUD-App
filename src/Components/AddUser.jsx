import styled from "@emotion/styled";
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../Services/api";

const Container = styled(FormGroup)`
  width: 55%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 5%;
  }
`;

const AddUser = () => {
  const initialValues = {
    name: "",
    userName: "",
    email: "",
    phone: "",
  };
  const nevigate = useNavigate();
  const [user, setUser] = useState(initialValues);

  const onValueChange = (e) => {
    // we use variable as a key within square brackets i.e [e.target.name]
    setUser({...user, [e.target.name] : e.target.value})
    // console.log(e.target.name,e.target.value); 
    console.log(user);
  };

  const addUserDetails = async () => {
    await addUser(user)
    nevigate("/allUsers")
  }
  

  return (
    <>
      <Container>
        <Typography variant="h4" textAlign="center">
          Add User
        </Typography>
        <FormControl>
          <InputLabel>Name :</InputLabel>
          <Input name="name" onChange={(e) => onValueChange(e)} />
        </FormControl>
        <FormControl>
          <InputLabel>UserName :</InputLabel>
          <Input name="userName" onChange={(e) => onValueChange(e)} />
        </FormControl>
        <FormControl>
          <InputLabel>Email :</InputLabel>
          <Input name="email" onChange={(e) => onValueChange(e)} />
        </FormControl>
        <FormControl>
          <InputLabel>Phone :</InputLabel>
          <Input name="phone" onChange={(e) => onValueChange(e)} />
        </FormControl>
        <Button variant="contained" onClick={() => addUserDetails()}>Add User</Button>
      </Container>
    </>
  );
};

export default AddUser;
