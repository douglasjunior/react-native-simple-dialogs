declare module 'react-native-simple-dialogs' {
    import * as React from 'react';
    import {
        StyleProp,
        ViewStyle,
        TextStyle,
    } from 'react-native';

    type animationType = 'none' | 'slide' | 'fade';

    type supportedOrientationsType =
        | 'portrait'
        | 'portrait-upside-down'
        | 'landscape'
        | 'landscape-left'
        | 'landscape-right';

    type keyboardDismissModeType = 'none' | 'on-drag' | 'interactive';

    type keyboardShouldPersistTapsType =
        | 'always'
        | 'never'
        | 'handled'
        | false
        | true;

    type activityIndicatorSizeType = 'small' | 'large' | number;

    export interface BaseProps {
        visible?: boolean;
        onRequestClose?: () => void;
        animationType?: animationType;
        onShow?: () => void;
        onOrientationChange?: () => void;
        supportedOrientations?: supportedOrientationsType[];
        onTouchOutside?: () => void;
        title?: string;
        titleStyle?: StyleProp<TextStyle>;
        dialogStyle?: StyleProp<ViewStyle>;
        contentStyle?: StyleProp<ViewStyle>;
        buttonsStyle?: StyleProp<ViewStyle>;
        overlayStyle?: StyleProp<ViewStyle>;
        buttons?: React.ReactNode | React.ReactNode[] | JSX.Element
        keyboardDismissMode?: keyboardDismissModeType;
        keyboardShouldPersistTaps?: keyboardShouldPersistTapsType;
        contentInsetAdjustmentBehavior?: 'automatic' | 'scrollableAxes' | 'never' | 'always';
    }

    export interface DialogProps extends BaseProps {
        children?: React.ReactNode | React.ReactNode[] | JSX.Element
    }

    export interface ProgressDialogProps extends BaseProps {
        message: string;
        messageStyle?: StyleProp<TextStyle>;
        activityIndicatorColor?: string;
        activityIndicatorSize?: activityIndicatorSizeType;
        activityIndicatorStyle?: StyleProp<ViewStyle>;
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
    export class TouchableEffect extends React.Component<Props> { }
}
