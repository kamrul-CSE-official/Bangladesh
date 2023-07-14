import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import InputPlace from './Components/InputPlace/InputPlace';
import PlaceList from './Components/PlaceList/PlaceList';
import PlaceDetail from './Components/PlaceDetail/PlaceDetail';


//9. Completing Modal by Adding Image and Other Details



export default function App() {
  const [placeList, setPlaceList] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null)


  const handleSelectedPlace = (key) => {
    const place = placeList.find(place => {
      return place.key === key
    })
    setSelectedPlace(place)
  }

  const hendleHideModal = (n) => {
    setSelectedPlace(n)
  }

  let placeDetail = null;
  if (selectedPlace !== null) {
    placeDetail = <PlaceDetail place={selectedPlace} hendleHideModal={hendleHideModal} />
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
