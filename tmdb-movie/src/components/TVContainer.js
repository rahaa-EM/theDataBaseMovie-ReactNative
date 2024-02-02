import { Center } from "@gluestack-ui/themed";
// import Search from "./Search";
import { View } from "react-native";
import React, { useState, useEffect } from "react";
import { IMAGE_BASE_URL } from "../config/api_config";
import { getTVs } from "../services/api";
import { FlatList } from "@gluestack-ui/themed";
import { Card } from "react-native-paper";
import TVList from "./TVList";
import { Picker } from '@react-native-picker/picker';

const TVContainer = props => {
const {navigation} = props;
const [tv, setTV] = useState([]);
const [subType, setSubType] = useState('airing_today');
useEffect(() => {

    const fetchTV = async () => {
        try {
          const response = await getTVs(subType);
          console.log('TVs from TVContainer:', response.data.results);
           
          setTV(response.data.results);
          // console.log('Titles:', response.data.results.id);
        } catch (error) {
          console.error('TV CONTAINER Error fetching TV:', error.message);
        }
      };
      fetchTV();
    }, [subType]);
    const PickerList = [
      {
          label:'Airing Today',
          value:'airing_today'
      },
      {
          label:'On the Air',
          value:'on_the_air'
      },
      {
          label:'Top Rated',
          value:'top_rated'
      },
      {
          label:'Popular',
          value:'popular'
      },
      
  ];
    return (
        <View >
          <Picker
            selectedValue={subType}
            onValueChange={(itemValue, itemIndex) =>
                {
                setSubType(itemValue);
                }
            }
            style={{height: 40, width: 200, display:'flex', alignSelf:'center', marginTop:20}}
            >
            {PickerList.map((subType, index) => {
                return <Picker.Item key={index} label={subType.label} value={subType.value} />
            })}
        </Picker>

<TVList navigation={navigation} tv={tv}/>
        </View>
    )
};
export default TVContainer;