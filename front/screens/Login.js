import React from 'react';
import { TextInput, Avatar, Button, Surface } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export const Login = ({ navigation }) => {

    const [textEmail, setTextEmail] = React.useState('');
    const [textPassword, setTextPassword] = React.useState('');

    const Entrar = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "Principal" }]
        })
    }

    const Registro = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: "Registro" }]
        })
    }

    return (
        <Surface style={styles.surface}>
            <Avatar.Text style={styles.iconApp} size={24} label="" />
            <TextInput
                style={styles.input}
                label="Email"
                mode="outlined"
                value={textEmail}
                onChangeText={textEmail => setTextEmail(textEmail)}
            />

            <TextInput
                style={styles.input}
                label="Password"
                mode="outlined"
                value={textPassword}
                onChangeText={textPassword => setTextPassword(textPassword)}
            />

            <Button labelStyle={{ color: '#FFFFFF' }} style={styles.button} mode="contained" onPress={() => Entrar()}>
                Entrar
            </Button>
            <Button style={styles.buttonOutlined} mode="outlined" onPress={() => Registro()}>
                Registro
            </Button>
        </Surface>
    )
}


const styles = StyleSheet.create({
    surface: {
        justifyContent: 'center',
        elevation: 4,
        flex: 1,
        padding: 20
    },
    iconApp: {
        height: 120,
        width: 120,
        marginBottom: 20,
        alignSelf: 'center'
    },
    input: {
        backgroundColor: '#ffffff',
        marginBottom: 10
    },
    button: {
        height: 60,
        marginTop: 10,
        justifyContent: 'center'
    },
    buttonOutlined: {
        height: 50,
        marginTop: 10,
        justifyContent: 'center',
        borderColor: '#FF6347'
    }
});
