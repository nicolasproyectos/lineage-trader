import React from 'react';
import Radio from '@material-ui/core/Radio';


const style = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    fontSize: '23px',
    columnGap: '25px'
}

export const OpcionesVenta = ({formValues, setFormValues})=> {

  const { radio } = formValues;

  const handleChange = (e) => {
        setFormValues({
            ...formValues,
            radio: e.target.value
        })      
  };

  return (
    <div style={style}>
        <div>
            <label>Weapon</label>
            <Radio
                checked={radio === 'weapon'}
                onChange={handleChange}
                value="weapon"
                name="select-item-type"
                inputProps={{ 'aria-label': 'weapon' }}
                color="primary"
            />
        </div>
        <div>
            <label>Armor</label>
            <Radio
                checked={radio === 'armor'}
                onChange={handleChange}
                value="armor"
                name="select-item-type"
                inputProps={{ 'aria-label': 'armor' }}
                color="primary"
            />
        </div>
        <div>
            <label>Item</label>
            <Radio
                checked={radio === 'item'}
                onChange={handleChange}
                value="item"
                name="select-item-type"
                inputProps={{ 'aria-label': 'item' }}
                color="primary"
            />
        </div>
        <div>
            <label>Sets</label>
            <Radio
                checked={radio === 'sets'}
                onChange={handleChange}
                value="sets"
                name="select-item-type"
                inputProps={{ 'aria-label': 'sets' }}
                color="primary"
            />
        </div>
    </div>
  );
}