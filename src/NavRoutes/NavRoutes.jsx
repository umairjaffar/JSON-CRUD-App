import React from "react";
import { Route, Routes } from "react-router-dom";
import AddUser from "../Components/AddUser";
import AllUsers from "../Components/AllUsers";
import CodeInterview from "../Components/CodeInterview";
import EditUser from "../Components/EditUser";

const NavRoutes = () => {
    return(
        <>
        <Routes>
            <Route path="/" element={<CodeInterview />} />
            <Route path="addUser" element={<AddUser />} />
            <Route path="allUsers" element={<AllUsers />} />
            <Route path=":id" element={<EditUser />} />
        </Routes>
        </>
    )
}

export default NavRoutes;