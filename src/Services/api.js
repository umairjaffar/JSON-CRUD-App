import axios from "axios";

//=====> function adduser in api start.
const API_URL = "http://localhost:3002/users/";
export const addUser = async (data) => {
  try {
    return await axios.post(API_URL, data);
  } catch (error) {
    console.log("error while calling add user api", error.message);
  }
};
//=====> function adduser in api end.

//=======> get user from api start
export const getUsers = async () => {
  try {
    return await axios.get(API_URL);
  } catch (error) {
    console.log("error while calling get users api", error.message);
  }
};
//=======> get user from api end
//=======> get user from api start
export const getUser = async (data) => {
  try {
    return await axios.get(`${API_URL}/${data}`);
  } catch (error) {
    console.log("error while calling get user api", error.message);
  }
};
//=======> get user from api end

//=======> edit user from api start
export const editUser = async (data, id) => {
  try {
    return await axios.put(`${API_URL}/${id}`, data);
  } catch (error) {
    console.log("error while calling edit user api", error.message);
  }
};
//=======> delete user from api end
export const deleteUser = async (id) => {
  try {
    return await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.log("error while calling delete user api", error.message);
  }
};
//=======> delete user from api end
