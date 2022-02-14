import { StyleSheet } from "react-native";
import { Link, NativeRouter, Route } from "react-router-native";
import Index from "./component/Index";

export default App = () => {
    return (
        <NativeRouter>
            <View style={styles.container}>
                <Link to="/">
                    <Text>React board exercise</Text>
                </Link>
                <Route exact path="/" component={Index} />
            </View>
        </NativeRouter>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        padding: 10,
    },
});
