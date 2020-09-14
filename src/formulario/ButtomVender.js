import React,{useState, useEffect} from 'react'
import {  Grid,Button } from '@material-ui/core';
import { botonDisabled,botonDisabledWeapon,botonDisabledArmor,botonDisabledSets} from './handleErrors';
import { onSubmit } from './helpers/helper';

export const ButtomVender = ({formValues}) => {

    const [ disabled, setDisabled] = useState(true);
    const { radio } = formValues;

    useEffect( ()=>{
        switch (radio) {
            case 'item':
                setDisabled( botonDisabled(formValues) );
                break;
            case 'weapon':
                setDisabled(botonDisabledWeapon( formValues ));
                break;
            case 'armor':
                setDisabled(botonDisabledArmor( formValues ));
                break;
            case 'sets':
                setDisabled(botonDisabledSets( formValues ));
                break;
            default:
                break;
        }
        
    },[formValues] );

    return (
        <Grid container direction="row" style={  {textAlign: 'center' , marginTop: '20px'} } >
            <Grid item sm={6} xs={6} className="animate__animated animate__fadeIn">
                <Button size="large" 
                        variant="contained" 
                        color="primary"
                        disabled={disabled}
                        onClick={()=> onSubmit(formValues)}
                >
                    Vender
                </Button>
            </Grid>
            <Grid   item sm={6} xs={6} className="animate__animated animate__fadeIn">
                    <Button size="large" 
                            variant="contained" 
                            color="secondary"
                            
                    >
                        Cancelar
                    </Button>
                </Grid>
        </Grid> 
    )
}
