import React, { useEffect, useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import style from "./Orgaos.module.css";
import http from "../../services/http";
const Orgaos = () => {
  const [orgaos, setOrgaos] = useState([]);
  const [paginas, setPaginas] = useState(6);
  const handleCarregarMais = () => {
    let numeroDePaginas = paginas;
    numeroDePaginas += 6;
    setPaginas(numeroDePaginas);
  };
  useEffect(() => {
    const pegarOrgao = async () => {
      http.get("/orgaos").then((res) => {
        const dados = res.data.dados.splice(0, paginas);
        setOrgaos(dados);
        return res.data;
      });
    };
    pegarOrgao();
  }, [paginas]);
  return (
    <section className={style.orgaos}>
      {orgaos.map((orgao) => (
        <Card className={style.card} key={orgao.id} style={{ width: "18rem" }}>
          <Card.Header>N° {orgao.id}</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item> Nome : {orgao.nome}</ListGroup.Item>
            <ListGroup.Item>Publicação : {orgao.nomePublicacao}</ListGroup.Item>
            <ListGroup.Item>Orgão : {orgao.tipoOrgao}</ListGroup.Item>
          </ListGroup>
        </Card>
      ))}
      <div className="d-flex w-100 justify-content-center">
        <Button variant="success" size="md" onClick={handleCarregarMais}>
          Carregar mais orgaõs
        </Button>
      </div>
    </section>
  );
};

export default Orgaos;
