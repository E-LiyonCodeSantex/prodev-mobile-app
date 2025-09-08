import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import { styles } from "@/styles/_join";
import { HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO } from "@/constants";

export default function JoinScreen() {
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
                <View style={styles.titleTextGroup}>
                    <Text style={styles.titleText}>Create your</Text>
                    <Text style={styles.titleText}>Account</Text>
                    <Text style={styles.subText}>Sign up with your details below.</Text>
                </View>

                {/* Form */}
                <View style={styles.container}>

                    {/* Email Field */}
                    <View style={styles.formGroup}>
                        <Text style={styles.formLabel}>Email</Text>
                        <TextInput style={styles.formControl} keyboardType="email-address" />
                    </View>

                    {/* Password Field */}
                    <View style={styles.formGroup}>
                        <Text style={styles.formLabel}>Password</Text>
                        <View style={styles.formPasswordControl}>
                            <TextInput style={styles.passwordControl} secureTextEntry />
                            <FontAwesome name="eye-slash" />
                        </View>
                    </View>
                    {/* Confirm Password */}
                    <View style={styles.formGroup}>
                        <Text style={styles.formLabel}>Password</Text>
                        <View style={styles.formPasswordControl}>
                            <TextInput style={styles.passwordControl} secureTextEntry />
                            <FontAwesome name="eye-slash" />
                        </View>
                    </View>

                    {/* Sign Up Button */}
                    <TouchableOpacity style={styles.primaryButton}>
                        <Text style={styles.buttonText}>Create</Text>
                    </TouchableOpacity>
                </View>


                {/* Divider */}
                <View style={styles.dividerGroup}>
                    <View style={styles.divider}></View>
                    <Text style={styles.dividerText}>Or</Text>
                    <View style={styles.divider}></View>
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

                {/* Footer */}
                <View style={styles.buttonGroupSubText}>
                    <Text>Already have an account?</Text>
                    {/*<TouchableOpacity onPress={() => router.push("/signin")}>*/}
                    <TouchableOpacity >
                        <Text style={styles.signupSubTitleText}> Join now</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}