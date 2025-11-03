import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function Ejercicio1() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Ejercicio 1</Text>

      {/* Input para escribir el nombre, se guarda en "nombre" */}
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        value={nombre}
        onChangeText={setNombre}
      />

    {/* Input para escribir el nombre, se guarda en "edad" */}
      <TextInput
        style={styles.input}
        placeholder="Escribe tu edad"
        value={edad}
        onChangeText={setEdad}
      />

      {/* Mensaje que aparece solo si el usuario ya escribió nombre y edad */}
      {nombre !== "" && edad !== "" && (
        <Text style={styles.mensaje}>
          Hola, {nombre}. Tienes {edad} años.
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 10,
    padding: 20,
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#523954",
  },
  input: {
    width: "90%",
    height: 45,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
  },
  mensaje: {
    marginTop: 20,
    fontSize: 18,
    color: "green",
    fontWeight: "bold",
  },
});
