import React, { Component } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { connect } from "react-redux";

import { setUsername } from "../../store/actions/frontend-state-actions/profile";

class FindPlaceScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }
  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "left"
        });
      }
    }
  };

  buttonHandler = () => {
    this.props.navigator.push({
      screen: "awesome-places.PlaceDetailScreen",
      title: "Detail page",
      passProps: {
        selectName: "arthur"
      }
    });
  };
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
        <Button title="Go Detail" onPress={this.buttonHandler} />
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
