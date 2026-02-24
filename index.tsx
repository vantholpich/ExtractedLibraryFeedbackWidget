import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Modal, Pressable, TouchableOpacity, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { FeedbackView } from './FeedbackView';
import { styles } from './styles';
import { FeedbackItem } from './types';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);
const STORAGE_KEY = '@feedbacks_storage_key';

export const FeedbackWidget: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [feedbacks, setFeedbacks] = useState<FeedbackItem[]>([]);
    const scale = useSharedValue(1);

    useEffect(() => {
        loadFeedbacks();
    }, []);

    const loadFeedbacks = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
            if (jsonValue != null) {
                setFeedbacks(JSON.parse(jsonValue));
            }
        } catch (e) {
            console.error('Error loading feedbacks', e);
        }
    };

    const saveFeedbacks = async (newFeedbacks: FeedbackItem[]) => {
        try {
            const jsonValue = JSON.stringify(newFeedbacks);
            await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
        } catch (e) {
            console.error('Error saving feedbacks', e);
        }
    };

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
    }));

    const toggleModal = () => setIsVisible(!isVisible);

    const handlePressIn = () => {
        scale.value = withSpring(0.9);
    };

    const handlePressOut = () => {
        scale.value = withSpring(1);
    };

    const handleSubmit = async (text: string) => {
        const newFeedback: FeedbackItem = {
            id: Date.now().toString(),
            text,
            createdAt: Date.now(),
        };
        const updatedFeedbacks = [newFeedback, ...feedbacks];
        setFeedbacks(updatedFeedbacks);
        await saveFeedbacks(updatedFeedbacks);
    };

    return (
        <>
            <AnimatedTouchableOpacity
                style={[styles.fab, animatedStyle]}
                onPress={toggleModal}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                activeOpacity={0.8}
            >
                <Ionicons name="chatbubble-ellipses" size={28} color="#fff" />
            </AnimatedTouchableOpacity>

            <Modal
                visible={isVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={toggleModal}
            >
                <View style={styles.modalContainer}>
                    <Pressable style={styles.modalOverlay} onPress={toggleModal} />
                    <FeedbackView
                        feedbacks={feedbacks}
                        onClose={toggleModal}
                        onSubmit={handleSubmit}
                    />
                </View>
            </Modal>
        </>
    );
};
