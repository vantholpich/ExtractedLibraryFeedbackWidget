import { Ionicons } from '@expo/vector-icons';
import * as Application from 'expo-application';
import Constants from 'expo-constants';
import React, { useEffect, useState } from 'react';
import { Modal, Pressable, TouchableOpacity, View } from 'react-native';
import { FeedbackView } from './FeedbackView';
import { styles } from './styles';
import { supabase } from './supabaseClient';
import { FeedbackItem } from './types';

// Local storage key removed as we are now using Supabase
// const STORAGE_KEY = '@feedbacks_storage_key';

const APP_ID = Constants.expoConfig?.name ?? 'unknown-app';

export const FeedbackWidget: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [feedbacks, setFeedbacks] = useState<FeedbackItem[]>([]);


    useEffect(() => {
        loadFeedbacks();
    }, []);

    const loadFeedbacks = async () => {
        try {
            const { data, error } = await supabase
                .from('feedbacks')
                .select('*')
                .eq('app_id', APP_ID)
                .order('created_at', { ascending: false });

            if (error) throw error;

            if (data) {
                // Map DB fields to component types if necessary
                const mappedData: FeedbackItem[] = data.map(item => ({
                    id: item.id.toString(),
                    text: item.text,
                    createdAt: new Date(item.created_at).getTime(),
                }));
                setFeedbacks(mappedData);
            }
        } catch (e) {
            console.error('Error loading feedbacks from Supabase', e);
        }
    };

    // saveFeedbacks removed as we now insert directly into Supabase in handleSubmit



    const toggleModal = () => setIsVisible(!isVisible);



    const handleSubmit = async (text: string) => {
        try {
            const { data, error } = await supabase
                .from('feedbacks')
                .insert([
                    { text, app_id: APP_ID }
                ])
                .select();

            if (error) throw error;

            if (data && data[0]) {
                const newFeedback: FeedbackItem = {
                    id: data[0].id.toString(),
                    text: data[0].text,
                    createdAt: new Date(data[0].created_at).getTime(),
                };
                setFeedbacks(prev => [newFeedback, ...prev]);
            }
        } catch (e) {
            console.error('Error submitting feedback to Supabase', e);
        }
    };

    return (
        <>
            <TouchableOpacity
                style={styles.bottomBar}
                onPress={toggleModal}
                activeOpacity={0.9}
            >
                <View style={styles.bottomBarContent}>
                    <Ionicons name="chatbubble-ellipses" size={20} color="#fff" />
                </View>
            </TouchableOpacity>

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
