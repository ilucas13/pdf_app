import { View } from "react-native";
import DocumentPicker from "react-native-document-picker";
import FileViewer from "react-native-file-viewer";
import { Button } from "react-native";
import { Alert } from "react-native";
import { useState } from "react";

export default function components() {
  const [modalVisible, setModalVisible] = useState(false);
  const handleDocumentPicker = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      console.log("Document picked:", result);

      // Now use FileViewer to open the document
      FileViewer.open(result[0].uri)
        .then(() => {
          // success
          console.log("Document opened successfully");
        })
        .catch((error) => {
          // error
          console.error("Error opening document:", error);
          Alert.alert("Error", "Failed to open document");
        });
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log("User canceled the document picker");
      } else {
        console.error("Unknown error:", err);
      }
    }
  };

  return <Button title="Pick a Document" onPress={handleDocumentPicker} />;
}
