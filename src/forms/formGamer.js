import React from "react";
import { Button, Form } from "react-bootstrap";
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

const schema = Yup.object().shape({
    carnet: Yup.string(),
    nombre: Yup.string().required(),
    apellidos: Yup.string().required(),
})

const FormGamer=({gamer, createGamer, handleClose})=>{
    const defaultValues = {
        carnet: gamer ? gamer.carnet : '',
        nombre: gamer ? gamer.nombre : '',
        apellidos: gamer ? gamer.apellidos : '',
        
      }
    const { control, handleSubmit } = useForm({
        defaultValues,
        mode: 'onChange',
        reValidateMode: 'onChange',
        resolver: yupResolver(schema)
    })

    return(
        <div>
            <Form onSubmit={handleSubmit((d)=>createGamer(d))}>
                    <Form.Group className="mb-3" controlId="formBasicCarnet">
                    <Controller
                        render={({ field }) => <Form.Control type="text" placeholder="Carnet" {...field} />}
                        name="carnet"
                        control={control}
                        defaultValue={defaultValues.carnet}
                    />
                    <Form.Label>Carnet</Form.Label>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicNombre">
                    <Controller
                        render={({ field }) => <Form.Control type="text" placeholder="Nombre" {...field} />}
                        name="nombre"
                        control={control}
                        defaultValue={defaultValues.nombre}
                    />
                    <Form.Label>Nombre</Form.Label>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicApellidos">
                    <Controller
                        render={({ field }) => <Form.Control type="text" placeholder="Apellidos" {...field} />}
                        name="apellidos"
                        control={control}
                        defaultValue={defaultValues.apellidos}
                    />
                    <Form.Label>Apellidos</Form.Label>
                    </Form.Group>
                    <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
        </div>
    )
}

export default FormGamer