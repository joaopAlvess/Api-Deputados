import Pagina from '@/components/Pagina'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit } = useForm()

    function salvar(dados) {
        const cursos = JSON.parse(localStorage.getItem('salas')) || []
        cursos.push(dados)
        localStorage.setItem('salas', JSON.stringify(cursos))
        push('/salas')
    }

    return (
        <Pagina titulo="Sala">
            <Form>
                <Form.Group className="mb-3" controlId="Nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control type="text" {...register('nome')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Capacidade">
                    <Form.Label>Capacidade: </Form.Label>
                    <Form.Control type="text" {...register('Capacidade')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Tipo">
                    <Form.Label>Tipo: </Form.Label>
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