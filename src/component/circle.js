import React from 'react';
import {View} from 'react-native';

const Circle = props => {
  const {size, color} = props;
  return (
    <View
      style={{
        height: size,
        width: size,
        backgroundColor: color,
        borderRadius: size / 2,
      }}
    />
  );
};

export default Circle;
