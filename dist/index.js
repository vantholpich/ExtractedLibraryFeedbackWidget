var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Modal, Pressable, TouchableOpacity, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { FeedbackView } from './FeedbackView';
import { styles } from './styles';
const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);
const STORAGE_KEY = '@feedbacks_storage_key';
export const FeedbackWidget = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [feedbacks, setFeedbacks] = useState([]);
    const scale = useSharedValue(1);
    useEffect(() => {
        loadFeedbacks();
    }, []);
    const loadFeedbacks = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const jsonValue = yield AsyncStorage.getItem(STORAGE_KEY);
            if (jsonValue != null) {
                setFeedbacks(JSON.parse(jsonValue));
            }
        }
        catch (e) {
            console.error('Error loading feedbacks', e);
        }
    });
    const saveFeedbacks = (newFeedbacks) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const jsonValue = JSON.stringify(newFeedbacks);
            yield AsyncStorage.setItem(STORAGE_KEY, jsonValue);
        }
        catch (e) {
            console.error('Error saving feedbacks', e);
        }
    });
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
    const handleSubmit = (text) => __awaiter(void 0, void 0, void 0, function* () {
        const newFeedback = {
            id: Date.now().toString(),
            text,
            createdAt: Date.now(),
        };
        const updatedFeedbacks = [newFeedback, ...feedbacks];
        setFeedbacks(updatedFeedbacks);
        yield saveFeedbacks(updatedFeedbacks);
    });
    return (React.createElement(React.Fragment, null,
        React.createElement(AnimatedTouchableOpacity, { style: [styles.fab, animatedStyle], onPress: toggleModal, onPressIn: handlePressIn, onPressOut: handlePressOut, activeOpacity: 0.8 },
            React.createElement(Ionicons, { name: "chatbubble-ellipses", size: 28, color: "#fff" })),
        React.createElement(Modal, { visible: isVisible, animationType: "slide", transparent: true, onRequestClose: toggleModal },
            React.createElement(View, { style: styles.modalContainer },
                React.createElement(Pressable, { style: styles.modalOverlay, onPress: toggleModal }),
                React.createElement(FeedbackView, { feedbacks: feedbacks, onClose: toggleModal, onSubmit: handleSubmit })))));
};
