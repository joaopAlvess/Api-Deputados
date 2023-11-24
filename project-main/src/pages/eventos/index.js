import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { Card } from "react-bootstrap";
import style from "./Evento.module.css";
import http from "../../services/http";

const Eventos = () => {
  const [situacao, setSituacao] = useState("");
  const [tipo, setTipo] = useState("");
  const [eventos, setEventos] = useState([]);
  useEffect(() => {
    const pegarEventos = async () => {
      http.get("/eventos").then((res) => {
        const dados = res.data.dados
        setEventos(dados);
        const dadosFiltrados = []
        dados.filter((evento) => {
          if (evento.descricaoTipo.match(tipo)) {
            dadosFiltrados.push(evento);
          }
        });
        setEventos(dadosFiltrados)
      });
    };
    pegarEventos();
  }, [tipo, situacao]);
  return (
    <>
      <div className={style.filtros}>
        <select onChange={(e) => setTipo(e.target.value)}>
          <option value="" defaultValue>
            Selecione um tipo
          </option>
          <option value="Audiência Pública">Audiência Pública</option>
          <option value="Seminário">Seminário</option>
          <option value="Reunião Deliberativa">Reunião Deliberativa</option>
          <option value="Visita Técnica">Visita Técnica</option>
          <option value="Debate">Debate</option>
        </select>
      </div>
      <section className={style.cards}>
        {eventos.map((evento) => (
          <Card key={evento.id} className={style.card}>
            <Card.Header>{evento.descricaoTipo}</Card.Header>
            <Card.Body className={style.card_body}>
              <div>
                <Card.Title></Card.Title>
                <Card.Text className={style.card_text}>
                  {evento.descricao}
                </Card.Text>
              </div>
              <div className={style.table_content}>
                <Table className={style.table} responsive="sm">
                  <thead>
                    <tr>
                      <th>Local</th>
                      <th>Situação</th>
                      <th>Início</th>
                      <th>Fim</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{evento.localCamara.nome}</td>
                      <td>{evento.situacao}</td>
                      <td>{evento.dataHoraInicio}</td>
                      <td>{evento.dataHoraFim}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        ))}
      </section>
    </>
  );
};

export default Eventos;
