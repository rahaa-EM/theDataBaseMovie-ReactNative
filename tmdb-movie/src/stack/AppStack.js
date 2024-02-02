import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MoviesScreen from '../screens/MoviesScreen';
import Details from '../screens/Details';
import TVScreen from '../screens/TVScreen';
import SeachScreen from '../screens/SearchScreen';


const AppStack = () => {

    const Tabs = createMaterialTopTabNavigator();

    const moviesTab = () => {
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>Movies</Text>
            </View>
        )
    }
    // const searchTab = () => {
    //     return (
    //         <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
    //             <Text>Search Results</Text>
    //         </View>
    //     )
    // }
    
    const tvTab = () => {
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>TV Shows</Text>
            </View>
        )
    }
    const TabBarNavigation = () => {    
        return (
            <Tabs.Navigator>
                <Tabs.Screen name='Movies' component={MoviesScreen} />
                <Tabs.Screen name='Search Results' 
                component={SeachScreen} 
                />
                <Tabs.Screen name='TV Shows' component={TVScreen} />
            </Tabs.Navigator>
        )
    }
    const Stack = createNativeStackNavigator();
    return <NavigationContainer>
        <Stack.Navigator
        screenOptions={{header: () => null, headerShown: false}}
        initialRouteName={ 'TabNavigation' }
        >
            <Stack.Screen 
                name='Details' 
                component={Details}
            />
            <Stack.Screen 
                name='TabNavigation' 
                component={TabBarNavigation}
                options={{
                    title: 'Movies',
                    headerStyle: {
                        backgroundColor: '#2c3e50',
                    },
                    headerTitleStyle: {
                        color: '#fff'
                    }
                }}
                />
            
            
            {/* <Stack.Screen
                name='TV Shows'
                component={TVScreen}
                options={{
                    title: 'TV Shows',
                    headerStyle: {
                        backgroundColor: '#2c3e50',
                    },
                    headerTitleStyle: {
                        color: '#fff'
                    }
                }}
                /> */}
        </Stack.Navigator>
    </NavigationContainer>
};
export default AppStack;