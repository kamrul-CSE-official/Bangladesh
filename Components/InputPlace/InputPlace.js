import React, { useState } from "react";
import { FcAddRow } from "react-icons/fc";
import { Button, StyleSheet, TextInput, View } from "react-native";


const InputPlace = (props) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <View>
            <View style={styles.inputView}>
                <TextInput
                    style={{
                        width: '90%',
                        borderBottomWidth: 1,
                        borderColor: 'green',
                        padding: 1
                    }}
                    placeholder='Add a place'
                    value={inputValue}
                    onChangeText={text => setInputValue(text)}
                />
                <Button
                    title="Add"
                    icon={<FcAddRow size={20} style={{ color: 'wheat' }} />}
                    onPress={() => {
                        if (inputValue !== '') {
                            props.setPlaceList([...props.placeList,
                            {
                                key: Math.random().toString(),
                                value: inputValue,
                                image: {
                                    uri: 'https://i.ibb.co/MGT2S8p/abc.jpg'
                                }
                            }]);
                            setInputValue('');
                        } else {
                            alert('Enter in an input')
                        }
                    }}
                />
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    inputView: {
        padding: 20,
        width: '100%',
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
});


export default InputPlace;