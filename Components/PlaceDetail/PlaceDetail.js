import React from 'react';
import { View, Text, Button, Modal, Image } from 'react-native';

const PlaceDetail = (props) => {

    return (
        <Modal>
            <View>
                <Image source={props.place.image} style={{ width: '100%', height: 300 }} />
                <Text>{props.place.value}</Text>
                <View>
                    <Button title='Delete' color='red' />
                    <Button title='Close' onPress={() => { props.hendleHideModal(null) }} />
                </View>
            </View>
        </Modal>
    );
};

export default PlaceDetail;