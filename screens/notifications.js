import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const notifications = [
  { id: '1', name: 'Irma', action: 'commented on your post.', time: '2s ago', icon: 'comment' },
  { id: '2', name: 'Irma', action: 'liked your post.', time: '10s ago', icon: 'thumbs-up' },
  { id: '3', name: 'Brandie', action: 'liked your post.', time: '40s ago', icon: 'thumbs-up' },
  { id: '4', name: 'Darell', action: 'liked your post.', time: '1m ago', icon: 'thumbs-up' },
  { id: '5', name: 'Shane', action: 'commented on your post.', time: '2m ago', icon: 'comment' },
  { id: '6', name: 'Shane', action: 'shared your post.', time: '2m ago', icon: 'share' },
  { id: '7', name: 'Shane', action: 'liked your post.', time: '2m ago', icon: 'thumbs-up' },
  { id: '8', name: 'Floyd', action: 'commented on your post.', time: '3m ago', icon: 'comment' },
  { id: '9', name: 'Floyd', action: 'liked your post.', time: '3m ago', icon: 'thumbs-up' },
  { id: '10', name: 'Mike', action: 'liked your post.', time: '3m ago', icon: 'thumbs-up' },
];

const NotificationItem = ({ item }) => (
  <View style={styles.notificationItem}>
    <Image source={{ uri: `https://i.pravatar.cc/150?u=${item.id}` }} style={styles.avatar} />
    <View style={styles.textContainer}>
      <Text style={styles.notificationText}>
        <Text style={styles.boldText}>{item.name} </Text>
        {item.action}
      </Text>
      <Text style={styles.timeText}>{item.time}</Text>
    </View>
    <Icon name={item.icon} size={20} color="#888" />
  </View>
);

const Notifications = () => (
  <View style={styles.container}>
    <Text style={styles.header}>Notifications</Text>
    <FlatList
      data={notifications}
      renderItem={NotificationItem}
      keyExtractor={item => item.id}
    />
  </View>
);

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
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  notificationText: {
    color: '#fff',
  },
  boldText: {
    fontWeight: 'bold',
  },
  timeText: {
    color: '#888',
    marginTop: 5,
  },
});

export default Notifications;
