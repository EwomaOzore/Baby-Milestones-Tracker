import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import Calendar from '../components/Calendar';

const ActivitiesScreen = () => {
    const [activities, setActivities] = useState([
        { id: '1', title: 'Reading a Board Book', progress: 0.5 },
        { id: '2', title: 'Playing with Soft Toys', progress: 0.2 },
        { id: '3', title: 'Drawing with Crayons', progress: 0.8 },
        { id: '4', title: 'Singing Nursery Rhymes', progress: 0.4 },
        { id: '5', title: 'Exploring Sensory Toys', progress: 0.9 },
        { id: '6', title: 'Listening to Lullabies', progress: 0.7 },
        { id: '7', title: 'Dancing to Baby Music', progress: 0.5 },
        { id: '8', title: 'Cooking Baby Purees', progress: 0.3 },
        { id: '9', title: 'Splashing in a Baby Pool', progress: 0.6 },
        { id: '10', title: 'Cycling in a Baby Stroller', progress: 0.8 },
        { id: '11', title: 'Cuddling with Soft Blanket', progress: 0.6 },
        { id: '12', title: 'Playing Peek-a-Boo', progress: 0.4 },
        { id: '13', title: 'Discovering Baby Mirror', progress: 0.7 },
        { id: '14', title: 'Building with Soft Blocks', progress: 0.5 },
        { id: '15', title: 'Enjoying Tummy Time', progress: 0.9 },
    ]);

    return (
        <ScrollView className="p-4">
            <View className="flex-row justify-center mb-4">
                <Calendar />
            </View>

            <View className="bg-white rounded p-4 mb-4 elevation-3 items-center">
                <Image
                    source={require('../assets/screen1.jpg')}
                    className="w-32 h-32 rounded-full mb-2"
                />
                <View className="flex flex-row justify-between w-full px-5">
                    <View className="flex-col items-center">
                        <Text className="text-[#365486] font-bold">Height</Text>
                        <Text className="font-extrabold text-lg">70cm</Text>
                    </View>
                    <View className="flex-col items-center">
                        <Text className="text-[#365486] font-bold">Weight</Text>
                        <Text className="font-extrabold text-lg">8kg</Text>
                    </View>
                    <View className="flex-col items-center">
                        <Text className="text-[#365486] font-bold">Age</Text>
                        <Text className="font-extrabold text-lg">9 months</Text>
                    </View>
                </View>
            </View>


            <View className="p-4">
                <Text className="text-2xl font-bold mb-4 text-center">Activities</Text>
                <FlatList
                    data={activities}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity className="bg-white rounded p-4 mb-4 elevation-3 w-full">
                            <View className="flex flex-row justify-between items-center mb-2">
                                <Text className="text-lg font-bold">{item.title}</Text>
                                <Text>Status: {item.progress === 1 ? 'Completed' : 'Ongoing'}</Text>
                            </View>
                            <View className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
                                <View
                                    style={[
                                        { width: `${item.progress * 100}%`, backgroundColor: 'blue', height: '100%' },
                                    ]}
                                />
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>

        </ScrollView>
    );
};

export default ActivitiesScreen;