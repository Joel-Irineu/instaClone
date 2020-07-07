import React from 'react'
import { 
    StatusBar, 
    View, 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
} from 'react-native'
import { 
    Container, Stories, StoriesItens, StoriesItem, ProfileImg
} from './Styles'
import data from '../../services/feed'
import FeedItens from '../FeedItens'

export default function Feed(){
    return(

        <Container>
            <StatusBar/>
            <Stories>
                <StoriesItens 
                    style={styles.storys}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={data}
                    renderItem={({item}) => ( 
                        <StoriesItem
                            style={{}}
                        >
                            <ProfileImg 
                                source={{uri: item.imgperfil}}
                            />
                        </StoriesItem>
                    )}
                />
            </Stories>

            <FlatList 
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({item}) => ( <FeedItens data={item} />)}
            />
        </Container>
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