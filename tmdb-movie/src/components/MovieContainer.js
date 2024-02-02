import { Center } from "@gluestack-ui/themed";
import { View } from "react-native";
import React, { useState, useEffect } from "react";
import { IMAGE_BASE_URL } from "../config/api_config";
import { getMovies } from "../services/api";
import { FlatList } from "@gluestack-ui/themed";
import { Card } from "react-native-paper";
import MovieList from "./MovieList";
import { Picker } from '@react-native-picker/picker';

const MovieContainer = props => {
const { navigation } = props;
const [movie, setMovie] = useState([]);
const [subType, setSubType] = useState('now_playing');
useEffect(() => {

    const fetchMovies = async () => {
        try {
          const response = await getMovies(subType);
          console.log('Movies from MovieContainer:', response.data.results);
           
          setMovie(response.data.results);
          // console.log('Titles:', response.data.results.id);
        } catch (error) {
          console.error('MOVIE CONTAINER Error fetching movies:', error.message);
        }
      };
      fetchMovies();
    }, [subType]);

    const PickerList = [
      {
          label:'Now Playing',
          value:'now_playing'
      },
      {
          label:'Popular',
          value:'popular'
      },
      {
          label:'Top Rated',
          value:'top_rated'
      },
      {
          label:'Upcoming',
          value:'upcoming'
      },
      
  ];
  return (
    <View>
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
        
<MovieList movie={movie}
navigation={navigation}
/>
        </View>
    )
};
export default MovieContainer;