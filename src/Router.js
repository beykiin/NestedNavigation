import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Member from "./pages/member/Member";
import Profile from "./pages/profile/Profile";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import MemberDetail from "./pages/member/MemberDetail";
import MemberUpdate from "./pages/member/MemberUpdate";
import ProfileEdit from "./pages/profile/ProfileEdit";
// import {createDrawerNavigator} from "@react-navigation/drawer"


const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()
// const Drawer = createDrawerTabNavigator()

const MemberStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="MemberScreen" component={Member}/>
      <Stack.Screen name="MemberDetailScreen" component={MemberDetail}/>
      <Stack.Screen name="MemberUpdateScreen" component={MemberUpdate}/>
    </Stack.Navigator>
  )
}

const ProfileStack = () => {
  return(
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen name="ProfileScreen" component={Profile}/>
      <Stack.Screen name="ProfileEditScreen" component={ProfileEdit}/>
    </Stack.Navigator>
  )
}

function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Profile" component={ProfileStack}  options={{ headerShown: false }}/>
        <Tab.Screen name="Member" component={MemberStack}  options={{ headerShown: false }}/>
        
      </Tab.Navigator>
    </NavigationContainer>
  )
}



export default App