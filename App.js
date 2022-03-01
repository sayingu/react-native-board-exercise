import { StyleSheet, Text, View } from "react-native";
import { Link, NativeRouter, Route, Routes } from "react-router-native";
import Index from "./src/component/Index";
import BoardList from "./src/component/BoardList";

export default App = () => {
    return (
        <NativeRouter>
            <View style={styles.container}>
                <View>
                    <Link to="/">
                        <Text>React board exercise</Text>
                    </Link>
                </View>
                <Routes>
                    <Route exact path="/" element={<Index />} />
                    <Route path="/boardList" element={<BoardList />} />
                </Routes>
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
