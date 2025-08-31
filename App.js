import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  useWindowDimensions,
} from "react-native";
import UserCard from "./componentes/UserCard";

export default function App() {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 400;
  const cardWidth = isSmallScreen ? "100%" : "48%";

  const users = [
    {
      name: "Ana Torres",
      age: 28,
      photo:
        "https://wp-int-blog.s3.eu-central-1.amazonaws.com/wp-content/uploads/2023/08/14104711/What-is-a-UX-Designer-scaled.jpg",
      role: "Diseñadora",
      isOnline: true,
    },
    {
      name: "Luis Gómez",
      age: 35,
      photo:
        "https://storage.timviec365.vn/timviec365/pictures/images_07_2020/mo-ta-cong-viec-back-end%20(4).jpg",
      role: "Backend Developer",
    },
    {
      name: "María López",
      age: 30,
      photo:
        "https://www.soyhenry.com/_next/image?url=%2Fmicrolanding%2Fweb-developer.webp&w=1200&q=75",
      role: "Frtontend Developer",
      isOnline: true,
    },
    {
      name: "Carlos Ruiz",
      age: 40,
      photo:
        "https://www.lideryliderazgo.com/wp-content/uploads/2020/09/gerente.jpg",
      role: "Gerente",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Directorio de Usuarios</Text>
      <View style={styles.grid}>
        {users.map((user, index) => (
          <View key={index} style={{ width: cardWidth }}>
            <UserCard {...user} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f0f4f8",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
