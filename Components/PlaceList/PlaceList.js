import React from "react";
import { FlatList, View } from "react-native";
import ListItems from "../ListItems/ListItems";

const PlaceList = (props) => {
    return (
        <View style={{ width: '100%' }}>
            <FlatList data={props.placeList} renderItem={(info) => {
                return (<ListItems placeName={info.item.value} onItemPressed={() => props.handleSelectedPlace(info.item.key)} />)
            }} />
        </View>
    );
};

export default PlaceList;