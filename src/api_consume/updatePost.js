// import { useEffect, useState } from "react";
// import { tokenExpired } from "./checkToken";
// import { useNavigate } from "react-router-dom";

// export const useUpdatePost = (id) => {
//   const navigate = useNavigate();
//   const [post, setPost] = useState([]);

//   try {
//     useEffect(() => {
//       const token = localStorage.getItem("accessToken");

//       if (!token || tokenExpired(token)) {
//         localStorage.removeItem("accessToken");
//         alert("Su sesión ha expirado, vuelva a iniciar sesión");
//         navigate("/");
//         return;
//       }

//       const fetchPosts = async () => {
//         try {
//           const response = await fetch("localhost:5000/api/post/updatePost", {
//             method: "POST",
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           });

//           if (!response.ok) throw new Error("Error al obtener los posts");

//           const data = await response.json();
//           setPost(data);
//         } catch (error) {
//           console.error(error);
//         }
//       };
//       fetchPosts();
//     }, [navigate]);

//     return post;
//   } catch (err) {
//     console.error(err);
//   }
// };

import { useNavigate } from "react-router-dom";
import { tokenExpired } from "./checkToken";

export const useUpdatePost = () => {
  const navigate = useNavigate();

  const updatePost = async (postId, newDetails) => {
    const token = localStorage.getItem("accessToken");

    if (!token || tokenExpired(token)) {
      localStorage.removeItem("accessToken");
      alert("Su sesión ha expirado, vuelva a iniciar sesión");
      navigate("/");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/post/updatePost`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({...newDetails, id: postId}),
      });

      if (!response.ok) {
        throw new Error("Error al editar el post");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al editar el post:', error);
      throw error;
    }
  };

  return updatePost;
};
