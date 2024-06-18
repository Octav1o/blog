// export const deletePost = async () => {
//   const token = localStorage.getItem("accessToken");
//   try {
//     const response = await fetch("localhost:5000/api/post/deletePost", {
//       method: "DELETE",
//       headers: {
//         Authorization: `Bearer ${token}`,
        
//       },

      
//     });

//     if(!response.ok) {
//         throw new Error('Error al intentar eliminar el post');
//     }

//     const data = await response.json();
//     console.log(data)
//   } catch (error) {}
// };


import { useNavigate } from "react-router-dom";
import { tokenExpired } from "./checkToken";

export const useDeletePost = (idPost) => {
  const id = { idPost }
  const navigate = useNavigate();

  const deletePost = async (idPost) => {
    const token = localStorage.getItem("accessToken");

    if (!token || tokenExpired(token)) {
      localStorage.removeItem("accessToken");
      alert("Su sesión ha expirado, vuelva a iniciar sesión");
      navigate("/");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/post/deletePost`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({id: idPost}),
      });

      if (!response.ok) {
        throw new Error("Error al eliminar el post");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al eliminar el post:', error);
      throw error;
    }
  };

  return deletePost;
};