import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/Store';
import CartItem from '../components/cartItem';

const ShowCartItems = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <View style={styles.container}>
      {cartItems.length === 0 ? (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Text>Your cart is empty</Text>
        </View>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CartItem item={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});

export default ShowCartItems;
