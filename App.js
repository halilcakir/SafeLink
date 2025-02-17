import * as React from 'react';
import RootNativigation from './src/navigation/rootNativigation';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';



export default function App() {
  return (
  <Provider store={store}>
      <RootNativigation/>
  </Provider>)
} 