import React, { useState, useEffect } from 'react'
import {  Grid } from '@material-ui/core';
import { ImagenSet } from './ImagenSet';
import { ArmorForm } from './ArmorForm';

export const SetForm = ({ formValues, setFormValues}) => {

    const [ id, setId] = useState('');
    const {itemSeleccionado} = formValues;
    const {setForm} = formValues;

    useEffect(() => {
        let nuevoValor = setForm;
        if(itemSeleccionado.partes){
            if(itemSeleccionado.partes[0]){
                nuevoValor.armorFormUno.armorForm.icono = itemSeleccionado?.partes[0]?.icono;
            }
            if(itemSeleccionado.partes[1]){
                nuevoValor.armorFormDos.armorForm.icono = itemSeleccionado?.partes[1]?.icono;
            }
            if(itemSeleccionado.partes[2]){
                nuevoValor.armorFormTres.armorForm.icono = itemSeleccionado?.partes[2]?.icono;
            }
            if(itemSeleccionado.partes[3]){
                nuevoValor.armorFormCuatro.armorForm.icono = itemSeleccionado?.partes[3]?.icono;
            }
            if(itemSeleccionado.partes[4]){
                nuevoValor.armorFormCinco.armorForm.icono = itemSeleccionado?.partes[4]?.icono;
            }
            setFormValues({...formValues,setForm: nuevoValor});
        }
        
    }, [itemSeleccionado]);

    const [armorFormUno, setArmorFormUno] = useState(setForm.armorFormUno);
    const [armorFormDos, setArmorFormDos] = useState(setForm.armorFormDos);
    const [armorFormTres, setArmorFormTres] = useState(setForm.armorFormTres);
    const [armorFormCuatro, setArmorFormCuatro] = useState(setForm.armorFormCuatro);
    const [armorFormCinco, setArmorFormCinco] = useState(setForm.armorFormCinco);

    const arrayStates = [
        [armorFormUno, setArmorFormUno],
        [armorFormDos, setArmorFormDos],
        [armorFormTres, setArmorFormTres],
        [armorFormCuatro, setArmorFormCuatro],
        [armorFormCinco, setArmorFormCinco]
    ];

    useEffect(()=>{
        const errorControl = () =>{
            if(
            armorFormUno?.error?.armor ||
            armorFormDos?.error?.armor ||
            armorFormTres?.error?.armor ||
            armorFormCuatro?.error?.armor ||
            armorFormCinco?.error?.armor 
        ){
            let nuevoValor = formValues.error;
            nuevoValor.sets = true;
            setFormValues({...formValues,error: nuevoValor})
        }else{
            let nuevoValor = formValues.error;
            nuevoValor.sets = false;
            setFormValues({...formValues,error: nuevoValor})
        }}
        errorControl();
    },[armorFormUno,armorFormDos,armorFormTres,armorFormCuatro,armorFormCinco]);

    useEffect(() => {
        let nuevoValor = null;
        switch (id) {
            case 0:
                nuevoValor = formValues.setForm;
                nuevoValor.armorFormUno = armorFormUno;
                setFormValues({...formValues,setForm: nuevoValor});
                break;
            case 1:
                nuevoValor = formValues.setForm;
                nuevoValor.armorFormDos = armorFormDos;
                setFormValues({...formValues,setForm: nuevoValor});
                break;
            case 2:
                nuevoValor = formValues.setForm;
                nuevoValor.armorFormTres = armorFormTres;
                setFormValues({...formValues,setForm: nuevoValor});
                break;
            case 3:
                nuevoValor = formValues.setForm;
                nuevoValor.armorFormCuatro = armorFormCuatro;
                setFormValues({...formValues,setForm: nuevoValor});
                break;
            case 4:
                nuevoValor = formValues.setForm;
                nuevoValor.armorFormCinco = armorFormCinco;
                setFormValues({...formValues,setForm: nuevoValor});
                break;
            default:
                break;
        }
        
    }, [armorFormUno,armorFormDos,armorFormTres,armorFormCuatro,armorFormCinco]);

    return (
        <>
            <fieldset>
                <Grid container justify="center" className="animate__animated animate__fadeIn">
                    {
                        itemSeleccionado?.partes?.map( (item,index)=>(
                            <ImagenSet  item={item}
                                        setId={setId}
                                        index={index}
                                        key={index + 2000}
                            />
                        ))
                    }
                    {
                        itemSeleccionado?.partes?.map( (item,index)=>{
                            if(id === index){
                                return (<ArmorForm  formValues={arrayStates[index][0]} 
                                                    setFormValues={arrayStates[index][1]}
                                                    
                                         />)
                            }
                        })
                    }
                    
                </Grid>
            </fieldset>        
        
            
        </>
    )
}
