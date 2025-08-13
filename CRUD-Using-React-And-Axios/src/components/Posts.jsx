import { useEffect, useState } from "react";
import { deletePost, getPost } from "../api/PostApi";
import "../App.css";

export const Posts = () => {
  const [data, setData] = useState([]);
  const getPostData = async () => {
    const res = await getPost();
    console.log(res.data);
    setData(res.data);
  };

  useEffect(() => {
    getPostData();
  }, []);

  // Post ko Delete karne ke liye function :-

  const handleDeletePost = async (id) => {
    try {
      const res = await deletePost(id);
      if (res.status === 200) {
        const newUpdatedPosts = data.filter((curPost) => {
          return curPost.id != id;
        });
        setData(newUpdatedPosts);
      } else {
        console.log("Failed to Delete the post:", res.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="section-post">
      <ol>
        {data.map((curElem) => {
          const { id, body, title } = curElem;
          return (
            <li key={id}>
              {/* key is chosen as id because it is unique */}
              <p>Title: {title}</p>
              <p>Body: {body}</p>
              <button>Edit</button>
              <button
                className="btn-delete"
                onClick={() => handleDeletePost(id)}
                // isse hame yeh pata chalta hai ki kon sa id main humne delete butoon click kiya hai...
              >
                Delete
              </button>
            </li>
          );
        })}
      </ol>
    </section>
  );
};
