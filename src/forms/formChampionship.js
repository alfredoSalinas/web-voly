import React from "react";
import { Button, Form } from "react-bootstrap";
import Select from 'react-select'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

const optRamas=[
    {label: 'Damas', value: 'Damas'},
    {label: 'Varones', value: 'Varones'}
]

const schema = Yup.object().shape({
    nombre: Yup.string().required(),
    rama: Yup.object().required(),
})

const FormChampionship=({championship, createChanpionship, handleClose})=>{
    const defaultValues = {
        nombre: championship ? championship.nombre : '',
        rama: optRamas.find(el=>el.value === 'Damas'),
      }
    const { control, handleSubmit } = useForm({
        defaultValues,
        mode: 'onChange',
        reValidateMode: 'onChange',
        resolver: yupResolver(schema)
    })

    const createData=(d)=>{
        console.log(d)
    }

    return(
        <div>
            <Form onSubmit={handleSubmit((d)=>createData(d))}>
                    <Form.Group className="mb-3" controlId="formBasicNombre">
                    <Controller
                        render={({ field }) => <Form.Control type="text" placeholder="Nombre" {...field} />}
                        name="nombre"
                        control={control}
                        
                    />
                    <Form.Label>Nombre</Form.Label>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicRama">
                    <Controller
                        name="rama"
                        control={control}
                        render={({ field }) => 
                            <Select
                                inputRef={field.ref}
                                classNamePrefix="addl-class" 
                                options={optRamas} 
                                value={field.value}
                                onChange={(val)=>{
                                    console.log(field.value)
                                    field.onChange(val)
                                }}
                                
                            />}
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