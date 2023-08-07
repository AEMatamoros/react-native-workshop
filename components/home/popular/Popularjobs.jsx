import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";

import styles from "./popularjobs.style";
import { COLORS } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import { useFetch } from "../../../hook/useFetch";
const PopularJobs = () => {
  const { data, loading, error, refetch } = useFetch("search", {
    query: "React Developer",
    num_pages: 1,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {loading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Somethinng went wrong</Text>
        ) : (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.cardsContainer}
          >
            {data.map((item, index) => {
              return <PopularJobCard item={item} key={index} />;
            })}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

export default PopularJobs;
