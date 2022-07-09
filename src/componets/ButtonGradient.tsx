import React from "react";
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ButtonGradient(navigation: any) {
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Home')}>
        
            <LinearGradient
                // Button Linear Gradient
                colors={['#FFB677', '#FF3CBD']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.button}>
                <Text style={styles.text}>Iniciasr Sesiòn</Text>
            </LinearGradient>

        </TouchableOpacity>
    )


}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        width: 200,
        marginTop: 25

    },
    text: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "bold"

    },

    button: {
        width: "80%",
        height: 50,
        alignItems: "center",
        borderRadius: 25,
        padding: 10,
        justifyContent: "center"
    }



});
