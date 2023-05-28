import { View, Text, Modal, StyleSheet, Pressable } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function EmojiPicker({ isVisible, children, onClose }) {
  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Choose a sticker</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: "25%",
    width: "100%",
    backgroundColor: "#25292e",
    position: "absolute",
    bottom: 0,
  },
  titleContainer: {
    height: "16%",
    backgroundColor: "#464C55",
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#fff",
    fontSize: 16,
  },
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
});
