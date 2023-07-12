import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ListItems = (props) => {
    return (
        <TouchableOpacity onPress={props.onItemPressed}>
            <View style={styles.ListItems} >

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
        margin: 5
    }
})

export default ListItems;