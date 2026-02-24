import React from 'react';
import { FeedbackItem } from './types';
interface FeedbackViewProps {
    feedbacks: FeedbackItem[];
    onClose: () => void;
    onSubmit: (text: string) => void;
}
export declare const FeedbackView: React.FC<FeedbackViewProps>;
export {};
