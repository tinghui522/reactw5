import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/Cart'

import { StoreProvider } from "./store";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart}/>
          <Route exact path="/:pageName" component={Home} />
          <Route path="/product/:productId" component={Product} />
        </Switch>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
