import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addMilestone, updateMilestone } from '../redux/actions';

const MilestoneForm = ({ editMilestone }) => {
    const dispatch = useDispatch();
    const [date, setDate] = useState('');
    const [milestoneType, setMilestoneType] = useState('');
    const [notes, setNotes] = useState('');

    useEffect(() => {
        if (editMilestone) {
            setDate(editMilestone.date);
            setMilestoneType(editMilestone.milestoneType);
            setNotes(editMilestone.notes);
        }
    }, [editMilestone]);

    const handleSubmit = () => {
        const milestoneData = { date, milestoneType, notes };
        if (editMilestone) {
            dispatch(updateMilestone({ ...editMilestone, ...milestoneData }));
        } else {
            dispatch(addMilestone(milestoneData));
        }
        clearForm();
    };

    const clearForm = () => {
        setDate('');
        setMilestoneType('');
        setNotes('');
    };

    return (
        <View className="p-4">
            {/* <Text className="text-2xl font-bold mb-4">{editMilestone ? 'Edit Milestone' : 'Add Milestone'}</Text> */}
            <Text className="mb-2">Date:</Text>
            <TextInput
                className="border p-2 mb-3"
                placeholder="Select date"
                value={date}
                onChangeText={setDate}
            />
            <Text className="mb-2">Milestone Type:</Text>
            <TextInput
                className="border p-2 mb-3"
                placeholder="Enter milestone type"
                value={milestoneType}
                onChangeText={setMilestoneType}
            />
            <Text className="mb-2">Notes:</Text>
            <TextInput
                className="border p-2 mb-3 h-20"
                multiline
                placeholder="Add notes (optional)"
                value={notes}
                onChangeText={setNotes}
            />
            <TouchableOpacity
                className="bg-green-500 text-white py-3 rounded items-center"
                onPress={handleSubmit}
            >
                <Text>{editMilestone ? 'Update Milestone' : 'Add Milestone'}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MilestoneForm;