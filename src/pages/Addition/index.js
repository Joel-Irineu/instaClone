import React from 'react'
import { 
    StatusBar, 
    View, 
    Text,
    StyleSheet,
    Button,
} from 'react-native'

export default function Addition(){
    return(

        <View style={styles.container}>
            <StatusBar/>
            <Text style={styles.title}>Add</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#262626',
        textAlign: 'center'
    },
})