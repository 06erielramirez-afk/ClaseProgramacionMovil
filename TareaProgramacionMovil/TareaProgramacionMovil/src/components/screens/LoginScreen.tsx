import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';


export default function LoginScreen({navigation} : any) {
const [email, setEmail] = useState('');
const [Contraseña, setContraseña] = useState('');
const handleLogin = () => {
    try {
        navigation.navigate('Home',{email});
    } catch (error) {
        console.log(error);
    }

}

  return (
    <View style={styles.ViewStyle}>
      <View style={styles.container}>
        <Text style={styles.TextStyle}>Sign in</Text>
      
        <CustomInput 
          value={email}
          placeholder={'Correo'}
          onChange={setEmail}
          
        />

        <CustomInput
          value={Contraseña}
          placeholder={'Contraseña'}
          onChange={setContraseña}
          type="password"
        />

        <CustomButton 
          title="Login" 
          onPress={handleLogin} 
          variant="primary"
          
        />

        <CustomButton 
          title="Registrarse" 
          onPress={() => {}} 
          variant="secondary"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f1',
  },

  container: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    width: '85%',
    alignItems: 'center',
    shadowRadius: 10,
    elevation: 5, 
  },

  TextStyle: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  
});