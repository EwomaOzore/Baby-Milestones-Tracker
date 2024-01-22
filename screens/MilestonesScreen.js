import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';

const MilestonesScreen = () => {
    const [milestones, setMilestones] = useState([
        { id: '1', title: 'First Smile', status: 'completed' },
        { id: '2', title: 'First Step', status: 'ongoing' },
        { id: '3', title: 'First Word', status: 'notStarted' },
        { id: '4', title: 'First Clap', status: 'completed' },
        { id: '5', title: 'First Tooth', status: 'ongoing' },
        { id: '6', title: 'First Crawl', status: 'notStarted' },
        { id: '7', title: 'First Laugh', status: 'completed' },
        { id: '8', title: 'First Solid Food', status: 'ongoing' },
        { id: '9', title: 'First Roll Over', status: 'notStarted' },
        { id: '10', title: 'First Babble', status: 'completed' },
        { id: '11', title: 'First Haircut', status: 'ongoing' },
        { id: '12', title: 'First Playdate', status: 'notStarted' },
        { id: '13', title: 'First Night Sleep', status: 'completed' },
        { id: '14', title: 'First Trip', status: 'ongoing' },
        { id: '15', title: 'First Halloween Costume', status: 'notStarted' },
    ]);

    const groupedMilestones = {
        completed: milestones.filter((milestone) => milestone.status === 'completed'),
        ongoing: milestones.filter((milestone) => milestone.status === 'ongoing'),
        notStarted: milestones.filter((milestone) => milestone.status === 'notStarted'),
    };

    const handleMilestonePress = (id) => {
        const updatedMilestones = milestones.map((milestone) =>
            milestone.id === id
                ? {
                    ...milestone,
                    status: milestone.status === 'completed' ? 'ongoing' : milestone.status === 'ongoing' ? 'notStarted' : 'completed',
                }
                : milestone
        );
        setMilestones(updatedMilestones);
    };

    const renderMilestoneSection = (sectionTitle, sectionMilestones) => (
        <View className="mb-4">
            <Text className="text-lg font-bold mb-2 text-center">{sectionTitle}</Text>
            <FlatList
                data={sectionMilestones}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        className="bg-white rounded p-4 mb-2 elevation-3"
                        onPress={() => handleMilestonePress(item.id)}
                    >
                        <Text className="text-base font-bold">{item.title}</Text>
                        <Text className="text-sm text-gray-500">
                            {item.status === 'completed' ? 'Completed' : item.status === 'ongoing' ? 'Ongoing' : 'Not Started'}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );

    return (
        <View className="p-4">
            <Text className="text-2xl font-bold mb-4 text-center">Baby Milestones</Text>
            {renderMilestoneSection('Completed', groupedMilestones.completed)}
            {renderMilestoneSection('Ongoing', groupedMilestones.ongoing)}
            {renderMilestoneSection('Not Started', groupedMilestones.notStarted)}
        </View>
    );
};

export default MilestonesScreen;