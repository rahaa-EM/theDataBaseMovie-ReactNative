import React from 'react';
import { View, FlatList } from "@gluestack-ui/themed";
import MovieCard from './MovieCard';
import { IMAGE_BASE_URL } from '../config/api_config';

const MovieList = props => {
    const { navigation, movie } = props;
    return (
    <View>
   <FlatList
   data={movie}
   keyExtractor={(item) => item.id.toString()}
   renderItem={({ item }) => (
      <MovieCard
      title={item.title}
      imageUrl={`${IMAGE_BASE_URL}${item.poster_path}`}
      popularity={`Popularity: ${item.popularity}`}
      releaseDate={`Release Date: ${item.release_date}`}
      id={item.id}
      navigation={navigation}
      type='movie'
      />
    )}
    />

</View>
    );
}
export default MovieList;