import { Button,KeyboardTypeOptions,StyleSheet,Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import {MaterialIcons, Ionicons} from "@expo/vector-icons";
import { useState } from "react";


type Props = {
    required? : boolean;
    type?: 'text' | 'email' | 'password' | 'number';
    value: string;
    placeholder : string;
    onChange: (text: string) => void;
}

export default function CustomInput ({type = "email", required, value, placeholder, onChange}: Props){
    const [isSecureText, setIsSecureText] = useState(type === "password");
    //agregado 29/10
    const isPasswordField = type ==='password';//
    const icon = type === 'email' ? 'email' : 
                    type === 'password' ? 'lock' : ''

    //agregado 29/10
    const keyboardType: KeyboardTypeOptions =
        type==='email'?'email-address':
        type === 'number'?'numeric':
        'default';//

        //funcion para calcular errores de validacion
        //output: string
        const getError = () => {
            if (type === 'email' && !value.includes('@')) return 'Correo invalido';
            if (type === 'password' && value.length < 6) return 'La contraseña debe ser mas fuerte';
            // validar los campos obligatorios
        }

        const error = getError();
    return(
        <View style= {styles.wrapper}>
            <View style={[styles.inputContainer, error && styles.inputError]}>
                <MaterialIcons name={icon as any } size={28} color="#000000" />
                <TextInput 
                 placeholder={placeholder}
                 value={value} 
                 onChangeText={onChange}
                 onBlur={()=>{}}
                 secureTextEntry={isSecureText}
                 style={styles.input}
                 />

                 
                
                {isPasswordField && (
                    <TouchableOpacity onPress={() => setIsSecureText(!isSecureText)}>
                        <Ionicons name={isSecureText ? 'eye' : 'eye-off'} size={28} />
                    </TouchableOpacity>
                    )}
                        
            </View>
           { error && <Text> {error} </Text>  }
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop:10,
    },
    
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor:'#ccc',
        borderRadius: 8, 
        paddingHorizontal: 13,
        backgroundColor: '#f9f9f9',
        width:'85%',
        marginBottom: 10,
        paddingVertical: 10
                
    },
    input:{
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 15,
        fontSize: 22,
    },

    inputError:{
        borderColor: 'red',
    }

})