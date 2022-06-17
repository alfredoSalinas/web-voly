import React from "react";
import Select from 'react-select'
import { Accordion, Button, Form } from "react-bootstrap";
import useOptGamer from "../hooks/useOptGamer";
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

const schema = Yup.object().shape({
    carnet: Yup.string().required(),
    nombre: Yup.string().required(),
    apellidos: Yup.string().required(),
    fecha_nacimiento: Yup.date().required(),
    domicilio: Yup.string().required(),
    telefono: Yup.string().required(),
    club: Yup.object().required(),
    categoria: Yup.object().required(),
    rama: Yup.object().required(),
})

const FormGamer=({gamer, createGamer, handleClose, categories})=>{
    const [optTeam, optCategory, optRamas] = useOptGamer()
    const defaultValues = {
        carnet: gamer ? gamer.carnet : '',
        nombre: gamer ? gamer.nombre : '',
        apellidos: gamer ? gamer.apellidos : '',
        fecha_nacimiento: gamer ? gamer.fecha_nacimiento : '',
        domicilio: gamer ? gamer.domicilio : '',
        telefono: gamer ? gamer.telefono : '',
        club: gamer ? gamer.club : '',
        categoria: gamer ? gamer.categoria : '',
        rama: gamer ? gamer.rama : '',
      }
    const { control, handleSubmit } = useForm({
        defaultValues,
        mode: 'onChange',
        reValidateMode: 'onChange',
        resolver: yupResolver(schema)
    })

    const submitGamer=(d)=>{
        const gamer={
            carnet: d.carnet,
            nombre: d.nombre,
            apellidos: d.apellidos,
            fecha_nacimiento: d.fecha_nacimiento,
            domicilio: d.domicilio,
            telefono: d.telefono,
            club: d.club.value,
            categoria: d.categoria.value,
            rama: d.rama.value,
        }
        createGamer(gamer)
    }

    return(
        <div>
            <Form onSubmit={handleSubmit((d)=>submitGamer(d))}>
                <h5>Datos personales :</h5>
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
                    <Form.Label>Apellido</Form.Label>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicFecha">
                    <Controller
                        render={({ field }) => <Form.Control type="date" placeholder="Fecha de nacimiento" {...field} />}
                        name="fecha_nacimiento"
                        control={control}
                        defaultValue={defaultValues.fecha_nacimiento}
                    />
                    <Form.Label>fecha nacimiento</Form.Label>
                </Form.Group>
                <h5>Domicilio actual :</h5>
                <Form.Group className="mb-3" controlId="formBasicDomicilio">
                    <Controller
                        render={({ field }) => <Form.Control type="text" placeholder="Domicilio" {...field} />}
                        name="domicilio"
                        control={control}
                        defaultValue={defaultValues.domicilio}
                    />
                    <Form.Label>Domicilio</Form.Label>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicTelefono">
                    <Controller
                        render={({ field }) => <Form.Control type="text" placeholder="Telefono" {...field} />}
                        name="telefono"
                        control={control}
                        defaultValue={defaultValues.telefono}
                    />
                    <Form.Label>Telefono</Form.Label>
                </Form.Group>                
                <h5>Club :</h5>        
                <Form.Group className="mb-3" controlId="formBasicClub">
                    <Controller
                        render={({ field }) => <Select options={optTeam} {...field} />}
                        name="club"
                        control={control}
                        defaultValue={defaultValues.club}
                    />
                    <Form.Label>Club</Form.Label>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCategoria">
                    <Controller
                        render={({ field }) => <Select options={optCategory} {...field} />}
                        name="categoria"
                        control={control}
                        defaultValue={defaultValues.categoria}
                    />
                    <Form.Label>Categoria</Form.Label>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicRama">
                    <Controller
                        render={({ field }) => <Select 
                            options={optRamas}
                            {...field} 
                            />}
                        name="rama"
                        control={control}
                        defaultValue={optRamas[0]}
                    />
                    <Form.Label>Rama</Form.Label>
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