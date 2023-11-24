import axios from "axios";

const http = axios.create({
  baseURL: "https://dadosabertos.camara.leg.br/api/v2",
});

export default http;
