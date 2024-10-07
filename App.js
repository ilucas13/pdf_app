import React, { useState } from "react";
import { View, Button, StyleSheet, T } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import DrawerView from "./src/components/DrawerView";
import ModalView from "./src/components/ModalView";
import FileViewer from "./src/components/FileViewer";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <DrawerView/>
        {/* <ModalView style={styles.modalContainer} /> */}
        {/* <FileViewer /> */}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
    flex: 1,
    zIndex: 1,
  },
});
