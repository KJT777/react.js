import {combineReducers, createStore} from 'redux';
import initialStoreData from '../data/dataStore';
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';
import searchReducer from './searchStringRedux';

// define initial state and shallow-merge initial data
// Tuż po importach, deklarujemy początkowy stan aplikacji
const initialState = {
  app: initialStoreData.app,
  lists: initialStoreData.lists,
  columns: initialStoreData.columns,
  cards: initialStoreData.cards,
  searchString: '',  // dodaliśmy searchString do stanu początkowego
};

// define reducers
// lista reducerów zajmujących się poszczególnymi fragmentami stanu aplikacji, 
// Redux zawiera tylko jeden główny reducer, w praktyce rozbija sie go na mniejsze reducery
const reducers = {
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchReducer,   // wskazaliśmy magazynowi, skąd ma wziąć reducer tej właściwości stanu.
};

Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

// merge all reducers, łączymy reducery w jeden główny
const storeReducer = combineReducers(reducers);

// create store
const store = createStore(
  storeReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;