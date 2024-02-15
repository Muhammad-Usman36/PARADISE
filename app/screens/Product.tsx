import React from 'react';
import { View, Text, StyleSheet,ScrollView ,Image} from 'react-native';

export default function App() {
  return (
    <View>
    
    <Text style={styles.text}>Plans We have</Text>
    < ScrollView style={{alignSelf:'center'}}>
    <Image
  style={{height:400,width:290,borderRadius:30}}
        source={require('../../assets/images/GO.png')}
      />

<Image
  style={{height:400,width:290,borderRadius:30}}
        source={require('../../assets/images/SI.png')}
      />

<Image
  style={{height:400,width:290,borderRadius:30}}
        source={require('../../assets/images/GOG.png')}
      />

<Image
  style={{height:400,width:290,borderRadius:30}}
        source={require('../../assets/images/GOP.png')}
      />

<Image
  style={{height:400,width:290,borderRadius:30}}
        source={require('../../assets/images/GO.png')}
      />

<Image
  style={{height:400,width:290,borderRadius:30}}
        source={require('../../assets/images/SI.png')}
      />

<Image
  style={{height:400,width:290,borderRadius:30}}
        source={require('../../assets/images/GOG.png')}
      />

<Image
  style={{height:400,width:290,borderRadius:30}}
        source={require('../../assets/images/GOP.png')}
      />

<Image
  style={{height:400,width:290,borderRadius:30}}
        source={require('../../assets/images/GO.png')}
      />

<Image
  style={{height:400,width:290,borderRadius:30}}
        source={require('../../assets/images/SI.png')}
      />

<Image
  style={{height:400,width:290,borderRadius:30}}
        source={require('../../assets/images/GOG.png')}
      />

<Image
  style={{height:400,width:290,borderRadius:30}}
        source={require('../../assets/images/GOP.png')}
      />
      

    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop:60,
    marginLeft:20,
  },
});