import { View, Text, StyleSheet } from "react-native";
import resturants from "../../../assets/data/restaurants.json";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

const DishDetailsScreen = () => {
  const dish = resturants[0].dishes[0];
  const [quantity, setQuantity] = useState(1);

  const onMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const onPlus = () => {
    if (quantity <= 99) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <View style={styles.page}>
      <Text style={styles.title}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <View style={styles.separetor} />

      <View style={styles.row}>
        <AntDesign
          name="minuscircleo"
          size={50}
          color={"black"}
          onPress={onMinus}
        />
        <Text style={styles.quantity}>{quantity}</Text>
        <AntDesign
          name="pluscircleo"
          size={50}
          color={"black"}
          onPress={onPlus}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 30, //temporary fix I will use safe area views
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    marginVertical: 10,
  },
  description: {
    color: "#696969",
  },
  separetor: {
    height: 1,
    backgroundColor: "lightgray",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  quantity: {
    fontSize: 27,
    marginHorizontal: 20,
  },
});

export default DishDetailsScreen;
