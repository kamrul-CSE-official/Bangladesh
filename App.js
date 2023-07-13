import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, TextInput, View } from 'react-native';
import { FcAddRow } from 'react-icons/fc'
import ListItems from './Components/ListItems/ListItems';
import InputPlace from './Components/InputPlace/InputPlace';
import PlaceList from './Components/PlaceList/PlaceList';
import PlaceDetail from './Components/PlaceDetail/PlaceDetail';

export default function App() {
  const [placeList, setPlaceList] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null)


  const handleSelectedPlace = (key) => {
    const place = placeList.find(place => {
      return place.key === key
    })
    setSelectedPlace(place)
  }

  let placeDetail = null;
  if (selectedPlace !== null) {
    placeDetail = <PlaceDetail place={selectedPlace} />
  }


  return (
    <View style={styles.container}>

      {placeDetail}

      <InputPlace placeList={placeList} setPlaceList={setPlaceList} />

      <PlaceList placeList={placeList} handleSelectedPlace={handleSelectedPlace} />


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
