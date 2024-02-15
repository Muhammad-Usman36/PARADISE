import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { Image, ImageStyle,TouchableOpacity, View, ViewStyle,Alert } from "react-native"
import { Text,Button,Icon,TextField} from "app/components"
import { isRTL } from "../i18n"
import { AppStackScreenProps, goBack } from "../navigators"
import { colors, spacing } from "../theme"


export const Account=(props)=> {
  

  return (
    <View style={$container}>
      <View style={$topContainer}>
      <TouchableOpacity onPress={()=>goBack('F')}>
      <Icon icon="caretLeft" size={30} />
      </TouchableOpacity>
        
      <Text style={{ fontWeight:"bold",fontSize: 35,marginTop:20,marginBottom:10,lineHeight:40}}>Profile</Text>
<View style={{height:160,width:160,backgroundColor:'black',alignSelf:'center',marginBottom:20,borderRadius:100}}>
<Image
  style={{height:160,width:160,borderRadius:100,alignSelf:'center'}}
        source={require('../../assets/images/PO.png')}
      />
</View>


<Text style={{fontWeight:'bold',alignItems: 'center',marginHorizontal: 10,textAlign:'center',fontSize:25}}>Mian Usman</Text>
<Text style={{alignItems: 'center',marginHorizontal: 10,textAlign:'center',fontSize:18}}>Expert</Text>

 
       
        


      <View style={{marginBottom:5,height:50, width:300,backgroundColor:'white',alignSelf:'center',flexDirection:'row',elevation: 2}}>
      <Text style={{fontWeight:'bold',margin:10}}>Contact Info</Text>
      <Icon icon="caretRight" size={35}/>
      </View>
              
       
      <View style={{marginBottom:5,height:50, width:300,backgroundColor:'white',alignSelf:'center',flexDirection:'row'}}>
      <Text style={{fontWeight:'bold',margin:10}}>Source of Funding Info</Text>
      <Icon icon="caretRight" size={35} />
      </View>
      <View style={{marginBottom:5,height:50, width:300,backgroundColor:'white',alignSelf:'center',flexDirection:'row'}}>
      <Text style={{fontWeight:'bold',margin:10}}>Bank Account Info</Text>
      <Icon icon="caretRight" size={35} />

      </View><View style={{marginBottom:5,height:50, width:300,backgroundColor:'white',alignSelf:'center',flexDirection:'row'}}>
      <Text style={{fontWeight:'bold',margin:10}}>Document Info</Text>
      <Icon icon="caretRight" size={35} />

      </View><View style={{ marginBottom:5,height:50, width:300,backgroundColor:'white',alignSelf:'center',flexDirection:'row'}}>
      <Text style={{fontWeight:'bold',margin:10}}>Settings</Text>
      <Icon icon="caretRight" size={35} />
      </View>





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
  height: 160,
  width: "100%",
  marginBottom: spacing.lg,
}
const $icon: ViewStyle = {
    marginTop: 20,
    backgroundColor:'#008000',
   }