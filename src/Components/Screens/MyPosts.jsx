import React, { useEffect, useState } from "react";
import { useGetUserPosts } from "../../api_consume/myPosts";
import { useUpdatePost } from "../../api_consume/updatePost";
import { NavBar } from "../functionalComponents/NavBar";
import { Modal } from "../functionalComponents/Modal";
import "../styles/MyPosts.css";
import { useDeletePost } from "../../api_consume/deletePost";
import { DeleteModal } from "../functionalComponents/DeleteModal";
import { CreatePostButton } from "../functionalComponents/CreatePostButton";

export const MyPosts = () => {
  const posts = useGetUserPosts();
  const updatePost = useUpdatePost();
  const deletePost = useDeletePost();
  const [selectedPost, setSelectedPost] = useState(null);
  const [tittle, setTitle] = useState("");
  const [textDescrip, setTextDescrip] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    if (selectedPost) {
      setTitle(selectedPost.tittle);
      setTextDescrip(selectedPost.textDescrip);
    }
  }, [selectedPost]);

  const openModal = (post) => {
    if (post) {
      setSelectedPost(post);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPost(null);
    setTitle("");
    setTextDescrip("");
  };

  const handleEdit = async () => {
    try {
      const newDetails = {
        id: selectedPost.id,
        tittle,
        textDescrip
      }
      await updatePost(selectedPost.id, newDetails);
      closeModal();
    } catch (error) {
      console.error("Error al editar el post:", error.message);
    }
  };

  const openDeleteModal = (post) => {
    if (post) {
      setSelectedPost(post);
      setShowDeleteModal(true);
    }
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
    setSelectedPost(null);
  };

  const handleDelete = async () => {
    try {
      await deletePost(selectedPost.id);
      closeDeleteModal();
    } catch (error) {
      console.error("Error al eliminar el post:", error.message);
    }
  };

  return (
    <>
      <header className="navbar-header">
        <NavBar />
      </header>
      <div className="content">
        <div className="cards-container">
          {posts.map((post) => (
            <div className="card" key={post.id}>
              <img
                src={`http://localhost:5000/photos/${encodeURIComponent(
                  post.picture
                )}`}
                alt={post.title}
                className="card-img"
              />
              <div className="card-content">
                <h1 className="card-title">{post.tittle}</h1>
                <p className="card-text">{post.textDescrip}</p>
                <div>
                  <button
                    onClick={() => openModal(post)}
                    className="edit-button"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => openDeleteModal(post)}
                    className="delete-button"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Modal
          show={showModal}
          onClose={closeModal}
          onSubmit={handleEdit}
          tittle={tittle}
          textDescrip={textDescrip}
          setTitle={setTitle}
          setTextDescrip={setTextDescrip}
        />
      </div>
      <DeleteModal
        show={showDeleteModal}
        onClose={closeDeleteModal}
        onDelete={handleDelete}
      />
      <CreatePostButton />
    </>
  );
};
