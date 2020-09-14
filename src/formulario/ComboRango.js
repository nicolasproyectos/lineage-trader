import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel,MenuItem,FormControl,Select,Grid } from '@material-ui/core';

const useStyles = makeStyles({
  select: {
    minWidth: '100px',
  },
});

const rangosDisponibles = ['S84','S80','S','A','B','C','D'];

export const ComboRango = ({formValues,setFormValues})=> {
  
  const classes = useStyles();
  const {rango} = formValues;
  const handleInputChange = (e)=>{
    setFormValues({
      ...formValues,
      rango: e.target.value
    })
  }
  return (
    <Grid container className="animate__animated animate__fadeIn">
      <Grid item sm={6} >
        <FormControl >
            <InputLabel id="rango-label">Rango</InputLabel>
              <Select
                labelId="rango-label"
                className={classes.select}
                value={rango}
                onChange={handleInputChange}
            >
            <MenuItem value="">
              <em>vacio</em>
            </MenuItem>
            {
              rangosDisponibles.map( valor=>(
                <MenuItem value={valor} key={valor}>{valor}</MenuItem>
              ))
            }
          </Select>
      </FormControl>
      </Grid>
    </Grid>
  );
}
