import { View, FlatList } from "react-native";
import DishListItem from "../../components/DishListItem";
import { Ionicons } from "@expo/vector-icons";
import RestaurantHeader from "./RestaurantHeader";
import styles from "./styles";
import restaurants from "../../../assets/data/restaurants.json";

const restaurant = restaurants[2];
const RestaurantDetailsPage = () => {
  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <RestaurantHeader restaurant={restaurant} />}
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
      />
      <Ionicons
        name="arrow-back-circle"
        size={45}
        color="white"
        style={styles.iconContainer}
      />
    </View>
  );
};

export default RestaurantDetailsPage;
