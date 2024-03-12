import {  Text, View, Image, TouchableOpacity, Alert, SafeAreaView, ScrollView, StatusBar } from "react-native";
import React, {useState, useEffect}from "react";
import style from "./profile.styles";
import { COLORS } from "../constants";
import {AntDesign, MaterialCommunityIcons, SimpleLineIcons} from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./profile.styles";
import { Ionicons } from '@expo/vector-icons';


const Profile = ( {navigation}) => {
  // const [userData, setUserData] = useState(null)
  // const [userLogin, setUserLogin] = useState(false)

  //   useEffect(() => {
  //     checkExistingUser();
  //   }, []);

  //   const checkExistingUser = async () => {
  //     const id = await AsyncStorage.getItem('id')
  //     const userId = `user${JSON.parse(id)}`;

  //     try{
  //       const currentUser = await AsyncStorage.getItem(userId);
        
  //       if(currentUser !== null){
  //         const parsedData = JSON.parse(currentUser)
  //         setUserData(parsedData);
  //         setUserLogin(true);
  //       }else{
  //         navigation.navigate('Login')
  //       }
  //     } catch{
  //       console.log('Error retrieving data:', error)
  //     }

  //   };

  // const userLogout = async () => {
  //   const id = await AsyncStorage.getItem('id')
  //   const userId = `user${JSON.parse(id)}`;

  //   try{
  //     await AsyncStorage.multiRemove([userId, 'id']);
  //     navigation.replace('Bottom Navigation')
  //   }catch{
  //     console.log('Error logging out the user:', error)
  //   }
  // };

  // const logout = () => {
  //   Alert.alert(
  //     "Logout",
  //     "Are you sure you want to logout?",
  //     [
  //       {
  //         text: "Cancel", onPress: () => console.log("Cancel Pressed"),
  //       },
  //       {
  //         text: "Continue", onPress: () => userLogout()
  //       }
        
  //     ]
  //   )
  // }

  // const clearCache = () => {
  //   Alert.alert(
  //     "Clear Cache",
  //     "Are you sure you want to delete all saved data on your device?",
  //     [
  //       {
  //         text: "Cancel", onPress: () => console.log("Cancel clear cache"),
  //       },
  //       {
  //         text: "Continue", onPress: () => console.log("clear cache pressed"),
  //       }
  //     ]
  //   )
  // }

  // const deleteAccount = () => {
  //   Alert.alert(
  //     "delete account",
  //     "Are you sure you want to delete your account?",
  //     [
  //       {
  //         text: "Cancel", onPress: () => console.log("Cancel Pressed"),
  //       },
  //       {
  //         text: "Continue", onPress: () => console.log("Delete Pressed"),
  //       },
  //     ]
  //   )
  // }


  return (
    <SafeAreaView>
      <View style={style.header}>
        <View style={style.container}>
        <StatusBar barStyle="white-content" backgroundColor={COLORS.primary} />
          

          <View style={style.cover}>
            {/* <Image
                source={require('../assets/images/userDefault.png')}
                style={style.pofile}
              /> */}
              {/* <Text style={style.name}>{userData ? userData.username :""}</Text> */}
              {/* { userLogin === false ?( */}
                {/* <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
                  <View style={style.loginBtn}>
                    <Text style={style.menuText}>L O G I N</Text>
                  </View>
                </TouchableOpacity> */}
              {/* ): ( */}
                <View style={style.loginBtn}>
                    {/* <Text style={style.email}>{userData ? userData.email :""}</Text> */}
                </View>
              {/* )} */}
          </View>

          <View style={style.profileContainer}>
            <ScrollView>
            
              {/* { userLogin === false ?( */}
                <View></View>
              {/* // ): ( */}
                <View style={style.menuWrapper}>
                  
                  <Text style={{
                    fontFamily:"bold", 
                    fontSize:25, 
                    marginHorizontal:20,
                    color:COLORS.primary, 
                    mmarginTop: 20,

                    
                    }}>My Account</Text>
                  <TouchableOpacity >
                    <View style={style.menuItem(0.2)}>
                      <AntDesign
                        name="deleteuser"
                        size={24}
                        color={COLORS.primary}
                      />
                      <Text style={style.menuText}>Health Status</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={style.menuItem(0.2)}>
                    <Ionicons 
                      name="location-outline" 
                      size={24} 
                      color={COLORS.primary}
                    />
                      <Text style={style.menuText}> Week's meal Plan</Text>
                    </View>
                  </TouchableOpacity>

                 

                  <TouchableOpacity >
                    <View style={style.menuItem(0.2)}>
                      <AntDesign
                        name="deleteuser"
                        size={24}
                        color={COLORS.primary}
                      />
                      <Text style={style.menuText}>Delete Account</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              {/* // )} */}
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>

  )
}

export default Profile;

