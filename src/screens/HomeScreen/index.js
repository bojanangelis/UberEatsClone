import { FlatList, StyleSheet, View } from "react-native";
import RestaurantItem from "../../components/RestaurantItem";
import restaurants from "../../../assets/data/restaurants.json";

const HomeScreen = () => {
  return (
    <View style={styles.homeScreenView}>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeScreenView: {
    padding: 10,
  },
});

export default HomeScreen;
