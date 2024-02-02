import React from 'react';
import { View, FlatList } from "@gluestack-ui/themed";
import TVCard from './TVCard';
import { IMAGE_BASE_URL } from '../config/api_config';

const TVList = props => {
    const {navigation, tv } = props;
    return (
    <View>
   <FlatList
   data={tv}
   keyExtractor={(item) => item.id.toString()}
   renderItem={({ item }) => (
      <TVCard
      name={item.name}
      imageUrl={`${IMAGE_BASE_URL}${item.poster_path}`}
      popularity={`Popularity: ${item.popularity}`}
      firstAir={`First Air Date: ${item.first_air_date}`}
      id={item.id}
      navigation={navigation}
      type='tv'
      />
    )}
    />

</View>
    );
}
export default TVList;