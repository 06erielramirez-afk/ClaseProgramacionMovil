import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Ejercicio2() {
  // Aqui creamos una variable "contador" que empieza en 0
  const [contador, setContador] = useState(0);

  // Aqui useEffect se ejecuta cada vez que cambia el valor del contador
  useEffect(() => {
    console.log("El contador cambió:", contador);
  }, [contador]);

  // Esto es lo que mostramos en pantalla
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Ejercicio 2: Contador</Text>
      <Text style={styles.texto}>
        Has presionado el botón {contador} veces.
      </Text>

      <Button title="Aumentar" onPress={() => setContador(contador + 1)} />
    
      <Button title="Reiniciar" onPress={() => setContador(0)} />

      {/*Si el número es múltiplo de "5 como 5, 10, 15, etc." mostramos un mensaje*/ } 
      {contador % 5 === 0 && contador !== 0 && (
        <Text style={styles.mensaje}>¡Has alcanzado un múltiplo de 5!</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 30,
    marginTop: 20,
    padding: 15,
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#523954",
    marginBottom: 15,
  },
  texto: {
    fontSize: 16,
    marginBottom: 10,
  },
  mensaje: {
    fontSize: 16,
    color: "green",
    marginTop: 10,
    fontWeight: "bold",
  },
});
