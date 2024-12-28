import axios from "axios";

const api = axios.create({
  baseURL: "https://catfact.ninja",
});

const login = async (apiKey: string) => {
  const response = await api
    .post("/login", { apiKey })
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });

  return response;
};

export { login };
