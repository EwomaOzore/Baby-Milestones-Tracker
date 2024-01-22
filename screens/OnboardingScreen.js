import React from 'react';
import { View, Dimensions } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';


const { width } = Dimensions.get('window');

const OnboardingScreen = () => {
    const navigation = useNavigation();

    const handleDone = () => {
        navigation.navigate('MainTabNavigatorScreen');
    };

    return (
        <View className="flex-1">
            <Onboarding
                onDone={handleDone}
                onSkip={handleDone}
                bottomBarHighlight={false}
                containerStyles={{ paddingHorizontal: 15 }}
                pages={[
                    {
                        backgroundColor: '#7FC7D9',
                        image: (
                            <View>
                                <LottieView
                                    source={require('../assets/onboarding/screen4.json')}
                                    autoPlay
                                    loop
                                    style={{ width: width * 0.9, height: width, marginTop: -200 }}
                                />
                            </View>
                        ),
                        title: 'Welcome to Baby Milestones Tracker',
                        subtitle: 'Track and cherish every moment of your baby\'s journey with our app.',
                    },
                    {
                        backgroundColor: '#365486',
                        image: (
                            <View>
                                <LottieView
                                    source={require('../assets/onboarding/screen2.json')}
                                    autoPlay
                                    loop
                                    style={{ width: width * 0.9, height: width, marginTop: -200 }}
                                />
                            </View>
                        ),
                        title: 'Record Special Milestones',
                        subtitle: 'Capture and store all the precious milestones, from the first smile to the first step.',
                    },
                    {
                        backgroundColor: '#3B3486',
                        image: (
                            <View>
                                <LottieView
                                    source={require('../assets/onboarding/screen3.json')}
                                    autoPlay
                                    loop
                                    style={{ width: width * 0.9, height: width, marginTop: -200 }}
                                />
                            </View>
                        ),
                        title: 'Organize Memories',
                        subtitle: 'Keep memories organized with dates and notes. Create a beautiful timeline of your baby\'s growth.',
                    },
                    {
                        backgroundColor: '#fdd4cf',
                        image: (
                            <View>
                                <LottieView
                                    source={require('../assets/onboarding/screen1.json')}
                                    autoPlay
                                    loop
                                    style={{ width: width * 0.9, height: width, marginTop: -200 }}
                                />
                            </View>
                        ),
                        title: 'Enjoy the Journey',
                        subtitle: 'Celebrate every milestone, big or small. Cherish the joy of parenthood with Baby Milestones Tracker.',
                    },
                ]}
            />
        </View>
    );
};

export default OnboardingScreen;