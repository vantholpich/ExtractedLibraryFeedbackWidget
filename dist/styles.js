"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.styles = void 0;
var react_native_1 = require("react-native");
var primaryColor = '#6366f1';
var backgroundColor = '#ffffff';
var surfaceColor = '#f3f4f6';
var textColor = '#1f2937';
var subtleTextColor = '#6b7280';
var borderColor = '#e5e7eb';
exports.styles = react_native_1.StyleSheet.create({
    // Bottom Bar
    bottomBar: {
        backgroundColor: primaryColor,
        height: 30,
        justifyContent: 'center',
        paddingBottom: react_native_1.Platform.OS === 'ios' ? 20 : 0, // Inset for safe area if needed
    },
    bottomBarContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    bottomBarText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    // Modal Container
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalOverlay: __assign({}, react_native_1.StyleSheet.absoluteFillObject),
    // Main View Content
    contentContainer: __assign({ backgroundColor: backgroundColor, borderTopLeftRadius: 28, borderTopRightRadius: 28, height: '80%', overflow: 'hidden' }, react_native_1.Platform.select({
        ios: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -4 },
            shadowOpacity: 0.1,
            shadowRadius: 12,
        },
        android: {
            elevation: 12,
        }
    })),
    // Header
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingVertical: 18,
        borderBottomWidth: 1,
        borderBottomColor: borderColor,
        backgroundColor: backgroundColor,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: textColor,
    },
    closeButton: {
        padding: 8,
        marginRight: -8,
    },
    // Feedback List
    listContainer: {
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 24,
    },
    feedbackItem: {
        backgroundColor: surfaceColor,
        padding: 18,
        borderRadius: 20,
        marginBottom: 16,
    },
    feedbackItemHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    feedbackItemRole: {
        fontSize: 13,
        fontWeight: '700',
        color: primaryColor,
    },
    feedbackItemTime: {
        fontSize: 12,
        color: subtleTextColor,
        fontWeight: '500',
    },
    feedbackItemText: {
        fontSize: 15,
        color: textColor,
        lineHeight: 22,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32,
    },
    emptyText: {
        fontSize: 16,
        color: subtleTextColor,
        textAlign: 'center',
        marginTop: 20,
        lineHeight: 24,
    },
    // Input Area
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingHorizontal: 16,
        paddingVertical: 14,
        paddingBottom: react_native_1.Platform.OS === 'ios' ? 32 : 16,
        borderTopWidth: 1,
        borderTopColor: borderColor,
        backgroundColor: backgroundColor,
    },
    textInput: {
        flex: 1,
        backgroundColor: surfaceColor,
        borderRadius: 24,
        paddingHorizontal: 20,
        paddingTop: 14,
        paddingBottom: 14,
        fontSize: 16,
        color: textColor,
        maxHeight: 120,
        minHeight: 48,
    },
    submitButton: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: primaryColor,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 12,
    },
    submitButtonDisabled: {
        backgroundColor: '#a5b4fc',
    }
});
