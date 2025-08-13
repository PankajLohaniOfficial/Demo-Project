import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// ab hamara get method hai jo data ko fetch karega
//get Method
export const getPost = () => {
  return api.get("/posts");
};

//delete method
export const deletePost = () => {
  return api.delete(`/posts/${id}`);
};
