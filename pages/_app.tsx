import "../styles/globals.css";
import "../styles/semantic-ui/semantic.min.css";
import { Provider } from "react-redux";
import { compose, createStore } from "redux";
import { applyMiddleware } from "redux";
import reducers from "../redux/reducers/reducers";
import reduxThunk from "redux-thunk";

//ReduxDevTools

const composeEnhancers =
  typeof window !== "undefined"
      // @ts-ignore
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
