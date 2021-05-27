import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import { Provider } from './context';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Profile from './pages/Profile';
import Layout from './components/Layout';
import MainPage from './pages/MainPage';
import FoodProgress from './pages/FoodProgress';
import DrinkProgress from './pages/DrinkProgress';
import Explore from './pages/Explore';
import ExploreByType from './pages/ExploreByType';
import ExploreFoodIngredients from './pages/ExploreFoodIngredients';
import ExploreDrinksIngredients from './pages/ExploreDrinksIngredients';
import ExploreArea from './pages/ExploreArea';
import NotFound from './pages/NotFound';
import Details from './components/Details';

export default function App() {
  return (
    <Layout>
      <Provider>
        <BrowserRouter>
          <Switch>
            <Route path="/bebidas/:id/in-progress" component={ DrinkProgress } />
            <Route path="/comidas/:id/in-progress" component={ FoodProgress } />
            <Route
              path="/explorar/comidas/ingredientes"
              component={ ExploreFoodIngredients }
            />
            <Route
              path="/explorar/bebidas/ingredientes"
              component={ ExploreDrinksIngredients }
            />
            <Route path="/explorar/comidas/area" component={ ExploreArea } />
            <Route path="/explorar/bebidas/area" component={ ExploreArea } />
            <Route
              path="/comidas/:id"
              render={ (props) => <Details { ...props } /> }
            />
            <Route
              path="/bebidas/:id"
              render={ (props) => <Details { ...props } /> }
            />
            <Route path="/explorar/bebidas" component={ ExploreByType } />
            <Route path="/explorar/comidas" component={ ExploreByType } />
            <Route path="/explorar" component={ Explore } />
            <Route path="/comidas" component={ MainPage } />
            <Route path="/bebidas" component={ MainPage } />
            <Route path="/perfil" component={ Profile } />
            <Route path="/receitas-feitas" component={ DoneRecipes } />
            <Route path="/receitas-favoritas" component={ FavoriteRecipes } />
            <Route exact path="/" component={ Login } />
            <Route component={ NotFound } />
          </Switch>
        </BrowserRouter>
      </Provider>
    </Layout>
  );
}
