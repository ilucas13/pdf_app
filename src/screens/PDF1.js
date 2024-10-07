import React from "react";
import { ActionSheetIOS, SafeAreaView } from "react-native";
import PdfViewer from "../components/PdfViewer";

export default function PDF1() {
  // Example source object
  const source = {
    uri: "https://www.szellemlovas.hu/szabalyok/fesztavEN.pdf",
    cache: true,
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PdfViewer source={source}/>
    </SafeAreaView>
  );
}
