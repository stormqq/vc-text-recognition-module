import { StyleSheet, View, Text } from 'react-native';
import {
  Camera,
  useCameraDevice,
  useFrameProcessor,
  VisionCameraProxy,
  type Frame,
} from 'react-native-vision-camera';

// @ts-ignore
const plugin = VisionCameraProxy.initFrameProcessorPlugin('detectText');

export function detectText(frame: Frame): object {
  'worklet';
  if (plugin == null)
    throw new Error('Failed to load Frame Processor Plugin "scanFaces"!');
  // @ts-ignore
  return plugin.call(frame);
}

export default function App() {
  const device = useCameraDevice('back');

  const frameProcessor = useFrameProcessor((frame) => {
    'worklet';
    const detectedText: any = detectText(frame);
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
