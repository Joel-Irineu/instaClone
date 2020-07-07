import React, {useState} from 'react'
import { View, Text} from 'react-native'
import { 
    Container, HeaderItem, Profile, ProfileImg, ProfileName, ButtonIcons, Img, 
    FooterItem, FooterOptions, IconsItem, Icons, Description, DescriptionText, 
    TimePost,
} from './Styles'
import { Feather, AntDesign } from '@expo/vector-icons'


export default function FeedItens({data}){
    const [feed, setFeed] = useState(data)
    const [liked, setliked] = useState(false)

    function tolike(){
        if(liked === false){
            setliked(true)
        }else{
            setliked(false)
        }
    }

    return(
        <Container>
            <HeaderItem>
                <Profile>
                    <ProfileImg source={{uri: feed.imgperfil}} />
                    <ProfileName>{feed.nome}</ProfileName>
                </Profile>
                <ButtonIcons>
                    <Feather name="more-vertical" size={24} color='black'/>
                </ButtonIcons>
            </HeaderItem>
            <Img source={{uri: feed.imgPublicacao}} />
            <FooterItem>
                <FooterOptions>
                    <IconsItem>
                        <Icons onPress={tolike} >
                            {liked === false ? 
                                <Feather name='heart' size={28} color="black"/>
                            :
                                <AntDesign name="heart" size={28} color="#f38" />
                            }
                        </Icons>
                        <Icons>
                            <Feather name="message-circle" size={28} color="black" style={{rotation: 250}} />
                        </Icons>
                        <Icons>
                            <Feather name="send" size={28} color="black"/>
                        </Icons>
                    </IconsItem>
                    <ButtonIcons>
                        <Feather name="bookmark" size={28} color="black"/>
                    </ButtonIcons>
                </FooterOptions>
                <Description>
                    <ProfileName>{feed.nome}</ProfileName>
                    <DescriptionText>{feed.descricao}</DescriptionText>
                    <TimePost>há {feed.tempo}</TimePost>
                </Description>
            </FooterItem>
        </Container>
    )
}