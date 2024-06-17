export const Login = async (mail, password) => {
  const response = await fetch("http://localhost:5000/api/user/login", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      mail,
      password,
    }),
  });

  const data = await response.json();
  // console.log(data);
  return data;
};
