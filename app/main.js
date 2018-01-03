'use strict';

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';
import store from './store';

//THE WRAPPER, PROVIDER, & ROUTER
render (
      <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>,
  document.getElementById('main')
)
