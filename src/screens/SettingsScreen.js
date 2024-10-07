import { View, Text, StyleSheet } from 'react-native'

const SettingsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Configurações
            </Text>
        </View>
    );
}

export default SettingsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    }
})