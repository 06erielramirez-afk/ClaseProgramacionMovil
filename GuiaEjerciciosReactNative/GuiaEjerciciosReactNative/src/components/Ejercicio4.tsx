import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Ejercicio4() {
  const [cargando, setCargando] = useState(true);

  // useEffect se ejecuta cuando cambia la variable "cargando".
  useEffect(() => {
    if (cargando) {
      const timer = setTimeout(() => {
        setCargando(false);
      }, 3000);

      // Limpiar el timeout si el componente se desmonta o se reinicia
      return () => clearTimeout(timer);
    }
  }, [cargando]);

  const reiniciarCarga = () => {
    setCargando(true);
  };

  return (
    // Este View muestra el contenido del Ejercicio 4.
    <View style={styles.container}>
      <Text style={styles.titulo}>Ejercicio 4: Simulación de carga</Text>
      <Text style={cargando ? styles.texto : styles.bienvenido}>
        {cargando ? "Cargando..." : "¡Bienvenido a la vida!"}
      </Text>

      {/* Botón para reiniciar la carga */}
      <View style={{ marginTop: 20 }}>
        <Button title="Reiniciar carga" onPress={reiniciarCarga} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
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
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#523954",
  },
  texto: {
    fontSize: 16,
    color: "gray",
  },
  bienvenido: {
    fontSize: 18,
    color: "green",
    fontWeight: "bold",
  },
});
