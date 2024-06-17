import { useEffect, useState } from "react";
import { tokenExpired } from "./checkToken";
// import { Navigate } from 'react-router-dom';

import { useNavigate } from "react-router-dom";

export const useGetUserPosts = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);

  try {
    useEffect(() => {
      const token = localStorage.getItem("accessToken");

      if (!token || tokenExpired(token)) {
        localStorage.removeItem("accessToken");
        alert("Su sesión ha expirado, vuelva a iniciar sesión");
        navigate("/");
        return;
      }

      const fetchPosts = async () => {
        try {
          const response = await fetch(
            "http://localhost:5000/api/post/getUserPosts",
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (!response.ok) throw new Error("Error al obtener los posts");

          const data = await response.json();
          setPosts(data);
        } catch (err) {
            console.error(err);
        }
      };
      fetchPosts();
    }, [navigate]);

    return posts;
  } catch (err) {
    console.error(err);
  }
};
