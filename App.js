import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, TextInput, View } from 'react-native';
import { FcAddRow } from 'react-icons/fc'
import ListItems from './Components/ListItems/ListItems';
import InputPlace from './Components/InputPlace/InputPlace';
import PlaceList from './Components/PlaceList/PlaceList';

export default function App() {
  const [placeList, setPlaceList] = useState([]);

  //6. Dynamic List



  return (
    <View style={styles.container}>

      <InputPlace placeList={placeList} setPlaceList={setPlaceList} />

      <PlaceList placeList={placeList} />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
});
