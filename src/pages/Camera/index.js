import React, { Component } from "react";
import { View, TouchableOpacity, Image, Dimensions } from "react-native";
import { RNCamera } from "react-native-camera";
import AntDesign from "react-native-vector-icons/AntDesign";
import ImageResizer from "react-native-image-resizer";
import FontAwesome from "react-native-vector-icons/FontAwesome";

var { width, height } = Dimensions.get("window");

class Camera extends Component {
  state = {
    imgUri: "",
  };

  takePicture = async () => {
    if (this.camera) {
      this.setState({
        isLoading: true,
      });
      let resizedImage;
      let photo = await this.camera.takePictureAsync({ skipProcessing: true });
      await ImageResizer.createResizedImage(
        photo.uri,
        768,
        1024,
        "JPEG",
        100,
      ).then((response) => {
        resizedImage = response;
      });

      console.log(resizedImage.uri);

      this.setState({
        imgUri: resizedImage.uri,
        isLoading: false,
      });
    }
  };

  confirmPic = () => {
    this.props.route.params.onGoBack(this.state.imgUri);
    this.props.navigation.goBack();
  };

  removePic = () => {
    this.setState({
      imgUri: "",
    });
  };

  render() {
    return this.state.imgUri == "" ? (
      <View style={{ flex: 1 }}>
        <RNCamera
          style={{ height: height * (3 / 4) }}
          type={RNCamera.Constants.Type.back}
          ref={(ref) => {
            this.camera = ref;
          }}
          androidCameraPermissionOptions={{
            title: "Izin untuk menggunakan camera",
            message: "Kami butuh izin anda untuk menggunakan kamera",
            buttonPositive: "Ok",
            buttonNegative: "Batal",
          }}
        />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            margin: 20,
            alignItems: "center",
          }}>
          <View />
          <TouchableOpacity
            onPress={this.takePicture}
            style={{
              alignSelf: "flex-end",
              alignItems: "center",
              backgroundColor: "transparent",
            }}>
            <FontAwesome
              name="camera"
              style={{ color: "#000", fontSize: 40 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    ) : (
      <View style={{ flex: 1 }}>
        <Image
          source={{ uri: this.state.imgUri, height: height - 200 }}
          resizeMode="contain"
        />
        <View
          style={{
            width: width,
            height: 100,
            flexDirection: "row",
            backgroundColor: "white",
            justifyContent: "space-around",
            alignItems: "center",
            position: "absolute",
            bottom: 0,
          }}>
          <TouchableOpacity
            onPress={this.removePic}
            style={{
              alignItems: "center",
              backgroundColor: "transparent",
            }}>
            <AntDesign
              name="closecircleo"
              style={{ color: "red", fontSize: 40 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.confirmPic}
            style={{
              alignItems: "center",
              backgroundColor: "transparent",
            }}>
            <AntDesign
              name="checkcircleo"
              style={{ color: "green", fontSize: 40 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Camera;
