import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";

import styles from "./nearbyjobs.style";
import { COLORS } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import { useFetch } from "../../../hook/useFetch";
import { useRouter } from "expo-router";

const NearbyJobs = () => {
  const router = useRouter();
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
            showsHorizontalScrollIndicator={false}
            style={styles.cardsContainer}
          >
            {data.map((item, index) => {
              return (
                <NearbyJobCard
                  item={item}
                  key={index}
                  handleNavigate={() => {
                    router.push({
                      pathname: `/job-details/${item.job_id}`,
                      params: { id: item.job_id },
                    });
                  }}
                />
              );
            })}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

export default NearbyJobs;
