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
  View,
  Text,
  Platform,
  ViewStyle,
  StyleProp,
  TextStyle,
  StyleSheet,
} from 'react-native';

import Dialog, {DialogPropsType} from './Dialog';
import TouchableEffect from './TouchableEffect';

const {OS} = Platform;

const DEFAULT_COLOR_BUTTON = '#0000FF99';
const DEFAULT_BACKGROUND_COLOR_BUTTON = 'transparent';

export type ConfirmDialogButtonPropsType = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  titleStyle?: StyleProp<
    TextStyle & {
      colorDisabled?: TextStyle['color'];
    }
  >;
  style?: StyleProp<
    ViewStyle & {
      backgroundColorDisabled?: ViewStyle['backgroundColor'];
    }
  >;
};

export type ConfirmDialogPropsType = DialogPropsType & {
  message?: string;
  messageStyle?: StyleProp<TextStyle>;
  negativeButton?: ConfirmDialogButtonPropsType;
  positiveButton: ConfirmDialogButtonPropsType;
};

const getButtonBackgroundColor = (
  buttonProps: ConfirmDialogButtonPropsType,
) => {
  const {style, disabled} = buttonProps;

  if (!style) {
    return DEFAULT_BACKGROUND_COLOR_BUTTON;
  }

  const {backgroundColor, backgroundColorDisabled} = StyleSheet.flatten(style);

  if (disabled) {
    return backgroundColorDisabled;
  }

  return backgroundColor;
};

const getButtonTextColor = (buttonProps: ConfirmDialogButtonPropsType) => {
  const {titleStyle, disabled} = buttonProps;

  if (!titleStyle) {
    return DEFAULT_COLOR_BUTTON;
  }

  const {color, colorDisabled} = StyleSheet.flatten(titleStyle);

  if (disabled) {
    return colorDisabled;
  }

  return color;
};

const getButtonStyle = (
  buttonProps: ConfirmDialogButtonPropsType,
): StyleProp<ViewStyle> => {
  const {style} = buttonProps;

  const backgroundColor = getButtonBackgroundColor(buttonProps);

  const flattenStyle = StyleSheet.flatten(style);
  delete flattenStyle?.backgroundColorDisabled;

  return Platform.select({
    ios: [
      {
        height: 46,
        justifyContent: 'center',
      },
      flattenStyle,
      {
        backgroundColor,
      },
    ],
    android: [
      flattenStyle,
      {
        backgroundColor,
      },
    ],
  });
};

const getButtonTextStyle = (
  buttonProps: ConfirmDialogButtonPropsType,
  positive?: boolean,
): StyleProp<TextStyle> => {
  const {style} = buttonProps;

  const color = getButtonTextColor(buttonProps);

  const flattenStyle = StyleSheet.flatten(style);
  delete flattenStyle?.backgroundColorDisabled;

  return Platform.select({
    ios: [
      {
        textAlign: 'center',
        textAlignVertical: 'center',
        color,
        fontWeight: positive ? 'bold' : 'normal',
      },
      {color},
      flattenStyle,
    ],
    android: [
      {
        height: 36,
        minWidth: 64,
        padding: 8,
        textAlign: 'center',
        textAlignVertical: 'center',
        color,
        fontWeight: 'bold',
        textTransform: 'uppercase',
      },
      {color},
      flattenStyle,
    ],
  });
};

const ConfirmDialog = ({
  children,
  negativeButton,
  positiveButton,
  message,
  messageStyle,
  ...others
}: ConfirmDialogPropsType): JSX.Element => {
  const renderMessage = () => {
    if (!message) {
      return null;
    }

    const textAlign = OS === 'ios' ? 'center' : undefined;

    return (
      <Text
        style={[{textAlign, color: '#00000089', fontSize: 18}, messageStyle]}>
        {message}
      </Text>
    );
  };

  const renderButton = (
    buttonProps?: ConfirmDialogButtonPropsType,
    positive?: boolean,
  ) => {
    if (!buttonProps) {
      return null;
    }

    const {onPress, disabled} = buttonProps;

    const containerStyle = getButtonStyle(buttonProps);

    const textStyle = getButtonTextStyle(buttonProps, positive);

    const touchableStyle = OS === 'ios' ? {flex: 1} : {};

    return (
      <TouchableEffect
        onPress={onPress}
        disabled={disabled}
        style={touchableStyle}>
        <View style={containerStyle}>
          <Text style={textStyle}>{buttonProps.title}</Text>
        </View>
      </TouchableEffect>
    );
  };

  const renderButtons = () => {
    const containerStyle: ViewStyle =
      OS === 'ios'
        ? {flexDirection: 'row'}
        : {flexDirection: 'row', justifyContent: 'flex-end', height: 36};

    const dividerVertStyle: ViewStyle =
      OS === 'ios'
        ? {width: negativeButton ? 1 : 0, backgroundColor: '#00000011'}
        : {width: 8};

    const dividerHoriStyle: ViewStyle =
      OS === 'ios' ? {height: 1, backgroundColor: '#00000011'} : {height: 0};

    return (
      <View>
        <View style={dividerHoriStyle} />
        <View style={containerStyle}>
          {renderButton(negativeButton, false)}
          <View style={dividerVertStyle} />
          {renderButton(positiveButton, true)}
        </View>
      </View>
    );
  };

  const renderContent = () => {
    if (children) {
      return children;
    }

    return renderMessage();
  };

  return (
    <Dialog {...others} buttons={renderButtons()}>
      {renderContent()}
    </Dialog>
  );
};

ConfirmDialog.defaultProps = {
  ...Dialog.defaultProps,
};

export default ConfirmDialog;
