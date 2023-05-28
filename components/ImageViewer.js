import { Image, StyleSheet } from "react-native";

export default function ImageViewer({ placeholderImage, selectedImage }) {
  const imageSourece = selectedImage
    ? { uri: selectedImage }
    : placeholderImage;
  return <Image source={imageSourece} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
    justifyContent: "center",
  },
});
