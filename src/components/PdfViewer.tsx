import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Pdf from 'react-native-pdf';

interface PdfViewerProps {
  source: {
    uri?: string;
    path?: string;
    base64?: string;
    cache?: boolean;
  };
}

const PdfViewer: React.FC<PdfViewerProps> = ({ source }) => {
  return (
    <View style={styles.container}>
      <Pdf
        source={source}
        onLoadComplete={(numberOfPages: number, filePath: string) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page: number, numberOfPages: number) => {
          console.log(`Current page: ${page}`);
        }}
        onError={(error: any) => {
          console.log(error);
        }}
        onPressLink={(uri: string) => {
          console.log(`Link pressed: ${uri}`);
        }}
        scale={1} // Adjust the scale value as needed
        spacing={10} // Adjust the spacing between pages
        minScale={1.0} // Minimum scale to prevent too much zoom out
        maxScale={3.0} // Maximum scale to limit zoom in
        fitPolicy={0} // 0 = Fit Width, 1 = Fit Height, 2 = Fit Both
        style={styles.pdf}
        enablePaging={true}
        horizontal={true}
        enableAnnotationRendering={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default PdfViewer;
