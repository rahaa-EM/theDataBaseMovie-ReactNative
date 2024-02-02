import {Box, Center,Text, View, Button, ButtonText, VStack, Image, Heading } from '@gluestack-ui/themed';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { getDetails } from '../services/api';
import { IMAGE_BASE_URL } from '../config/api_config';

const Details = ({ route }) => {
   
    const { id, type} = route.params;
    console.log('Details:', id, type);
    const navigation = useNavigation();
    const [details, setDetails] = useState(null);

  const fetchDetails = async () => {
    try {
      const response = await getDetails(id, type);
      setDetails(response.data);
      console.log('Details:', response.data);
    } catch (error) {
      console.error('Error fetching details:', error.message);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

    return (
      <View flex={1} alignItems='center'>
        {/* Add a Back button */}
        <Button
         style={{ backgroundColor: 'transparent' }}
          onPress={() => navigation.goBack()}>
            <ButtonText
             style={{ color: 'blue' }}>Go Back</ButtonText>
          </Button>
    <Heading > {details?.title} </Heading>
    {details?.poster_path && (
      <Image source={{ uri: `${IMAGE_BASE_URL}${details.poster_path}` }} style={{ width: 200, height: 300, margin:20}} />
    )}
    <Text>Release Date: {details?.release_date}</Text>
    <Text py='$5'>Popularity: {details?.popularity}</Text>
    <Text px='$5'>{details?.overview}</Text>
    
      </View>
    );
  };
  
  export default Details;