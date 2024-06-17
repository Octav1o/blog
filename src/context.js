// import React, { createContext, useState } from 'react';

// // Crea el contexto con un valor por defecto
// export const MyContext = createContext();

// export const MyContextProvider = ({ children }) => {
//     const [picture, setPicture] = useState(null); // Estado para la imagen
//     const [token, setToken] = useState([]); // Estado para el token

//     // Función para actualizar la imagen
//     const updatePicture = (newPicture) => {
//         setPicture(newPicture);
//     };

//     // Función para actualizar el token
//     const updateToken = (newToken) => {
//         setToken(newToken);
//     };

//     // El valor que pasas a Provider debe ser un objeto
//     const value = { picture, setPicture: updatePicture, token, setToken: updateToken };

//     return (
//         <MyContext.Provider value={value}>
//             {children}
//         </MyContext.Provider>
//     );
// };

import React, { createContext, useEffect, useState } from "react";
import { usePosts } from "../src/api_consume/posts";

export const postsContextProvider = (props) => {

    const posts = usePosts();



}