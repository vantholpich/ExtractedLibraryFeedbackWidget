export declare const styles: {
    bottomBar: {
        backgroundColor: string;
        height: number;
        justifyContent: "center";
        paddingBottom: number;
    };
    bottomBarContent: {
        flexDirection: "row";
        alignItems: "center";
        justifyContent: "center";
        gap: number;
    };
    bottomBarText: {
        color: string;
        fontSize: number;
        fontWeight: "600";
    };
    modalContainer: {
        flex: number;
        justifyContent: "flex-end";
        backgroundColor: string;
    };
    modalOverlay: {
        position: "absolute";
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    };
    contentContainer: {
        backgroundColor: string;
        borderTopLeftRadius: number;
        borderTopRightRadius: number;
        height: "80%";
        overflow: "hidden";
    } | {
        shadowColor: string;
        shadowOffset: {
            width: number;
            height: number;
        };
        shadowOpacity: number;
        shadowRadius: number;
        elevation?: undefined;
        backgroundColor: string;
        borderTopLeftRadius: number;
        borderTopRightRadius: number;
        height: "80%";
        overflow: "hidden";
    } | {
        elevation: number;
        shadowColor?: undefined;
        shadowOffset?: undefined;
        shadowOpacity?: undefined;
        shadowRadius?: undefined;
        backgroundColor: string;
        borderTopLeftRadius: number;
        borderTopRightRadius: number;
        height: "80%";
        overflow: "hidden";
    };
    header: {
        flexDirection: "row";
        justifyContent: "space-between";
        alignItems: "center";
        paddingHorizontal: number;
        paddingVertical: number;
        borderBottomWidth: number;
        borderBottomColor: string;
        backgroundColor: string;
    };
    headerTitle: {
        fontSize: number;
        fontWeight: "700";
        color: string;
    };
    closeButton: {
        padding: number;
        marginRight: number;
    };
    listContainer: {
        paddingHorizontal: number;
        paddingTop: number;
        paddingBottom: number;
    };
    feedbackItem: {
        backgroundColor: string;
        padding: number;
        borderRadius: number;
        marginBottom: number;
    };
    feedbackItemHeader: {
        flexDirection: "row";
        justifyContent: "space-between";
        marginBottom: number;
    };
    feedbackItemRole: {
        fontSize: number;
        fontWeight: "700";
        color: string;
    };
    feedbackItemTime: {
        fontSize: number;
        color: string;
        fontWeight: "500";
    };
    feedbackItemText: {
        fontSize: number;
        color: string;
        lineHeight: number;
    };
    emptyContainer: {
        flex: number;
        justifyContent: "center";
        alignItems: "center";
        padding: number;
    };
    emptyText: {
        fontSize: number;
        color: string;
        textAlign: "center";
        marginTop: number;
        lineHeight: number;
    };
    inputContainer: {
        flexDirection: "row";
        alignItems: "flex-end";
        paddingHorizontal: number;
        paddingVertical: number;
        paddingBottom: number;
        borderTopWidth: number;
        borderTopColor: string;
        backgroundColor: string;
    };
    textInput: {
        flex: number;
        backgroundColor: string;
        borderRadius: number;
        paddingHorizontal: number;
        paddingTop: number;
        paddingBottom: number;
        fontSize: number;
        color: string;
        maxHeight: number;
        minHeight: number;
    };
    submitButton: {
        width: number;
        height: number;
        borderRadius: number;
        backgroundColor: string;
        justifyContent: "center";
        alignItems: "center";
        marginLeft: number;
    };
    submitButtonDisabled: {
        backgroundColor: string;
    };
};
