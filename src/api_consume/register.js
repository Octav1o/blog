export const Register = async (name, lastname, mail, password, ) => {
    const response = await fetch("http://localhost:5000/api/user/registerUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        lastname,
        mail, 
        password,
        
      }),
    });
  
    const data = await response.json();
    console.log(data);
    return data;
  };
  