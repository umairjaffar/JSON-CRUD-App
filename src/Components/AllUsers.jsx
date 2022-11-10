import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers, deleteUser } from "../Services/api";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 5% auto 0 auto;
`;

const Thead = styled(TableRow)`
  background: #000;
  & > th {
    color: #fff;
    font-size: 20px;
    text-align: center;
  }
`;
const Tbody = styled(TableRow)`
  & > td {
    font-size: 20px;
    text-align: center;
  }
`;

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  //   ==================
  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    let response = await getUsers();
    console.log(response);
    setUsers(response.data);
  };

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getUserDetails();
  };

  return (
    <>
      <StyledTable>
        <TableHead>
          <Thead>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>User Name</TableCell>
            <TableCell>E-Mail</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Actions</TableCell>
          </Thead>
        </TableHead>
        <TableBody>
          {users.map((user, index) => {
            console.log('userID' +user);
            return (
              <>
                <Tbody key={index}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.userName}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      sx={{ marginRight: 3 }}
                      component={Link}
                      to={`/${user.id}`}
                    >
                      Edit User
                    </Button>
                    <Button
                      variant="contained"
                      sx={{ bgcolor: "#000" }}
                      component={Link}
                      onClick={() => deleteUserData(user.id)}
                    >
                      Delete User
                    </Button>
                  </TableCell>
                </Tbody>
              </>
            );
          })}
        </TableBody>
      </StyledTable>
    </>
  );
};

export default AllUsers;
