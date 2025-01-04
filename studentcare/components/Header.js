import { View } from "react-native";


export default function Header(){
    return(
        <>
            <View>
                <Image style={styles.image} source={require('../assets/uovlogo.png')}/>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        alignItems: 'center',
        
    }
})