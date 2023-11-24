import React, { useEffect, useState } from "react";
import style from "./Frentes.module.css";
import { Button, Card, ListGroup } from "react-bootstrap";
import http from "../../services/http";

const Frentes = () => {
  const [frentes, setFrentes] = useState([]);
  const [paginas, setPaginas] = useState(6);
  const handleCarregarMais = () => {
    let numeroDePaginas = paginas;
    numeroDePaginas += 6;
    setPaginas(numeroDePaginas);
  };
  useEffect(() => {
    const pegarFrentes = async () => {
      http.get("/frentes").then((res) => {
        const dados = res.data.dados.splice(0, paginas);
        setFrentes(dados);
        return res.data;
      });
    };
    pegarFrentes();
  }, [paginas]);
  return (
    <section className={style.frentes}>
      {frentes.map((frente) => (
        <Card className={style.card} key={frente.id} style={{ width: "18rem" }}>
          <Card.Header>N° {frente.id}</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>{frente.titulo}</ListGroup.Item>
            <ListGroup.Item>
              {" "}
              Legislatura : {frente.idLegislatura}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      ))}
      <div className="d-flex w-100 justify-content-center">
        <Button variant="success" size="md" onClick={handleCarregarMais}>
          Carregar mais frentes
        </Button>
      </div>
    </section>
  );
};

export default Frentes;
