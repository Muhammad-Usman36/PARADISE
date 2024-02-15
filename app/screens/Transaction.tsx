import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { Image, ImageStyle,TouchableOpacity, View, ViewStyle,Alert, ScrollView,FlatList } from "react-native"
import { Text,Button,Icon,TextField} from "app/components"
import { isRTL } from "../i18n"
import { AppStackScreenProps, goBack } from "../navigators"
import { colors, spacing } from "../theme"

export const Transaction=(props)=> {
  

  const names = [
    { id: '1', name: 'Rp 200.000',rb:'TUE 22 Jun 2020',rs:'Buy `AppL` Stock' },
    { id: '2', name: 'Rp 150.000',rb:'TUE 22 Jun 2020',rs:'API `AppL` Stock' },
    { id: '3', name: 'Rp 240.000',rb:'TUE 22 Jun 2020',rs:'Buy `AppL` Stock' },
    { id: '4', name: 'Rp 100.240',rb:'TUE 22 Jun 2020',rs:'API `AppL` Stock' },
    { id: '5', name: 'Rp 200.000',rb:'TUE 22 Jun 2020',rs:'Buy `AppL` Stock' },

   
  ];

  const renderItem = ({ item }) => (
    <View style={{ marginLeft:10,height:60,width:320 }}>
      <Text style={{color:'black',fontSize:20,fontWeight:'bold',marginLeft:10}}>{item.name}</Text>
      <View style={{flexDirection:'row',marginLeft:10}}>
      <Text style={{color:'black'}}>{item.rs}</Text>
      <Text style={{color:'black',fontSize:13,marginLeft:70}}>{item.rb}</Text>
      </View>
      <View style={{marginTop:10,marginBottom:10,height:0.5,marginLeft:10,width:310,backgroundColor:'black'}}>

      </View>
    </View>
  );


  return (
    <View style={$container}>
        <View style={{height:40,width:40}}>

        </View>
        <View style={{flexDirection:'row',marginTop:10}}>
        <Text style={{fontWeight:'bold',fontSize: 20,marginTop:2,lineHeight:40,marginLeft:140}}>My Asset</Text>

      <TouchableOpacity onPress={()=>props.navigation.navigate('Home')}>
        <View style={{marginTop:10,height:25,width:25,backgroundColor:'gray',borderRadius:15,marginLeft:90,alignItems:'center',justifyContent:'center'}}>
      <Icon icon="x" size={20} color="white" />
      </View>
      </TouchableOpacity>
      </View>



      <Text style={{fontSize: 15,marginTop:10,lineHeight:30,marginLeft:20}}>Your total asset portfolio</Text>

      <Text style={{fontWeight:'bold',fontSize: 25,lineHeight:40,marginLeft:20}}>N203,935</Text>



      <Text style={{fontWeight:'bold',alignItems: 'center',fontSize:20,marginTop:30,marginBottom:10,marginLeft:20}}>Current Plans</Text>


      <Image
  style={{height:190,width:340,borderRadius:30,marginLeft:8,alignSelf:'center'}}
        source={require('../../assets/images/GOB.png')}
      />


<TouchableOpacity onPress={()=>props.navigation.navigate('Product')}>
<View style={{flexDirection:'row',marginTop:10,alignSelf:'center'}}>

<Text style={{fontWeight:'bold',fontSize: 16,color:'red',}}>See All Plans</Text>
<Icon icon="caretRight" size={25} color="red" />

</View>

</TouchableOpacity>





<Text style={{fontWeight:'bold',alignItems: 'center',marginLeft:20,fontSize:20,marginTop:20,marginBottom:20}}>History</Text>

<FlatList
      data={names}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
       
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
  width: "100%",
  borderRadius:30,
  backgroundColor:'#228B22',
  marginBottom: spacing.lg,
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
    height: 60,
    borderRadius:15,
    marginLeft:5,
    flexDirection:'row'

   }
   const $dboxt: ViewStyle = {
    width: 230,
    height: 90,
    borderRadius:15,
   }