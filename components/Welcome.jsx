import React, { useState } from "react";
import{View, StyleSheet, Text, TextInput, Image, TouchableOpacity} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from "../constants"
import { SafeAreaView } from "react-native-safe-area-context";
// import SignBtn from "./SignBtn";


const welcome = () => {

    
    return (
        <SafeAreaView style={styles.firstContainer}>
            <View style={styles.logobar}>
                <View style={styles.profile}>                
                    <Image
                        source={require("../assets/images/proff.jpg")}
                        style={{ width: 50, height: 50, borderRadius:999}} />
                    <View style={styles.nameCont}>
                        <Text style={styles.greetings}>Good Morning</Text>
                        <Text style={styles.name}>Linda Chepkemoi</Text>
                    </View>
                </View>
                <View style={styles.bell}>
                    <Ionicons name="notifications" size={32} color="black" />
                </View>
            </View>
            
            
           
            <View style={styles.innerContainer}>
                <View style={styles.decoContainer}>
                    <View style={styles.welcome}>
                        <Text style={styles.description}>
                            Take control of your 
                        </Text>
                        <Text style={styles.description}>
                            Health Journey
                        </Text>
                    </View> 
                    <View style={styles.deco}>
                        <View style={styles.innerDeco}></View>
                    </View>        
                </View>
                <View style={styles.inputCont}>
                    <TouchableOpacity style={styles.touch}>
                        <Ionicons 
                            name="search" size={32} 
                            color="gray" 
                            style={{}} />
                    </TouchableOpacity>
                    <TextInput
                        placeholder="Search for a meal plan.."
                        placeholderTextColor={"gray"}
                        placeholderStyle={{ fontSize: 16 }} 
                        // value={}
                        // onChangeText={}
                        style={styles.textcontainer}
                        />
                        <TouchableOpacity style={[styles.touch, {backgroundColor:'#845ec2' }]}>
                            <Ionicons 
                                name="arrow-forward" size={32} 
                                color="white" 
                                style={{}} />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        );
    }


export default welcome;

const styles = StyleSheet.create({
    firstContainer:{
        marginLeft: "2%",
        marginRight: "2%",
        marginTop: 40
    },
    logobar:{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",
        marginHorizontal: "5%"
    },
    profile:{
        flexDirection: "row"
    },
    nameCont:{
        marginHorizontal: 10
    },
    innerContainer:{
        height: 200,
        backgroundColor: "#845ec2",
        marginTop: 20
    },
    welcome:{
        marginTop: 20,
    },
    description:{
        textAlign: "center",
        fontSize: 34,
        fontFamily: "bold",
        color: "#fff"
    },
    inputCont:{
        position: "absolute",
        bottom: 0,
        width: "93%",
        marginHorizontal: "3.5%",
        height: 50,
        backgroundColor: "#fff",
        marginBottom:10,
        flexDirection: "row",
        justifyContent: "space-between"

    },
    textcontainer:{
        width: "63%",
        height: 44,
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 5,
        paddingHorizontal: 15,
        color: "#000",
        marginBottom: 17,
        backgroundColor: "#fff",
        
       
      },
      name:{
        fontFamily: "semibold",
        fontSize: 19
      },
      greetings:{
        fontFamily: "regular",
        fontSize: 13,
        color: "grey"
      },
      touch:{
        width: 54,
        height: 44,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginTop : 3,
        marginHorizontal: 5
    },
      
});
