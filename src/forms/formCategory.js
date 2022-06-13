import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

const schema = Yup.object().shape({
    categoria: Yup.string().required(),
})

const FormCategory=({category, createCategory, handleClose})=>{
    const defaultValues = {
        categoria: category ? category.categoria : '',
      }
    const { control, handleSubmit } = useForm({
        defaultValues,
        mode: 'onChange',
        reValidateMode: 'onChange',
        resolver: yupResolver(schema)
    })

    return(
        <div>
            <Form onSubmit={handleSubmit((d)=>createCategory(d))}>
                <Form.Group className="mb-3" controlId="formBasicCategoria">
                    <Controller
                        render={({ field }) => <Form.Control type="text" placeholder="Categoria" {...field} />}
                        name="categoria"
                        control={control}
                        defaultValue={defaultValues.categoria}
                    />
                    <Form.Label>Categoria</Form.Label>
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

export default FormCategory