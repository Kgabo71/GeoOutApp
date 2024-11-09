import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Keyboard } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import mapDarkMode from './mapstyles.json';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import 'react-native-get-random-values';


const GOOGLE_API_KEY = 'AIzaSyCIVFLmmuqgqKYYtGjCiJt7J-mxmZyt30A'; 

const HomeScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);
    })();
  }, []);

  const handleLocationSelect = (data, details) => {

    const { lat, lng } = details.geometry.location;
    setSelectedLocation({
      latitude: lat,
      longitude: lng,
    });
    Keyboard.dismiss();
  };

  if (errorMsg) {
    return <Text>{errorMsg}</Text>;
  }

  if (!location) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        region={
          selectedLocation
            ? {
                latitude: selectedLocation.latitude,
                longitude: selectedLocation.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }
            : undefined
        }
        customMapStyle={mapDarkMode}
        zoomControlEnabled={true}
      >
        {selectedLocation && (
          <Marker
            coordinate={selectedLocation}
            title="Selected Location"
          />
        )}
      </MapView>

      <View style={styles.searchBarContainer}>
        <GooglePlacesAutocomplete
          placeholder="Search location"
          minLength={2}
          fetchDetails={true}
          onPress={handleLocationSelect}
          query={{
            key: GOOGLE_API_KEY,
            language: 'en',
          }}
          styles={{
            textInput: styles.searchBar,
            container: { flex: 0 },
            listView: { backgroundColor: '#000' }, // Adjust the background color of suggestions
          }}
        />
      </View>

      <View style={styles.bottomNavigation}>
        <Icon name="home-outline" style={styles.navButton} />
        <Icon
          name="people-outline"
          style={styles.navButton}
          onPress={() => navigation.navigate('communities')}
        />
        <Icon
          name="notifications-outline"
          style={styles.navButton}
          onPress={() => navigation.navigate('Notifications')}
        />
        <Icon
          name="person-outline"
          style={styles.navButton}
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  map: {
    flex: 1,
  },
  searchBarContainer: {
    position: 'absolute',
    top: 80,
    left: 16,
    right: 16,
    zIndex: 1,
  },
  searchBar: {
    backgroundColor: '#000',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 9,
    fontSize: 16,
    color: 'white',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#000',
    paddingVertical: 16,
    borderRadius: 45,
    marginHorizontal: 16,
    marginBottom: 16,
    shadowColor: '#000',
    height: 70,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
    position: 'absolute',
    bottom: 16,
    left: 1,
    right: 1,
  },
  navButton: {
    padding: 8,
    color: '#fff',
    fontSize: 24,
  },
});

export default HomeScreen;
