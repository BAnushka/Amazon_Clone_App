import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FooterStyles from "./Footer.style";

const FooterContent = () => {
    return (
        <SafeAreaView>
            <View style={FooterStyles.footerContainer}>
                <Text>Footer Content</Text>
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