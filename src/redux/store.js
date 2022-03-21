import { compose, applyMiddleware, createStore } from "redux";
import rootReducers from "./reducer";
import middleware from "./middleware";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { Store } from "@material-ui/icons";
import services from "../services";

const persistConfig = {
  key: "persistData",
  storage,
};
const rootPersistReducer = persistReducer(persistConfig, rootReducers);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(
  rootPersistReducer,
  composeEnhancers(applyMiddleware(...middleware.map((f) => f(services))))
);

const persistor = persistStore(store);
export default store;
export { persistor };
