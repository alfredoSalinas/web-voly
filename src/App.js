import logo from './logo.svg';
import './App.css';
import { db } from './services/firebase';
import { Container } from 'react-bootstrap';
import { PublicRoutes } from './routes/publicRoutes';
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import authReducer from './store/reducer/auth.reducer';

const allReducers = combineReducers({
  auth : authReducer,
})

const middleWares = [ReduxThunk]
const rootReducer = (state, action)=>{
  return allReducers(state, action)
}

function App() {
  const store = createStore(
    rootReducer,
    applyMiddleware(...middleWares)
  )
  return (
    <Provider store={store}>
      <PublicRoutes />
    </Provider>
  );
}

export default App;
