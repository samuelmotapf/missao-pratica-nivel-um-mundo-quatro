import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ImageViewer from './components/ImageViewer';
import Cat from './components/Name';

const sourceImageCat=require("./assets/Images/cat.jpeg");

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imageSource={sourceImageCat}/>    
      </View>
      <View style={styles.textContainer}>
        <Cat/>   
      </View>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 20,
  },
  textContainer: {
    flex: 1/3,
    alignItems: 'center'
  }
});
