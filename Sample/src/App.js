import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    Image,
} from 'react-native';

import {
    Dialog,
    ProgressDialog,
    ConfirmDialog,
} from 'react-native-simple-dialogs'

export default class App extends Component {

    state = {}

    openDialog(show) {
        this.setState({ showDialog: show })
    }

    openConfirm(show) {
        this.setState({ showConfirm: show })
    }

    openProgress() {
        this.setState({ showProgress: true })

        setTimeout(
            () => this.setState({ showProgress: false }),
            4000
        );
    }

    optionYes() {
        this.openConfirm(false);
        // Yes, this is a workaround :(
        // Why? See this https://github.com/facebook/react-native/issues/10471
        setTimeout(() => alert("Yes touched!"), 100);
    }

    optionNo() {
        this.openConfirm(false);
        // Yes, this is a workaround :(
        // Why? See this https://github.com/facebook/react-native/issues/10471
        setTimeout(() => alert("No touched!"), 100);
    }

    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.welcome}>Welcome to React Native Simple Dialogs!</Text>
                <Text style={styles.instructions}>To get started, touch on the buttons</Text>

                <Button onPress={() => this.openDialog(true)} title="Custom Dialog" />

                <View style={{ height: 10 }}></View>

                <Button onPress={() => this.openConfirm(true)} title="Confirm Dialog" />

                <View style={{ height: 10 }}></View>

                <Button onPress={() => this.openProgress()} title="Progress Dialog" />

                <Dialog
                    visible={this.state.showDialog}
                    title="Custom Dialog"
                    onTouchOutside={() => this.openDialog(false)}
                    contentStyle={{ justifyContent: 'center', alignItems: 'center', }}
                    animationType="fade">
                    <Image
                        source={{ uri: "http://facebook.github.io/react-native/img/opengraph.png" }}
                        resizeMode="contain"
                        resizeMethod="scale"
                        style={{ marginBottom: 10, height: 50, width: 100 }} />
                    <Text style={{ marginBottom: 10 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                    <Button onPress={() => this.openDialog(false)} style={{ marginTop: 10 }} title="CLOSE" />
                </Dialog>

                <ConfirmDialog
                    title="Confirm Dialog"
                    message="Are you sure about that?"
                    visible={this.state.showConfirm}
                    onTouchOutside={() => this.openConfirm(false)}
                    positiveButton={{
                        title: "YES",
                        onPress: () => this.optionYes()
                    }}
                    negativeButton={{
                        title: "NO",
                        disabled: true,
                        titleStyle: {
                            color: 'blue',
                            colorDisabled: 'aqua',
                        },
                        style: {
                            backgroundColor: 'transparent',
                            backgroundColorDisabled: 'transparent',
                        },
                        onPress: () => this.optionNo()
                    }}
                />

                <ProgressDialog
                    visible={this.state.showProgress}
                    title="Progress Dialog"
                    message="Please, wait..."
                    animationType="slide"
                    activityIndicatorSize="large"
                    activityIndicatorColor="blue"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 20,
    },
});

AppRegistry.registerComponent('Sample', () => App);
