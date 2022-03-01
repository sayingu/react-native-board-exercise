import { StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-native";

export default Index = () => {
    return (
        <View>
            <Link to="/boardList">
                <Text style={styles.h1}>Board list sample</Text>
            </Link>

            <Link to="/mainBannerList">
                <Text>Main banner list</Text>
            </Link>
            <Link to="/mainReviewList">
                <Text>Main review list</Text>
            </Link>
            <Link to="/mainProductList">
                <Text>Main product list</Text>
            </Link>
        </View>
    );
};

const styles = StyleSheet.create({
    h1: {
        fontSize: 11,
    },
});
