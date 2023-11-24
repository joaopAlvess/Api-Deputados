import React, { useEffect, useState } from "react";
import style from "./Deputados.module.css";
import { Button, Form } from "react-bootstrap";
import Link from "next/link";
import http from "../../services/http";

const Deputados = () => {
  const [deputados, setDeputados] = useState([]);
  const [paginas, setPaginas] = useState(6);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [partido, setPartido] = useState("");
  const handleCarregarMais = () => {
    let numeroDePaginas = paginas;
    numeroDePaginas += 6;
    setPaginas(numeroDePaginas);
  };
  useEffect(() => {
    const pegarDeputados = async () => {
      fetch(
        `https://dadosabertos.camara.leg.br/api/v2/deputados?siglaPartido=${partido}&nome=${nome}`
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          const dados = res.dados.splice(0, paginas);
          setDeputados(dados);
          if (email) {
            dados.filter((deputado) => {
              const slug = deputado.email
                .replace("@camara.leg.br", "")
                .replace("dep.", "");
              if (slug.match(email)) {
                setDeputados([deputado]);
              }
            });
          }
        });
    };
    pegarDeputados();
  }, [nome, email, partido, paginas]);
  useEffect(() => {
    const pegarDeputados = async () => {
      fetch(`https://dadosabertos.camara.leg.br/api/v2/deputados`)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setDeputados(res.dados.splice(0, paginas));
        });
    };
    pegarDeputados();
  }, [paginas]);
  return (
    <>
      <div className={style.filtros}>
        <Form.Control
          className={style.filtarDados}
          placeholder="Nome"
          onChange={(e) => setNome(e.target.value)}
        />

        <Form.Control
          className={style.filtarDados}
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Form.Control
          className={style.filtarDados}
          placeholder="Partido"
          onChange={(e) => setPartido(e.target.value)}
        />
      </div>
      <section className={style.deputados}>
        {deputados.map((deputado) => (
          <Link
            legacyBehavior
            href={`/deputados/${deputado.id}`}
            key={deputado.id}
          >
            <a className={style.deputado}>
              <img src={deputado.urlFoto} alt="foto do deputado" />
              <table>
                <tbody className={style.describe}>
                  <tr>
                    <td>Nome</td>
                    <td>E-mail</td>
                    <td>Legislatura</td>
                    <td>UF</td>
                    <td>Partido</td>
                  </tr>
                  <tr>
                    <td>{deputado.nome}</td>
                    <td>{deputado.email}</td>
                    <td>{deputado.idLegislatura}</td>
                    <td>{deputado.siglaUf}</td>
                    <td>
                      {!deputado.siglaPartido
                        ? "Nenhum"
                        : deputado.siglaPartido}
                    </td>
                  </tr>
                </tbody>
              </table>
            </a>
          </Link>
        ))}
        <div className="d-flex w-100 justify-content-center">
          <Button variant="success" size="md" onClick={handleCarregarMais}>
            Carregar mais deputados
          </Button>
        </div>
      </section>
    </>
  );
};

export default Deputados;
