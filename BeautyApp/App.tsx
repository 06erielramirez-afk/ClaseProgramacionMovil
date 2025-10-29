import { StyleSheet, Text, View } from 'react-native';
import CustomInput from './src/components/CustomInput';
import { useState } from 'react';

export default function App() {
const [email, setEmail] = useState('');
const [contraseña, setContraseña] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Sign in</Text>
       <CustomInput 
       value={contraseña} 
       placeholder={'Contraseña'} 
       onChange={setContraseña}
                
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    //habilita uso de flexbox para distribucion de espacio
    flex:1,
    //distribucion en eje horizontal
    alignItems: 'center',
    //alineacion en eje vertical
    justifyContent: 'center',
    padding: 20,
    backgroundColor:'red'
  },
  content:{
    color: '#fff',
  },
  textStyle:{
    fontSize: 30,
    alignItems: 'flex-start'
  }
});