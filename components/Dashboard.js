import React from 'react';
import { View, Text, ScrollView, Button, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addMilestone, updateMilestone, deleteMilestone } from '../redux/actions';
import MilestoneForm from './MilestoneForm';

const Dashboard = () => {
    const milestones = useSelector((state) => state.milestones);
    const dispatch = useDispatch();

    const handleEditMilestone = (milestone) => {
        // Set up your editing logic
    };

    const handleDeleteMilestone = (milestone) => {
        Alert.alert('Delete Milestone', 'Are you sure you want to delete this milestone?', [
            {
                text: 'Cancel',
                style: 'cancel',
            },
            {
                text: 'Delete',
                onPress: () => dispatch(deleteMilestone(milestone)),
            },
        ]);
    };

    return (
        <View className=" bg-white p-4">
            <Text className="text-2xl font-bold mb-4">Baby Milestones Dashboard</Text>
            <MilestoneForm />
            <ScrollView className="mt-4">
                {milestones.length === 0 ? (
                    <Text>No milestones yet.</Text>
                ) : (
                    milestones.map((milestone, index) => (
                        <View key={index} className="border p-3 mb-3">
                            <Text>Date: {milestone.date}</Text>
                            <Text>Milestone Type: {milestone.milestoneType}</Text>
                            <Text>Notes: {milestone.notes}</Text>
                            <Button title="Edit" onPress={() => handleEditMilestone(milestone)} />
                            <Button title="Delete" onPress={() => handleDeleteMilestone(milestone)} />
                        </View>
                    ))
                )}
            </ScrollView>
        </View>
    );
};

export default Dashboard;