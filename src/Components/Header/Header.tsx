import React from "react";
import { View, TextInput, Image } from "react-native";
import { SafeAreaView} from "react-native-safe-area-context";
import HeaderStyles from "./Header.style";
import { Images } from "../../../src/Assets/Images";
import { useState } from "react";


const HeaderTitle = () => {
    const [number, onChangeNumber] = useState('');

    return (
        <SafeAreaView>
            <View style={HeaderStyles.headerContainer}>
                <Image source={Images.AmazonLogo} style={HeaderStyles.amazonLogo}/>

                <View style={HeaderStyles.textinputContainer}>
                <Image source={Images.SearchIcon} style={HeaderStyles.iconInside}/>
                <TextInput
                    style={HeaderStyles.textinput}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="type here"
                    keyboardType="numeric"
                />
                <Image source={Images.MicrophoneIcon} style={HeaderStyles.iconInside}/>
                </View>
                <Image source={Images.QRCodeIcon} style={HeaderStyles.icon}/>
            </View>
        </SafeAreaView>
    );
};
const Header = () => {
    return(
        <SafeAreaView>
            <HeaderTitle />
        </SafeAreaView>
    )
}

export default Header;