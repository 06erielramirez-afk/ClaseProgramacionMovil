import { Button,StyleSheet,Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
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

    const icon = type === 'email' ? 'email' : 
                    type === 'password' ? 'lock' : ''
    return(
        // wrapper
            //inputContainer
            <View style={styles.inputContainer}>
                <MaterialIcons name={icon as any } size={28} color="#000000" />
                <TextInput 
                 placeholder={placeholder}
                 value={value} 
                 onChangeText={onChange}
                 onBlur={()=>{}}
                 secureTextEntry={isSecureText}
                 style={styles.input}
                 />

                 
                
                {type === 'password' && (
                    <TouchableOpacity onPress={() => setIsSecureText(!isSecureText)}>
                        <Ionicons name={isSecureText ? 'eye' : 'eye-off'} size={28} />
                    </TouchableOpacity>
                    )}
            </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 15,
    },
    inputContainer: {
        //distribucion de componentes
        flexDirection: 'row',
        alignItems: 'center',
        //estilizacion de input
        borderWidth: 1,
        borderColor:'#ccc',
        borderRadius: 8, 
        paddingHorizontal: 13,
        backgroundColor: '#f9f9f9',
        width:'85%',
        marginBottom: 15,
        paddingVertical: 10

                
    },
    input:{
        flex: 1,
        
        //agregando espacio al componente input nativo
        paddingVertical: 12,
        paddingHorizontal: 15,
        fontSize: 22,
    }

})