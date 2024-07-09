import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {DeleteItem, addItem, decreseItemQuantity} from '../redux/cartSlice';
import {RootState} from '../redux/Store';

const cartItem = ({item}: any) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addItem(item));
  };

  const handleRemove = () => {
    if (item.quantity != 1) {
      dispatch(decreseItemQuantity(item));
    } else {
      dispatch(DeleteItem(item.id));
    }
  };

  const AddItemsIntoCart = () => {
    return (
      <TouchableOpacity
        onPress={addToCartHandler}
        activeOpacity={0.5}
        style={{
          backgroundColor: 'green',
          padding: 8,
          borderRadius: 10,
          width: 30,
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>+</Text>
      </TouchableOpacity>
    );
  };

  const RemoveItemsFromCart = () => {
    return (
      <TouchableOpacity
        onPress={handleRemove}
        activeOpacity={0.5}
        style={{
          backgroundColor: 'green',
          padding: 8,
          borderRadius: 10,
          width: 30,
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>-</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Image source={{uri: item.image}} style={{height: '100%', width: 100}} />
      <View style={{paddingLeft: 20, gap: 5, borderWidth: 0}}>
        <Text numberOfLines={2} style={{color: 'black'}}>
          {item.title}
        </Text>
        <Text style={{color: 'green'}}> $ {item.price.toFixed(2)}</Text>
        {item.quantity ? (
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <RemoveItemsFromCart />
            <Text style={{color: 'black'}}>{item.quantity}</Text>
            <AddItemsIntoCart />
          </View>
        ) : (
          <TouchableOpacity
            onPress={addToCartHandler}
            activeOpacity={0.5}
            style={{
              backgroundColor: 'green',
              padding: 8,
              borderRadius: 10,
              width: 100,
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>AddtoCart</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flexDirection: 'row',
    height: 120,

    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
});

export default cartItem;
