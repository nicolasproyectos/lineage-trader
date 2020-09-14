import React from 'react'
import { IconButton, Grid } from '@material-ui/core';

export const ImagenSet = ({setId,item,index}) => {

    return (
        <Grid item sm={2}>
            <IconButton  id={index}
                         onClick={()=> setId(index)}
            
            >
                        <img src={`${item.icono}.png`} id={index} alt="icono de la parte de la armadura"/>
            </IconButton>
        </Grid>
    )
}
