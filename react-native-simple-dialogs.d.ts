import * as React from 'react';
import { View, ViewProps,Text,Button,StyleProp,Modal,ModalProps,ButtonProps } from 'react-native';


declare module "react-native-simple-dialogs" {

    type animationType = 'none' | 'slide' | 'fade';

    type supportedOrientationsType   = 'portrait' |'portrait-upside-down'| 'landscape'|'landscape-left'| 'landscape-right';

    type keyboardDismissModeType=  'none'| 'on-drag'| 'interactive';
    
    type keyboardShouldPersistTapsType= 'always' | 'never' | 'handled' | false | true;

    type activityIndicatorSizeType= 'small' | 'large';

    export interface DialogProps {

        visible?: boolean,
        onRequestClose?: ()=>void,
        animationType?:animationType,
        onShow?: ()=>void,
        onOrientationChange?:()=>void,
        supportedOrientations?:supportedOrientationsType,
        onTouchOutside?:()=>void,
        title?: string,
        titleStyle?: StyleProp<Text>,
        dialogStyle?: StyleProp<View>,
        contentStyle?:  ViewProps<View>,
        buttonsStyle?:  StyleProp<View>,
        overlayStyle?:  StyleProp<View>,
        buttons?: ButtonProps<Button>,
        keyboardDismissMode?: keyboardDismissModeType,
        keyboardShouldPersistTaps?: keyboardShouldPersistTapsType,
    }

    export interface ProgressDialogProps extends DialogProps{
    message: string,
    messageStyle?:StyleProp<Text>,
    activityIndicatorColor?: string,
    activityIndicatorSize?: activityIndicatorSizeType,
    activityIndicatorStyle?:StyleProp<View>
    }

    export interface ConfirmDialogProps extends DialogProps{
    message?: string,
    messageStyle?: StyleProp<Text>,
    negativeButton?: ButtonProps<Button>,
    positiveButton: ButtonProps<Button>
    } 


    class Dialog extends React.Component<DialogProps>{}
    class ProgressDialog extends React.Component<ProgressDialogProps>{}
    class ConfirmDialog  extends React.Component <ConfirmDialogProps>{}
    class TouchableEffect extends React.Component <Props>{}
}

export {Dialog, ProgressDialog, ConfirmDialog,TouchableEffect }