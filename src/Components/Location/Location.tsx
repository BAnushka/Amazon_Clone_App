import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LocationStyles from "../../../src/Components/Location/Location.styles";
import { Images } from "../../../src/Assets/Images";
import Geolocation from 'react-native-geolocation-service';
import { useState, useEffect } from "react";

const LocationContent = () => {
    return (
        <SafeAreaView>
            <View style={LocationStyles.locationContainer}>
                <Image source={Images.LocationIcon} style={LocationStyles.icon} />
                <Text>Deliver here </Text>
                <Image source={Images.DropDownIcon} style={LocationStyles.dropdownicon} />
            </View>
        </SafeAreaView>
    )
}

const Location = () => {
    return (
        <SafeAreaView>
            <LocationContent />
        </SafeAreaView>
    )
}

export default Location;
