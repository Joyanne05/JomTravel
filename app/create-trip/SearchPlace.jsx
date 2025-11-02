import { useContext, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import "react-native-get-random-values";
import { CreateTripContext } from "../../context/CreateTripContext";
import { GOOGLE_PLACE_API_KEY } from "@env";

export default function SearchPlace() {
  const router = useRouter();
  const { tripData, setTripData } = useContext(CreateTripContext);

  //Will execute everytime tripData changes
  useEffect(() => {
    console.log(tripData);
  }, [tripData]);

  return (
    <SafeAreaView style={{ backgroundColor: Colors.white }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => router.back("/home")}>
          <MaterialCommunityIcons
            name="keyboard-backspace"
            size={35}
            color="black"
          />
        </TouchableOpacity>
        <View style={styles.tripInnerContainer}>
          <Text style={styles.tripHeader}>Where are you heading to?</Text>

          {/* Search bar */}
          <View style={{ flex: 1 }}>
            <GooglePlacesAutocomplete
              styles={{
                listView: {
                  maxWidth: 310,
                },
                textInput: {
                  fontFamily: "Poppins",
                },
                textInputContainer: {
                  borderWidth: 1,
                  borderRadius: 5,
                },
              }}
              fetchDetails={true}
              placeholder="Search destination"
              textInputProps={{
                placeholderTextColor: "grey",
                returnKeyType: "search",
              }}
              onPress={(data, details = null) => {
                setTripData({
                  locationInfo: {
                    name: data.description,
                    coordinates: details?.geometry.location,
                    photoRef: details?.photos[0].photo_reference,
                    url: details?.url,
                  },
                });
                router.push("/create-trip/SelectTraveller");
              }}
              query={{
                key: GOOGLE_PLACE_API_KEY,
                language: "en",
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
  },

  tripInnerContainer: {
    padding: 15,
    height:"100%",
  },

  tripHeader: {
    fontFamily: "PoppinsExtraBold",
    fontSize: 34,
    marginTop: 15,
    marginBottom: 20,
  },
});
