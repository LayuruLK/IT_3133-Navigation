import { useNavigation } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
export default function AboutUs() {
    return(
        <PaperProvider>
           <View style={styles.container}>
                <Text variant="headlineLarge">History</Text>
                <Divider />
                <View style={styles.imagepad}>
                        <Image source={require('../assets/uovlogo.png')} style={styles.image}/>
                </View>
            </View>         
        </PaperProvider>
    );
}