import { GluestackUIProvider } from '@gluestack-ui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import { config } from '@gluestack-ui/config';
import MovieContainer from './src/components/MovieContainer';
import Search from './src/components/Search';
import AppStack, { TabBarNavigation } from './src/stack/AppStack';
import TVContainer from './src/components/TVContainer';
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
  return (
   <SafeAreaProvider>
    <GluestackUIProvider config={config}>
    <Header/>
    {/* <NavigationContainer>
      <TabBarNavigation/>
    </NavigationContainer> */}
    
    <AppStack/>
    <StatusBar style="auto" />
    {/* <MovieContainer/> */}
    {/* <TVContainer/> */}
      </GluestackUIProvider>
   </SafeAreaProvider>
  );
}
export default App;
