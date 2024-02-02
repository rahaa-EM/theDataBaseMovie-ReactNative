import { View ,Box, VStack, Heading, Text, Image, HStack, Button, ButtonText } from "@gluestack-ui/themed";
import React from "react";
import { Dimensions } from "react-native";
const TVCard = props => {
    const {name, imageUrl, popularity, firstAir, id, type, navigation} = props;
    // const screenWidth = Dimensions.get('window').width;
    return (
        <Box
        py='$4'
        pr='$4'
        pl='$2'
        overflow="hidden"
        >
            <VStack 
            >  
            <HStack
             alignItems='center'
            >
            <Image
                    h={130}
                    source={{uri: imageUrl}} />         
                <Box px='$3'>
                <Heading _dark={{color: '$textLight200'}}>{name}</Heading>
                <Text _dark={{color: '$textLight200'}}>{popularity}</Text>
                <Text _dark={{color: '$textLight200'}}>{firstAir}</Text>
                <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}
                        >
                <Button 
                varient='link'
                width='90%'
                onPress={() => {
                    navigation.navigate('Details', {id, type});
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
export default TVCard;