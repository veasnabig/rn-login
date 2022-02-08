import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Dimensions,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    Platform
} from 'react-native';

const Register = () => {
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : ""}
        >
            <ScrollView contentContainerStyle={{ flex: 1 }}>
                <View style={styles.container}>
                    <View style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: -(Dimensions.get("window").height / 4)
                    }}>
                        <TextInput
                            style={styles.customTextInput}
                            placeholder="Username"
                            autoCapitalize="none"
                        />
                        <TextInput
                            style={styles.customTextInput}
                            placeholder="Password"
                            autoCapitalize="none"
                            secureTextEntry={true}
                        />
                        <TextInput
                            style={styles.customTextInput}
                            placeholder="Confirm Password"
                            autoCapitalize="none"
                            secureTextEntry={true}
                        />
                        <TouchableOpacity style={styles.btnLogin}>
                            <Text style={styles.btnText}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    image: {
        flex: 1,
        alignItems: "center",
    },
    text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000a0"
    },
    logo: {
        width: Dimensions.get("window").width - 150,
        height: Dimensions.get("window").width - 200,
    },
    customTextInput: {
        width: Dimensions.get("window").width - 100,
        height: 44,
        backgroundColor: "#EDEDED",
        borderRadius: 12,
        paddingLeft: 16,
        marginTop: 16,
        fontSize: Platform.OS === "ios" ? 14 : 16,
        textTransform: 'uppercase'
    },
    btnLogin: {
        height: 44,
        elevation: 8,
        width: Dimensions.get("window").width - 100,
        backgroundColor: "#009CFD",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 16
    },
    btnText: {
        alignSelf: "center",
        color: "#fff",
        fontSize: 18
    },
});

export default Register