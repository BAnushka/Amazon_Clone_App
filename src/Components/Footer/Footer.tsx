import { View, Text, Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FooterStyles from "./Footer.style";
import { Images } from "../../../src/Assets/Images";

const FooterContent = () => {
    return (
        <SafeAreaView>
            <View style={FooterStyles.footerContainer}>
                //Home Icon
                <View style={FooterStyles.footerItem}>
                    <Image source={Images.HomeIcon} style={FooterStyles.icon}/>
                    <Text style={FooterStyles.fontText}>Home</Text>
                </View>
                //Account Icon
                <View style={FooterStyles.footerItem}>
                    <Image source={Images.AccountIcon} style={FooterStyles.icon}/>
                    <Text style={FooterStyles.fontText}>Account</Text>
                </View>
                //Cart Icon
                <View style={FooterStyles.footerItem}>
                    <Image source={Images.CartIcon} style={FooterStyles.icon}/>
                    <Text style={FooterStyles.fontText}>Cart</Text>
                </View>
                //wallet Icon
                <View style={FooterStyles.footerItem}>
                    <Image source={Images.WalletIcon} style={FooterStyles.icon}/>
                    <Text style={FooterStyles.fontText}>Wallet</Text>
                </View>
                //Menu Icon
                <View style={FooterStyles.footerItem}>
                    <Image source={Images.MenuIcon} style={FooterStyles.icon}/>
                    <Text style={FooterStyles.fontText}>Menu</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const Footer = () => {
    return(
        <SafeAreaView>
            <FooterContent />
        </SafeAreaView>    
)
}

export default Footer;