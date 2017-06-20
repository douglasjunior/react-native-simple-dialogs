import React, { Component } from 'react'
import {
    View,
    Text,
    Button,
    Platform
} from 'react-native'
import PropTypes from 'prop-types';

const OS = Platform.OS;

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
            const { title, titleStyle, style, onPress } = button;

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

    render() {
        return (
            <Dialog {...this.props}
                buttons={this.renderButtons()} >
                {this.renderMessage()}
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