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
    Platform,
    TouchableOpacity,
    TouchableNativeFeedback,
    View
} from 'react-native'
import PropTypes from 'prop-types';

const OS = Platform.OS;

class TouchableEffect extends Component {

    render() {
        const { onPress, children, style, background, delayPressIn } = this.props;

        let touchable;

        if (OS === 'android') {
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
    background: OS === 'android' ? TouchableNativeFeedback.propTypes.background : PropTypes.any,
}

TouchableEffect.defaultProps = {
    background: OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : null
};

export default TouchableEffect