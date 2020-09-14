import React, { useState, useEffect } from 'react'
import {FormControl,Grid} from '@material-ui/core';
import { ArmorGrids } from './ArmorGrids';
import { Enchant } from './Enchant';


const elementos = [
    ['fire','water'],
    ['wind','earth'],
    ['holy','dark']
]

export const ArmorForm = ({formValues, setFormValues})=>{

    const { enchant } =  formValues.armorForm;
    const [enchantInput, setEnchantInput] = useState(enchant);


    useEffect(() => {
        let nuevoValor = formValues.armorForm;
        nuevoValor.enchant = enchantInput;
        setFormValues({
            ...formValues,
            armorForm: nuevoValor
        });
    }, [enchantInput])
    return (
        <fieldset>
            <legend>
                ¿Cuanto P.DEF elemento tiene?
            </legend>
                <FormControl>
                    <Grid container spacing={2}>
                        {
                            elementos.map( (value,index) => (
                                <ArmorGrids     elementos={value}
                                                index={index}
                                                formValues={formValues}
                                                setFormValues={setFormValues}
                                                key={index+1000}
                                />
                            ))
                        }
                        <Grid item sm={6} className="animate__animated animate__fadeInDown">
                            <Enchant enchant={enchantInput}
                                     setEnchant={setEnchantInput}
                            />
                        </Grid>
                    </Grid>
                </FormControl>
        </fieldset>
             
    );
}
