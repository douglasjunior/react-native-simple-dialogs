import * as React from 'react';
import {
    StyleProp,
    ViewStyle,
    TextStyle,
    ScrollViewProps,
    ActivityIndicatorProps,
    ModalProps,
    TouchableNativeFeedbackProps,
    TouchableOpacityProps,
} from 'react-native';

declare module 'react-native-simple-dialogs' {

    type activityIndicatorSizeType = 'small' | 'large' | number;

    export interface BaseProps {
        visible?: boolean;
        onRequestClose?: () => void;
        animationType?: ModalProps['animationType'];
        onShow?: () => void;
        onOrientationChange?: () => void;
        supportedOrientations?: ModalProps['supportedOrientations'];
        onTouchOutside?: () => void;
        title?: string;
        titleStyle?: StyleProp<TextStyle>;
        dialogStyle?: StyleProp<ViewStyle>;
        contentStyle?: StyleProp<ViewStyle>;
        buttonsStyle?: StyleProp<ViewStyle>;
        overlayStyle?: StyleProp<ViewStyle>;
        buttons?: React.ReactNode | React.ReactNode[] | JSX.Element
        keyboardDismissMode?: ScrollViewProps['keyboardDismissMode'];
        keyboardShouldPersistTaps?: ScrollViewProps['keyboardShouldPersistTaps'];
        contentInsetAdjustmentBehavior?: ScrollViewProps['contentInsetAdjustmentBehavior'];
    }

    export interface DialogProps extends BaseProps {
        children?: React.ReactNode | React.ReactNode[] | JSX.Element
    }

    export interface ProgressDialogProps extends BaseProps {
        message: string;
        messageStyle?: StyleProp<TextStyle>;
        activityIndicatorColor?: ActivityIndicatorProps['color'];
        activityIndicatorSize?: ActivityIndicatorProps['size'];
        activityIndicatorStyle?: ActivityIndicatorProps['style'];
    }

    export interface ButtonProps {
        title: string;
        onPress: () => void;
        disabled?: boolean;
        titleStyle?: StyleProp<TextStyle>;
        style?: StyleProp<ViewStyle>;
    }

    export interface ConfirmDialogProps extends BaseProps {
        message?: string;
        messageStyle?: StyleProp<TextStyle>;
        negativeButton?: ButtonProps;
        positiveButton: ButtonProps;
        children?: React.ReactNode | React.ReactNode[] | JSX.Element
    }

    export class Dialog extends React.Component<DialogProps> { }

    export class ProgressDialog extends React.Component<ProgressDialogProps> { }

    export class ConfirmDialog extends React.Component<ConfirmDialogProps> { }

    export declare const TouchableEffect: React.FC<TouchableNativeFeedbackProps & TouchableOpacityProps>;
}
