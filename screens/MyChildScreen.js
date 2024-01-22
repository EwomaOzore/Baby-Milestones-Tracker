import React from 'react';
import { View, Text, Image } from 'react-native';

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
            <Text className="text-3xl font-bold mb-6 text-center text-blue-700">My Child's Details</Text>
            <View className="items-center mb-6">
                <Image source={childDetails.picture} className="w-40 h-40 rounded-full mb-4" />
                <Text className="text-xl font-bold text-blue-800">{childDetails.name}</Text>
            </View>
            <Text className="text-lg mb-2 text-gray-700">
                Age: <Text className="text-base font-normal">{childDetails.age}</Text>
            </Text>
            <Text className="text-lg mb-2 text-gray-700">
                Milestones Completed:{' '}
                <Text className="text-base font-normal text-green-700">{childDetails.milestonesCompleted}</Text>
            </Text>
            <View className="mb-6">
                <Text className="text-lg mb-2 text-gray-700">Activities Progress:</Text>
                <View className="bg-gray-300 h-4 rounded-full overflow-hidden">
                    <View
                        style={[
                            { width: `${childDetails.activitiesProgress}%`, backgroundColor: 'blue' },
                            "h-full",
                        ]}
                    />
                </View>
            </View>
            {/* Additional Child Details */}
            <View>
                <Text className="text-xl font-bold mb-2 text-gray-800">Additional Details</Text>
                {/* Add more child details here */}
                <Text className="text-lg mb-2 text-gray-700">Favorite Toy: Teddy Bear</Text>
                <Text className="text-lg mb-2 text-gray-700">Sleeping Habits: 10 hours a night</Text>
                <Text className="text-lg mb-2 text-gray-700">Health Notes: No allergies</Text>
            </View>
        </View>
    );
};

export default MyChildScreen;
