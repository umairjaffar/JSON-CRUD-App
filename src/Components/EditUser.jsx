import styled from "@emotion/styled";
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {  useParams, useNavigate } from "react-router-dom";
import { getUser, editUser } from "../Services/api";

const Container = styled(FormGroup)`
  width: 55%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 5%;
  }
`;

const EditUser = () => {
  const initialValues = {
    name: "",
    userName: "",
    email: "",
    phone: "",
  };
  const nevigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState(initialValues);

  useEffect(() => {
    getUserData();
  },[])

  const getUserData = async () => {
    let response = await getUser(id)
    setUser(response.data)
  }

  const onValueChange = (e) => {
    // we use variable as a key within square brackets i.e [e.target.name]
    setUser({...user, [e.target.name] : e.target.value})
    // console.log(e.target.name,e.target.value); 
    console.log(user);
  };

  const editUserDetails = async () => {
    await editUser(user, id)
    nevigate("/allUsers")
  }
  

  return (
    <>
      <Container>
        <Typography variant="h4" textAlign="center">
          Edit User
        </Typography>
        <FormControl>
          <InputLabel>Name :</InputLabel>
          <Input name="name" onChange={(e) => onValueChange(e)} value={user.name} />
        </FormControl>
        <FormControl>
          <InputLabel>UserName :</InputLabel>
          <Input name="userName" onChange={(e) => onValueChange(e)} value={user.userName} />
        </FormControl>
        <FormControl>
          <InputLabel>Email :</InputLabel>
          <Input name="email" onChange={(e) => onValueChange(e)} value={user.email} />
        </FormControl>
        <FormControl>
          <InputLabel>Phone :</InputLabel>
          <Input name="phone" onChange={(e) => onValueChange(e)} value={user.phone} />
        </FormControl>
        <Button variant="contained" onClick={() => editUserDetails()}>Edit</Button>
      </Container>
    </>
  );
};

export default EditUser;
