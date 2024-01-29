import React, { useState } from 'react'
import MainAppbar from '../components/MainAppbar'
import { StyleSheet, View } from 'react-native'
import {Button, TextInput} from 'react-native-paper'

export default function Login(){
    const [formdata, setFormData] = useState({username: '',password: ''})
    const [showError, SetShowError] = useState(false)
    
    const validateAndSubmit = () => {
        SetShowError(true)
        if (formdata.username.length > 0 && formdata.password.length >8) {
            setFormData({username: '',password: ''})
            showError(false)
        }
    }

    return(
        <>
        <MainAppbar title="Login"/>
        <View style={styles.container}>
            <TextInput 
            label="Username"
            style={styles.input_field}
            value={formdata.username}
            onChangeText={text => setFormData({...formdata,username: text})}
            error={formdata.username.length===0 && showError}
            />
            <TextInput 
            label="Password" style={styles.input_field} 
            keyboardType='visible-password'
            value={formdata.password}
            onChangeText={text => setFormData({...formdata,password: text})}
            error={formdata.password.length===0 && showError}
            />
            <Button mode="contained" style={styles.button} onPress={validateAndSubmit}>Submit</Button>

        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    input_field: {
        backgroundColor: '#fcfcfc',
        margin: (16,8,16,8)
    },
    button: {
        margin: (16,8,0,8)
    }
});