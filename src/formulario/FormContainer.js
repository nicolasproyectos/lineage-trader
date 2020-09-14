import React, {useState, useEffect} from 'react'
import { Container } from '@material-ui/core'
import { ComboRango } from './ComboRango'
import { OpcionesVenta } from './OpcionesVenta'
import { BuscarItem } from './BuscarItem'
import { WeaponForm } from './WeaponForm'
import { PrecioForm } from './PrecioForm'
import { ArmorForm } from './ArmorForm'
import { SetForm } from './SetForm'
import { ButtomVender } from './ButtomVender'
import { MensajeExtra } from './MensajeExtra'


const initialValues = {
    icono: "",
    rango: "",
    radio: "weapon",
    nombreItem: "",
    mensajeExtra: "",
    error: {
        nombreItem: false,
        weapon: false,
        armor: false,
        precio: false,
        sets: false
    },
    weaponForm: {
        tipo: "",
        elemento: "",
        sA: "",
        enchant: ""
    },
    precioForm: {
        moneda: {
            uno: "vacio",
            dos: "vacio"
        },
        monto: {
            uno: "",
            dos: ""
        }
    },
    armorForm: {
        tipo: {
            uno: "",
            dos: "",
            tres: ""
        },
        elemento: {
            uno: "",
            dos: "",
            tres: ""
        },
        enchant: ""
    },
    setForm: {
        armorFormUno:{
            armorForm: {
                icono: "",
                tipo: {
                    uno: "",
                    dos: "",
                    tres: ""
                },
                elemento: {
                    uno: "",
                    dos: "",
                    tres: ""
                },
                enchant: ""
            },
            error: {
                armor: false
            }
        } ,
        armorFormDos:{
            armorForm: {
                icono: "",
                tipo: {
                    uno: "",
                    dos: "",
                    tres: ""
                },
                elemento: {
                    uno: "",
                    dos: "",
                    tres: ""
                },
                enchant: ""
            },
            error: {
                armor: false
            }
        },
        armorFormTres:{
            armorForm: {
                icono: "",
                tipo: {
                    uno: "",
                    dos: "",
                    tres: ""
                },
                elemento: {
                    uno: "",
                    dos: "",
                    tres: ""
                },
                enchant: ""
            },
            error: {
                armor: false
            }
        },
        armorFormCuatro:{
            armorForm: {
                icono: "",
                tipo: {
                    uno: "",
                    dos: "",
                    tres: ""
                },
                elemento: {
                    uno: "",
                    dos: "",
                    tres: ""
                },
                enchant: ""
            },
            error: {
                armor: false
            }
        },
        armorFormCinco:{
            armorForm: {
                icono: "",
                tipo: {
                    uno: "",
                    dos: "",
                    tres: ""
                },
                elemento: {
                    uno: "",
                    dos: "",
                    tres: ""
                },
                enchant: ""
            },
            error: {
                armor: false
            }
        },
    },
    itemSeleccionado: {}
}


export const FormContainer = () => {

    const [ formValues, setFormValues ] = useState(initialValues);
    const { radio } = formValues;

    useEffect(() => {
        setFormValues({
            ...formValues,
            nombreItem: "",
            rango: "",
            icono: ""
        });
    }, [radio]);

    console.log(formValues.itemSeleccionado);
    return (
        <Container maxWidth="sm">
            <fieldset>
                <legend>Item que desea vender</legend>
                <OpcionesVenta  formValues={formValues} setFormValues={setFormValues}/>
                {
                    (radio === 'weapon' || radio === 'armor' || radio === 'sets')
                    &&
                    <ComboRango     formValues={formValues} setFormValues={setFormValues}/>
                }
                <BuscarItem     formValues={formValues} setFormValues={setFormValues}/>
                {
                    (radio === 'weapon')
                    &&
                    <WeaponForm     formValues={formValues} 
                                    setFormValues={setFormValues}
                                    
                    />
                }
                {
                    (radio === 'armor')
                    &&
                    <ArmorForm      formValues={formValues} setFormValues={setFormValues}/>
                }
                {
                    (radio === 'sets' && formValues.itemSeleccionado.partes)
                    &&
                    <SetForm        formValues={formValues} setFormValues={setFormValues}/>
                }
                <PrecioForm     formValues={formValues} setFormValues={setFormValues}/>
                <MensajeExtra   formValues={formValues} setFormValues={setFormValues}/>
                <ButtomVender formValues={formValues}/>
            </fieldset>
            
        </Container>
    )
}
