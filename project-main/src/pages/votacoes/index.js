import React, { useEffect, useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import style from "./Votacoes.module.css";
import http from "../../services/http";
const Votacoes = () => {
  const [votacoes, setVotacoes] = useState([]);
  const [paginas, setPaginas] = useState(6);
  const handleCarregarMais = () => {
    let numeroDePaginas = paginas;
    numeroDePaginas += 6;
    setPaginas(numeroDePaginas);
  };
  useEffect(() => {
    const pegarVotacoes = async () => {
      http.get("/votacoes").then((res) => {
        const dados = res.data.dados.splice(0, paginas);
        setVotacoes(dados);
        return res.data;
      });
    };
    pegarVotacoes();
  }, [paginas]);
  return (
    <section className={style.votacoes}>
      {votacoes.map((votacao) => (
        <Card
          className={style.card}
          key={votacao.id}
          style={{ width: "18rem" }}
        >
          <Card.Header>N° {votacao.numero}</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item> Aprovações : {votacao.aprovacao}</ListGroup.Item>
            <ListGroup.Item> Sigla : {votacao.siglaOrgao}</ListGroup.Item>
            <ListGroup.Item>{votacao.descricao}</ListGroup.Item>
          </ListGroup>
        </Card>
      ))}
      <div className="d-flex w-100 justify-content-center">
        <Button variant="success" size="md" onClick={handleCarregarMais}>
          Carregar mais votos
        </Button>
      </div>
    </section>
  );
};

export default Votacoes;
