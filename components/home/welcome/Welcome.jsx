import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";
const jobTypes = ["Full Time", "Part Time", "Contract", "Peer Hour", "Free"];

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full Time");
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Alexis</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="Whar are u loocking for?"
          ></TextInput>
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          ></Image>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.tabsContainer}
      >
        {jobTypes.map((item, index) => (
          <TouchableOpacity
            style={styles.tab(activeJobType, item)}
            onPress={() => {
              setActiveJobType(item);
              router.push(`/search/${item}`);
            }}
            key={index}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Welcome;
