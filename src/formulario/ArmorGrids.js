import React, { useCallback, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {InputLabel,MenuItem,FormControl,Select,TextField,Grid} from '@material-ui/core';
import { armorError } from './handleErrors';

const useStyles = makeStyles({
    select: {
      minWidth: '200px',
    },
});

const getTipo = (index,tipo)=>{
    switch (index) {
        case 0:
            return tipo.uno;
        case 1:
            return tipo.dos;
        case 2:
            return tipo.tres
        default:
            break;
    }
}

const getElemento = (index,elemento)=>{
    switch (index) {
        case 0:
            return elemento.uno;
        case 1:
            return elemento.dos;
        case 2:
            return elemento.tres;
        default:
            break;
    }
}


export const ArmorGrids = ({elementos,index,formValues, setFormValues}) => {

    const classes = useStyles();
    const { tipo,elemento } = formValues.armorForm ;
    const [error,setError] = useState(formValues.error.armor);
    const onBlur = (e)=>{
        armorError(setError,formValues,setFormValues,getTipo(index,tipo),getElemento(index,elemento));
    }
    const handleInputChangeTipo = (e,index)=>{
        let nuevoValor = null;
        switch (index) {
            case 0:
                nuevoValor = formValues.armorForm;
                nuevoValor.tipo.uno = e.target.value;
                setFormValues({  ...formValues,  armorForm: nuevoValor });
                break;
            case 1:
                nuevoValor = formValues.armorForm;
                nuevoValor.tipo.dos = e.target.value;
                setFormValues({  ...formValues,  armorForm: nuevoValor });
                break;
            case 2:
                nuevoValor = formValues.armorForm;
                nuevoValor.tipo.tres = e.target.value;
                setFormValues({  ...formValues,  armorForm: nuevoValor });
                break;
            default:
                break;
        }
    }
    const handleInputChangeElemento = (e,index)=>{
        let nuevoValor = null;
        switch (index) {
            case 0:
                if(e.target.value !== 0){
                    if( e.target.value.length <= 2 || e.target.value % 5 === 0 ){
                        if(e.target.value >= 0 && e.target.value <= 180){
                            nuevoValor = formValues.armorForm;
                            nuevoValor.elemento.uno = e.target.value;
                            setFormValues({  ...formValues,  armorForm: nuevoValor });
                        }
                    }
                }
                break;
            case 1:
                if(e.target.value !== 0){
                    if( e.target.value.length <= 2 || e.target.value % 5 === 0 ){
                        if(e.target.value >= 0 && e.target.value <= 180){
                            nuevoValor = formValues.armorForm;
                            nuevoValor.elemento.dos = e.target.value;
                            setFormValues({  ...formValues,  armorForm: nuevoValor });
                        }
                    }
                }
                break;
            case 2:
                if(e.target.value !== 0){
                    if( e.target.value.length <= 2 || e.target.value % 5 === 0 ){
                        if(e.target.value >= 0 && e.target.value <= 180){
                            nuevoValor = formValues.armorForm;
                            nuevoValor.elemento.tres = e.target.value;
                            setFormValues({  ...formValues,  armorForm: nuevoValor });

                        }
                    }
                }
                break;
            default:
                break;
        }
    }
    
    useCallback( getTipo, [tipo] );
    useCallback( getElemento, [elemento] );

    return (
        <>
            <Grid item sm={6} className="animate__animated animate__fadeInDown">
                <FormControl>
                    <InputLabel id={'elemento'}>Elemento</InputLabel>
                    <Select labelId={'elemento'}
                            onChange={(e)=> handleInputChangeTipo(e,index)}
                            value={getTipo(index,tipo)}
                            className={classes.select}
                            error={error}
                            helperText={error ? "*" : ""}
                            onBlur={onBlur}
                    >   
                        <em>
                            <MenuItem value="">Ninguno</MenuItem>
                        </em>
                        {
                            elementos.map( elemento =>(
                                <MenuItem value={elemento} key={elemento}>{elemento}</MenuItem>
                            ))
                        }
                        
                    </Select>
                </FormControl>
            </Grid>
            <Grid item sm={6} className="animate__animated animate__fadeInDown">
                <TextField  id="outlined-basic" 
                            label="P.DEF Elemento" 
                            variant="outlined"
                            type="number"
                            value={getElemento(index,elemento)}
                            inputProps={ { step: 5} }
                            onChange={(e)=> handleInputChangeElemento(e,index)}
                            error={error}
                            helperText={error ? "* multiplos de 5 (max 180)" : ""}
                            onBlur={onBlur}
                />
            </Grid>
        </>
    )
}
