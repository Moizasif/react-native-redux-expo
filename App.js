import { StyleSheet, View } from 'react-native';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import { Provider } from 'react-redux';
import store from './store/store';

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
      <ComponentA />
      <ComponentB />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
