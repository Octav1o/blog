export const createPost = async (tittle, textDescrip, picture ) => {
    const formData = new FormData();
    formData.append("tittle", tittle);
    formData.append("textDescrip", textDescrip);
    formData.append("picture", picture);
    const response = await fetch("http://localhost:5000/api/post/createPost", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: formData
    });
  
    const data = await response.json();
    console.log(data);
    return data;
  };
  