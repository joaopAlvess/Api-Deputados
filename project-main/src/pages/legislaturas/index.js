import React, { useEffect, useState } from "react";
import style from "./Legislatura.module.css";
import { Card, ListGroup } from "react-bootstrap";
import http from "../../services/http";
const Legislaturas = () => {
  const [legislaturas, setLegislaturas] = useState([]);
  useEffect(() => {
    const pegarLegislaturas = async () => {
      http.get("/legislaturas").then((res) => {
        setLegislaturas(res.data.dados);
        return res.data;
      });
    };
    pegarLegislaturas();
  }, []);
  return (
    <section className={style.legislaturas}>
      {legislaturas.map((legislatura) => (
        <Card
          className={style.card}
          key={legislatura.id}
          style={{ width: "18rem" }}
        >
          <Card.Header>N° {legislatura.id}</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item> Início : {legislatura.dataInicio}</ListGroup.Item>
            <ListGroup.Item> Fim : {legislatura.dataFim}</ListGroup.Item>
          </ListGroup>
        </Card>
      ))}
    </section>
  );
};

export default Legislaturas;
