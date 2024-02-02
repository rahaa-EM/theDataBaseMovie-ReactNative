import { View,Box, VStack, Heading, Text, Image, HStack, Button, ButtonText } from "@gluestack-ui/themed";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const MovieCard = props => {
    const {title, imageUrl, popularity, releaseDate, id, type, navigation} = props;
    // const navigation = useNavigation();
    return (
        <Box
        // maxWidth='$66'
        // width='100%'
        // px='$4'
        py='$4'
        pr='$4'
        pl='$2'
        overflow="hidden"
        >
            <VStack 
            >  
            <HStack
            >
            <Image
                    h={130}
                    source={{uri: imageUrl}} />         
                <Box px='$3'>
                <Heading _dark={{color: '$textLight200'}}>{title}</Heading>
                <Text _dark={{color: '$textLight200'}}>{popularity}</Text>
                <Text _dark={{color: '$textLight200'}}>{releaseDate}</Text>
                <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                <Button 
                varient='link'
                width='90%'
                onPress={() => {
                    navigation.navigate('Details', {id: id, type: type, title: title});
                }}>
                    <ButtonText fontSize='$sm'>View Details</ButtonText>
                </Button>
                </View>
                </Box>
            </HStack>  
            </VStack>
        </Box>
    )
};
export default MovieCard;