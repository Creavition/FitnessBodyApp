import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Circle, Ellipse, Rect } from 'react-native-svg';

const HumanBody = ({ onBodyPartPress, width = 300, height = 500 }) => {
  const bodyParts = {
    head: { color: '#FFE4E1', name: 'Baş' },
    chest: { color: '#E6F3FF', name: 'Göğüs' },
    arms: { color: '#E8F5E8', name: 'Kol' },
    abs: { color: '#FFF0E6', name: 'Karın' },
    legs: { color: '#F0E6FF', name: 'Bacak' },
    shoulders: { color: '#FFE6F0', name: 'Omuz' },
    back: { color: '#E6FFE6', name: 'Sırt' }
  };

  const BodyPartButton = ({ bodyPart, style, children }) => (
    <TouchableOpacity 
      style={[styles.bodyPartButton, { backgroundColor: bodyParts[bodyPart].color }, style]}
      onPress={() => onBodyPartPress(bodyPart)}
      activeOpacity={0.7}
    >
      <Text style={styles.bodyPartText}>{bodyParts[bodyPart].name}</Text>
      {children}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* SVG Body Diagram */}
      <View style={styles.svgContainer}>
        <Svg width={width} height={height} viewBox="0 0 300 500">
          {/* Head */}
          <Circle
            cx="150"
            cy="60"
            r="35"
            fill={bodyParts.head.color}
            stroke="#333"
            strokeWidth="3"
            onPress={() => onBodyPartPress('head')}
          />
          
          {/* Shoulders */}
          <Ellipse
            cx="150"
            cy="110"
            rx="65"
            ry="25"
            fill={bodyParts.shoulders.color}
            stroke="#333"
            strokeWidth="3"
            onPress={() => onBodyPartPress('shoulders')}
          />

          {/* Left Arm */}
          <Ellipse
            cx="75"
            cy="160"
            rx="18"
            ry="50"
            fill={bodyParts.arms.color}
            stroke="#333"
            strokeWidth="3"
            onPress={() => onBodyPartPress('arms')}
          />

          {/* Right Arm */}
          <Ellipse
            cx="225"
            cy="160"
            rx="18"
            ry="50"
            fill={bodyParts.arms.color}
            stroke="#333"
            strokeWidth="3"
            onPress={() => onBodyPartPress('arms')}
          />

          {/* Chest */}
          <Ellipse
            cx="150"
            cy="160"
            rx="50"
            ry="40"
            fill={bodyParts.chest.color}
            stroke="#333"
            strokeWidth="3"
            onPress={() => onBodyPartPress('chest')}
          />

          {/* Abs */}
          <Rect
            x="115"
            y="200"
            width="70"
            height="80"
            rx="15"
            fill={bodyParts.abs.color}
            stroke="#333"
            strokeWidth="3"
            onPress={() => onBodyPartPress('abs')}
          />

          {/* Left Leg */}
          <Ellipse
            cx="125"
            cy="350"
            rx="25"
            ry="90"
            fill={bodyParts.legs.color}
            stroke="#333"
            strokeWidth="3"
            onPress={() => onBodyPartPress('legs')}
          />

          {/* Right Leg */}
          <Ellipse
            cx="175"
            cy="350"
            rx="25"
            ry="90"
            fill={bodyParts.legs.color}
            stroke="#333"
            strokeWidth="3"
            onPress={() => onBodyPartPress('legs')}
          />

          {/* Back indicator circle */}
          <Circle
            cx="50"
            cy="160"
            r="30"
            fill={bodyParts.back.color}
            stroke="#333"
            strokeWidth="3"
            onPress={() => onBodyPartPress('back')}
          />
        </Svg>
        
        {/* Back label */}
        <View style={styles.backLabel}>
          <Text style={styles.backLabelText}>SIRT</Text>
        </View>
      </View>

      {/* Alternative Button Layout */}
      <View style={styles.buttonGrid}>
        <BodyPartButton bodyPart="head" style={styles.headButton} />
        <BodyPartButton bodyPart="shoulders" style={styles.shouldersButton} />
        <View style={styles.armRow}>
          <BodyPartButton bodyPart="arms" style={styles.armButton} />
          <BodyPartButton bodyPart="chest" style={styles.chestButton} />
          <BodyPartButton bodyPart="back" style={styles.backButton} />
        </View>
        <BodyPartButton bodyPart="abs" style={styles.absButton} />
        <BodyPartButton bodyPart="legs" style={styles.legsButton} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  svgContainer: {
    position: 'relative',
    marginBottom: 30,
  },
  backLabel: {
    position: 'absolute',
    top: 140,
    left: 20,
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 10,
    padding: 5,
  },
  backLabelText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  buttonGrid: {
    width: 280,
    alignItems: 'center',
  },
  bodyPartButton: {
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    minWidth: 120,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#333',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bodyPartText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  headButton: {
    width: 100,
  },
  shouldersButton: {
    width: 150,
  },
  armRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 5,
  },
  armButton: {
    width: 80,
  },
  chestButton: {
    width: 100,
  },
  backButton: {
    width: 80,
  },
  absButton: {
    width: 120,
  },
  legsButton: {
    width: 140,
  },
});

export default HumanBody;