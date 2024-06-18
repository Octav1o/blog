import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { usePosts } from "../../api_consume/posts";
import { NavBar } from "../functionalComponents/NavBar";
import '../styles/HomePage.css'

export const HomePage = () => {
  const posts = usePosts();

  return (
    <>
      <header className="navbar-header">
        <NavBar/>
      </header>
      <div className="content">
        <div className="cards-container">
          {posts.map((post) => (
            <div className="card" key={post.id}>
              <img src={`http://localhost:5000/photos/${encodeURIComponent(post.picture)}`} alt={post.title} className="card-img" />
              <div className="card-content">
                <h1 className="card-title">{post.tittle}</h1> {/* Aquí corregí 'tittle' a 'title' */}
                <p className="card-text">{post.textDescrip}</p> {/* También aquí 'textDescrip' a 'textDescrip' */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
