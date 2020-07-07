import styled from 'styled-components'

export const Container = styled.ScrollView`
    margin-bottom: 8px;
`;

export const HeaderItem = styled.View`
    padding: 0px 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 50px;
`;

export const Profile = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ProfileImg = styled.Image`
    width: 40px;
    height: 40px;
    color: #262626;
    border-radius: 25;
    margin-right: 5;
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

