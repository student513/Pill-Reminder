import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {SetTypeModal} from 'components/Modal';
import {MyText} from 'components/MyText';
import {observer} from 'mobx-react';
import {controlModalStore} from 'store/ControlModal';
import {MyCard} from 'components/MyCard';
import {pillListStore} from 'store';

interface IProps {
  navigation: any;
}

@observer
class Reminder extends Component<IProps, {}> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            controlModalStore.toggleSetTypeModalVisible();
          }}>
          <MyText style={{fontSize: 30}}>Add</MyText>
        </TouchableOpacity>

        {pillListStore.CardList.map((pill) => (
          <MyCard name={pill.Name} dosage={pill.Dosage} />
        ))}

        <SetTypeModal
          isVisible={controlModalStore.setTypeModalVisible}
          onSwipeComplete={() => controlModalStore.toggleSetTypeModalVisible()}
          swipeDirection={['down']}
          style={styles.modal}
          backdropOpacity={0.5}
          onBackdropPress={() => controlModalStore.toggleSetTypeModalVisible()}
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});

export default Reminder;
