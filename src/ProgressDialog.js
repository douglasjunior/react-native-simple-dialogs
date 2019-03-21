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
import PropTypes from 'prop-types';
import {
    View,
    ActivityIndicator,
    Text,
    ViewPropTypes
} from 'react-native';

import Dialog from './Dialog'

class ProgressDialog extends Component {
    render() {
        const {
            message, messageStyle, activityIndicatorColor, activityIndicatorSize, activityIndicatorStyle
        } = this.props;

        return (
            <Dialog {...this.props} >
                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                    <ActivityIndicator animating={true} color={activityIndicatorColor} size={activityIndicatorSize} style={activityIndicatorStyle} />
                    <Text style={[{ marginLeft: 20, fontSize: 18, color: "#00000089" }, messageStyle]}>{message}</Text>
                </View>
            </Dialog>
        )
    }
}

ProgressDialog.propTypes = {
    ...Dialog.propTypes,
    message: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    messageStyle: Text.propTypes.style,
    activityIndicatorColor: PropTypes.string,
    activityIndicatorSize: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    activityIndicatorStyle: ViewPropTypes.style
}

delete ProgressDialog.propTypes.children;

export default ProgressDialog
