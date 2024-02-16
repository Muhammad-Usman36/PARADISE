import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { Image, ImageStyle,TouchableOpacity, View, ViewStyle,Alert } from "react-native"
import { Text,Button,Icon,TextField,Screen} from "app/components"
import { isRTL } from "../i18n"
import { AppStackScreenProps, goBack } from "../navigators"
import { colors, spacing } from "../theme"


export const SFI=(props)=> {
  


  return (
    <Screen preset="scroll">

    <View style={$container}>
      <View style={$topContainer}>
      <TouchableOpacity onPress={()=>props.navigation.navigate('Account')}>
      <Icon icon="caretLeft" size={30} />
      </TouchableOpacity>
        
      <Text style={{ fontWeight:"bold",fontSize: 35,marginTop:10,lineHeight:40,marginBottom:30}}>Notification</Text>




      <View style={$we}>
        <View style={$ic}>
       <Image
  style={$ice}
        source={require('../../assets/images/PO.png')}
      />
        <Text style={$ie}>Apple stocks just increased Check it out now.</Text>
        </View>
        <Text style={$iae}>20min ago...</Text>
       </View>
       <View style={$ae}></View>


       <View style={$we}>
        <View style={$ic}>
       <Image
  style={$ice}
        source={require('../../assets/images/C2.png')}
      />
        <Text style={$ie}>Apple stocks just increased Check it out now.</Text>
        </View>
        <Text style={$iae}>50min ago...</Text>
       </View>
       <View style={$ae}></View>
 
       <View style={$we}>
        <View style={$ic}>
       <Image
  style={$ice}
        source={require('../../assets/images/C1.png')}
      />
        <Text style={$ie}>Apple stocks just increased Check it out now.</Text>
        </View>
        <Text style={$iae}>2hours ago...</Text>
       </View>
       <View style={$ae}></View>
        


      
              
       
      </View>

     
    </View>
    </Screen>
  )
}

const $container: ViewStyle = {
  marginTop: spacing.xxxl,
  backgroundColor: colors.background,
}

const $topContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: "57%",
  justifyContent: "center",
  paddingHorizontal: spacing.lg,
}

const $we: ViewStyle = {
  flexDirection:'row',alignItems:'center', height:80,width:350,marginTop:10
}
const $ic: ViewStyle = {
  height:80,width:230,flexDirection:'row'
   }
   const $ice: ViewStyle = {
    height:60,width:60,borderRadius:10, marginLeft:5,marginTop:10
     }

     const $ie: ViewStyle ={
      fontWeight:'bold',fontSize:12,lineHeight:15,marginRight:40,marginLeft:10,marginTop:20}

      const $iae: ViewStyle = {fontWeight:'bold',fontSize:12,lineHeight:15}

      const $ae: ViewStyle ={height:0.5,backgroundColor:'black'}
  