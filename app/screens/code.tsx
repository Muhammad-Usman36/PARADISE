import React from 'react';
import { View, FlatList, Text } from 'react-native';

const App = () => {
  const names = [
    { id: '1', name: 'Rp 200.000',rb:'TUE 22 Jun 2020',rs:'Buy `AppL` Stock' },
    { id: '2', name: 'Rp 200.000',rb:'TUE 22 Jun 2020',rs:'Buy `AppL` Stock' },
    { id: '3', name: 'Rp 200.000',rb:'TUE 22 Jun 2020',rs:'Buy `AppL` Stock' },
    { id: '4', name: 'Rp 200.000',rb:'TUE 22 Jun 2020',rs:'Buy `AppL` Stock' },
    { id: '5', name: 'Rp 200.000',rb:'TUE 22 Jun 2020',rs:'Buy `AppL` Stock' },

   
  ];

  const renderItem = ({ item }) => (
    <View style={{ margin:10,height:120,width:280,backgroundColor:'red' }}>
      <Text style={{color:'black'}}>{item.name}</Text>
      <Text style={{color:'black'}}>{item.rb}</Text>
      <Text style={{color:'black'}}>{item.rs}</Text>


    </View>
  );

  return (
    <FlatList
      data={names}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default App;
