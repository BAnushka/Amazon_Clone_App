import { StyleSheet } from "react-native";

const FooterStyles = StyleSheet.create({
    footerContainer: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'flex-start', 
        alignItems: 'center',
        borderBlockColor: '#8e8989ff',
        borderTopWidth: 1,
        backgroundColor: '#f2efefff',
        paddingLeft: 10,

        //for bottom positioning
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    footerItem:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 10,
    },
    icon:{
        height: 30,
        width:30,
        marginLeft: 30,
    },
    fontText:{
        fontSize: 12,
        textAlign: 'center',
        marginLeft: 30,
    }
})

export default FooterStyles;   