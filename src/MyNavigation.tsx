import * as React from "react";
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Login,Register,Home} from "./screens/screens";

const Stack = createNativeStackNavigator();
export default function MyNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} ></Stack.Screen>
            <Stack.Screen name="Register" component={Register} ></Stack.Screen>
            <Stack.Screen name="Home" component={Home} ></Stack.Screen>
        </Stack.Navigator>
    )
}
