import React from 'react'
import { FormControl, Grid,TextareaAutosize } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    textAreaAutoSize: {
        resize: 'none',
        marginTop: '10px',
        marginLeft: '3px',
        width: '520px',
        borderWidth: '2px'
    },
  });

export const MensajeExtra = ({formValues, setFormValues}) => {
    const classes = useStyles();
    const onBlur = (e)=>{
        setFormValues( {...formValues,mensajeExtra: e.target.value} );
    }
    return (
        
            <FormControl>
                <Grid container spacing={2}>
                    <Grid item sm={12} xs={12}>
                        <TextareaAutosize rowsMin="8" 
                                          rowsMax="6" 
                                          className={classes.textAreaAutoSize} 
                                          placeholder="Mensaje extra"
                                          onBlur={onBlur}
                        />
                                          
                    </Grid>
                </Grid>
            </FormControl>
        
        
    )
}
