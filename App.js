import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import ListItems from './Components/ListItems/ListItems';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [placeList, setPlaceList] = useState([]);

  const list = placeList.map((item, i) => {
    return (
      <ListItems key={i} placeName={item} onItemPressed={() => alert(item)} />
    )
  }

  );


  //6. Dynamic List



  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={{
            width: '80%',
            borderBottomWidth: 1,
            borderColor: 'green',
            padding: 1
          }}
          placeholder='Add a place'
          value={inputValue}
          onChangeText={text => setInputValue(text)}
        />
        <Button
          title='Add'
          onPress={() => {
            if (inputValue !== '') {
              setPlaceList([...placeList, inputValue]);
              setInputValue('');
            } else {
              alert('Enter in an input')
            }
          }}
        />
      </View>
      <ScrollView style={{ width: '100%' }}>
        {list}
      </ScrollView>
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
  inputView: {
    padding: 20,
    width: '100%',
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
