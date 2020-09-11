import React from 'react';
import { Grid, } from '@material-ui/core';
import Controls from '../../components/controls/Controls';
import { useForm, Form } from '../../components/useForm';
const initialFValues = {
    id: 0,
    title: '',
    status: false,
}


export default function RolesForm() {
    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('title' in fieldValues)
            temp.title = fieldValues.title ? "" : "This field is required."
        
            setErrors({
                ...temp
            })
    
        if (fieldValues == values){
            return Object.values(temp).every(x => x == "")
        }
            
    }
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
         
        e.preventDefault()
        if (validate()){
             
            console.log('yes you did it', values);
            resetForm()
        }
    }
    
    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                <Controls.Input
                        name="title"
                        label="Title"
                        value={values.title}
                        onChange={handleInputChange}
                        error={errors.title}
                    />
                </Grid>
                <Grid item xs={6}>
                <Controls.Checkbox
                        name="status"
                        label="Status"
                        value={values.status}
                        onChange={handleInputChange}
                        error={errors.status}
                    />
                </Grid>
                <div>
                        <Controls.Button
                            type="submit"
                            text="Submit" />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                    </div>
            </Grid>
        </Form>
    )
}
