import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import imageLogin from "./../assets/Images/image_1.jpg";

export default function Login() {
  return (
    <View>
      <Image source={imageLogin} style={styles.LoginImage} />

      <View style={{ backgroundColor: "#000" }}>
        <Text style={styles.Title}>Welcome to our app!</Text>
        <Text style={styles.Subtitle}>Please log in.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  LoginImage: {
    width: 410,
    height: 460,
    marginTop: 20,
    objectFit: "contain",
  },
});
