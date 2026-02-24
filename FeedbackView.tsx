import { Ionicons } from '@expo/vector-icons';
import React, { useRef, useState } from 'react';
import {
    FlatList,
    KeyboardAvoidingView,
    Platform,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { styles } from './styles';
import { FeedbackItem } from './types';

interface FeedbackViewProps {
    feedbacks: FeedbackItem[];
    onClose: () => void;
    onSubmit: (text: string) => void;
}

export const FeedbackView: React.FC<FeedbackViewProps> = ({ feedbacks, onClose, onSubmit }) => {
    const [inputText, setInputText] = useState('');
    const flatListRef = useRef<FlatList>(null);

    const handleSubmit = () => {
        if (inputText.trim().length === 0) return;
        onSubmit(inputText.trim());
        setInputText('');
        // Optionally scroll to top or bottom depending on sorting
        // setTimeout(() => {
        //   flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
        // }, 100);
    };

    const renderItem = ({ item }: { item: FeedbackItem }) => {
        const timeString = new Date(item.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const dateString = new Date(item.createdAt).toLocaleDateString([], { month: 'short', day: 'numeric' });

        return (
            <View style={styles.feedbackItem}>
                <View style={styles.feedbackItemHeader}>
                    <Text style={styles.feedbackItemRole}>App User</Text>
                    <Text style={styles.feedbackItemTime}>{dateString}, {timeString}</Text>
                </View>
                <Text style={styles.feedbackItemText}>{item.text}</Text>
            </View>
        );
    };

    return (
        <KeyboardAvoidingView
            style={styles.contentContainer}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Feedback Board</Text>
                <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                    <Ionicons name="close" size={24} color="#1f2937" />
                </TouchableOpacity>
            </View>

            <FlatList
                ref={flatListRef}
                data={feedbacks}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={[styles.listContainer, feedbacks.length === 0 && { flex: 1 }]}
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Ionicons name="chatbubbles-outline" size={56} color="#d1d5db" />
                        <Text style={styles.emptyText}>No feedback yet.{'\n'}Be the first to share your thoughts!</Text>
                    </View>
                }
            />

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Share your ideas or issues..."
                    placeholderTextColor="#9ca3af"
                    value={inputText}
                    onChangeText={setInputText}
                    multiline
                />
                <TouchableOpacity
                    style={[styles.submitButton, inputText.trim().length === 0 && styles.submitButtonDisabled]}
                    onPress={handleSubmit}
                    disabled={inputText.trim().length === 0}
                >
                    <Ionicons name="send" size={20} color="#fff" style={{ marginLeft: 2 }} />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};
