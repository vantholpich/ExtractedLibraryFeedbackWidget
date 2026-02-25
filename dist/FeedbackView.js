"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackView = void 0;
var vector_icons_1 = require("@expo/vector-icons");
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var styles_1 = require("./styles");
var FeedbackView = function (_a) {
    var feedbacks = _a.feedbacks, onClose = _a.onClose, onSubmit = _a.onSubmit;
    var _b = (0, react_1.useState)(''), inputText = _b[0], setInputText = _b[1];
    var flatListRef = (0, react_1.useRef)(null);
    var handleSubmit = function () {
        if (inputText.trim().length === 0)
            return;
        onSubmit(inputText.trim());
        setInputText('');
        // Optionally scroll to top or bottom depending on sorting
        // setTimeout(() => {
        //   flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
        // }, 100);
    };
    var renderItem = function (_a) {
        var item = _a.item;
        var timeString = new Date(item.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        var dateString = new Date(item.createdAt).toLocaleDateString([], { month: 'short', day: 'numeric' });
        return (<react_native_1.View style={styles_1.styles.feedbackItem}>
                <react_native_1.View style={styles_1.styles.feedbackItemHeader}>
                    <react_native_1.Text style={styles_1.styles.feedbackItemRole}>App User</react_native_1.Text>
                    <react_native_1.Text style={styles_1.styles.feedbackItemTime}>{dateString}, {timeString}</react_native_1.Text>
                </react_native_1.View>
                <react_native_1.Text style={styles_1.styles.feedbackItemText}>{item.text}</react_native_1.Text>
            </react_native_1.View>);
    };
    return (<react_native_1.KeyboardAvoidingView style={styles_1.styles.contentContainer} behavior={react_native_1.Platform.OS === 'ios' ? 'padding' : undefined}>
            <react_native_1.View style={styles_1.styles.header}>
                <react_native_1.Text style={styles_1.styles.headerTitle}>Feedback Board</react_native_1.Text>
                <react_native_1.TouchableOpacity style={styles_1.styles.closeButton} onPress={onClose}>
                    <vector_icons_1.Ionicons name="close" size={24} color="#1f2937"/>
                </react_native_1.TouchableOpacity>
            </react_native_1.View>

            <react_native_1.FlatList ref={flatListRef} data={feedbacks} keyExtractor={function (item) { return item.id; }} renderItem={renderItem} contentContainerStyle={[styles_1.styles.listContainer, feedbacks.length === 0 && { flex: 1 }]} style={{ flex: 1 }} showsVerticalScrollIndicator={false} ListEmptyComponent={<react_native_1.View style={styles_1.styles.emptyContainer}>
                        <vector_icons_1.Ionicons name="chatbubbles-outline" size={56} color="#d1d5db"/>
                        <react_native_1.Text style={styles_1.styles.emptyText}>No feedback yet.{'\n'}Be the first to share your thoughts!</react_native_1.Text>
                    </react_native_1.View>}/>

            <react_native_1.View style={styles_1.styles.inputContainer}>
                <react_native_1.TextInput style={styles_1.styles.textInput} placeholder="Share your ideas or issues..." placeholderTextColor="#9ca3af" value={inputText} onChangeText={setInputText} multiline/>
                <react_native_1.TouchableOpacity style={[styles_1.styles.submitButton, inputText.trim().length === 0 && styles_1.styles.submitButtonDisabled]} onPress={handleSubmit} disabled={inputText.trim().length === 0}>
                    <vector_icons_1.Ionicons name="send" size={20} color="#fff" style={{ marginLeft: 2 }}/>
                </react_native_1.TouchableOpacity>
            </react_native_1.View>
        </react_native_1.KeyboardAvoidingView>);
};
exports.FeedbackView = FeedbackView;
