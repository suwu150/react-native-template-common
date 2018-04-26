import React from 'react';
import PropTypes from 'prop-types';
import {
  ViewPropTypes,
  TextInput,
  View,
  Text,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class IconTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }

  static propTypes = {
    containerStyle: ViewPropTypes.style,
    iconStyle: ViewPropTypes.style,
    inputStyle: TextInput.propTypes.style,
    inputType: PropTypes.string,
    placeholder: PropTypes.string,
    placeholderTextColor: PropTypes.string,
    maxLength: PropTypes.number,
    value: PropTypes.string,
    field: PropTypes.string,
    onFocus: PropTypes.func,
    onLayout: PropTypes.func,
    icon: PropTypes.any,
    onChangeText: PropTypes.func,
    defaultValue: PropTypes.string,
    imageSource: PropTypes.any,
    secureTextEntry: PropTypes.bool,
    clearButtonMode: PropTypes.oneOf(['never', 'while-editing', 'unless-editing', 'always']),

    iconName: PropTypes.string,
    iconSize: PropTypes.number
  };

  static defaultProps = {
    placeholder: 'placeholder',
    placeholderTextColor: '#c7d2da',
    focusColor: '#ff0000',
    inputType: 'default',
    secureTextEntry: false,
    clearButtonMode: 'never',
    iconSize: 30,
    iconName: 'user'
  };

  _onChangeText = (field, text) => {
    if (!!this.props.onChangeText) {
      this.props.onChangeText(field, text);
    }
    this.setState({ value: text });
  };

  renderIcon = () => {
    if (this.props.imageSource) {
      return (
        <Image
          style={[{ width: this.props.iconSize, height: this.props.iconSize }, this.props.iconStyle]}
          source={this.props.imageSource}
          resizeMode="contain"
        />
      );
    }

    if (this.props.iconName) {
      return (
        <View
          style={[{ width: this.props.iconSize, height: this.props.iconSize }, this.props.iconStyle,
        { justifyContent: 'center', alignItems: 'center' }]}
        >
          <Icon
            name={this.props.iconName}
            size={this.props.iconSize}
            color="white"
          />
        </View>
      );
    }

    return (
      <View
        style={[{ width: 30, height: 30 }, this.props.iconStyle,
        { backgroundColor: '#c7d2da', borderRadius: 15, justifyContent: 'center', alignItems: 'center' }]}
      >
        <Text>i</Text>
      </View>
    );
  };

  render() {
    return (
      <View
        style={[
          { height: 40, backgroundColor: '#fff' },
          this.props.containerStyle,
          { flexDirection: 'row', alignItems: 'center' }]}
      >
        {this.renderIcon()}
        <TextInput
          {...this.props}
          style={[
            { fontSize: 16, flex: 1, marginLeft: 10, color: 'white' },
            this.props.inputStyle
          ]}
          underlineColorAndroid="transparent"
          onChangeText={(text) => this._onChangeText(this.props.field, text)}
          maxLength={this.props.maxLength}
          defaultValue={this.props.defaultValue}
          secureTextEntry={this.props.secureTextEntry}
          autoCorrect={false}
          autoCapitalize="none"
          value={this.state.value}
          placeholder={this.props.placeholder}
          placeholderTextColor={this.props.placeholderTextColor}
          clearButtonMode={this.props.clearButtonMode}
          keyboardType={this.props.inputType}
          onFocus={this.props.onFocus}
          onLayout={this.props.onLayout}
        />
      </View>
    );
  }
}
