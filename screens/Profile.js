import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInput, IconButton } from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { launchImageLibrary } from 'react-native-image-picker';

const ProfileScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [profileImage, setProfileImage] = useState('https://via.placeholder.com/100');

  const handleUpdateProfile = () => {
    setModalVisible(true);
  };

  const selectImage = () => {
    const options = {
      mediaType: 'photo',
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.assets[0].uri };
        setProfileImage(source.uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: profileImage }}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Test User</Text>
          <Text style={styles.accountType}>Geo Outer</Text>
        </View>
        <TouchableOpacity style={styles.editIcon} onPress={selectImage}>
          <Icon name="edit" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem} onPress={handleUpdateProfile}>
          <Icon name="person" size={20} color="#fff" />
          <Text style={styles.menuText}>Update Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="settings" size={20} color="#fff" />
          <Text style={styles.menuText}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="info" size={20} color="#fff" />
          <Text style={styles.menuText}>Terms of service</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <ScrollView contentContainerStyle={styles.modalContent}>
            <View style={styles.formGroup}>
              <Text style={styles.label}>Let's Update</Text>
              <View style={styles.inputContainer}>
                <IonIcon name="person-outline" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  value={name}
                  onChangeText={setName}
                  placeholder="Your name"
                  placeholderTextColor="#888"
                  underlineColor="transparent"
                  mode="flat"
                  theme={{ colors: { text: '#fff', placeholder: '#888' } }}
                />
              </View>
            </View>
            <View style={styles.formGroup}>
              <View style={styles.inputContainer}>
                <IonIcon name="call-outline" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  value={number}
                  onChangeText={setNumber}
                  placeholder="Cell Number"
                  placeholderTextColor="#888"
                  underlineColor="transparent"
                  mode="flat"
                  theme={{ colors: { text: '#fff', placeholder: '#888' } }}
                />
              </View>
            </View>
            <View style={styles.formGroup}>
              <View style={styles.inputContainer}>
                <IonIcon name="mail-outline" style={styles.icon} />
                <TextInput
                  style={styles.input}
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Email"
                  placeholderTextColor="#888"
                  underlineColor="transparent"
                  mode="flat"
                  theme={{ colors: { text: '#fff', placeholder: '#888' } }}
                />
              </View>
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <IconButton
                  icon="plus"
                  color="#fff"
                  size={28}
                  style={styles.addButton}
                  onPress={() => console.log('Name:', name, 'Number:', number, 'Email:', email)}
                />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileInfo: {
    marginLeft: 15,
  },
  name: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  accountType: {
    color: '#ccc',
    fontSize: 16,
  },
  editIcon: {
    marginLeft: 'auto',
    backgroundColor: '#444',
    padding: 5,
    borderRadius: 20,
  },
  menuContainer: {
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
  },
  menuText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#000',
    margin: 20,
    padding: 20,
    borderRadius: 25,
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1.9,
    shadowRadius: 10,
    elevation: 8,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 5,
    shadowColor: '#fff',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 10,
    borderWidth: 1,
    borderColor: '#F6CAC1',
  },
  icon: {
    fontSize: 20,
    color: '#fff',
    marginRight: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#000',
    color: '#fff',
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#F6CAC1',
    borderRadius: 12,
    shadowColor: '#fff',
    borderColor: '#fff',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.2,
    width: 45,
    height: 45,
    shadowRadius: 6,
    elevation: 1,
    marginTop: 20,
  },
  closeButton: {
    backgroundColor: '#fff',
    shadowColor: '#fff',
    borderColor: '#F6CAC1',
    padding: 10,
    width: 110,
    height: 45,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  closeButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default ProfileScreen;
