import { ScrollView, Text, StyleSheet } from "react-native";
import Ejercicio1 from "./src/components/Ejercicio1";
import Ejercicio2 from "./src/components/Ejercicio2";
import Ejercicio3 from "./src/components/Ejercicio3";
import Ejercicio4 from "./src/components/Ejercicio4";



export default function App() {
  return (
    // ScrollView permite que podamos desplazar la pantalla si no cabe todo
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.titulo}>Tarea Programacion Movil</Text>
      
      {/* Cada ejercicio se muestra como un componente separado */}
      <Ejercicio1 />
      <Ejercicio2 />
      <Ejercicio3 />
      <Ejercicio4 />
     
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 40,
    backgroundColor: "#f2f2f2",
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    width: "90%",
    marginBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
});