

export const elementError = (setError,formValues,setFormValues) => {
    const {  tipo,elemento } = formValues.weaponForm;

    if(tipo !== "" && elemento === ""){
        setError( () =>{
            let nuevoValor = formValues.error;
            nuevoValor.weapon = true;
            setFormValues({...formValues,error: nuevoValor});
            return true;
        });
    }else if(tipo === "" && elemento !== ""){
        setError( () =>{
            let nuevoValor = formValues.error;
            nuevoValor.weapon = true;
            setFormValues({...formValues,error: nuevoValor});
            return true;
        });
    }else if(!(elemento % 5 === 0)){
        setError( () =>{
            let nuevoValor = formValues.error;
            nuevoValor.weapon = true;
            setFormValues({...formValues,error: nuevoValor});
            return true;
        });
    }else{
        setError( () =>{
            let nuevoValor = formValues.error;
            nuevoValor.weapon = false;
            setFormValues({...formValues,error: nuevoValor});
            return false;
        });
    }
}
export const armorError = (setError,formValues,setFormValues,tipo = "",elemento) => {
    
    if(tipo !== ""  && elemento === ""){
        setError( () =>{
            let nuevoValor = formValues.error;
            console.log(nuevoValor.armor);
            nuevoValor.armor = true;
            setFormValues({...formValues,error: nuevoValor});
            return true;
        });
    }else if(tipo === "" && elemento !== ""){
        setError( () =>{
            let nuevoValor = formValues.error;
            nuevoValor.armor = true;
            setFormValues({...formValues,error: nuevoValor});
            return true;
        });
    }else if(!(elemento % 5 === 0)){
        setError( () =>{
            let nuevoValor = formValues.error;
            nuevoValor.armor = true;
            setFormValues({...formValues,error: nuevoValor});
            return true;
        });
    }else{
        setError( () =>{
            let nuevoValor = formValues.error;
            nuevoValor.armor = false;
            setFormValues({...formValues,error: nuevoValor});
            return false;
        });
    }
}

export const errorPrecio = (setError,formValues,setFormValues,moneda,monto)=>{
    if(moneda !== "vacio" && monto === ""){
        setError( () =>{
            let nuevoValor = formValues.error;
            nuevoValor.precio = true;
            setFormValues({...formValues,error: nuevoValor});
            return true;
        });
    }else if(moneda === "" && monto !== ""){
        setError( () =>{
            let nuevoValor = formValues.error;
            nuevoValor.precio = true;
            setFormValues({...formValues,error: nuevoValor});
            return true;
        });
    }else{
        setError( () =>{
            let nuevoValor = formValues.error;
            nuevoValor.precio = false;
            setFormValues({...formValues,error: nuevoValor});
            return false;
        });
    }
}

export const botonDisabled = (formValues)=>{
    
    let retorno = false;

    const { 
        nombreItem,
        precio
     } = formValues.error;

    if(
        nombreItem ||
        precio
    ){
        return true;
    }
    if(formValues.nombreItem === "" || formValues.nombreItem === null){
        return true;
    }
    return retorno;
}

export const botonDisabledWeapon = (formValues)=>{
    let retorno = false;
    const { 
        weapon
     } = formValues.error;
    if( botonDisabled(formValues)){
        return true;
    }
    if(weapon){
        return true;
    }
    return retorno;

}

export const botonDisabledArmor = (formValues)=>{
    let retorno = false;
    const { 
        armor
     } = formValues.error;
    if( botonDisabled(formValues)){
        return true;
    }
    if(armor){
        return true;
    }
    return retorno;

}

export const botonDisabledSets = (formValues)=>{
    let retorno = false;
    const { 
        sets
     } = formValues.error;
    if( botonDisabled(formValues)){
        return true;
    }
    if(sets){
        return true;
    }
    return retorno;

}