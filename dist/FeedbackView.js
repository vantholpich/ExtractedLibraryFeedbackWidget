import { Ionicons } from '@expo/vector-icons';
import React, { useRef, useState } from 'react';
import { FlatList, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
export const FeedbackView = ({ feedbacks, onClose, onSubmit }) => {
    const [inputText, setInputText] = useState('');
    const flatListRef = useRef(null);
    const handleSubmit = () => {
        if (inputText.trim().length === 0)
            return;
        onSubmit(inputText.trim());
        setInputText('');
        // Optionally scroll to top or bottom depending on sorting
        // setTimeout(() => {
        //   flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
        // }, 100);
    };
    const renderItem = ({ item }) => {
        const timeString = new Date(item.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const dateString = new Date(item.createdAt).toLocaleDateString([], { month: 'short', day: 'numeric' });
        return (React.createElement(View, { style: styles.feedbackItem },
            React.createElement(View, { style: styles.feedbackItemHeader },
                React.createElement(Text, { style: styles.feedbackItemRole }, "App User"),
                React.createElement(Text, { style: styles.feedbackItemTime },
                    dateString,
                    ", ",
                    timeString)),
            React.createElement(Text, { style: styles.feedbackItemText }, item.text)));
    };
    return (React.createElement(KeyboardAvoidingView, { style: styles.contentContainer, behavior: Platform.OS === 'ios' ? 'padding' : undefined },
        React.createElement(View, { style: styles.header },
            React.createElement(Text, { style: styles.headerTitle }, "Feedback Board"),
            React.createElement(TouchableOpacity, { style: styles.closeButton, onPress: onClose },
                React.createElement(Ionicons, { name: "close", size: 24, color: "#1f2937" }))),
        React.createElement(FlatList, { ref: flatListRef, data: feedbacks, keyExtractor: (item) => item.id, renderItem: renderItem, contentContainerStyle: [styles.listContainer, feedbacks.length === 0 && { flex: 1 }], style: { flex: 1 }, showsVerticalScrollIndicator: false, ListEmptyComponent: React.createElement(View, { style: styles.emptyContainer },
                React.createElement(Ionicons, { name: "chatbubbles-outline", size: 56, color: "#d1d5db" }),
                React.createElement(Text, { style: styles.emptyText },
                    "No feedback yet.",
                    '\n',
                    "Be the first to share your thoughts!")) }),
        React.createElement(View, { style: styles.inputContainer },
            React.createElement(TextInput, { style: styles.textInput, placeholder: "Share your ideas or issues...", placeholderTextColor: "#9ca3af", value: inputText, onChangeText: setInputText, multiline: true }),
            React.createElement(TouchableOpacity, { style: [styles.submitButton, inputText.trim().length === 0 && styles.submitButtonDisabled], onPress: handleSubmit, disabled: inputText.trim().length === 0 },
                React.createElement(Ionicons, { name: "send", size: 20, color: "#fff", style: { marginLeft: 2 } })))));
};
