import React, { Component } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { connect } from "react-redux";

import { setUsername } from "../../store/actions/frontend-state-actions/profile";

class PlaceDetailScreen extends Component {
  buttonHandler = () => {
    this.props.navigator.pop({
      animated: true,
      animationType: "fade"
    });
  };

  render() {
    return (
      <View>
        <Text>Place Detail Screen</Text>
        <Text>{this.props.selectName}</Text>
        <Text>User Name</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => this.props.onSaveUsername(text)}
          value={this.props.username}
        />
        <Button title="Go Main Page" onPress={this.buttonHandler} />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSaveUsername: username => dispatch(setUsername(username))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PlaceDetailScreen);
