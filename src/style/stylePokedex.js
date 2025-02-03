import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
  },
  picker: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  card: {
    width: '100%',
    backgroundColor: '#dfdfec',
    marginVertical: 10, // Espacio entre tarjetas
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5, // Sombra en Android
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageLarge: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    alignSelf: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 2,
  },
  /*
  card: {
    width: '100%', // Ocupar todo el ancho
    backgroundColor: '#fff', // Color de fondo para diferenciar
    padding: 15,
    marginVertical: 10, // Espacio entre tarjetas
    alignItems: 'center', // Centrar contenido
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5, // Sombra en Android
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  name: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageLarge: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    alignSelf: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 2,
  },
  */
});
