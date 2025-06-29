import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import VideoPlayer from '../components/VideoPlayer';

const ExerciseScreen = ({ route }) => {
  const { bodyPart, exerciseName, exercises } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{exerciseName} Egzersizleri</Text>
        <Text style={styles.headerSubtitle}>
          {exercises.length} egzersiz mevcut
        </Text>
      </View>
      
      <VideoPlayer 
        videos={exercises} 
        bodyPart={bodyPart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
  },
});

export default ExerciseScreen;