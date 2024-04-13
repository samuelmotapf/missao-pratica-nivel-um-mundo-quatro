import { StyleSheet, Image } from "react-native";

export default function ImageViewer({imageSource}){
    return <Image source={imageSource} style={styles.image} />
}

const styles = StyleSheet.create({
    image: {
        width: 350,
    }
})