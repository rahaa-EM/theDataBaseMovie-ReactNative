import {
    FormControl,VStack,HStack,FormControlLabelText, FormControlLabel, InputIcon, SearchIcon,Icon,Input,Button,ButtonText,ButtonIcon,InputField,Text, View} from "@gluestack-ui/themed";
import { StyleSheet, TextInput } from 'react-native';
import React from 'react';
import SearchList from './SearchList';
import {Picker} from '@react-native-picker/picker';
import { useState, useEffect } from 'react';
import { getSearch } from '../services/api';

const Search = props => {
    const { navigation } = props;
    const [subType, setSubType] = useState('multi');
  const [searchResult, setSearchResult] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

// const fetchSearch = async () => {
//     try {
//       const response = await getSearch(searchQuery, subType);
//       console.log(`Search Results for ${subType}:`, response.data.results);
//       setSearchResult(response.data.results);
//     } catch (error) {
//       console.error('Error fetching search results:', error.message);
//     }
//   };

//   useEffect(() => {
//     fetchSearch();
//   }, [searchQuery, subType]);
    
// Search component
useEffect(() => {
    const fetchSearch = async () => {
      try {
        const response = await getSearch(searchQuery, subType);
        console.log(`Search Results for ${subType}:`, response.data.results);
        setSearchResult(response.data.results);
      } catch (error) {
        console.error('Error fetching search results:', error.message);
      }
    };
  
    if (searchQuery.trim() !== '') {
      fetchSearch();
    } else {
      // Reset search results if the query is empty
      setSearchResult([]);
    }
  }, [searchQuery, subType]);
  

      const PickerList = [
        {
            label:'Movies',
            value:'movie'
        },
        {
            label:'Multi',
            value:'multi'
        },
        {
            label:'TV Shows',
            value:'tv'
        }
        
    ];
    return (
        <View>
        <VStack space={2} width='100%' p={5} my={10}>
            {/* <FormControl>
                <FormControl.Label fontSize='sm'>
                    <FormControlLabelText>Search</FormControlLabelText>
                </FormControl.Label>
            </FormControl> */}
            <HStack width='100%' space={2}>
                    <Input mr={10} px={5} style={styles.inputStyles}>

                    {/* <InputIcon> */}
                    {/* <Icon as={SearchIcon} size='sm'></Icon> */}
                    {/* </InputIcon> */}

                    <InputField 
                    placeholder='Search' 
                    onChangeText={(text)=>{(setSearchQuery(text))}}
                    value={searchQuery}>

                    </InputField>
                    </Input>

            <Button onPress={() => fetchSearch()}>
                {/* <ButtonIcon as={SearchIcon} size='sm'></ButtonIcon> */}
                <ButtonText>Search</ButtonText>
            </Button>

            </HStack>

            <VStack width='70%' space={2}>
            
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
        </VStack>
        </VStack>
        <SearchList searchResult={searchResult} navigation={navigation}/>
        </View>
    )
};

const styles = StyleSheet.create({
    inputStyles: {
        flex: 1,
        alignItems: 'center',
    },
    pickerSelectStyles:{
        flex: 1,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'd3d3d3',
        borderRadius: 4,
        marginTop: 10,
        height: 20,
        color: 'black',
    }
})


export default Search;