import { makeStyles } from '@material-ui/core/styles';
import {InputLabel,MenuItem,FormControl,Select,TextField,Grid} from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import { Enchant } from './Enchant';
import { elementError } from './handleErrors';
const useStyles = makeStyles({
  select: {
    minWidth: '200px',
  },
  label: {
      top: '8px',
      left: '9px'
  },
  textField: {
      width: '200px'
  }
});
const elementos = ['fire','water','wind','earth','holy','dark'];

export  const WeaponForm = ({formValues, setFormValues})=> {
  
    const classes = useStyles();
    const {  tipo,elemento,sA,enchant } = formValues.weaponForm;
    const [ enchantInput, setEnchant ] = useState(enchant);
    const [error, setError] = useState(formValues.error.weapon);

    const onBlur = ()=>{
        elementError(setError,formValues, setFormValues);
    }
    const handleInputChangeTipo = (e)=>{
        let nuevoValor = formValues.weaponForm;
        nuevoValor.tipo = e.target.value;
        setFormValues({
            ...formValues,
            weaponForm: nuevoValor
        });
    }

    const handleInputChangeElemento = (e)=>{
        if(e.target.value !== 0){
            if( e.target.value.length <= 2 || e.target.value % 5 === 0 ){
                if(e.target.value >= 0 && e.target.value <= 450){

                    let nuevoValor = formValues.weaponForm;
                    nuevoValor.elemento = e.target.value;
                    setFormValues({
                        ...formValues,
                        weaponForm: nuevoValor,
                    });
                }

            }
        }
    }

    const handleInputChangeSa = (e)=>{
        let nuevoValor = formValues.weaponForm;
        nuevoValor.sA = e.target.value;
        setFormValues({
            ...formValues,
            weaponForm: nuevoValor
        });
    }

    useEffect(() => {
        let nuevoValor = formValues.weaponForm;
        nuevoValor.enchant = enchantInput;
        setFormValues({
            ...formValues,
            weaponForm: nuevoValor
        });
    }, [enchantInput])

    return (
      <fieldset>
            <legend>
              ¿Cuanto atk.element tiene tu arma?
            </legend>
            <FormControl >
                <Grid container spacing={2}>
                    <Grid item sm={6} xs={12} className="animate__animated animate__fadeInDown">
                        <div>
                            <InputLabel id="elemento-arma" className={classes?.label}>Elemento</InputLabel>
                            <Select labelId="elemento-arma"
                                    className={classes?.select}
                                    onChange={handleInputChangeTipo}
                                    value={tipo}
                                    error={error}
                                    helperText={error ? "campo requerido" : ""}
                                    onBlur={onBlur}
                                    
                            >
                                <MenuItem value="" key="vacio">vacio</MenuItem>
                                {
                                elementos.map( value => (
                                    <MenuItem value={value} key={value}>{value}</MenuItem>
                                ))
                                }
                            </Select>
                         </div>
                    </Grid>
                    <Grid item sm={6} xs={12} className="animate__animated animate__fadeInDown">
                        <TextField  id="outlined-basic" 
                                    label="ATK Elemento" 
                                    variant="outlined"
                                    type="number"
                                    inputProps={ { step: 5} }
                                    error={error}
                                    helperText={error ? "* multiplos de 5 (max 450)" : ""}
                                    onChange={handleInputChangeElemento}
                                    value={elemento}
                                    className={classes?.textField}
                                    onBlur={onBlur}
                        />
                    </Grid>
                    <Grid item sm={6} xs={12} className="animate__animated animate__fadeInDown">
                        <FormControl>
                            <InputLabel id="s.a-label" >S.A</InputLabel>
                            <Select
                                labelId="s.a-label"
                                onChange={handleInputChangeSa}
                                value={sA}
                                className={classes.select}
                                placeholder="s.a"
                            >
                                <MenuItem value="">
                                    <em>vacio</em>
                                </MenuItem>
                                {
                                    formValues?.itemSeleccionado?.SA?.map( valor =>(
                                        <MenuItem value={valor?.nombre} key={valor?.nombre}>{valor?.nombre}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item sm={6} xs={12} className="animate__animated animate__fadeInDown">
                        <Enchant enchant={enchantInput}
                                 setEnchant={setEnchant}
                        />
                    </Grid>
              
            </Grid>
            
            
          </FormControl>
      </fieldset>
    );
}
