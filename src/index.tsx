// import { NativeModules, Platform } from 'react-native';
// import type { Frame } from 'react-native-vision-camera';

// const LINKING_ERROR =
//   `The package 'react-native-vc-text-recognition-module' doesn't seem to be linked. Make sure: \n\n` +
//   Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
//   '- You rebuilt the app after installing the package\n' +
//   '- You are not using Expo Go\n';

// const VcTextRecognitionModule = NativeModules.VcTextRecognitionModule
//   ? NativeModules.VcTextRecognitionModule
//   : new Proxy(
//       {},
//       {
//         get() {
//           throw new Error(LINKING_ERROR);
//         },
//       }
//     );

// export function multiply(a: number, b: number): Promise<number> {
//   return VcTextRecognitionModule.multiply(a, b);
// }

// export function sum(a: number, b: number): Promise<number> {
//   return VcTextRecognitionModule.sum(a, b);
// }

// export function detectText(frame: Frame): Promise<string> {
//   'worklet';
//   return VcTextRecognitionModule.detectText(frame);
// }

// export function detectText(frame: Frame) {
//   'worklet';
//   // @ts-ignore
//   return __detectText(frame);
// }
