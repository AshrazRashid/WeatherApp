/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {WEATHER_API} from './src/api/getWeatherUpdate';
import Circle from './src/component/circle';
import Heading from './src/component/headings/Heading';
import SubHeading from './src/component/headings/subHeading';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  useEffect(() => {
    WEATHER_API('karachi,pk')
      .then(res => {
        console.log('res', res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <View style={styles.Container}>
      <View style={styles.subContainer}>
        <Heading headingText={'Weather App'} />

        <SubHeading headingText={'karachi 30c'} />

        <View style={{marginVertical: 40}}>
          <Circle size={200} color={'red'} />
        </View>
      </View>

      <View style={styles.horizontalCircles}>
        <Circle size={100} color={'green'} />
        <Circle size={100} color={'lightblue'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  subContainer: {
    alignItems: 'center',
    marginTop: 100,
  },

  horizontalCircles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
});

export default App;
