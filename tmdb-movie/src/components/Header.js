import { Box, Text, StatusBar } from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native-safe-area-context";


const Header = () => {
    return(
    <SafeAreaView>
        <StatusBar backgroundColor='#fff'/>
        <Box bg='#fff' justifyContent='center' alignItems='center' SafeAreaView='top' paddingTop={20} >
            <Text color='black' fontSize={20} fontWeight='bold'>TMDB Movie</Text>
            </Box>
    </SafeAreaView>
    )
};
export default Header;