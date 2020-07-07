import React from 'react'
import { StatusBar, View, Text, StyleSheet,  } from 'react-native'
import { Container, Header, LogoArea, Logo, ButtonIcons, PrimaryView } from './Styles'
import logo from '../../assets/logo.png'
import { Feather } from '@expo/vector-icons'
import Feed from '../../components/Feed'

export default function Home(){
    return(
        <Container>
            <StatusBar/>
            <Header>
                <LogoArea>
                    <ButtonIcons>
                        <Feather name="camera" size={24} color="black" style={{marginRight: 5}} />
                    </ButtonIcons>
                    <Logo source={logo} />
                </LogoArea>
                <ButtonIcons>
                    <Feather name="send" size={24} color="black"/>
                </ButtonIcons>
            </Header>
            <PrimaryView showsVerticalScrollIndicator={false}>
                <Feed />
            </PrimaryView>
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