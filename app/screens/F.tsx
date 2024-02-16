import React from "react"
import {Image, ImageStyle, TextStyle, View, ViewStyle,Alert, TouchableOpacity } from "react-native"
import { Text,Button,Icon,TextField} from "app/components"
import { colors, spacing } from "../theme"
import { CA } from "./CA"




const welcomeLogo = require("../../assets/images/CO1.png")


export const F=(props) => {
  
  return (
    <View style={$container}>

      <View style={$topContainer}>
      


      <Image style={$welcomeLogo} source={welcomeLogo}  width={20} resizeMode="contain" />


        <Text style={{alignSelf: 'center', fontWeight:"bold",fontSize: 30,margin:10,textAlign:'center',lineHeight:40}}>Stay on top of your finance with us.</Text>

       <Text style={{alignItems: 'center',marginHorizontal: 18,textAlign:'center',fontSize:16}}>We are your new financial Advisors to recommed the best investments for you.</Text>
        
    

       <Button
       onPress={()=>props.navigation.navigate("CA")}

text="Create account"
style={$icon}
/>
<TouchableOpacity onPress={()=>props.navigation.navigate('Login')}>
<Text style={{alignSelf: 'center',fontSize: 18,margin:10,textAlign:'center',color:colors.error}}>
  Login
</Text>
</TouchableOpacity>

      </View>
    </View>
  )
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
}
const $icon: ViewStyle = {
 marginTop: 60,
 backgroundColor:colors.error,
}
const $topContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: "57%",
  justifyContent: "center",
  paddingHorizontal: spacing.lg,
}

const $welcomeLogo: ImageStyle = {
  height: 220,
  width: "100%",
  marginVertical: spacing.xxl,
  marginLeft:20,
}