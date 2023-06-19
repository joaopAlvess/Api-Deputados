import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'

const index = () => {

    const [professores, setProfessores] = useState([])

    useEffect(() => {
        setProfessores(getAll())
    }, [])

    function getAll() {
        return JSON.parse(localStorage.getItem('professores')) || []
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            const itens = getAll()
            itens.splice(id, 1)
            localStorage.setItem('professores', JSON.stringify(itens))
            setProfessores(itens)
        }
    }

    return (
        <Pagina titulo="Professores">

            <Link href="/professores/form" className='mb-2 btn btn-primary'>
                Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>cpf</th>
                        <th>matricula</th>
                        <th>salario</th>
                        <th>e-mail</th>
                        <th>Telefone</th>
                        <th>CEP</th>
                        <th>Logradouro</th>
                        <th>Complemento</th>
                        <th>Número</th>
                        <th>Bairro</th>
                        

                    </tr>
                </thead>
                <tbody>
                    {professores.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <Link href={'/professores/' + i}>
                                    <BsPencilFill title="Alterar" className='text-primary' />
                                </Link>
                                {' '}
                                <BsFillTrash3Fill title="Excluir" onClick={() => excluir(i)} className='text-danger' />
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.cpf}</td>
                            <td>{item.matricula}</td>
                            <td>{item.salario}</td>
                            <td>{item.email}</td>
                            <td>{item.telefone}</td>
                            <td>{item.Cep}</td>
                            <td>{item.logradouro}</td>
                            <td>{item.complemento}</td>
                            <td>{item.numero}</td>
                            <td>{item.bairro}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}

export default index