import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { Image, ImageStyle,TouchableOpacity, View, ViewStyle,Alert } from "react-native"
import { Text,Button,Icon,TextField,Screen} from "app/components"
import { isRTL } from "../i18n"
import { AppStackScreenProps, goBack } from "../navigators"
import { colors, spacing } from "../theme"


export const BA=(props)=> {
  


  return (
    <Screen preset="scroll">

    <View style={$container}>
      <View style={$topContainer}>
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={()=>props.navigation.navigate('Account')}>
      <Icon icon="caretLeft" size={30} />
      </TouchableOpacity>
        
      <Text style={{ fontWeight:"bold",fontSize: 15,lineHeight:30,marginLeft:70,marginBottom:40}}>Bank of account info</Text>

      </View>


      <View style={$we}>
        <View style={$ic}>
       <Image
  style={$ice}
        source={require('../../assets/images/PA1.png')}
      />
        <Text style={$ie}>Bank of Amrica - 0182128xxx           Jonas Macroni</Text>

        </View>
        <Text style={$iae}>2-Jan-24</Text>
       </View>
       <View style={$ae}></View>


       <View style={$we}>
        <View style={$ic}>
       <Image
  style={$ice}
        source={require('../../assets/images/GO.png')}
      />
        <Text style={$ie}>Zenith Bank - 0182128xxx           Jonas Macroni</Text>
        </View>
        <Text style={$iae}>17-Dec-23</Text>
       </View>
       <View style={$ae}></View>
 
      <Button
      text="Add account"
      style={{marginTop:420}}
      />
        


      
              
       
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

      const $iae: ViewStyle = {fontSize:12,lineHeight:15,marginTop:30,marginLeft:20}

      const $ae: ViewStyle ={height:0.5,backgroundColor:'black',width:300,alignSelf:'center'}
  