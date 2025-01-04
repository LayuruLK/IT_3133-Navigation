import { useNavigation } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
export default function ContactUs() {
    return(
        <PaperProvider>
           <View style={styles.header}>
                <Text variant="headlineLarge">Contact Us</Text>
                <Divider />
            </View> 
        </PaperProvider>

    );
}