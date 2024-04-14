import React from "react";
import { Button, SafeAreaView, Text } from "react-native";

function MemberDetail({navigation}){
    return(
        <SafeAreaView>
            <Text>Hello MemberDetail</Text>
            <Button title="Back" onPress={()=> navigation.goBack()}/>
            <Button title="Update" onPress={()=>navigation.navigate("MemberUpdateScreen")}/>
        </SafeAreaView>
    )
}

export default MemberDetail