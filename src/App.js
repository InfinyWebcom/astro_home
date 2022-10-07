import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Apdash from "./reducers";
import Routes from "./routers";
import 'react-notifications/lib/notifications.css';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import DateFnsUtils from '@date-io/date-fns';
import 'react-quill/dist/quill.snow.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './index.css'

// create store
const store = createStore(
  Apdash,
  composeWithDevTools()
  // applyMiddleware(...middleware),
  // other store enhancers if any
);

function App() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </MuiPickersUtilsProvider>
  );
}

export default App;
