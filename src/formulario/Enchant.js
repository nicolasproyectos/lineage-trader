import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, Grid,TextField } from '@material-ui/core';

const useStyles = makeStyles({
    textField: {
      maxWidth: '200px',
    },
  });
                

export  const Enchant = ({enchant,setEnchant}) =>{
    const classes = useStyles();
    const handleInputChange = (e)=>{
        if(e.target.value >= 0 && e.target.value <= 15){
          setEnchant(e.target.value);
        }
    }
    
    return (
        
            <FormControl>
                <Grid container>    
                    <Grid item sm={12} className="animate__animated animate__fadeInDown">
                        <TextField  
                                    label="Enchant" 
                                    variant="outlined"
                                    type="number"
                                    value={enchant}
                                    className={classes.textField}
                                    onChange={handleInputChange}
                                    helperText="max 15"
                        />
                    </Grid>
                </Grid>
            </FormControl>
        
        
  );
}



