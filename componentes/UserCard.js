// UserCard.js
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const UserCard = ({ name, age, photo, role, isOnline }) => (
  <View style={styles.card}>
    <Image source={{ uri: photo }} style={styles.image} />
    <View style={styles.info}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.age}>Edad: {age}</Text>
      {role && <Text style={styles.role}>{role}</Text>}
      {isOnline && <View style={styles.onlineDot} />}
    </View>
  </View>
);

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired,
  role: PropTypes.string,
  isOnline: PropTypes.bool,
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    margin: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#ddd",
    overflow: "hidden", // evita que la imagen se salga
    position: "relative", // necesario para el punto verde
  },
  image: {
    width: "100%",
    aspectRatio: 1, // mantiene proporción cuadrada
    resizeMode: "contain", // evita recortes
    backgroundColor: "#e0e0e0", // fondo gris claro si la imagen no llena
  },
  info: {
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    flexWrap: "wrap",
  },
  age: {
    fontSize: 16,
    color: "#2e7d32",
  },
  role: {
    fontSize: 14,
    color: "#757575",
    fontStyle: "italic",
  },
  onlineDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "green",
    position: "absolute",
    top: 10,
    right: 10,
  },
});

export default UserCard;
