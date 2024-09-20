package com.vctextrecognitionmodule

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.WritableNativeMap
import com.google.android.gms.tasks.Task
import com.google.android.gms.tasks.Tasks
import android.media.Image
import com.google.mlkit.vision.common.InputImage
import com.google.mlkit.vision.text.Text
import com.google.mlkit.vision.text.TextRecognition
import com.google.mlkit.vision.text.latin.TextRecognizerOptions
import com.mrousavy.camera.frameprocessors.Frame
import com.mrousavy.camera.frameprocessors.FrameProcessorPlugin
import com.mrousavy.camera.frameprocessors.VisionCameraProxy

class VcTextRecognitionModuleModule(proxy: VisionCameraProxy, options: Map<String, Any>?): FrameProcessorPlugin() {

  override fun callback(frame: Frame, arguments: Map<String, Any>?): Any? {
    val result = mutableMapOf<String, Any?>()

    val recognizer = TextRecognition.getClient(TextRecognizerOptions.DEFAULT_OPTIONS)
    
    val mediaImage = frame.getImage()
    if (mediaImage != null) {
        val image = InputImage.fromMediaImage(mediaImage, 0)

        val task: Task<Text> = recognizer.process(image)
        try {
            val text: Text = Tasks.await(task)
            result["text"] = text.text
        } catch (e: Exception) {
            result["error"] = e.message
        }
    } else {
        result["error"] = "No image found"
    }

    return result
  }
}