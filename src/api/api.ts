import axios from "axios";

const api = axios.create({
  baseURL: "https://catfact.ninja",
});

const getCatFact = async () => {
  const response = await api
    .get("/fact")
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });

  return response;
};

export { getCatFact };
