import { View, TouchableOpacity, TextInput, FlatList, Image, Text } from "react-native";
import React, {useState} from "react";
import styles from "./search.style";
import { COLORS, SIZES } from "../constants"; 
import {Feather, Ionicons} from "@expo/vector-icons";
import {SafeAreaView } from "react-native-safe-area-context";
// import axios from "axios";
import SearchTile from "../components/SearchTile";


const Search = () => {
//   const [searchKey, setSearchKey] = useState(''); 
//   const [searchResult, setSearchResult] = useState([]);
//   console.log(searchResult);
 

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`http://192.168.0.109:3000/api/products/search/${searchKey}`);

//       setSearchResult(response.data);

//       console.log('===============================');
//       console.log(response.data);
//       console.log('===============================');
//     } catch (error) {
//       console.error("Failed to get products", error);
//     }
//   };
  
  

  return (
    <SafeAreaView>
        <View style={styles.searchContainer}>
            <TouchableOpacity>  
                <Ionicons 
                    name="camera-outline" 
                    size={SIZES.xLarge} 
                    style={styles.searchIcon}/>
            </TouchableOpacity>
            <View style={styles.searchWrapper}>
                <TextInput
                 style={styles.searchInput}
                // value={searchKey}
                //  onChangeText={setSearchKey}
                 placeholder="Search by name, category, location...."
                />
            </View>
            <View>
                <TouchableOpacity style={styles.searchBtn} onPress={()=>handleSearch()}>
                    <Feather 
                      name="search" 
                      color={COLORS.offwhite} 
                      size={24}
                    />
                </TouchableOpacity>
            </View>
        </View>
          <View style={{flex:1}}>
           
          </View> 
       
          <FlatList
            // data={searchResult}
            keyExtractor={(item) => item._id}
            renderItem={({item}) => (<SearchTile item = {item}/>)}
            style={{marginHorizontal: 12, height: "83%"}}
          />
        
    </SafeAreaView>
  )
}

export default Search;

