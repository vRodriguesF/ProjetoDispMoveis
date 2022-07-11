
import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>Cadastre-se</Text>
            </TouchableOpacity>


        </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },
      loginText:{
        fontFamily: "cursive",
        fontWeight: "bold",
       },
       loginBtn: {  
        width: "80%",
        borderRadius: 25,
        height: 50,
        borderStyle: "solid",
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "white",
      },
   
    })
  