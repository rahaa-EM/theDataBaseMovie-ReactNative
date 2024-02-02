import React from 'react';
import { View, FlatList } from "@gluestack-ui/themed";
import MultiCard from './MovieCard';
import { IMAGE_BASE_URL } from '../config/api_config';

const SearchList = props => {
    const {navigation, searchResult } = props;
    return (
    <View>
   <FlatList
   data={searchResult}
   keyExtractor={(item) => item.id.toString()}
   renderItem={({ item }) => (
      <MultiCard
      title={item.title || item.name}
      imageUrl={`${IMAGE_BASE_URL}${item.poster_path}`}
      popularity={`Popularity: ${item.popularity}`}
      mediaType={`Media Type: ${item.media_type}`}
      id={item.id}
      navigation={navigation}
      type={item.media_type}
      />
    )}
    />

</View>
    );
}
export default SearchList;