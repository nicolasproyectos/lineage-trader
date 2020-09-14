import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const getArmor = async()=>{
    const res = await fetch('http://localhost:4000/armors',{method: "GET"});
    const datos = await res.json();
    return datos;
}


export function Tabla() {
    const classes = useStyles();
    const [state, setState] = useState([]);

    useEffect( ()=>{
        getArmor().then( respuesta => {
            setState(respuesta.respuesta);
        })
    },[]);

    console.log(state);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Icono</TableCell>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">Tipo</TableCell>
            <TableCell align="right">Rango</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {
                state.map( item=>(
                    <TableRow key={item.id}>
                        <TableCell align="right">
                            <img src={`${item.icono}.png`} alt={item.nombre}/>
                        </TableCell>
                        <TableCell align="right">{item.nombre}</TableCell>
                        <TableCell align="right">{item.tipo}</TableCell>
                        <TableCell align="right">{item.rango}</TableCell>
                    </TableRow>
                ) )
            }
            
         
        </TableBody>
      </Table>
    </TableContainer>
  );
}
