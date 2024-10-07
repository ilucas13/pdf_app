import { View, Text, StyleSheet, Button } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { useMemo, useRef } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function ModalView() {
  const snapPoints = useMemo(() => ["10%", "30%"], []);

  const bottomSheetRef = useRef(null);

  const handleClosePress = () => bottomSheetRef.current?.close();
  const handleOpenPress = () => bottomSheetRef.current?.expand();
  const snapToIndex = () => bottomSheetRef.current?.snapToIndex(0);

  return (
    <View style={styles.container} pointerEvents="box-none">
      {/* <View pointerEvents="none" style={styles.transparentContainer} /> */}
      <BottomSheet ref={bottomSheetRef} index={0} snapPoints={snapPoints}>
        <View style={styles.contentContainer}>
          <Text style={styles.containerHeadline}>Player de audio</Text>
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1, // Ensure this view is on top
    // backgroundColor: "lightgrey",
  },
  transparentContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1, // Ensure this view is on top
    backgroundColor: "transparent",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  containerHeadline: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 20,
    textAlign: "center",
  },
});
