import React, { useState,useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { getItems } from './getItems';

export const BuscarItem = ({formValues, setFormValues}) => {

    const {nombreItem,rango,radio} = formValues;
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState(formValues.error.nombreItem);
    const [opciones, setOpciones] = useState([]);
    const [ items, setItems ] = useState([]);
    
    useEffect(() => {
        if( nombreItem !== "" && formValues.itemSeleccionado?.rango !== rango){
            setFormValues({
                ...formValues,
                nombreItem: "",
                itemSeleccionado: {}
            });
        }
        getItems(radio).then( items =>{
            let nuevoValor = [];
            let itemsFiltrados = items.respuesta;
            if( rango !== "" ){
                itemsFiltrados = itemsFiltrados.filter( valor => valor.rango === rango );
            }
            itemsFiltrados.forEach( valor => nuevoValor.push( valor.nombre ) );
            setItems( ()=>{
                setOpciones(nuevoValor);
                return itemsFiltrados;
            });
            
        })
    }, [rango,radio]);

    const handleInputChange = (e,v)=>{
        if( v !== null){
            let itemSeleccionado = items.find( valor => valor.nombre === v );
            setFormValues({
                ...formValues,
                nombreItem: v,
                rango: itemSeleccionado?.rango,
                icono: itemSeleccionado?.icono,
                itemSeleccionado
            });
        }else{
            setFormValues({
                ...formValues,
                nombreItem: v,
                itemSeleccionado: {},
                icono: ""
            });
        }
    }
    const onBlur = (e)=>{
        if(nombreItem === "" || nombreItem === null){
            setError( () =>{
                let nuevoValor = formValues.error;
                nuevoValor.nombreItem = true;
                setFormValues({...formValues,error: nuevoValor});
                return true;
            });
        }else{
            setError(false);
        }
    }
    
    return (
        
        <Autocomplete
            className="animate__animated animate__fadeIn"
            value={nombreItem}
            onChange={handleInputChange}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={opciones}
            renderInput={(params) => <TextField {...params} 
                                                label="Buscar Item" 
                                                variant="outlined" 
                                                margin="normal"
                                                onBlur={onBlur}
                                                error={error}
                                                helperText={error ? "campo requerido" : ""}
            />}
        />
    )
}