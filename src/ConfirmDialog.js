import React, { Component } from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'
import PropTypes from 'prop-types';

import Dialog from './Dialog'
import TouchableEffect from './TouchableEffect';

class ConfirmDialog extends Component {

    renderMessage() {
        const { message, messageStyle } = this.props;

        if (message)
            return (<Text style={[{ color: "#00000089", fontSize: 18, }, messageStyle]}>{message}</Text>)
    }

    renderButton(button) {
        if (button) {
            const { title, titleStyle, style, onPress } = button;

            return (
                <TouchableEffect onPress={onPress}>
                    <View style={style}>
                        <Text
                            style={[{
                                height: 36,
                                minWidth: 64,
                                padding: 8,
                                textAlign: "center",
                                textAlignVertical: "center",
                                color: "#0000FF99",
                                fontWeight: "bold"
                            }, titleStyle]}
                        >{title}</Text>
                    </View>
                </TouchableEffect>
            )
        }
    }

    renderButtons() {
        const { negativeButton, positiveButton } = this.props;

        return (
            <View style={{ flexDirection: "row", justifyContent: "flex-end", height: 36 }}>
                {this.renderButton(negativeButton)}
                <View style={{ width: 8 }}></View>
                {this.renderButton(positiveButton)}
            </View>
        )
    }

    render() {
        const { message } = this.props;

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