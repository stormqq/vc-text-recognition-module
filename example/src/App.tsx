import { StyleSheet, View, Text } from 'react-native';
import { scanText } from 'react-native-vc-text-recognition-module';
import {
  Camera,
  useCameraDevice,
  useFrameProcessor,
} from 'react-native-vision-camera';

export default function App() {
  const device = useCameraDevice('back');

  const frameProcessor = useFrameProcessor((frame) => {
    'worklet';
    const detectedText: any = scanText(frame);
    console.log('detectedText', detectedText.text);
  }, []);

  if (!device) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
      frameProcessor={frameProcessor}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
