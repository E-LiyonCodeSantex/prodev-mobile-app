import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import { styles } from "@/styles/_joinstyle";
import { HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO } from "@/constants";

export default function SignInScreen() {
    const router = useRouter();

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                {/* Navigation Header */}
                <View style={styles.iconsection}>
                    <Ionicons name="arrow-back" size={25} color="#000" onPress={() => router.back()} />
                    <Image source={HEROLOGOGREEN} />
                </View>

                {/* Title */}
                <View style={{ paddingHorizontal: 20 }}>
                    <Text style={styles.titleText}>Sign in to your</Text>
                    <Text style={styles.titleText}>Account</Text>
                    <Text style={styles.subText}>
                        Enter your email and password to sign in.
                    </Text>
                </View>

                {/* Form */}
                <View style={styles.container}>
                    <View style={styles.formGroup}>
                        <Text style={styles.formLabel}>Email</Text>
                        <TextInput style={styles.formControl} keyboardType="email-address" />
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={styles.formLabel}>Password</Text>
                        <View style={styles.formPasswordControl}>
                            <TextInput style={styles.passwordControl} secureTextEntry />
                            <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
                        </View>
                    </View>

                    <Text style={styles.forgotPasswordText}>
                        Forgot password?
                    </Text>

                    <TouchableOpacity style={styles.primaryButton}>
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>

                    {/* Divider */}
                    <View style={styles.dividerGroup}>
                        <View style={styles.divider} />
                        <Text style={styles.dividerText}>Or</Text>
                        <View style={styles.divider} />
                    </View>

                    {/* Social Media Buttons */}
                    <View style={styles.secondaryButtonGroup}>
                        <TouchableOpacity style={styles.secondaryButton}>
                            <Image source={GOOGLELOGO} />
                            <Text style={styles.secondaryButtonText}>Continue with Google</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.secondaryButton}>
                            <Image source={FACEBOOKLOGO} />
                            <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Footer */}
                <View style={styles.buttonGroupSubText}>
                    <Text>Don't have an account?</Text>
                    {/*<TouchableOpacity onPress={() => router.push("/signin")}>*/}
                    <TouchableOpacity >
                        <Text style={styles.signupSubTitleText}> Join now</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}