import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import PDF1 from "../screens/PDF1";
import PDF2 from "../screens/PDF2";
import SettingsScreen from "../screens/SettingsScreen";
import { ActionSheetIOS, Pressable, Text, StyleSheet } from "react-native";
// import FolderComponent from "./FolderComponent";

const Drawer = createDrawerNavigator();

export default function DrawerView() {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerLeft: () => (
          <Pressable onPress={navigation.toggleDrawer}>
            <Text style={styles.icon}>Partituras</Text>
          </Pressable>
        ),
      })}
    >
      <Drawer.Screen name="PDF1" component={PDF1} />
      <Drawer.Screen name="PDF2" component={PDF2} />
      {/* <FolderComponent /> */}
    </Drawer.Navigator>
  );
}


const styles = StyleSheet.create({
  icon: {
    color: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 15,
  },
});
