import React, { useState } from 'react';
import { FormControl, Grid,TextField } from '@material-ui/core';
import {errorPrecio } from './handleErrors'
const currencies = [
    {
        value: 'vacio',
        label: 'vacio',
    },
    {
        value: 'adena',
        label: 'adena',
    },
    {
        value: 'AR$',
        label: 'AR$',
    },
    {
        value: 'USD$',
        label: 'USD$',
    }
];

export const PrecioForm = ({formValues, setFormValues}) =>{
    
    const { moneda,monto } = formValues.precioForm;
    const [errorUno, setErrorUno] = useState(false);
    const [errorDos, setErrorDos] = useState(false);
    
    const onBlurUno = ()=>{
        errorPrecio(setErrorUno,formValues,setFormValues,moneda.uno,monto.uno);
    }
    const onBlurDos = ()=>{
        errorPrecio(setErrorDos,formValues,setFormValues,moneda.dos,monto.dos);
    }

    const handleInputChangeMonedaUno = (e)=>{
        
        let nuevoValor =  formValues.precioForm;
        nuevoValor.moneda.uno = e?.target?.value;
        setFormValues({
            ...formValues,
            precioForm: nuevoValor
        });
    }
    const handleInputChangeMonedaDos = (e)=>{
        let nuevoValor =  formValues.precioForm;
        nuevoValor.moneda.dos =  e?.target?.value;
        setFormValues({
            ...formValues,
            precioForm: nuevoValor
        });
    }
    const handleInputChangeMontoUno = (e)=>{
        let nuevoValor =  formValues.precioForm;
        nuevoValor.monto.uno =  e?.target?.value;
        setFormValues({
            ...formValues,
            precioForm: nuevoValor
        });
    }
    const handleInputChangeMontoDos = (e)=>{
        let nuevoValor =  formValues.precioForm;
        nuevoValor.monto.dos =  e?.target?.value;
        setFormValues({
            ...formValues,
            precioForm: nuevoValor
        });
    }
    

    return (
        <fieldset className="animate__animated animate__fadeIn">
            <legend>Precio</legend>
            <FormControl>
                <Grid container spacing={2}>
                    <Grid item sm={6} xs={6} className="animate__animated animate__fadeIn">
                        
                            <TextField  id="outlined-select-currency-native"
                                        select
                                        label="Moneda"
                                        SelectProps={{ native: true}}
                                        variant="outlined"
                                        error={errorUno}
                                        helperText={ errorUno ? "*" : " "}
                                        onChange={handleInputChangeMonedaUno}
                                        value={moneda.uno}
                                        onBlur={onBlurUno}
                                >
                                {currencies.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </TextField>
                        
                    </Grid>
                    <Grid item sm={6} xs={6} className="animate__animated animate__fadeIn">
                        <TextField  id="outlined-basic" 
                                label="Cantidad" 
                                variant="outlined"
                                onChange={handleInputChangeMontoUno}
                                error={errorUno}
                                helperText={ errorUno ? "*" : ""}
                                type="number"
                                value={monto.uno}
                                onBlur={onBlurUno}
                                
                        />
                    </Grid>
                    <Grid item sm={6} xs={6} className="animate__animated animate__fadeIn">
                        <TextField  id="outlined-select-currency-native"
                                    select
                                    label="Moneda"
                                    SelectProps={{ native: true}}
                                    variant="outlined"
                                    error={errorDos}
                                    helperText={  errorDos ? "*" : " "}
                                    onChange={handleInputChangeMonedaDos}
                                    value={moneda.dos}
                                    onBlur={onBlurDos}
                            >
                            {currencies.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item sm={6} xs={6} className="animate__animated animate__fadeIn">
                        <TextField  id="outlined-basic" 
                                label="Cantidad" 
                                variant="outlined"
                                type="number"
                                onChange={handleInputChangeMontoDos}
                                error={errorDos}
                                helperText={ errorDos ? "*" : ""}
                                value={monto.dos}
                                onBlur={onBlurDos}
                        />                
                    </Grid>
                </Grid>
            </FormControl>
        </fieldset>
    
  );
}



