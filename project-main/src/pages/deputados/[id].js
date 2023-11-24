import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import style from "./Deputado.module.css";
import http from "../../services/http";
import Link from "next/link";
import { useRouter } from "next/router";
import Grafico from "../../components/Grafico";
import { v4 as uuid } from "uuid";

const Deputado = () => {
  const [deputado, setDeputado] = useState([]);
  const [profissoes, setProfissoes] = useState([]);
  const [despesas, setDespesas] = useState([]);
  const { id } = useRouter().query;
  useEffect(() => {
    const pegarDeputados = async () => {
      http.get("/deputados").then((res) => {
        const dados = res.data.dados.find(
          (deputado) => deputado.id === Number(id)
          );
          setDeputado([dados]);
        });
        http.get(`/deputados/${id}/profissoes`).then((res) => {
          setProfissoes(res.data.dados);
        });
        http.get(`/deputados/${id}/despesas`).then((res) => {
          const dadosFiltrados = [];
          const dados = res.data.dados.sort((a, b) => {
            if (
              new Date(a.dataDocumento).getMonth() >
              new Date(b.dataDocumento).getMonth()
            )
              return -1;
          });
          dados.filter(despesa => {
            const modelo = {
              id: uuid(),
              data: new Date(despesa.dataDocumento).toLocaleDateString('pt-BR'),
              valor: despesa.valorDocumento
            }
            dadosFiltrados.push(modelo)
          })
          setDespesas(dadosFiltrados);
      });
    };
    pegarDeputados();
  }, [id]);
  return (
    <>
      <section className={style.container}>
        {deputado.map((deputado) => (
          <div className={style.deputado} key={deputado.id}>
            <img
              className={style.fotoDoDeputado}
              src={deputado.urlFoto}
              alt={deputado.nome}
            />
            <Table
              className={style.descricao}
              striped
              bordered
              variant="success"
            >
              <tbody>
                <tr>
                  <td>Nome</td>
                  <td>{deputado.nome}</td>
                </tr>
                <tr>
                  <td>Partido</td>
                  <td>{deputado.siglaPartido}</td>
                </tr>
                <tr>
                  <td>UF</td>
                  <td>{deputado.siglaUf}</td>
                </tr>
                <tr>
                  <td>Legislatura</td>
                  <td>{deputado.idLegislatura}</td>
                </tr>
                <tr>
                  <td>Profissões</td>
                  <td>
                    {profissoes.map((profissao) => (
                      <li key={uuid()}>{profissao.titulo}</li>
                    ))}
                  </td>
                </tr>
              </tbody>
            </Table>
            <div className="d-flex w-100 justify-content-center">
              <Button style={{ marginTop: "40px" }} variant="success" size="md">
                <Link href="/deputados" legacyBehavior>
                  <a>Voltar para deputados</a>
                </Link>
              </Button>
            </div>
          </div>
        ))}
        <Grafico key={uuid()} dados={despesas} />
      </section>
    </>
  );
};

export default Deputado;
