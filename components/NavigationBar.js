import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const NavigationBar = ({ activeSection, onSectionChange }) => {
    return (
        <View className="bg-blue-500 p-3 flex-row justify-between fixed bottom-0 left-0 right-0">
            <TouchableOpacity
                className={`flex-1 ${activeSection === 'today' ? 'border-b-2 border-white' : ''}`}
                onPress={() => onSectionChange('today')}
            >
                <View className="flex items-center justify-center">
                    <MaterialIcons name="today" size={24} color="white" />
                    <Text className="text-white mt-1">Today</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                className={`flex-1 ${activeSection === 'activities' ? 'border-b-2 border-white' : ''}`}
                onPress={() => onSectionChange('activities')}
            >
                <View className="flex items-center justify-center">
                    <MaterialIcons name="event" size={24} color="white" />
                    <Text className="text-white mt-1">Activities</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                className={`flex-1 ${activeSection === 'milestones' ? 'border-b-2 border-white' : ''}`}
                onPress={() => onSectionChange('milestones')}
            >
                <View className="flex items-center justify-center">
                    <MaterialIcons name="star" size={24} color="white" />
                    <Text className="text-white mt-1">Milestones</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                className={`flex-1 ${activeSection === 'child' ? 'border-b-2 border-white' : ''}`}
                onPress={() => onSectionChange('child')}
            >
                <View className="flex items-center justify-center">
                    <MaterialIcons name="child-care" size={24} color="white" />
                    <Text className="text-white mt-1">My Child</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default NavigationBar;