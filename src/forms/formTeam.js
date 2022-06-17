import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

const schema = Yup.object().shape({
    nombre: Yup.string().required(),
})

const FormTeam=({team, createTeam, handleClose})=>{
    const defaultValues = {
        nombre: team ? team.nombre : '',
        categoria: team ? team.categoria : '',
      }
    const { control, handleSubmit } = useForm({
        defaultValues,
        mode: 'onChange',
        reValidateMode: 'onChange',
        resolver: yupResolver(schema)
    })

    return(
        <div>
            <Form onSubmit={handleSubmit((d)=>createTeam(d))}>
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

export default FormTeam