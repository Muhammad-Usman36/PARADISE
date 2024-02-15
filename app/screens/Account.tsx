import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { Image, ImageStyle,TouchableOpacity, View, ViewStyle,Alert } from "react-native"
import { Text,Button,Icon,TextField} from "app/components"
import { isRTL } from "../i18n"
import { AppStackScreenProps, goBack } from "../navigators"
import { colors, spacing } from "../theme"


export const Account=(props:any)=> {
  

  return (
    <View style={$container}>
      <View style={{height:70}}>
      </View>
      <TouchableOpacity onPress={()=>props.navigation.navigate('Home')}>
      <Icon icon="caretLeft" size={30} style={{marginLeft:10}} />
      </TouchableOpacity>
        
      <Text style={{marginLeft:20, fontWeight:"bold",fontSize: 35,marginTop:10,marginBottom:10,lineHeight:40}}>Profile</Text>
<View style={{height:120,width:120,backgroundColor:'black',alignSelf:'center',marginBottom:20,borderRadius:100}}>
<Image
  style={{height:120,width:120,borderRadius:100,alignSelf:'center'}}
        source={require('../../assets/images/PO.png')}
      />
</View>


<Text style={{fontWeight:'bold',alignItems: 'center',marginHorizontal: 10,textAlign:'center',fontSize:25}}>Mian Usman</Text>
<Text style={{alignItems: 'center',marginBottom:20,textAlign:'center',fontSize:18}}>Expert</Text>

 
       
        

<TouchableOpacity onPress={()=>props.navigation.navigate('Home')}>
<View style={$vbox}>
      <Text style={{fontWeight:'bold',margin:10}}>Contact Info</Text>
      <Icon icon="caretRight" size={35}style={{  marginLeft:115,marginTop:6,}}/>
      </View>
      </TouchableOpacity>

              
      <View style={$vbox}>
      <Text style={{fontWeight:'bold',margin:10}}>Source of Funding Info</Text>
      <Icon icon="caretRight" size={35} style={{  marginLeft:40,marginTop:6,}}/>
      </View>

      <View style={$vbox}>
      <Text style={{fontWeight:'bold',margin:10}}>Bank Account Info</Text>
      <Icon icon="caretRight" size={35} style={{  marginLeft:70,marginTop:6,}}/>
      </View>

      <View style={$vbox}>
      <Text style={{fontWeight:'bold',margin:10}}>Document Info</Text>
      <Icon icon="caretRight" size={35} style={{  marginLeft:95,marginTop:6,}}/>
      </View>

      <View style={$vbox}>
      <Text style={{fontWeight:'bold',margin:10}}>Settings</Text>
      <Icon icon="caretRight" size={35} style={{  marginLeft:140,marginTop:6,}}/>
      </View>





      </View>

     
  )
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
}

const $topContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: "57%",
  justifyContent: "center",
  paddingHorizontal: spacing.lg,
}

const $welcomeLogo: ImageStyle = {
  marginTop:6,
}
const $vbox: ViewStyle = {
  marginBottom:15,height:50, width:260,backgroundColor:'white',alignSelf:'center',flexDirection:'row',elevation:2,borderRadius:5}