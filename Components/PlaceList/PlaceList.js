import React from "react";
import { FlatList, View } from "react-native";
import ListItems from "../ListItems/ListItems";

const PlaceList = (props) => {
    return (
        <View style={{ width: '100%' }}>
            <FlatList data={props.placeList} renderItem={(item) => {
                return (<ListItems placeName={item.item.value} onItemPressed={() => alert(item.item.value)} />)
            }} />
        </View>
    );
};

export default PlaceList;