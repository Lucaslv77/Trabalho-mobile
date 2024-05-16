import React, { useContext, useState } from 'react';
import {View, textInput, Button, styleSheet} from 'react-native'
import { CarContext } from './CarContext';

export default function CarInputComponent(){

    const {setCarros} = useContext(CarContext)
    const {marca, setMarca} = useState('')
    const {modelo, setModelo} = useState('')
    const {alert, setAlert} = useState(false)

    const addCarro = () => {
        if(marca && modelo){
            setCarros(prevCarros => [ ...prevCarros, {marca, modelo}])
            setMarca('')
            setModelo('')
        }
    }

    return(
        <View>
            <textInput value={marca} onChagenText={setMarca} placeholder="Marca do Carro" />
            <textInput value={modelo} onChagenText={setModelo} placeholder="Modelo do Carro" />
            <Button title='Adicionar' onPress={addCarro}/>
           
        </View>
    )
}

const style = styleSheet.create({
    container: {
        flex: 1,
    }
})