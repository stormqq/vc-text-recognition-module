import { VisionCameraProxy, type Frame } from 'react-native-vision-camera';

const plugin = VisionCameraProxy.initFrameProcessorPlugin('detectText', {});

export function scanText(frame: Frame) {
  'worklet';
  if (plugin == null)
    throw new Error('Failed to load Frame Processor Plugin "scanText"');
  return plugin.call(frame);
}
