import React from "react";
import { Button, SafeAreaView, Text } from "react-native";


function ProfileEdit({navigation}){
    return(
        <SafeAreaView>
            <Text>Hello ProfileEdit</Text>
            <Button title="Back" onPress={()=>navigation.goBack()} />
        </SafeAreaView>
    )
}


export default ProfileEdit