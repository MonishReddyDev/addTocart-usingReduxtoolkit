import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useGetProductsQuery} from '../services/shoppingCartClient';
import CartItem from '../components/cartItem';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/Store';

const ShoppingItems = ({navigation}: any) => {
  const {data, isError, isFetching, isLoading, isSuccess, isUninitialized} =
    useGetProductsQuery();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  cartItems.map(item => item);
  const handleNavigation = () => {
    navigation.navigate('Cart');
  };

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <View style={styles.container}>
      {!isLoading && (
        <>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({item, index}) => {
              return <CartItem item={item} />;
            }}
          />
          <View
            style={{
              height: 70,
              borderWidth: 1,
              justifyContent: 'center',
              position: 'absolute',
              bottom: 20,
              width: '100%',
              borderRadius: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginRight: 20,
                backgroundColor: 'white',
              }}>
              <View
                style={{
                  alignItems: 'center',
                  padding: 10,

                  gap: 10,
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'black', fontWeight: '700'}}>
                  Items added: {cartItems.length}
                </Text>
                <Text style={{color: 'black', fontWeight: '700'}}>
                  Total Price:{totalAmount.toFixed(3)}
                </Text>
              </View>
              <TouchableOpacity
                onPress={handleNavigation}
                style={styles.ViewCart}>
                <Text style={{color: 'black', fontWeight: 'bold'}}>
                  View cart
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 10,
    flex: 1,
  },
  ViewCart: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'green',
    height: 40,
    borderRadius: 10,
    padding: 10,
  },
});

export default ShoppingItems;
