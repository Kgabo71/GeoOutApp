import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const communities = [
  {
    id: '1',
    name: 'Photography Enthusiasts',
    description: 'A community for people who love photography.',
    members: 2345,
    image: 'https://img.freepik.com/free-photo/male-female-tourists-taking-selfie-with-stick-outside_23-2149486618.jpg?t=st=1718649895~exp=1718653495~hmac=cdd30228ac22b83c00e4b8737a9e8296593549825fbc73769dfb164d6f18fd18&w=740',
  },
  {
    id: '2',
    name: 'Commute Stuff',
    description: 'Discuss the latest in tech and gadgets.',
    members: 1890,
    image: 'https://img.freepik.com/free-vector/young-family-with-baggage-taking-taxi-airport_74855-11291.jpg?t=st=1718640657~exp=1718644257~hmac=6644606e3a275160a7edc638f52f0a7aecfd420ad855ea5dcfd8efc11c59af58&w=900',
  },
  {
    id: '3',
    name: 'Travel Lovers',
    description: 'Share your travel experiences and tips.',
    members: 1500,
    image: 'https://img.freepik.com/free-photo/male-female-tourists-taking-selfie-with-stick-outside_23-2149486618.jpg?t=st=1718649895~exp=1718653495~hmac=cdd30228ac22b83c00e4b8737a9e8296593549825fbc73769dfb164d6f18fd18&w=740',
  },
  {
    id: '4',
    name: ' United',
    description: 'For people who love to cook and eat.',
    members: 1200,
    image: 'https://img.freepik.com/free-photo/medium-shot-senior-people-walking-city_23-2149365830.jpg?t=st=1718651006~exp=1718654606~hmac=63f74211f17c6bb0487d7ad79e6acff7e608defe03825f7c64e1e1c124de4165&w=996',
  },
];

const CommunityItem = ({ item, handleJoinCommunity }) => (
  <TouchableOpacity style={styles.communityItem} onPress={() => handleJoinCommunity(item)}>
    <Image source={{ uri: item.image }} style={styles.communityImage} />
    <View style={styles.communityInfo}>
      <Text style={styles.communityName}>{item.name}</Text>
      <Text style={styles.communityDescription}>{item.description}</Text>
      <View style={styles.communityFooter}>
        <Icon name="users" size={16} color="#888" />
        <Text style={styles.membersCount}>{item.members} members</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const Communities = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCommunity, setSelectedCommunity] = useState(null);

  const handleJoinCommunity = (community) => {
    setSelectedCommunity(community);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedCommunity(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Communities</Text>
      <FlatList
        data={communities}
        renderItem={({ item }) => <CommunityItem item={item} handleJoinCommunity={handleJoinCommunity} />}
        keyExtractor={(item) => item.id}
      />

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={closeModal}
      >
        <TouchableOpacity style={styles.modalContainer} activeOpacity={1} onPressOut={closeModal}>
          <View style={styles.modalContent}>
            {selectedCommunity && (
              <>
                <TouchableOpacity style={styles.modalCloseButton} onPress={closeModal}>
                  <Icon name="times" size={24} color="#fff" />
                </TouchableOpacity>
                <Image source={{ uri: selectedCommunity.image }} style={styles.modalImage} />
                <Text style={styles.modalJoinText}>Join {selectedCommunity.name}</Text>
                <TouchableOpacity style={styles.modalJoinButton}>
                  <Text style={styles.modalJoinButtonText}>Join Community</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  communityItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15,
    elevation: 3,
  },
  communityImage: {
    width: 100,
    height: 100,
  },
  communityInfo: {
    flex: 1,
    padding: 10,
  },
  communityName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  communityDescription: {
    color: '#666',
    marginVertical: 5,
  },
  communityFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  membersCount: {
    marginLeft: 5,
    color: '#888',
  },
  modalContainer: {
    alignContent: 'center',
    flex: 1,
    width: '90%',
    left: 20,
    marginBottom: '40%',
    marginTop: '40%',
    borderRadius: 19,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(1, 3, 10, 5)',  // Semi-transparent background
  },
  modalContent: {
    backgroundColor: 'transparent', // Transparent background
    alignItems: 'center',
    padding: 20,
    borderRadius: 16,
  },
  modalImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  modalJoinText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  modalJoinButton: {
    backgroundColor: '#007aff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  modalJoinButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalCloseButton: {
    position: 'absolute',
    top: -3,
    right: -12,
    backgroundColor: 'transparent',
  },
});

export default Communities;