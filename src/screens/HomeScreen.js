import React from 'react';
import { View, StyleSheet, Text, ScrollView, Alert } from 'react-native';
import HumanBody from '../components/HumanBody';
import { getExercisesByBodyPart } from '../data/exerciseData';

const HomeScreen = ({ navigation }) => {
  const handleBodyPartPress = (bodyPart) => {
    const exerciseData = getExercisesByBodyPart(bodyPart);
    
    if (exerciseData) {
      navigation.navigate('Exercise', {
        bodyPart: bodyPart,
        exerciseName: exerciseData.name,
        exercises: exerciseData.exercises
      });
    } else {
      Alert.alert(
        'Yakında Gelecek!',
        `${bodyPart} bölgesi için egzersizler yakında eklenecek.`,
        [{ text: 'Tamam', style: 'default' }]
      );
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>Fitness Egzersizleri</Text>
        <Text style={styles.subtitle}>
          Vücut bölgesine tıklayarak egzersizleri görüntüleyin
        </Text>
      </View>

      <View style={styles.bodyContainer}>
        <HumanBody onBodyPartPress={handleBodyPartPress} />
      </View>

      <View style={styles.legend}>
        <Text style={styles.legendTitle}>Bölgeler:</Text>
        <View style={styles.legendItems}>
          <View style={styles.legendItem}>
            <View style={[styles.colorBox, { backgroundColor: '#FFE4E1' }]} />
            <Text style={styles.legendText}>Baş & Boyun</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.colorBox, { backgroundColor: '#FFE6F0' }]} />
            <Text style={styles.legendText}>Omuz</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.colorBox, { backgroundColor: '#E8F5E8' }]} />
            <Text style={styles.legendText}>Kol</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.colorBox, { backgroundColor: '#E6F3FF' }]} />
            <Text style={styles.legendText}>Göğüs</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.colorBox, { backgroundColor: '#FFF0E6' }]} />
            <Text style={styles.legendText}>Karın</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.colorBox, { backgroundColor: '#F0E6FF' }]} />
            <Text style={styles.legendText}>Bacak</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.colorBox, { backgroundColor: '#E6FFE6' }]} />
            <Text style={styles.legendText}>Sırt</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  contentContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
  },
  bodyContainer: {
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  legend: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  legendTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  legendItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '48%',
    marginBottom: 10,
  },
  colorBox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  legendText: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
});

export default HomeScreen;