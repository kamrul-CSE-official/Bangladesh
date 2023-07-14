import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ListItems = (props) => {
    return (
        <TouchableOpacity onPress={props.onItemPressed}>
            <View style={styles.ListItems} >
                <Image source={props.image} style={{ width: '25%', height: 30 }} />
                <Text>
                    {props.placeName}
                </Text>
            </View>

        </TouchableOpacity>

    );
};


const styles = StyleSheet.create({
    ListItems: {
        width: '100%',
        padding: 10,
        backgroundColor: '#eee',
        margin: 5,
        flexDirection: 'row',
        gap: 15
    }
})

export default ListItems;