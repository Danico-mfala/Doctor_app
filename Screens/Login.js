import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import imageLogin from "./../assets/Images/image_1.jpg";
import Colors from "../assets/Shared/Colors";

export default function Login() {
  return (
    <View style={styles.container}>
      <Image source={imageLogin} style={styles.LoginImage} />

      <View style={styles.TextContainer}>
        <Text style={styles.Title}>Welcome to our app!</Text>
        <Text style={styles.Subtitle}>Appointment Booking App.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  LoginImage: {
    width: 410,
    height: 460,
    marginTop: 20,
    objectFit: "contain",
  },
  TextContainer: {
    backgroundColor: Colors.primary,
    padding: 25,
    alignItems: "center",
  },
  Title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  Subtitle: {
    fontSize: 30,
    fontWeight: "500",
  },
});
