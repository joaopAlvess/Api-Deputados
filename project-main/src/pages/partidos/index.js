import React, { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import style from "./Partidos.module.css";
import http from "../../services/http";
const Partidos = () => {
  const [partidos, setPartidos] = useState([]);
  useEffect(() => {
    const pegarPartidos = async () => {
      http.get("/partidos").then((res) => {
        setPartidos(res.data.dados);
        return res.data;
      });
    };
    pegarPartidos();
  }, []);
  return (
    <section className={style.partidos}>
      {partidos.map((partido) => (
        <Card
          className={style.card}
          key={partido.id}
          style={{ width: "18rem" }}
        >
          <Card.Header>N° {partido.id}</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item> Nome : {partido.nome}</ListGroup.Item>
            <ListGroup.Item> Sigla : {partido.sigla}</ListGroup.Item>
          </ListGroup>
        </Card>
      ))}
    </section>
  );
};

export default Partidos;
