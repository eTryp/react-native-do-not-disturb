import * as React from 'react';
import { Button, StyleSheet, ToastAndroid, View } from 'react-native';
import {
  isDoNotDisturbModeOn,
  openDoNotDisturbSettings,
} from 'react-native-do-not-disturb';

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="Open DND settings"
        onPress={async () => {
          openDoNotDisturbSettings();
        }}
      />
      <Button
        title="Is DND mode on?"
        onPress={async () => {
          const isDNDModeOn = await isDoNotDisturbModeOn();
          ToastAndroid.show(
            'DND mode enabled: ' + isDNDModeOn,
            ToastAndroid.SHORT
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
