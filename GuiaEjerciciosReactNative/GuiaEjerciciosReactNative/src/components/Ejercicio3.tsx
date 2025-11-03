import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Ejercicio3() {
 // Creamos una variable de estado llamada "hora" que empieza vacía ("").
  const [hora, setHora] = useState<string>("");

  // useEffect se ejecuta al montar el componente.
  useEffect(() => {
    const intervalo = setInterval(() => {
      const ahora = new Date();

      // Ajustamos la hora a UTC-6
      let h = ahora.getUTCHours() - 6;
      if (h < 0) h += 24;

      let m = ahora.getUTCMinutes();
      let s = ahora.getUTCSeconds();

      // Convertir a string y agregamos cero adelante si es menor a 10
      let hs = h < 10 ? "0" + h : "" + h;
      let ms = m < 10 ? "0" + m : "" + m;
      let ss = s < 10 ? "0" + s : "" + s;

      // Juntar la hora completa
      setHora(hs + ":" + ms + ":" + ss);
    }, 1000);

    // Limpia el intervalo al desmontar el componente
    return () => clearInterval(intervalo);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Ejercicio 3: Reloj en tiempo real</Text>
      <Text style={styles.hora}>{hora}</Text>
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
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#523954",
  },
  hora: {
    fontSize: 36,
    color: "#2e86de",
    fontWeight: "bold",
    backgroundColor: "#e3dbdb",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
});

