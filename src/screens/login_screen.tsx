import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import SVGImg from '../../assets/header.svg';
import ButtonGradient from '../componets/ButtonGradient';
export default function Login() {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.containerSVG}>
        <SVGImg height={350} />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Hola </Text>
        <Text style={styles.subtitle}>Inicia Sesión </Text>
        <TextInput placeholder="example@gmail.com" style={styles.textInput} ></TextInput>
        <TextInput secureTextEntry={true} placeholder="contraseña" style={styles.textInput}  ></TextInput>
        <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña? </Text>
        <ButtonGradient navigation /> 
        <Text style={styles.notaccount}>¿No tienes cuenta? </Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  containerSVG: {
    width: "100%",
    height: "30%",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgotPassword: {
    fontSize: 15,
    color: "gray",
    marginTop: 25,
  },
  notaccount: {
    fontSize: 15,
    color: "gray",
    marginTop: 25,
  },
  title: {
    fontSize: 80,
    color: "#34434D",
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 20,
    color: "gray"
  },
  textInput: {
    padding: 10,
    paddingStart: 30,
    width: "80%",
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: "#fff"
  }
});
