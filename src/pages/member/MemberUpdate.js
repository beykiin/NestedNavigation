import React from "react";
import { Button, SafeAreaView, Text } from "react-native";


function MemberUpdate({navigation}) {
    return(
        <SafeAreaView>
            <Text>Hello MemberUpdate</Text>
            <Button title="Back" onPress={()=> navigation.goBack()}/>
        </SafeAreaView>
    )
}

export default MemberUpdate   