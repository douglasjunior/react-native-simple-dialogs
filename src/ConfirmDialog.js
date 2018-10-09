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

import React, { Component } from 'react'
import {
    View,
    ViewPropTypes,
    Text,
    Platform
} from 'react-native'
const { OS } = Platform;

import PropTypes from 'prop-types';

import Dialog from './Dialog'
import TouchableEffect from './TouchableEffect';

const DEFAULT_COLOR_BUTTON = "#0000FF99";
const DEFAULT_BACKGROUNDCOLOR_BUTTON = "transparent";

class ConfirmDialog extends Component {

    getButtonStyle = (button, positive) => {
        const { disabled } = button;
        const style = button.style || {};
        const { backgroundColor, backgroundColorDisabled, ...othersStyle } = style;
        return Platform.select({
            ios: {
                height: 46,
                justifyContent: "center",
                backgroundColor: (!disabled ? backgroundColor : (backgroundColorDisabled || backgroundColor)) || DEFAULT_BACKGROUNDCOLOR_BUTTON,
                ...othersStyle
            },
            android: {
                backgroundColor: (!disabled ? backgroundColor : (backgroundColorDisabled || backgroundColor)) || DEFAULT_BACKGROUNDCOLOR_BUTTON,
                ...othersStyle
            }
        })
    }

    getButtonTextStyle = (button, positive) => {
        const { disabled } = button;
        const titleStyle = button.titleStyle || {};
        const { color, colorDisabled, ...othersStyle } = titleStyle;
        return Platform.select({
            ios: {
                textAlign: "center",
                textAlignVertical: "center",
                color: (!disabled ? color : (colorDisabled || color)) || DEFAULT_COLOR_BUTTON,
                fontWeight: positive ? "bold" : "normal",
                ...othersStyle
            },
            android: {
                height: 36,
                minWidth: 64,
                padding: 8,
                textAlign: "center",
                textAlignVertical: "center",
                color: (!disabled ? color : (colorDisabled || color)) || DEFAULT_COLOR_BUTTON,
                fontWeight: "bold",
                ...othersStyle
            }
        });
    }

    renderMessage() {
        const { message, messageStyle } = this.props;

        const textAlign = OS === 'ios' ? "center" : null;

        if (message)
            return (<Text style={[{ textAlign, color: "#00000089", fontSize: 18 }, messageStyle]}>{message}</Text>)
    }

    renderButton(button, positive) {
        if (button) {
            const { onPress, disabled, color, } = button;

            const title = OS === 'ios' ?
                button.title :
                button.title.toUpperCase();

            const containerStyle = this.getButtonStyle(button, positive);

            const textStyle = this.getButtonTextStyle(button, positive);

            const touchableStyle = OS === 'ios' ?
                { flex: 1 } :
                {};

            return (
                <TouchableEffect onPress={onPress} disabled={disabled} style={touchableStyle}>
                    <View style={containerStyle}>
                        <Text style={textStyle} >{title}</Text>
                    </View>
                </TouchableEffect>
            )
        }
    }

    renderButtons() {
        const { negativeButton, positiveButton } = this.props;

        const containerStyle = OS === 'ios' ?
            { flexDirection: "row" } :
            { flexDirection: "row", justifyContent: "flex-end", height: 36 }

        const dividerVertStyle = OS === 'ios' ?
            { width: negativeButton ? 1 : 0, backgroundColor: "#00000011" } :
            { width: 8 }

        const dividerHoriStyle = OS === 'ios' ?
            { height: 1, backgroundColor: "#00000011" } :
            { height: 0 }

        return (
            <View>
                <View style={dividerHoriStyle}></View>
                <View style={containerStyle}>
                    {this.renderButton(negativeButton, false)}
                    <View style={dividerVertStyle}></View>
                    {this.renderButton(positiveButton, true)}
                </View>
            </View>
        )
    }

    renderContent() {
        const { children } = this.props;

        if (children)
            return children;
        else
            return this.renderMessage();
    }

    render() {
        return (
            <Dialog {...this.props}
                buttons={this.renderButtons()} >
                {this.renderContent()}
            </Dialog>
        )
    }
}

const buttonPropType = PropTypes.shape({
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    titleStyle: PropTypes.shape({
        ...Text.propTypes.style,
        colorDisabled: PropTypes.string,
    }),
    style: PropTypes.shape({
        ...ViewPropTypes.style,
        backgroundColorDisabled: PropTypes.string,
    })
});

ConfirmDialog.propTypes = {
    ...Dialog.propTypes,
    message: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    messageStyle: Text.propTypes.style,
    negativeButton: buttonPropType,
    positiveButton: buttonPropType.isRequired
}

export default ConfirmDialog
