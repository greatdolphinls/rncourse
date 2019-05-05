import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import { connect } from "react-redux";

import { setUsername } from "../../store/actions/frontend-state-actions/profile";

class FindPlaceScreen extends Component {
  render() {
    return (
      <View>
        <Text>Find Place Screen</Text>
        <Text>{this.props.username}</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => this.props.onSaveUsername(text)}
          value={this.props.username}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.profile.username
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSaveUsername: username => dispatch(setUsername(username))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FindPlaceScreen);
