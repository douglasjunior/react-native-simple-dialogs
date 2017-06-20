import React, { Component } from 'react'
import {
    Platform,
    TouchableOpacity,
    TouchableNativeFeedback,
    View
} from 'react-native'
import PropTypes from 'prop-types';

class TouchableEffect extends Component {

    render() {
        const { onPress, children, style, background, delayPressIn } = this.props;

        let touchable;

        if (Platform.OS === 'android') {
            touchable = <TouchableNativeFeedback
                style={style}
                onPress={onPress}
                delayPressIn={delayPressIn}
                background={background} >
                {children}
            </TouchableNativeFeedback>
        } else {
            touchable = <TouchableOpacity
                style={style}
                delayPressIn={delayPressIn}
                onPress={onPress} >
                {children}
            </TouchableOpacity>
        }

        return touchable;
    }
}

TouchableEffect.propTypes = {
    onPress: TouchableOpacity.propTypes.onPress.isRequired,
    style: View.propTypes.style,
    delayPressIn: TouchableOpacity.propTypes.delayPressIn,
    background: TouchableNativeFeedback.propTypes.background,
}

TouchableEffect.defaultProps = {
    background: TouchableNativeFeedback.SelectableBackground()
};

export default TouchableEffect