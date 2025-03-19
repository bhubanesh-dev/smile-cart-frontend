import Cart from "components/Cart";
import { PageNotFound } from "components/commons";
import { ReactQueryDevtools } from "react-query/devtools";
import { Route, Switch, Redirect } from "react-router-dom";
import routes from "routes";

import "./App.css";
import Checkout from "./components/Checkout";
import Product from "./components/Product";
import ProductList from "./components/ProductList";

const App = () => (
  <>
    <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    <Switch>
      <Route exact component={Product} path={routes.products.show} />
      <Route exact component={ProductList} path={routes.products.index} />
      <Redirect exact from={routes.root} to={routes.products.index} />
      <Route exact component={Cart} path={routes.cart} />
      <Route exact component={Checkout} path={routes.checkout} />
      <Route component={PageNotFound} path="*" />
    </Switch>
  </>
);
export default App;
