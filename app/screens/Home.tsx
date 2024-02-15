import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { Image, ImageStyle,TouchableOpacity, View, ViewStyle,Alert, ScrollView } from "react-native"
import { Text,Button,Icon,TextField} from "app/components"
import { isRTL } from "../i18n"
import { AppStackScreenProps, goBack } from "../navigators"
import { colors, spacing } from "../theme"

export const Home=(props)=> {
  


  return (
    <View style={$container}>
        <View style={{height:40,width:40}}>

        </View>
        <View style={{flexDirection:'row',marginTop:20,marginLeft:20}}>
      <TouchableOpacity onPress={()=>goBack('CA')}>
      <Icon icon="menu" size={30} />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>props.navigation.navigate('Transaction')}>
      <Icon icon="bell" size={30} style={{marginLeft:250}} />
      </TouchableOpacity>
      </View>


         <Text style={{alignSelf: 'center', fontWeight:"bold",fontSize: 35,marginTop:20,margin:10,textAlign:'center',lineHeight:40}}>Welcome, Jessie.</Text>



<View style={$gbox}>
<Text style={{fontWeight:'bold',fontSize: 15,marginTop:25,lineHeight:30,marginLeft:30,color:'white',marginBottom:5}}>Your total asset portfolio</Text>
<View style={{flexDirection:'row'}}>
<Text style={{fontWeight:'bold',fontSize: 25,marginTop:2,lineHeight:40,marginLeft:30,color:'white'}}>N203,935</Text>
<TouchableOpacity onPress={()=>props.navigation.navigate('Product')}>
<View style={$wbt}>
<Text style={{fontWeight:'bold',fontSize: 15,marginTop:5,lineHeight:30,alignSelf:'center',color:'#008000'}}>Invest now</Text>
</View>
</TouchableOpacity>
</View>
</View>



<View style={{flexDirection:'row',marginBottom:10,marginLeft:20}}>
<Text style={{fontWeight:'bold',fontSize: 22,lineHeight:25,marginLeft:5}}>Best plans</Text>
<TouchableOpacity onPress={()=>props.navigation.navigate('Product')}>
<Text style={{fontWeight:'bold',fontSize: 16,marginLeft:130,color:'red'}}>See All</Text>
</TouchableOpacity>
<Icon icon="caretRight" size={22} color="red" />
</View>


<ScrollView horizontal={true} style={{marginLeft:20}}>
  <Image
  style={{height:160,width:130,borderRadius:30}}
        source={require('../../assets/images/GO.png')}
      />

<Image
  style={{height:160,width:130,borderRadius:30}}
        source={require('../../assets/images/SI.png')}
      />

<Image
  style={{height:160,width:130,borderRadius:30}}
        source={require('../../assets/images/GOG.png')}
      />

<Image
  style={{height:160,width:130,borderRadius:30}}
        source={require('../../assets/images/GOP.png')}
      />


</ScrollView>




<Text style={{fontWeight:'bold',alignItems: 'center',marginHorizontal: 20,fontSize:20,margin:20}}>Investment Guide</Text>
 
       
<ScrollView>


 <View style={$dbox}>
  <View style={$dboxt}>
  <Text style={{fontWeight:'bold',alignItems: 'center',marginHorizontal: 5,fontSize:15,marginTop:10}}>Basic type of investments</Text>
  <Text style={{fontWeight:'bold',alignItems: 'center',marginHorizontal: 5,fontSize:12,lineHeight:15}}>This is how you set your foot for 2020 Stock market recession. What’s next...</Text>
  </View>
  <Image
  style={{height:60,width:60,borderRadius:40, marginLeft:5,marginTop:10}}
        source={require('../../assets/images/C2.png')}
      />
 </View>
 <View style={{height:0.5,width:300,alignSelf:'center',backgroundColor:'black'}}></View>




 <View style={$dbox}>
  <View style={$dboxt}>
  <Text style={{fontWeight:'bold',alignItems: 'center',marginHorizontal: 5,fontSize:15,marginTop:10}}>Basic type of investments</Text>
  <Text style={{fontWeight:'bold',alignItems: 'center',marginHorizontal: 5,fontSize:12,lineHeight:15}}>This is how you set your foot for 2020 Stock market recession. What’s next...</Text>
  </View>
  <Image
  style={{height:60,width:60,borderRadius:40, marginLeft:5,marginTop:10}}
        source={require('../../assets/images/C1.png')}
      />
 </View>
 <View style={{height:0.5,width:300,alignSelf:'center',backgroundColor:'black'}}></View>





 <View style={$dbox}>
  <View style={$dboxt}>
  <Text style={{fontWeight:'bold',alignItems: 'center',marginHorizontal: 5,fontSize:15,marginTop:10}}>Basic type of investments</Text>
  <Text style={{fontWeight:'bold',alignItems: 'center',marginHorizontal: 5,fontSize:12,lineHeight:15}}>This is how you set your foot for 2020 Stock market recession. What’s next...</Text>
  </View>
  <Image
  style={{height:60,width:60,borderRadius:40, marginLeft:5,marginTop:10}}
        source={require('../../assets/images/C2.png')}
      />
 </View>
 <View style={{height:0.5,width:300,alignSelf:'center',backgroundColor:'black'}}></View>


 


 <View style={$dbox}>
  <View style={$dboxt}>
  <Text style={{fontWeight:'bold',alignItems: 'center',marginHorizontal: 5,fontSize:15,marginTop:10}}>Basic type of investments</Text>
  <Text style={{fontWeight:'bold',alignItems: 'center',marginHorizontal: 5,fontSize:12,lineHeight:15}}>This is how you set your foot for 2020 Stock market recession. What’s next...</Text>
  </View>
  <Image
  style={{height:60,width:60,borderRadius:40, marginLeft:5,marginTop:10}}
        source={require('../../assets/images/C2.png')}
      />
 </View>
 <View style={{height:0.5,width:300,alignSelf:'center',backgroundColor:'black'}}></View>

       
 </ScrollView>
       
      </View>

     
  )
}

const $container: ViewStyle = {
  backgroundColor: colors.background,
}

const $topContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: "57%",
  justifyContent: "center",
  paddingHorizontal: spacing.lg,
}

const $gbox: ViewStyle = {
  height: 120,
  width: 320,
  borderRadius:30,
  alignSelf:'center',
  backgroundColor:'#228B22',
  marginBottom: spacing.lg,
  marginTop:10,
}
const $wbt: ViewStyle = {
    marginTop: 5,
    width: 125,
    height: 40,
    borderRadius:15,
    marginLeft: 30,
    backgroundColor:'white',
   }
   const $dbox: ViewStyle = {
    marginTop: 5,
    width: 300,
    height: 90,
    borderRadius:15,
    marginLeft:20,
    flexDirection:'row'

   }
   const $dboxt: ViewStyle = {
    width: 230,
    height: 90,
    borderRadius:15,
   }