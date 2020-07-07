import styled from 'styled-components'

export const Container = styled.ScrollView`
    margin-bottom: 8px;
`;

export const Stories = styled.View`
    height: 60px;
    align-items: center;
`;


export const StoriesItens = styled.FlatList`   
    margin-top: 5px;
`;

export const StoriesItem = styled.TouchableOpacity`   
    border-width: 2px;
    border-color: #f86;
    width: 53px;
    height: 53px;
    border-radius: 50;
    padding: 1px;
    align-items: center;
    margin-left: 10;
`;

export const Profile = styled.View`
    flex-direction: row;
    align-self: center;
`;

export const ProfileImg = styled.Image`
    width: 46px;
    height: 46px;
    border-radius: 25;
`;

export const ProfileName = styled.Text`
    font-size: 15;
    font-weight: bold;
`;


export const ButtonIcons = styled.TouchableOpacity`

`;

export const Img = styled.Image`
    flex: 1;
    height: 350px;
`;

export const FooterItem = styled.View`
    padding: 0px 10px;
    flex-direction: column;
`;

export const FooterOptions = styled.View`
    flex-direction: row;
    align-items: center;
    height: 50px;
    justify-content: space-between;
`;

export const IconsItem = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Icons = styled.TouchableOpacity`
    margin-right: 5px;
`;

export const Description = styled.View`

`;
export const DescriptionText = styled.Text`
    font-size: 15;
`;

export const TimePost = styled.Text`
    font-size: 10;
`;

