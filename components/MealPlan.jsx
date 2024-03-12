import React from "react";
import { SafeAreaView, View, ScrollView, StyleSheet, Text, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { SIZES } from "../constants";

const MealPlan = () => {
    return(
        <SafeAreaView style={styles.scrollCont} >
            <View style={styles.headerCont}>
                <Text style={styles.header}>Meal plan</Text>
               
            </View>
            <ScrollView horizontal>
                <View style={[styles.container, { backgroundColor: '#4d8076' }]}>
                    <View style={styles.innerContainer}>      
                        <Image source={require("../assets/images/breakfast.jpg")}
                            style={{ 
                                width: "100%", 
                                height: 200, 
                                resizeMode: 'stretch' 
                                }} />
                        <View style={styles.textCont}>
                            <Text style={styles.text}>BreakFast</Text>
                        </View> 
                    </View> 
                    <Text style={styles.foodName}>Ugali</Text>
                    <View style={styles.ingreCont}>
                        <Text style={styles.ingredients}>Ingredients</Text>
                        <View>
                            <Text style={styles.ingredient}>Flour</Text>
                            <Text style={styles.ingredient}>Flour</Text>
                            <Text style={styles.ingredient}>Flour</Text>
                            <Text style={styles.ingredient}>Flour</Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.container, { backgroundColor: '#ea7d59' }]}>
                    <View style={styles.innerContainer}>
                        <Image source={require("../assets/images/lunch.jpg")}
                                style={{ 
                                    width: "100%", 
                                    height: 200, 
                                    resizeMode: 'stretch' 
                                    }} />
                        <View style={styles.textCont}>
                            <Text style={styles.text}>Lunch</Text>
                        </View> 
                    </View>
                    <Text style={styles.foodName}>Ugali</Text>
                    <View style={styles.ingreCont}>
                        <Text style={styles.ingredients}>Ingredients</Text>
                        <View>
                            <Text style={styles.ingredient}>Flour</Text>
                            <Text style={styles.ingredient}>Flour</Text>
                            <Text style={styles.ingredient}>Flour</Text>
                            <Text style={styles.ingredient}>Flour</Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.container, { backgroundColor: '#4e8397' }]}>
                    <View style={styles.innerContainer}>
                    <Image source={require("../assets/images/ssup.jpg")}
                                style={{ 
                                    width: "100%", 
                                    height: 200, 
                                    resizeMode: 'stretch' 
                                    }} />
                        <View style={styles.textCont}>
                            <Text style={styles.text}>Supper</Text>
                        </View> 
                    </View>
                    <Text style={styles.foodName}>Ugali</Text>
                    <View style={styles.ingreCont}>
                        <Text style={styles.ingredients}>Ingredients</Text>
                        <View>
                            <Text style={styles.ingredient}>Flour</Text>
                            <Text style={styles.ingredient}>Flour</Text>
                            <Text style={styles.ingredient}>Flour</Text>
                            <Text style={styles.ingredient}>Flour</Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.container, { backgroundColor: '#ea7c67' }]}>
                    <View style={styles.innerContainer}>
                    <Image source={require("../assets/images/snacks.jpg")}
                                style={{ 
                                    width: "100%", 
                                    height: 200, 
                                    resizeMode: 'stretch' 
                                    }} />
                        <View style={styles.textCont}>
                            <Text style={styles.text}>Snack</Text>
                        </View> 
                    </View>
                    <Text style={styles.foodName}>Ugali</Text>
                    <View style={styles.ingreCont}>
                        <Text style={styles.ingredients}>Ingredients</Text>
                        <View>
                            <Text style={styles.ingredient}>Flour</Text>
                            <Text style={styles.ingredient}>Flour</Text>
                            <Text style={styles.ingredient}>Flour</Text>
                            <Text style={styles.ingredient}>Flour</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default MealPlan

const styles = StyleSheet.create({
    scrollCont:{
        marginLeft: "2%",
        // width: SIZES.width,
        marginRight: "2%",
    },
    container: {
        width: 329,
        height: 425,
        // marginTop: 20,
        marginHorizontal: 15,
    
        
    },
    innerContainer: {
    },
    textCont:{
        position: 'absolute',
        top: 0,
        justifyContent: "center",
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    text: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        justifyContent: "center",
        alignItems: "center",
    },
    headerCont: {
        height: 50,
        marginTop: 20,
        marginBottom: 10,
    },
    header: {
        fontSize: 26,
        fontFamily: 'bold',
        marginHorizontal: 10,
        marginTop: 10
    },
    foodName:{
        fontFamily: "semibold",
        fontSize: 30,
        color: "white",
        // marginTop: 10,
        marginHorizontal: 20
    },
    ingredients:{
        fontFamily:"bold",
        color: "white",
        fontSize:24,
        marginHorizontal: 15,
    },
    ingredient:{
        fontFamily:"semibold",
        color: "white",
        fontSize: 20,
        marginHorizontal: 15,
    }
});
