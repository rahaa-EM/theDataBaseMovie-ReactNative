import { View,Box, VStack, Heading, Text, Image, HStack, Button, ButtonText } from "@gluestack-ui/themed";
import React from "react";

const MultiCard = props => {
    const {title, imageUrl, popularity, type, id, navigation } = props;
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
                <Text _dark={{color: '$textLight200'}}>{type}</Text>
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
                    navigation.navigate('Details',{id: id, type: type, title: title});
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
export default MultiCard;