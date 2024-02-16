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
        
      <Text style={{marginLeft:20, fontWeight:"bold",fontSize: 35,marginTop:10,marginBottom:20,lineHeight:40}}>Profile</Text>
<View style={{height:140,width:140,backgroundColor:'black',alignSelf:'center',marginBottom:20,borderRadius:100}}>
<Image
  style={{height:140,width:140,borderRadius:100,alignSelf:'center'}}
        source={require('../../assets/images/PO.png')}
      />
</View>


<Text style={{fontWeight:'bold',alignItems: 'center',marginHorizontal: 10,textAlign:'center',fontSize:25}}>Mian Usman</Text>
<Text style={{alignItems: 'center',marginBottom:20,textAlign:'center',fontSize:18}}>Expert</Text>

 
       
        

<TouchableOpacity onPress={()=>props.navigation.navigate('CI')}>
<View style={$vbox}>
<Icon icon="user" size={20} style={{marginLeft:10,marginTop:15}} />
      <Text style={{fontWeight:'bold',margin:12}}>Contact Info</Text>
      <Icon icon="caretRight" size={35}style={{  marginLeft:115,marginTop:6,}}/>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>props.navigation.navigate('SFI')}>
      <View style={$vbox}>
      <Icon icon="bell" size={20} style={{marginLeft:10,marginTop:15}} />
      <Text style={{fontWeight:'bold',margin:12}}>Source of Funding Info</Text>
      <Icon icon="caretRight" size={35} style={{  marginLeft:40,marginTop:6,}}/>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>props.navigation.navigate('BA')}>
      <View style={$vbox}>
      <Icon icon="home" size={20} style={{marginLeft:10,marginTop:15}} />
      <Text style={{fontWeight:'bold',margin:12}}>Bank Account Info</Text>
      <Icon icon="caretRight" size={35} style={{  marginLeft:70,marginTop:6,}}/>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>props.navigation.navigate('DI')}>
      <View style={$vbox}>
      <Icon icon="menu" size={20} style={{marginLeft:10,marginTop:15}} />
      <Text style={{fontWeight:'bold',margin:12}}>Document Info</Text>
      <Icon icon="caretRight" size={35} style={{  marginLeft:95,marginTop:6,}}/>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>props.navigation.navigate('Set')}>
      <View style={$vbox}>
      <Icon icon="settings" size={20} style={{marginLeft:10,marginTop:15}} />
      <Text style={{fontWeight:'bold',margin:12}}>Settings</Text>
      <Icon icon="caretRight" size={35} style={{  marginLeft:140,marginTop:6,}}/>
      </View>
      </TouchableOpacity>





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
  marginBottom:15,height:50, width:310,backgroundColor:'white',alignSelf:'center',flexDirection:'row',elevation:2,borderRadius:10}