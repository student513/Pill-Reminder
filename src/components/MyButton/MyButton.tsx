/* eslint-disable react-native/no-inline-styles */
import React, {PureComponent} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Switch,
  TouchableOpacityProps,
  SwitchProps,
  Platform,
} from 'react-native';
import {COLOR, POSITION} from 'helper';
import Icon from 'react-native-vector-icons/Ionicons';
import {MyText} from 'components/MyText';

interface MyTableButtonProps extends TouchableOpacityProps {
  icon?: string;
  title: string;
  onPress: any;
  remark?: string;
  checked?: boolean;
}

interface MyToggleButtonProps extends SwitchProps {
  icon: string;
  title: string;
  description?: string;
}

export class MyTableButton extends PureComponent<MyTableButtonProps> {
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.onPress()}>
        <View style={[styles.buttonContainer, this.props.style]}>
          {this.props.icon ? (
            <Icon name={this.props.icon} size={25} style={styles.icon} />
          ) : (
            <View />
          )}
          <MyText style={{paddingVertical: 17}}>{this.props.title}</MyText>
          <MyText
            style={
              this.props.icon ? styles.remark : styles.remarkWithoutChevron
            }>
            {this.props.remark}
          </MyText>
          {this.props.icon ? (
            <Icon
              name="chevron-forward-outline"
              size={25}
              style={styles.chevron}
            />
          ) : (
            <View />
          )}
          {this.props.checked ? (
            <Icon name="checkmark-outline" size={25} style={styles.chevron} />
          ) : (
            <View />
          )}
        </View>
      </TouchableOpacity>
    );
  }
}

export class MyToggleButton extends PureComponent<MyToggleButtonProps> {
  render() {
    return (
      <View>
        <View style={[styles.buttonContainer, this.props.style]}>
          <Icon name={this.props.icon} size={25} style={styles.icon} />
          <MyText style={{paddingVertical: 17}}>{this.props.title}</MyText>
          <View style={styles.switch}>
            <Switch {...this.props} />
          </View>
        </View>
        {this.props.description ? (
          <MyText style={styles.notice}>{this.props.description}</MyText>
        ) : (
          <View />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#F3F3F3',
    paddingLeft: 15,
    display: 'flex',
    flexDirection: 'row',
  },
  remark: {
    ...Platform.select({
      ios: {
        paddingTop: 17,
        fontSize: 17,
      },
      android: {
        fontSize: 10,
        paddingTop: 25,
      },
    }),
    position: 'absolute',
    right: 40,
    color: COLOR.FONT_GREEN,
  },
  remarkWithoutChevron: {
    ...Platform.select({
      ios: {
        fontSize: 17,
        paddingTop: 17,
      },
      android: {
        fontSize: 10,
        paddingTop: 25,
      },
    }),
    position: 'absolute',
    right: 20,
    color: COLOR.FONT_GREEN,
  },
  icon: {
    ...Platform.select({
      ios: {
        paddingTop: 15,
      },
      android: {
        paddingTop: 20,
      },
    }),
    paddingRight: 5,
  },
  chevron: {
    ...Platform.select({
      ios: {
        paddingTop: 15,
      },
      android: {
        paddingTop: 20,
      },
    }),
    color: COLOR.FONT_GREEN,
    position: 'absolute',
    right: POSITION.CHEVRON,
  },
  notice: {
    ...Platform.select({
      ios: {
        fontSize: 14,
      },
      android: {
        fontSize: 11,
      },
    }),
    color: '#5B5B5B',
    marginBottom: 25,
    paddingLeft: 2,
  },
  switch: {
    ...Platform.select({
      ios: {
        paddingTop: 13,
      },
      android: {
        paddingTop: 20,
      },
    }),
    position: 'absolute',
    right: POSITION.SWITCH,
  },
});
