import React from "react";
import { Button, Form } from "react-bootstrap";
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

const schema = Yup.object().shape({
    nombre: Yup.string().required(),
})

const FormChampionship=({championship, createChanpionship, handleClose})=>{
    const defaultValues = {
        nombre: championship ? championship.nombre : '',
        
      }
    const { control, handleSubmit } = useForm({
        defaultValues,
        mode: 'onChange',
        reValidateMode: 'onChange',
        resolver: yupResolver(schema)
    })

    return(
        <div>
            <Form onSubmit={handleSubmit((d)=>createChanpionship(d))}>
                    <Form.Group className="mb-3" controlId="formBasicNombre">
                    <Controller
                        render={({ field }) => <Form.Control type="text" placeholder="Nombre" {...field} />}
                        name="nombre"
                        control={control}
                        defaultValue={defaultValues.nombre}
                    />
                    <Form.Label>Nombre</Form.Label>
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

export default FormChampionship