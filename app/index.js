import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, SIZES, icons, images } from "../constants";
import { NearbyJobs, PopularJobs, ScreenHeaderBtn, Welcome } from "../components";

const Home = () => {
    const router = useRouter();
    return <SafeAreaView style={{
        flex: 1, backgroundColor: COLORS.lightWhite
    }}>
        <Stack.Screen options={{
            headerStyle: { backgroundColor: COLORS.lightWhite }, headerShadowVisible: false,
            headerLeft: () => (<ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"></ScreenHeaderBtn>),
            headerRight: () => (<ScreenHeaderBtn iconUrl={images.profile} dimension="60%"></ScreenHeaderBtn>),
            headerTitle: ""
        }}>
        </Stack.Screen>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ flex: 1, padding: SIZES.medium }}>
                <Welcome></Welcome>
                <PopularJobs></PopularJobs>
                <NearbyJobs></NearbyJobs>
            </View>
        </ScrollView>
    </SafeAreaView >
}

export default Home;