import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

const schema = Yup.object().shape({
    carnet: Yup.string(),
    nombre: Yup.string().required(),
    apellidos: Yup.string().required(),
    colegio : Yup.string().required(),
    curso : Yup.string().required(),
    celular: Yup.string(),
    apoderado: Yup.string().required(),
    celularApoderado: Yup.string()
})


const FormTeam=({student, createStudent, handleClose})=>{
    const defaultValues = {
        carnet: student ? student.carnet : '',
        nombre: student ? student.nombre : '',
        apellidos: student ? student.apellidos : '',
        colegio: student ? student.colegio : '',
        curso: student ? student.curso : '',
        celular: student ? student.celular : '',
        apoderado: student ? student.apoderado : '',
        celularApoderado: student ? student.celularApoderado : '',
      }
    const { control, handleSubmit } = useForm({
        defaultValues,
        mode: 'onChange',
        reValidateMode: 'onChange',
        resolver: yupResolver(schema)
    })

    const ver=()=>{
        console.log(student)
    }

    return(
        <div>
            <Form onSubmit={handleSubmit((d)=>createStudent(d))}>
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
                    <Form.Group className="mb-3" controlId="formBasicColegio">
                    <Controller
                        render={({ field }) => <Form.Control type="text" placeholder="Colegio" {...field} />}
                        name="colegio"
                        control={control}
                        defaultValue={defaultValues.colegio}
                    />
                    <Form.Label>Colegio</Form.Label>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCurso">
                    <Controller
                        render={({ field }) => <Form.Control type="text" placeholder="Curso" {...field} />}
                        name="curso"
                        control={control}
                        defaultValue={defaultValues.curso}
                    />
                    <Form.Label>Curso</Form.Label>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCelular">
                    <Controller
                        render={({ field }) => <Form.Control type="text" placeholder="Celular" {...field} />}
                        name="celular"
                        control={control}
                        defaultValue={defaultValues.celular}
                    />
                    <Form.Label>Celular</Form.Label>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicApoderado">
                    <Controller
                        render={({ field }) => <Form.Control type="text" placeholder="Apoderado" {...field} />}
                        name="apoderado"
                        control={control}
                        defaultValue={defaultValues.apoderado}
                    />
                    <Form.Label>Apoderado</Form.Label>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCelelularApoderado">
                    <Controller
                        render={({ field }) => <Form.Control type="text" placeholder="Celular del apoderado" {...field} />}
                        name="celularApoderado"
                        control={control}
                        defaultValue={defaultValues.celularApoderado}
                    />
                    <Form.Label>Celular del Apoderado</Form.Label>
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