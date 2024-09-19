
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNVcTextRecognitionModuleSpec.h"

@interface VcTextRecognitionModule : NSObject <NativeVcTextRecognitionModuleSpec>
#else
#import <React/RCTBridgeModule.h>

@interface VcTextRecognitionModule : NSObject <RCTBridgeModule>
#endif

@end
