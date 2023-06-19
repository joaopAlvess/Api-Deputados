import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'

const index = () => {

    const [semestres, setSemestres] = useState([])

    useEffect(() => {
        setSemestres(getAll())
    }, [])

    function getAll() {
        return JSON.parse(window.localStorage.getItem('semestres')) || []
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            const itens = getAll()
            itens.splice(id, 1)
            window.localStorage.setItem('cursos', JSON.stringify(itens))
            setSemestres(itens)
        }
    }

    return (
        <Pagina titulo="Semestres">

            <Link href="/semestres/form" className='mb-2 btn btn-primary'>
                Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Data do inicio</th>
                        <th>Data do termino</th>
                    </tr>
                </thead>
                <tbody>
                    {semestres.map((item, i) => (
                        <tr key={i}>
                            <td>
                                <Link href={'/semestres/' + i}>
                                    <BsPencilFill title="Alterar" className='text-primary' />
                                </Link>
                                {' '}
                                <BsFillTrash3Fill title="Excluir" onClick={() => excluir(i)} className='text-danger' />
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.data_inicio}</td>
                            <td>{item.data_fim}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}

export default index