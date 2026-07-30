/**
 * MIT License
 *
 * Copyright (c) 2017 Douglas Nassif Roma Junior
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import React from 'react';
import {
  Modal,
  View,
  TouchableWithoutFeedback,
  Text,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
  StyleProp,
  ViewStyle,
  TextStyle,
  ModalProps,
  ScrollViewProps,
} from 'react-native';

const {OS} = Platform;

const DEFAULT_OVERLAY_PADDING = 24;

export const dialogDefaultProps: DialogPropsType = {
  visible: false,
  onRequestClose: () => null,
  contentInsetAdjustmentBehavior: 'never',
};

export interface EdgeInsets {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export type DialogPropsType = {
  /** Used to locate this view in end-to-end tests */
  testID?: string;
  /** Dialog content */
  children?: React.ReactNode | React.ReactNode[];
  /** Custom view style for dialog content wrapper */
  contentStyle?: StyleProp<ViewStyle>;
  /** Modal's title */
  title?: string;
  /** Custom text style object for modal's title */
  titleStyle?: StyleProp<TextStyle>;
  /** Modal button component */
  buttons?: React.ReactNode | React.ReactNode[];
  /** Custom view style for dialog button wrapper */
  buttonsStyle?: StyleProp<ViewStyle>;
  /** Custom view style for dialog box */
  dialogStyle?: StyleProp<ViewStyle>;
  /** Show the modal? @default false */
  visible: boolean;
  /** Controls how the modal animates @default 'none' */
  animationType?: ModalProps['animationType'];
  /** Callback that's called when users taps the hardware back button on Android */
  onRequestClose?: () => void;
  /** Callback that's called once the modal has been shown */
  onShow?: () => void;
  /** Callback that's called when the orientation change while the modal is being displayed on iOS */
  onOrientationChange?: () => void;
  /** Callback that's called when users tap outside the shown modal */
  onTouchOutside?: () => void;
  /** Custom view style for dialog overlay */
  overlayStyle?: StyleProp<ViewStyle>;
  /** Allowed orientation while modals is being shown @default 'portrait' */
  supportedOrientations?: ModalProps['supportedOrientations'];
  /** Determines whether your modal should go under the system statusbar */
  statusBarTranslucent?: ModalProps['statusBarTranslucent'];
  /** When true, indicates that the view is an accessibility element */
  accessible?: ModalProps['accessible'];
  /** Accessibility actions allow an assistive technology to programmatically invoke the actions of a component */
  accessibilityActions?: ModalProps['accessibilityActions'];
  /** Overrides the text that's read by the screen reader when the user interacts with the element */
  accessibilityLabel?: ModalProps['accessibilityLabel'];
  /** Indicates to accessibility services what kind of component this is */
  accessibilityRole?: ModalProps['accessibilityRole'];
  /** Describes the current state of a component to the user of an assistive technology */
  accessibilityState?: ModalProps['accessibilityState'];
  /** An accessibility hint helps users understand what will happen when they perform an action on the accessibility element */
  accessibilityHint?: ModalProps['accessibilityHint'];
  /** Represents the current value of a component */
  accessibilityValue?: ModalProps['accessibilityValue'];
  /** When accessible is true, the system will invoke this callback when the user performs the actions */
  onAccessibilityAction?: ModalProps['onAccessibilityAction'];
  /** Controls how view is important for accessibility */
  importantForAccessibility?: ModalProps['importantForAccessibility'];
  /** Role communicates the purpose of a component to the user of an assistive technology */
  role?: ModalProps['role'];
  /** Determines whether the keyboard gets dismissed in response to a drag */
  keyboardDismissMode?: ScrollViewProps['keyboardDismissMode'];
  /** Determines when the keyboard should stay visible after a tap */
  keyboardShouldPersistTaps?: ScrollViewProps['keyboardShouldPersistTaps'];
  /** This property specifies how the safe area insets are used to modify the content area of the scroll view */
  contentInsetAdjustmentBehavior?: ScrollViewProps['contentInsetAdjustmentBehavior'];
  /** Insets to apply to the dialog to avoid notches and other screen insets. Can be used with react-native-safe-area-context */
  safeAreaInsets?: EdgeInsets;
};

const applySafeAreaInset = (inset?: number): number => {
  return typeof inset === 'number'
    ? inset + DEFAULT_OVERLAY_PADDING
    : DEFAULT_OVERLAY_PADDING;
};

const Dialog = (props: DialogPropsType): JSX.Element => {
  const {
    testID,
    accessible,
    accessibilityActions,
    accessibilityLabel,
    accessibilityRole,
    accessibilityState,
    accessibilityHint,
    accessibilityValue,
    onAccessibilityAction,
    importantForAccessibility,
    role,
    children,
    contentStyle,
    title,
    titleStyle,
    buttons,
    buttonsStyle,
    dialogStyle,
    visible,
    animationType,
    onRequestClose,
    onShow,
    onOrientationChange,
    onTouchOutside,
    overlayStyle,
    supportedOrientations,
    statusBarTranslucent,
    keyboardDismissMode,
    keyboardShouldPersistTaps,
    contentInsetAdjustmentBehavior,
    safeAreaInsets,
  } = {
    ...dialogDefaultProps,
    ...props,
  };

  const renderContent = () => {
    return (
      <View
        style={[
          {
            width: '100%',
            flexShrink: 1,
            padding: 24,
            paddingTop: 20,
          },
          contentStyle,
        ]}>
        {children}
      </View>
    );
  };

  const renderTitle = () => {
    const textAlign = OS === 'ios' ? 'center' : undefined;

    if (title) {
      return (
        <Text
          style={[
            {
              textAlign,
              color: '#000000DD',
              fontSize: 20,
              margin: 24,
              marginBottom: 0,
            },
            titleStyle,
          ]}>
          {title}
        </Text>
      );
    }
  };

  const renderButtons = () => {
    const containerStyle =
      OS === 'ios'
        ? {}
        : {
            width: '100%',
            paddingLeft: 24,
            paddingRight: 8,
            paddingTop: 8,
            paddingBottom: 8,
          };

    if (buttons) {
      return <View style={[containerStyle, buttonsStyle]}>{buttons}</View>;
    }
  };

  const renderOutsideTouchable = () => {
    const view = <View style={{flex: 1, width: '100%'}} />;

    if (!onTouchOutside) {
      return view;
    }

    return (
      <TouchableWithoutFeedback
        onPress={onTouchOutside}
        style={{flex: 1, width: '100%'}}>
        {view}
      </TouchableWithoutFeedback>
    );
  };

  const dialogBackgroundColor = OS === 'ios' ? '#e8e8e8' : '#ffffff';
  const dialogBorderRadius = OS === 'ios' ? 5 : 1;

  return (
    <Modal
      testID={testID}
      accessible={accessible}
      accessibilityActions={accessibilityActions}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole={accessibilityRole}
      accessibilityState={accessibilityState}
      accessibilityHint={accessibilityHint}
      accessibilityValue={accessibilityValue}
      onAccessibilityAction={onAccessibilityAction}
      importantForAccessibility={importantForAccessibility}
      role={role}
      animationType={animationType}
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}
      onShow={onShow}
      onOrientationChange={onOrientationChange}
      supportedOrientations={supportedOrientations}
      statusBarTranslucent={statusBarTranslucent}>
      <ScrollView
        bounces={false}
        style={{
          flex: 1,
        }}
        contentContainerStyle={{
          flex: 1,
        }}
        keyboardDismissMode={keyboardDismissMode}
        keyboardShouldPersistTaps={keyboardShouldPersistTaps}
        contentInsetAdjustmentBehavior={contentInsetAdjustmentBehavior}>
        <KeyboardAvoidingView
          behavior="height"
          style={[
            {
              flex: 1,
              backgroundColor: '#000000AA',
              paddingTop: applySafeAreaInset(safeAreaInsets?.top),
              paddingBottom: applySafeAreaInset(safeAreaInsets?.bottom),
              paddingLeft: applySafeAreaInset(safeAreaInsets?.left),
              paddingRight: applySafeAreaInset(safeAreaInsets?.right),
            },
            overlayStyle,
          ]}>
          {renderOutsideTouchable()}

          <View
            style={[
              {
                backgroundColor: dialogBackgroundColor,
                width: '100%',
                maxHeight: '100%',
                shadowOpacity: 0.24,
                borderRadius: dialogBorderRadius,
                elevation: 4,
                shadowOffset: {
                  height: 4,
                  width: 2,
                },
              },
              dialogStyle,
            ]}>
            {renderTitle()}

            {renderContent()}

            {renderButtons()}
          </View>

          {renderOutsideTouchable()}
        </KeyboardAvoidingView>
      </ScrollView>
    </Modal>
  );
};

export default Dialog;
