import { createPost } from "../../api_consume/createPost";
import { useState } from "react";
import { CreateModal } from "../functionalComponents/CreateModal";

export const CreatePostButton = () => {
  const [tittle, setTitle] = useState("");
  const [textDescrip, setTextDescrip] = useState("");
  const [picture, setPicture] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const openCreateModal = (post) => {
    if (post) {
      setSelectedPost(post);
      setShowCreateModal(true);
    }
  };

  const closeCreateModal = () => {
    setShowCreateModal(false);
    setSelectedPost(null);
    setTitle("");
    setTextDescrip("");
  };

  const handleCreatePost = async () => {
    try {
      const data = await createPost(tittle, textDescrip, picture);
      console.log("Post creado:", data);
      closeCreateModal();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <button onClick={() => openCreateModal({})} className="fixed-button">
        +
      </button>
      <CreateModal
        show={showCreateModal}
        onClose={closeCreateModal}
        onSubmit={handleCreatePost}
        tittle={tittle}
        textDescrip={textDescrip}
        setTitle={setTitle}
        setTextDescrip={setTextDescrip}
        picture={picture}
        setPicture={setPicture}
      />
    </>
  );
};
