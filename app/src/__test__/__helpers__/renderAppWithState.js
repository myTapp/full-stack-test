import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import App from '../../App'
import createStore from './createStore';
import React from "react";
export default function renderAppWithState(state) {
  const store = createStore(state);
  const wrapper = mount(
    <Provider store={store}>
     <App/>
    </Provider>
  );
  return [store, wrapper];
}