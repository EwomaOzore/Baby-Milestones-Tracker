import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const MyChildScreen = () => {
    const childDetails = {
        name: 'Baby John',
        age: '1 year 2 months',
        picture: require('../assets/screen1.jpg'),
        milestonesCompleted: 8,
        activitiesProgress: 60,
    };

    return (
        <View className="p-4 bg-gray-100 flex-1">
            <Text className="text-2xl font-bold mb-6 text-center text-blue-700">{childDetails.name}</Text>
            <View className="bg-white rounded p-6 mb-4 elevation-3 items-center">
                <Image source={childDetails.picture} className="w-40 h-40 rounded-full mb-2" />
                <View className="flex flex-row justify-between w-full px-5">
                    <View className="flex-col items-center">
                        <Text className="text-[#365486] font-bold">Milestones Completed</Text>
                        <Text className="font-extrabold text-lg">{childDetails.milestonesCompleted}</Text>
                    </View>
                    <View className="flex-col items-center">
                        <Text className="text-[#365486] font-bold">Progress</Text>
                        <Text className="font-extrabold text-lg">{childDetails.activitiesProgress}%</Text>
                    </View>
                </View>
            </View>

            <View className="mb-6">
                <Text className="text-lg mb-2 text-gray-700 text-center">Activities Progress:</Text>
                <View className="bg-gray-300 h-3 rounded-full overflow-hidden">
                    <View
                        style={[
                            { width: `${childDetails.activitiesProgress}%`, backgroundColor: 'blue' },
                            "h-full",
                        ]}
                    />
                </View>
            </View>

            <ScrollView>
                <View className="flex">
                    <View className="flex-row justify-between">
                        <View className="bg-white p-5 items-center w-[48%] mb-4 rounded-lg">
                            <FontAwesome5 name="medkit" size={24} color="#365486" />
                            <Text className="text-lg mt-2 text-gray-700">Medicine</Text>
                        </View>
                        <View className="bg-white p-5 items-center w-[48%] mb-4 rounded-lg">
                            <FontAwesome5 name="dumbbell" size={24} color="#365486" />
                            <Text className="text-lg mt-2 text-gray-700">Exercises</Text>
                        </View>
                    </View>
                    <View className="flex-row justify-between">
                        <View className="bg-white p-5 items-center w-[48%] mb-4 rounded-lg">
                            <FontAwesome5 name="hospital" size={24} color="#365486" />
                            <Text className="text-lg mt-2 text-gray-700">Hospitals</Text>
                        </View>
                        <View className="bg-white p-5 items-center w-[48%] mb-4 rounded-lg">
                            <FontAwesome5 name="book" size={24} color="#365486" />
                            <Text className="text-lg mt-2 text-gray-700">Articles</Text>
                        </View>
                    </View>
                    <View className="flex-row justify-between">
                        <View className="bg-white p-5 items-center w-[48%] mb-4 rounded-lg">
                            <FontAwesome5 name="video" size={24} color="#365486" />
                            <Text className="text-lg mt-2 text-gray-700">Videos</Text>
                        </View>
                        <View className="bg-white p-5 items-center w-[48%] mb-4 rounded-lg">
                            <FontAwesome5 name="utensils" size={24} color="#365486" />
                            <Text className="text-lg mt-2 text-gray-700">Food</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default MyChildScreen;
