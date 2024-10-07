import React from 'react';
import { SafeAreaView } from 'react-native';
import PdfViewer from '../components/PdfViewer';

export default function PDF2() {
  // Example source object
  const source = { uri: 'https://images-cdn.fantasyflightgames.com/filer_public/fc/8a/fc8a7a1b-ee5d-4df9-8735-92a8c8f5f0f6/sw06_learn_to_play_v2-compressed.pdf', cache: true };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PdfViewer source={source} />
    </SafeAreaView>
  );
};

