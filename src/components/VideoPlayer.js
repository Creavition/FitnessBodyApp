import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Video } from 'expo-av';

const { width } = Dimensions.get('window');

const VideoPlayer = ({ videos, bodyPart }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [status, setStatus] = useState({});

  const handleNextVideo = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  };

  const handlePreviousVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };

  const currentVideo = videos[currentVideoIndex];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{currentVideo.title}</Text>
      
      <Video
        style={styles.video}
        source={{ uri: currentVideo.url }}
        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      
      <View style={styles.description}>
        <Text style={styles.descriptionText}>{currentVideo.description}</Text>
        <Text style={styles.duration}>Süre: {currentVideo.duration}</Text>
      </View>

      <View style={styles.controls}>
        <TouchableOpacity 
          style={[styles.button, currentVideoIndex === 0 && styles.disabledButton]}
          onPress={handlePreviousVideo}
          disabled={currentVideoIndex === 0}
        >
          <Text style={styles.buttonText}>← Önceki</Text>
        </TouchableOpacity>

        <Text style={styles.counter}>
          {currentVideoIndex + 1} / {videos.length}
        </Text>

        <TouchableOpacity 
          style={[styles.button, currentVideoIndex === videos.length - 1 && styles.disabledButton]}
          onPress={handleNextVideo}
          disabled={currentVideoIndex === videos.length - 1}
        >
          <Text style={styles.buttonText}>Sonraki →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  video: {
    width: width - 40,
    height: 250,
    backgroundColor: '#000',
    borderRadius: 10,
  },
  description: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginBottom: 10,
  },
  duration: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  counter: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
});

export default VideoPlayer;