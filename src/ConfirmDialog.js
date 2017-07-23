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
    Text,
    Button,
    Platform
} from 'react-native'
const { OS } = Platform;

import PropTypes from 'prop-types';

import Dialog from './Dialog'
import TouchableEffect from './TouchableEffect';

class ConfirmDialog extends Component {

    renderMessage() {
        const { message, messageStyle } = this.props;

        const textAlign = OS === 'ios' ? "center" : null;

        if (message)
            return (<Text style={[{ textAlign, color: "#00000089", fontSize: 18 }, messageStyle]}>{message}</Text>)
    }

    renderButton(button, positive) {
        if (button) {
            const { titleStyle, style, onPress } = button;

            const title = OS === 'ios' ?
                button.title :
                button.title.toUpperCase();

            const containerStyle = OS === 'ios' ?
                {
                    height: 46,
                    justifyContent: "center"
                } :
                {}

            const textStyle = OS === 'ios' ?
                {
                    textAlign: "center",
                    textAlignVertical: "center",
                    color: "#0000FF99",
                    fontWeight: positive ? "bold" : "normal"
                } :
                {
                    height: 36,
                    minWidth: 64,
                    padding: 8,
                    textAlign: "center",
                    textAlignVertical: "center",
                    color: "#0000FF99",
                    fontWeight: "bold"
                }

            const touchableStyle = OS === 'ios' ?
                { flex: 1 } :
                {};

            return (
                <TouchableEffect onPress={onPress} style={touchableStyle}>
                    <View style={[containerStyle, style]}>
                        <Text
                            style={[textStyle, titleStyle]}
                        >{title}</Text>
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
    titleStyle: Text.propTypes.style,
    style: View.propTypes.style
});

ConfirmDialog.propTypes = {
    ...Dialog.propTypes,
    message: PropTypes.string,
    messageStyle: Text.propTypes.style,
    negativeButton: buttonPropType,
    positiveButton: buttonPropType.isRequired
}

export default ConfirmDialog