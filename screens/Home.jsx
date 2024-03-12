import React from "react";
import Welcome from "../components/Welcome";
import MealPlan from "../components/MealPlan";
import { SafeAreaView, View } from "react-native";

const Home = () => {
    return(
        <SafeAreaView>
            <View>
                <Welcome/>
                <MealPlan/>
            </View>
        </SafeAreaView>
    )
}

export default Home