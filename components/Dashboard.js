import React, { useState } from 'react';
import { View, Text, ScrollView, Button, Alert, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addMilestone, updateMilestone, deleteMilestone } from '../redux/actions';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';

const MilestoneForm = ({ onSubmit, onCancel }) => {
    const [formData, setFormData] = useState({
        date: new Date(),
        milestoneType: '',
        notes: '',
    });

    const dispatch = useDispatch();
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleDateChange = (event, date) => {
        setShowDatePicker(false);
        if (date) {
            setFormData({ ...formData, date });
        }
    };

    const handleMilestoneTypeChange = (milestoneType) => {
        setFormData({ ...formData, milestoneType });
    };

    const handleNotesChange = (notes) => {
        setFormData({ ...formData, notes });
    };

    const handleSubmit = () => {
        onSubmit(formData);
        setFormData({
            date: new Date(),
            milestoneType: '',
            notes: '',
        });
    };

    return (
        <ScrollView className="p-5">
            <Text className="text-2xl font-bold mb-2 text-gray-800 text-center">Add New Milestone</Text>

            <View className="flex-row bg-white p-3 items-center rounded-xl mb-5">
                <Button title="Pick a date" onPress={() => setShowDatePicker(true)} />
                {showDatePicker && (
                    <DateTimePicker
                        value={formData.date}
                        mode="date"
                        is24Hour={true}
                        display="default"
                        onChange={handleDateChange}
                    />
                )}
            </View>

            {/* Milestone Type Dropdown */}
            <View className="flex-row bg-white p-3 items-center rounded-xl mb-5">
                <Text className="text-lg mb-2 text-gray-700 mr-32">Milestone Type</Text>
                <RNPickerSelect
                    onValueChange={handleMilestoneTypeChange}
                    items={[
                        { label: 'Physical', value: 'physical' },
                        { label: 'Feeding', value: 'feeding' },
                        { label: 'Health', value: 'health' },
                        { label: 'Sleep', value: 'sleep' },
                        { label: 'Cognitive', value: 'cognitive' },
                        { label: 'Social', value: 'social' },
                        { label: 'Emotional', value: 'emotional' },
                        { label: 'Language', value: 'language' },
                        { label: 'Other', value: 'other' },
                    ]}
                />
            </View>


            {/* Notes Input */}
            <View className="bg-white p-3 items-center rounded-xl mb-5">
                <Text className="text-lg mb-2 text-gray-700">Notes</Text>
                <TextInput
                    value={formData.notes}
                    onChangeText={handleNotesChange}
                    style={{
                        width: '100%',
                        height: 70,
                        borderColor: '#ccc',
                        borderWidth: 1,
                        borderRadius: 5,
                        marginBottom: 10,
                        padding: 8,
                    }}
                    placeholder="Enter notes ...."
                    multiline
                />
            </View>

            {/* Submit and Cancel Buttons */}
            <View className="flex-row w-full justify-between px-7">
                <TouchableOpacity className="bg-slate-800 rounded-xl px-10 py-2">
                    <Button title="Submit" onPress={handleSubmit} />
                </TouchableOpacity>
                <TouchableOpacity className="bg-slate-800 rounded-xl px-10 py-2">
                    <Button title="Cancel" onPress={onCancel} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default MilestoneForm;