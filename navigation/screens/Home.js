import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
 
export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            {/* First Row */}
            <View style={[styles.row, { flexDirection: 'row' }]}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.text}>Good Morning</Text>
                    <Text style={[styles.text, styles.bold]}>Book Single Journey</Text>
                    <Text style={[styles.text, styles.bold]}>Ticket</Text>
                </View>
                <Image source={require('../../assets/blueTextLogo.png')} style={styles.logo} />

            </View>

            {/* Second Row */}
            <View style={styles.row}>
                <View style={styles.inputContainer}>
                    <Icon name="search" size={20} color="gray" style={styles.searchIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Search Station"
                        onChangeText={text => console.log(text)}
                    />
                </View>
            </View>

            {/* Third Row */}
            <View style={styles.row}>
                <Text style={[styles.text, { width: '100%', marginTop: 10 }]}>Create a route</Text>
            </View>

            {/* Fourth Row */}
            <View style={styles.row}>
                {/* Card Component */}
                <View style={[styles.card, { width: '100%', height: '60%' }]}>
                    <Text>Card Content</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        marginBottom: 20,
        width: '90%',
    },
    text: {
        fontSize: 20,
    },
    bold: {
        fontWeight: 'bold',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 12,
        paddingHorizontal: 10,
        width: '100%',
        height: 51,
        backgroundColor: 'white',
         elevation: 2,
    },
    
    searchIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 40,
    },
    card: {
        height: 100,
        backgroundColor: '#eaeaea',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 65,
        height: 40,
        marginTop: 15,
        marginRight: 4,
    },
});
