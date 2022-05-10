import React from 'react';
import { View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking } from 'react-native';

const colorDarkFontGithub = '#4F565E';
const colorFontGithub = '#C9D1D9';
const colorGithub = '#171515';
const imageProfileGitHub = 'https://avatars.githubusercontent.com/u/101668192?v=4';

const urlToMyGithub = 'https://github.com/daviroquedev';
//view text criando text

//SafeAreaView coloca a barra superior do celular a amostra
//StatusBar permite estilizar a barra
//barStyle muda a cor dos icones da barra

const App = () => {

    const handlePressGoToGithub = async () => {
        const res = await Linking.canOpenURL(urlToMyGithub)
        if (res) {
            await Linking.openURL(urlToMyGithub);
        }
    };

    return (

        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle='light-content' />
            <View style={style.content}>
                <Image accessibilityLabel='Davi profile github' style={style.avatar} source={{ uri: imageProfileGitHub }} />
                <Text accessibilityLabel='Nome Davi Roque' style={[style.defaultText, style.name]}> Davi Roque</Text>
                <Text accessibilityLabel='Nickname daviroquedev' style={[style.defaultText, style.nickname]}> daviroquedev</Text>
                <Text accessibilityLabel='Descrição tudent system analysis and development | HTML | CSS | JavaScript | React-Native | 
DIO Campus Expert' style={[style.defaultText, style.description]}> Student system analysis and development | HTML | CSS | JavaScript | React-Native |
                    DIO Campus Expert</Text>

                <Pressable onPress={handlePressGoToGithub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText, style.textButton]}>Open in GitHub</Text>
                    </View>
                </Pressable>

            </View>
        </SafeAreaView>
    )
};


//criando style
const style = StyleSheet.create({
    container: {  //puxa o style.container pro view
        //columns se quiser trocar tem colocar flexDirection:'row'
        backgroundColor: colorGithub, //cor de fundo
        flex: 1, // expande tela inteira
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText: {
        color: colorFontGithub,
    },
    name: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
    },
    nickname: {
        fontSize: 16,
        color: colorDarkFontGithub
    },
    description: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
        marginTop: 20,
    },
    textButton: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    //  text:{  //puxo o style.text dentro do view
    //      fontSize:50,  //tamanho fonte
    //     fontWeight:'bold', //largura fonte
    //     color: 'black', //cor fonte
    //  }
});



export default App;