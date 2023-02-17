/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
  Text,
} from 'react-native';
import MCReactModule from 'react-native-marketingcloudsdk';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [isPushEnabled, setIsPushEnabled] = useState<boolean | null>(null);

  useEffect(() => {
    MCReactModule.isPushEnabled().then(setIsPushEnabled);
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          {isPushEnabled ? (
            <Text>Push is enabled</Text>
          ) : (
            <Text>Push is disabled</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
