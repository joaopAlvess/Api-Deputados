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
            const professores = JSON.parse(localStorage.getItem('professores'))
            const professor = professores[id]

            for (let atributo in professores) {
                setValue(atributo, professor[atributo])
            }
        }
    }, [query.id])

    function salvar(dados) {
        const professores = JSON.parse(localStorage.getItem('professores')) || []
        professores.splice(query.id, 1, dados)
        localStorage.setItem('professores', JSON.stringify(professores))
        push('/professores')
    }

    return (
        <Pagina titulo="Professor">
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control type="text" {...register('nome')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="cpf">
                    <Form.Label>cpf: </Form.Label>
                    <Form.Control type="text" {...register('cpf')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="matricula">
                    <Form.Label>matricula: </Form.Label>
                    <Form.Control type="text" {...register('matricula')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="salario">
                    <Form.Label>Salario: </Form.Label>
                    <Form.Control type="text" {...register('salario')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>E-mail: </Form.Label>
                    <Form.Control type="text" {...register('email')} />
                </Form.Group>


                <Form.Group className="mb-3" controlId="Telefone">
                    <Form.Label>Telefone: </Form.Label>
                    <Form.Control type="text" {...register('Telefone')} />
                </Form.Group>



                <Form.Group className="mb-3" controlId="Cep">
                    <Form.Label>CEP: </Form.Label>
                    <Form.Control type="text" {...register('Cep')} />
                </Form.Group>



                <Form.Group className="mb-3" controlId="Logradouro">
                    <Form.Label>Logradouro: </Form.Label>
                    <Form.Control type="text" {...register('Logradouro')} />
                </Form.Group>



                <Form.Group className="mb-3" controlId="Complemento">
                    <Form.Label>Complemento: </Form.Label>
                    <Form.Control type="text" {...register('Complemento')} />
                </Form.Group>



                <Form.Group className="mb-3" controlId="numero">
                    <Form.Label>Número: </Form.Label>
                    <Form.Control type="text" {...register('numero')} />
                </Form.Group>



                <Form.Group className="mb-3" controlId="bairro">
                    <Form.Label>Bairro: </Form.Label>
                    <Form.Control type="text" {...register('bairro')} />
                </Form.Group>
                

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/professores">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form