import React from 'react';
import {Route, Switch} from 'react-router-dom';
import routes from '../configs/routes';
import Header from './AppHeader/Header';
import RecipesPage from './pages/RecipesPage';
import RecipeItemPage from './pages/RecipeItemPage';
import EditHistoryPage from './pages/EditHistoryPage';
import AddNewRecipeItemPage from './pages/AddNewRecipeItem';

const App = () => 
    <div>
      <Header />
      <Switch>
        <Route exact path={routes.RECIPES} component={RecipesPage} />
        <Route path={routes.RECIPES_ITEM} component={RecipeItemPage} />
        <Route path={routes.CHANGE_HISTORY} component={EditHistoryPage} />
        <Route path={routes.NEW_RECIPES_ITEM} component={AddNewRecipeItemPage} />
      </Switch>
      
    </div>;

export default App;