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
  SafeAreaView,
  ScrollView,
  StyleProp,
  ViewStyle,
  TextStyle,
  ModalProps,
  ScrollViewProps,
} from 'react-native';

const {OS} = Platform;

export type DialogPropsType = {
  testID?: string;
  children?: React.ReactNode | React.ReactNode[];
  contentStyle?: StyleProp<ViewStyle>;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  buttons?: React.ReactNode | React.ReactNode[];
  buttonsStyle?: StyleProp<ViewStyle>;
  dialogStyle?: StyleProp<ViewStyle>;
  visible: boolean;
  animationType?: ModalProps['animationType'];
  onRequestClose: () => void;
  onShow?: () => void;
  onOrientationChange?: () => void;
  onTouchOutside?: () => void;
  overlayStyle?: StyleProp<ViewStyle>;
  supportedOrientations?: ModalProps['supportedOrientations'];
  statusBarTranslucent?: ModalProps['statusBarTranslucent'];
  accessible?: ModalProps['accessible'];
  accessibilityActions?: ModalProps['accessibilityActions'];
  accessibilityLabel?: ModalProps['accessibilityLabel'];
  accessibilityRole?: ModalProps['accessibilityRole'];
  accessibilityState?: ModalProps['accessibilityState'];
  accessibilityHint?: ModalProps['accessibilityHint'];
  accessibilityValue?: ModalProps['accessibilityValue'];
  onAccessibilityAction?: ModalProps['onAccessibilityAction'];
  importantForAccessibility?: ModalProps['importantForAccessibility'];
  role?: ModalProps['role'];
  keyboardDismissMode?: ScrollViewProps['keyboardDismissMode'];
  keyboardShouldPersistTaps?: ScrollViewProps['keyboardShouldPersistTaps'];
  contentInsetAdjustmentBehavior: ScrollViewProps['contentInsetAdjustmentBehavior'];
};

const Dialog = ({
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
}: DialogPropsType): JSX.Element => {
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
        <View
          style={[
            {
              flex: 1,
              backgroundColor: '#000000AA',
              padding: 24,
            },
            overlayStyle,
          ]}>
          <SafeAreaView style={{flex: 1}}>
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
          </SafeAreaView>
        </View>
      </ScrollView>
    </Modal>
  );
};

Dialog.defaultProps = {
  visible: false,
  onRequestClose: () => null,
  contentInsetAdjustmentBehavior: 'never',
};

export default Dialog;
