export const onSubmit = (formvalues)=>{
    const { icono, rango, nombreItem, mensajeExtra,radio,precioForm } = formvalues;
    const retornarCaracteristica = ()=>{
        let retorno = null;
        if(radio === "weapon"){
            retorno = formvalues.weaponForm;
        }else if( radio === "armor" ){
            retorno = formvalues.armorForm;
        }else if( radio === "sets" ){
            retorno = formvalues.setForm;
        }else{
            return;
        }
        return retorno;
    }
    const caracteristicas = retornarCaracteristica();
    console.log(caracteristicas);
    if(
        icono !== "" &&
        rango !== "" &&
        nombreItem !== ""
    ){
        let nuevoObjeto = {
            icono,
            nombre: nombreItem,
            tipo: radio,
            rango: (radio !== 'item') ? rango : undefined,
            precio: precioForm,
            mensaje: mensajeExtra,
            caracteristicas
        }
        fetch('http://localhost:4000/venta', {method: "POST", body: JSON.stringify(nuevoObjeto),headers:{
            'Content-Type': 'application/json'
          } }).then( res=> res.json() )
          .then( response => console.log(response));
    }
}