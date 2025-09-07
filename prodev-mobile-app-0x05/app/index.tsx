import React from "react";
import { View, Text, TouchableOpacity, ImageBackground, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

// Import styles and constants
import { styles } from "@/styles/_mainstyle";
import { BACKGROUNDIMAGE, HEROLOGO } from "@/constants";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={BACKGROUNDIMAGE}
          style={styles.backgroundImageContainer}
          resizeMode="cover"
        >
          {/*Logo and title section */}
          <View style={styles.container}>

            {/* Logo Section */}
            <View style={styles.logoContainer}>
              <Image source={HEROLOGO} />
            </View>

            {/* Title Section */}
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Find your favorite place here</Text>

              <View style={styles.titleSubTextContainer}>
                <Text style={styles.titleSubText}>The best prices for over 2</Text>
                <Text style={styles.titleSubText}>million properties worldwide</Text>
              </View>
            </View>
          </View>

          {/** Button and footer section */}
          <View style={styles.buttonFooterContainer}>

            {/* Button Section */}
            <View style={styles.buttonGroup}>
              <TouchableOpacity style={styles.buttonPrimary} onPress={() => router.push("/join")}>
                <Text style={styles.buttonPrimaryText}>Join here</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonSecondary} onPress={() => router.push("/signin")}>
                <Text style={styles.buttonSecondaryText}>Sign In</Text>
              </TouchableOpacity>
            </View>

            {/* Footer Text */}
            <View style={styles.buttonGroupSubText}>
              <Text style={styles.titleSubText}>Continue to home </Text>
                <Ionicons name="arrow-forward" style={styles.titleSubText} />
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
