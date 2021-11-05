import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Pokedex from './container/pokedex';
import PokemonDetails from './container/pokemonDetails';
import Navigator from './components/navigator';
import {Provider} from 'react-redux'
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Navigator />
      <Route path='/' component={Pokedex} exact></Route>
      <Route path='/pokemon/:id' component={PokemonDetails} exact></Route>
    </Router>
    </Provider>
  );
}

export default App;
