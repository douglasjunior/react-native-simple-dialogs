import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity
} from 'react-native';

import {
    Dialog,
    ProgressDialog
} from 'react-native-simple-dialogs'

export default class App extends Component {

    state = {}

    openDialog(show) {
        this.setState({ showDialog: show })
    }

    openProgress() {
        this.setState({ showProgress: true })

        setTimeout(
            () => this.setState({ showProgress: false }),
            2000
        );
    }

    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.welcome}>Welcome to React Native Simple Dialogs!</Text>
                <Text style={styles.instructions}>To get started, touch on the buttons</Text>

                <Button onPress={() => this.openDialog(true)} style={{ marginBottom: 20 }} title="Dialog" />

                <View style={{ height: 10 }}></View>

                <Button onPress={() => this.openProgress()} style={{ marginBottom: 20 }} title="Progress Dialog" />

                <Dialog
                    visible={this.state.showDialog}
                    title="Dialog Title"
                    onTouchOutside={() => this.openDialog(false)}
                    animationType="fade">
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                    <TouchableOpacity onPress={() => this.openDialog(false)} style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 16, color: "blue", alignSelf: "flex-end" }}>CLOSE</Text>
                    </TouchableOpacity>
                </Dialog>

                <ProgressDialog
                    visible={this.state.showProgress}
                    title="Progress Dialog"
                    message="Please, wait..."
                    animationType="fade"
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
