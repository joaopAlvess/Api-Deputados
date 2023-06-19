import Pagina from '@/components/Pagina'
import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const form = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, setValue } = useForm()

    useEffect(() => {
        if (query.id) {
            const id = query.id
            const salas = JSON.parse(localStorage.getItem('salas'))
            const sala = salas[id]

            for (let atributo in sala) {
                setValue(atributo, sala[atributo])
            }
        }
    }, [query.id])

    function salvar(dados) {
        const salas = JSON.parse(localStorage.getItem('salas')) || []
        salas.splice(query.id, 1, dados)
        localStorage.setItem('salas', JSON.stringify(salas))
        push('/salas')
    }

    return (
        <Pagina titulo="Sala">
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control type="text" {...register('nome')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Capacidade">
                    <Form.Label>Duração: </Form.Label>
                    <Form.Control type="text" {...register('Capacidade')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Tipo">
                    <Form.Label>Modalidade: </Form.Label>
                    <Form.Control type="text" {...register('Tipo')} />
                </Form.Group>

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/salas">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form




