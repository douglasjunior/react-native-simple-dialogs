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
    Modal,
    View,
    TouchableWithoutFeedback,
    Text
} from 'react-native'

class Dialog extends Component {

    renderTitle() {
        const {
            title, titleStyle
        } = this.props;

        return title ? (
            <Text style={[{ color: 'black', fontSize: 18, marginBottom: 10 }, titleStyle]} >{title}</Text>
        ) : null
    }

    render() {
        const {
            children, dialogStyle, visible, animationType, onRequestClose, onShow,
            onOrientationChange, onTouchOutside, overlayStyle
        } = this.props;

        return (
            <Modal
                animationType={animationType}
                transparent={true}
                visible={visible}
                onRequestClose={onRequestClose ? onRequestClose : () => null}
                onShow={onShow}
                onOrientationChange={onOrientationChange}
            >
                <TouchableWithoutFeedback onPress={onTouchOutside}>

                    <View style={[{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: "#000000AA",
                        padding: 20
                    }, overlayStyle]}>

                        <View style={[{
                            backgroundColor: 'white',
                            width: '100%',
                            borderRadius: 5,
                            padding: 20
                        }, dialogStyle]}>

                            {this.renderTitle()}
                            {children}

                        </View>

                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

Dialog.propTypes = {
    dialogStyle: View.propTypes.style,
    overlayStyle: View.propTypes.style,
    visible: PropTypes.bool,
    animationType: Modal.propTypes.animationType,
    onRequestClose: PropTypes.func,
    onShow: PropTypes.func,
    onOrientationChange: Modal.propTypes.onOrientationChange,
    onTouchOutside: PropTypes.func,
    title: PropTypes.string,
    titleStyle: Text.propTypes.style
}

Dialog.defaultProps = {
    visible: false
};

export default Dialog