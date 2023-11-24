import React, { useEffect, useState } from "react";
import style from "./Proposicoes.module.css";
import { Card, ListGroup } from "react-bootstrap";
import http from "../../services/http";
const Proposicoes = () => {
  const [proposicoes, setProposicoes] = useState([]);
  useEffect(() => {
    const pegarProposicoes = async () => {
      http.get("/proposicoes").then((res) => {
        setProposicoes(res.data.dados);
        return res.data;
      });
    };
    pegarProposicoes();
  }, []);
  return (
    <section className={style.proposicoes}>
      {proposicoes.map((proposicoe) => (
        <Card
          className={style.card}
          key={proposicoe.id}
          style={{ width: "18rem" }}
        >
          <Card.Header>N° {proposicoe.numero}</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item> Ementa : {proposicoe.ementa}</ListGroup.Item>
            <ListGroup.Item> Sigla : {proposicoe.siglaTipo}</ListGroup.Item>
            <ListGroup.Item> Código : {proposicoe.codTipo}</ListGroup.Item>
          </ListGroup>
        </Card>
      ))}
    </section>
  );
};

export default Proposicoes;
