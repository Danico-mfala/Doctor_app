import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
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
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          Please log in or sign up below.
        </Text>
        <TouchableOpacity
          onPress={() => console.log("HEY")}
          style={{
            padding: 16,
            backgroundColor: Colors.secondary,
            borderRadius: 90,
            alignItems: "center",
            marginTop: 20,
            width: Dimensions.get("screen").width * 0.8,
          }}
        >
          <Text style={{ fontSize: 17, color: Colors.primary }}>
            Login With Google
          </Text>
        </TouchableOpacity>
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
    marginTop: -40,
    width: 414,
    height: 700,
    borderRadius: 30,
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
