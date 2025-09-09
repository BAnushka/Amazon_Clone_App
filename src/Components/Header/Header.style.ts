import { StyleSheet } from "react-native";

const HeaderStyles = StyleSheet.create({
    amazonLogo:{
        width: 50,
        height: 30,
        marginRight: 10,
    },
    icon:{
        width: 30,
        height: 30,
        marginLeft: 5,
        marginRight: 5,
    },
    textinput:{
        flex: 1,
        height: 40,
        padding: 0,
    },
    textinputContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        justifyContent:'flex-start',
        paddingHorizontal: 2,
        height: 40,
        width: 260,
        backgroundColor: '#f2f2f2ff',
        borderColor: 'gray',
        borderRadius: 15,
        fontSize: 16,
    },
    iconInside:{
        width: 30,
        height: 40,
    },
    headerContainer: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'flex-start', 
        alignItems: 'center',
        paddingLeft: 10,
    },
    headerTitle: {
        color: 'black',
        fontSize: 12,
        fontWeight: 'bold',
        paddingLeft: 5,
        marginRight: 10,
    }
});

export default HeaderStyles;