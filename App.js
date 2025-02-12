import * as React from 'react';
import RootNativigation from './src/components/navigation/rootNativigation';
import { Provider } from 'react-redux';
import { store } from './src/components/redux/store';



export default function App() {
  return (
  <Provider store={store}>
      <RootNativigation/>
  </Provider>)
} 