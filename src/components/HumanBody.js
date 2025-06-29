import React from 'react';
import { TouchableOpacity } from 'react-native';
import Svg, { Path, Circle, Ellipse } from 'react-native-svg';

const HumanBody = ({ onBodyPartPress, width = 300, height = 500 }) => {
  const bodyParts = {
    head: { color: '#FFE4E1' },
    chest: { color: '#E6F3FF' },
    arms: { color: '#E8F5E8' },
    abs: { color: '#FFF0E6' },
    legs: { color: '#F0E6FF' },
    shoulders: { color: '#FFE6F0' },
    back: { color: '#E6FFE6' }
  };

  const handlePress = (bodyPart) => {
    onBodyPartPress(bodyPart);
  };

  return (
    <Svg width={width} height={height} viewBox="0 0 300 500">
      {/* Head */}
      <TouchableOpacity onPress={() => handlePress('head')}>
        <Circle
          cx="150"
          cy="60"
          r="35"
          fill={bodyParts.head.color}
          stroke="#333"
          strokeWidth="2"
        />
      </TouchableOpacity>

      {/* Shoulders */}
      <TouchableOpacity onPress={() => handlePress('shoulders')}>
        <Ellipse
          cx="150"
          cy="110"
          rx="60"
          ry="20"
          fill={bodyParts.shoulders.color}
          stroke="#333"
          strokeWidth="2"
        />
      </TouchableOpacity>

      {/* Left Arm */}
      <TouchableOpacity onPress={() => handlePress('arms')}>
        <Ellipse
          cx="80"
          cy="150"
          rx="15"
          ry="40"
          fill={bodyParts.arms.color}
          stroke="#333"
          strokeWidth="2"
        />
      </TouchableOpacity>

      {/* Right Arm */}
      <TouchableOpacity onPress={() => handlePress('arms')}>
        <Ellipse
          cx="220"
          cy="150"
          rx="15"
          ry="40"
          fill={bodyParts.arms.color}
          stroke="#333"
          strokeWidth="2"
        />
      </TouchableOpacity>

      {/* Chest */}
      <TouchableOpacity onPress={() => handlePress('chest')}>
        <Ellipse
          cx="150"
          cy="150"
          rx="45"
          ry="35"
          fill={bodyParts.chest.color}
          stroke="#333"
          strokeWidth="2"
        />
      </TouchableOpacity>

      {/* Abs */}
      <TouchableOpacity onPress={() => handlePress('abs')}>
        <Ellipse
          cx="150"
          cy="220"
          rx="35"
          ry="40"
          fill={bodyParts.abs.color}
          stroke="#333"
          strokeWidth="2"
        />
      </TouchableOpacity>

      {/* Left Leg */}
      <TouchableOpacity onPress={() => handlePress('legs')}>
        <Ellipse
          cx="125"
          cy="340"
          rx="20"
          ry="80"
          fill={bodyParts.legs.color}
          stroke="#333"
          strokeWidth="2"
        />
      </TouchableOpacity>

      {/* Right Leg */}
      <TouchableOpacity onPress={() => handlePress('legs')}>
        <Ellipse
          cx="175"
          cy="340"
          rx="20"
          ry="80"
          fill={bodyParts.legs.color}
          stroke="#333"
          strokeWidth="2"
        />
      </TouchableOpacity>

      {/* Back indicator */}
      <TouchableOpacity onPress={() => handlePress('back')}>
        <Circle
          cx="250"
          cy="450"
          r="25"
          fill={bodyParts.back.color}
          stroke="#333"
          strokeWidth="2"
        />
      </TouchableOpacity>
    </Svg>
  );
};

export default HumanBody;