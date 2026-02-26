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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackWidget = void 0;
var vector_icons_1 = require("@expo/vector-icons");
var expo_constants_1 = __importDefault(require("expo-constants"));
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var FeedbackView_1 = require("./FeedbackView");
var styles_1 = require("./styles");
var supabaseClient_1 = require("./supabaseClient");
// Local storage key removed as we are now using Supabase
// const STORAGE_KEY = '@feedbacks_storage_key';
var APP_ID = (_b = (_a = expo_constants_1.default.expoConfig) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : 'unknown-app';
var FeedbackWidget = function () {
    var _a = (0, react_1.useState)(false), isVisible = _a[0], setIsVisible = _a[1];
    var _b = (0, react_1.useState)([]), feedbacks = _b[0], setFeedbacks = _b[1];
    (0, react_1.useEffect)(function () {
        loadFeedbacks();
    }, []);
    var loadFeedbacks = function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, data, error, mappedData, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, supabaseClient_1.supabase
                            .from('feedbacks')
                            .select('*')
                            .eq('app_id', APP_ID)
                            .order('created_at', { ascending: false })];
                case 1:
                    _a = _b.sent(), data = _a.data, error = _a.error;
                    if (error)
                        throw error;
                    if (data) {
                        mappedData = data.map(function (item) { return ({
                            id: item.id.toString(),
                            text: item.text,
                            createdAt: new Date(item.created_at).getTime(),
                        }); });
                        setFeedbacks(mappedData);
                    }
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _b.sent();
                    console.error('Error loading feedbacks from Supabase', e_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    // saveFeedbacks removed as we now insert directly into Supabase in handleSubmit
    var toggleModal = function () { return setIsVisible(!isVisible); };
    var handleSubmit = function (text) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, data, error, newFeedback_1, e_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, supabaseClient_1.supabase
                            .from('feedbacks')
                            .insert([
                            { text: text, app_id: APP_ID }
                        ])
                            .select()];
                case 1:
                    _a = _b.sent(), data = _a.data, error = _a.error;
                    if (error)
                        throw error;
                    if (data && data[0]) {
                        newFeedback_1 = {
                            id: data[0].id.toString(),
                            text: data[0].text,
                            createdAt: new Date(data[0].created_at).getTime(),
                        };
                        setFeedbacks(function (prev) { return __spreadArray([newFeedback_1], prev, true); });
                    }
                    return [3 /*break*/, 3];
                case 2:
                    e_2 = _b.sent();
                    console.error('Error submitting feedback to Supabase', e_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (<>
            <react_native_1.TouchableOpacity style={styles_1.styles.bottomBar} onPress={toggleModal} activeOpacity={0.9}>
                <react_native_1.View style={styles_1.styles.bottomBarContent}>
                    <vector_icons_1.Ionicons name="chatbubble-ellipses" size={20} color="#fff"/>
                </react_native_1.View>
            </react_native_1.TouchableOpacity>

            <react_native_1.Modal visible={isVisible} animationType="slide" transparent={true} onRequestClose={toggleModal}>
                <react_native_1.View style={styles_1.styles.modalContainer}>
                    <react_native_1.Pressable style={styles_1.styles.modalOverlay} onPress={toggleModal}/>
                    <FeedbackView_1.FeedbackView feedbacks={feedbacks} onClose={toggleModal} onSubmit={handleSubmit}/>
                </react_native_1.View>
            </react_native_1.Modal>
        </>);
};
exports.FeedbackWidget = FeedbackWidget;
